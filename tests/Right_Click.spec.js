const{test,expect} = require("@playwright/test");

test('Right cick test', async ({ page }) =>{
    test.slow();

    await page.goto('https://demoqa.com/buttons')
    const button = await page.locator('#rightClickBtn');
    await button.click({button : 'right'});
    await page.waitForTimeout(6000);
})