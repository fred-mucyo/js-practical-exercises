let user = {
  name: "John",
  age: 30,
}


user["likes birds"] = true;
key = 'this is love '

user[key] = 'yes it is '

console.log(user)


    function createPerson(name, age) {
      return {
        name: name,
        age: age,
        greet() {
          console.log(`Hello, my name is ${this.name}`);
        }
      };
    }
    const person = createPerson("Grace", 22);