//=======================================================
// function disemvowel(str) {
//   const stringToArray = str.split('');
//   let filteredArray = [];
//   let string = '';

//   for (const letter of stringToArray) {
//     if (
//       letter !== 'A' &&
//       letter !== 'a' &&
//       letter !== 'E' &&
//       letter !== 'e' &&
//       letter !== 'I' &&
//       letter !== 'i' &&
//       letter !== 'O' &&
//       letter !== 'o' &&
//       letter !== 'U' &&
//       letter !== 'u'
//     ) {
//       filteredArray.push(letter);
//     }
//   }

//   string = filteredArray.join('');
//   return string;
// }
// console.log(disemvowel('This website is for losers LOL!'));

//--------------- альтернативный вариант

// function disemvowel(str) {
//   const stringToArray = str.split('');
//   const vovels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
//   let filteredArray = [];

//   for (const letter of stringToArray) {
//     if (!vovels.includes(letter)) {
//       filteredArray.push(letter);
//     }
//   }

//   return filteredArray.join('');
// }
// console.log(disemvowel('This website is for losers LOL!'));
// console.log(
//   disemvowel("No offense but,\nYour writing is among the worst I've ever read"),
// );

//=======================================================

// function getCount(str) {
//   var vowelsCount = 0;
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   const stringToArray = str.split('');

//   for (const item of stringToArray) {
//     if (vowels.includes(item)) {
//       vowelsCount += 1;
//     }
//   }

//   return vowelsCount;
// }
// console.log(getCount('avadacedavra little toortles'));

//=======================================================

// function XO(str) {
//   const stringToLowerCaseArray = str.toLowerCase().split('');
//   let countX = 0;
//   let countO = 0;

//   for (const item of stringToLowerCaseArray) {
//     switch (item) {
//       case 'x':
//         countX += 1;
//         break;

//       case 'o':
//         countO += 1;
//         break;
//     }
//   }

//   console.log('countX: ', countX);
//   console.log('countO: ', countO);
//   return countX === countO ? true : false;
// }

// console.log(XO('qwdqwixoxoxoxo'));

//==================РЕШЕНИЕ В NEED HELP===================

// function order(words) {
//   const wordsArray = words.split(' ');
// const legth = wordsArray.length;

// for (const word of wordsArray) {
// console.log('массив слов: ', wordsArray);
// const letters = word.split('');
// console.log('массив букв из слова: ', letters);

// if (word.split('').includes('1')) {
//   wordsArray[1 - 1] = word;
//   // break;
// } else if (word.split('').includes('2')) {
//   wordsArray[2 - 1] = word;
//   // break;
// } else if (word.split('').includes('3')) {
//   wordsArray[3 - 1] = word;
//   // break;
// } else if (word.split('').includes('4')) {
//   wordsArray[4 - 1] = word;
//   // break;
// } else if (word.split('').includes('5')) {
//   wordsArray[5 - 1] = word;
// }
// for (const letter of letters) {
//   for (let i = 1; i <= legth; i += 1) {
//     // console.log(letter);
//     // console.log(Number(letter));
//     // console.log(i);
//     if (Number(letter) === i) {
//       // console.log(i);
//       wordsArray[i - 1] = word;
//     }
//   }
// }
//   }
//   return wordsArray.join(' ');
// }

// console.log(order('6 2 3 5 4 1'));
// console.log(order('is2 Thi3s Thi1s T5est rw4dq'));
// console.log(order('is2 Thi1s T4est 3a'));
// console.log(order('4of Fo1r pe6ople g3ood th5e the2'));

//=======================================================

// function getSum(a, b) {
//   let sum = 0;
//   let c = 0;

//   for (let i = 0; i <= b - a; i += 1) {
//     if (c < b) {
//       c = a + i;
//     }

//     sum = a + c;
//   }

//   return sum;
//   // const array = [];
//   // console.log(array);
//   // if (a < b) {
//   //   array.push(a + 1);
//   //   a += 1;
//   // }
//   // return array.split('').Number;
// }

