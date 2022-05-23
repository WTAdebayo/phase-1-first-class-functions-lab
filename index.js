// Code your solution in this file!

// driver name assignment array
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

// anonymous function w/ 1 argument returning the first two drivers in the array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

// anonymous function w/ 1 argument returning the last two drivers in the array
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2,4);
}

// selectingDrivers is assigned an array containing the two previously defined functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//fare multiplier higher order function- functionr returning a function
const createFareMultiplier = function(multiplier1) {
    return function(multiplier2) {
        return multiplier1 * multiplier2
    }
}

const fareDoubler = createFareMultiplier(2)



const fareTripler =  createFareMultiplier(3)


function selectDifferentDrivers(drivers , returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}