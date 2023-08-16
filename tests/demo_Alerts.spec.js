const{test,expect}=require('@playwright/test')

test.skip('Demo Alerts Simple Alert',async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })
    await page.locator("button[onclick='myFunctionAlert()']").click();
    page.waitForTimeout(5000);
})

test.skip('Demo Alerts Conform Alert',async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
    })
    await page.locator("button[onclick='myFunctionConfirm()']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');
    page.waitForTimeout(5000);
})

test('Demo Alerts Prompt Alert',async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Karthik');
    })
    await page.locator("//button[@onclick='myFunctionPrompt()']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Karthik! How are you today?');
    await page.waitForTimeout(5000);
})