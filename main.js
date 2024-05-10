//////////*String-1*//////////
/*
let s = 65;
let str;
let n = +prompt("n sonni kiriting__");
for (let i = 0; i < n; i++) {
  srt = str.codePointAt(s + i);
  console.log(srt);
}
*/
//////////*String-2*//////////
/*
function Charact(charact) {
  if (charact >= "0" && charact < "10") {
    return "digit";
  } else if (
    (charact >= "a" && charact <= "z") ||
    (charact >= "A" && charact <= "Z")
  ) {
    return "lotin";
  } else {
    return 0;
  }
}
console.log(Charact("2"));
*/
//////////*String-3*//////////
/*
let s = prompt("String kiriting");
let first = s[0];
let second = s[s.length - 1];
console.log(second.charCodeAt(`Oxirgi belgisi: ${second}`));
console.log(first.charCodeAt(`Birinchi belgisi: ${first}`));
*/
//////////*String-4*//////////
/*
let A = prompt("A ning qiymatini kiriting ");
let N = prompt("N sonini kiriting");
console.log(A.repeat(N));
*/
//////////*String-5*//////////
/*
let str = prompt("String kiriting");
let reversedString = str.split("").reverse().join("");
console.log(reversedString);
*/
//////////*String-6*//////////
/*
function getStringStars(str, N) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i] + "*".repeat(N);
  }
  return result;
}
let srt = "salom";
let N = parseInt(prompt("Son kiriting"));
console.log(getStringStars("salom", N));
*/
//////////*String-7*//////////
/*
function calculationNumber(str) {
  let calculate = 0;
  for (let char of str) {
    if (!isNaN(char)) {
      calculate++;
    }
  }
  return calculate;
}
let answer = prompt("Qiymat kiriting");
console.log(calculationNumber(answer));
*/
//////////*String-8*//////////

//////////*String-9*//////////
/*
let str = prompt("String kiriting");
let str2 = str.toLowerCase(str);
console.log(str2);
*/
//////////*String-10*/////////
/*
let str = prompt("String kiriting");
let str2 = str.toLowerCase(str);
let str3 = str.toUpperCase(str);
console.log(str2);
console.log(str3);
*/
//////////*String-11*/////////

//////////*String-12*/////////
/*
function getInverseNumber(n) {
  let reversedNumber = n.split("").reverse().join("");
  return reversedNumber;
}
let n = prompt("Number kiriting");
console.log(getInverseNumber(n));
*/
//////////*String-13*/////////

//////////*String-14*/////////
/*
let s1 = prompt("1-Stringni qiymatini kiriting");
let s2 = prompt("2-Stringni qiymatini kiriting");
let n1 = +prompt("n1 ning qiymatini kiriting");
let n2 = +prompt("n2 ning qiymatini kiriting");
let result = s1.slice(0, n1) + s2.slice(-n2);
console.log(result);
*/
//////////*String-15*/////////
/*
let str = prompt("String kiriting");
let C = prompt("C belgisini kiriting");
console.log(toString.(str.replace(C, C + C)));
*/

// Buyog'i darsda qilinishi kerak bo'lgan lekin ulgurilmaganlari bular
/*
let str = prompt("String kiriting");
let str2 = str.toLowerCase(str);
console.log(str2);
*/
/*
let s1 = "Hello world!";
let s2 = "*";
let c = "l";
let newStr = s1.replaceAll(c, c + s2);
console.log(newStr);
*/
