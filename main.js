const word = document.querySelector(".word");
const range = document.querySelector(".range");
const wordLen = document.querySelector(".length");
const mins = document.querySelector(".mins");
const plus = document.querySelector(".plus");

function zfill(num) {
  if (num < 10) return String(num).padStart(2, "0");
  return num;
}

function changeWord() {
  
}

const uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowercaseLetters = [
  "a",
  "b",
  "b",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "=",
  "+",
  "{",
  "}",
  "[",
  "]",
  "|",
  ":",
  ";",
  '"',
  "'",
  "<",
  ">",
  "?",
  ",",
  ".",
  "/",
];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let mainWord = [];

wordLen.innerHTML = `Word Length is ${zfill(range.value)}`;
range.addEventListener("input", function () {
  wordLen.innerHTML = `Word Length is ${zfill(range.value)}`;
});

plus.addEventListener("click", function () {
  range.value++;
  wordLen.innerHTML = `Word Length is ${zfill(range.value)}`;
});
mins.addEventListener("click", function () {
  range.value--;
  wordLen.innerHTML = `Word Length is ${zfill(range.value)}`;
});
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
let check1 = true;
let check2 = true;
let check3 = true;
let check4 = true;
one.addEventListener("change", function () {
  if (check1===true) {
    mainWord.push(...uppercaseLetters);
    check1 = false;
  } else {
    mainWord.splice(mainWord.indexOf("A"), mainWord.indexOf("Z") + 1);
    check1 = true;
  }
  console.log(mainWord);
});
two.addEventListener("change", function () {
  if (check2) {
    mainWord.push(...lowercaseLetters);
    check2 = !check2;
  } else {
    mainWord.splice(mainWord.indexOf("a"), mainWord.indexOf("z") + 1);
    check2 = !check2;
  }
  console.log(mainWord);
});
three.addEventListener("change", function () {
  if (check3) {
    mainWord.push(...numbers);
    check3 = false;
  } else {
    mainWord.splice(mainWord.indexOf(0), mainWord.indexOf(9) + 1);
    check3 = true;
  }
  console.log(mainWord);
});
four.addEventListener("change", function () {
  if (check4) {
    mainWord.push(...symbols);
    check4 = false;
  } else {
    mainWord.splice(mainWord.indexOf("!"), mainWord.indexOf("/") + 1);
    check4 = true;
  }
  console.log(mainWord);
});
