const{test,expect}=require('@playwright/test')
/*
test.skip('Demo on Partial Page ScreenShot',async({page})=>{
    await page.goto('https://www.foundit.in/')
    await page.screenshot({path : 'ScreenShots/'+Date.now()+'HomePage.png'})
})

test.skip('Demo on Full page ScreenShot',async({page})=>{
    await page.goto('https://www.foundit.in/')
    await page.screenshot({path : 'ScreenShots/'+Date.now()+'FullPage.png',fullPage:true})
})
*/

test('Demo on Element ScreenShot',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("//button[@type='submit']").screenshot({path : 'ScreenShots/'+Date.now()+'OrangeHRMLogo.png'})
})