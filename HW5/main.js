// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let squareRectangle = (a, b) => a * b;
console.log(squareRectangle(2, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let squareCircle = (r) => Math.PI * r ** 2;
console.log(squareCircle(4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let calculateCylinderArea = (r, h) => {
    let a = Math.PI * r ** 2;
    let b = 2 * Math.PI * r * h;
    return 2 * a + b;
};
console.log(calculateCylinderArea(4, 6));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arrayElements = array => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
let myArray = [1, 2, 3, 4, 5];
arrayElements(myArray);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraph = (text) => {
    document.write(`<p>${text}</p>`);
}
let text = 'hello';
paragraph(text);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createElementLi = (argumentLi) => {
    document.write(`<ul>`);
    document.write(`<li>${argumentLi}</li>
                    <li>${argumentLi}</li>
                    <li>${argumentLi}</li>`);
    document.write(`</ul>`);
}

let argumentLi = 'okten';
createElementLi(argumentLi);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createElementCountLi = (count, textLi) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${textLi}</li>`);
    }
    document.write(`</ul>`);
}
let textLi = 'Cool!';
let count = 6;
createElementCountLi(6, textLi);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrayElements2 = (elements) => {
    document.write(`<ul>`);
    for (let item of elements) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

let anyElements = [1, 2, 3, '4', 'dsfsdf', true, false];
arrayElements(anyElements);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrObj = (listItems) => {
    for (let obj of listItems) {
        document.write(`<div>
                         <p>ID: ${obj.id}</p>
                         <p>Name: ${obj.name}</p>
                         <p>Age: ${obj.age}</p>
                       </div>`)
    }
}
let arrBlok = [
    {id: 1, name: 'dino', age: 2},
    {id: 2, name: 'mom', age: 5},
    {id: 3, name: 'asa', age: 21},
    {id: 4, name: 'dad', age: 27}
];
arrObj(arrBlok);

// - створити функцію яка повертає найменьше число з масиву
let minNum = (numberArr) => {
    let minElement = numberArr[0];
    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] < minElement) {
            minElement = numberArr[i];
        }
    }
    return minElement;
}

let numberArr = [6, 2, 1, 7, 100, 343, 454];
console.log(minNum(numberArr));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumArr = (arrNumbers) => {
    let sum = 0;
    for (let arrNumber of arrNumbers) {
        sum = sum + arrNumber;
    }
    return sum;
}

let arr = [1, 35, 456, 234]
console.log(sumArr(arr));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
let swap = (arr, index1, index2) => {
    let element = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = element;
}
let array = [11, 22, 33, 44];
swap(array, 0, 1);
console.log(array);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let currency = currencyValues.find(item => item.currency === exchangeCurrency);
    if (currency) {
        let exchangedAmount = sumUAH / currency.value;
        return exchangedAmount;
    } else {
        return "none currency value";
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
