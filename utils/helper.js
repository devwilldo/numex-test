import { faker } from '@faker-js/faker';
// Generate a "legal" company name by appending a legal suffix
const legalSuffix = faker.company.companySuffix(); // e.g., "LLC", "Inc", "Ltd"
// pre generated password to use
const password = faker.internet.password();

// Function to generate TIN-like ID (e.g., C000000000123)
const generateCompanyTIN = () => {
  const randomNumber = faker.number.int({ min: 1, max: 999999999999 }); // up to 12 digits
  const paddedNumber = String(randomNumber).padStart(12, '0'); // pad with leading zeros
  return `C${paddedNumber}`;
};

export const baseUrl = 'https://test-numex-service.azurewebsites.net';
export const Credentials = {
  validUser: {
    email: 'codingvra@gmail.com',
    password: 'newlogin',
  },
  invalidUser: {
    email: faker.internet.email(),
    password: faker.internet.password()
  },
  newUser: {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email,
    // Generate a random company name
    companyName: faker.company.name(),
    companyTin: generateCompanyTIN(),
    companyNumber: faker.phone.number('054#######'),
    password: password,
    confirmPassword: password

  }
};

console.log(Credentials.newUser);