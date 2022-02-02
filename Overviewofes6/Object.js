//Objects- objects in javascript are collection of key value pairs
const person = {
    name: 'Mosh',
    walk() {},
    talk() {}
};

person.talk(); //if we know ahead of time what property or method we're going to access we use the dock notation
person.name = '';

const targetMember = 'name';
person[targetMember.value] = 'John'; //bracket notation is used when we don't know ahead of time what property or meth od we are going to access

