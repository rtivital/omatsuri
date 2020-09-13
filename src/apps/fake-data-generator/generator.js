import faker from 'faker/locale/en';

const generators = {
  name: faker.name.findName,
  email: faker.internet.email,
  avatar: faker.internet.avatar,
  username: faker.internet.userName,
  password: faker.internet.password,
  job_title: faker.name.jobTitle,
  phone: faker.phone.phoneNumber,
  bitcoin_address: faker.finance.bitcoinAddress,
  company: faker.company.companyName,
  zip: faker.address.zipCode,
  address: () =>
    faker.fake(
      '{{address.cityPrefix}} {{address.city}}, {{address.streetName}}, {{random.number}}'
    ),
  date: () => faker.date.past().toISOString(),
  city: faker.address.city,
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
