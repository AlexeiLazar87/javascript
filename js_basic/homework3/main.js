
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"
let x = document.getElementById('content');
console.log(x);
// b) отримує текст з блоку з id "rules"
let y = document.getElementById('rules');
console.log(y);
// c) замініть текст параграфа з id 'content' на будь-який інший
x.innerHTML = '<h2>new text</h2>';
// d) замініть текст параграфа з id 'rules' на будь-який інший
y.innerHTML = '<h4>some new text</h4>';
// e) змініть кожному елементу колір фону на червоний
x.style.backgroundColor = 'red';
y.style.backgroundColor = 'red';
// f) змініть кожному елементу колір тексту на синій
x.style.color = 'blue';
y.style.color = 'blue';
// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(y.classList)
// h) отримати всі елементи з класом fc_rules
let z = document.getElementsByClassName('fc_rules');
console.log(z);
// i) поміняти колір тексту у всіх елементів fc_rules на червоний
for (let i = 0; i < z.length; i++) {
    z[i].style.color = 'red';
}



let users = [{
  name: 'vasya',
  age: 31,
  status: false,
  address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
  name: 'petya',
  age: 30,
  status: true,
  address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
  name: 'kolya',
  age: 29,
  status: true,
  address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
  name: 'olya',
  age: 28,
  status: false,
  address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
  name: 'max',
  age: 30,
  status: true,
  address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
  name: 'anya',
  age: 31,
  status: false,
  address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
  name: 'oleg',
  age: 28,
  status: false,
  address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
  name: 'andrey',
  age: 29,
  status: true,
  address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
  name: 'masha',
  age: 30,
  status: true,
  address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
  name: 'olya',
  age: 31,
  status: false,
  address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
  name: 'max',
  age: 31,
  status: true,
  address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];
// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку
for (let i = 0; i < users.length; i++) {
    let user = document.createElement('div');
    user.innerHTML = `name: ${users[i].name} <br> age: ${users[i].age} <br> status: ${users[i].status}`
    user.style.backgroundColor = 'yellow';
    user.style.color = 'black';
    user.style.border = '1px solid black';
    document.body.appendChild(user);
}
// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (let i = 0; i < users.length; i++) {
    let user = document.createElement('div');
    user.innerHTML = `name: ${users[i].name} <hr> age: ${users[i].age} <hr> status: ${users[i].status}`
    user.style.backgroundColor = 'red';
    user.style.color = 'white';
    user.style.border = '1px solid black';
    document.body.appendChild(user);
    let address = document.createElement('div');
    address.style.border = '1px solid black';
    let city = document.createElement('div');
    city.style.border = '2px solid orange';
    city.style.backgroundColor = 'white';
    city.style.color = 'black';
    let country = document.createElement('div');
    country.style.border = '2px solid orange';
    country.style.backgroundColor = 'white';
    country.style.color = 'black';
    let street = document.createElement('div');
    street.style.border = '2px solid orange';
    street.style.backgroundColor = 'white';
    street.style.color = 'black';
    let houseNumber = document.createElement('div');
    houseNumber.style.border = '2px solid orange';
    houseNumber.style.backgroundColor = 'white';
    houseNumber.style.color = 'black';
    city.innerHTML = `city: ${users[i].address.city}`;
    country.innerHTML = `country: ${users[i].address.country}`;
    street.innerHTML = `street: ${users[i].address.street}`;
    houseNumber.innerHTML = `houseNumber: ${users[i].address.houseNumber}`;
    address.appendChild(city);
    address.appendChild(country);
    address.appendChild(street);
    address.appendChild(houseNumber);
    user.appendChild(address);
}