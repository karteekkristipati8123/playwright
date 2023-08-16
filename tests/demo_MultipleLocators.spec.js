const{test,expect}=require('@playwright/test');

test('Demolocatingmultiplelocators',async({page})=>{
    await page.goto('https://dev.demoblaze.com/')
    
    const links =await page.$$('a');
    for (const link of links)
    {
        const linktext = link.textContent();
        console.log(linktext);
    }
        
    
})