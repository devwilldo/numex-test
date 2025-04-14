//export const baseUrl = 'https://test-numex-service.azurewebsites.net';
export const Credentials ={
    validUser:{
        email: 'codingvra@gmail.com',
        password: 'newlogin',
    }
}

// utils/testConfig.js
export const urls = {
    login: '/login',
    register: '/register',
    dashboard: '/dashboard',
  };
   

  import dotenv from 'dotenv';
  dotenv.config();

  export const baseUrl = process.env.Base_URL;
  export const credentials = {
    email: process.env.USER_EMAIL,
    password: process.env.USER_PASSWORD,
  };
 