//this keyword in js 
//binding this

const person = {
    name: "Mosh",
    walk() {
        console.log(this);  //this keyword is returning a reference to this person object 
    }
};

person.walk();

// const walk = person.walk;
const walk = person.walk.bind(person);
// console.log(walk);
walk();

//the value of this determined by how thw function is called 
//if we call a function as a method in an object this will always return a reference to that object
//however if we call a function as a standalone object or outside of an object this will return the global object which the window object in browser
//bind method helps to set the value of 'this' permanently
//when we call bind on walk function we get a new walk function and in that walk function the value of this is based on the argument that we pass to the bind method
//in our case we see person object in the console