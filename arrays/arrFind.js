let instruments = ["guitar", "piano", "tabla", "ocarina", "tabla"];

let found = instruments.find((x) => x === "piano");
let foundIdx = instruments.findIndex((x) => x === "piano");
console.log(foundIdx);
console.log(found);
