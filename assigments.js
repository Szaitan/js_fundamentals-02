// Assigment 1
// function describeCountry(country, population, capitalCity) {
//     return `\n${country} has ${population} million people and its capital city is ${capitalCity}`
// }

// console.log(describeCountry("Poland", 3, "Warsaw"), describeCountry("France", 4, "Paris"), describeCountry("Deutschalnd", 5, "Berlin"))

// Assigment 2
const worldPopulation = 7900 // in milions

// function declaration
function percentageOfWorld1(population) {
    return (population * 100) / worldPopulation
}

chinaPercentage = percentageOfWorld1(1441)
polandPercentage = percentageOfWorld1(200)
indiaPercentage =  percentageOfWorld1(1600)
console.log(chinaPercentage, polandPercentage, indiaPercentage)

// function expression
const percentageOfWorld2 = function (population) {
    return (population * 100) / worldPopulation
}

chinaPercentage2 = percentageOfWorld2(1441)
polandPercentage2 = percentageOfWorld2(200)
indiaPercentage2 =  percentageOfWorld2(1600)
console.log(chinaPercentage2, polandPercentage2, indiaPercentage2)

// Assigment 3
// function arrow
const percentageOfWorld3 = (population) => (population * 100) / worldPopulation

console.log(percentageOfWorld3(1441))

// Assigment 4
const describePopulation = function (country , population) {
    return `${country} has ${population} population, which is about ${percentageOfWorld1(population)} of the world.\n`
}
console.log(describePopulation("China", 1441), describePopulation("Poland", 200), describePopulation("India", 1600))