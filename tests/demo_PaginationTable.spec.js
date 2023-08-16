const{test,expect}=require('@playwright/test')

test('demo Pagination Table',async({page})=>{
    // open url
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    const tablename=await page.locator('#productTable')
    
    // to print number of columns in table
    const colmns=await tablename.locator('thead tr th')
    console.log('Number of coloumns',await colmns.count())

    // to print Number of rows in table
    const rows=await tablename.locator('tbody tr')
    console.log('Number of rows',await rows.count())
    
    // 1) selecting single product 

    /*const matchedRow =rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'

    })
    await matchedRow.locator('input').check()
    
    // 2) selecting multiple products by re-usable function
    await selectProduct(rows,page,'Product 1')
    await selectProduct(rows,page,'Product 3')
    await selectProduct(rows,page,'Product 5')

    await page.waitForTimeout(5000)
    */

    // 3) print all product details using for loop
    /*
    for(let i=0;i<await rows.count();i++)
    {
    const row= rows.nth(i);
    const tds=row.locator('td')
    
        for(let j=0 ;j<await tds.count()-1;j++)
        {
        console.log(await tds.nth(j).textContent())
        }
    }
    */

    // read data from all the pages in the table
    const pages= await page.locator('pagination li a')
    console.log('Number of pages in the table:', await pages.count())

    for(let p=0 ;p<await pages.count(); p++)
    {
        if(p>=0)
        {
            await pages.nth(p).click()
        }
        for(let i=0;i<await rows.count();i++)
        {
            const row= rows.nth(i);
            const tds=row.locator('td')
    
            for(let j=0 ;j< await tds.count()-1;j++)
            {
                console.log(await tds.nth(j).textContent())
            }
        }
        await page.waitForTimeout(5000)
    }
    await page.waitForTimeout(3000)
})
    /*
    async function selectProduct(rows, page, name)
    {
        const matchedRow=rows.filter({
        has: page.locator('td'),
        hasText: name
        })
        await matchedRow.locator('input').check()

    }
    */
    
