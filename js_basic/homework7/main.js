// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
// let text = document.getElementById('text');
// let btn = document.createElement('button');
// btn.innerHTML = 'HIDE';
// btn.onclick = () => {
//     text.hidden = true;
// };
// document.body.appendChild(btn);
// - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
document.write('<hr>');
let btnHide = document.createElement('button');
btnHide.innerHTML = 'hide yourself';
btnHide.style.width = '70px';
btnHide.style.height = '70px';
btnHide.onclick = () => btnHide.hidden = true;
document.body.appendChild(btnHide);
// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
document.write('<hr>');
let form1 = document.getElementById('form1');
let input1 = document.createElement('input');
input1.innerHTML = 'Enter your age';
input1.style.width = '100px';
input1.style.height = '70px';
let btn1 = document.createElement('button');
btn1.innerHTML = 'OK';
btn1.style.width = '70px';
btn1.style.height = '70px';
btn1.onclick = (ev) => {
    ev.preventDefault();    
    if (parseInt(input1.value) > 18) {
            console.log('Welcome');
        } else {
            console.log('Sorry, your age is less then 18');
        }
}
form1.appendChild(input1);
form1.appendChild(btn1);

// - Створіть меню, яке розгортається/згортається при клику
let ul = document.getElementById('ul');
let btn2 = document.getElementById('btn2');
let menuBack = true;
btn2.onclick = (ev) => {
    ul.style.display = menuBack ? 'none' : 'block';
    menuBack = !menuBack;
};
// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
const comments = [
    {title: 'A', body: 'AAA'},
    {title: 'B', body: 'BBB'},
    {title: 'C', body: 'CCC'},
    {title: 'D', body: 'DDD'},
    {title: 'E', body: 'EEE'},
];
    let h1 = document.createElement('h1');
    h1.innerText = 'COMMENTS';
    document.body.appendChild(h1);    
for (let comment of comments) {
    let fatherDiv = document.createElement('div');
    let tittle = document.createElement('div');
    let body = document.createElement('div');
    let btn3 = document.createElement('button');
    tittle.innerHTML = comment.title;
    body.innerHTML = comment.body;
    btn3.innerText = 'HIDE';
    document.body.appendChild(fatherDiv);
    fatherDiv.appendChild(tittle);
    fatherDiv.appendChild(body);
    fatherDiv.appendChild(btn3);
    // let bodyBack = true;
    btn3.onclick = () => {
        // body.style.display = bodyBack ? 'none' : 'block';
        // bodyBack = !bodyBack;
        body.hidden = !body.hidden;
    }
}
// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
//     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// first
// const inp1 = document.getElementById('inp1');
// const inp2 = document.getElementById('inp2');
// const inp3 = document.getElementById('inp3');
// const inp4 = document.getElementById('inp4');
// const btn4 = document.getElementById('btn4');
// btn4.onclick = () => {
//     console.log(`Name: ${inp1.value}; Surname: ${inp2.value}; Age: ${inp3.value}; Status: ${inp4.value}`);
// }

//second
const callBtn = document.getElementById('btn4');
callBtn.onclick = () => {
    const form = document.forms;
    for (let f of form) {
        for (let input of f) {
            console.log(input.value);
        }
    }
}
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
const element = document.getElementById('table');
const create = (str, column, tag) => {
    const target = document.getElementById(tag);
    const table = document.createElement('table');
    for (let i=0; i < str; i++) {
        const tr = document.createElement('tr');
        for (let e=0; e < column; e++) {
            const td = document.createElement('td');
            td.innerHTML = `${i} : ${e}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    target.appendChild(table);
}
create (2, 3, 'table');
// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
const image = [
    {
        title: 'Best',
        url: 'https://img.discogs.com/d4QI7qHwMSzL5Kk1afseR76uH9Y=/480x600/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-2197243-1302538840.jpeg.jpg'
    },
    {
        title: 'Charlton',
        url: 'https://assets.manutd.com/AssetPicker/images/0/0/10/126/687708/Legends-Profile_Sir-Bobby-Charlton1523461176559.jpg'
    },
    {
        title: 'Law',
        url: 'https://assets.manutd.com/AssetPicker/images/0/0/10/126/687714/Legends-Profile_Denis-Law1523461764437.jpg'
    }
];



const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const pic = document.getElementById('pic');
const slash = document.getElementById('slash');
const h2 = document.createElement('h2');
slash.appendChild(h2);
let currentIndex = 0;
b1.onclick = () => {
    if (currentIndex - 1 < 0) {
        currentIndex = image.length - 1;
    } else {
        currentIndex = currentIndex - 1;
    }
    pic.src = image[currentIndex].url;
    pic.alt = image[currentIndex].title;
    h2.innerHTML = `${image[currentIndex].title}`;
};

b2.onclick = () => {
    if (currentIndex + 1 > image.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex = currentIndex + 1;
    }
    pic.src = image[currentIndex].url;
    pic.alt = image[currentIndex].title;
    h2.innerHTML = `${image[currentIndex].title}`; 
}

pic.style.height = '600px';
pic.style.width = '450px';

