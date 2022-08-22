// There are two type of function in JS.
// 1. function Declerations
// 2. function expressions

// type 1 functions
function add(x, y) {
    console.log(x + y);
}

// type 2 functions
let addition = (x, y) => {
    console.log(x + y);
};

console.log(add(3, 4));

console.log(addition(2, 3));
