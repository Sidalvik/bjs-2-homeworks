'use strict'

// Task 1
function parseCount(count) {
    count = Number.parseInt(count);
    if (Number.isNaN(count)) {
        throw new Error('Невалидное значение');
    } else {
        return count;
    }
}


function validateCount(count) {
    try {
        return parseCount(count);
    } catch (err) {
        return err;
    }
}


// Task 2
class Triangle {
    constructor (a, b, c) {
        if ((a + b < c) || (a + c < b) || (b + c < a)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        // Heron 's formula for the area of a triangle
        let p = this.getPerimeter() / 2;    // half of the perimeter of the triangle
        return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
    }
}


function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(err) {
        // Error output function
        const getError = function () {
            return 'Ошибка! Треугольник не существует';
        };

        // return an object with error return methods
        return {
            getArea: getError,
            getPerimeter: getError,
        };
    }
}
