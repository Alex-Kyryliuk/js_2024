// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [10, 20, 40, 80, true, false, 'js', 'reakt', 'sasha', 'dog'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let bookA = {
    title: 'js',
    pageCount: 241,
    genre: 'study'
};
let bookB = {
    title: 'reakt',
    pageCount: 292,
    genre: 'study'
};
let bookC = {
    title: 'html&css',
    pageCount: 146,
    genre: 'study'
};
console.log(bookA, bookB, bookC);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let bookJs = {
    title: 'js',
    pageCount: 241,
    genre: 'study',
    authors: [
        {name: 'Sasha Oleksandr', age: 32}
    ]
};
let bookReakt = {
    title: 'reakt',
    pageCount: 292,
    genre: 'study',
    authors: [
        {name: 'Veff Oleksii', age: 37}
    ]
};
let bookHtmlCss = {
    title: 'html&css',
    pageCount: 146,
    genre: 'study',
    authors: [
        {name: 'Graff Drakula', age: 88}
    ]
};
console.log(bookJs, bookReakt, bookHtmlCss);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Alex', username: 'Alexxx', password: '32e23eQded'},
    {name: 'Vitalii', username: 'Virsa', password: 'e2ergergQ666'},
    {name: 'Ivan', username: 'Vanka', password: 'eevefv32f3vc'},
    {name: 'Oleg', username: 'Ollleg', password: 'erkvu4'},
    {name: 'Dima', username: 'Dimon', password: '5igfjrnvj'},
    {name: 'Tania', username: 'TT', password: 'fdbkmvekfvn'},
    {name: 'Karyna', username: 'KAAAAR', password: 'e2efvdfv@RR'},
    {name: 'Volodia', username: 'V0000', password: 'edfvdfRFd'},
    {name: 'Bogdan', username: 'Bogg', password: 'dfvkmkrDDD'},
    {name: 'Vasia', username: 'VWV', password: 'e4fkjvnEVR'},
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = +prompt('Enter some number!!!');
if (x !== 0) {
    console.log('True');
} else {
    console.log('False');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('Check time!!!');
if (time >= 0 && time <= 15) {
    console.log('the first part of an hour');
} else if (time >= 16 && time <= 30) {

    console.log('the 2 part of an hour');
} else if (time >= 31 && time <= 45) {

    console.log('the 3 part of an hour');
} else if (time >= 46 && time <= 59) {
    console.log('the 4 part of an hour');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('mounts');
if (day >= 1 && day <= 10) {
    console.log('first half');
} else if (day >= 11 && day <= 20) {
    console.log('two half');
} else if (day >= 21 && day <= 31) {
    console.log('three half');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week = +prompt('number week')

switch (week) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let num1 = +prompt('enter 1 number');
let num2 = +prompt('enter another number');
if (num1 < num2) {
    console.log('another number is greater than 1');
} else if (num1 > num2) {
    console.log('1 number is greater than another');
} else if (num1 === num2) {
    console.log('number are equal');
}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let xx = '';
xx = x || 'default';
console.log(xx);


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[0].title} - ${'Super'}`);
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[1].title} - ${'Super'}`);
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[2].title} - ${'Super'}`);
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[3].title} - ${'Super'}`);
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[4].title} - ${'Super'}`);
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[5].title} - ${'Super'}`);
}