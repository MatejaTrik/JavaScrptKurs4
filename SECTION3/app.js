// console.log(document.getElementById("task-title"))

// //get things from the element
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

// //change styling 
// document.getElementById('task-title').style.background = '#333'
// document.getElementById('task-title').style.color = '#ggg'
// document.getElementById('task-title').style.padding = '20px'

// //change content
// document.getElementById('task-title').textContent = 'Task List'
// document.getElementById('task-title').innerText = 'My List'

//get elements by class name
const items = document.getElementsByClassName('collection-item');

console.log(items)
console.log(items[0])
items[0].style.color = 'red';
items[3].textContent = 'HELLO JA SAM CAR';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);
