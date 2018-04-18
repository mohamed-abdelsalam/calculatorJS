'use strict';

function main() {
  setCalculatorEvents();
}
var operations = ['x', '/', '-', '+'];

function evaluate(expression) {
  for (let op = 0; op < operations.length; op ++) {
    for (let i = 0; i < expression.length; i ++) {
      if (expression[i] === operations[op]) {
        let result = operation(expression[i - 1], expression[i + 1], operations[op]);
        console.log(result);
        expression.splice(i - 1, 3, result);
        i --;
      }
    }
  }
}

function operation(op1, op2, oper) {
  switch (oper) {
    case '+':
      return op1 + op2;
    case '-':
      return op1 - op2;
    case 'x':
      return op1 * op2;
    case '/':
      return op1 / op2;
    default:
  }
}

function setCalculatorEvents() {
  var expression = [];
  for (let i = 0; i < 10; i ++) {
    var but = document.getElementById("but" + i);
    but.onclick = function() {
      if (expression.length > 0 &&
          operations.includes(expression[expression.length - 1]) == false) {
            var last = expression[expression.length - 1];
            expression.splice(expression.length - 1, 1, 10 * last + i);
      } else {
        expression.push(i);
      }
      document.getElementById("hello").innerHTML = expression.join("");
    };
  }
  document.getElementById("butAdd").onclick = function() {
    expression.push("+");
    document.getElementById("hello").innerHTML = expression.join("");
  };
  document.getElementById("butSub").onclick = function() {
    expression.push("-");
    document.getElementById("hello").innerHTML = expression.join("");
  };
  document.getElementById("butMul").onclick = function() {
    expression.push("x");
    document.getElementById("hello").innerHTML = expression.join("");
  };
  document.getElementById("butDiv").onclick = function() {
    expression.push("/");
    document.getElementById("hello").innerHTML = expression.join("");
  };
  document.getElementById("butEqu").onclick = function() {
    evaluate(expression);
    console.log(expression);
    document.getElementById("hello").innerHTML = expression.join("");
  };

  document.getElementById("butC").onclick = function() {
    expression = [];
    document.getElementById("hello").innerHTML = "0";
  };
}

main();
