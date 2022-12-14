// Задание 1. Популярный рейс

const data = `5
EXGJGJ521,3,252st,10;C
2Jw2n5l,3,252st,16;F
KUIK2YL,1,Номер:327ggs,30;A
8XSOVGVNDQ,1,Номер:327ggs,51;A
DRXGH62d,5,7733d,62;A
`;

function searchId(data) {
    const arr = data.split(/,|;/);

    const count = parseInt(arr.length / 4);

    let res = [];

    for (i = 0; i < count; i++) {
        res.push(arr.slice(i * 4, i * 4 + 4));
    }

    let ids = res
        .map((item) => item[1])
        .map((item) => Number(item))
        .sort();

    let res2 = getNums(ids);
    let newArr = [];

    for (const key in res2) {
        if (res2[key] == 1) {
            delete res2[key];
        }
        if (res2[key]) {
            newArr.push(key);
        }
    }

    return newArr.join(" ");
}

function getNums(arr) {
    let ex = {};

    for (let i = 0; i < arr.length; i++) {
        if (ex[String(arr[i])] === undefined) {
            ex[String(arr[i])] = 1;
        }

        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                ex[String(arr[i])] += 1;
            }
        }
    }

    return ex;
}

console.log(searchId(data)); // 1 3
