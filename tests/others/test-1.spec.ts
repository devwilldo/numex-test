import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.numex.app/');
  await page.goto('https://numex-staging.azurewebsites.net/#error=login_required&state=51e75226-5505-40c1-94b6-14e9502f56ce');
  await page.goto('https://numex-staging.azurewebsites.net/');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.goto('https://numex-staging.azurewebsites.net/#error=login_required&state=7397a445-daf6-4ef3-b0ae-b9858f32228f');
  await page.goto('https://numex-staging.azurewebsites.net/');
  await page.getByRole('button', { name: 'Sign in' }).click();
});