const {  productDataPopulation, productInfo } = require("../src/products")

describe('productDataPopulation', () => {
    test('Should create an object with customerId, productBuildComplete, estimatedCompletionInWeeks, email', () => {
        const actual = productDataPopulation()
        expect(actual).toHaveProperty('customerId', 'productBuildComplete', 'estimatedCompletionInWeeks', 'email')
    });
});

describe('productInfo', () => {
    test('Should push train object thats made into products array.', () => {
        const actual = productInfo()
        expect(actual).toEqual(expect.arrayContaining(actual))
    });
});