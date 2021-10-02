function divide (numerator, denominator) {
    if (denominator === 0) {
        throw Error("Attempted to divide by zero.");
    }
    return numerator / denominator;
}

console.log(divide(1,2));
console.log(divide(1,0));