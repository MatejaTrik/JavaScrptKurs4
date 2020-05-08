const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const greeting = 'Hello World Mateja is the king'

let val;

val = firstName + lastName;

//concationation
val = firstName + ' ' + lastName;

//appending
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + 'and I am ' + age;

//esacping
val = "That's aweson, I can't wait"
val = 'That\'s aweson, I can\'t wait'

//length
val = firstName.length;

//concat
val = firstName.concat(' ', lastName);

//change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

//indexOf()
val = firstName.indexOf("l");
val = firstName.lastIndexOf("l");

//charAt()
val = firstName.charAt('2');

//get last char
val = firstName.charAt(firstName.length - 1);

//substring()
val = firstName.substring(0,4);

//slide()
val = firstName.slice(0,4);
val = firstName.slice(-3);

//split()
val = greeting.split(' ')

//replace()
val = greeting.replace('Mateja', 'Matejacar');

//includes()
val = greeting.includes('Hello')


console.log(val)