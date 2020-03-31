const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const exampleAddition2Input = {
  num1: 3,
  num2: 5,
  operation: '+',
}

const exampleSubtractionInput = {
  num1: 3,
  num2: 5,
  operation: 'subtract',
}

const exampleSubtraction2Input = {
  num1: 3,
  num2: 5,
  operation: '-',
}

const exampleMultiplicationInput = {
  num1: 3,
  num2: 5,
  operation: 'multiply',
}

const exampleMultiplication2Input = {
  num1: 3,
  num2: 5,
  operation: '*',
}

const exampleDivideInput = {
  num1: 3,
  num2: 5,
  operation: 'divide',
}

const exampleDivide2Input = {
  num1: 3,
  num2: 5,
  operation: '/',
}

const exampleNumberCheck = {
  num1: 'dog',
  num2: 5,
  operation: '/',
}

const exampleOperatorCheck = {
  num1: 3,
  num2: 5,
  operation: 'wat',
}

const math_options = ["add", "+", "subtract", "-", "multiply", "*", "divide", "/", "exponentiation", "**", "modulo", "%"]

// The program should have support for these four operations: addition, subtraction, multiplication, and division.
// The program should accept both the name and the symbol for each possible operation.
const calculate = function calculate(input) {
  confirmNumber(input);
  confirmOperator(input);

  if(input.operation === 'add' || input.operation === '+') {
    return add(input);
  }
  else if(input.operation === 'subtract' || input.operation === '-')  {
    return subtract(input);
  }
  else if(input.operation === 'multiply' || input.operation === '*') {
    return multiply(input);
  }
  else if(input.operation === 'divide' || input.operation === '/') {
    return divide(input);
  }
  else if(input.operation === 'modulo' || input.operation === '%') {
    return modulo(input);
  }
}

const add = (input) => { console.log(exampleAdditionInput.num1 + exampleAdditionInput.num2); }

const subtract = (input) => { console.log(exampleAdditionInput.num1 - exampleAdditionInput.num2); }

const multiply = (input) => { console.log(exampleAdditionInput.num1 * exampleAdditionInput.num2); }

const divide = (input) => { console.log(exampleAdditionInput.num1 / exampleAdditionInput.num2); }

const modulo = (input) => { console.log(exampleAdditionInput.num1 % exampleAdditionInput.num2); }

// check if the input is invalid. 
//What happens if the user input is nil (i.e., the user just pressed enter)? What happens if the user tries to add hotdog to elephant? What if the user input is hotdog for an operator?
// if the input is invalid, output a message to the command line that informs the user that the input was invalid

//check for math operators
//check for numbers in numbers

const confirmOperator = function confirmOperator(input){
  if(!math_options.includes(input.operation)) {
    console.log("Error: Please provide a valid operation. \n Provided:", input.operation)
  }
}

const confirmNumber = function confirmNumber(input) {
  if(isNaN(input.num1)) {
    console.log("Error: Please provide a valid number. \n Provided:", input.num1)
  }
  if(isNaN(input.num2)) {
    console.log("Error: Please provide a valid number. \n Provided:", input.num2)
  }
}


calculate(exampleAdditionInput)
calculate(exampleAddition2Input)
calculate(exampleSubtractionInput)
calculate(exampleSubtraction2Input)
calculate(exampleMultiplicationInput)
calculate(exampleMultiplication2Input)
calculate(exampleDivideInput)
calculate(exampleDivide2Input)
calculate(exampleNumberCheck)
calculate(exampleOperatorCheck)

// const numberTest = {
//   num1: 'dog',
//   num2: 5,
//   operation: 'divide',
// }

// const numberTest2 = {
//   num1: 'dog',
//   num2: 5,
//   operation: 'divide',
// }

// confirmNumber(numberTest)
// confirmNumber(numberTest2)

// const operatorTest = {
//   num1: 5,
//   num2: 5,
//   operation: 'seventeen',
// }

// confirmOperator(operatorTest)