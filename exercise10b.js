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

function makeDownwardStairs(height) {
    let triangle = '';
    for (let i = 1; i <= height; i++) {
        triangle += '\n' + makeLine(i);
    }
    return triangle;
}

console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let spaces = '';
    let chars = '';
    for (let i = 0; i < numSpaces; i++) {
        spaces += ' ';
    }
    for (let j = 0; j < numChars; j++) {
        chars += selectedChar;
    }
    return "\n" + spaces + chars + spaces;
}

console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
    let isoTriangle = '';
    for (let i = 0; i < height; i++) {
        isoTriangle += makeSpaceLine(height - i - 1, 2 * i + 1);
    }
    return isoTriangle;
}

console.log(makeIsoscelesTriangle(5));

function makeDiamond(height) {
    let diamond = makeIsoscelesTriangle(height);

    return diamond + '\n' + diamond.split('').reverse().join('');
}

console.log(makeDiamond(5));