const{test,expect}=require('@playwright/test')

test.skip('File upload',async({page})=>{
    await page.goto('https://www.foundit.in/')
    await page.waitForSelector('.mqfihd-upload');
    await page.locator('.mqfihd-upload').click();

    await page.locator('#file-upload').setInputFiles('tests/uploadFiles/Java notes.txt')

    await page.waitForTimeout(10000)

})

test.only('Upload multiple files',async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator("//input[@id='filesToUpload']")
    .setInputFiles(['tests/uploadFiles/Java notes.txt'
                    ,'tests/uploadFiles/Appium notes.txt']);
    await page.waitForTimeout(5000)

})