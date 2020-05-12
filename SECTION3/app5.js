const form = document.querySelector('form');
const taskInput = document.getElementById('task');

//clear input
taskInput.value = '';

//form.addEventListener('submit', runEvent)

taskInput.addEventListener('keydown', runEvent)

function runEvent (e) {
    console.log(`EVENT TYPE: ${e.type}`)

    console.log(taskInput.value)
    
    //Get input value
    //console.log(taskInput.value)

    //e.preventDefault();
    
}