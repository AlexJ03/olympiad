// Задание 2

const data = `3
2020-07-18T16:00,2020-07-18T19:00,2020-07-18T16:20,2020-07-18T19:10
2020-07-18T16:00,2020-07-18T19:50,2020-07-18T16:20,2020-07-18T19:10
2020-07-18T16:00,2020-07-18T19:00,2020-07-18T16:20,2020-07-18T19:50
`;

function fn(data) {
    const arr = data.split(/,|\n/).splice(1);
    const count = parseInt(arr.length / 4);

    let res = [];

    for (i = 0; i < count; i++) {
        res.push(arr.slice(i * 4, i * 4 + 4));
    }

    let obj = {
        one: {
            scheduled_departure: res[0][0],
            scheduled_arrival: res[0][1],
            actual_departure: res[0][2],
            actual_arrival: res[0][3],
        },
        two: {
            scheduled_departure: res[1][0],
            scheduled_arrival: res[1][1],
            actual_departure: res[1][2],
            actual_arrival: res[1][3],
        },
        three: {
            scheduled_departure: res[2][0],
            scheduled_arrival: res[2][1],
            actual_departure: res[2][2],
            actual_arrival: res[2][3],
        },
    };

    const one =
        testRes(obj.one.actual_departure, obj.one.scheduled_departure) < 30 &&
        testRes(obj.one.actual_arrival, obj.one.scheduled_arrival) < 30
            ? "Yes"
            : "No";

    const two =
        testRes(obj.two.actual_departure, obj.two.scheduled_departure) < 30 &&
        testRes(obj.two.actual_arrival, obj.two.scheduled_arrival) < 30
            ? "Yes"
            : "No";

    const three =
        testRes(obj.three.actual_departure, obj.three.scheduled_departure) <
            30 &&
        testRes(obj.three.actual_arrival, obj.three.scheduled_arrival) < 30
            ? "Yes"
            : "No";

    return [one, two, three].join(`\n`);
}

function testRes(date1, date2) {
    return Math.abs(new Date(date1) - new Date(date2)) / 60000;
}

console.log(fn(data)); // Yes No No
