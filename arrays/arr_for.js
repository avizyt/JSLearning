let arr = [];

for (let i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);

let evenArr = [];

for (let ele of arr) {
    if (ele % 2 == 0) {
        evenArr.push(ele / 2);
    }
}

console.log(evenArr);
