const input = require('readline-sync');
let selectedChar = input.question("Which character should we build shapes out of? ");
while (selectedChar.length > 1) {
    selectedChar = input.question("Invalid input. Please enter a single character: ");
}

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += selectedChar;
    }
    return line;
}

console.log(makeLine(5));

function makeSquareVersionOne(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        square += '\n' + makeLine(size);
    }
    return square;
}

console.log(makeSquareVersionOne(5));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += '\n' + makeLine(width);
    }
    return rectangle;
}

console.log(makeRectangle(5, 3));

function makeSquareVersionTwo(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        square = makeRectangle(size, size);
    }  
    return square;
}

console.log(makeSquareVersionTwo(5));