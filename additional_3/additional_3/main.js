// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)


// a.
let arr = [];

for (let i = 0, j = 0; i <= 100; i += 2, j++) {
    arr[j] = i;
}
console.log(arr);

// b.
let arr2 = [];

for (let i = 1, j = 0; i <= 100; i += 2, j++) {
    arr2[j] = i;
}
console.log(arr2);


// c.

let randomArr = [];
for (i=0;i<20;i++){
    randomArr.push(Math.round(Math.random()));
}
console.log(randomArr);


// d.

randomArr = [];

for (i=0;i<20;i++){
    randomArr.push(Math.floor(Math.random()*732)+8);
}
console.log(randomArr);

// 2. Вивести за допомогою console.log кожен третій елемен
randomArr = [];
for (i=0;i<20;i+=3){
    randomArr.push(Math.floor(Math.random()*732)+8);
}
console.log(randomArr);

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

randomArr;
for (let i=2;i<20;i+=3){
    if (randomArr[i] % 2 ===0){
        console.log(randomArr[i]);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

randomArr;
let newArray = [];
for (let i=2;i<20;i+=3){
    if (randomArr[i] % 2 ===0){
        newArray.push(randomArr[i]);
        console.log(newArray)
    }
}

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let elementArr = [1, 2, 3, 5, 7, 9, 56, 8, 67];

for (let i = 0; i<elementArr.length; i++){
    if ((elementArr[i]) % 2 ===0){
        console.log(elementArr[i-1]);
    }

}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let meanAr = [100,250,50,168,120,345,188];
console.log(meanAr.length);

let sum = 0;
for (let i = 0; i < meanAr.length; i++) {
    sum = sum + meanAr[i];
}
console.log(sum/meanAr.length);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let randomArray = [2,5,10,12,20];
let newArr = [];
for (let i = 0; i < randomArray.length; i++) {
    newArr.push(randomArray[i]*5);
}
console.log(newArr);


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.


let arr1 = ['okten',45,true,-100,'welcome',7];
let array2 = [];
for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === 'number'){
        array2.push(arr1[i]);
    }
}
console.log(arr1);
console.log(array2);



//9    - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];
    let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];


usersWithCities = usersWithId;

for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithCities[i].address = citiesWithId[j];
        }
    }
}

console.log(usersWithCities);


// for (let usersKey in usersWithId) {
//     for(let citiesKey in citiesWithId );
// }if (usersKey === citiesKey){
//
// }


// for (let usersIdElement of usersWithId) {
//     console.log(usersIdElement.id);
// }
// for (let citiesIdElement of citiesWithId) {
//     console.log(citiesIdElement.user_id);
// }if (usersIdElement.id === citiesIdElement.user_id){
//
// }

// usersWithId[0]['address']={country: 'Ukraine', city: 'Ternopil'}
// let usersWithCities=[];
//
// for (const data of usersWithId) {
//
//     for (const key in citiesWithId) {
//
//         if((citiesWithId[key]['user_id'])===(data.id)){
//             i=(data.id)-1
//
//             usersWithCities.push(data)
//             usersWithCities[i]['address']=citiesWithId[key]
//
//
//         }
//     }
// }
//
//
// console.log(usersWithCities)

// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (user.id === city.user_id){
//             user.address = city;
//         }
//     }
// }
// console.log(usersWithId);



// 11.- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let tenArr = [1,2,3,4,5,6,7,8,9,10];
for (let number of tenArr) {
    if (number % 2===0){
        console.log(number);
    }
}

// 12.- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

tenArr;
let emptyA=[];
for (let i = 0; i < tenArr.length; i++) {
    emptyA.push(tenArr[i]);
};
console.log(emptyA);

// 13.- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let litArr = [ 'a', 'b', 'c'];
console.log(litArr);
let word = '';
for (let i = 0; i < litArr.length; i++) {
    word+=litArr[i];
}
console.log(word);

// 14.- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
litArr;
let word1='';
i = 0;
while (i<litArr.length){
    word1+=litArr[i];
    i++;
}
console.log(word1);

// 15.- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

litArr = [ 'a', 'b', 'c'];
let word2 = '';
for (let string of litArr) {
    word2+=string;
}
console.log(word2);
