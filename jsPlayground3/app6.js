console.log('_____FOR_LOOP_____')
//           _____FOR_LOOP_____
for(let i = 0; i <= 10; i++) {
    if(i === 2) {
        console.log('-2 i my favorite number')
        continue
    }

    if(i === 6) {
        break;
    }

    console.log('-' + i)
}

console.log('_____WHILE_LOOP_____')
//           _____WHILE_LOOP_____

let i = 0;

while(i < 6) {
    if(i === 2) {
        console.log('-2 i my favorite number')
    }

    console.log('-' + i);
    i++;
}

console.log('_____DO_WHILE_LOOP_____')
//           _____DO_WHILE_LOOP_____

let y = 0;

do {
    if(y === 2) {
        console.log('-2 i my favorite number')
    }

    console.log('-' + y);
    y++
} while(y < 6)

console.log('_____ARR_LOOP_____')
//           _____ARR_LOOP_____

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i++) {
    console.log('-' + cars[i])
}

console.log('_____forEACH_LOOP_____')
//           _____forEACH_LOOP_____

cars.forEach(function(car, index, /* array */) {
    console.log('-' + index + ':' + car)
})

console.log('_____MAPAPPAPAPAPA_____')
//           _____MAPAPPAPAPAPA_____

const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Sara'},
    {id: 3, name: 'Karen'},
    {id: 4, name: 'Dragan'},
    {id: 5, name: 'Boban'},
]

const ids = users.map(function(user) {
    return user.id;
});

console.log(ids)

const korisnik = {
    firstname: 'John',
    lastname: 'Doe',
    age: 40,
}

for (let x in korisnik) {
    console.log(`${x} : ${korisnik[x]}`)
}