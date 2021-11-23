// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.
class Pc {
 constructor (ram, cpu, model, inclusionMethod) {
    this.ram = ram;
    this.cpu = cpu;
    this.model = model;
    this.inclusionMethod = inclusionMethod;
    }
}
let asus = new Pc (8,55,'asus','network');
console.log(asus);
// ===
// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
class Laptop extends Pc {
    constructor (ram, cpu, model, inclusionMethod,monitor, batery = 0) {
        super (ram, cpu, model, inclusionMethod)
        this.monitor = monitor;
        this.batery = batery;
        this.batery = Math.round(this.cpu / (this.monitor * this.ram))
    } 
}
let hp = new Laptop (16,800,'hp','batery',24, this.batery);
console.log(hp);
// ===
// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
class Ultra extends Laptop {
    constructor (ram, cpu, model, inclusionMethod, monitor, batery = 0, weight) {
        super (ram, cpu, model, inclusionMethod, monitor, batery)
        this.weight = weight;
        if (this.weight > 2 || this.batery < 4) {
            console.error('UltraBook weight more than 2kg and(or) batery power less then 4 hours');
        } else {
            console.log('START');
        }
    }
}
let ultraBook = new Ultra (8, 600, 'ultra', 'batery', 16, this.batery, 4);
console.log(ultraBook);
// ===
// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
class NewPC extends Pc {
    constructor (ram, cpu, model, inclusionMethod, fps) {
        super (ram, cpu, model, inclusionMethod)
        this.fps = fps;
        this.fps = this.cpu / this.ram;
    }
    gameStartMethod (gameName) {
        console.log(`You are playing ${gameName} with ${this.fps} FSP`);
    }
}
let newPcRewiew = new NewPC (16, 700, 'newASUS', 'batery', this.fps);
console.log(newPcRewiew);
newPcRewiew.gameStartMethod('FALLOUT');
// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
class Upgrade extends NewPC {
    constructor (ram, cpu, model, inclusionMethod, fps) {
        super (ram, cpu, model, inclusionMethod,fps)
    }
    upgradeCpu (percentCpuChanging) {
        if (percentCpuChanging <= 10) {
           this.cpu += (this.cpu * percentCpuChanging) / 100;
           console.log(`Your new CPU rang is - ${this.cpu}`); 
        } else {
            console.error(`You can't do this operation`);
        }
    }
    upgradeRAM (upgrade) {
        if (upgrade <= 2) {
            this.ram = this.ram * upgrade;
            console.log(`You are upgrade your ${this.model}: new RAM is: ${this.ram}`);
        } else {
            console.error(`Your ${this.model}'s RAM, can't be upgrade as ${upgrade} RAM`);
        }
    }
}
let newUpgradePc = new Upgrade (16, 400, 'newPc', 'ON', this.fps);
console.log(newUpgradePc);
newUpgradePc.upgradeCpu(20);
newUpgradePc.upgradeRAM(2);
// ===
// Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.
class GamePC extends NewPC {
    constructor (ram, cpu, model, inclusionMethod, fps) {
        super (ram, cpu, model, inclusionMethod, fps)
        this.fps = this.fps * 2;
    }
    newGame (game) {
        if (this.cpu < 500 && this.ram < 8) {
            console.error(`на цьому відрі ігри не запускаються`);
        } else {
            this.cpu -= this.cpu * 0.1;
            console.log(`Your CPU is: ${this.cpu}. You playing ${game}`);
        }
    }
}
let gamePC = new GamePC (12, 780, 'PCforGames', 'ON', this.fps);
console.log(gamePC);
gamePC.newGame('Crysis');

// ______________________________________________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
function Car (model, producer, year, maxSpeed, engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        console.log(`Model: ${this.model} - Producer: ${this.producer} - Year: ${this.year} - Max.speed: ${this.maxSpeed} - Engine: ${this.engine}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
        console.log(`The new maximal speed is: ${this.maxSpeed} km/h`);
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
        console.log(`New year of issue is: ${this.year}`);
    }
    this.addDriver = function (driver) {
        this.driver = driver;
        console.log(`Name: ${this.driver.name} - Surname: ${this.driver.surname} - Age: ${this.driver.age}`);
    }
}
let bmw = new Car ('BMW', 'BMW-Germany', 1954, 160, 4.5);
console.log(bmw);
bmw.drive();
bmw.info();
bmw.increaseMaxSpeed(195);
bmw.changeYear(1968);
bmw.addDriver({name: 'Mark', surname: 'Bawer', age: 44});

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
class NewCar extends Car {
    constructor (model, producer, year, maxSpeed, engine) {
        super (model, producer, year, maxSpeed, engine)
    }
}
let fiat = new NewCar ('fiat', 'Italy', 1960, 158, 2.9);
console.log(fiat);
fiat.drive();
fiat.info();
fiat.increaseMaxSpeed(170);
fiat.changeYear(1981);
fiat.addDriver({name: 'Emilio', surname: 'Fachetti', age: 31});


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}

class Prince extends Person {
    constructor (name, age, shoes) {
        super (name, age)
        this.shoes = shoes;
    }
}

class Cinderella extends Person {
    constructor (name, age, size) {
        super (name, age)
        this.size = size;
    }
}
let prince = new Prince ('oliver', 35, 34);

let cinderellas = [
    new Cinderella ('mary', 18, 35),
    new Cinderella ('olivia', 22, 33),
    new Cinderella ('kristen', 23, 31),
    new Cinderella ('zoui', 17, 37),
    new Cinderella ('kira', 29, 30),
    new Cinderella ('augusta', 25, 32),
    new Cinderella ('sonya', 24, 34),
    new Cinderella ('rita', 18, 38),
    new Cinderella ('ayn', 19, 36),
    new Cinderella ('fate', 21, 29),
];

for (let cinderella of cinderellas) {
    if (cinderella.size === prince.shoes) {
        console.log(`Cinderella is: ${cinderella.name}`)
    }
}
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
function Cinderella2 (name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
}
function Prince2 (name, age, shoesSize) {
    this.name = name;
    this.age = age;
    this.shoesSize = shoesSize;

    this.findCinderella = function (arr) {
        for (let cind of arr) {
            if (cind.size === newPrince.shoesSize) {
                console.log(`The Cinderella is: ${cind.name}`);
            }
        }
    }
}
let newCinderellas = [
    new Cinderella2 ('mary', 18, 35),
    new Cinderella2 ('olivia', 22, 33),
    new Cinderella2 ('kristen', 23, 31),
    new Cinderella2 ('zoui', 17, 37),
    new Cinderella2 ('kira', 29, 30),
    new Cinderella2 ('augusta', 25, 32),
    new Cinderella2 ('sonya', 24, 34),
    new Cinderella2 ('rita', 18, 38),
    new Cinderella2 ('ayn', 19, 36),
    new Cinderella2 ('fate', 21, 29),
];
let newPrince = new Prince2 ('mark', 23, 30);
newPrince.findCinderella(newCinderellas);

// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }
function Tag (title, description, attr) {
    this.title = title;
    this.description = description;
    this.attr = attr || [];
}

let tagA = new Tag 
('<a>',
 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
  [{ titleAttr: 'accesskey', actionAttr: 'Активация ссылки с помощью комбинации клавиш' },
   { titleAttr: 'coords', actionAttr: 'Устанавливает координаты активной области'}])
console.log(tagA)