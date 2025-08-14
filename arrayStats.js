// Array statistics
// You are given an array of numbers. Your task is to implement a function called arrayStats that returns an object containing various statistics about the array.

// The returned object should have the following properties:
// sum: The sum of all numbers in the array.
// average: The average of all numbers in the array (rounded to two decimal places).
// min: The minimum value in the array.
// max: The maximum value in the array.

// Example:
// arrayStats([1, 2, 3, 4, 5]); // should return { sum: 15, average: 3.00, min: 1, max: 5 }

let sum = 0 
// let toAve = 0

const arrayStats = (arr) => {
for(let sums of arr){

    sum+=sums
}

const ave = sum/arr.length
const min = Math.min(...arr)
const max = Math.max(...arr)

return {
 sum: sum,
 average:parseInt(ave.toFixed(2)),
 min:min,
 max:max
}



}


console.log(arrayStats([2,4,6,7,78,4,34,3,2]))
