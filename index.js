// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(mult) {
  return function(fare) {
    return fare * mult
  }
}

function fareDouble = createFareMultiplier(2)
function fareTripler() {
  
}
function selectDifferentDrivers() {
  
}