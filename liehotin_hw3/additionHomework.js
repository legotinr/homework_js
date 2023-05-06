/*// task 1
const a = 2;
const b = 3;
if (a === b) {
    answer = 'first number equal second number'
} else {
    answer = (a>b) ? 'first number more than second number' : 'first number less than second number'
}


console.log(answer)

// task 2
const km = 0.99979;
const ft = 3278;

if (km*1000 === ft*0.305) {
    answer = 'first length equal second lenght'
} else {
    answer = ((km*1000)>(ft*0.305)) ? 'first length more than second length' : 'first length less than second length'
}


console.log(answer)

// task 3

const a = 11;
const b = 22;

const firstAnswer = (a%b===0) ? `number ${b} is a divisor of number ${a}` : `number ${b} is not a divisor of number ${a}`
const secondAnswer = (b%a===0) ? `number ${a} is a divisor of number ${b}` : `number ${a} is not a divisor of number ${b}`

console.log(firstAnswer)
console.log(secondAnswer)

// task 4

const number = 21651616210;
const parity = (number%2 === 0) ? 'even' : 'odd'
const lastDigit = number%10

console.log(parity)
console.log(lastDigit)

// task 5

const number = 99;
const secondDigit = number%10;
const firstDigit = (number - secondDigit)/10
let answer
if (firstDigit === secondDigit) {
    answer = 'first digit equal second digit'
} else {
    answer = (firstDigit>secondDigit) ? 'first digit more than second digit' : 'first digit less than second digit'
}

console.log(answer)

// task 6

const number = 545;
const stringNumber = String(number)
const thirdDigit = Number(stringNumber[2])
const secondDigit = Number(stringNumber[1])
const firstDigit = Number(stringNumber[0])
const sumOfDigit = thirdDigit+secondDigit+firstDigit
const multitplyOfDigit = thirdDigit*secondDigit*firstDigit

if(sumOfDigit%2 === 0) {
    console.log('even')
} else {
    console.log('odd')
}

if(sumOfDigit%5 === 0) {
    console.log('multiply of 5')
} else {
    console.log('not multiply of 5')
}

if(multitplyOfDigit < 100) {
    console.log('multiply less than 100')
} else {
    console.log('multiply equel or more than 100')
}

// task 7

const number = 499;
console.log(number>=0 && number<= 500)

// task 8

const year = 1900;

if(year%4 != 0) {
    console.log('non-leap year')
} else if(year%100 === 0 && year%400 != 0) {
 console.log('non-leap year')
} else {
    console.log('leap year')
}*/