// // console.log(getSum(0, -1));
// // console.log(getSum(0, 1));
// // console.log(getSum((-1, 2)));
// console.log(getSum(0, 20));

//======================НЕ ДОДЕЛАЛ=================================
// function getSum(a, b) {
//   let sum = 0;
//   let c = 0;

//   for (let i = a; i <= b; i += 1) {
//     sum += i;
//   }

//   return sum;
// const array = [];
// console.log(array);
// if (a < b) {
//   array.push(a + 1);
//   a += 1;
// }
// return array.split('').Number;
// }

// console.log(getSum(0, -1));
// console.log(getSum(0, 1));
// console.log(getSum((-1, 2)));
// console.log(getSum(0, 2));
//=======================================================

// function findNeedle(haystack) {
//   const needle = 'needle';
//   return `found the needle at position ${haystack.indexOf('needle')}`;
// }

// var haystack_1 = [
//   '3',
//   '123124234',
//   undefined,
//   'needle',
//   'world',
//   'hay',
//   2,
//   '3',
//   true,
//   false,
// ];
// var haystack_2 = [
//   '283497238987234',
//   'a dog',
//   'a cat',
//   'some random junk',
//   'a piece of hay',
//   'needle',
//   'something somebody lost a while ago',
// ];
// console.log(findNeedle(haystack_1));
// console.log(findNeedle(haystack_2));

//=======================================================

// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case '+':
//       return value1 + value2;
//   }

//   switch (operation) {
//     case '-':
//       return value1 - value2;
//   }
//   switch (operation) {
//     case '*':
//       return value1 * value2;
//   }
//   switch (operation) {
//     case '/':
//       return value1 / value2;
//   }
// }

// console.log(basicOp('+', 4, 7));
// console.log(basicOp('-', 15, 18));
// console.log(basicOp('*', 5, 5));
// console.log(basicOp('/', 49, 7));

//========осторожно использовать EVAL(код со строки)========
// function basicOp(operation, value1, value2) {
//   return eval(value1 + operation + value2);
// }

// console.log(basicOp('+', 4, 7));
// console.log(basicOp('-', 15, 18));
// console.log(basicOp('*', 5, 5));
// console.log(basicOp('/', 49, 7));
//=======================================================

// function validatePIN(pin) {
//   const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//   const pinNumbers = pin.split('');

//   if (pinNumbers.length !== 4 && pinNumbers.length !== 6) {
//     return false;
//   }

//   for (const pinNumber of pinNumbers) {
//     if (!numbers.includes(pinNumber)) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(validatePIN('1'));
// console.log(validatePIN('12'));
// console.log(validatePIN('12345'));
// console.log(validatePIN('1234567'));
// console.log(validatePIN('-1234'));
// console.log(validatePIN('00000000'));
// console.log(validatePIN('-1.234'));
// console.log(validatePIN('1234'));
// console.log(validatePIN('434243'));
// console.log(validatePIN('666666'));

//=======================================================

// function reverseWords(str) {
//   const words = str.split(' ');
//   const reserseArray = [];

//   for (const word of words) {
//     const letters = word.split('');
//     const reverseLetters = [];

//     for (const letter of letters) {
//       reverseLetters.unshift(letter);
//     }

//     reserseArray.push(reverseLetters.join(''));
//   }

//   return reserseArray.join(' ');
// }

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));

//=======================================================

// function bouncingBall(h, bounce, window) {
//   let count = 1;
//   let bounceHigh = h * bounce;

//   if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
//     while (window < bounceHigh) {
//       bounceHigh *= bounce;
//       count += 2;
//     }

//     return count;
//   }

//   return -1;
// }

// console.log(bouncingBall(3.0, 0.66, 1.5));
// console.log(bouncingBall(30.0, 0.66, 1.5));
// console.log(bouncingBall(0.9, 0.66, 1.5));

//=======================================================

// function squareDigits(num) {
//   const ints = String(num).split('');
//   const intsExponent = [];
//   let newNum = 0;

//   for (const int of ints) {
//     intsExponent.push(Math.pow(int, 2));
//     newNum = Number(intsExponent.join(''));
//   }
//   return newNum;
// }

