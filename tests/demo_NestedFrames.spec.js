const{test,expect}=require('@playwright/test')

test('Demo NestedFrames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    frame3.type("#id3 > div > input[type=text]",'Hello')

    await page.waitForTimeout(5000)
  
    //nested frames
    const childframe = await frame3.childFrames()
    await childframe[0].locator("//div[@id='i5']//div[@class='AB7Lab Id5V1']").check()
    await page.waitForTimeout(5000)
})