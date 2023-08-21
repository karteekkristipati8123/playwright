import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.locator('form i').first().click();
  await page.getByRole('option', { name: 'ESS' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('button', { name: 'Apply Leave' }).click();
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.locator('span').filter({ hasText: 'venky venktesg' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});