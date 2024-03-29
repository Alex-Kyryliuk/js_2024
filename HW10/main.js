// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let myForm = document.getElementById('myForm');

myForm.button.onclick = function () {
    let name = myForm.i1.value;
    let surname = myForm.i2.value;
    let age = myForm.i3.value;

    let div = document.createElement('div');
    document.getElementById('target').appendChild(div);
    div.innerText = `User: ${name} ${surname}, age: ${+age}`

    myForm.i1.value = '';
    myForm.i2.value = '';
    myForm.i3.value = '';
}

myForm.onsubmit = function (ev) {
    ev.preventDefault();
}

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let counterElement = document.getElementById('counter');
let currentValue = localStorage.getItem('counterValue') || 0;
let newValue = parseInt(currentValue) + 1;

counterElement.innerText = newValue;

localStorage.setItem('counterValue', newValue);
// localStorage.clear();


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
let date = new Date();
let timestamp = date.toLocaleString();
// console.log(timestamp);

let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
// console.log(sessions);

sessions.push(timestamp);
localStorage.setItem('sessions', JSON.stringify(sessions));

// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let arr = [];
let currentIndex = 0;
let itemsPerPage = 10;

for (let i = 0; i < 100; i++) {
    arr.push({index: i + 1, data: `Object ${i + 1}`});
}

function displayItems(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
        let divObj = document.createElement('div');
        document.getElementById('objAdd').appendChild(divObj);
        divObj.innerText = arr[i].data;
    }
}

displayItems(0, itemsPerPage);

function showNextItems() {
    if (currentIndex + itemsPerPage < arr.length) {
        currentIndex += itemsPerPage;
        displayItems(currentIndex, currentIndex + itemsPerPage);
    }
}

function showPreviousItems() {
    if (currentIndex - itemsPerPage >= 0) {
        currentIndex -= itemsPerPage;
        displayItems(currentIndex, currentIndex + itemsPerPage);
    }
}

document.getElementById('prevButton').addEventListener('click', showPreviousItems);
document.getElementById('nextButton').addEventListener('click', showNextItems);

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let deleteButton = document.getElementById('deleteText');
let textElement = document.getElementById('text');

deleteButton.addEventListener('click', function () {
    if (textElement) {
        textElement.remove();
    }
});

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let ageInput = document.getElementById('ageInput');
let checkAgeButton = document.getElementById('checkAgeButton');

checkAgeButton.addEventListener('click', function () {
    let age = parseInt(ageInput.value);
    ageInput.value = '';

    if (age < 18) {
        alert('Вам немає 18 років.');
    } else if (age <= 100) {
        alert('Ласкаво просимо старічок');
    } else {
        alert('???');
    }


});
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let createTableButton = document.getElementById('createTableButton');
createTableButton.addEventListener('click', function () {
    let rowCount = document.getElementById('rowCountInput').value;
    let columnCount = document.getElementById('columnCountInput').value;
    let cellContent = document.getElementById('cellContentInput').value;

    let tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    let table = document.createElement('table');
    for (let i = 0; i < rowCount; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < columnCount; j++) {
            let cell = document.createElement('td');
            cell.innerText = cellContent;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    tableContainer.appendChild(table);

    document.getElementById('rowCountInput').value = '';
    document.getElementById('columnCountInput').value = '';
    document.getElementById('cellContentInput').value = '';
});

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

function updatePrice() {
    let currentTime = new Date().getTime();
    let priceBlock = document.getElementById('priceBlock');

    let lastUpdateTime = JSON.parse(localStorage.getItem('lastUpdateTime')) || [];
    let lastUpdatePrice = parseInt(localStorage.getItem('lastUpdatePrice')) || 100;

    if (lastUpdateTime.length === 0 || currentTime - lastUpdateTime[lastUpdateTime.length - 1].time >= 10000) {
        let newPrice = lastUpdatePrice + 10;
        priceBlock.innerText = newPrice + " грн";

        localStorage.setItem('lastUpdateTime', JSON.stringify([lastUpdateTime, {time: currentTime}]));
        localStorage.setItem('lastUpdatePrice', newPrice);
    } else {
        priceBlock.innerText = lastUpdatePrice + " грн";
    }
}

updatePrice();
