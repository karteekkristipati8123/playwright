const{test,expect}=require('@playwright/test')

test('MouseHover',async({page})=>{
    await page.goto('https://demo.opencart.com/')
    const desktop=await page.locator("//a[normalize-space()='Desktops']")
    const macbook=await page.locator("//a[normalize-space()='Mac (1)']")

    //Mouse Hover
    desktop.hover()
    macbook.hover()

    await page.waitForTimeout(5000)
    
})