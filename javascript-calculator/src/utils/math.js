const numberCheck = new RegExp(/^[0-9]/);
const operatorCheck = new RegExp(/\+|-|\*|\//);
const deleteCheck = new RegExp(/Backspace|Delete/);
const enterCheck = new RegExp(/Enter/);
const escapeCheck = new RegExp(/Escape/);
const decimalCheck = new RegExp(/\./);
const negateCheck = new RegExp(/Negate/);
const clearRecent = new RegExp(/CE/);
const percentCheck = new RegExp(/%/);
const reciprocalCheck = new RegExp(/fraction/);
const squareCheck = new RegExp(/square/);
const squareRootCheck = new RegExp(/root/);

function add(first, second) {
  const result = Number(first) + Number(second);
  if (result % 1 === 0) return result;
  return Math.round((result + Number.EPSILON) * 10000000000) / 10000000000;
}
function subtract(first, second) {
  const result = Number(first) - Number(second);
  if (result % 1 === 0) return result;
  return Math.round((result + Number.EPSILON) * 10000000000) / 10000000000;
}
function multiply(first, second) {
  const result = Number(first) * Number(second);
  if (result % 1 === 0) return result;
  return Math.round((result + Number.EPSILON) * 10000000000) / 10000000000;
}
function divide(first, second) {
  const result = Number(first) / Number(second);
  if (result % 1 === 0) return result;
  return Math.round((result + Number.EPSILON) * 10000000000) / 10000000000;
}
function percent(first) {
  const result = Number(first) / 100;
  if (result % 1 === 0) return result;
  return Math.round((result + Number.EPSILON) * 10000000000) / 10000000000;
}

function squareRoot(value) {
  const result = Math.sqrt(Number(value));
  if (result % 1 === 0) return result;
  return Math.round((result + Number.EPSILON) * 10000000000) / 10000000000;
}
function square(value) {
  const result = Number(value) ** 2;
  if (result % 1 === 0) return result;
  return Math.round((result + Number.EPSILON) * 10000000000) / 10000000000;
}
function reciprocal(value) {
  const result = 1 / Number(value);
  if (result % 1 === 0) return result;
  return Math.round((result + Number.EPSILON) * 10000000000) / 10000000000;
}

function minus(value) {
  const result = -Number(value);
  if (result % 1 === 0) return result;
  return Math.round((result + Number.EPSILON) * 10000000000) / 10000000000;
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
  squareCheck,
  squareRootCheck,
  percentCheck,
  reciprocalCheck,
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
