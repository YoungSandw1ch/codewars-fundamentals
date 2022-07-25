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
 *Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
 */
// function sumDigPow(a, b) {
//   const arr = [];
//   for (let i = a; i < b; i++) {
//     arr.push(i);
//   }
//   return arr.filter(el => {
//     const array = String(el).split('');
//     let sum = 0;

//     for (let j = 0; j < array.length; j++) {
//       sum += Math.pow(array[j], j + 1);

//       if (sum === el) {
//         return el;
//       }
//     }
//   });
// }

/*
 *-----another variant ------------------------------
 */

// function sumDigPow(a, b) {
//   const arr = [];

//   for (let i = a; i < b; i++) {
//     arr.push(i);
//   }

//   return arr
//     .map(el => String(el).split(''))
//     .filter(
//       (el, i) =>
//         arr[i] === el.reduce((acc, item, i) => acc + Math.pow(item, i + 1), 0),
//     )
//     .map(el => Number(el.join('')));
// }

// console.log(sumDigPow(1, 100));

/*
 *=============Stop gninnipS My sdroW!===================
 */
// const spinWords = string =>
//   string
//     .split(' ')
//     .map(el => (el.length >= 5 ? [...el].reverse().join('') : el))
//     .join(' ');

// console.log(spinWords('Hey fellow warriors'));
/*
 *==============Sum of Digits / Digital Root=============
 */
// function digital_root(n) {
//   while (String(n).length > 1) {
//     n = [...String(n)].reduce((acc, el) => acc + +el, 0);
//   }
//   return n;
// }

/*
 *----smartest thing i ever seen ------
 */

// const digital_root = n => (n -1) % 9 + 1;
// console.log(digital_root(16));
// console.log(digital_root(942));
// console.log(digital_root(493193));
/*
 *=========================Array.diff====================
 */
// const arrayDiff = (a, b) => a.filter(el => !b.includes(el));
/*
 *====================Who likes it?======================
 */
// function likes(names) {
//   switch (names.length) {
//     case 0:
//       return 'no one likes this';
//     case 1:
//       return `${names[0]} likes this`;
//     case 2:
//       return `${names[0]} and ${names[1]} like this`;
//     case 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     default:
//       return `${names[0]}, ${names[1]} and ${
//         names.length - 2
//       } others like this`;
//   }
// }

// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
/*
 *===========Regular Ball Super Ball=====================
 */
// class Ball {
//   constructor(ballType = 'regular') {
//     this.ballType = ballType;
//   }
// }
//===до того как пришли классы----------
// var Ball = function (ballType = 'regular') {
//   this.ballType = ballType;
//   return this.ballType;
// };

// console.log(new Ball('super'));
/*
 *===========What a "Classy" Song=======================
 */
// class Song {
//   #listeners = [];

//   constructor(title, artist) {
//     this.title = title;
//     this.artist = artist;
//   }

//   // #listeners = [];

//   howMany(arr) {
//     let count = 0;

//     arr.forEach(p => {
//       if (!this.#listeners.includes(p.toLowerCase())) {
//         this.#listeners.push(p.toLowerCase());
//         count += 1;
//       }
//     });

//     return count;
//   }
// }

// const newSong = new Song('Mount Moose', 'The Snazzy Moose');
// console.log(newSong);

// console.log(
//   `quantity: `,
//   newSong.howMany(['Amanda', 'CalEb', 'CarL', 'Furgus']),
// );
// console.log(
//   `quantity: `,
//   newSong.howMany(['Amanda', 'mango', 'Poly', 'Furgus']),
// );
/*
 *=======================================================
 */
// class God {
//   static create() {
//     class Man {
//       constructor(name = 'Adam') {
//         this.name = name;
//       }
//     }

//     class Woman {
//       constructor(name = 'Eve') {
//         this.name = name;
//       }
//     }

//     return [new Man(), new Woman()];
//   }
// }

// let humans = God.create();
// console.log(humans);
// console.log(humans[0] instanceof God);
// const adam = new God('adam');
// const eva = new God('eva');

