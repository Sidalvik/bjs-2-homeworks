'use strict'

//Task 1
class PrintEditionItem {
    #state;

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.#state = 100;
        this.type = null;
    } //constructor(name, releaseDate, pagesCount)


    fix() {
        this.state = this.#state * 1.5;
        return this.state
    } //fix()


    set state(newState) {
        //round the new state to two decimal places
        newState = +newState.toFixed(2);
        switch (true) {
            case (newState < 0): //no worse than 0
                this.#state = 0;
                break;
            case (newState > 100): //no better than 100
                this.#state = 100;
                break;
            default:
                this.#state = newState;
                break;
        }
    }   //set state (newState)


    get state() {
        return this.#state;
    }   //get state ()
}   //class PrintEditionItem


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }   //constructor(name, releaseDate, pagesCount)
}   //class Magazine extends PrintEditionItem


class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }   //constructor (author, name, releaseDate, pagesCount)
}   //class Book extends PrintEditionItem


class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }   //constructor (author, name, releaseDate, pagesCount)
}   //class NovelBook extends Book


class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }   //constructor (author, name, releaseDate, pagesCount)
}   //class FantasticBook extends Book


class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }   //constructor (author, name, releaseDate, pagesCount)
}   //class DetectiveBook extends Book



//Task 2
class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }   //constructor (name)

    addBook (book) {
        if (book.state > 30) {
            this.books.push(book)
        }
    }   //addBook(book)


    findBookBy (type, value) {
        // find book[type] === value
        let result = this.books.find((item) => item[type] === value);

        //object Book or not find?
        return (typeof result === 'object') ? result : null;
    }   //findBookBy(type, value)


    giveBookByName (bookName) {
        let result = this.books.findIndex((item) => item.name === bookName);

        return (result === -1) ? null : this.books.splice(result, 1)[0];
    }   //giveBookByName(bookName)
}   //class Library


//Task 3
class Student {
    constructor (name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.journal = {};
    }   //constructor (name, gender, age)

    addSubject (subject) {
        if (!(subject in this.journal)) {
            this.journal[subject] = [];
        }
    }   //addSubject (subject)

    addMark (mark, subject) {
        this.addSubject(subject);

        if (mark >= 1 && mark <= 5) {
            this.journal[subject].push(mark);
        } else {
            console.log('Ошибка, оценка должна быть числом от 1 до 5');
        }
    }   //addMark (mark, subject)


    getAverageBySubject (subject) {
        if (!(subject in this.journal)) {
            console.log(`Несуществующий предмет "${subject}"`);
            return ;
        }

        return this.journal[subject].reduce((sum, item, idx, arr) => {
            if (idx === arr.length - 1) {
                return +((sum + item) / arr.length).toFixed(2);
            } else {
                return sum + item;
            }
        }, 0)
    }   //getAverageBySubject(subject)


    getAverage () {
        let count = Object.entries(this.journal).reduce((sum, item) => sum + item[1].length, 0);
        let  sum = Object.entries(this.journal).reduce((sum, item) => sum + item[1].reduce((sum, item) => sum + item, 0), 0);

        return +(sum / count).toFixed(2);
    }   //getAverage()


    exclude (reason) {
        delete this.journal;
        this.excluded = reason;
    }   //exclude ()
} //class Student
