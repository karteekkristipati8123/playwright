const{test,expect}=require('@playwright/test')

test('KeyBoard Actions',async({page})=>{
    await page.goto('https://gotranscript.com/text-compare#:~:text=GoTranscript%20offers%20everyone%20a%20free,return%20a%20percentage%20of%20similarity.')

    await page.fill("//textarea[@placeholder='Paste one version of the text here.']",'Welcome to Playwright')

    await page.keyboard.press('Meta+A')

    await page.keyboard.press('Meta+C')

    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    await page.keyboard.press('Meta+V')

    await page.waitForTimeout(5000)
})