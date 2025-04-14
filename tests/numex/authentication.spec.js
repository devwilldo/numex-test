import { test, expect } from '@playwright/test';
import { baseUrl, credentials, Credentials } from '../../utils/helpers.js';
const signInurl = 'https://axonauth.azurewebsites.net/auth/realms/numexdev/protocol/openid-connect/auth?client_id=numex&redirect_uri=https%3A%2F%2Ftest-numex-service.azurewebsites.net%2F&state=a3346baf-f5e5-4770-90e3-59c721441a69&response_mode=fragment&response_type=code&scope=openid&nonce=3656a5bc-0f41-4d13-a089-0f50c4386e7a'
test.describe('All Login tests', () => {
   test.describe('Login Page Process Validation', () => {
      test('Successful Login', async ({ page }) => {
         await page.goto(`${baseUrl}`);
         await page.click('#signIn');
         const signIn_text = page.locator('#kc-page-title');
         await expect(signIn_text).toContainText('Sign in to your account');
         await page.getByRole('textbox', { name: 'Email' }).fill(Credentials.validUser.email);
         await page.getByRole('textbox', { name: 'Password' }).fill(Credentials.validUser.password);
         await page.click('#kc-login');
         await expect(page).toHaveURL(/companies/);
         await page.click("button.btn.btn-primary");
         await expect(page).toHaveURL(/dashboard/);
         await page.locator('span', { hasText: 'dashboard' }).click();
         await page.waitForTimeout(15000);


      });
      test('Unsucessful Login - Invalid Credentials', async ({ page }) => {

      })
   })
})