// console.log(adam);
// console.log(eva);
/*
 *=======================================================
 */
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//     return this.potions;
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//         return this.potions;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return this.potions;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// console.table(atTheOldToad.getPotions());
// console.table(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// console.table(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// console.table(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.table(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.table(atTheOldToad.removePotion('Speed potion'));
// console.table(atTheOldToad.removePotion('Dragon breath'));
/*
 *==============Count characters in your string==========
 */
// function count(string) {
//   const obj = {};

//   [...string].forEach((el, i, a) =>
//     a.indexOf(el) === i ? (obj[el] = 1) : (obj[el] += 1),
//   );
//   return obj;
// }

// console.log(count('aba'));
/*
 *=================Beginner Series #2 Clock==============
 */
// const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;

// console.log(past(1, 0, 1));
/*
 *=======================================================
 */
// const cockroachSpeed = (s) => s * 100 / 36;
/*
 *============Find the next perfect square!==============
 */
// const findNextSquare = sq => {
//   console.log(Math.sqrt(sq));
//   if (Number.isInteger(Math.sqrt(sq))) {
//     // console.log(Math.pow(sq));
//     return Math.pow(Math.sqrt(sq) + 1, 2);
//   }
//   return -1;
// };

// console.log(findNextSquare(121));
/*
 *======================Opposite number==================
 */
// const opposite = number => (number *= -1);
/*
 *==================Highest and Lowest===================
 */
// const highAndLow = numbers => {
//   const arr = numbers.split(' ').map(number => +number);
//   return `${Math.max(...arr)} ${Math.min(...arr)}`;
// };

// const highAndLow = numbers => {
//   const arr = numbers.split(' ');
//   return `${Math.max.apply(0, arr)} ${Math.min.apply(0, arr)}`;
// };

// console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'));
/*
 *=================Get the Middle Character==============
 */
// const getMiddle = s => {
//   const l = s.length;

//   if (l % 2 === 0) {
//     return s[l / 2 - 1] + s[l / 2];
//   } else {
//     return s[Math.floor(l / 2)];
//   }
// };

// const getMiddle = s =>
//   s.length % 2 === 0
//     ? s[s.length / 2 - 1] + s[s.length / 2]
//     : s[Math.floor(s.length / 2)];

// console.log(getMiddle('testus'));
// console.log(getMiddle('tesus'));
/*
 *==========================Count by X===================
 */
// function countBy(x, n) {
//   let z = [];

//   for (let i = 0, j = x; i < n; i += 1, j += x) {
//     z.push(j);
//   }

//   return z;
// }

// const countBy = (x, n) => Array.from({ length: n }, (el, i) => (i + 1) * x);

// console.log(countBy(2, 5));
/*
 *================8 inch pizza equivalence===============
 */
// const howManyPizzas = n => {
//   const customPizzaArea = Math.PI * Math.pow(8 / 2, 2);
//   const pizzaSlice = customPizzaArea / 8;
//   const numSlices = Math.round((Math.PI * Math.pow(n / 2, 2)) / pizzaSlice);

//   return `pizzas: ${Math.floor(numSlices / 8)}, slices: ${numSlices % 8}`;
// };

// console.log(howManyPizzas(16));
// console.log(howManyPizzas(6));
/*
 *===============Roman Numerals Encoder==================
 */
// const solution = number => {
//   const pareOfNumbers = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
//   const result = '';

//   for (const roman in pareOfNumbers) {
//     while (number >= pareOfNumbers[roman]) {
//       result += roman;
//       number -= pareOfNumbers[roman];
//     }
//   }
//   return result;
// };

/*
 *--------------other solution-----
 */

// const solution = number => {
//   const roman = [
//     'M',
//     'CM',
//     'D',
//     'CD',
//     'C',
//     'XC',
//     'L',
//     'XL',
//     'X',
//     'IX',
//     'V',
//     'IV',
//     'I',
//   ];
//   const integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   let result = '';

