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



/*4.5 Use Array.from for converting an array-like object to an array.
const arrLike = {
  0: 'foo',
  1: 'bar',
  2: 'baz',
  3: 'Abdullahi',
  length: 4
};

// bad
const arr2 = Array.prototype.slice.call(arrLike);

// good
const arr = Array.from(arrLike);
console.log(arr2)*/


/*4.6 Use Array.from instead of spread ... for mapping over iterables, because it avoids creating an intermediate array.

// bad
const baz = [...foo].map(bar);

// good
const baz = Array.from(foo, bar); */

/*4.7 Use return statements in array method callbacks. It’s ok to omit the return if the function body consists of a single statement returning an expression without side effects, following 8.2. eslint: array-callback-return

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => x + 1);

// bad - no returned value means `acc` becomes undefined after the first iteration
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
});

// good
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
  return flatten;
});

// bad
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  } else {
    return false;
  }
});

// good
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  }

  return false;
}); */


/*4.8 Use line breaks after open and before close array brackets if an array has multiple lines

// bad
const arr = [
  [0, 1], [2, 3], [4, 5],
];

const objectInArray = [{
  id: 1,
}, {
  id: 2,
}];

const numberInArray = [
  1, 2,
];

// good
const arr = [[0, 1], [2, 3], [4, 5]];

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const numberInArray = [
  1,
  2,
]; */


// Destructuring

/*5.1 Use object destructuring when accessing and using multiple properties of an object. eslint: prefer-destructuring

Why? Destructuring saves you from creating temporary references for those properties, and from repetitive access of the object. Repeating object access creates more repetitive code, requires more reading, and creates more opportunities for mistakes. Destructuring objects also provides a single site of definition of the object structure that is used in the block, rather than requiring reading the entire block to determine what is used.

// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
} */

/*5.2 Use array destructuring. eslint: prefer-destructuring

const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr; */

/*5.3 Use object destructuring for multiple return values, not array destructuring.

Why? You can add new properties over time or change the order of things without breaking call sites.

// bad
function processInput(input) {
  // then a miracle occurs
  return [left, right, top, bottom];
}

// the caller needs to think about the order of return data
const [left, __, top] = processInput(input);

// good
function processInput(input) {
  // then a miracle occurs
  return { left, right, top, bottom };
}

// the caller selects only the data they need
const { left, top } = processInput(input); */