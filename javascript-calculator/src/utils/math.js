const numberCheck = new RegExp(/^[0-9]/);
const operatorCheck = new RegExp(/\+|-|\*|\//);
const deleteCheck = new RegExp(/Backspace|Delete/g);
const enterCheck = new RegExp(/Enter/g);
const decimalCheck = new RegExp(/^\./);

function add(first, second) {
  return Number(first) + Number(second);
}
function subtract(first, second) {
  return Number(first) - Number(second);
}
function multiply(first, second) {
  return Number(first) * Number(second);
}
function divide(first, second) {
  return Number(first) / Number(second);
}
function percent(first) {
  return Number(first) / 100;
}

function squareRoot(value) {
  return Math.sqrt(Number(value));
}
function square(value) {
  return Number(value) ** 2;
}
function reciprocal(value) {
  return 1 / Number(value);
}

function minus(value) {
  return -Number(value);
}

export {
  enterCheck,
  numberCheck,
  deleteCheck,
  operatorCheck,
  decimalCheck,
  add,
  subtract,
  multiply,
  divide,
  percent,
  square,
  squareRoot,
  reciprocal,
  minus,
};
