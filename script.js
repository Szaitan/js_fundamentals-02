'use strict';

// Start with functions

function logger() {
    console.log("My name is Mike")
}

// calling, running, invoking function
logger()

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(5, 4))