/* eslint-disable no-console */
import Dog from '../shared/dog';
// import Cat from '../shared/animal';

const browserToby = new Dog('Browser Toby');
document.querySelector('.app').innerText = browserToby.bark();

// const str = 'World';
// console.log(`Hello ${str}!`);
//
// const toby = new Dog('Toby');
// console.log(toby.bark());
//
// const tobyn = new Cat('Tobyn');
// console.log(tobyn.speak());
