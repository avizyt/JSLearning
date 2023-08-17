let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// console.log(mat);

let newMat = [];

for (i = 0; i < mat[0].length; i++) {
    for (j = 0; j < mat[1].length; j++) {
        let x = mat[i][j] + 2;
        console.log(x);
    }
}

console.log(mat);
