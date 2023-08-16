const{test,expect}=require('@playwright/test')

test('demo Checkbox',async({page})=>{
    await page.goto('https://omayo.blogspot.com/')
    test.setTimeout(60000);
    await page.check('//div[@id="HTML33"]//input[1]')
    expect(await page.locator('//div[@id="HTML33"]//input[1]')).toBeChecked();
    expect(await page.locator('//div[@id="HTML33"]//input[1]').isChecked()).toBeTruthy()

})