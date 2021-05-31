const init = require('./init.js');

const sum = (array) => {

    const result = (accumulator, currentValue) => 
        accumulator + currentValue; 
        
    return array.reduce(result, 0);

}

const elem = init.array;
console.log(sum(elem));

module.exports = { 
    sum
 };