//   for (let i = 0; i < integers.length; i += 1) {
//     while (number >= integers[i]) {
//       number -= integers[i];
//       result += roman[i];
//     }
//   }
//   return result;
// };

/*
 *--------------other solution-----
 */

// const solution = number => {
//   const roman = [
//     'M',
//     'CM',
//     'D',
//     'CD',
//     'C',
//     'XC',
//     'L',
//     'XL',
//     'X',
//     'IX',
//     'V',
//     'IV',
//     'I',
//   ];
//   const integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

//   return integers.reduce((acc, el, i) => {
//     while (number >= el) {
//       number -= el;
//       acc += roman[i];
//     }
//     return acc;
//   }, '');
// };

// console.log(solution(2642)); //MMDCXLII MMDCXLII
// console.log(solution(2242));
// console.log(solution(715));

/*
 *===============For whom the Bell tolls=================
 */

// const bell = n => {
//   // let adder = n;
//   // const neededArr = [];
//   // let middle = 0;

//   // for (let i = 0; i < n; i += 1) {
//   //   neededArr.push(middle + adder);
//   //   middle = neededArr[i];
//   //   adder -= 2;
//   // }

//   // return neededArr;

//   return Array.from({ length: n }, (el, i) => (n - i) * (i + 1));
// };

// console.log(bell(10)); //10 18 24 2
// console.log(bell(3));
// console.log(bell(2));
/*
 *===============What's your running pace?===============
 */
// function runningPace(distance, time) {
//   const arr = time.split(':');

//   const minutes = (+arr[0] * 60 + +arr[1]) / distance;
//   if (Math.floor(minutes % 60) < 10) {
//     return `${Math.floor(minutes / 60)}:0${Math.floor(minutes % 60)}`;
//   }
//   return `${Math.floor(minutes / 60)}:${Math.floor(minutes % 60)}`;
// }

// console.log(runningPace(4.99, '22:32')); //4:30
// console.log(runningPace(5, '25:00'));
// console.log(runningPace(15, '75:00'));
// console.log(runningPace(2.51, '10:43')); //4:16
// console.log(runningPace(0.2, '0:38')); //3:10
// console.log(runningPace(42.195, '122:57')); //2:54
/*
 *============Take a Ten Minutes Walk====================
 */
// const isValidWalk = walk => {
//   let [x, y] = [0, 0];

//   walk.forEach(el => {
//     switch (el) {
//       case 'n': x += 1; break;
//       case 's': x -= 1; break;
//       case 'e': y += 1; break;
//       case 'w': y -= 1; break;
//     }
//   });

//   return x === 0 && y === 0 && walk.length === 10 ? true : false;
// };

// console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
// console.log(
//   isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']),
// );
/*
 *=================Counting Duplicates===================
 */
// const duplicateCount = text => {
//   const dubl = [];
//   text
//     .toLowerCase()
//     .split('')
//     .forEach((el, i, arr) => {
//       if (arr.indexOf(el) !== i && !dubl.includes(el)) {
//         dubl.push(el);
//       }
//     });
//   return dubl.length;
// };

/*
 *-----------shortest-method----------------
 */

// const duplicateCount = text => {
//   return text
//     .toLowerCase()
//     .split('')
//     .reduce((acc, el, i, arr) => {
//       if (arr.indexOf(el) !== i && !acc.includes(el)) {
//         acc.push(el);
//       }
//       return acc;
//     }, []).length;
// };

// console.log(duplicateCount('aabBcde'));
// console.log(duplicateCount(''));
// console.log(duplicateCount('Indivisibilities'));
/*
 *===================Persistent Bugger.==================
 */
// const persistence = num => {
//   let counter = 0;

//   while (num > 9) {
//     counter += 1;
//     num = eval(num.toString().split('').join('*'));
//     // console.log('num in while: ', num);
//   }

//   return counter;
// };

// console.log(persistence(39)); //3
// console.log(persistence(4)); //0
// console.log(persistence(25)); //2
// console.log(persistence(999)); //4
// console.log(persistence(20));
/*
 *================Decode the Morse code==================
 */
