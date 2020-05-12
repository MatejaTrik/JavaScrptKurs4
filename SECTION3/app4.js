const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card')
const heading = document.querySelector('h5')

//click
clearBtn.addEventListener('click', runEvent)

//event hanler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`)
}