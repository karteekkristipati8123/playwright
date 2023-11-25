import { test, expect } from '@playwright/test';

test('test alibaba login ', async ({ page }) => {
  test.slow();
  await page.goto('https://passport.alibaba.com/icbu_login.htm?spm=a2700.product_home_l0.0.0.2ce267afuc62wz&return_url=https%3A%2F%2Fwww.alibaba.com');
  // await page.locator("a[target='_blank'][href='https://i.alibaba.com/?spm=a2700.product_home_l0.home_header.4.2ce267afuc62wz']").click();
  // await page.getByRole('link', { name: 'Sign in' }).click();
  await page.locator('#fm-login-id').fill('karthikkristipati123@gmail.com')
  await page.locator('#fm-login-password').fill('Karthik@alibaba');

  await page.locator("//input[@id='fm-login-submit']").click();

  
});