// Task 1
function printName() {
  console.log("Yousef Al--Masaeed");
}

printName();

// Task 2
function printAge(birthYear) {
  const currentYear = 2024;

  const age = currentYear - birthYear;
  console.log(age);
}

printAge(2002);

// Task 3

function printAgeAndName(birthYear, name) {
  const currentYear = 2024;
  const age = currentYear - birthYear;

  console.log(`Hello ${name} you are ${age} years old`);
}
("");

printAgeAndName(2002, "Yousef Al-Masaeed");

// Task 4

function printHello(name, language) {
  if (language === "en") {
    console.log(`Hello ${name}`);
  } else if (language === "es") {
    console.log(`Hola ${name}`);
  } else if (language === "fr") {
    console.log(`Bonjour ${name}`);
  } else if (language === "tr") {
    console.log(`Merhaba ${name}`);
  } else {
    console.log("language not there");
  }
}

printHello("Yousef", "es");

// Task 5
/**
 * Task 5:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else if (num2 > num1) {
    console.log(num2);
  } else {
    console.log("They are both equal ");
  }
}

printMax(12, 5);
