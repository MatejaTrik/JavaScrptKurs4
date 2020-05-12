/* //create element

const li = document.createElement('li');

//add class
li.className = 'collection-item'

//add id
li.id = 'new-item';

//add attribute
li.setAttribute('title', 'New Item')

//create text node and append
li.appendChild(document.createTextNode('Mateja Kralj'))

//create new link element
const link = document.createElement('a');
//add class
link.className = "delete-item secondary-content";
//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'

//append link inot li
li.appendChild(link)

//append li as child to ul
document.querySelector('ul.collection').appendChild(li);


console.log(li) */

//replace element

//create element
const newHeading = document.createElement('h2');
//add id 
newHeading.id = 'task-title';
//new text node
newHeading.appendChild(document.createTextNode('task List'))

//get the old heading
const oldHeading = document.getElementById('task-title')
//parent
const cardAction = document.querySelector('.card-action')

//replace 
cardAction.replaceChild(newHeading, oldHeading)

//remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul')

//remove list item
lis[0].remove()

//remove child
list.removeChild(lis[3]);

//CLASSES ^ ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0]

let val;

//classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test')
val = link;

//atributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute
val = link.hasAttribute('title')


console.log(val)