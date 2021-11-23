// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

// let a = 'hello';
// let b = 'owu';
// let c = 'com';
// let d = 'ua';
// let e = 1;
// let f = 10;
// let g = -999;
// let h = 123;
// let i = 3.14;
// let j = 2.7;
// let k = 16;
// let l = true;
// let m = false;

//   Вивести кожну змінну за допомогою: console.log , alert, document.write

// console.log(a, b, c, d, e, f, g, h, i, j, k, l, m);
// document.write(a, b, c, d, e, f, g, h, i, j, k, l, m);
// alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(e);

// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

// a = 'HELLO';
// b = 'OWU';
// c = 'COM';
// d = 'UA';
// e = 1111;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// document.write(a);
// document.write(b);
// document.write(c);
// document.write(d);
// document.write(e);


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.

// let name = prompt('enter your name');
// let surname = prompt('enter your surname');
// let age = +prompt('enter your age');

//   Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// console.log(`Вітаю ${name} ${surname}. Тобі ${age} років`)

// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).

// let person = name + ' ' + surname + ' ' + age;
// console.log(person);

// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.

// let first = +prompt('first number');
// let second = +prompt('second number');
// let third = +prompt('third number');
// console.log(first);
// console.log(second);
// console.log(third);

// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.

// let first = parseInt(prompt('first number'));
// let second = parseInt(prompt('second number'));
// let third = parseInt(prompt('third number'));
// let fourth = parseInt(prompt('fourth number'));

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);

// let result = first + second + third + fourth;
// console.log(result);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat. 

// let first = parseFloat(prompt('first number'));
// let second = parseFloat(prompt('second number'));
// let third = parseFloat(prompt('third number'));

// console.log(first);
// console.log(second);
// console.log(third);

//   Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.

// let result = first + second + third;
// console.log(result);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.

// 1
// let first = parseFloat(prompt('first number'));
// let second = parseFloat(prompt('second number'));
// let third = parseFloat(prompt('third number'));

// let f = Math.round(first);
// let s = Math.round(second);
// let t = Math.round(third);
// console.log(f);
// console.log(s);
// console.log(t);

// let result = f + s + t;
// console.log(result);

// 2
// let first = Math.round(parseFloat(prompt('first number')));
// let second = Math.round(parseFloat(prompt('second number')));
// let third = Math.round(parseFloat(prompt('third number')));

// console.log(first);
// console.log(second);
// console.log(third);

// let result = first + second + third;
// console.log(result);

// - За допомогою prompt() отримати 2 цілих числа.

// let first = Math.floor(parseFloat(prompt('first')));
// let second = Math.floor(parseFloat(prompt('second')));

// console.log(first);
// console.log(second);

//   Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//   Example. Число 1 = 5. Число 2 = 2. Результат = 25 

// let pow = Math.pow(first, second);
// console.log(pow);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; 
//   let b = '100'; 
//   let c = true;

//   console.log(typeof a);
//   console.log(typeof b);
//   console.log(typeof c);

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразаї не використовувати однакові оператори!!!
//     5 ? 6 -> true          <
//     5 ? 6 -> false         >
//     5 ? 6 -> false         >=
//     5 ? 6 -> false         ===
//     10 ? 10 -> true        ===
//     10 ? 10 -> true        <=
//     10 ? 10 -> false       >
//     10 ? 10 -> false       !==
//     10 ? 10 -> false       <
//     123 ? '123' -> false   ===
//     123 ? '123' -> true    ==

// Додатково:
// - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
//   console.log(132 > 100 && 45 < 12 );                                  false
//   console.log(34 > 33 && 23 < 90 );                                    true
//   console.log(99 > 100 && 45 > 12 );                                   false
//   console.log(132 > 100 || 45 < 12 );                                  true
//   console.log(111 > 11 || 45 < 111 );                                  true
//   console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );      true
//   console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );       true
//   console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );    false
//   console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));       true
//   console.log(!!'-1');                                                 true
//   console.log(!!-1);                                                   true
//   console.log(!!'0');                                                  true
//   console.log(!!'null');                                               true
//   console.log(!!'undefined');                                          true
//   console.log(!!(3/'owu'));                                            false
//   console.log((111 > 11 || 45 < 111) ||  !!'0');                       true
//   console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));  false



