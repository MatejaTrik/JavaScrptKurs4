const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5')

//clear input
taskInput.value = '';

//form.addEventListener('submit', runEvent)

//key down
taskInput.addEventListener('keydown', runEvent)

//key up
taskInput.addEventListener('keyup', runEvent)

//focus 
taskInput.addEventListener('focus', runEvent)

//blur
taskInput.addEventListener('blur', runEvent)

//cut 
taskInput.addEventListener('cut', runEvent)

//paste
taskInput.addEventListener('cut', runEvent)



function runEvent (e) {
    console.log(`EVENT TYPE: ${e.type}`)

    console.log(taskInput.value)

    heading.innerText = e.target.value
    
    //Get input value
    //console.log(taskInput.value)

    //e.preventDefault();
    
}