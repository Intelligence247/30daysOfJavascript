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

class regular {
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
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
}

const persn1 = new regular('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new regular('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
const person3 = new regular('John', 'Doe', 50, 'Mars', 'Mars city')

persn1.setSkill = 'HTML'
persn1.setSkill = 'CSS'
persn1.setSkill = 'JavaScript'

person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

person3.setSkill = 'HTML'
person3.setSkill = 'CSS'
person3.setSkill = 'JavaScript'

console.log(persn1.getSkills)
console.log(person2.getSkills)

console.log(persn1.getPersonInfo())






class regular2 {
    constructor(firstName, lastName, age, country, city, gender) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.gender
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
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skillAnd = this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`
        let formatSkills = skillAnd ? `He knows ${skillAnd}` : ''
        let info = `${fullName} is ${this.age}. He lives in ${this.city}, ${this.country}. ${formatSkills}`
        return info
    }
}

const first = new regular2('Abdullahi', 'Usman', 34, 'Nigeria', 'Abuja')
first.setSkill = 'html'.toUpperCase()
first.setSkill = 'CSS'
first.setSkill = 'Java'.toUpperCase()
console.log(first.getSkills)

console.log(first.getPersonInfo())


// Static methods
// The static keyword defines a static method for a class. Static methods are not called on instances of the class. Instead, they are called on the class itself. These are often utility functions, such as functions to create or clone objects. An example of static method is Date.now(). The now method is called directly from the class.
class staticKeyword {
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
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skillAnd = this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`
        let formatSkills = skillAnd ? `He knows ${skillAnd}` : ''
        let info = `${fullName} is ${this.age}. He lives in ${this.city}, ${this.country}. ${formatSkills}`
        return info
    }
    static favSkills() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }
    static myDate() {
        const now = new Date();
        const month = now.getDay() + 1
        let year = now.getFullYear()
        let minutes = now.getMinutes()
        let date = now.getDate()
        let hour = now.getHours()
        if (minutes < 10) {
            minutes = '0' + minutes
        }
        const fulltime = date + '.' + month + '.' + year + ' ' + hour + ':' + minutes;
        return fulltime
    }
}

console.log(staticKeyword.favSkills())
console.log(staticKeyword.myDate())
const my = 'JAVASCRIPT LANGUAGE IS THE BEST FOREVER'
console.log(my.substring(0, 1).toUpperCase() + my.substr(1).toLowerCase())
// The static methods are methods which can be used as utility functions.



// Inheritance
// Using inheritance we can access all the properties and the methods of the parent class. This reduces repetition of code. If you remember, we have a Person parent class and we will create children from it. Our children class could be student, teach etc.

// class childClassName extends {
// code goes here
// }
class Student extends regular2 {
    saySomething() {
        return 'I am a child of regualar2'
    }
}
const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
console.log(s1)
console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())

// Overriding methods

// As you can see, we manage to access all the methods in the Person Class and we used it in the Student child class. We can customize the parent methods, we can add additional properties to a child class. If we want to customize, the methods and if we want to add extra properties, we need to use the constructor function the child class too. Inside the constructor function we call the super() function to access all the properties from the parent class. The Person class didn't have gender but now let us give gender property for the child class, Student. If the same method name used in the child class, the parent method will be overridden.


class student2 extends regular2 {
    constructor(firstName, lastName, age, country, city, gender) {
        super(firstName, lastName, age, country, city, gender)
        this.gender = gender
    }
    saySomething() {
        return 'My name is Usman Abdullahi Babatunde and I\'m a FrontEnd Developer'
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skilWithAnd = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`
        let format = skilWithAnd ? `He knows ${skilWithAnd}` : ''
        let pronoun = this.gender == 'Male' ? 'He' : 'She'
        let info = `${fullName}is ${this.age}.${pronoun} lives in ${this.city},${this.country}.${format}`

        return info
    }
}
const s2 = new student2('Asabeneh', 'Yetayeh', 250, 'Findland', 'Helsinki', 'Male')
const s3 = new student2('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
console.log(s2.saySomething())
console.log(s3.saySomething())
s2.setScore = 1
s2.setSkill = 'HTML'
s2.setSkill = 'CSS'
s2.setSkill = 'JavaScript'


s3.setScore = 1
s3.setSkill = 'Planning'
s3.setSkill = 'Managing'
s3.setSkill = 'Organizing'

console.log(s2)

console.log(s2.getPersonInfo())
console.log(s3.getPersonInfo())

  // Now the getPersonInfo has been overriden and it identifies if the person is a male or female

