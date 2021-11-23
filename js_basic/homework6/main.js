// // 1) Створити масив з 20 чисел та:
// const numbers = [3, 19, 0, 555, 11, 21, 200, 5, 18, 16, 1, 131, 60, 972, 22, 63, 177, 4, 91, 400];
// //  a) відсортувати його від меншого до більшого.
// let sort = numbers.sort((a,b) => {
//     return a - b;
// });
// console.log(sort);
// //  b) відсортувати його від більшого до меншого.
// let sort2 = numbers.sort((a,b) => {
//     return b-a;
// });
// console.log(sort2);
// //  c) Відфілтрувати числа які є кратними 3.
// let filter = numbers.filter((value) => {
//     return value%3 === 0;
// });
// console.log(filter);
// //  d) Відфілтрувати числа які є більшими за 10.
// let filter2 = numbers.filter((value) => {
//     return value > 10;
// });
// console.log(filter2);
// //  e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// let forEach = numbers.forEach((value,index) => {
//     document.write(`<h2>${index + 1} - ${value}</h2>`);
// });
// //  f) За допомогою map збільшити кожен елемент в масиві в три рази.
// let map = numbers.map((number) => {
//     return number * 3;
// });
// console.log(map);
// //  g) Порахувати загальну суму всіх елментів у масиві (reduce)
// let reduce = numbers.reduce((acc, currentValue) => {
//     return acc + currentValue;
// }, 0);
// console.log(reduce);

// // 2) Створити масив з 20 стрічок та:
// let string = ['de gea', 'wan-bissaka', 'dal', 'henderson', 'lindelof', 'maguayr', 'varane', 'show', 'telles', 'pogba', 'fred', 'mctominey', 'martial',
//               'ronaldo', 'cavani', 'greenwood', 'sancho', 'rashford', 'matic', 'van de beek'];
// //  a) Відсортувати його в алфавітному порядку
// let strSort = string.sort();
// console.log(string);
// //  b) Відсортувати в зворотньому порядку
// let strSortReverse = string.sort((a,b) => {
//     if (a < b) {
//         return 1;
//     } return -1;
// });
// console.log(strSortReverse);
// //  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// let newArray = [];
// let strFilter = string.filter((str) => {
//     return str.length > 4;
// });
// newArray.push(strFilter);
// console.log(newArray);
// //  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// let strMap = string.map(str => {
//     return str = `Sam says: ${str}`;
// });
// console.log(strMap);

// // 3) Все робити тільки за допомогою методів масивів!
// // Дано масив :
// const users = [
//    {name: 'vasya', age: 31, isMarried: false},
//    {name: 'petya', age: 30, isMarried: true},
//    {name: 'kolya', age: 29, isMarried: true},
//    {name: 'olya', age: 28, isMarried: false},
//    {name: 'max', age: 30, isMarried: true},
//    {name: 'anya', age: 31, isMarried: false},
//    {name: 'oleg', age: 28, isMarried: false},
//    {name: 'andrey', age: 29, isMarried: true},
//    {name: 'masha', age: 30, isMarried: true},
//    {name: 'olya', age: 31, isMarried: false},
//    {name: 'max', age: 31, isMarried: true}
// ];
// // a) відсортувати його за  віком (зростання , а потім окремо спадання)
// let ageUp = users.sort((a, b) => {
//     return a.age - b.age;
// });
// console.log(ageUp);

// let ageDown = users.sort((a,b) => {
//     return b.age - a.age;
// });
// console.log(ageDown);
// // b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let lettersInNameUp = users.sort((a,b) => {
//     return a.name.length - b.name.length;
// });
// console.log(lettersInNameUp);

