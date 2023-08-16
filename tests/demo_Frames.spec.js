const{test,expect}=require('@playwright/test')

test('demo frames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //total number of frames
    // const allframes =await page.frames()
    // console.log('Total number of frames',allframes.length);

    // approach 1 using name or URL
    // const frame1= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    // frame1.fill("input[name='mytext1']",'Hello');
    // await page.waitForTimeout(5000)

    //approach 2: using frame locator
    const inputbox= await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
    inputbox.type('Hello')
    await page.waitForTimeout(5000)



})