// console.log(squareDigits(3212));
// console.log(squareDigits(2112));
// console.log(squareDigits(0));

//=======================================================

// function isIsogram(str) {
//   const letters = str.toLowerCase().split('');
//   const isogram = [];
//   // console.log(`letters: `, letters);
//   for (const letter of letters) {
//     if (!isogram.includes(letter)) {
//       isogram.push(letter);
//     }
//   }
//   // console.log(`isogram: `, isogram);
//   return isogram.length === letters.length ? true : false;
// }

// console.log(isIsogram('Dermatoglyphics'));
// console.log(isIsogram('isogram'));
// console.log(isIsogram('moOse'));
// console.log(isIsogram('isIsogram'));
// console.log(isIsogram(''));

//===============Sum of two lowest positive integers=====

// function sumTwoSmallestNumbers(numbers) {
//   const sortedNumbers = numbers.sort((a, b) => a - b);
//   let total = 0;

//   for (let i = 0; i < 2; i += 1) {
//     total += sortedNumbers[i];
//   }
//   return total;
// }
//---сокращение------------------------
// function sumTwoSmallestNumbers(numbers) {
//   const sortedNumbers = numbers.sort((a, b) => a - b);
//   return sortedNumbers[0] + sortedNumbers[1];
// }

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));
// console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));

//==============Beginner Series1 School Paperwork========

// function paperwork(n, m) {
//   return (n < 0 || m < 0) ? 0 : n * m;
// };

/*
 *=================Find the odd int======================
 */

// function findOdd(A) {
//   let number = 0;
//   const numbersWithQuantity = A.reduce(
//     (acc, number) => ({
//       ...acc,
//       [number]: acc[number] ? acc[number] + 1 : 1,
//     }),
//     [],
//   );
//   // console.log(`numbersWithQuantity: `, numbersWithQuantity);

//   for (const key in numbersWithQuantity) {
//     // console.log(`numbersWithQuantity[key]: `, numbersWithQuantity[key]);

//     if (numbersWithQuantity[key] % 2 !== 0) {
//       number = key;
//     }
//   }
//   return Number(number);
// }
/*
 *----other variant---------------
 */
// function findOdd(A) {
//   let object = {};
//   console.log(`object number: `, object.number);

//   A.forEach(number =>
//     object[number] ? object[number] + 1 : (object[number] = 1),
//   );
//   console.log(`object: `, object);

//   for (const key in object) {
//     if (object[key] % 2 !== 0) {
//       return Number(key);
//     }
//   }
// }
/*
 *----BEST I EVER SEE VARIAN with XOR (побитовые операторы)
 */

// const findOdd = A => A.reduce((acc, number) => acc ^ number);

// console.log(
//   `result`,
//   findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]),
// );
// console.log(`result`, findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
// console.log(`result`, findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
// console.log(`result`, findOdd([10]));
// console.log(`result`, findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));

/*
 *=========================Counting sheep...==========
 */
// const arrayOfSheep = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];

// function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.reduce(
//     (acc, sheep) => (sheep ? (acc += 1) : (acc += 0)),
//     0,
//   );
// }

/*
 *------------------------other version--------------
 */

// const countSheeps = arrayOfSheep => arrayOfSheep.filter(sheep => sheep).length;
// console.log(arrayOfSheep.filter(sheep => sheep));
// console.log(arrayOfSheep.filter(Boolean));

// console.log(countSheeps(arrayOfSheep));

/*
 *===============Growth of a Population=================
 */

// function nbYear(p0, percent, aug, p) {
//   let p1 = p0;
//   let count = 0;
//   // console.log(p1);

//   while (p1 < p) {
//     count += 1;
//     p1 = p1 + p1 * (percent / 100) + aug;
//     // console.log(p1);
//   }

//   return count;
// }

// console.log(nbYear(1500, 5, 100, 5000));
// console.log(nbYear(1500000, 2.5, 10000, 2000000));
// console.log(nbYear(1500000, 0.25, 1000, 2000000));