// let lettersInNameDown = users.sort((a,b) => {
//     return b.name.length - a.name.length;
// });
// console.log(lettersInNameDown);
// // c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// //    та зберегти це в новий масив (первинний масив залишиться без змін)
// let idForUser = users.map((value,index) => {
//     const {name, age, isMarried} = value;
//     return {name, age, isMarried, id: index +1};
// });
// console.log(idForUser);
// // d) відсортувати його за індентифікатором
// let sortById = idForUser.sort((a,b) => {
//     return b.id - a.id;
// });
// console.log(sortById);
// // e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
// let newAppartment = users.reduce((acc, value) => {            // error (mutation)
//     if (value.isMarried) {
//         value.appartment = true;
//         acc.push(value);
//     }
//     return acc;
// }, []);
// console.log(newAppartment);
// console.log(users);

// // ______________________________________________________________________________________________________________________________________________________
// //                                                                 РОБОТА В АУДИТОРІЇ
// // ______________________________________________________________________________________________________________________________________________________


// const cars = [
//    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];

// // Відфільтрувати масив за наступними крітеріями :
// // - двигун більше 3х літрів
// let engineMuchThreeL = cars.filter(value => {
//     return value.volume > 3;
// });
// console.log(engineMuchThreeL);
// // - двигун = 2л
// let engineEqualTwo = cars.filter(value => {
//     return value.volume === 2;
// });
// console.log(engineEqualTwo);
// // - виробник мерс
// let mers = cars.filter(value => value.producer === 'mercedes');
// console.log(mers);
// // - двигун більше 3х літрів + виробник мерседес
// let engineAndProducer = cars.filter(value => {
//     return value.volume > 3 && value.producer === 'mercedes';
// });
// console.log(engineAndProducer);
// // - двигун більше 3х літрів + виробник субару
// let volumeInSubaru = cars.filter(value => value.volume > 3 && value.producer === 'subaru');
// console.log(volumeInSubaru);
// // - сили більше ніж 300
// let power = cars.filter(value => value.power > 300);
// console.log(power);
// // - сили більше ніж 300 + виробник субару
// let powerAndProducer = cars.filter(value => value.power > 300 && value.producer === 'subaru');
// console.log(powerAndProducer);
// // - мотор серіі ej
// let engine = cars.filter(value => value.engine.includes('ej'));
// console.log(engine);
// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// let newFilter = cars.filter(value => value.power > 300 && value.producer === 'subaru' && value.engine.includes('ej'));
// console.log(newFilter);
// // - двигун меньше 3х літрів + виробник мерседес
// let newFilter2 = cars.filter(value => value.volume < 3 && value.producer === 'mercedes');
// console.log(newFilter2);
// // - двигун більше 2л + сили більше 250
// let newFilter3 = cars.filter(value => value.volume > 2 && value.power > 250);
// console.log(newFilter3);
// // - сили більше 250  + виробник бмв
// let newFilter4 = cars.filter(value => value.power > 250 && value.producer === 'bmw');
// console.log(newFilter4);

// // - взять слдующий массив
// const usersWithAddress = [
//    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];

