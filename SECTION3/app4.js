const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card')
const heading = document.querySelector('h5')

//click
// clearBtn.addEventListener('click', runEvent)

//double click
// clearBtn.addEventListener('dblclick', runEvent)

//mouse down
// clearBtn.addEventListener('mouseup', runEvent);

//mouse enter
// clearBtn.addEventListener('mouseenter', runEvent)

//mouse over
//clearBtn.addEventListener('mouseover', runEvent);

//mouse out
// clearBtn.addEventListener('mouseout', runEvent);

//mouse move
card.addEventListener('mousemove', runEvent)


//event hanler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`)

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}     