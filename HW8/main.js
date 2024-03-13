// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let newUser = [];

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

for (let i = 0; i < 10; i++) {
    let user = new User(i + 1, `User${i + 1}`, `Surname${i + 1}`, `user${i + 1}@example.com`, `+38012345678${i}`);
    newUser.push(user);
}
console.log(newUser);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let parne = newUser.filter(user => user.id % 2 === 0);
console.log(parne);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = parne.sort((a, b) => a.id - b.id);
console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arr = [];
for (let i = 0; i < 10; i++) {
    let order = Array.from({length: i + 1}, (_, index) => `product ${index + 1}`);
    let obj = new Client(i + 1, `User${i + 1}`, `Surname${i + 1}`, `user${i + 1}@example.com`, `+38012345678${i}`, order);
    arr.push(obj);
}
console.log(arr);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
arr.sort((a, b) => a.order.length - b.order.length);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, made, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.made = made;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = function () {
//         // console.log(`Model - ${this.model}, Made - ${this.made}, Year - ${this.year}, Max Speed - ${this.maxSpeed}, Engine Volume - ${this.engineVolume}`)
//         for (const key in this) {
//             if (typeof this[key] === 'function') continue;
//             console.log(key.toUpperCase() + ' -', this[key])
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(`Максимальна швидкість збільшена і тепер становить ${this.maxSpeed}`)
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//         console.log(`Рік випуску змінено на ${this.year}`);
//     }
//
//     this.driver = [];
//     this.addDriver = function (driver) {
//         this.driver.push(driver);
//         console.log(`Водій ${driver.name}`);
//     };
//
// }
//
// let myCar = new Car('BMW', 'Germany', 2021, 260, 2.0);
// myCar.drive();
// myCar.info();
// myCar.increaseMaxSpeed(100);
// myCar.changeYear(2024);
// myCar.addDriver({name: 'Jony', age: 34});
// myCar.addDriver({name: 'JonDon', age: 54});
// myCar.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.drivers = [];
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        for (const key in this) {
            if (typeof this[key] === 'function') continue;
            console.log(key.toUpperCase() + ' -', this[key])
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Максимальна швидкість збільшена і тепер становить ${this.maxSpeed}`)
    }

    changeYear(newValue) {
        this.year = newValue;
        console.log(`Рік випуску змінено на ${this.year}`);
    }

    addDriver(driver) {
        this.drivers.push(driver);
        console.log(`Водій: ${driver.name}`);
    }
}

let myCar = new Car('Audi', 'Germany', 2021, 250, 3.0);

myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(60);
myCar.changeYear(2023);
myCar.addDriver({name: 'Fix', age: 35});
myCar.addDriver({name: 'Sasa', age: 39});


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelyshka {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let arrPopelyshki = [];
for (let i = 0; i < 10; i++) {
    let name = `Popelyshka${i + 1}`;
    let age = Math.floor(Math.random() * 20) + 18;
    let size = Math.floor(Math.random() * 10) + 35;
    arrPopelyshki.push(new Popelyshka(name, age, size));
}

console.log(arrPopelyshki);

class Prince {
    constructor(name, age, shoes) {
        this.name = name;
        this.age = age;
        this.shoes = shoes;
    }

//     findPopelyshka(popelyshka) {
//         for (let i = 0; i < popelyshka.length; i++) {
//             if (popelyshka[i].size === this.shoes) {
//                 console.log(`${this.name} знайшов свою попелюшку: ${popelyshka[i].name}`);
//                 return popelyshka[i];
//             }
//         }
//         console.log(`${this.name} не знайшов попелюшку і пішов плакати`);
//         return null;
//     }
// }

    findPopelyshka(popelyshka) {
        let foundPopelyshka = popelyshka.find(popelyshka => popelyshka.size === this.shoes);
        if (foundPopelyshka) {
            console.log(`${this.name} знайшов свою попелюшку: ${foundPopelyshka.name}`);
            return foundPopelyshka;
        } else {
            console.log(`${this.name} не знайшов попелюшку і пішов плакати`);
            return null;
        }
    }
}

let prince = new Prince('Принц', 25, 38);
prince.findPopelyshka(arrPopelyshki);
