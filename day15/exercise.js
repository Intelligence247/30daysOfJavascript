// Classes
// JavaScript is an object oriented programming language. Everything in JavScript is an object, with its properties and methods. We create class to create an object. A Class is like an object constructor, or a "blueprint" for creating objects. We instantiate a class to create an object. The class defines attributes and the behavior of the object, while the object, on the other hand, represents the class.

// Once we create a class we can create object from it whenever we want. Creating an object from a class is called class instantiation.

// In the object section, we saw how to create an object literal. Object literal is a singleton. If we want to get a similar object , we have to write it. However, class allows to create many objects. This helps to reduce amount of code and repetition of code.

// Defining a classes
// To define a class in JavaScript we need the keyword class , the name of a class in CamelCase and block code(two curly brackets). Let us create a class name Person.
// syntax
class ClassName {
  //  code goes here
}

class name {
  // Code goes here
}

// Class Instantiation
// class instantiation is the creating of an object from a class. We need the keyword new and we call the name of the class after the word new.
// Let us create a dog object from our Person class.
class Persons { }
const persons = new Persons()
console.log(persons)
class Obj2 { }
const obj2 = new Obj2()
console.log(obj2)
// As you can see, we have created a person object. Since the class did not have any properties yet the object is also empty.

// Let use the class constructor to pass different properties for the class

// Class Constructor
// The constructor is a builtin function which allows us to create a blueprint for our object. The constructor function starts with a keyword constructor followed by a parenthesis. Inside the parenthesis we pass the properties of the object as parameter. We use the this keyword to attach the constructor parameters with the class.
// The following Person class constructor has firstName and lastName property. These properties are attached to the Person class using this keyword. This refers to the class itself.
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person = new Person('Abdullahi', 'Babatunde')
console.log(person)



class practice {
  constructor(firstName, secondName, lastName, nickName) {
    this.firstName = firstName
    this.secondName = secondName
    this.lastName = lastName
    this.nickName = nickName
  }
}
const newPractice = new practice('Abdullahi', 'Usman', 'Babatunde', 'Intelligence')
const newPractice2 = new practice('Idris', 'Usman', 'Woru Amuekun laaye', 'Diligent')
const newPractice3 = new practice('Hussein', 'Soliu', 'Akande', 'Alfa nla')

console.log(newPractice, newPractice2, newPractice3)
// console.log(newPractice2)
// console.log(newPractice3)

class personHistory {
  constructor(firstName, lastName, age, country, city) {
    console.log(this)
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    console.log(this)
  };
};
const history = new personHistory('Asabeneh', 'Yetayeh', '250', 'Finlan', 'Helsinki')
// console.log(history)

// Default values with constructor
// The constructor function might also have a default value just like regualar function


class defaultValue {
  constructor(
    firstName = 'Abdullahi',
    secondName = 'Usman',
    thirdName = 'Intelligence',) {
    this.firstName = firstName;
    this.secondName = secondName
    this.thirdName = thirdName
    // console.log(this)
  }

}
const print1 = new defaultValue()
const print2 = new defaultValue('Yusuf', 'Muhammed', 'Abdulmuimin')
console.log(print1) // this will print the default value
console.log(print2)

// Class Methods
// The constructor inside a class is a builtin function which allow us to create a blueprint for the object. In a class we can create class methods. Methods are JavaScript functions inside the class. Let us create some class methods.

class classMethods {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
  getFullName() {
    return this.firstName + ' ' + this.lastName
  }
}
const methods = new classMethods('usman', 'Abdullahi', 90, 'Nigeria', 'Ilorin')
const methods2 = new classMethods('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')


console.log(methods.getFullName())
console.log(methods2.getFullName())

// Properties with initial value
// When we create a class for some properties we may have an initial value. For instance if you are playing a game, you starting score will be zero. So, we may have a starting score or score which is zero. In other way, we may have an initial skill and we will acquire some skill after some time.

class initialValues {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}
const initial1 = new initialValues('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')

console.log(initial1.score)
console.log(initial1.score)

console.log(initial1.skills)


// A method could be regular method or a getter or a setter. Let us see, getter and setter.

// Types of methods,
// 1. Regular methods
// 2. Getter
// 3. Setter

// getter
// The get method allows us to get value from the object. We write a get method using keyword get followed by a function. Instead of accessing properties directly from the object we use getter to get the value. See the example bellow
class getter {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getName() {
    return this.firstName
  }
  get getSkills() {
    return this.skills
  }
}


const getterNew = new getter('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
console.log(getterNew.getName)
console.log(getterNew.getScore)


// Setter
// The setter method allow us to modify the value of certain properties. We write a setter method using keyword set followed by a function. See the example bellow
class setter {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getName() {
    return this.firstName
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkills(skills) {
    this.skills.push(skills)
  }
}

const setterNew = new setter('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const setterNew2 = new setter('Abdullahi', 'Babatunde', 25, 'Nigeria', 'Ilorin')
setterNew.setSkills = 'HTML'
setterNew.setSkills = 'CSS'
setterNew.setSkills = 'JavaScript'
setterNew.setScore = 222
console.log(setterNew.skills, setterNew.score)

setterNew2.setScore = 10;
setterNew2.setSkills = 'Cook'
setterNew2.setSkills = 'Baller'
setterNew2.setSkills = 'Developer'
console.log(setterNew2.skills, setterNew2.score)


// Do not be puzzled by the difference between regular method and a getter. If you know how to make a regular method you are good. Let us add regular method called getPersonInfo in the Person class.









