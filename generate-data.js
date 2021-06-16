const faker = require('faker');
const fs = require('fs');

// Set locale to use Vietnamese
faker.locale = 'vi';

const randomCategoryList = (n) => {
    if (n <= 0) return {};

    const categoryList = [];

    // loop and push category
    Array.from(new Array(n)).forEach(() => {
        const category = {
            id: faker.datatype.uuid(),
            name: faker.commerce.department(),
            createdAt: Date.now(),
            updatedAt: Date.now()
        };

        categoryList.push(category);
    })
    return categoryList;
}

(() => {
    // random data
    const categoryList = randomCategoryList(4);

    const db = {
        categories: categoryList,
        products: [],
        profile: {
            name: 'nguyenthin'
        },
    };

    // write db object to db.json
    fs.writeFile("db.json", JSON.stringify(db), () => {
        console.log("Generate data successfully");
    })
})()