/*
 *===================String repeat========================
 */

// function repeatStr(n, s) {
//   let string = '';

//   while (string.length / s.length < n) {
//     string += s;
//   }

//   return string;
// }

/*
 *------------smartest way----------------------
 */

// const repeatStr = (n, s) => s.repeat(n);

// console.log(repeatStr(3, '*'));
// console.log(repeatStr(5, '#'));
// console.log(repeatStr(2, 'ha '));

/*
 *=======Write Number in Expanded Form===============
 */

// function expandedForm(number) {
//   const string = String(number);
//   let element = [];

//   for (let i = 0; i < string.length; i += 1) {
//     let part = string[i] * ('1' + '0'.repeat(string.length - 1 - [i]));
//     // console.log(`part: `, part);
//     if (part !== 0) {
//       element.push(String(part));
//       // console.log(element);
//     }
//   }

//   return element.join(' + ');
// }

/*
 *------code Wars solution-------
 */
// const expandedForm = number =>
//   number
//     .toString()
//     .split('')
//     .map(
//       (element, index, array) => element + '0'.repeat(array.length - index - 1),
//     )
//     .filter(element => element != 0)
//     .join(' + ');

/*
 *------i think it's the best solution-------
 */

// function expandedForm(num) {
//   return [...String(num)]
//     .map((n, i, a) => n * 10 ** (a.length - i - 1))
//     .filter(Boolean)
//     .join(` + `);
// }

// console.log(expandedForm(12));
// console.log(expandedForm(42));
// console.log(expandedForm(70304));

/*
 *==================Mexican Wave========================
 */

// function wave(str) {
//   const array = [];
//   const strArray = str.split('');

//   for (let i = 0; i < str.length; i += 1) {
//     let copy = [...strArray];

//     if (copy[i] !== ' ') {
//       copy[i] = copy[i].toUpperCase();
//       array[i] = copy.join('');
//       // console.log(array[i]);
//     }
//   }

//   return array.filter(a => a !== 'empty');
// }

// console.log(wave('codewars'));
// console.log(wave('hello'));
// console.table(wave('two words'));
// console.table(wave(' gap '));
// console.log(wave('aaa bbb'));

/*
 *========Beginner Series #3 Sum of Numbers==============
 */

// function getSum(a, b) {
//   let sum = 0;

//   if (a > b) {
//     for (let i = b; i <= a; i += 1) {
//       sum += i;
//     }
//     return sum;
//   }

//   if (a === b) {
//     return a;
//   }

//   for (let i = a; i <= b; i += 1) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(getSum(0, -1));
// console.log(getSum(0, 1));
// console.log(getSum(0, 2));
// console.log(getSum(-74, -347));

//=======================================================
// function getExtremeElements(array) {
// array.splice(1, array.length - 2);
// return array;

// const newArray = [];
// newArray.push(array.slice(0, 1));
// newArray.push(array.slice(-1));
// return newArray.flat();
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
/*
 *====================Calculate average===================
 */
// const find_average = array =>
//   array.length !== 0
//     ? array.reduce((acc, item) => acc + item, 0) / array.length
//     : 0;

// console.log(find_average([1, 2, 3, 4, 5]));

/*
 *====================Simple multiplication==============
 */

// const simpleMultiplication = number =>
//   number % 2 === 0 ? number * 8 : number * 9;

// const simpleMultiplication = number => number * (number % 2 === 0 ? 8 : 9);

/*
 *==============Reversed sequence=========================
 */

// const reverseSeq = n => {
//   const array = [n];

//   while (n > 0) {
//     n -= 1;
//     if (n !== 0) {
//       array.push(n);
//     }
//   }
//   return array;
// };

/*
 *-------------other version------------
 */
// const reverseSeq = num => {
//   return new Array(num)
//     .fill()
//     .map((d, i) => i + 1)
//     .reverse();
// };

// console.log(reverseSeq(15));

/*
 *==============Total amount of points===================
 */

// function points(games) {
//   let array = [];

//   games.forEach(element => {
//     array.push(element.split(''));
//   });

//   // console.table(array);

