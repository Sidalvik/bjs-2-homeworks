"use strict";

function solveEquation(a, b, c) {

  // declaration
  let arr;
  let D;

  // debugger;
  a = parseFloat(a);
  b = parseFloat(b);
  c = parseFloat(c);

  // check arguments
  switch (true) {
    case Number.isNaN(a):
      console.log(`Параметр "а" содержит неправильное значение ${arguments[0]}`);
      return;

    case Number.isNaN(b):
      console.log(`Параметр "b" содержит неправильное значение ${arguments[1]}`);
      return;

    case Number.isNaN(c):
      console.log(`Параметр "c" содержит неправильное значение ${arguments[2]}`);
      return;
  }
  arr = [];
  D = b ** 2 - 4 * a * c;

  switch (true) {
    case (D < 0):
      arr = [];
      break;
    case (D === 0):
      arr.push(-b / (2 * a));
      break;

    default:
      arr.push((-b + Math.sqrt(D) ) / (2 * a));
      arr.push((-b - Math.sqrt(D) ) / (2 * a));
    break;
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  // declaration
  let totalAmount;
  let S; // credit
  let P; // percent/month
  let n; //months count
  let payment;  // payment value
  let start = new Date(); // start date (now)

  // conversion arguments to number
  percent = parseFloat(percent);
  contribution = parseFloat(contribution);
  amount = parseFloat(amount);

  // check arguments
  switch (true) {
    case Number.isNaN(percent):
      return (`Параметр "Процентная ставка" содержит неправильное значение "${arguments[0]}"`);

    case Number.isNaN(contribution):
      return (`Параметр "Начальный взнос" содержит неправильное значение "${arguments[1]}"`);

    case Number.isNaN(amount):
      return (`Параметр "Общая стоимость" содержит неправильное значение "${arguments[2]}"`);

      case Number.isNaN(+date):
      return (`Параметр "Дата" содержит неправильное значение "${arguments[3]}"`);
  }

  // credit value
  S = amount - contribution;

  // percent/month/100%
  P = percent / 1200;

  // period in months
  n = (date.getFullYear() - start.getFullYear()) * 12;
  n += date.getMonth() - start.getMonth();

  // payment value in one month
  payment = S * (P + (P / (Math.pow(1 + P,n) - 1)));

  totalAmount = Math.round(payment * n * 1e2) / 1e2;
  return totalAmount;
}