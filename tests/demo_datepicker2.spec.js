const{test,expect}=require('@playwright/test')

test('Demo datepicker',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Datepicker.html')
    await page.evaluate(expression,"documnet.getElementById('datepicker1').value='11/08/2023'");
    await page.waitForTimeout(5000)

})