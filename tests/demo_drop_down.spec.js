const{test,expect}=require('@playwright/test')

test('demo drop-down',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    test.setTimeout(60000);
    // select option by label
    // await page.locator('#country').selectOption({label:'India'});

    // select option by visible text
    // await page.locator('#country').selectOption('India');

    // select option by value
    //  await page.locator('#country').selectOption({value: 'uk'});

    // select option by index
    // await page.locator('#locator').selectOption({index: 1})

    // check number of options in dropdown  Approach 1
    // const options= await page.locator('#country option')
    // await expect(options).toHaveCount(10);

    // check number of options in dropdown  Approach 2
    // const menuoptions = await page.$$('#coutry option')
    // console.log("Number of options:",menuoptions.length)
    // await expect(menuoptions.length).toBe(10);

    // check presence of value in the dropdown  -Approach 1
    // const content = await page.locator('#country').textContent()
    // await expect(content.includes('India')).toBeTruthy();

    // // check presence of value in the dropdown  -Approach 2 using for loop
    // const options= await page.$$('#country option')
    // let status =false

    // for(const option of options)
    // {
    //   let value =await option.textContent()
    //   if(value.includes('france'))
    //   {
    //     status=true;
    //     break;
    //   }
         

    // }

    const options= await page.$$('#country option')


    for(const option of options)
    {
      let value =await option.textContent()
      if(value.includes('france'))
      {
       await page.selectOption('#country',value)
        break;
      }
         

    }

   await page.waitForTimeout(5000)    
    
})