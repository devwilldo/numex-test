/* Use this file to populate your data*/

import { register } from "module"

// URLs
export const BASE_URL = 'https://numex.app'
export const LOGIN_URL = 'https://axonauth.azurewebsites.net/auth/realms/numexstaging/protocol/openid-connect/auth?client_id=numex&redirect_uri=https%3A%2F%2Fnumex-staging.azurewebsites.net%2F&state=75e38eeb-93c3-4885-8bd1-4a9533c24b9d&response_mode=fragment&response_type=code&scope=openid&nonce=2d472c7a-3662-4c6e-8117-f8bac9478c9a'
export const SIGN_UP_PAGE = 'https://numex-staging.azurewebsites.net/'


// TEST DATA

//SELECTORS
export const LOGIN_PAGE_SELECTORS = {
    signInPageHeader:'',
    SignInButton : '[]',
    emailField: '',
    passwordField: '',
    forgotPasswordButton:'',
    registerButton:'',
    rememberMeBox: '',

}

//GENERAL_BUTTONS
/* eg. 'COMPLETE COMPANY SETUP BUTTON' */


