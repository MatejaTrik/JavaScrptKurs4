// Person constructos
function Person(name, dob) {
    this.name = name;
    // this.age = age
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

}

console.log(this)



// const brad = new Person('brad', 12);
// const josh = new Person('josh', 51);

// console.log(brad.age)
// console.log(josh.age)

const brad = new Person('Brad', '4-8-2002')
console.log(brad.calculateAge())