// const ref = {
//   '.-': 'a',
//   '-...': 'b',
//   '-.-.': 'c',
//   '-..': 'd',
//   '.': 'e',
//   '..-.': 'f',
//   '--.': 'g',
//   '....': 'h',
//   '..': 'i',
//   '.---': 'j',
//   '-.-': 'k',
//   '.-..': 'l',
//   '--': 'm',
//   '-.': 'n',
//   '---': 'o',
//   '.--.': 'p',
//   '--.-': 'q',
//   '.-.': 'r',
//   '...': 's',
//   '-': 't',
//   '..-': 'u',
//   '...-': 'v',
//   '.--': 'w',
//   '-..-': 'x',
//   '-.--': 'y',
//   '--..': 'z',
//   '.----': '1',
//   '..---': '2',
//   '...--': '3',
//   '....-': '4',
//   '.....': '5',
//   '-....': '6',
//   '--...': '7',
//   '---..': '8',
//   '----.': '9',
//   '-----': '0',
// };

// const decodeMorse = morseCode =>
// morseCode
//   .split(' ')
//   .map(el => ref[el])
//   .join(' ')
//   .replaceAll('   ', '+')
//   .replaceAll(' ', '')
//   .replaceAll('+', ' ');
/*
 *----------------------------------------
 */
// morseCode
//   .split('   ')
//   .map(el =>
//     el
//       .split(' ')
//       .map(el => ref[el])
//       .join(''),
//   )
//   .join(' ')
//   .trim();

/*
 *---not my solution----------
 */
//   morseCode
//     .trim()
//     .split(/  | /)
//     .map(code => ref[code] || ' ')
//     .join('');

// console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
// console.log(decodeMorse('.   .'));
// console.log(decodeMorse('... --- ...'));
/*
 *==================Playing with digits==================
 */
// const digPow = (n, p) => {
//   const k =
//     n
//       .toString()
//       .split('')
//       .reduce((acc, el, i) => acc + Math.pow(el, p + i), 0) / n;

//   return Number.isInteger(k) ? k : -1;
// };

// console.log(digPow(89, 1));
// console.log(digPow(92, 1));
// console.log(digPow(46288, 3));
/*
 *===============Convert string to camel case============
 */
// const toCamelCase = str => {
// const arr = str.split(/\_|\-/);
// const newArray = [arr[0]];
// for (let i = 1; i < arr.length; i += 1) {
//   const word = arr[i];
//   newArray.push(word.replace(word[0], word[0].toUpperCase()));
// }
// return newArray.join('');
//====================================================
// return str.replace(/[_-](.)/g, (_, a) => {
//   // console.log(_);
//   // console.log(a);
//   return a.toUpperCase();
// });
// };

// console.log(toCamelCase('the_stealth_warrior'));
// console.log(toCamelCase('The-Stealth-Warrior'));
// console.log(toCamelCase(''));
// console.log(toCamelCase('A-B-C'));
/*
 *=================Unique In Order=======================
 */

// const uniqueInOrder = iterable => {
//   const arr = [iterable[0]];
//   const arrFromIterable = Array.isArray(iterable)
//     ? iterable
//     : iterable.split('');

//   arrFromIterable.forEach(el => {
//     if (arr[arr.length - 1] !== el) {
//       arr.push(el);
//     }
//   });

//   return iterable[0] ? arr : [];
// };

// const uniqueInOrder = iterable => {
//   const arrFromIterable = Array.isArray(iterable)
//     ? iterable
//     : iterable.split('');

//   return arrFromIterable.reduce((acc, el) => {
//     if (acc[acc.length - 1] !== el) acc.push(el);
//     return acc;
//   }, []);
// };

// const uniqueInOrder = iterable => {
//   return [...iterable].filter((el, i, arr) => arr[i - 1] !== el);
// };

// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// console.log(uniqueInOrder([]));
// console.log(uniqueInOrder([1, 1, 2, 3, 3, 3, 4, 4, 4, 1, 1, 2, 2]));
/*
 *======================Find the missing letter==========
 */
