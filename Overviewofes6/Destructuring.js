const address = {
    street: '',
    city: '',
    country: ''
};

//extracting the value of propertioes and storing then in separate variables
const street = address.street;
const city = address.city;
const country = address.country;

//destructuring the above code
//no repetition of address

const { street, city, country } = address;

// we are extracting the street property from the address object and storing it in a constant called street

const { street: st} = address;  // only listing one propertie. if we want to call street constant as st
