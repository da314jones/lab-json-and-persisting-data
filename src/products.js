const { faker } = require('@faker-js/faker');

const productDataPopulation = () => {
    const productData = {
        customerId: faker.string.uuid(),
        productBuildComplete: faker.datatype.boolean(0.7),
        estimatedCompletionInWeeks: faker.number.int({ min: 3, max: 12 }),
        email: faker.internet.email()
    };
    return productData;
};

const productInfo = (number) => {
    const products = [];
    for (let i = 0; i < number; i++) {
        products.push(productDataPopulation())
    }
    return products;
}

module.exports = {
    productDataPopulation,
    productInfo
}