//   return array.reduce((acc, item) => {
//     if (item[0] > item[2]) {
//       acc += 3;
//     } else if (item[0] === item[2]) {
//       acc += 1;
//     }
//     return acc;
//   }, 0);
// }

/*
 *---выше такого нагородил, ужас )))
 */

// function points(games) {
//   let total = 0;

//   games.forEach(element => {
//     // console.log(element[0], element[2]);
//     // console.log(element[0] > element[2]);

//     if (element[0] > element[2]) {
//       total += 3;
//     } else if (element[0] === element[2]) {
//       total += 1;
//     }
//   });
//   return total;
// }

// console.log(
//   points([
//     '1:0',
//     '2:0',
//     '3:0',
//     '4:0',
//     '2:1',
//     '3:1',
//     '4:1',
//     '3:2',
//     '4:2',
//     '4:3',
//   ]),
// );

/*
 *===================Return Negative=====================
 */

// const makeNegative = (num) => num > 0 ? -num : num;

/*
 *============Count of positives / sum of negatives======
 */

// function countPositivesSumNegatives(input) {
//   let countAndSum = [0];

//   if (input === null || input.length === 0) {
//     return [];
//   }

//   input.reduce((sum, item) => {
//     if (item < 0) {
//       sum += item;
//     } else if (item > 0) {
//       countAndSum[0] += 1;
//     }
//     return (countAndSum[1] = sum);
//   }, 0);

//   return countAndSum;
// }

// console.log(
//   countPositivesSumNegatives([
//     0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
//   ]),
// );

/*
 *============Beginner - Reduce but Grow=================
 */

// const grow = x => x.reduce((acc, item) => acc * item);

// console.log(grow([2, 2, 2, 2, 2, 2]));

/*
 *========================Keep Hydrated!=================
 */
// const litres = time => Math.floor(time / 2);

// console.log(litres(12.3));
// console.log(litres(1.4));
// console.log(litres(11.8));

/*
 *==============The highest profit wins!=================
 */

// function minMax(arr) {
//   return [Math.min(...arr), Math.max(...arr)];
// }

// console.log(minMax([1, 2, 3, 4, 5]));
// console.log(minMax([2334454, 5]));

/*
 *==============How good are you really?=================
 */

// function betterThanAverage(classPoints, yourPoints) {
//   return classPoints.reduce((acc, point) => acc + point, yourPoints) /
//     (classPoints.length + 1) <
//     yourPoints
//     ? false
//     : true;
// }

// console.log(betterThanAverage([2, 3]));

/*
 *============Sum without highest and lowest number======
 */

// const sumArray = array =>
//   Boolean(array) && array.length > 1
//     ? array.reduce((acc, i) => acc + i, 0) -
//       Math.max(...array) -
//       Math.min(...array)
//     : 0;

// console.log(sumArray([-6, -20, -1, -10, -12]));
// console.log(sumArray([3, 5]));
// console.log(sumArray([3]));
// console.log(sumArray([-6, 20, -1, 10, -12]));
// console.log(sumArray([]));
// console.log(sumArray(undefined));
// console.log(sumArray(null));

/*
 *==========Sum Mixed Array==============================
 */

// const sumMix = x => x.reduce((acc, i) => acc + Number(i), 0);

/*
 *===============Century From Year=======================
 */

// function century(year) {
//   return year % 100 !== 0 ? Math.ceil(year / 100) : Math.floor(year / 100);
// }

/*
 *=============Are You Playing Banjo?====================
 */

// const areYouPlayingBanjo = x =>
//   x[0].toLowerCase() === 'r' ? `${x} plays banjo` : `${x} does not play banjo`;

// console.log(areYouPlayingBanjo('Ringo'));

/*
 *================Are they the "same"?===================
 */

// function comp(array1, array2) {
//   if (Boolean(array1) && Boolean(array2)) {
//     const sortedArray1 = array1.sort((a, b) => a - b);
//     const sortedArray2 = array2.sort((a, b) => a - b);

//     return sortedArray1.every(
//       (item, index) => sortedArray2[index] === Math.pow(item, 2),
//     );
//   }

