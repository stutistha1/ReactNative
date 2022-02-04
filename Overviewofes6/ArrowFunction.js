//simple one
// const square = function(number) {
//     return number * number;
// };

//arrow function
// const sqaure = number => number * number;
// console.log(square(5));

//the code we have in line 6 is equivalent to the code in 2,3 and 4
//So we can see arrow function make syntax more cleaner and compact

//in array 
const jobs = [
    { id:1, isActive: true },
    { id:2, isActive: true },
    { id:3, isActive: fasle },
];

//simple function
//const activeJobs = jobs.filter(function(job) { return job.isActive; });

//Arrow function
const activeJobs = jobs.filter(job => job.isActive);

//filter method iterates over array for each job object
//it takes the job object and pass it to predicate function
//the job of the predicate is to determine if that job object should from the filter method