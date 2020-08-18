import faker from 'faker';

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
};

export default function generate(type) {
  if (type in generators) {
    return generators[type]();
  }

  return null;
}