// const findMissingLetter = array => {
//   const alphabet = Array.from({ length: 26 }, (_, i) =>
//     String.fromCharCode(65 + i),
//   );
//   const lowerKeyAbc = alphabet.join('').toLowerCase().split('');
//   const variableAbc =
//     array[0].toUpperCase() === array[0] ? alphabet : lowerKeyAbc;
//   const start = variableAbc.indexOf(array[0]);
//   const newArray = [...variableAbc].splice(start, array.length + 1);

//   return newArray.filter(el => !array.includes(el))[0];
// };

// console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
// console.log(findMissingLetter(['O', 'Q', 'R', 'S']));
/*
 *=================Simple card game======================
 */
// const cardsRank = {
//   2: 1,
//   3: 2,
//   4: 3,
//   5: 4,
//   6: 5,
//   7: 6,
//   8: 7,
//   9: 8,
//   T: 9,
//   J: 10,
//   Q: 11,
//   K: 12,
//   A: 13,
// };

// const winner = (deckSteve, deckJosh) => {
//   let rankSteve = 0;
//   let rankJosh = 0;

//   for (let i = 0; i < deckSteve.length; i += 1) {
//     if (cardsRank[deckSteve[i]] !== cardsRank[deckJosh[i]]) {
//       cardsRank[deckSteve[i]] > cardsRank[deckJosh[i]]
//         ? (rankSteve += 1)
//         : (rankJosh += 1);
//     }
//   }

//   if (rankSteve === rankJosh) return 'Tie';
//   return rankSteve > rankJosh
//     ? `Steve wins ${rankSteve} to ${rankJosh}`
//     : `Josh wins ${rankJosh} to ${rankSteve}`;
// };

// console.log(winner(['A', '7', '8'], ['K', '5', '9']));
// console.log(winner(['T'], ['T']));
/*
 *==Split all even numbers to odd ones in different ways=
 */
// const splitAllEvenNumbers = (numbers, way) => {
//   const $0 = number => {
//     if (number % 2 === 0) {
//       let half = number / 2;
//       if (half % 2 !== 0) {
//         return [half, half];
//       }
//       return [half - 1, half + 1];
//     }
//     return number;
//   };

//   const $1 = number => {
//     if (number % 2 === 0) {
//       return [1, number - 1];
//     }
//     return number;
//   };

//   const $2 = number => {
//     let halfedNum = number;

//     if (number % 2 === 0) {
//       do {
//         halfedNum /= 2;
//       } while (halfedNum % 2 === 0);

//       return Array(number / halfedNum).fill(halfedNum);
//     }
//     return number;
//   };

//   const $3 = number => {
//     if (number % 2 === 0) {
//       return Array.from({ length: number }, (_, __) => 1);
//     }
//     return number;
//   };

//   const methods = [$0, $1, $2, $3];
//   return numbers.flatMap(el => methods[way](el));
// };

// console.log(splitAllEvenNumbers([1, 10, 1, 3], 0));
// console.log(splitAllEvenNumbers([1, 10, 1, 3], 1));
// console.log(splitAllEvenNumbers([1, 10, 1, 3], 2));
// console.log(splitAllEvenNumbers([1, 10, 1, 3], 3));

// console.log(splitAllEvenNumbers([1, 1, 3, 8], 0));
// console.log(splitAllEvenNumbers([1, 1, 3, 8], 1));
// console.log(splitAllEvenNumbers([1, 1, 3, 8], 2));
// console.log(splitAllEvenNumbers([1, 1, 3, 8], 3));

// console.log(splitAllEvenNumbers([12], 2));
/*
 *===============How Many Reindeers?=====================
 */
// const reindeers = presents =>
//   presents <= 180 ? Math.ceil(presents / 30) + 2 : error;

// console.log(reindeers(0));
// console.log(reindeers(1));
// console.log(reindeers(30));
// console.log(reindeers(200));
/*
 *====================Group in 10s=======================
 */
// const groupIn10s = (...arg) => {
//   const arr = [];
//   const sortArg = arg.sort((a, b) => a - b);
//   let number = arg.length;

