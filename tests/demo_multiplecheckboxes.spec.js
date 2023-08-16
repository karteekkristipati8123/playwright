const{test,expect}=require('@playwright/test')

test('demo checking multiple checkboxes',async({page})=>{
    await page.goto('https://www.hyrtutorials.com/p/basic-controls.html')
    test.setTimeout(60000);
    const checkboxlocators=["#englishchbx","#hindichbx","#frenchchbx"];

    for(const chkbxlocator of checkboxlocators)
    {
        await page.locator(chkbxlocator).check();  
    }

    await page.waitForTimeout(5000)

    for(const chkbxlocator of checkboxlocators)
    {
        if(await page.locator(chkbxlocator).isChecked())
        {
            await page.locator(chkbxlocator).uncheck();
        }
        
    }
    await page.waitForTimeout(5000)
})