const{test,expect}=require('@playwright/test')

test('Double Click',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const dbbutton=await page.locator("//button[normalize-space()='Copy Text']")

    dbbutton.dblclick()
    
    const f2=await page.locator('#field2')
    await expect(f2).toHaveValue('Hello World!')

    await page.waitForTimeout(5000)
})