// Code your solution here
function findMatching(array, string) {
    const result = array.filter (name => name.toLowerCase() === string.toLowerCase())
    return result 
}

function fuzzyMatch(array, string) {
    const letters = array.filter (driver => driver.startsWith(string))
    return letters
}

function matchName(array, string) {
    const results = array.filter (driverName => driverName.name === string)
    return results
}