//   if (number === 0) return arr;

//   for (let i = 1; i <= Infinity; i += 1) {
//     const filtered = sortArg.filter(el => el / (10 * i) < 1);

//     if (filtered.length === 0) {
//       arr.push(undefined);
//     } else {
//       arr.push(filtered);
//     }

//     arg.splice(0, filtered.length);
//     number -= filtered.length;
//     if (number <= 0) {
//       return arr;
//     }
//   }
// };

// const groupIn10s = (...args) =>
//   args
//     .reduce((acc, el) => {
//       let i = ~~(el / 10);
//       console.log('i: ', i);
//       console.log('acc[i]: ', acc[i]);
//       console.log('el: ', el);
//       acc[i] = (acc[i] || []).concat([el]);
//       console.log('acc: ', acc);
//       return acc;
//     }, [])
//     .map(el => el.sort());

// console.log(groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50)); //[3, 8, 12, 17, 19, 25, 35, 38, 50]
// console.log(groupIn10s());
// console.log(groupIn10s(900, 300, 22));
/*
 *=========Simplify Compound Fractions===================
 */
// function simplify(i, num, den) {
//   const result = [i + ~~(num / den), 0, 0];

//   let a = num % den;
//   let b = a === 0 ? 0 : den;

//   if (a === 0 || b === 0) {
//     return [i + ~~(num / den), 0, 0];
//   }

//   if (Number.isInteger(b / a)) {
//     result[1] = b / a - a;
//     result[2] = b / a;
//   } else {
//     result[1] = a / (b - a);
//     result[2] = b / (b - (num % den));
//   }

//   return result;
// }
/*
 *--------херь которую я написал выше---------------
 */

// const simplify = (int, num, den) => {
//   const arr = [int + ~~(num / den), num, den];

//   if (num === 0 || den === 0) {
//     return [int + ~~(num / den), 0, 0];
//   }

//   if (num > den) {
//     num = num % den;
//     arr[1] = num;
//   }

//   for (let i = 2; i <= num; i += 1) {
//     if (num % i === 0 && den % i === 0) {
//       arr[1] = num / i;
//       arr[2] = den / i;
//     }
//   }

//   if (num % den === 0) {
//     arr[1] = 0;
//     arr[2] = 0;
//   }

//   return arr;
// };

/*
 *--используя алгоритм Эвклида (найбольший общий делитель) и рекурсивную функцию-------
 */

// function simplify(int, num, den) {
//   int += ~~(num / den);
//   num = num % den;

//   const d = (num, den) => {
//     while (den) {
//       var x = den;
//       den = num % den;
//       num = x;
//     }
//     return x;
//   };
//   console.log(d(num, den));
// }

// console.log(simplify(0, 25, 55));
// console.log(simplify(4, 3, 2));
// console.log(simplify(0, 15, 12));
// console.log(simplify(0, 11, 12));
// console.log(simplify(0, 36, 40));
// console.log(simplify(2, 6, 9));
// console.log(simplify(2, 14, 21));
// console.log(simplify(0, 32, 16));
// console.log(simplify(999, 100, 0));
/*
 *=Find the missing term in an Arithmetic Progression====
 */
// const findMissing = list => {
//   const step = (list[list.length - 1] - list[0]) / list.length;

//   for (let i = 1; i < list.length; i += 1) {
//     if (list[i] - list[i - 1] !== step) {
//       return list[i - 1] + step;
//     }
//   }
// };

// console.log(findMissing([1, 3, 5, 9, 11]));
// console.log(findMissing([1, 4, 7, 13, 16]));
// console.log(findMissing([1, 9, 17, 33, 41]));
/*
 *=========Does my number look big in this?==============
 */
// const narcissistic = value =>
//   [...value.toString()].reduce((acc, e, i, a) => (+e) ** a.length + acc, 0) ===
//   value
//     ? true
//     : false;

// console.log(narcissistic(7));
// console.log(narcissistic(371));
/*
 *======================Detect Pangram==================
 */
