// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1. перебрати його циклом while

let arrayOfNums = [2,17,13,6,22,31,45,66,100,-18];

let i=0;
while(i < arrayOfNums.length){
    console.log(arrayOfNums[i]);
    i++;
}
//
// // 2. перебрати його циклом for
//
for (let i = 0; i<arrayOfNums.length; i++){
    console.log(arrayOfNums[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

i=0;
while(i < arrayOfNums.length){
    if (i%2 !==0) {
        console.log(arrayOfNums[i]);
    }
    i++;
}

// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
for (let j = 0; j < arrayOfNums.length; j++) {
    if (j%2 !==0){
        console.log(arrayOfNums[j]);
    }

}

// // 5. перебрати циклом while та вивести  числа тільки парні  значення
//
 i = 0;
while (i < arrayOfNums.length){
    if (arrayOfNums[i]%2===0) {
        console.log(arrayOfNums[i]);
    }
    i++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i<arrayOfNums.length; i++) {
    if (arrayOfNums[i] % 2 === 0) {
        console.log(arrayOfNums[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let arrayOfNum of arrayOfNums) {
    if (arrayOfNum %3 ===0){
        arrayOfNum='okten';
    }
    console.log(arrayOfNum);
}

// 8. вивести масив в зворотньому порядку.

for (let j = arrayOfNums.length - 1; j >= 0; j--) {
    const arrayOfNum = arrayOfNums[j];
    console.log(arrayOfNums[j]);

}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"

arrayOfNums = [2,17,13,6,22,31,45,66,100,-18];

// 1.перебрати його циклом while

i=arrayOfNums.length-1;
while (i>=0){
    console.log(arrayOfNums[i]);
    i--;
}

// 2. перебрати його циклом for

for (let j = arrayOfNums.length-1; j>=0; j--) {
    console.log(arrayOfNums[j]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

i = arrayOfNums.length - 1;
while (i >= 0) {
    if (i % 2 !== 0) {
        console.log(arrayOfNums[i]);
    }
    i--;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let j = arrayOfNums.length-1; j>=0; j--) {
    if (j%2 !==0){
        console.log(arrayOfNums[j]);
    }

}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

i = arrayOfNums.length-1;
while (i >=0){
    if (arrayOfNums[i]%2===0) {
        console.log(arrayOfNums[i]);
    }
    i--;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = arrayOfNums.length-1; i>=0; i--) {
    if (arrayOfNums[i] % 2 === 0) {
        console.log(arrayOfNums[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let j = arrayOfNums.length - 1; j >= 0; j--) {
    if (arrayOfNums[j]%3===0){
        arrayOfNums[j]='okten';
    }
    console.log(arrayOfNums[j]);

}
