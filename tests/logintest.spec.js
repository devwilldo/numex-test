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

                        await page.goto('https://test-numex-service.azurewebsites.net/');
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
                await page.goto('/');
                await page.locator('p.mt-2.text-center.text-sm.text-gray-400').click();
                //await page.locator("//button[@id='signIn']").click();
                
                // Use XPath to locate the first grid item
const gridItem = await page.locator("//body/div[@id='root']/div[@class='h-screen w-full bg-[#f1f5f9]']/div[@class='min-h-full flex flex-col p-4 bg-[#f1f5f9]']/div[contains(@class,'flex flex-col flex-grow items-center justify-center')]/div[@class='max-w-7xl mx-auto py-20 px-4 bg-[#f1f5f9] sm:px-6 lg:px-8']/div[@class='mt-6 grid md:grid-cols-2 lg:space-y-0 lg:grid-cols-4 gap-4']/div[1]");

// Highlight it
await page.evaluate((element) => {
  element.style.border = '3px solid red';
  element.style.backgroundColor = '#fff89a';
  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}, await gridItem.elementHandle());
            }
        )
    }
)
