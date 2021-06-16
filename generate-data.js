const faker = require('faker');

// Set locale to use Vietnamese
faker.locale = 'vi';

// Random data
console.log(faker.commerce.department());
console.log(faker.commerce.product());
console.log(faker.commerce.price());

console.log(faker.datatype.uuid());
console.log(faker.image.imageUrl());