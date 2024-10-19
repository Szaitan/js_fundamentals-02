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

// chinaPercentage = percentageOfWorld1(1441)
// polandPercentage = percentageOfWorld1(200)
// indiaPercentage = percentageOfWorld1(1600)
// console.log(chinaPercentage, polandPercentage, indiaPercentage)

// // function expression
// const percentageOfWorld2 = function (population) {
//     return (population * 100) / worldPopulation
// }

// chinaPercentage2 = percentageOfWorld2(1441)
// polandPercentage2 = percentageOfWorld2(200)
// indiaPercentage2 = percentageOfWorld2(1600)
// console.log(chinaPercentage2, polandPercentage2, indiaPercentage2)

// // Assigment 3
// // function arrow
// const percentageOfWorld3 = (population) => (population * 100) / worldPopulation

// console.log(percentageOfWorld3(1441))

// // Assigment 4
// const describePopulation = function (country, population) {
//     return `${country} has ${population} population, which is about ${percentageOfWorld1(population)} of the world.\n`
// }
// console.log(describePopulation("China", 1441), describePopulation("Poland", 200), describePopulation("India", 1600))

// Assigment 5

// const countryList = ["Poland", "Englad", "France", "Czech"]
// console.log(countryList.length === 4)

// const percentages = [1441, 200, 1600, 340]
// console.log(percentageOfWorld1(percentages[0]), percentageOfWorld1(percentages[1]), percentageOfWorld1(percentages[2]), percentageOfWorld1(percentages[3]))

// Assigment 6
// const neighbours = ["Mexic", "Canda"]
// neighbours.push("Utopia")
// console.log(neighbours)
// neighbours.pop()
// console.log(neighbours)

// if (!neighbours.includes("Germany")) console.log("Probably not a central european country :D")

// const mexicIndex = neighbours.indexOf("Mexic")
// neighbours[mexicIndex] = "Sweden"

// console.log(neighbours)

// Challenge
// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2037 - 1991,
//     job: "teacher",
//     friends: ['Micheal', "Peter", "Steven"]
// }

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

// Assigment 7
// const mycoutry = {
//     country: "Germany",
//     capital: "Berlin",
//     language: "Deutsch",
//     population: 300,
//     neighbours: ["Poland", "Czech", "Belgium", "Netherlands"]
// }

// console.log(`'${mycoutry.country} has ${mycoutry.population} million ${mycoutry.language}-speaking people, ${mycoutry.neighbours.length} neighbouring countries and a capital called ${mycoutry.capital}'`)
// mycoutry.population += 2
// console.log(mycoutry.population)

// mycoutry["population"] -= 2
// console.log(mycoutry.population)

// Assigment 8

michal = {
    name: "Michał",
    job: "Programmer",
    birthDay: 1990,
    driverLicense: true,
    calcAge: function () {
        this.age = 2025 - this.birthDay
        return this.age
    },

    summary: function () {
        // let diverLicenseValue
        // if (this.driverLicense) {
        //     diverLicenseValue = "with"
        // } else {
        //     driverLicense = "without"
        // }

        return `${this.name} is a ${this.calcAge()}-year ${this.job} ${this.driverLicense ? "with" : "without"} drivers license.`
    }
}

console.log(michal.summary())
console.log(michal.age)