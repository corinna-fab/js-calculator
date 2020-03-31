
const math_options = ['add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/', 'exponentiation', '**', 'modulo', '%']

//TASKED WITH: The program should have support for these four operations: addition, subtraction, multiplication, and division.
//TASKED WITH: The program should accept both the name and the symbol for each possible operation.
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
    //TASKED WITH:The program handles divide when attempting to divide by zero
    if(input.num2 === 0) {
      console.log('Error: Cannot divide by 0.')
    }
    else {
      return divide(input);
    }
  }
  else if(input.operation === 'modulo' || input.operation === '%') {
    return modulo(input);
  }
}

//TASKED WITH: The program adds numbers accurately with both add and +
const add = (input) => { console.log(exampleAdditionInput.num1 + exampleAdditionInput.num2); }

//TASKED WITH:The program subtracts numbers accurately with both subtract and -
const subtract = (input) => { console.log(exampleAdditionInput.num1 - exampleAdditionInput.num2); }

//TASKED WITH:The program adds numbers accurately with both multiply and *
const multiply = (input) => { console.log(exampleAdditionInput.num1 * exampleAdditionInput.num2); }

//TASKED WITH:The program adds numbers accurately with both divide and /
const divide = (input) => { console.log(exampleAdditionInput.num1 / exampleAdditionInput.num2); }

//OPTIONAL ENHANCEMENT: Add support for the modulo operator (10 % 3 = 1).
const modulo = (input) => { console.log(exampleAdditionInput.num1 % exampleAdditionInput.num2); }

//TASKED WITH: The program also needs to handle erroneous operators
//TASKED WITH:The program handles erroneous input. For example the user might enter clown when asked to enter a number

const confirmOperator = function confirmOperator(input){
  if(!math_options.includes(input.operation)) {
    console.log('Error: Please provide a valid operation. \n Provided:', input.operation)
  }
}

const confirmNumber = function confirmNumber(input) {
  if(isNaN(input.num1)) {
    console.log('Error: Please provide a valid number. \n Provided:', input.num1)
  }
  if(isNaN(input.num2)) {
    console.log('Error: Please provide a valid number. \n Provided:', input.num2)
  }
}

//OPTIONAL ENHANCEMENT: Print out the formula in addition to the result, i.e. 2 + 2 = 4
//OPTIONAL ENHANCEMENT: Add support for computing exponents (2^4 = 2 * 2 * 2 * 2 = 16)
//OPTIONAL ENHANCEMENT: Make your program know when it needs to return an integer versus a float.
//OPTIONAL ENHANCEMENT: Add support for parentheticals, i.e. 10 / (5 + 5) = 1.
//OPTIONAL ENHANCEMENT: Add support for handling all cases (uppercase, capitals) for the operations, so that ADD and add and Add (and other combinations) are handled in the same way

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

const exampleZeroCheck = {
  num1: 3,
  num2: 0,
  operation: '/',
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
calculate(exampleZeroCheck)
