// // const ids = new Set([1, 2, 3]);

// // ids.add(4);
// // console.log(ids);
// // if (ids.has(2)) {
// //   ids.delete(2);
// // }
// // // entries();
// // for (const entry of ids.values()) {
// //   console.log(entry);
// // }

// const person1 = { name: 'Aamer' };
// const person2 = { name: 'Anas' };

// const personData = new Map([[person1, [{ date: 'Yesterday', price: 10 }]]]);

// personData.set(person2, [{ date: 'Two Weeks Ago', price: 100 }]);

// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const key of personData.values()) {
//   console.log(key);
// }

let person = { name: 'Max', age: 23, date: '23/2/2003' };

const persons = new WeakSet();

persons.add(person);

// .. some operations
// person = null;

console.log(persons);

const personsData = new WeakMap();
personsData.set(person, 'Extra info!');

person = null;

console.log(personsData);