//   return false;
// }

// console.log(
//   comp(
//     [4, 5, 7, 7, 3, 5, 6, 5, 1, 7, 0, 8],
//     [25, 25, 1, 64, 36, 0, 49, 16, 25, 50, 49, 9],
//   ),
// );

/*
 *===========You only need one - Beginner================
 */
// const check = (a, x) => a.includes(x);
/*
 *=====================Invert values=====================
 */
// const invert = array => array.map(i => -i);

// console.log(invert([1, 2, 3, 4, 5]));
// console.log(invert([1, -2, 3, -4, 5]));
/*
 *====================Even or Odd=======================
 */
// const even_or_odd = num => num % 2 === 0 ? 'Even' : 'Odd';
/*
 *===================Returning Strings===================
 */
// const greet = name => `Hello, ${name} how are you doing today?`;
/*
 *====================Is this a triangle?================
 */

// const isTriangle = (a, b, c) => {
//   if (a < 0 && b < 0 && c < 0) {
//     return false
//   }
//   const p = (a + b + c) / 2;
//   return Math.sqrt(p * (p - a) * (p - b) * (p - c)) > 0;
// }

/*
 *-----------нормальный вариант
 */
// const isTriangle = (a, b, c) => {
//   [smollest, smoll, bigest] = [a, b, c].sort((a, b) => a - b);
//   return bigest < smollest + smoll;
// }
/*
 *=================Find the unique number=============ЗАМАНАЛСЯ С ЭТОЙ ЗАДАЧЕЙ
 */
// const findUniq = arr => {
//   const sortArr = arr.sort((a, b) => a - b);
//   return sortArr[0] === sortArr[1] ? sortArr[sortArr.length - 1] : sortArr[0];
// };

//================================================
// function findUniq(arr) {
//   const sortedArray = arr.sort((a, b) => a - b);
//   for (let i = 0; i < sortedArray.length; i += 1) {
//     if (sortedArray[i] !== sortedArray[i + 1]) {
//       return (
//         sortedArray[0] + sortedArray[sortedArray.length - 1] - sortedArray[1]
//       );
//     }
//   }
// }

// function findUniq(arr) {
//   const sortedArray = arr.sort((a, b) => a - b);
//   return Math.max(...sortedArray) + Math.min(...sortedArray) - sortedArray[2];
// }

// function findUniq(arr) {
//   const sortedArray = arr.sort((a, b) => a - b);

//   if (sortedArray[0] === sortedArray[1]) {
//     return sortedArray[sortedArray.length - 1];
//   }
//   return sortedArray[0];
// }

// const findUniq = arr => {
//   arr.reduce((acc, el, i) => {
//     acc ^ el;
//     return arr[i];
//   });
// };

// function findUniq(arr) {
//   const sortedArray = arr.sort((a, b) => a - b);
//   const uniqueArray = sortedArray.filter((element, index, array) => array.indexOf(element) === index);
//   return
// }

// console.log(findUniq([1, 0, 0]));
// console.log(findUniq([3, 10, 3, 3, 3]));
// console.log(findUniq([1, 1, 1, 2, 1, 1]));
// console.log(findUniq([1, 10, 10, 10, 10, 10]));
// console.log(findUniq([10, 10, 10, 10, 10, 1]));
// console.log(findUniq([10, 1, 1, 1, 1, 1]));
// console.log(findUniq([1, 1, 1, 1, 1, 10]));
// console.log(findUniq([1e-6, 1e-7, 1e-6, 1e-6, 1e-6]));

/*
 *===============List Filtering=========================
 */
// const filter_list = list => list.filter(e => Number.isInteger(e));
// const filter_list = list => list.filter(e => typeof e === 'number');

// console.log(filter_list([1, '1', 0.15, '0.22', 0]));
/*
 *==============Find The Parity Outlier==================
 */

// const findOutlier = integers =>
//   integers.filter(el => el % 2 === 0).length > 1
//     ? integers.find(el => el % 2 !== 0)
//     : integers.find(el => el % 2 === 0);

