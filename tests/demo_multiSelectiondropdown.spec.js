const{test,expect}=require('@playwright/test')

test('demo Selecting of multioptions dropdown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.selectOption('#colors',['Green', 'Red', 'Blue'])
    
    // Assertions
    // 1) check number of options in drop down menu
    // const options= await page.locator('#colors option')
    // await expect(options).toHaveCount(5)

    // 2) check number od options in drop down menu using js array
    // const options = await page.$$('#colors option')
    // await expect(options.length).toBe(5);

    // check presence of value in drop down menu
    //  const content=await page.locator('#colors').textContent()
    //  await expect(content.includes('Blue')).toBeTruthy();

     // negitive assertions
     const content=await page.locator('#colors').textContent()
     await expect(content.includes('Black')).toBeFalsy();
})
