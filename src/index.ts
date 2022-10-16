const nico = {
  name: "nico",
  age: 26,
  height: {
    feet: 5,
    inches: 4,
  },
};
const inchesToCm = 2.54;
const heightInCm =
  nico.height.feet * 12 * inchesToCm + nico.height.inches * inchesToCm;
console.log(heightInCm);
