import { test, expect } from '@playwright/test';
import { baseUrl, Credentials } from '../../utils/helper.js';
const signInurl = 'https://axonauth.azurewebsites.net/auth/realms/numexdev/protocol/openid-connect/auth?client_id=numex&redirect_uri=https%3A%2F%2Ftest-numex-service.azurewebsites.net%2F&state=a3346baf-f5e5-4770-90e3-59c721441a69&response_mode=fragment&response_type=code&scope=openid&nonce=3656a5bc-0f41-4d13-a089-0f50c4386e7a'
test.describe('All Auth tests', () => {
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
         //await page.goto(`${baseUrl}`);
         await page.goto(`${baseUrl}`);
         await page.click('#signIn');
         const signIn_text = page.locator('#kc-page-title');
         await expect(signIn_text).toContainText('Sign in to your account');
         await page.getByRole('textbox', { name: 'Email' }).fill(Credentials.invalidUser.email);
         await page.getByRole('textbox', { name: 'Password' }).fill(Credentials.invalidUser.password);
         await page.click('#kc-login');
         await page.waitForTimeout(3000);
         const error = await page.locator('#input-error').allTextContents();
         console.log(error);
         await page.waitForTimeout(3000);
      })
   });
   test.describe('Sign Up', () => {
      test('Successfull Registration', async ({ page }) => {
         await page.goto(`${baseUrl}`);
         await page.locator('[id="\\30 01"]').click();
         //await page.click(freebtn);
         await expect(page.getByText('GHS 0 /month')).toBeVisible();
         await page.locator('#first-name').fill(Credentials.newUser.firstName);
         await page.locator('#last-name').fill(Credentials.newUser.lastName);
         const emailInput = page.locator('#email-address');
         await emailInput.click(); // Focus the input (optional, but useful for some UIs)
         await emailInput.fill(Credentials.newUser.email);
         await page.locator('#company-name').fill(Credentials.newUser.companyName);
         await page.locator('#company-legal-name').fill(Credentials.newUser.companyName);
         await page.locator('#company-tin').fill(Credentials.newUser.companyTin);
         await page.locator('#company-phone').fill(Credentials.newUser.companyNumber);
         await page.locator('#password').fill(Credentials.newUser.password);
         await page.locator('#confirm-password').fill(Credentials.newUser.confirmPassword);
         // check box
         const vatCheckbox = page.locator('#vatRegistered');
         if (!(await vatCheckbox.isChecked())) {
            await vatCheckbox.click();
         }
         const standardRadio = page.locator('#standard');

         if (!(await standardRadio.isChecked())) {
            await standardRadio.click();
         }
         const isSelected = await standardRadio.isChecked();
         console.log('Standard radio selected:', isSelected);
         const termsCheckbox = page.locator('#terms');
         if (!(await termsCheckbox.isChecked())) {
            await termsCheckbox.click();
         }
         const signUpButton = page.locator('#signUp');
         await signUpButton.waitFor({ state: 'visible' });
         if (await signUpButton.isEnabled()) {
            await signUpButton.click();
            await page.waitForTimeout(1000);
         }

      })
   })
});