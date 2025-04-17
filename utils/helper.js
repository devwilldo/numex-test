import {faker} from '@faker-js/faker';
// Generate a "legal" company name by appending a legal suffix
const legalSuffix = faker.company.companySuffix(); // e.g., "LLC", "Inc", "Ltd"
// pre generated password to use
const password = faker.internet.password();

export const baseUrl = 'https://test-numex-service.azurewebsites.net';
export const Credentials ={
    validUser:{
        email: 'codingvra@gmail.com',
        password: 'newlogin',
    },
    invalidUser:{
      email:faker.internet.email(),
      password:faker.internet.password()
    },
    newUser:{
      firstName:faker.person.firstName(),
      lastName:faker.person.lastName(),
      email:'wizzy25.wa@gmail.com',
      // Generate a random company name
      companyName:faker.company.name(),
      companyTin: 'C000000000678',
      companyNumber: '0543216789',
      password: password,
      confirmPassword:password

    }
};