// console.log(findOutlier([0, 1, 2]));
// console.log(findOutlier([1, 2, 3]));
// console.log(findOutlier([2, 6, 8, 10, 3]));
// console.log(findOutlier([0, 0, 3, 0, 0]));

/*
 *=======================================================
 */

// const message = 'JavaScript is in my blood';
// let w = [...message.split(' ')];
// console.log(w);
// let e = w.length;
// console.log(e);
// console.log(message);
/*
 *============Coding Meetup #11==========================
 */

// const getAverageAge = list =>
//   Math.round(list.reduce((acc, el) => acc + el.age, 0) / list.length);
/*
 *=======================================================
 */
// const remainder = (D, d) => D - (Math.floor(D / d) * d) ;
/*
 *============Adding remainders to a list================
 */
// const solve = (nums, div) => nums.map(el =>
//   el + (el - Math.floor(el / div) * div));

//--или с использованием %
// const solve = (nums, div) => nums.map(el => el + (el % div));
/*
 *===============Integer Difference======================
 */
// const intDiff = (arr, n) => {
//   const changedArray = arr.map(el => el - n);
//   console.log(changedArray);
//   let count = 0;
//   if (n === 0) {
//     console.log([...new Set(arr)]);
//     return arr.length - [...new Set(arr)].length;
//   }
//   for (const item of arr) {
//     for (const value of changedArray) {
//       if (item === value) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// };
// console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4));
// console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 0));
// console.log(intDiff([0], 4));
/*
 *=============Money, Money, Money======================
 */
// const calculateYears = (principal, interest, tax, desired) => {
//   let years = 0;
//   let toDesired = principal;

//   while (toDesired < desired) {
//     toDesired = toDesired + toDesired * interest - toDesired * interest * tax;
//     years += 1;
//   }

//   return years;
// };

/*
 *-----позорище не знающее логарифмы выше((
 */

// function calculateYears(principal, interest, tax, desired) {
//   return Math.ceil(
//     Math.log(desired / principal) / Math.log(1 + interest * (1 - tax)),
//   );
// }

// console.log(calculateYears(1000, 0.05, 0.18, 1100));
/*
 *=============Find the stray number=====================
 */
// const stray = numbers => {
//   const sNum = numbers.sort((a, b) => a - b);
//   return sNum[0] + sNum[sNum.length - 1] - sNum[1];
// };

// const stray = numbers => {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
//       return numbers[i];
//     }
//   }
// };

// console.log(stray([17, 17, 3, 17, 17, 17, 17]));
/*
 *===============Duplicate Encoder======================
 */
// function duplicateEncode(word) {
//   const arr = [];

//   [...word?.toLowerCase()].forEach((el, i, a) => {
//     a.indexOf(el) === a.lastIndexOf(el) ? arr.push('(') : arr.push(')');
//   });

//   return arr.join('');
// }
// console.log(duplicateEncode('recede'));
// console.log(duplicateEncode('(( @'));
// console.log(duplicateEncode('Success'));
/*
 *=============Multiples of 3 or 5=======================
 */
// function solution(number) {
//   let sum = 0;

//   for (let i = 0; i < number; i += 1) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }

// console.log(solution(10));
/*
 *=================Tribonacci Sequence===================
 */
// function tribonacci(signature, n) {
//   const arr = [...signature];

//   for (let i = 0; i < n - signature.length; i += 1) {
//     arr.push(arr[i] + arr[i + 1] + arr[i + 2]);
//   }
//   return arr.slice(0, n);
// }

// console.log(tribonacci([1, 2, 3], 10));
// console.log(tribonacci([1, 1, 1], 1));
// console.log(tribonacci([1, 1, 1], 0));
/*
 *=======================================================
 */
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const arr = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       arr.push(product[propName]);
//     }
//   }

//   return arr;
// }
// console.log(getAllPropValues('price'));

/*
 *=======================================================
 */
/*
 *=======================================================
 */
/*
 *=======================================================
 */
/*
 *=======================================================
 */
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================

//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
//=======================================================
