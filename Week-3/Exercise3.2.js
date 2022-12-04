// Bind

const obj1 = {
  fName: "Soumili",
  lName: "Chatterjee",
  printName() {
    return this.fName + " " + this.lName;
  },
};
let ex = obj1.printName.bind(obj1);
console.log(ex());

// Call

const obj2 = {
  fName: "Dhruvjyoti",
  lName: "Ray",
};

function bio(place) {
  return `${this.fName} ${this.lName} from ${place}`;
}

let person = bio.call(obj2, "Kolkata");

console.log(person);

// Apply

const obj3 = {
  fName: "Pipu",
};

function characteristics(place, thing) {
  return `Hello, my name is ${this.fName}. I live in ${place}. Follow for more ${thing}`;
}

let personOne = characteristics.apply(obj3, ["The 42", "cuteness "]);

console.log(personOne);
