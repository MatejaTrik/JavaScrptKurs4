// document.querySelector('.clear-tasks').addEventListener('click',
// function(e) {
//     console.log('Hello worlde');

//     //e.preventDefault();
// })

document.querySelector('.clear-tasks').addEventListener('click',
onClick);

function onClick(e) {
    // console.log('clicked ')

    let val;

    val = e;

    //event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;

    e.target.innerText = "hello"

    console.log(val)
}