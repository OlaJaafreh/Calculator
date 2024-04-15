let Num1 = null;
let Num2 = null;
let operator = null;
let DisplayNum = '';


function press(number) {
  if(operator===null){
    if(Num1===null){DisplayNum = number.toString();
      Num1=number}
    else{DisplayNum += number.toString();}
    updateDisplay();
  }
  else{
    if(Num2===null){DisplayNum = number.toString();
      Num2=number}
    else{DisplayNum += number.toString();}
    updateDisplay();
  }
  
  }
  

function setOP(op) {
    Num1 = parseFloat(DisplayNum);
    operator = op;
    updateDisplay();
}

function clr() {
  Num1 = null;
  Num2 = null;
  operator = null;
  DisplayNum = '0';
  updateDisplay();
}

function calculate() {
  if (Num1 !== null && operator !== null) {
    Num2 = parseFloat(DisplayNum);
    let result = null;
    switch (operator) {
      case '+':
        result = Num1 + Num2;
        break;
      case '-':
        result = Num1 - Num2;
        break;
      case '*':
        result = Num1 * Num2;
        break;
      case '/':
        result = Num1 / Num2;
        break;
    }
    DisplayNum = result;
    Num1 = result;
    Num2 = null;
    operator = null;
    updateDisplay();
  }
}

function updateDisplay() {
    var displayDiv = document.querySelector("#display");
    displayDiv.innerText = DisplayNum;
}
