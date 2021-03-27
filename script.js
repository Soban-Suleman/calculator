"use strict";
function getHistory() {
  return document.querySelector("#history-value").textContent;
}
function printHistory(num) {
  document.querySelector("#history-value").textContent = num;
}
function getOutput() {
  return document.querySelector("#output-value").textContent;
}
function printOutput(num) {
  document.querySelector("#output-value").textContent = getFormattedNum(num);
}
function getFormattedNum(num) {
  if (num == "-") {
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}
function reverseNumber(num) {
  return Number(num.replace(/,/g, ""));
}
const operators = document.querySelectorAll(".operator");
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printOutput("");
      printHistory("");
    } else if (this.id == "backspace") {
      var output = reverseNumber(getOutput()).toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
      var output = getOutput();
      var history = getHistory();
      if (output == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if (output != "" || history != "") {
        output = output == "" ? output : reverseNumber(output);
        history = history + output;
        if (this.id == "=") {
          var result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}
const numbers = document.querySelectorAll(".number");
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    var output = reverseNumber(getOutput());
    if (output != NaN) {
      output = output + this.id;
      printOutput(output);
    }
  });
}
