// function order(words) {
//   const wordsArray = words.split(' ');
//   // const legth = wordsArray.length;
//   const newArray = [];
//   // console.log(wordsArray);

//   for (const word of wordsArray) {
//     // console.log(word);
//     const letters = word.split('');
//     // console.log(letters);

//     for (let i = 1; i <= wordsArray.length; i += 1) {
//       if (letters.includes(String(i))) {
//         newArray[i] = word;
//       }
//     }

//     // if (letters.includes('1')) {
//     //   newArray[0] = word;
//     //   // newArray.push(word);
//     // } else if (letters.includes('2')) {
//     //   newArray[1] = word;
//     //   // newArray.push(word);
//     // } else if (letters.includes('3')) {
//     //   newArray[2] = word;
//     //   // newArray.push(word);
//     // } else if (letters.includes('4')) {
//     //   newArray[3] = word;
//     //   // newArray.push(word);
//     // }

//     // // console.log(letters);
//     // for (const letter of letters) {
//     //   for (let i = 1; i <= legth; i += 1) {
//     //     // console.log(letter);
//     //     // console.log(Number(letter));
//     //     // console.log(i);
//     //     if (Number(letter) === i) {
//     //       // console.log(i);
//     //       wordsArray[i - 1] = word;
//     //     }
//     //   }
//     // }
//   }

//   return newArray.join(' ');
//   // return wordsArray.join(' ');
// }

// console.log(order('is2 Thi1s T4est 3a'));
// console.log(order('4of Fo1r pe6ople g3ood th5e the2'));

//=======================РЕШЕНИЕ================================

// function order(words) {
//   const wordsArray = words.split(' ');
//   const newArray = [];

//   for (const word of wordsArray) {
//     const letters = word.split('');

//     for (let i = 1; i <= wordsArray.length; i += 1) {
//       if (letters.includes(String(i))) {
//         newArray[i - 1] = word;
//       }
//     }
//   }

//   return newArray.join(' ');
// }

// console.log(order(''));
// console.log(order('is2 Thi1s T4est 3a'));
// console.log(order('4of Fo1r pe6ople g3ood th5e the2'));

//======================решение с codewars===================

// function order(words) {
//   const wordsArray = words.split(' ');
//   const newArray = [];
//   for (let i = 0; i <= wordsArray.length; i += 1) {
//     for (let j = 0; j < wordsArray.length; j += 1) {
//       if (wordsArray[j].indexOf(i) >= 0) {
//         newArray.push(wordsArray[j]);
//       }
//     }
//   }
//   return newArray.join(' ');
// }

// console.log(order(''));
// console.log(order('is2 Thi1s T4est 3a'));
// console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
//=======================================================

// function index(words) {
//   const wordsToArray = words.split(' ');
//   const array = [];

//   for (let i = 1; i <= wordsToArray.length; i += 1) {
//     for (let j = 0; j < wordsToArray.length; j += 1) {
//       if (wordsToArray[j].indexOf(i) >= 0) {
//         array.push(wordsToArray[j]);
//       }
//     }
//   }

//   return array.join(' ');
// }

// console.log(index('jhgjh5jlkj kjhjh6 dw2d 2d w3ff fe7'));
// console.log(index('is2 Thi1s T4est 3a'));
// console.log(index('4of Fo1r pe6ople g3ood th5e the2'));

// =======Write Number in Expanded Form===============

// function expandedForm(number) {
//   const string = String(number);
//   let element = [];

//   for (let i = 0; i < string.length; i += 1) {
//     let part = string[i] * Number('1' + '0'.repeat(string.length - 1 - [i]));
//     console.log(`part: `, part);
//     if (part !== 0) {
//       element.push(String(part));

//       console.log(element);
//     }
//   }

//   return element.join(' + ');
// let items = String(num).split('');
// console.log(items);
// let newNum = [];
// const expanded = [];
// for (let i = 0; i < items.length; i += 1) {
//   if (items[i] !== 0) {
//     newNum.push(items[i]);
//     while (newNum.length < items.length - 1) {
//       newNum.push('0');
//       newNum = newNum.push('0').join('');
//     }
//   }
// console.log(newNum);
// }
// newNum.push(items[0]);
// console.log(newNum);
// while (newNum.length < items.length) {
//   newNum.push('0');
// }
// expanded.push(newNum.join(''));
// console.log(newNum);
// console.log(expanded);
// newNum = num - Number(expanded);
// items = String(newNum).split('');
// console.log(newNum);
// console.log(items);
// }

