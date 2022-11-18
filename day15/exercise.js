// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class animal {
  constructor(name, age, color, legs) {
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
  }
  getInfo() {
    return `The name of my Dog is ${this.name}. He is ${this.age}years old ${this.color} in color and has ${this.legs} legs`
  }
}
const newAnimal = new animal('Puppy', 6, 'White', 4)
console.log(newAnimal)
console.log(newAnimal.getInfo())

// Create a Dog and Cat child class from the Animal Class.

class Dog extends animal {
  constructor(name, age, color, legs) {
    super(name, age, color)
    this.legs = legs
  }
  getInfo() {
    const checkLegs = this.legs === 4 ? `My Dog has ${this.legs}` : `My Dog is Disbled and has ${this.legs} legs`
    return `The name of my Dog is ${this.name}. He is ${this.age}years old ${this.color} in color and ${checkLegs}`
  }
}
const forDog = new Dog('Eskimo', '17', 'Black', 3)

console.log(forDog.getInfo())

class Cat extends animal {
  constructor(name, age, color, legs, gender) {
    super(name, age, color, legs)
    this.legs = legs
    this.gender
  }
  getInfo() {
    const checkCatLeg = this.legs == 4 ? `My cat has ${this.legs} legs` : `My cat has ${this.legs} legs and disabled`
    const checkAge = this.age <= 3 ? `My cat is ${this.age} years old and still small` : this.age >= 3 ? `My cat is ${this.age} years old and still young` : `My cat is old`

    return `The name of my cat is ${this.name}. ${checkAge} ${this.color} in color and ${checkCatLeg}`
  }
}


