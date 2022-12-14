// Задание 6. Цвет яблока

const getColors = require("get-image-colors");

const redApple =
    "https://img.freepik.com/premium-photo/red-apple-isolated-on-white-background_253984-6968.jpg";
const greenApple =
    "https://img.freepik.com/premium-photo/fresh-green-apple-on-black-background_102498-22.jpg";

const getColor = await getColors(redApple).then((colors) => {
    const hexColors = colors.map((color) => color.hex());

    let red = "#9f3444";
    let green = "#3fbf07";
    let green2 = "#558911";

    if (hexColors.find((color) => color == red)) {
        return "Красное";
    } else if (
        hexColors.find((color) => color == green) ||
        hexColors.find((color) => color == green2)
    ) {
        return "Зеленое";
    } else {
        return "Error";
    }
});

console.log(getColor); // Красное
