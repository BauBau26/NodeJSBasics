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

// return true if a is equal to b or b is not equal to c

//// CODE TO RUN ////

// map: transform all values using function. Returns same number as started
// filter: remove some values based on a condition
// forEach: perform an action on every value in array

const numberArray = [1, 4, 9, 11];

const newNumbers = numberArray.map((oldNumber) => {
  return 2 * oldNumber;
});

const filtered = numberArray.filter((n) => n > 8);

numberArray.forEach((theNumber) => {
  console.log(theNumber);
});

// 1) Remove all items that are larger than 5
// 2) log the description on each person
// 3) Give me the height in cm for each person in an array

const numberArray = [1, 4, 9, 11];

const filtered = numberArray.filter((a) => !(a > 5));

// console log, description function, list of people

const peopleList = [nico, armand];

peopleList.forEach((person) => {
  const description = personDescription(person);
  console.log(description);
});

// height, height in cm, person, array

const peopleList = [nico, armand];

const peopleHeight = peopleList.map((person) =>
  heightInCm(person.height.feet, person.height.inches)
);
