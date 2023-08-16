const{test,expect} = require('@playwright/test');


test('demosTest',async({page})=>{
await page.goto('https://dev.demoblaze.com/')
const pageTitle=page.title();
console.log('Page Title is ',pageTitle);
await expect(page).toHaveTitle('STORE');
 const pageUrl = page.url();
 console.log('Page URL',pageUrl);
await expect(page).toHaveURL('https://dev.demoblaze.com/');
const logo=await page.close();  
await expect(page).logo.toBe
})
 