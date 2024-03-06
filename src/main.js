"use strict";

//containers
const cardFormEl = document.querySelector(".card--form");
const cardCompleteEl = document.querySelector(".card--complete");

// card--display
const cardNumberEl = document.querySelector(".card--number");
const cardNameEl = document.querySelector(".card--name");
const expDateEl = document.querySelector(".exp--date");
const cvcCodeEl = document.querySelector(".cvc--code");
const cardMonthEl = document.querySelector(".card--month");
const cardYearEl = document.querySelector(".card--year");

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

// error message
const errorMessage = {
  empty: "*Please enter this field",
  containsNum: "*Please enter valid Name (numbers not allowed)",
  cardNumber: "*Enter valid card number",
  date: "*Please enter a valid date",
  cvc: "*Please enter a valid CVC number",
};

// ********************************
// conform Btn Clicked
// ********************************
btnEl.addEventListener("click", function (e) {
  // checking for empty fields
  if (emptyInput(inputAllEl)) {
    if (validInput(inputAllEl)) {
      console.log("ohh fuck yes yes yes");
      cardFormEl.classList.add("card--hidden");
      cardCompleteEl.classList.remove("card--hidden");
    }
  }
});

// ********************************
// ENTRING CARD NAME
// ********************************
inputNameEl.addEventListener("input", function (e) {
  const value = inputNameEl.value.trim();
  cardNameEl.textContent = value;
});

// ********************************
// ENTRING CARD Number
// ********************************
inputNumberEl.addEventListener("input", function (e) {
  const value = inputNumberEl.value;
  let arr = value.split("");
  arr.forEach(function (e, index) {
    if (!numRegex.test(e)) {
      arr = arr.splice(index, 1);
      setError(inputNumberEl, errorMessage.cardNumber);
    } else removeError(inputNumberEl);
  });
  cardNumberEl.textContent = arr.join("");
});

// ********************************
// ENTRING month
// ********************************
inputMonthEl.addEventListener("input", function (e) {
  const value = inputMonthEl.value.trim();
  cardMonthEl.textContent = value;
});

// ********************************
// ENTRING year
// ********************************
inputYearEl.addEventListener("input", function (e) {
  const value = inputYearEl.value.trim();
  cardYearEl.textContent = value;
});

// ********************************
// ENTRING CVC
// ********************************
inputCvcEl.addEventListener("input", function (e) {
  const value = inputCvcEl.value.trim();
  cvcCodeEl.textContent = value;
});

// ********************************
// funnction for empty input
// ********************************
function emptyInput(inputs) {
  let hasValue = true;
  [...inputs].forEach(function (e) {
    const value = e.value.trim();
    if (value === "" || value === null || Number(value) === 0) {
      hasValue = false;
      // if empty
      setError(e, errorMessage.empty);
    } else removeError(e);
  });
  return hasValue;
}

// ********************************
// checking if the  given input's is correct
// ********************************
function validInput(inputs) {
  let isValid = true;
  [...inputs].forEach(function (e) {
    const value = e.value;
    // for name
    if (e.classList.contains("input--name")) {
      const check = value
        .split("")
        .some((element) => /\S/.test(element) && !isNaN(element));
      if (check) {
        setError(e, errorMessage.containsNum);
        isValid = false;
      } else removeError(e);
    }

    // for card number
    if (e.classList.contains("input--number")) {
      let arr = value.trim().split("");
      arr = arr.filter((e) => e !== " ").join("");

      if (Number(arr.length) !== 16) {
        setError(e, errorMessage.cardNumber);
        isValid = false;
      }
    }

    // for month
    if (e.classList.contains("input--month")) {
      if (isNaN(value) || Number(value) < 0 || Number(value) > 12) {
        setError(e, errorMessage.date);
        isValid = false;
      }
    }

    // for year
    if (e.classList.contains("input--year")) {
      if (isNaN(value) || Number(value) < 0) {
        setError(e, errorMessage.date);
        isValid = false;
      }
    }

    // for cvc4
    if (e.classList.contains("input--cvc")) {
      if (isNaN(value) || Number(value) < 0 || value.length !== 3) {
        setError(e, errorMessage.cvc);
        isValid = false;
      }
    }
  });
  return isValid;
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

// ********************************
// removing error correctly
// ********************************
function removeError(input) {
  const parent = input.parentElement;
  const errorEl = parent.querySelector(".error");
  errorEl.classList.remove("error--active");
  input.classList.remove("error--active");
  errorEl.textContent = "";
}
