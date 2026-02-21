import { fakerEN as faker } from '@faker-js/faker';

const generators = {
  name: faker.person.fullName,
  email: faker.internet.email,
  avatar: faker.image.avatar,
  username: faker.internet.username,
  password: faker.internet.password,
  job_title: faker.person.jobTitle,
  phone: faker.phone.number,
  bitcoin_address: faker.finance.bitcoinAddress,
  company: faker.company.name,
  zip: faker.location.zipCode,
  address: () => `${faker.location.city()}, ${faker.location.street()}, ${faker.number.int(999)}`,
  date: () => faker.date.past().toISOString(),
  city: faker.location.city,
};

export const generatorsData = Object.keys(generators).map((key) => ({
  label: (key.charAt(0).toUpperCase() + key.slice(1)).replace('_', ' '),
  value: key,
}));

export default function generate(type) {
  if (type in generators) {
    return generators[type]();
  }

  return null;
}

export function generateRawData() {
  return Object.keys(generators).map((key) => ({
    key: (key.charAt(0).toUpperCase() + key.slice(1)).replace('_', ' '),
    data: generators[key](),
  }));
}

export function generateJsonData(fields, amount) {
  return Array(amount)
    .fill(0)
    .map(() =>
      fields.reduce((acc, field) => {
        if (field.type in generators && field.name.trim()) {
          acc[field.name] = generators[field.type]();
        }
        return acc;
      }, {})
    );
}
