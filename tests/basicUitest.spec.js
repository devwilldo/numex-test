const {test,expect} = require('@playwright/test');
const { Sign } = require('crypto');

// begin test
test.describe('Basic Ui',()=>
    {
        test.describe('Check Homepage',()=>
            {
                test('Welcome Page Accessible',async({page})=>
                    {
                       await page.goto('https://numex.app');
                       const res = console.log(await page.title());
                       await expect(page).toHaveTitle("Numex App – Welcome");
  
                    }
                );
                test('Get text',async({page})=>
                    {
                        
                        await page.goto('https://numex.app');
                        await page.getByRole('link', { name: 'Get Started' }).click();
                        console.log(await page.title());
                        await expect(page).toHaveTitle("Numex");

                        
                    }
                )
                test('Sign In Page',async({page})=>
                    {
                        await page.goto('https://numex.app');
                        await expect(page).toHaveTitle("Numex App – Welcome");
                        const gs = await page.getByRole('link', {name: 'Get Started'});
                        gs.click();
                        await expect(page).toHaveTitle("Numex");
                        await page.getByRole('button', { name: 'Sign in' }).click();
                        
                        //await page.getByRole('button', { name: 'Sign in' }).click();
                        await expect(page).toHaveTitle('Sign in to Numex Staging');
                        console.log(await page.title());      
                    }
                );
                test('Test Value',async({page})=>
                    {

                    }
                );
            }
        )
    }
  
  );