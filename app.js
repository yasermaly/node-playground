const { capitalizeWords, makeMoney } = require('./utils');
const Person = require('./Person');

console.log(capitalizeWords('Hello World'));
console.log(makeMoney(100));

const Person1 = new Person('john', 30);
Person1.greet();