// const isPangram = string => {
//   // const abc = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
//   // console.log(abc);

//   // const objFromAbc = abc.reduce((acc, e) => {
//   //   acc[e] = 0;
//   //   return acc;
//   // }, {});
//   // console.log(objFromAbc);

//   return [...string.toLowerCase()]
//     .reduce((acc, e) => {
//       if (!acc.includes(e)) {
//         acc.push(e);
//       }
//       return acc;
//     }, [])
//     .join('')
//     .match(/[a-z]/g).length === 26
//     ? true
//     : false;
// };

/*
 *---используя метод new Set----------------------------------
 */

// const isPangram = string =>
//   new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;

/*
 *--------------регулярное выражение ВЕРШИНА МАСТЕРСТВА-------
 */

// const isPangram = string =>
//   (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;

// console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
// console.log(isPangram('The quick brown fox jumps'));
// console.log(isPangram(''));
/*
 *========================build tower====================
 */
// function towerBuilder(nFloors) {
//   const tower = [];

//   for (let i = 1, j = 1; i < nFloors; i += 1, j += 2) {
//     tower.push(
//       ' '.repeat(nFloors - i) + '*'.repeat(j) + ' '.repeat(nFloors - i),
//     );
//   }

//   return tower;
// }
/*
 *==================Give me a Diamond=====================
 */
// const diamond = n => {
//   let str = '';
//   let decr = n;

//   if (n > 0 && n % 2) {
//     for (let i = 1, j = 1; i <= n; i += 1, j += 2) {
//       const space = (n - j) / 2;
//       str +=
//         ' '.repeat(space >= 0 ? space : -space) +
//         '*'.repeat(j <= n ? j : (decr -= 2)) +
//         '\n';
//     }
//     return str;
//   }
//   return null;
// };
// console.log(diamond(1));
// console.log(diamond(33));
// console.log(diamond(2));
// console.log(diamond(-2));
// console.log(diamond(0));
/*
 *===========================Good vs Evil================
 */
// function goodVsEvil(good, evil) {
//   const goodForces = [1, 2, 3, 3, 4, 10];
//   const evilForces = [1, 2, 2, 2, 3, 5, 10];
//   const counter = (str, forces) =>
//     str.split(' ').reduce((acc, el, i) => el * forces[i] + acc, 0);

//   if (counter(good, goodForces) === counter(evil, evilForces))
//     return 'Battle Result: No victor on this battle field';
//   return counter(good, goodForces) > counter(evil, evilForces)
//     ? 'Battle Result: Good triumphs over Evil'
//     : 'Battle Result: Evil eradicates all trace of Good';
// }

// console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));
// console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'));
// console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'));
/*
 *=============Calculate Pyramid Height==================
 */
// function pyramidHeight(n) {
//   let counter = 0;
//   for (let i = 1; i <= n; i += 1) {
//     n -= i ** 2;
//     if (n >= 0) {
//       counter += 1;
//     }
//     console.log('circle');
//   }
//   return counter;
// }

// console.log(pyramidHeight(1));
// console.log(pyramidHeight(4));
// console.log(pyramidHeight(14));
// console.log(pyramidHeight(13));
// console.log(pyramidHeight(130));
// console.log(pyramidHeight(13000));
// console.log(pyramidHeight(1500));
/*
 *=============Fun with ES6 Classes #1 ==================
 */
// class Person {
//   constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
//     // this.firstName = firstName;
//     // this.lastName = lastName;
//     // this.age = age;
//     // this.gender = gender;
//     Object.assign(this, { firstName, lastName, age, gender });
//   }

//   sayFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   static greetExtraTerrestrials(raceName) {
//     retrun`Welcome to Planet Earth ${raceName}`;
//   }
// }

// const sersus = new Person('sersus', 'neo', '31');
// console.log(sersus);
/*
 *==============Fun with ES6 Classes #1==================
 */
// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }

// class Shark extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 0, 'shark', status);
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 4, 'cat', status);
//   }

