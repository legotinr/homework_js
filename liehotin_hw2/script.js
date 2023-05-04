let firstNumber = prompt('Please enter first number');
firstNumber = Number(firstNumber);
if (isNaN(firstNumber)) {
    alert('Not a number!');
} else {
    let secondNumber = prompt('Please enter second number');
    secondNumber = Number(secondNumber);
    if (isNaN(secondNumber)) {
    alert('Not a number!');
    } else {
        let thirdNumber = prompt('Please enter third number');
        thirdNumber = Number(thirdNumber);
        if (isNaN(thirdNumber)) {
            alert('Not a number!');
        } else {
            alert(`Average is ${(firstNumber+secondNumber+thirdNumber)/3} `);
            }
        }
}



/*let firstNumber;
let secondNumber;
let thirdNumber;

function getFirstNumber() {
    firstNumber = prompt(`Please enter first number`)
    firstNumber = Number(firstNumber);
    if (isNaN(firstNumber)) {
        alert('Not a number!');
        getFirstNumber();
      }
  }

  getFirstNumber();

function getSecondNumber() {
    secondNumber = prompt(`Please enter second number`)
    secondNumber = Number(secondNumber);
    if (isNaN(secondNumber)) {
        alert('Not a number!');
        getSecondNumber();
      }
  }

  getSecondNumber();

function getThirdNumber() {
    thirdNumber = prompt(`Please enter third number`)
    thirdNumber = Number(thirdNumber);
    if (isNaN(thirdNumber)) {
        alert('Not a number!');
        getThirdNumber();
      }
  }

  getThirdNumber();

  
  alert(`Average is ${(firstNumber+secondNumber+thirdNumber)/3} `)*/