//var,let,const
//var -> function
//let -> block --- used only when we have to reassign a variable
//const -> block -- const is preffered over let

function sayHello() {
    for (var i= 0; i < 5; i++) {  //if we use let instead of var error is thrown
        console.log(i);
    } 

    console.log(i);
}

sayHello();