// ______________________________________________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
//    За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.

// let str = 'Привіт';
// let num = 123;
// let flag = true;
// let txt = 'true';

// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//     12,
//     66,
//     90,
//     87
//     Старайтесь використовувати різні оператори. 
//     Example: 88 = (16 / 2) * 11

// let a1 = (7 + 10) * 2;
// console.log(a1)
// let a2 = (80 / 4) - 8;
// console.log(a2);
// let a3 = 12 * 4 + 18;
// console.log(a3);
// let a4 = (3 * 3) * 10;
// console.log(a4);
// let a5 = 7 + 160 / 2;
// console.log(a5);

// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,    2
//     3 % 5,    3
//     5 + '3',  '53'
//     '5' - 3,  2
//     75 + 'кг' '75kg'

// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';

// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);

// 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значееня площі зберігати в змінній s.

// let height = 23;
// let width = 10;
// let s = height * width;
// console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

// let height = 10;
// let dC = 4;
// let v = height * dC / 2;
// console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// let n = 3;
// let m = 4;
// // let k = Math.pow(n, 2) + Math.pow(m, 2);
// let k = Math.sqrt(n ** 2 + m ** 2);
// console.log(k);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

// let str = 'Hello world';
// console.log(str);
// document.write(`<h1>${str}</h1>`);
// alert(str);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// let name = 'alex';
// let age = 34;
// let hobby = 'read';

// alert(`${name} \n ${age} \n ${hobby}`);

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = 'Кто ';
// let str2 = 'ты ';
// let str3 = 'такой?';
// let concatenation = str1 + str2 + str3;
// document.write(`<h2>${concatenation}</h2>`)

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    // let str = "20";
    //  let a = 5;
    //  document.write(str + a + "<br/>");
    //  document.write(str - a + "<br/>");
    //  document.write(str * "2" + "<br/>");
    //  document.write(str / 2 + "<br/>");

// 205
// 15
// 40
// 10

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
    // parseInt("3.14")
    // parseInt("-7.875")
    // parseInt("435")
    // parseInt("Вася")
// 3
// -7
// 435
// nan

// console.log(parseInt("3.14"));
// console.log(parseInt("-7.875"));
// console.log(parseInt("435"));
// console.log(parseInt("Вася"));

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
    // let str = prompt("Enter something", "ho-ho")
    // console.log(str);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

// let first = +prompt('enter first number');
// let second = +prompt('enter first number');
// let result = alert(first + second);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// let name = prompt('enter your name');
// let surname = prompt('enter your surname');
// let age = +prompt('enter your age');
// alert(`Доброго вечера ${name} ${surname}, мои поздравления что вам ${age}.`);

// =====================
// ======ДОП============
// =====================

// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let a = +prompt('first?');
// let b = +prompt('second?');
// let c = +prompt('third?');

// if (a > b && a > c) {
//     if (b > c) {
//         console.log(c, b, a)
//     } else {
//         console.log(b, c, a)
//     }
// }
// if (b > a && b > c) {
//     if (a > c) {
//         console.log(c, a, b)
//     } else {
//         console.log(a, c, b)
//     }
// }
// if (c > a && c > b) {
//     if (a > b) {
//         console.log(b, a, c)
//     } else {
//         console.log(a, b, c)
//     }
// }


// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let color = prompt('color?');
// if (color === 'green') {
//     console.log('GO');
// } else if (color === 'yellow') {
//     console.log('WAIT');
// } else if (color === 'red') {
//     console.log('STOP');
// } else {
//     console.log('some problems')
// }

// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let color = prompt('color?');
// let isRoadClear = confirm('it`s clear?')
// if (color === 'green' && isRoadClear === true) {
//     console.log('GO');
// } else if (color === 'green' && isRoadClear === false) {
//     console.log('wait while they leave');
// } else if (color === 'yellow' && isRoadClear === false) {
//     console.log('WAIT');
// } else if (color === 'yellow' && isRoadClear === true) {
//     console.log('wait anyway');
// } else if (color === 'red' && isRoadClear === true) {
//     console.log('STOP anyway');
// } else if (color === 'red' && isRoadClear === false){
//     console.log('STOP & WAIT')
// } else {
//     console.log('do what you want!');
// }