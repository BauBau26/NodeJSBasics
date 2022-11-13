// What is a person? 🤔
interface Person {
  name: string;
  age: number;
  height: {
    feet: number;
    inches: number;
  };
}

// make a person
const nico: Person = {
  name: "nico",
  age: 26,
  height: {
    feet: 5,
    inches: 4,
  },
};

const armand: Person = {
  name: "armand",
  age: 27,
  height: {
    feet: 5,
    inches: 11,
  },
};

// function to calculate height in cm from feet and inches
function heightInCm(feet: number, inches: number) {
  const inchesToCm = 2.54;
  return feet * 12 * inchesToCm + inches * inchesToCm;
}

// function to calculate height in cm given a person
function personHeightInCm(person: Person) {
  const inchesToCm = 2.54;
  return (
    person.height.feet * 12 * inchesToCm + person.height.inches * inchesToCm
  );
}

// find age difference between two people
function ageDifference(person1: Person, person2: Person): number {
  return person1.age - person2.age;
}

// function that takes a Person, and returns a description of them as a string.
function personDescription(person: Person): string {
  return `${person.name} is ${person.height.feet}ft${person.height.inches} and ${person.age} years old`;
}

//// CODE TO RUN ////

// map: transform all values using function. Returns same number as started
// filter: remove some values based on a condition
// forEach: perform an action on every value in array

const numberArray = [1, 4, 9, 11];

const newNumbers = numberArray.map((oldNumber) => {
  return oldNumber + 1;
});

const filtered = numberArray.filter((theNumber) => {
  const isLarger = theNumber > 8;

  return isLarger;
});

numberArray.forEach((theNumber) => {
  console.log(theNumber);
});

// 1) Remove all items that are smaller than 3
// 2) log the description on each person
// 3) Give me the height in cm for each person