//   introduce() {
//     return super.introduce() + `  Meow meow!`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 4, 'dog', status);
//     this.master = master;
//   }

//   greetMaster() {
//     return `Hello ${this.master}`;
//   }
// }

// const shaggy = new Shark('shaggy', 16, 'married');
// console.log(shaggy);

/*
 *==============Fun with ES6 Classes #3==================
The object constructor for the class Cuboid should receive exactly three arguments in the following order: length, width, height and store these three values in this.length, this.width and this.height respectively.
The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter volume which returns the volume of the cuboid.

class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only, its length, and use that value passed in to set this.length, this.width and this.height.
Hint: Make a call to super, passing in the correct arguments, to make life easier ;)
 */

// class Cuboid {
//   constructor(length, width, height) {
//     Object.assign(this, { length, width, height });
//   }

//   get surfaceArea() {
//     const { length: l, width: w, height: h } = this;
//     return (l * w + h * w + h * l) * 2;
//   }

//   get volume() {
//     const { length: l, width: w, height: h } = this;
//     return l * w * h;
//   }
// }
// class Cube extends Cuboid {
//   constructor(length) {
//     super(length, length, length);
//   }
// }

// const cubik = new Cuboid(1, 2, 3);
// console.log(cubik.surfaceArea);
// console.log(cubik.volume);

// const cub = new Cube(2);
// console.log(cub.volume);

/*
 *=============Fun with ES6 Classes #4===================
 */
// class Cube {
//   constructor(length) {
//     this.length = length;
//   }

//   get surfaceArea() {
//     return this.length ** 2 * 6;
//   }

//   set surfaceArea(newArea) {
//     this.length = Math.sqrt(newArea / 6);
//   }

//   get volume() {
//     return this.length ** 3;
//   }

//   set volume(newVolume) {
//     this.length = Math.cbrt(newVolume);
//   }
// }
/*
 *=======================================================
 */
// class Dog {
//   constructor(name, age, gender, species, size, master, loyal) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.species = species;
//     this.legs = 4;
//     this.size = size;
//     this.master = master;
//     this.loyal = loyal;
//   }
// }

// class Labrador extends Dog {
//   constructor(name, age, gender, master) {
//     super(name, age, gender, 'Labrador', 'Large', master, true);
//   }
// }

// const polly = new Labrador('Polly', 10, 'female', 'Ludwig');
// console.log(polly);
/*
 *=====Fun with ES6 Classes #6 - Fake Files (Basic)======
 */
// class File {
//   constructor(fullName, content) {
//     this._fullName = fullName;
//     this._content = content;
//     this.count = {
//       lines: -1,
//       words: -1,
//     };
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   get filename() {
//     const arr = this._fullName.split('.');
//     arr.splice(arr.length - 1, 1);
//     return arr.join('.');
//   }

//   get extension() {
//     const arr = this._fullName.split('.');
//     return arr[arr.length - 1];
//   }

//   getContents() {
//     return this._content;
//   }

//   write(str) {
//     this._content += '\n' + str;
//   }

//   gets() {
//     const arr = this._content.split('\n');
//     this.count.lines += 1;
//     return arr[this.count.lines];
//   }

//   getc() {
//     const arr = this._content.split('');
//     this.count.words += 1;
//     return arr[this.count.words];
//   }
// }

// const file = new File('text.second.txt', 'Hello lorem');
// console.log('filename', file.filename);
// console.log('extension', file.extension);

// console.log(file.content);
// file.write('line 1');
// file.write('line 2');
// file.write('line 3');
// console.log(file.gets());
// console.log(file.gets());
// console.log(file.gets());
// console.log(file.gets());
// console.log(file.gets());
// console.log(file.fullName);
// file.fullName = 'sws';
// console.log(file.fullName);
/*
 *==============Object Oriented Piracy===================
 */
class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }

  isWorthIt() {
    return this.draft - 1.5 * this.crew >= 20;
  }
}

const titanic = new Ship(15, 10);
console.log(titanic.crew);
console.log(titanic.isWorthIt());
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
