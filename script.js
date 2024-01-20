let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;

const numberBtn = document.querySelectorAll(".key");
const operatorBtn = document.querySelectorAll(".operator");
const pointBtn = document.querySelector(".point");
const equalBtn = document.querySelector("#equal");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const lastScreen = document.querySelector(".lastScreen");
const currentScreen = document.querySelector(".currentScreen");

equalBtn.addEventListener("click", evaluate);
clearBtn.addEventListener("click", clear);
deleteBtn.addEventListener("click", deleteNumber);
pointBtn.addEventListener("click", appendPoint);
numberBtn.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);
operatorBtn.forEach((button) =>
  button.addEventListener("click", () => setOperation(button.textContent))
);

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "÷":
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function resetScreen() {
  currentScreen.textContent = "";
  shouldResetScreen = false;
}

function clear() {
  currentScreen.textContent = "0";
  lastScreen.textContent = "";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
}

function deleteNumber() {
  currentScreen.textContent = currentScreen.textContent.toString().slice(0, -1);
}

function appendNumber(number) {
  if (currentScreen.textContent === "0" || shouldResetScreen) resetScreen();

  currentScreen.textContent += number;
}

function appendPoint() {
  if (shouldResetScreen) resetScreen();
  if (currentScreen.textContent === "") currentScreen.textContent = "0";
  if (currentScreen.textContent.includes(".")) return;
  currentScreen.textContent += ".";
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate();
  firstOperand = currentScreen.textContent;
  currentOperation = operator;
  lastScreen.textContent = `${firstOperand} ${currentOperation}`;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOperation === null || shouldResetScreen) return;
  if (currentOperation === "÷" && currentScreen.textContent === "0") {
    alert("You can't divide by 0!");
    return;
  }
  secondOperand = currentScreen.textContent;
  currentScreen.textContent = operate(
    currentOperation,
    firstOperand,
    secondOperand
  );

  lastScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand}`;
  currentOperation = null;
}
function evaluate() {
  if (currentOperation === null || shouldResetScreen) return;
  if (currentOperation === "÷" && currentOperationScreen.textContent === "0") {
    alert("You can't divide by 0!");
    return;
  }
  secondOperand = currentOperationScreen.textContent;
  currentOperationScreen.textContent = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  );
  lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  currentOperation = null;
}
