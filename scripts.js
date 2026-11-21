// Task 1

let str = "Привет, мир!";

function greet(str) {
    console.log(str);
};

greet(str);

// Task 2

function sayHello(name) {
    console.log(`Привет, ${name}!`);
};

sayHello("Темирлан");

// Task 3

function sum(a, b) {
    return a + b;
};

let result = sum(5, 10);
console.log(result);

// Task 4

function isEven(num) {
    return num % 2 === 0;
};

let num1 = 8;
let num2 = 7;

console.log(isEven(num1));
console.log(isEven(num2));

// Task 5

function max(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "Числа равны";
    }
};

let maxResult = max(15, 15);
console.log(maxResult);

// Task 6

function getInitials(str1, str2) {
    let initials = str1.charAt(0).toUpperCase() + '.' + str2.charAt(0).toUpperCase() + '.';
    return initials;
};

let initialsResult = getInitials("Темирлан", "Кожагулов");
console.log(initialsResult);
let initialsResult2 = getInitials("Александр", "Пушкин");
console.log(initialsResult2);

// Task 7

function square(num) {
    return num * num;
};

function cube(num) {
    return square(num) * num;
};

let squareResult = square(4);
console.log(squareResult);
let cubeResult = cube(4);
console.log(cubeResult);

// Task 8

let sumArrow = (a, b) => {
    return a + b;
};

let sumResult = sumArrow(20, 30);
console.log(sumResult);

// Task 9

function getFactorial(n) {
    if (n > 1) {
        return n * getFactorial(n - 1);
    } else {
        return 1;
    }
};

let factorialResult = getFactorial(5);
console.log(factorialResult);
