const{test,expect}=require('@playwright/test')

test('Demo DatePicker',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //date picker
    const year="2024"
    const month="March"
    const date="30"

    //to open calendar
    await page.click('#datepicker')

    while(true)
    {
        const currentYear=await page.locator("//span[@class='ui-datepicker-year']").textContent()
        const currentMonth=await page.locator('/html/body/div[5]/div/div/span[1]').textContent()
        
        if(currentYear==year && currentMonth==month)
        {
            break;
        }

        await page.locator('[title="Next"]')
    }

})