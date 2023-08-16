const{test,expect}=require('@playwright/test');

test('demo input box',async({page})=>{
    await page.goto('https://www.hyrtutorials.com/p/basic-controls.html')
    await page.waitForTimeout(10000);
    await expect(await page.locator('//input[@id="firstName"]')).toBeVisible()
    await expect(await page.locator('//input[@id="firstName"]')).toBeEmpty()
    await expect(await page.locator('//input[@id="firstName"]')).toBeEditable()
    await expect(await page.locator('//input[@id="firstName"]')).toBeEnabled()
    
    await page.locator('//input[@id="firstName"]').fill('Kristipati')
    await page.waitForTimeout(5000);
    await page.locator('#lastName').fill('Reddy')

})