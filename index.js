const readline = require('readline-sync');
var number = null;
var result = null;
var inputOperation = null;
console.log('Welcome to the calculator!' + '\n' + 'What operation do you want to do?: ');
//get the operation
console.log('Enter: ' + '\n' + '1 for Addition' + '\n' + '2 for Subtraction' + '\n' + '3 for Multiplication' + '\n' + '4 for Division' + '\n');
inputOperation = readline.prompt();

//get  input
var firstNumber = getInput();
console.log('FirstNumber is:' + firstNumber);
var secondNumber = getInput();
console.log('SecondNumber is:' + secondNumber);

switch (inputOperation) {
    case '1':
        var result = firstNumber + secondNumber
        console.log('Result: ' + firstNumber + ' plus ' + secondNumber + ' is: ' + result);
        break;
    case '2':
        var result = firstNumber - secondNumber
        console.log('Result: ' + firstNumber + ' minus ' + secondNumber + ' is: ' + result);
        break;
    case '3':
        var result = firstNumber * secondNumber
        console.log('Result: ' + firstNumber + ' multiplied by ' + secondNumber + ' is: ' + result);
        break;
    case '4':
        var result = firstNumber / secondNumber
        console.log('Result: ' + firstNumber + ' divided by ' + secondNumber + ' is: ' + result);
        break;
    default:
        console.log('Sorry, we are out of ');
}

//this function gets the user input and converts it to a number (float) value
function getInput() {
    var isNumber = false;
    var input = null;
    while (isNumber == false) {
        console.log('Please enter a number:');
        input = readline.prompt();
        isNumber = checkInputIsANumber(input);
    }
    number = parseFloat(input);
    return number;
}

//this function checks the user input is a valid string
function checkInputIsANumber(input) {
    if (!isNaN(input)) {
        //console.log(input + " is a number.");
        return true;
    } else {
        console.log(input + " is not a number. Please input a number.");
        return false;
    }
}