// Super class
class Person {
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

class Mentor extends Person {
  // Mentor bios need to include a bit more info
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
}
class Student extends Person {
  //Student needs to say how old they are
  bio() {
    return `I am, too young to give you my age... but.... ${super.bio()}`
  }
}




// DRIVER CODE

const bob = new Mentor('Bob Ross', 'I like mountains way too much');
const shawn = new Student("Shawn", "I love jess");
console.log(bob.bio());
console.log(shawn.bio())