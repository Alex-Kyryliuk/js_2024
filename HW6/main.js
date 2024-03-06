// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strings = ['hello world', 'lorem ipsum', 'javascript is cool'];

strings.forEach(str => {
    console.log(`${str}: ${str.length}`);
});

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let stringsUpperCase = [];

for (let str of strings) {
    stringsUpperCase.push(str.toUpperCase());
}
console.log(stringsUpperCase);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let stringsLowerCase = [];

for (let str of stringsUpperCase) {
    stringsLowerCase.push(str.toLowerCase());
}
console.log(stringsLowerCase);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let clearStr = str.trim();
console.log(clearStr);

// let startIndex = str.indexOf(' ');
// let endIndex = str.lastIndexOf('   ');
//
// let cleanStr = str.substring(startIndex + 1, endIndex);
// console.log(cleanStr);

// ------------------------------------------------

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str1 = 'Ревуть воли як ясла повні';

function stringToArray(str1) {
    return str1.split(' ');
}

let arr = stringToArray(str1);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrNum = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let strNum = arrNum.map(num => num.toString());
console.log(strNum);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];

function sortNums(nums, direction) {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return nums.sort((a, b) => b - a);
    }
}

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

let filter = coursesAndDurationArray.filter((coursesAndDurationArray) => coursesAndDurationArray.monthDuration > 5);
console.log(filter);

let transformedArray = coursesAndDurationArray.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
}));

console.log(transformedArray);

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
const color = ['red', 'black'];

let deckAll = [];

for (let suit of cardSuit) {
    for (let value of values) {
        for (let clr of color) {
            deckAll.push({
                cardSuit: suit,
                value: value,
                color: clr
            });
        }
    }
}
console.log(deckAll);

let deck = deckAll.filter(card =>
    (card.cardSuit === 'diamond' || card.cardSuit === 'heart') && card.color === 'red' ||
    (card.cardSuit === 'spade' || card.cardSuit === 'clubs') && card.color === 'black'
);
console.log(deck);

let spadesAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadesAce);

let sixes = deck.filter(card => card.value === '6');
console.log(sixes);

let redCard = deck.filter(card => card.color === 'red');
console.log(redCard);

let diamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log(diamonds);

let highValueClubs = deck.filter(card => card.cardSuit === 'clubs' && values.indexOf(card.value) >= 5);
console.log(highValueClubs);

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let packedDeck = deck.reduce((acc, card) => {
        acc[card.cardSuit] = acc[card.cardSuit] || [];
        acc[card.cardSuit].push(card);
        return acc;
    },
    {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    });

console.log(packedDeck);

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


let modulesWithSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log('sass:', modulesWithSass);


let modulesWithDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log('docker:', modulesWithDocker);
