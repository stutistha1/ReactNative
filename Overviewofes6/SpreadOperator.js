// ...=>Spread operator -- we can easily clone an array 
// const first = [1,2,3];
// const second = [4,5,6];

//combining array
//const combined = first.concat(second);
//const combined = [...first, 'a', ...second, 'b'];
//console.log(combined);

// const clone = [...first];
// console.log(first);
// console.log(clone); 

const first = { name: 'Mosh' };
const second = {job: 'Instructor'};

//combining the above two object
const combined = {...first, ...second, location: 'Australia'};
console.log(combined);