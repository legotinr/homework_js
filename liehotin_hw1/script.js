let mathOperator
function getMathOperator() {
    mathOperator = prompt('Please enter one of math operator(add, sub, mult, div)')
    if (mathOperator !== 'add' && mathOperator !== 'sub' && mathOperator !== 'mult' && mathOperator !== 'div') {
        alert('Error. Math operator not found');
        getMathOperator();
      }
  }

  getMathOperator();

let firstNumber
function getFirstNumber() {
    firstNumber = Number(prompt(`Please enter first number`))
    if (isNaN(firstNumber)) {
        alert('Not a number!');
        getFirstNumber();
      }
  }
  
  getFirstNumber();

let secondNumber
function getSecondNumber() {
    secondNumber = Number(prompt('Please enter second number'))
    if (isNaN(secondNumber)) {
        alert('Not a number!');
        getSecondNumber();
      }
  }
  
  getSecondNumber();


if (mathOperator === 'add') {
    alert(`${firstNumber} + ${secondNumber} = ${(firstNumber + secondNumber)}`)
} else {
    if (mathOperator === 'sub') {
        alert(`${firstNumber} - ${secondNumber} = ${(firstNumber - secondNumber)}`)
    } else {
        if (mathOperator === 'mult') {
            alert(`${firstNumber} * ${secondNumber} = ${(firstNumber * secondNumber)}`)
        } else {
            if (mathOperator === 'div') {
                alert(`${firstNumber} / ${secondNumber} = ${(firstNumber / secondNumber)}`)
            } else {
                alert('Something went wrong')
            }
        }
        

    }
    
}

