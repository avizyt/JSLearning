function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}

function evenOdd(x) {
    if (x % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

export { add, mul, div, evenOdd };
