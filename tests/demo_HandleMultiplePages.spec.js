const{test,expect, chromium}=require('@playwright/test')

test.skip('demo on multiple pages',async({page})=>{
    const browser=await chromium.launch()
    const context= await browser.newContext()

    const page1=await context.newPage()
    const page2=await context.newPage()

    const allpages=context.pages()
    console.log("Number of Pages created:",allpages.length)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForLoadState(5000)
    await expect(page1).toHaveTitle('OrangeHRM')
    
    await page2.goto("https://www.orangehrm.com/")
    await page.waitForLoadState(5000)
    await expect(page1).toHaveTitle('OrangeHRM HR Software | Free & Open Source HR Software | HRMS | HRIS | OrangeHRM')
})

test('demo on multi pages',async()=>{
    const browser=await chromium.launch()
    const context= await browser.newContext()

    const page1=await context.newPage()
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    await expect(page1).toHaveTitle('OrangeHRM')

    const pagePromise = context.waitForEvent('page')
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()

    const newPage= await pagePromise;
    await expect(newPage).toHaveTitle("OrangeHRM HR Software | Free & Open Source HR Software | HRMS | HRIS | OrangeHRM")

    await page1.waitForTimeout(3000)
    await newPage.waitForTimeout(3000)
    
    
    
    
})