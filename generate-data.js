const faker = require('faker');
const fs = require('fs');

// Set locale to use Vietnamese
faker.locale = 'vi';

const randomCategoryList = (n) => {
    if (n <= 0) return [];

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

const randomProductList = (categoryList, n) => {
    if (n <= 0) return []

    const productList = [];
    categoryList.map(category => {
        return Array.from(new Array(n)).forEach(() => {
            let product = {
                id: faker.datatype.uuid(),
                categoryId: category.id,
                name: faker.commerce.productName(),
                color: faker.commerce.color(),
                price: Number.parseFloat(faker.commerce.price()),
                description: faker.commerce.productDescription,
                createdAt: Date.now(),
                updatedAt: Date.now(),
                thumbnailUrl: faker.image.imageUrl(400, 400)
            }

            productList.push(product);
        })
    });
    return productList;
}

(() => {
    // random data
    const categoryList = randomCategoryList(4);
    const productList = randomProductList(categoryList, 5);

    const db = {
        categories: categoryList,
        products: productList,
        profile: {
            name: 'nguyenthin'
        },
    };

    // write db object to db.json
    fs.writeFile("db.json", JSON.stringify(db), () => {
        console.log("Generate data successfully");
    })
})()