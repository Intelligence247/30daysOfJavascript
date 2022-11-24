// Objects

// 3.1 Use the literal syntax for object creation. eslint: no-new-object
// bad
// const item = new Object();

// good
// const items = {};


// 3.2 Use computed property names when creating objects with dynamic property names.
// Why? They allow you to define all the properties of an object in one place.

/*
function getKey(k) {
    return `a key named ${k}`;
  }

  // bad
  const obj = {
    id: 5,
    name: 'San Francisco',
  };
  obj[getKey('enabled')] = true;

  // good
  const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
  };*/
/*3.3 Use object method shorthand. eslint: object-shorthand

// bad
const atom = {
  value: 1,

  addValue: function (value) {
    return atom.value + value;
  },
};

// good
const atom = {
  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};*/

/*3.4 Use property value shorthand. eslint: object-shorthand

Why? It is shorter and descriptive.

const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// good
const obj = {
  lukeSkywalker,
};*/

/*3.5 Group your shorthand properties at the beginning of your object declaration.

Why? It’s easier to tell which properties are using the shorthand.

const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};*/

/*3.6 Only quote properties that are invalid identifiers. eslint: quote-props

Why? In general we consider it subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JS engines.

// bad
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5,
};

// good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
}; */

/*3.7 Do not call Object.prototype methods directly, such as hasOwnProperty, propertyIsEnumerable, and isPrototypeOf. eslint: no-prototype-builtins

Why? These methods may be shadowed by properties on the object in question - consider { hasOwnProperty: false } - or, the object may be a null object (Object.create(null)).

// bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// best
const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
console.log(has.call(object, key));
 or
import has from 'has'; // https://www.npmjs.com/package/has
console.log(has(object, key));

 */

/*

3.8 Prefer the object spread syntax over Object.assign to shallow-copy objects. Use the object rest parameter syntax to get a new object with certain properties omitted. eslint: prefer-object-spread

// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
delete copy.a; // so does this

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 } */



// Array

/*4.1 Use the literal syntax for array creation. eslint: no-array-constructor

// bad
const items = new Array();

// good
const items = [];
*/

/*
const someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');*/

/*4.3 Use array spreads ... to copy arrays.

// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];*/

/*4.4 To convert an iterable object to an array, use spreads ... instead of Array.from

const foo = document.querySelectorAll('.foo');

// good
const nodes = Array.from(foo);

// best
const nodes = [...foo];*/