// Home work 1 week

//Exersize №1

const sayHello = (name) => {
  if (name.toLowerCase() === "mark") {
    console.log(`Hi ${name}!`);
  } else console.log(`Hello ${name}!`);
};

const sayHello2 = function (name) {
  if (name.toLowerCase() === "mark") {
    console.log(`Hi ${name}!`);
  } else console.log(`Hello ${name}!`);
};

sayHello("Oleg");
sayHello("Viktor");
sayHello("Mark");

sayHello2("Oleg");
sayHello2("Viktor");
sayHello2("mark");

console.log("-----------------------");

//Exersize №2 У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

const calcGipotenuza = function (n, m) {
  const gipotenuza = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
  console.log(`Гипотенуза треугольника равна: ${gipotenuza}`);
};

calcGipotenuza(3, 4);

const calcGipotenuza2 = (n, m) => {
  const gipotenuza = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
  console.log(`Гипотенуза треугольника равна: ${gipotenuza}`);
};

calcGipotenuza2(3, 4);

console.log("-----------------------");

//Exersize 3

const min = function (a, b) {
  if (a === b) {
    console.log(`Числа равны`);
  } else {
    result = Math.min(a, b);
    console.log(`Меньшее из чисел: ${result}`);
  }
};

min(2, 5);
min(3, -1);
min(1, 1);

const min2 = (a, b) => {
  if (a === b) {
    console.log(`Числа равны`);
  } else {
    result = Math.min(a, b);
    console.log(`Меньшее из чисел: ${result}`);
  }
};

min2(2, 5);
min2(3, -1);
min2(1, 1);

console.log("-----------------------");

//Exersize 4 Определить является ли функция четным числом

const isEven = function (n) {
  return n % 2 === 0;
};

console.log(isEven(3));
console.log(isEven(4));
console.log(isEven(5));
console.log(isEven(6));

const isEven2 = (n) => {
  return n % 2 === 0;
};
console.log(isEven2(3));
console.log(isEven2(4));
console.log(isEven2(5));
console.log(isEven2(6));

console.log("-----------------------");

//Exersize 5

const deleteChars = function (str) {
  const result = str.slice(1, str.length - 1);
  console.log(result);
};

deleteChars("Hello");
deleteChars("A");

const deleteChars2 = (str) => {
  const result = str.slice(1, str.length - 1);
  console.log("результат: " + result);
};

deleteChars2("Hello");
deleteChars2("A");

console.log("-----------------------");

//Exersize 6

const getUpperCase = function (str) {
  const arrayStr = str.split("");
  const newArray = [];
  for (i = 0; i < arrayStr.length; i++) {
    if (i === 0) {
      newArray.push(arrayStr[i].toUpperCase());
    } else newArray.push(arrayStr[i].toLowerCase());
  }
  const result = newArray.join("");
  console.log(result);
};

getUpperCase("пиТеР");
getUpperCase("javaScript");

const getUpperCase2 = (str) => {
  const arrayStr = str.split("");
  const newArray = [];
  for (i = 0; i < arrayStr.length; i++) {
    if (i === 0) {
      newArray.push(arrayStr[i].toUpperCase());
    } else newArray.push(arrayStr[i].toLowerCase());
  }
  const result = newArray.join("");
  console.log(`Правильное зачение: ${result}`);
};

getUpperCase2("пиТеР");
getUpperCase2("javaScript");

console.log("-----------------------");

//Exersize 7

const getInverseType = function (str) {
  const newArray = [];
  for (i = 0; i < str.length; i++) {
    if (typeof str[i] === "number") {
      newArray.push(String(str[i]));
    } else if (typeof str[i] === "string") {
      newArray.push(Number(str[i]));
    }
  }
  console.log(str);
  console.log(newArray);
};

getInverseType([1, 2, 3, 4, "6", "7", "8", "9"]);

const getInverseType2 = (str) => {
  const newArray = [];
  for (i = 0; i < str.length; i++) {
    if (typeof str[i] === "number") {
      newArray.push(String(str[i]));
    } else if (typeof str[i] === "string") {
      newArray.push(Number(str[i]));
    }
  }
  console.log(`Исходный массив:`);
  console.log(str);
  console.log(`Преобразованный массив:`);
  console.log(newArray);
};

getInverseType2([1, 2, 3, 4, "6", "7", "8", "9"]);

console.log("-----------------------");

//Exersize 8

const getSumMassiv = function (array1, array2) {
  const newArray = [...array1, ...array2];
  console.log(newArray);
};
getSumMassiv([1, 2, 3], [4, 5, 6]);

const getSumMassiv2 = (array1, array2) => {
  const newArray = [...array1, ...array2];
  console.log(newArray);
};

getSumMassiv2([1, 2, 3], [4, 5, 6]);

console.log("-----------------------");

//Exersize 9

const stringCutter = function (str, num) {
  const result = str.slice(0, num) + "...";
  console.log(result);
};

stringCutter("Привет Мир!", 6);

const stringCutter2 = (str, num) => {
  const result = str.slice(0, num) + "...";
  console.log(
    `первые ${num} выделенных букв из строки + многоточие: ${result}`
  );
};

stringCutter2("Привет Мир!", 6);
