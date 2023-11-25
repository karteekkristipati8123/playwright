import {test,expect} from '@playwright/test';

test('Test Amazon app', async ({ page }) =>{
    await page.goto('https://www.amazon.in/ap/signin?openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fyourstore%2Fhome%3Fpath%3D%252Fgp%252Fyourstore%252Fhome%26useRedirectOnSuccess%3D1%26signIn%3D1%26action%3Dsign-out%26ref_%3Dnav_AccountFlyout_signout&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
    await page.locator('#ap_email').fill('karthikkristipati123@gmail.com');
    await page.locator("//div[@class='a-section']//span//input").click();
    await page.locator('#ap_password').fill('Karthik@amn8123');
    await page.locator('#signInSubmit').click();
    await page.waitForLoadState();
    await page.locator('#twotabsearchtextbox').fill('Laptops');
    await page.locator('#nav-search-submit-button').click();
    await page.waitForTimeout(10000);

    
})
