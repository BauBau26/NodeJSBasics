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
function ageDifference(person1: Person, person2: Person): number {}

//const nicoHeight = heightInCm(nico.height.feet, nico.height.inches);
const nicoHeight = personHeightInCm(nico);
const armandHeight = personHeightInCm(armand);

console.log(`nico: ${nicoHeight}, armand: ${armandHeight}`);
