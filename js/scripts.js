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

// console.log(String(70304).split(''));

// console.log(expandedForm(12));
// console.log(expandedForm(42));
// console.log(expandedForm(70304));

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
//=======================================================
//=======================================================
//=======================================================
