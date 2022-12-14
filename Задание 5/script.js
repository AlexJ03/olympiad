// Задание 5. Счастливый-встречный билеты

function defineTicket(data) {
    let test1 = splitIntoParts(data);
    let test2 = sumParts(test1);

    return outputResult(test2);
}

console.log(defineTicket(5555)); // C
console.log(defineTicket(5556)); // V
console.log(defineTicket(5557)); // O

function splitIntoParts(number) {
    const arr = String(number).split("");

    for (let i = 0; i < arr.length; i += arr.length / 2) {
        let first = arr.splice(0, arr.length / 2).map((item) => Number(item));

        return { first: first, second: arr.map((item) => Number(item)) };
    }
}

function sumParts(data) {
    const { first, second } = data;

    console.log(first, second);

    let firstSum = first
        .map((item) => Number(item))
        .reduce((prev, cur) => prev + cur);
    let secondSum = second
        .map((item) => Number(item))
        .reduce((prev, cur) => prev + cur);

    return [firstSum, secondSum];
}

function outputResult(data) {
    if (data[0] === data[1]) {
        return "C";
    } else if (data[0] - data[1] === 1 || data[1] - data[0] === 1) {
        return "V";
    } else {
        return "O";
    }
}
