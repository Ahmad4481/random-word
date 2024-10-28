const word = document.querySelector(".word");
const range = document.querySelector(".range");
const wordLen = document.querySelector(".length");
const mins = document.querySelector(".mins");
const plus = document.querySelector(".plus");
const strong = document.querySelector(".strong");

function zfill(num) {
  if (num < 10) return String(num).padStart(2, "0");
  return num;
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

let mainWord = [
  ...lowercaseLetters,
  ...uppercaseLetters,
  ...numbers,
  ...symbols,
];
function changeWord() {
  word.value = "";
  for (let i = 0; i < range.value; i++) {
    word.value += mainWord[Math.floor(Math.random() * mainWord.length)];
  }
  Strong();
}
function Strong() {
  if (range.value < 5) {
    strong.innerHTML = "Very Weak";
  } else if (range.value < 10) {
    strong.innerHTML = "Weak";
  } else if (range.value < 12) {
    strong.innerHTML = "Strong";
  } else {
    strong.innerHTML = "Very Strong";
  }
}
changeWord();
wordLen.innerHTML = `Word Length is ${zfill(range.value)}`;
range.addEventListener("input", function () {
  wordLen.innerHTML = `Word Length is ${zfill(range.value)}`;
  changeWord();
});

plus.addEventListener("click", function () {
  range.value++;
  wordLen.innerHTML = `Word Length is ${zfill(range.value)}`;

  changeWord();
});
mins.addEventListener("click", function () {
  range.value--;
  wordLen.innerHTML = `Word Length is ${zfill(range.value)}`;
  changeWord();
});

document.querySelector("i").onclick = function () {
  changeWord();
};

// Strong

//check box
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
let check1 = true;
let check2 = true;
let check3 = true;
let check4 = true;
one.addEventListener("change", function () {
  if (!check1) {
    mainWord.push(...uppercaseLetters);
    check1 = !check1;
  } else {
    mainWord.splice(mainWord.indexOf("A"), mainWord.indexOf("Z") + 1);
    check1 = !check1;
  }
  oneCheck();
  changeWord();
});
two.addEventListener("change", function () {
  if (!check2) {
    mainWord.push(...lowercaseLetters);
    check2 = !check2;
  } else {
    mainWord.splice(mainWord.indexOf("a"), mainWord.indexOf("z") + 1);
    check2 = !check2;
  }
  oneCheck();
  changeWord();
});
three.addEventListener("change", function () {
  if (!check3) {
    mainWord.push(...numbers);
    check3 = !check3;
  } else {
    mainWord.splice(mainWord.indexOf(0), mainWord.indexOf(9) + 1);
    check3 = !check3;
  }
  oneCheck();
  changeWord();
});
four.addEventListener("change", function () {
  if (!check4) {
    mainWord.push(...symbols);
    check4 = !check4;
  } else {
    mainWord.splice(mainWord.indexOf("!"), mainWord.indexOf("/") + 1);
    check4 = !check4;
  }
  changeWord();
  oneCheck();
});

function oneCheck() {
  let checks = [check1, check2, check3, check4];
  let count = 0;
  for (let i = 0; i < checks.length; i++) {
    if (checks[i] === true) {
      count++;
    }
  }
  console.log(checks);
  if (count === 1) {
    document
      .querySelector(`.check input:nth-of-type(${checks.indexOf(true) + 1})`)
      .classList.add("e-none");
    document
      .querySelector(`.check label:nth-of-type(${checks.indexOf(true) + 1})`)
      .classList.add("e-none");
  } else {
    for (let i 0=;i<checks length;i++) {
      if (document
      .querySelector(`.check input:nth-of-type(${checks[i]+ 1})`).classList.contains("e-none") {
        document
      .querySelector(`.check label:nth-of-type(${checks[i] + 1})`).classList.remove("e-none")
          document
      .querySelector(`.check input:nth-of-type(${checks[i] + 1})`).classList.remove("e-none")
      }
    }
  }
}

document.querySelector(".copy").onclick = function () {
  navigator.clipboard.writeText(word.value);
  this.innerHTML = "Copyed";
  setTimeout(() => {
    this.innerHTML = "Copy";
    this.style.pointerEvent = "none";
  }, 7000);
};
