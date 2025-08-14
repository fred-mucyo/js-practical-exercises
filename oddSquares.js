// Odd Squares

// You are given an array of numbers. Your task is to implement a function called oddSquares that filters out the even numbers from the array and then maps the remaining numbers to their squares.

// Example:
// oddSquares([1, 2, 3, 4, 5, 6]); // should return [1, 9, 25]
// oddSquares([10, 15, 20, 25, 30]); // should return [225, 625]



const oddSquares = (arr) =>{
    let result =[]

const oddNum = arr.filter(odd=> odd % 2 !==0)

 for(let num of oddNum){
result.push(num*num)
 }
return result



}

console.log(oddSquares([3,9,5,7,11]))
