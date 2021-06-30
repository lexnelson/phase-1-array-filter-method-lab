/*const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(colection, name) {
    for (const driver of element) {
        if (driver.)
    }
}*/

function findMatching(drivers, name) {
     const newDrivers = drivers.filter(function (person) {
         return person.toLowerCase() === name.toLowerCase() 
        });
        return newDrivers;
    }

function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver.slice(0, name.length) ===name)
}
function matchName(drivers, person){
    return drivers.filter(driver => driver.name === person)  
}

// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument