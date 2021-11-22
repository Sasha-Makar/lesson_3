// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arrayOfNumbers = [4, -56, 3.14, 79, 100500];
console.log(arrayOfNumbers);

let arrayOfStrings = ['go', ' okten', 'home', 'ruby', 'four'];
console.log(arrayOfStrings);

let arrayElements = [147, 'okten', true, 'offline', false];
console.log(arrayElements);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr = [];
arr[1] = 45;
arr[0] = 'duck';
arr[2] = true;
console.log(arr);
document.write(arr);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>some text</div>');
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
     document.write(`<div>${i} - some text</div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

i = 0;
while (i<20){
     document.write('<h1>some text</h1>');
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

i = 0;
while (i<20){
    document.write(`<h1>${i} - some text</h1>`);
    i++;
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.


let numberArr = [1,2,3,4,5,6,7,8,9,10];
for (let i=0;i<numberArr.length; i++){
    console.log(numberArr[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі

let stringArr = ['ds','fg','rfrfr','take','hand','ds','fg','rfrfr','take','hand'];
for (let j = 0; j < stringArr.length; j++) {
    const stringArrElement = stringArr[j];
    console.log(stringArr[j]);

}

// -- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let allArr = [45,'okten',false,45.23,-8,[],{}];
for (let j = 0; j < allArr.length; j++) {
    console.log(allArr[j]);

}



// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let differentArr = [45,3.14,-7,'okten','java',true,false,[],{},true];
for (let i = 0; i < differentArr.length; i++) {
    if (typeof differentArr[i] === 'boolean'){
        console.log(differentArr[i]);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for(let i=0;i<differentArr.length;i++){
    if(typeof differentArr[i]==='number'){
        console.log(differentArr[i])
    }
}

// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (let i=0;i<differentArr.length;i++){
    if (typeof differentArr[i]==='string'){
        console.log(differentArr[i]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let emptyArr = [];
emptyArr[0] = 'okten';
emptyArr[1] = 'asds';
emptyArr[2] = 78;
emptyArr[3] = -637;
emptyArr[4] = 3.12;
emptyArr[5] = false;
emptyArr[6] = true;
emptyArr[7] = {};
emptyArr[8] = [];
emptyArr[9] = 'jeremy';
for(let i=0;i<emptyArr.length;i++){
    console.log(emptyArr[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++){
    console.log(`step ${i}`);
      document.write('<div>');
     document.write(`step ${i}`);
      document.write('</div>');
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++){
    console.log(`step ${i}`);
    document.write('<div>');
    document.write(`step ${i}`);
    document.write('</div>');
}


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i+=2){
    console.log(`step ${i}`);
    document.write('<div>');
    document.write(`step ${i}`);
    document.write('</div>');
}


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2===0 && i !== 0) {
        console.log(`step ${i}`);
        document.write('<div>');
        document.write(`step ${i}`);
        document.write('</div>');
    }
}



// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


for (let i = 0; i < 100; i++) {
    if (i % 2===1) {
        console.log(`step ${i}`);
        document.write('<div>');
        document.write(`step ${i}`);
        document.write('</div>');
    }
}