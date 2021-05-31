const module1 = require('./module1.js');

function parSum(array, parNum) {

    const numberParity = parNum % 2;

    const resultFilter = array.filter(
        elem => elem % 2 === numberParity
    );

    const result = module1.sum(resultFilter);

    return result;
}

module.exports = {
    parSum
};