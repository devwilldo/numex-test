const {test,expect} = require('@playwright/test');
import exp from 'constants';
import {} from '../utils/constants';

test.describe('LOGIN PROCEDURE TEST',()=>
    {
        test.describe('SIGN IN PAGE UI CHECK',()=>
            {
                test('Check If login Button Works',async({page})=>
                    {
                        /* await page.goto('https://numex.app');
                        await expect(page).toHaveTitle("Numex App – Welcome");
                        //const loginlink = await page.locator('//a[text()="Login"]');
                        //await loginlink.click();
                        //'//a[text()="Login"]'
                       
                        await page.click('#menu-item-512');
                        
                        // Wait for both operations to complete
                        
                        console.log(await page.title());
                        
                        await page.getByRole('button', { name: 'Sign in' }).click();
                        expect(page.toHaveTitle('Sign In to Numex'));
                        console.log(page.title()); */

                        await page.goto('https://numex.app');
                        await expect(page).toHaveTitle("Numex App – Welcome");
                        const gs = await page.getByRole('link', {name: 'Get Started'});
                        gs.click();
                        await expect(page).toHaveTitle("Numex");
                        await page.getByRole('button', { name: 'Sign in' }).click();
                        
                        //await page.getByRole('button', { name: 'Sign in' }).click();
                        await expect(page).toHaveTitle('Sign in to Numex Staging');
                        console.log(await page.title());
                        await page.getByLabel('Email').fill('kshugah1@gmail.com');
                        await page.getByLabel('Password').fill('1');
                        await page.getByRole('button', { name: 'Sign In' }).click();
                        await expect(page.getByText('companies')).toBeVisible();
                        //getByText('Axon17381 Univeristy Avenue,')
                        await page.getByRole('button', { name: 'Select' }).click();
                        const location = page.locator('div.text-xs.text-gray-500');
                        //await expect(location).toHaveText('1 University Avenue, Berekuso');
                        await expect(page.getByText('Axon17381 Univeristy Avenue,')).toBeVisible();
                        const buttonLabel = page.locator('label.btn btn-sm btn-circle avatar bg-blue-500 border-blue-400 hover:bg-blue-500 hover:border-blue-400');
                        await expect(buttonLabel).toBeVisible();
                        //label[class='btn btn-sm btn-circle avatar bg-blue-500 border-blue-400 hover:bg-blue-500 hover:border-blue-400']

                        
                        
                    }
                );
            }
        );
        test('CHECK IF LOGIN PAGE IS ACCESSIBLE ',async({page})=>
            {
                
            }
        )
    }
)
