let currentYear = 2024; //текущий год
//просим ввести данные
let nameHuman1 = prompt("Введите имя первого пользователя:");
let yearOfBirth1 = prompt("Введите год рождения первого пользователя:");
let nameHuman2 = prompt("Введите имя второго пользователя:");
let yearOfBirth2 = prompt("Введите год рождения второго пользователя:");
let nameHuman3 = prompt("Введите имя третьего пользователя:");
let yearOfBirth3 = prompt("Введите год рождения третьего пользователя:");

//узнаем возраст каждого пользователя
let age1 = currentYear - yearOfBirth1;
let age2 = currentYear - yearOfBirth2;
let age3 = currentYear - yearOfBirth3;

//узнаем средний возраст, округляем, чтобы красиво без кучи символов после запятой выводило
let averageAge = Math.round((age1 + age2 + age3)/3);

//выводим результат
console.log("1.", nameHuman1, age1);
console.log("2.", nameHuman2, age2);
console.log("3.", nameHuman3, age3);
console.log("Средний возраст", averageAge);
