
// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase()



String.prototype.toAlternatingCase = function () {
  // Define your method here :
  
  let result = ''
  
  for(let char of this ){
   result+= char === char.toUpperCase() 
    ? char.toLowerCase()
    :char.toUpperCase()
    
  }
  
  return result 
}

// Alternative way

const toAlternatingCase = (string) => {
  let result = ''

    for(char of string){

      

    if(char=== char.toUpperCase()){
    char = char.toLowerCase()
     result +=char
    } else {
 char= char.toUpperCase()
 result+=char
    }
    }

    return result

}


console.log(toAlternatingCase("heLlo WorlD"))