"use strict";

// card--display
const cardNumberEl = document.querySelector(".card--number");
const cardNameEl = document.querySelector(".card--name");
const expDateEl = document.querySelector(".exp--date");
const cvcCodeEl = document.querySelector(".cvc--code");

// input
const inputNameEl = document.querySelector(".input--name");
const inputNumberEl = document.querySelector(".input--number");
const inputMonthEl = document.querySelector(".input--month");
const inputYearEl = document.querySelector(".input--year");
const inputCvcEl = document.querySelector(".input--cvc");
const inputAllEl = document.querySelectorAll("input");

// btn
const btnEl = document.querySelector(".btn");

// error
const errorAllEl = document.querySelectorAll(".error");

// regular expression
const letterRegex = new RegExp(/[a-zA-Z ]/);
const numRegex = new RegExp(/[0-9 ]/);

// array for card holder name,number
let keysPressed = [];
let numsPressed = [];

// error message
const errorMessage = {
  empty: "*Please enter this field",
};

// ********************************
// conform Btn Clicked
// ********************************
btnEl.addEventListener("click", function (e) {
  // checking for empty fields
  if (!emptyInput(inputAllEl)) {
    console.log("fuck");
  }
});

// ********************************
// ENTRING CARD NAME
// ********************************
inputNameEl.addEventListener("keydown", function (e) {
  //   e.preventDefault();
  const keyPressed = e.key;

  //   when user deletes a letter
  if (keyPressed === "Backspace") {
    formatStr(keysPressed.pop(), keysPressed, cardNameEl);
  }
  if (correctKeyStr(keyPressed)) {
    formatStr(keysPressed.push(keyPressed), keysPressed, cardNameEl);
  } else {
    console.log("fuck");
  }
});

// ********************************
// ENTRING CARD Number
// ********************************
inputNumberEl.addEventListener("keydown", function (e) {
  const keyPressed = e.key;
  if (keyPressed === "Backspace") {
    formatStr(numsPressed.pop(), numsPressed, cardNumberEl);
  }
  if (correctKeyNum(keyPressed)) {
    formatStr(numsPressed.push(keyPressed), numsPressed, cardNumberEl);
  }
});

// ********************************
// formatting the entered key
// ********************************
function formatStr(type, arr, el) {
  type;
  el.textContent = arr.join("");
}

// ********************************
// Check if the pressed key is a letter
// ********************************
function correctKeyStr(keyPressed) {
  let isLetter = true;
  if (!letterRegex.test(keyPressed) || keyPressed.length > 1) {
    isLetter = false;
  }
  return isLetter;
}

// ********************************
// Check if the pressed key is a number
// ********************************
function correctKeyNum(keyPressed) {
  let isNum = true;
  if (!numRegex.test(keyPressed) || keyPressed.length > 1) {
    isNum = false;
  }
  return isNum;
}

// ********************************
// funnction if empty input
// ********************************
function emptyInput(inputs) {
  let hasValue = true;
  [...inputs].forEach(function (e) {
    const value = e.value.trim();
    if (value === "" || value === null || Number(value) === 0) {
      hasValue = false;
      setError(e, errorMessage.empty);
    }
  });
  return hasValue;
}

// ********************************
// setting error correctly
// ********************************
function setError(input, errorMsg) {
  const parent = input.parentElement;
  const errorEl = parent.querySelector(".error");
  errorEl.classList.add("error--active");
  input.classList.add("error--active");
  errorEl.textContent = errorMsg;
}
