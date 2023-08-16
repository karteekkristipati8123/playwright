const{test,expect} = require('@playwright/test')


test('Locators',async({page})=>{
    await page.goto("https://dev.demoblaze.com/");
    //click on login button
    await page.click('#login2')
    await page.locator('#loginusername').fill('karthik');
    await page.type('#loginpassword','kk');
    await page.click("//button[@onclick='logIn()']");
    const logoutlink =await page.locator("//a[@id='logout2']");
    await expect(logoutlink).toBeVisible();
    await page.close();

})