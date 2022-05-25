'use strict'

function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
    }
  
  //исключить попадание в массив оценок значения undefined при вызове метода без параметров
  if (mark !== undefined) {
   return this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...arr) {
  if (this.marks === undefined) {
    this.marks = [];
  }

    return this.marks.push(...arr);
}

Student.prototype.getAverage = function () {
  if (this.marks !== undefined) {
    return this.marks.reduce((sum, item, idx, arr) => {
      if (idx === arr.length - 1) {
        return (sum + item) / arr.length;
        } else {
        return sum + item;
        }
    });
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
