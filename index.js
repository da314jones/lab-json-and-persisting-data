const { productDataPopulation, productInfo } = require('./src/products');
const { writeJSONFile, readJSONFile } = require('./src/helpers');

const run = () => {
    const products = readJSONFile('./data', 'productlist.json');
    console.log(products);
    if (process.argv[2] === 'create') {
        if (process.argv[3]) {
            products.push(...productInfo(process.argv[3]));
        } else {
            products.push(productDataPopulation());
        }
        writeJSONFile('./data', 'productlist.json', products);
        console.log('Data population successful!');
    } else {
        console.log('Invalid, please enter create command to populate.');
    }
}

run()