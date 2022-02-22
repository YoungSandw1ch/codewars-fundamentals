/*
 *====================String cleaning
 */
// const stringClean = s => s.replace(/\d/g, '');

// console.log(stringClean('(E3at m2e2!!)')); //(Eat me!!)
// console.log(
//   stringClean(
//     'My "me3ssy" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?',
//   ),
// );
/*
 *====================Get number from string
 */
// const getNumberFromString = s => Number(s.replace(/\D/g, ''));

// console.log(getNumberFromString('this is number: 7'));
// console.log(getNumberFromString('123'));
/*
 *====================Regex count lowercase letters
 */
// const lowercaseCount = str => str.match(/[a-z]/g)?.length || 0;
// const lowercaseCount = str => {
//   if (!str.match(/[a-z]/g)) {
//     return 0;
//   }
//   return str.match(/[a-z]/g).length;
// };
// const lowercaseCount = str =>
//   !str.match(/[a-z]/g) ? 0 : str.match(/[a-z]/g).length;

// console.log(lowercaseCount('abc'));
// console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
// console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
// console.log(lowercaseCount('abcABC123'));
/*
 *====================Simple validation of a username with regex
 */
// function validateUsr(username) {
//   let res = /^[a-z0-9_]{4,16}$/.test(username);
//   return res;
// }

// console.log(validateUsr('Hass')); //f
// console.log(validateUsr('012')); //f
// console.log(validateUsr('asd43_34')); //t
// console.log(validateUsr('asd43 34')); //f
// console.log(validateUsr('asddsa')); //t
/*
 *====================Remove anchor from URL
 */
// const removeUrlAnchor = url => url.match(/[^\#]+/)[0];
// const removeUrlAnchor = url => url.split('#')[0];

// console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'));
// console.log(removeUrlAnchor('www.codewars.com/katas/'));
/*
 *====================Remove duplicate words
 */
// const removeDuplicateWords = s =>
//   s.split(' ').filter((el, i, a) => a.indexOf(el) === i);

// const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ');

// console.log(
//   removeDuplicateWords(
//     'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta',
//   ),
// );
/*
 *====================validate code with simple regex
 */
// const validateCode = code => /^[1-3]/.test(code);

// console.log(validateCode(9453));
// console.log(validateCode(248));
/*
 *====================Count the number of JavaScript developers coming from Europe
 */
// var list1 = [
//   {
//     firstName: 'Noah',
//     lastName: 'M.',
//     country: 'Switzerland',
//     continent: 'Europe',
//     age: 19,
//     language: 'JavaScript',
//   },
//   {
//     firstName: 'Maia',
//     lastName: 'S.',
//     country: 'Tahiti',
//     continent: 'Oceania',
//     age: 28,
//     language: 'JavaScript',
//   },
//   {
//     firstName: 'Shufen',
//     lastName: 'L.',
//     country: 'Taiwan',
//     continent: 'Asia',
//     age: 35,
//     language: 'HTML',
//   },
//   {
//     firstName: 'Sumayah',
//     lastName: 'M.',
//     country: 'Tajikistan',
//     continent: 'Asia',
//     age: 30,
//     language: 'CSS',
//   },
// ];

// const countDevelopers = list =>
//   list.filter(el => el.continent === 'Europe' && el.language === 'JavaScript')
//     .length;

// console.log(countDevelopers(list1));
/*
 *====================Create Phone Number=====!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */

// const createPhoneNumber = numbers => {
//   numbers.replace();
//   // .match(/\(\d{3}\) \d{3}-\d{4}/)
// };

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// //"1234567890"
// //"(123) 456-7890"

/*
 *====================Найдите языки программирования
 */
// let regexp = /PHP|java(script)?|C(\+\+)?/gi;

// console.log('Java JavaScript PHP C++ C'.match(regexp)); // Java JavaScript PHP C++ C
/*
 *====================Найдите пары BB-кодов
 */
// // let regexp = /\[.*\]/g;
// let regexp = /\[(b|url|quote)].*\[\/\1]/gs;

// // let str = '..[url][b]http://ya.ru[/b][/url]..';
// let str = `
// [quote]
//   [b]текст[/b]
// [/quote]
// `;
// console.log(str.match(regexp)); // [url][b]http://ya.ru[/b][/url]
/*
 *====================Найдите строки в кавычках
 */
// // let regexp = /".*"/g;
// let regexp = /"(\\.|[^"\\])*"/g;

// const str = '.. "Скажи \\"Привет\\"!" ...';

// console.log(str.match(regexp));
/*
 *====================Найдите весь тег
 */
// let regexp = /(\<[a-z]{5}\>)|(\<[a-z]{5}\s.*\>)/g;
// let regexp = /\<style(>|\s.*>)/g;

// console.log('<style> <styler> <style test="...">'.match(regexp)); // <style>, <style test="...">
/*
 *====================Найдите неотрицательные целые
 */
// // let regexp = /(?<!-)(?<!\d)\d+/g;
// let regexp = /(?<![-\d])\d+/g;

// let str = '0 12 -5 123 -18';

// console.log(str.match(regexp)); // 0, 12, 123
/*
 *====================Вставьте после фрагмента
 */

// // let regexp = /(?<=<body.*?>)\n/;
// let regexp = /(?<=<body.*?>)/;

// let str = `
// <html>
//   <body style="height: 200px">
//   ...
//   </body>
// </html>
// `;

// str = str.replace(regexp, `<h1>Hello</h1>`);

// console.log(str);

/*
 *====================
 */

/*
 *====================
 */

/*
 *====================
 */

/*
 *====================
 */

/*
 *====================
 */

/*
 *====================
 */

/*
 *====================
 */

/*
 *====================
 */

/*
 *====================
 */

/*
 *====================
 */

/*
 *====================
 */

/*
 *====================
 */

/*
 *====================
 */

/*
 *====================
 */

/*
 *====================
 */

/*
 *====================
 */

/*
 *====================
 */
