const numberCheck = new RegExp(/^[0-9]/);
const operatorCheck = new RegExp(/\+|-|\*|\//);
const deleteCheck = new RegExp(/Backspace|Delete/);
const enterCheck = new RegExp(/Enter/);
const escapeCheck = new RegExp(/Escape/);
const decimalCheck = new RegExp(/^\./);
const negateCheck = new RegExp(/Negate/);
const clearRecent = new RegExp(/CE/);

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

function evaluate(first, operator, second) {
  let result;
  switch (operator) {
    case '+':
      result = add(first, second);
      break;

    case '-':
      result = subtract(first, second);
      break;

    case '*':
      result = multiply(first, second);
      break;

    case '/':
      result = divide(first, second);
      break;

    default:
      break;
  }

  return result;
}

export {
  clearRecent,
  evaluate,
  negateCheck,
  escapeCheck,
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
