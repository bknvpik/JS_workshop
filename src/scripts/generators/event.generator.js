import { faker } from '@faker-js/faker';

function* eventGenerator() {
  yield {
    id: faker.datatype.uuid(),
    createdTime: String(faker.date.past()),
    eventTime: String(faker.date.future()),
    venue: faker.helpers.arrayElement([
      'Kraków, ul. Polna 14',
      'Kraków, ul. Polna 15',
      'Kraków, ul. Polna 16',
    ]),
    bannerUrl: faker.image.abstract(300, 150, true),
    author: {
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
      avatarUrl: faker.image.imageUrl(),
    },
    title: faker.commerce.productName(),
    body: faker.lorem.paragraph(2),
  };
}