// console.log(expandedForm(12));
// console.log(expandedForm(42));
// console.log(expandedForm(70304));

//===========Duplicate Encoder===========================
// function duplicateEncode(word) {
//   const letters = word.split('');
//   const uniqLetters = [];
//   const repeatsLetters = [];
//   const newWord = [];

//   letters.forEach(letter => {
//     if (!uniqLetters.includes(letter)) {
//       uniqLetters.push(letter);
//     } else {
//       repeatsLetters.push(letter);
//     }

//     repeatsLetters.forEach(repeatsLetter => {
//       if (!letters.includes(repeatsLetter)) {
//         newWord.push('(');
//         console.log(newWord);
//       } else {
//         newWord.push(')');
//       }
//     });
//   });

//   console.log(letters);
//   console.log(uniqLetters);
//   console.log(repeatsLetters);

//   return newWord.join('');
// }

// console.log(duplicateEncode('recede'));

//================Consecutive strings====================

// function longestConsec(strarr, k) {
//   const n = strarr.length;
//   if (n === 0 || k > n || k <= 0) {
//     return '';
//   }

//   const concatenatingStrings = [];
//   let element = '';

//   for (let j = 0; j < n; j += 1) {

//     while (j < k) {
//       element += strarr[j];
//     }

//     concatenatingStrings.push({ element: element.length });
//   }

//   const biggest = Object.values(concatenatingStrings).sort((a, b) => b - a);
//   return concatenatingStrings.find(string => string.length === biggest);
// }

// console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3));
//=======================================================
// /*
//  *===============Integer Difference======================
//  */
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
// // console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4));
// console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 0));
// // console.log(intDiff([0], 4));
//=======================================================
/*
 *=======Numbers that are a power of their sum of digits==
 */
// function powerSumDigTerm(n) {
//   const arr = [];

//   for (let i = 81; i <= n; i++) {
//     const sum = String(i)
//       .split('')
//       .reduce((acc, el, i, a) => acc + +el, 0);
//     let a = i;
//     console.log(sum);

//     do {
//       a = Math.sqrt(a);
//       console.log(a);

//       if (a === sum) {
//         arr.push(i);
//       }
//     } while (a < sum);
//   }

//   return arr;
//   if (i === String(i)
//     .split('')
//     .reduce((acc, el, i, a) => acc + +el, 0)) {}
// }

// console.log(String(n).split(''));
// console.log(
//   String(n)
//     .split('')
//     .reduce((acc, el, i, a) => acc + +el, 0),
// );
// const arr = [];
// for (let i = a; i < b; i++) {
//   do {
//     arr.push(i);
//   } while ()
// }
//   return (
// String(n)
//   .split('')
//   .reduce((acc, el, i, a) => acc + +el, 0) ** String(n).split('').length
//   );
// }

// console.log(powerSumDigTerm(81));
// console.log(powerSumDigTerm(512));
// console.log(powerSumDigTerm(2401));
// console.log(powerSumDigTerm(4913));
//=======================================================
/*
 *====================Range Extraction===================
 */
// const solution = list => {

// };

// console.log(
//   solution([
//     -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
//   ]),
// ); // "-6,-3-1,3-5,7-11,14,15,17-20"
//=======================================================
/*
 *=======================Sum of Intervals================
 */
// const sumIntervals = i => {
//   const sa = [].concat(...i).sort((a, b) => a - b);
//   const fa = sa.filter((e, i, a) => e + 1 !== a[i + 1] && e !== a[i + 1]);
//   console.log('sa: ', sa);
//   console.log('fa: ', fa);
//   let a = 0;

//   for (let i = 0, j = 1; i < fa.length; i += 2, j += 2) {
//     a += fa[j] - fa[i];
//   }
//   return a;
// };

// // function sum(a) {
// //   return a[a.length - 1] - a[0];
// // }

// // console.log(sum([10, 20]));

// console.log(
//   sumIntervals([
//     [1, 4],
//     [7, 10],
//     [3, 5],
//   ]),
// );

// console.log(
//   sumIntervals([
//     [0, 20],
//     [-100000000, 10],
//     [30, 40],
//   ]),
// );

// console.log(
//   sumIntervals([
//     [1, 5],
//     [10, 20],
//     [1, 6],
//     [16, 19],
//     [5, 11],
//   ]),
// );
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
//=======================================================
//=======================================================
//=======================================================
