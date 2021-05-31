const obj1 = { a: 2 };
const obj2 = obj1; // copiere prin referinta

obj2.a = 5;
console.log(obj1); // {a:5} -> valoarea s-a modificat si in obiectul original

const obj3 = Object.assign({}, obj1); // copiere prin valoare

const obj4 = JSON.parse(JSON.stringify(obj1)); // copiere prin valoare folosind JSON

obj3.a = 10;
console.log(obj1); // {a:5} -> valoarea nu s-a modificat

const obj5 = { ...obj1 } // copiere prin valoare (modern, folosind spread operator, ES6)

obj5.a = 9772;
console.log(obj1); // {a:5} -> valoarea nu s-a modificat