export default class {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `Hello, yes I can speak. I am ${this.name}`;
  }
}
