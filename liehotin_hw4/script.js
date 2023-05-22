// task 1
// let str = "";
// for (let i = 20; i <= 30; i += 0.5) {
//     str += `${i} `
// }

// console.log(str)

// task 2

const oneDollar = 27;
const prices = {};

for (let count = 10; count <= 100; count += 10) {
    if (!prices[count]) prices[count] = [];
    prices[count].push(count * oneDollar);
}

console.log(prices);

// task 3

// const N = 81;
// let numbers = "";

// for (let i = 1; i <= 100; i++) {
//     if (i**2 > N) { break; };
// 	numbers += `${i} `;
// }

// console.log(numbers);

// task 4

// const n = 1999;
// let i;

// for (i = 2; i<=n; i++) {
//     if(n%i === 0) { break; };
// }
// if (i === n) {
//     console.log(`${n} - prime number`);
// } else {
//     console.log(`${n} - composite number`);
// }

// task 5

// const number = 720;
// let pow = 1;
//     for (; 3**pow <= number; pow++) {
//         if (number%3**pow != 0 || number === 3**pow) { break; } 
//     }
//     if(number%3**pow === 0) {
//         console.log(`${number} equel 3^${pow}`);
//     } else {
//         console.log(`${number} not equel 3^x`);
//     }
  



