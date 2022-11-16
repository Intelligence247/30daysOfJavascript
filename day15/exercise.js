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

class Person {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const person = new Person()
  
  console.log(person)





