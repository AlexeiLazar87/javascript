// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
const mainHeader = document.getElementById('main_header');
mainHeader.style.color = 'blue';
mainHeader.innerText = 'feb-2021';
//     b) робить шириниу елементу ul 400px
const ulElement = document.getElementsByTagName('ul');
ulElement[0].style.width = '400px';
ulElement[0].style.padding = '0';
ulElement[0].style.border = 'border-box';
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
const linkListElement = document.getElementsByClassName('linkList');
for (let i = 0; i < linkListElement.length; i++) {
    linkListElement[i].style.width = '50%';
}
//     d) отримує текст який зберігається в елементі з класом listElement2
const listEl2 = document.getElementsByClassName('listElement2');
for (let i = 0; i < listEl2.length; i++) {
    let text = listEl2[i].innerText
    console.log(text);
}
//     e) отримує всі елементи li та змінює ім колір фону на сірий
const allLi = document.getElementsByTagName('li');
for (let i = 0; i < allLi.length; i++) {
    allLi[i].style.backgroundColor = 'grey';
}
//     f) отримує всі елементи 'a' та додає їм клас anchor
const aClass = document.getElementsByTagName('a');
for (let i = 0; i < aClass.length; i++) {
    aClass[i].classList.add('anchor');
}
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
const aClassText = document.getElementsByTagName('a');
for (let i = 0; i < aClassText.length; i++) {
    if (aClassText[i].innerText === 'link3') {
        aClassText[i].style.fontSize = '40px';
    }
}
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
const aNewClass = document.getElementsByTagName('a');
for (let i = 0; i < aNewClass.length; i++) {
    aNewClass[i].classList.add(`element_${aNewClass[i].innerText}`);
}
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// const subHeader = document.getElementsByClassName('sub-header');
// for (let i = 0; i < subHeader.length; i++) {
//     subHeader[i].style.backgroundColor = prompt('What is the color?');
// }
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// const subHeaderSecondBlock = document.getElementsByClassName('sub-header');
// for (let i = 0; i < subHeaderSecondBlock.length; i++) {
//     if (subHeaderSecondBlock[i].innerText === 'content 2 segment') {
//     subHeaderSecondBlock[i].style.backgroundColor = prompt('What is the color?');
//     }
// }
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// const someText = document.getElementsByClassName('content_1');
// for (let i = 0; i < someText.length; i++) {
//     someText[i].innerText = prompt('Text?');
// }
//     l) отримати елементи p та змінити їм padding на 20px
const pPaddings = document.getElementsByTagName('p');
for (let i = 0; i < pPaddings.length; i++) {
    pPaddings[i].style.padding = '20px';
}
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
const text2Class = document.getElementsByClassName('text2');
for (let i = 0; i < text2Class.length; i++) {
    text2Class[i].innerHTML = 'FEB-2021';
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

			let rules = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				}
			];
// 2) Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
for (let i = 0; i < rules.length; i++) {
    let wrap = document.createElement('div');
    let rule = document.createElement('div');
    rule.style.border = '2px solid black';
    rule.style.backgroundColor = 'yellow';
    document.body.appendChild(wrap);
    wrap.appendChild(rule);
    let title = document.createElement('h2');
    title.innerHTML = `${rules[i].title}`;
    title.style.backgroundColor = 'yellow';
    let body = document.createElement('p');
    body.innerHTML = `${rules[i].body}`;
    body.style.backgroundColor = 'yellow';
    rule.appendChild(title);
    rule.appendChild(body);
}
// ===========================================================================

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
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

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]

for (let withId of usersWithId) {
    for (let cities of citiesWithId) {
        if (withId.id === cities.user_id) {
            withId.address = cities;
        }
    }
}
let usersWithCities = [];
usersWithCities.push(usersWithId);
console.log(usersWithCities);