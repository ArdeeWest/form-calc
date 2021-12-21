'use strict';

// скрипт ждет когда загрузится страница
document.addEventListener('DOMContentLoaded', function () {
  function calculate() {
    let result;
    const n1 = Number(document.getElementById('n1').value);
    const n2 = Number(document.getElementById('n2').value);
    let operator = document.getElementById('operator').value;
    let sum = document.getElementById('result');

    if (!n1 & !n2) return;

    if (operator === 'add') {
      result = n1 + n2;
    } else if (operator === 'subtract') {
      result = n1 - n2;
    } else if (operator === 'multiply') {
      result = n1 * n2;
    } else if (operator === 'divide') {
      result = n1 / n2;
    }

    //   alert(result);
    sum.value = result;

    return;
  }

  let calc = document.getElementById('calc__btn');
  calc.addEventListener('click', function () {
    calculate();
  });
});