// // -- Відсортувати їх по ID
// let sortUsers1 = usersWithAddress.sort((a,b) => a.id - b.id);
// console.log(sortUsers1);
// // -- Відсортувати їх по ID в зворотньому порядку
// let sortUsers2 = usersWithAddress.sort((a,b) => b.id - a.id);
// console.log(sortUsers2);
// // -- Відсортувати по віку
// let sortUsers3 = usersWithAddress.sort((a,b) => a.age - b.age);
// console.log(sortUsers3);
// // -- Відсортувати по віку в зворотньому порядку
// let sortUsers4 = usersWithAddress.sort((a,b) => b.age - a.age);
// console.log(sortUsers4);
// // -- Відсорутвати по імені
// let sortUsers5 = usersWithAddress.sort((a,b) => {
//     if (a.name > b.name) {
//         return 1;
//     }   return -1;
// });
// console.log(sortUsers5);
// // -- Відсорутвати по назві вулиці 
// let sortUsers6 = usersWithAddress.sort((a,b) => {
//     if (a.address.street > b.address.street) {
//         return 1;
//     }   return -1;
// });
// console.log(sortUsers6);
// // -- Відсорутвати по номеру будинку
// let sortUsers7 = usersWithAddress.sort((a,b) => a.address.number - b.address.number );
// console.log(sortUsers7);
// // -- Залигити тільки тих, хто молодший ніж 30 (filter)
// let sortUsers8 = usersWithAddress.filter(value => value.age < 30);
// console.log(sortUsers8);
// // -- Залишити тільки одружених
// let sortUsers9 = usersWithAddress.filter(value => value.isMarried);
// console.log(sortUsers9);
// // -- Залишити тільки одружених, які молодні за 30
// let sortUsers10 = usersWithAddress.filter(value => value.isMarried && value.age < 30);
// console.log(sortUsers10);
// // -- Залишити лише тих, в кого парні номери будинків.
// let sortUsers11 = usersWithAddress.filter(value => value.address.number%2 === 0);
// console.log(sortUsers11);
// // -- Порахувати загальний вік всіх людей. (reduce)
// let sortUsers12 = usersWithAddress.reduce((acc, value) => {
//     return acc + value.age;
// }, 0);
// console.log(sortUsers12);
// // -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
// let sortUsers13 = usersWithAddress.reduce((acc,value) => {
//     if (value.isMarried && value.age > 30) {
//         value.child = true;
//         acc.push(value);
//     } return acc;
// }, []);
// console.log(sortUsers13);

// ______________________________________________________________________________________________________________________________________________________
//                                                                     Додатково
// ______________________________________________________________________________________________________________________________________________________

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// const carsArray = [
//     {model: 'mercedes', power: 500, owner: {name: 'max', age: 19, expirience: 1}, price: 38000, year: 2007},
//     {model: 'ferrari', power: 680, owner: {name: 'sam', age: 23, expirience: 5}, price: 75000, year: 2020},
//     {model: 'bmw', power: 490, owner: {name: 'samantha', age: 25, expirience: 7}, price: 42000, year: 2019},
//     {model: 'volvo', power: 400, owner: {name: 'lily', age: 22, expirience: 3}, price: 34000, year: 2000},
//     {model: 'hunday', power: 320, owner: {name: 'edd', age: 40, expirience: 4}, price: 17000, year: 2015},
//     {model: 'toyota', power: 360, owner: {name: 'bryan', age: 38, expirience: 20}, price: 21000, year: 1999},
//     {model: 'crysler', power: 425, owner: {name: 'lola', age: 29, expirience: 6}, price: 50000, year: 2013},
// ];
// // Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// let item = carsArray.reduce((acc, value, index) => {
//     if (index%2 === 0) {
//         value.power += value.power * 0.1;
//         acc.push(value);
//     } return acc;
// }, []);
// console.log(item);
// // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// let newDrivers = item.map(value => value.owner.name = 'new driver');
// // Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// let newArr = [];
// for (let i = 0; i < carsArray.length; i = i + 2) {
//     newArr.push(carsArray[i]);
// };
// console.log(newArr);

// let upgrade = newArr.map(value => {
//     return value.power += value.power * 0.1, value.price += value.price * 0.05;
// });
// console.log(upgrade);
// // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// // то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// let bigExp = carsArray.reduce((acc,value) => {
//     if (value.owner.age > 25 && value.owner.expirience < 6) {
//         value.owner.expirience = value.owner.expirience + 1;
//         acc.push(value);
//     } return acc
// }, []);
// console.log(bigExp);
// console.log(carsArray)
// // Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто
// let sum = carsArray.reduce((acc,value) => {
//     return acc + value.price;
// }, 0);
// console.log(sum);

// Задача: дан отсортированный по возрастанию массив целых чисел. 
// Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
let array = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
function test (arr, element) {
    let min = arr.indexOf(element);
    let max = arr.lastIndexOf(element);
    console.log(`minIndex: ${min}, maxIndex: ${max}`)
}
test(array, 2);
test(array, 4);
test(array, 14);