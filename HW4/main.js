// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a, b) {
    let calcRectangle = a * b;
    return calcRectangle;
}

console.log(rectangle(4, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r) {
    let calcCircle = Math.PI * Math.pow(r, 2);
    return calcCircle;
}

console.log(circle(4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(h, r) {
    let calcA = Math.PI * Math.pow(r, 2);
    let calcB = 2 * Math.PI * r * h;
    let area = 2 * calcA + calcB;
    return area;
}

console.log(cylinder(5, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент
function array(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

let exampleArray = [1, 24, 4, 6, 54];
array(exampleArray);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraphText(text) {
    document.write(`<p>${text}</p>`)
}

let myText = 'lorem lorem';
paragraphText(myText);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createText(textForLi) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${textForLi}</li>`)
    }
    document.write(`</ul>`);
}

let textForLi = "Lorem ipsum dolor sit amet";
createText(textForLi);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createList(liText, count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${liText}</li>`);
    }
    document.write(`</ul>`);
}

createList("LLorem ipsum dolor sit amet!", 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrayElement(arr) {
    document.write(`<ul>`);
    for (let argument of arr) {
        document.write(`<li> ${argument} </li>`);
    }
    document.write(`</ul>`);

}
let arr = [1, 2, true, false, 'world'];
arrayElement(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function arrayObject(arr2) {
    arr2.forEach(function (item) {
        document.write(`<div>Id: ${item.id}, Name: ${item.name}, Age: ${item.age}</div>`);
    });
}

let arr2 = [
    {
        id: 23,
        name: 'Oleksandr',
        age: 27
    }
];
arrayObject(arr2);

// - створити функцію яка повертає найменьше число з масиву
function findMinNumber(arr3) {
    let min = arr3[0];
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] < min) {
            min = arr3[i];
        }
    }
    return min;
}

let arr3 = [9, 2, 5];
let minNumber = findMinNumber(arr3);
console.log(minNumber);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

let numbers = [1, 2, 10];
let result = sum(numbers);
console.log(result);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

let numbers2 = [11, 22, 33, 44];
console.log(numbers2);
swap(numbers2, 0, 1);
console.log(numbers2);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let exchangeRate = null;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            exchangeRate = currencyValues[i].value;
            break;
        }
    }

    let exchangedSum = sumUAH / exchangeRate;
    return exchangedSum;
}

let result2 = exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD');
console.log(result2);