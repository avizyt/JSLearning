// Function expression are loaded at run time as other code from top to bottom.
// So, it can't be called before define

// let's understand with as example

// let xaddY = addition(2, 3);
// console.log(xaddY);

let addition = (x, y) => {
    return x + y;
};

let xPlusY = addition(2, 3);
console.log(xPlusY);
