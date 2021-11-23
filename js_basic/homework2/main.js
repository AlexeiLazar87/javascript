// --створити масив з:
// - з 5 числових значень
// let numbers = [2, 19, -4, 200, 1011];
// - з 5 стічкових значень
// let str = ['user', 'userName', 'age', 'status', 'work'];
// - з 5 значень стрічкового, числового та булевого типу
// let others = ['life', 33, true, 'world', false];
// - та вивести його в консоль
// console.log(numbers);
// console.log(str);
// console.log(others);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// array[0] = 23;
// array[1] = 111;
// array[2] = true;
// array[3] = 'age';
// array[4] = 'car';
// console.log(array)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let index = 0; index <= 10; index++) {
//     document.write(`<div>${[index]}</div>`);
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let index = 0; index <= 10; index++) {
//     document.write(`<div>text ${index}</div>`)  
// } 
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>text</h1>`);
//     i++;
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>text ${i}</h1>`);
//     i++
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbers = [4, 3.65, 17, 201, 999, 45, -8, 0.2];
// for (const number of numbers) {
//     console.log(number)
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let strings = ['qwe', 'rty', 'uio', 'asd', 'fgh'];
// for (const string of strings) {
//     console.log(string)
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let array = [true, 55, 0.1, 'js', false, 'java', 100, -19, 'python', 'angular'];
// for (const arr of array) {
//     if (typeof arr === 'boolean') {
//         console.log(arr);
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let array = [true, 55, 0.1, 'js', false, 'java', 100, -19, 'python', 'angular'];
// for (const arr of array) {
//     if (typeof arr === 'number') {
//         console.log(arr);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let array = [true, 55, 0.1, 'js', false, 'java', 100, -19, 'python', 'angular'];
// for (const arr of array) {
//     if (typeof arr === 'string') {
//         console.log(arr);
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let newArray = [];
// newArray[0] = 666;
// newArray[1] = false;
// newArray[2] = 'life';
// newArray[3] = 'country';
// newArray[4] = -72;
// for (let newArr of newArray) {
//     console.log(newArr);
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let index = 0; index < 10; index++) {
//     console.log(index);
//     document.write(`${index} <br>`);
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let index = 1; index <= 100; index++) {
//     console.log(index);
//     document.write(`${index} <br>`);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let index = 1; index <= 100; index = index + 2) {
//     console.log(index);
//     document.write(`${index} <br>`);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let index = 0; index < 100; index++ ) {
//     if (index % 2 === 0) {
//       console.log(index);
//       document.write(`${index} <br>`);  
//     } 
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let index = 0; index < 100; index++ ) {
//     if (index % 2 === 1) {
//       console.log(index);
//       document.write(`${index} <br>`);  
//     } 
// }


// ______________________________________________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________


// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arr = ['a', 'b', 'c'];
// for (let i = 1; i <= 3; i++) {
//     arr.push(i);
// }
// console.log(arr);
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arr2 = [1, 2, 3];
// let arrNew = [];
// for (let i = arr2.length-1; i >= 0; i--) {
//    arrNew.push(arr2[i]);
// }
// console.log(arrNew)
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arr3 = [1, 2, 3];
// arr3.push(4, 5, 6);
// console.log(arr3);
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arr4 = [1, 2, 3];
// arr4.unshift(4, 5, 6);
// console.log(arr4);
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arr5 = ['js', 'css', 'jq'];
// let first = arr5.shift();
// console.log(first);
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr6 = ['js', 'css', 'jq'];
// let last = arr6.pop();
// console.log(last);
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// let arr7 = [1, 2, 3, 4, 5];
// console.log(arr7.slice(3));
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// let arr8 = [1, 2, 3, 4, 5];
// console.log(arr8.slice(0,2));
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри
//1
// let arr9 = [1, 2, 3, 4, 5];
// let item = arr9.splice(3, 2);
// arr9.push('a', 'b', 'c', item[0], item[1]);
// console.log(arr9);
//2
// let arr9 = [1, 2, 3, 4, 5];
// arr9.splice(3, 0, 'a', 'b', 'c');
// console.log(arr9);
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//     Підказка. Працюйте по принципу задачі вище.
// let arr10 = [1, 2, 3, 4, 5];
// arr10.splice(1, 0, 'a', 'b');
// arr10.splice(6, 0, 'c');
// arr10.splice(8, 0, 'e');
// console.log(arr10);
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=0; i < numbers.length; i++) {
//     if (numbers[i]%2 === 0) {
//         console.log(numbers[i]);
//     }
// }
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// let item = [];
// for (i = 0; i < numbers.length; i++) {
//     item.push(numbers[i]);
// }
// console.log(item);
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// let item = [];
// for (let i = 0; i < numbers.length; i++) {
//     item[i] = (numbers[i]);
// }
// console.log(item);
// ============

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < numbers.length) {
//     console.log(numbers[i]);
//     i++
// }
// 2. перебрати його циклом for
// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < numbers.length) {
//     if (numbers[i]%2 === 1) {
//         console.log(numbers[i]);
//     }
//     i++;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// for (i = 0; i < numbers.length; i++) {
//     if (numbers[i]%2 === 1) {
//         console.log(numbers[i]);
//     }
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < numbers.length) {
//     if (numbers[i]%2 === 0) {
//         console.log(numbers[i]);
//     }
//     i++;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i]%2 === 0) {
//         console.log(numbers[i]);
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i]%3 === 0) {
//         numbers[i] = 'okten';
//     }
// }
// console.log(numbers);
// 8. вивести масив в зворотньому порядку.
// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = numbers.length - 1; i >= 0; i--) {
//     console.log(numbers[i]);
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// let numbers = [2,17,13,6,22,31,45,66,100,-18];  // один массив numbers для всех заданий ниже по обратному циклу (1-7)
//1
// let i = numbers.length - 1;
// while (i >= 0) {
//     console.log(numbers[i]);
//     i--
// }
//2
// for (let i = numbers.length - 1; i >= 0; i--) {
//     console.log(numbers[i]);
// }
//3
// let i = numbers.length - 1;
// while (i >= 0) {
//     if (numbers[i]%2 === 1) {
//         console.log(numbers[i]);
//     }
//     i--
// }
//4
// for (let i = numbers.length -1; i >= 0; i--) {
//     if (numbers[i]%2 === 1) {
//         console.log(numbers[i])
//     }
// }
//5
// let i = numbers.length - 1;
// while (i >= 0) {
//     if (numbers[i]%2 === 0) {
//         console.log(numbers[i]);
//     }
//     i--
// }
//6
// for (let i = numbers.length -1; i >= 0; i--) {
//     if (numbers[i]%2 === 0) {
//         console.log(numbers[i])
//     }
// }
//7
// let i = numbers.length - 1;
// while (i >= 0) {
//     if (numbers[i]%3 === 0) {
//         numbers[i] = 'okten';     
//     }
//     i--; 
// }
// console.log(numbers)

// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// let array = [];
// for (let i = 0; i < 50; i++) {
//         array[i] = i * 2;
// }
// console.log(array);
// - заповнити його 50 непарними числами за допомоги циклу.
// let array = [];
// let i = 0;
// while (i < 50) {
//     array[i] = i * 2 + 1;
//     i++;
// }
// console.log(array);

// 1. Створити пустий масив та :
// let array = [];
//        a. заповнити його 50 парними числами за допомоги циклу.
// for (let i = 0; i < 100; i++) {
//     array[i] = i * 1;
//     if (i%2 === 0) {
//         console.log(array[i]);
//     }
// }
//        b. заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 0; i < 100; i++) {
//     array[i] = i * 1;
//     if (i%2 === 1) {
//         console.log(array[i]);
//     }
// }
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// for (let i = 0; i < 40; i++) {
//     array[i] = i * 1;
//         //console.log(Math.floor(Math.random(array[i]) * 20));
// }
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     array[i] = i * 1;
//         console.log(Math.random() * (732 - 8) + 8);
// }
//  2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 0; i < 100; i = i + 3) {
//     array[i] = i * 1;
//         console.log(array[i]);
// }
//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 0; i < 40; i = i + 3) {
//     if (i%2 === 0) {
//         console.log(array[i]);
//     }
// }
//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let array = [];
// let newArray = [];
// for (let i=0; i < 10; i++) {
//     array[i] = Math.floor(Math.random()*(732-8)+8);
//     console.log(array[i])
//     if (array[i]%2 === 0) {
//         newArray.push(array[i])
//     }
// }
//     console.log(newArray);
//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let array = [];                                        //ERROR
// for (let i=0; i < 20; i++) {
//     array[i] = Math.floor(Math.random()*(732-8)+8);
//     if (array[i+1]%2 === 0) {
//      console.log(array[i]);   
//     }
// }
// console.log(array);

//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let item = [100,250,50,168,120,345,188];
// let m = 0;
// for (let i = 0; i < item.length; i++) {
//     m = m + item[i];
// }
// console.log(m);
// m = m / item.length;
// console.log(m);

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let item2 = [4, 51, 9, 2, 17, 5, 1];
// let newItem2 = [];
// for (i = 0; i < item2.length; i++) {
//     newItem2.push(item2[i] * 5);
// }
// console.log(newItem2);

//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let item3 = [22, true, 'first', '8', 8, false, 31, 'abra'];
// let newItem3 = [];
// for (let i = 0; i < item3.length; i++) {
//     if (typeof item3[i] === 'number') {
//         newItem3.push(item3[i]);
//     }
// }
// console.log(newItem3);

// ______________________________________________________________________________________________________________________________________________________
//                                                                     Додатково
// ______________________________________________________________________________________________________________________________________________________

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let abc = ['a', 'b', 'c'];
let concatenation = '';
for (let i = 0; i < abc.length; i++) {
   concatenation = concatenation + abc[i];
};
console.log(concatenation);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let secondConcatenation = '';
let i = 0;
while (i < abc.length) {
    secondConcatenation = secondConcatenation + abc[i];
    i++
}
console.log(secondConcatenation);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let thirdConcatenation = '';
for (let item of abc) {
    thirdConcatenation = thirdConcatenation + item;
}
console.log(thirdConcatenation);
