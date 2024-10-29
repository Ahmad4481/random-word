const word = document.querySelector(".word");
const range = document.querySelector(".range");
const wordLen = document.querySelector(".length");
const strong = document.querySelector(".strong");
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const symbols = `!@#$%^&*()-=+{}[]|:;"'<>?,./`;
const numbers = "0123456789";

// العناصر المتاحة
const elements = [
  { selector: "#one", data: uppercaseLetters, index: 0 },
  { selector: "#two", data: lowercaseLetters, index: 1 },
  { selector: "#three", data: numbers, index: 2 },
  { selector: "#four", data: symbols, index: 3 },
];

// تحقق من كل checkbox إذا كانت مفعّلة أم لا
let checks = [true, true, true, true];

// دالة لإعادة بناء mainWord بناءً على حالة checkboxes
function updateMainWord() {
  mainWord = [];
  elements.forEach(({ data, index }) => {
    if (checks[index]) mainWord.push(...data);
  });
}

// حدث التغيير لكل checkbox
elements.forEach(({ selector, index }) => {
  const element = document.querySelector(selector);
  element?.addEventListener("change", () => {
    checks[index] = !checks[index];
    updateMainWord(); // تحديث mainWord
    updateDisplay(); // تحديث العرض
  });
});

// دالة لتحديث العرض
function updateDisplay() {
  if (!checks.some(Boolean)) {
    word.value = "Check at least one";
    strong.innerHTML = "No Thing";
  } else {
    generateWord();
    checkStrength();
  }
}

// دالة لتوليد كلمة عشوائية
function generateWord() {
  word.value = Array.from(
    { length: range.value },
    () => mainWord[Math.floor(Math.random() * mainWord.length)]
  ).join("");
}

// دالة لتقييم قوة الكلمة
function checkStrength() {
  strong.innerHTML =
    range.value < 5
      ? "Very Weak"
      : range.value < 10
      ? "Weak"
      : range.value < 12
      ? "Strong"
      : "Very Strong";
}

// دالة لتحديث عرض الطول
function updateLengthDisplay() {
  wordLen.innerHTML = `Word Length Is ${String(range.value).padStart(2, "0")}:`;
}

// أحداث التغيير
range.addEventListener("input", () => {
  updateLengthDisplay();
  updateDisplay();
});

document.querySelector(".plus").addEventListener("click", () => {
  range.value++;
  updateLengthDisplay();
  updateDisplay();
});

document.querySelector(".mins").addEventListener("click", () => {
  range.value--;
  updateLengthDisplay();
  updateDisplay();
});

document.querySelector("i").onclick = updateDisplay;

document.querySelector(".copy").onclick = function () {
  navigator.clipboard.writeText(word.value);
  this.innerHTML = "Copied";
  setTimeout(() => (this.innerHTML = "Copy"), 7000);
};

// تحديثات أولية
updateMainWord();
updateDisplay();
updateLengthDisplay();
