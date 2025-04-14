// utils/fakerData.js
import { faker } from '@faker-js/faker';

export const getFakeUser = () => {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: faker.phone.number(),
    address: {
      city: faker.location.city(),
      country: faker.location.country(),
    },
  };
};
