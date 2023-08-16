const {test,expect}=require('@playwright/test');

test('demoRadiobutton',async({page})=>{
    await page.goto('https://omayo.blogspot.com/')
    await page.locator('#radio1').check()
    await expect(await page.locator('#radio1')).toBeChecked()
    await expect(await page.locator('#radio1').isChecked).toBeTruthy()
    await page.waitForTimeout(5000);



})
