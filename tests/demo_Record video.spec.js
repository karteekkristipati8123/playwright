const{test,expect}=require('@playwright/test')

test('Record Video', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('karthik reddy');
    await page.locator('#loginpassword').fill('kk');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.locator("//a[@id='logout2']")).toBeVisible()
  });