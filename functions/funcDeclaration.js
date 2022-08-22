// Declarative functions are loaded at compile time.
// that means you can call function before define.

// lets understand with an example

// calling add()
let xPlusY = add(2, 3);

console.log(xPlusY);

// defining add()
function add(x, y) {
    return x + y;
}
