let re;
re = /hello/;
re = /hello/i; // i - case insensitive
// re = /hello/g; // g - global search

// console.log(re);
// console.log(re.source);

// exac() - Return results in an array or null
// const result = re.exec(' hi hello word');

// console.log(result)
// console.log(result[0])
// console.log(result.index)

// test() - Return true or false
// const result = re.test('hello')
// console.log(result)

// match() - Retun result array or null
// const str = 'Hello there';
// const result = str.match(re)
// console.log(result)

// replace() - Return new string with some or all matches of a patern
const str = 'Hello There';
const newStr = str.replace(re, 'Hi')
console.log(newStr)