//FUNCTION DECLARATION

function greet(firstName = 'John', lastName = 'Doe') {
    //console.log('Hello')
    return 'Hello ' +  firstName + " " + lastName
}

console.log(greet('John', 'Doe'))

//FUNCTION EXPRESSION

const square = function(x = 3 ) {
    return x*x
};

console.log(square(8))

//IMMIDIATLEY INVOKABLE FUNCTION EXPRESSION - IFFIEs

// (function(){
//     console.log('iffie ran..')
// })()

(function(name) {
    console.log('Hello ' +name)
})('Brad')

//PROPERTY METHONDS