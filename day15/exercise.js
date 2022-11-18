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
  describe() {
    let length = this.ages.length

    //
    let sum = 0
    for (let i = 0; i < this.ages.length; i++) {
      sum += this.ages[i]
    }
    //
    let min = Math.min(...this.ages)
    let max = Number((Math.max(...this.ages)))
    //Median starts here
    let sort = this.ages.sort((a, b) => a - b)
    let median = length % 2 == 1 ? sort[Math.floor(length / 2)] : (sort[Math.floor(length / 2)] + sort[Math.floor(length / 2 - 1)]) / 2
    let mean = Math.round(sum / length)
    //Median ends Here

    //Variance starts here
    let variance = sort.map((x) => x - mean)
    let varianceSq = variance.map((n) => n ** 2)
    let sumV = 0
    for (let i = 0; i < varianceSq.length; i++) {
      sumV += varianceSq[i]
    }
    sumV = sumV / length
    // variance Ends Here
    let sq = Math.sqrt(sumV)

    let standardDeviation = Math.round(sq * 10) / 10//It returns 1 decimal number, and also when the two 10 are changed to 100 it will be two decimal number and 1000 three decimal Number. 

    // let standardDeviation = Number(sq.toFixed(1))//But this returns a 1 decimal string, this can be changed to a number using (Number); It is not advisable to use parsInt because the toFixed won't wort anymore
    return {
      'count': length,
      Sum: sum,
      Min: min,
      Max: max,
      Range: max - min,
      Mean: mean,
      Median: median,
      Variance: sumV,
      'Standard Deviation': standardDeviation,

    }
  }

}
const ans = new measureOfTendency([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])

console.log(ans.describe())
// console.log(ans)

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
let count = {}
const mode = ages.forEach((e) => {
  if (count[e] === undefined) {
    return count[e] = 0
  } else {
    return console.log(count[e] += 1)
  }
})
console.log(count)

const copy = Object.assign(count)
console.log(copy)
const value = Object.values(copy)
console.log(value)
let sortV = value.sort((a, b) => b - a)
console.log(sortV)
console.log(count[26])

console.log('%cExercise%c %cFour%c %cStarts%c %cHere%c',
  'color:red;font-size:4rem',
  '',
  'color:green;font-size:4rem',
  '',
  'color:purple;font-style:italic;font-size:4rem',
  '',
  'font-size:4rem;color:yellow',
  '')

// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount {
  constructor(firstname, lastname, incomes, expenses) {
    this.firstname = firstname
    this.lastname = lastname
    this.incomes = incomes
    this.expenses = expenses

  }
  totalIncome() {
    let sum = 0
    for (let i = 0; i < this.incomes.length; i++) {
      sum += this.incomes[i]
    }
    return sum
  }
  totalExpenses() {
    let ss = 0
    const sum = this.expenses.forEach((n) => ss += n)
    return ss
  }
  accountInfo() {
    const info = `${this.firstname} ${this.lastname} is the owner of this account with income of ${this.totalIncome} and with expenses of ${this.totalExpenses}`
  }
  set addIncome(inc) {
    // inc += this.incomes
    this.incomes.push(inc)
  }
  set addExpenses(exp) {
    this.expenses.push(exp)
  }
  accounBalance() {
    const balance = this.totalIncome() - this.totalExpenses()
    return balance
  }
}
const account = new PersonAccount('Usman', 'Abdullahi', [20, 30, 890, 78], [23, 45, 67])
account.addIncome = 2309
account.addExpenses = 900
console.log(account.accounBalance())
console.log(account.totalIncome())
console.log(account.totalExpenses())
