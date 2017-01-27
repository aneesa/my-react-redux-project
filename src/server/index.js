/* eslint-disable no-console */
import Dog from '../shared/dog';
import Cat from '../shared/animal';

const str = 'World';
console.log(`Hello ${str}!`);

const toby = new Dog('Toby');
console.log(toby.bark());

const tobyn = new Cat('Tobyn');
console.log(tobyn.speak());
