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
    this.gender = gender
  }
  getInfo() {
    const checkCatLeg = this.legs == 4 ? `My cat has ${this.legs} legs` : `My cat has ${this.legs} legs and disabled`
    const checkAge = this.age <= 3 ? `My cat is ${this.age} years old and still small` : this.age >= 3 ? `My cat is ${this.age} years old and still young` : `My cat is old`
    const pronoun = this.gender == 'Male' ? 'He' : 'She'
    return `The name of my cat is ${this.name}. ${checkAge} ${this.color} in color and ${checkCatLeg} and ${pronoun} is a ${this.gender}`
  }
}
const animalChild = new Cat('Eskimo', 1, 'Dark', '3', 'Male')
console.log(animalChild.getInfo())


console.log('%cExercise%c %cTwo%c %cStarts%c %cHere%c',
  'color:red;font-size:4rem',
  '',
  'color:green;font-size:4rem',
  '',
  'color:purple;font-style:italic;font-size:4rem',
  '',
  'font-size:4rem;color:yellow',
  '')

// Override the method you create in Animal class
class animalOverride extends animal {
  constructor(name, age, color, legs, gender) {
    super(name, age, color, legs, gender)
    this.legs = legs
    this.gender = gender
    this.skills = []

  }
  saySomething() {
    return 'Call me Intelligence'
  }

  set setSkill(skill) {
    this.skills.push(skill) //or
    // this.skill += skill
  }
  getInfo() {
    let skillAnd = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`
    const formats = skillAnd ? `He knows how to ${skillAnd}` : ''
    const checkCatLeg = this.legs == 4 ? `My cat has ${this.legs} legs` : `My cat has ${this.legs} legs and disabled`
    const checkAge = this.age <= 3 ? `My cat is ${this.age} years old and still small` : this.age >= 3 ? `My cat is ${this.age} years old and still young` : `My cat is old`
    const pronoun = this.gender == 'Male' ? 'He' : 'She'
    return `The name of my cat is ${this.name}. ${checkAge} ${this.color} in color and ${checkCatLeg} and ${pronoun} is a ${this.gender} and ${formats}`
  }
}
const overriddenAnimal = new animalOverride('Eskimo', 3, 'White', 5, 'Female')
console.log(overriddenAnimal.saySomething())

overriddenAnimal.setSkill = 'Jump'
overriddenAnimal.setSkill = 'fight'
overriddenAnimal.setSkill = 'Work'

console.log(overriddenAnimal.getInfo())

console.log('%cExercise%c %cTwo%c %cEnds%c %cHere%c',
  'color:red;font-size:1rem',
  '',
  'color:green;font-size:1rem',
  '',
  'color:purple;font-style:italic;font-size:1rem',
  '',
  'font-size:1rem;color:yellow',
  '')

console.log('%cExercise%c %cThree%c %cStarts%c %cHere%c',
  'color:red;font-size:4rem',
  '',
  'color:green;font-size:4rem',
  '',
  'color:purple;font-style:italic;font-size:4rem',
  '',
  'font-size:4rem;color:yellow',
  '')
// 1.Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

class measureOfTendency {
  constructor(ages) {
    this.ages = ages
  }
  
}
const ans = new measureOfTendency([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])
// console.log(ans)