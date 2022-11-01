/*
 *=====================Moving Zeros To The End========
 */
// const moveZeros = arr => {
//   const filterArr = [];
//   const zeros = [];
//   arr.forEach(el => (el === 0 ? zeros.push(el) : filterArr.push(el)));
//   return [...filterArr, ...zeros];
// };

// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
/*
 *====================================================
 */
// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value += str;
//     // return (this.value += str);
//   }
//   padStart(str) {
//     this.value = str + this.value;
//     // return (this.value = str + this.value);
//   }
//   padBoth(str) {
//     // this.value = str + this.value + str;
//     this.padStart(str);
//     this.padEnd(str);
//     // return this.value;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="
/*
 *=====================Extract the domain name from a URL
 */
// function domainName(url) {}

// console.log(domainName('http://google.com'));
// console.log(domainName('www.xakep.ru'));
/*
 *=====================What's a Perfect Power anyway?
 */
// const isPP = n => {
//   for (let i = 2; i <= n; i += 1) {
//     const value = Math.round(n ** (1 / i) * 1000) / 1000;
//     // console.log('value: ', value);
//     if (value <= 1) return null;
//     if (Number.isInteger(value) && value ** i == n) return [value, i];
//   }

//   return null;
// };

// // console.log(isPP(4));
// // console.log(isPP(5));
// // console.log(isPP(9));
// // console.log(isPP(125));
// console.log(isPP(343));
// // console.log(Math.cbrt(343));
// // console.log(343 ** (1 / 3) * 1000);
// // console.log(isPP(1124864));
/*
 *=====================
 */
function round(num) {
  let r = num.toString().split('.');
  let fN = +r[0];
  r = num - fN;

  return r <= 0.5 ? fN : ++fN;
}

Math.ceil = function (number) {};

Math.floor = function (number) {
  let r = num.toString().split('.');
  return +r[0];
};

console.log(round(0.5));
/*
 *=====================
 */

/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */
/*
 *=====================
 */

/*
 *=====================
 */
