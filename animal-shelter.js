const animalData = require('./animal-data.json');

class Animal {
  constructor(name, species, color, hunger = 50) {
    this.name = name;
    this.species = species;
    this.color = color;
    this.hunger = hunger;
  }

  greet(noise = 'Hi') {
    console.log(`${noise}, I'm ${this.name} the ${this.species}`);
  }
  feed(food = 'food') {
    this.hunger -= 20;
    console.log(`Yum, I love ${food}.`);
  }
  getAnimalsBySpecies(species) {
    filteredAnimals = this.animals.filter((a) => {
      return a.species === species;
    });
    console.log(filteredAnimals);
    return filteredAnimals;
  }
}

class Cat extends Animal {
  constructor(name, color, hunger) {
    super(name, 'cat', color, hunger);
    this.food = 'fish';
  }
  greet() {
    console.log(`Meow, I'm ${this.name} the ${this.species}`);
  }
  greet() {
    super.greet('Meow');
  }
  feed() {
    super.feed(this.food);
  }
}

class Dog extends Animal {
  constructor(name, color, hunger) {
    super(name, 'dog', color, hunger);
    this.food = 'kibble';
  }
  greet() {
    super.greet('Woof');
  }
  feed() {
    super.feed(this.food);
  }
}

const whiskers = new Cat('Whiskers', 'black');
console.log(whiskers);
const spot = new Dog('Spot', 'white & black');
console.log(spot);

class AnimalShelter {
  constructor() {}
  animals = [];

  addAnimal(animal) {
    this.animals.push(animal);
  }
  adopt(animal) {
    console.log(this.animals.length);
    this.animals.forEach((a, i) => {
      if ((a.name = animal.name)) {
        this.animals.splice(i, 1);
      }
    });
    console.log(this.animals.length);
  }
}

const shelter = new AnimalShelter();

animalData.map((a, i) => {
  let newAnimal;
  if (a.species === 'dog') {
    newAnimal = new Dog(a.name, a.color, a.hunger);
  } else if (a.species === 'cat') {
    newAnimal = new Cat(a.name, a.color, a.hunger);
  } else {
    newAnimal = new Animal(a.name, a.species, a.color, a.hunger);
  }
  shelter.addAnimal(newAnimal);
});

shelter.animals.forEach((a) => {
  a.greet();
  a.feed();
});
