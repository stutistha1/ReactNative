//Arrow function and this

const person = {
    talk() {
        var self = this;
        // setTimeout(function() {},1000)  //callback function
        setTimeout(() => {
        console.log("this", this);
        }, 1000);
    }
};

person.talk(); //standalone function

//callback function is not part of any objects so it's not like talk method in the person object it's a standalone function
// when we call a function as standalone function outside of an object by default 'this' returns the window object 

// arrow function don't rebind this keyword 
// if we change callback function to an arrow function it will inherit that 'this' keyword