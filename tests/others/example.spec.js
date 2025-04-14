// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

/* test.describe('Basic Ui',()=>
  {
      test.describe('Check Homepage',()=>
          {
              test('Welcome Page Accessible',async({page})=>
                  {
                     await page.goto('https://numex.app');
                     const res = console.log(await page.title());
                     await expect(page).toHaveTitle("Numex App – Welcome");

                  }
              )
          }
      )
  }

); */
