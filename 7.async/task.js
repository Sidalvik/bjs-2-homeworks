'use strict'

// Task 1
class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }   // constructor() 


    addClock(time, collback, id) {
        if (id === undefined) {
            throw new Error('id не передан.');
        }

        // check if the timer id exists
        let existTimer = this.alarmCollection.findIndex((item, idx, arr) => item.id === id);
        if (existTimer !== -1) {
            console.error(`Будильник с id = ${id} уже существует.`);
        } else {
            let result = {
                id,
                time,
                collback,
            };
            this.alarmCollection.push(result);
        }
    }   // addClock(time, func, id)


    removeClock(id) {
        //  index of the clock element
        let index = this.alarmCollection.findIndex((item, idx, arr) => item.id ===id);
        if (index === -1 ) {
            return false;
        }

        //  delete item clock
        let deleteItem = this.alarmCollection.splice(index, 1);
        if (deleteItem.length === 1) {
            return true;
        } else {
            // if the delete failed
            return false;
        }
    }   //  removeClock(id)


    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString('nu', {hour: "2-digit", minute: "2-digit"});
    }   //  getCurrentFormattedTime()


    start() {
        const checkClock = (clock) => {
             if (clock !== undefined && clock.time === (() => this.getCurrentFormattedTime())()) {
                clock.collback();
             }
        }   //  function checkClock(clock)
        
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach((element) => checkClock(element));
             }, 10000);
         }
    }   //  start()


    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }   //  stop()


    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(
            (item) => console.log(`Будильник №${item.id} заведен на ${item.time}`)
            );
    }   //  printAlarms()
    

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }   //  clearAlarms()

}   // class AlarmClock


// Task 2
function testCase() {

    // Создайте объект класса `AlarmClock`.
    const clocks = new AlarmClock();

    //  текущее время
    let time0 = (new Date(Date.now() + 60000 * 0)).toLocaleTimeString('nu', {hour: "2-digit", minute: "2-digit"});
    
    // +1 минута
    let time1 = (new Date(Date.now() + 60000 * 1)).toLocaleTimeString('nu', {hour: "2-digit", minute: "2-digit"});
    
    // +2 минуты
    let time2 = (new Date(Date.now() + 60000 * 2)).toLocaleTimeString('nu', {hour: "2-digit", minute: "2-digit"});

    clocks.addClock(time0, () => console.log('Будильник 0'), 0);
    try {
        clocks.addClock(time0, () => console.log('Будильник 0'));   //  error undefined id 
    } catch (error) {
        console.error(error);
    }
    clocks.addClock(time1, () => console.log('Будильник 1'), 0);    // error. duble id

    // звонок с самоудолением
    clocks.addClock(time1, () => {
        console.log('Будильник 1 с самоуничтожением');
        clocks.removeClock(1);
    }, 1); 

//     вывода текста на консоль, а так же остановки всех звонков, очистки всех звонков 
// и выводом всех звонков. Так, чтобы после запуска функция вывода *выполнилась один раз, 
// потом остановился интервал, все звонки очистились, и ничего не вывелось*.
    clocks.addClock(time2, () => {
        console.log('Будильник 2 \nС остановкой, очисткой и выводом');
        clocks.printAlarms();
        clocks.stop();
        clocks.clearAlarms();
        clocks.printAlarms();
    }, 2); 


    clocks.printAlarms();

    clocks.start();
}
