// // 1) створити функцію яка приймає масив та виводить його
// let first = [1,13,45,71,'hello','world',100];
// function array (arr) {
//         console.log(arr);
//     }
// array(first);
// // 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// function randomNumbers (lenght, max, min) {
//         let newArray = [];
//         for (let i = 0; i < lenght; i++) {
//            newArray.push(Math.floor(Math.random() * (max - min) + min));
//         }   
//         return newArray;
// }
// let second = randomNumbers(30,15,5);
// array(second);
// // 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function threeWordsMin (a,b,c) {
//     if (a<b && a<c) {
//         console.log(a);
//     } else if (b<a && b<c) {
//         console.log(b)
//     } else if (c<a && c<b) {
//         console.log(c);
//     }
// }
// threeWordsMin(777, 24, 99);
// // 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function threeWordsMax (a,b,c) {
//     if (a>b && a>c) {
//         console.log(a);
//     } else if (b>a && b>c) {
//         console.log(b);
//     } else if (c>a && c>b) {
//         console.log(c);
//     }
// }
// threeWordsMax(7,3,20);
// threeWordsMax(101, 31, 56);
// // 5) створити функцію яка повертає найбільше число з масиву
// function arrayMaxNumber (arr) {
//     let max = arr[0];
//     for (let a of arr) {
//         if (max < a) max = a; 
//     }
//     return max;
// }
// let maxNumber = arrayMaxNumber([13,3,40,61,2,11,200]);
// console.log(maxNumber);
// // 6) створити функцію яка повертає найменьше число з масиву
// function arrayMinNumber (arr) {
//     let min = arr[0];
//     for (let a of arr) {
//         if (min > a) min = a; 
//     }
//     return min;
// }
// let minNumber = arrayMinNumber([13,3,40,61,2,11,200]);
// console.log(minNumber);
// // 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function sum (arr) {
//     let sumOfArr = 0;
//     for (let a of arr) {
//         sumOfArr += a;
//     }
//     return sumOfArr;
// }
// let total = sum([13,3,40,61,2,11,200]);
// console.log(total);
// // 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function avg (arr) {
//     let avgOfArr = 0;
//     for (const a of arr) {
//         avgOfArr += a;
//     }
//     return avgOfArr / arr.length;
// }

// let number = avg([13,3,40,61,2,11,200]);
// console.log(number);
// // 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// // EXAMPLE:
// // [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let arrOfObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let key = [];
// function extractKeys(arr) {
//     for (let a of arr) {
//         for (let arrKey in a) {
//             key.push(arrKey);
//         }
//     }
//     return key;
// }
// const extacting = extractKeys(arrOfObj);
// console.log(extacting);


// // 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// // EXAMPLE:
// // [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// let arrOfObj2 = [{name: 'Dima', age: 13}, {model: 'Camry'}];                  //error
// let valuesExt = [];
// function extractValues (arr) {
//     for (let i=0; i < arr.lenght; i++) {
//         valuesExt.push(Object.values(arr[i]));
//     }
//     return valuesExt.flat();
// }
// const extractingValues = extractValues (arrOfObj2);
// console.log(extractingValues);


// // 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// //   EXAMPLE:
// //   [1,2,3,4]
// //   [2,3,4,5]
// //   результат
// //   [3,5,7,9]
// function sumOfIndexs (arr1, arr2) {                        // error
//     let result = [];
//     for (let i = 0; i < arr1.lenght; i++) {
//         result.push(arr1[i] + arr2[i]);
//     }
//     return result;
// }

// let sumOfIndex = sumOfIndexs([1,2,3,4],[2,3,4,5]);
// console.log(sumOfIndex);

// // ============================================================================================

// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function returnMinPrintMax () {
//     let max = arguments[0];
//     let min = arguments[0];
//     for (let argument of arguments) {
//         if (argument > max) max = argument;
//         if (argument < min) min = argument;
//     }
//     console.log(max);
//     return min;
// }
// let minNumber2 = returnMinPrintMax(4,33,0,111,81,14,5,61);
// console.log(minNumber2)

// // - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
// //   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// let arrOfObj3 = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let keyArray = [];
// let valuesArray = [];
// function extKeysOrValues (keyOrValue, arr) {
//     if (keyOrValue === 'key') {
//         for (let a of arr) {
//             for (let key in a) {
//                 keyArray.push(key);
//             }
//         }
//         return keyArray;
//     } else if (keyOrValue === 'value') {
//         for (let i = 0; i < arr.lenght; i++) {                /// second part - error
//             valuesArray.push(Object.values(arr[i]));
//         }
//         return valuesArray.flat();
//     } else {
//        console.log('wrong');
//     }
// }
// let myResult = extKeysOrValues('key',arrOfObj3);
// console.log(myResult);

// // - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// //   EXAMPLE:
// //   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
// //   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
// //   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ] 

// function changePlace (arr, w) {                           //error
//     let ourArray = [...arr];
//     if (w < ourArray.lenght -1) {
//         let t = ourArray[w];
//         ourArray[w] = ourArray[w + 1];
//         ourArray[w + 1] = t;
//     }
//     return ourArray;
// }

// let test1 = changePlace([1,4,7,12], 0);
// let test2 = changePlace([1,4,7,12], 1);
// let test3 = changePlace([1,4,7,12], 2);
// let test4 = changePlace([1,4,7,12], 3);
// console.log(test1);
// console.log(test2);
// console.log(test3);
// console.log(test4);

// // - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// // Двожина масиву від 2 до 100
// // EXAMPLE:
// // [1,0,6,0,3] => [1,6,3,0,0]
// // [0,1,2,3,4] => [1,2,3,4,0]
// // [0,0,1,0]   => [1,0,0,0]
// let newItem = [1,0,6,0,3,7,82,0,33];
// //1
// function zeroMove (arr) {
//     let number = [];
//     let zero = [];
//     for (let a of arr) {
//         if (a === 0) {
//             zero.push(0);
//         } else {
//             number.push(a);
//         }
//     }
//     return number.concat(zero);
// }
// let firstItem = zeroMove (newItem);
// console.log(firstItem);
// //---------------------------------------------------------------
// //2
// function zeroMove2 (arr) {
//     let tempArray = [...arr];
//     for (let i = tempArray.length - 1; i >= 0; i--) {
//         if (tempArray[i] === 0) {
//             tempArray.splice(i, 1);
//             tempArray.push(0);
//         }
//     }
//     return tempArray;
// }
// console.log(zeroMove2(newItem));

// // - Дано список імен.
// // let n1 = '    Harry       Potter      '
// // let n2 = '    Ron       Whisley      '
// // let n3 = '    Hermione       Granger      '
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'

// let n1 = '    Harry       Potter      ';
// let n2 = '    Ron       Whisley      ';
// let n3 = '    Hermione       Granger ';
// function strNormalize (str) {
//     str = str.trim();
//     str = str.replace(/ +/g, ' ');
//     return str;
// }

// n1 = strNormalize(n1);
// n2 = strNormalize(n2);
// n3 = strNormalize(n3);
// console.log(n1);
// console.log(n2);
// console.log(n3);

// // ============================================================================================

// // // ******************* НАЗАД В МИНУЛЕ *********************** //
// // Створити функцію яка :
// // - Додає в боді блок з текстом "Hello owu"
// // - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function dom (element, text = '') {
//     let block = document.createElement('div');
//     block.innerHTML = '<h1>Hello owu</h1>';
//     document.body.appendChild(block);
//     let newElement = document.createElement(element);
//     newElement.innerHTML = text;
//     document.body.appendChild(newElement);
// }
// dom('h3', 'some text');
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// // ******************* НАЗАД В МИНУЛЕ *********************** //
let autoArr = ['Mersedes', 'Volvo', 'BMW', 'Buick'];

function auto (arr, idTag) {                        //error
    let newId = document.getElementById(idTag);
    let myList = document.createElement('ul');
    for (let i = 0; i < arr.lenght; i++) {
        let auto = arr[i];
        let liElement = document.createElement('li');
        liElement.innerHTML = auto;
        myList.appendChild(liElement);
    }
    newId.appendChild(myList);
}

auto (autoArr, 'list');
