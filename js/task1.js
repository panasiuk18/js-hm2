// Завдання 1 Об’яви дві змінних, які зберігають назву та ціну товару: name та
// price Присвой змінні наступним характеристикам товару (зразу при об'явленні)
// name: Генератор, price: 1000 Використовуючи шаблонний рядок, виведіть в консоль
// інформацію про товар. Має вийти: 'Обрано «Генератор», ціна за одиницю 1000
// кредитів'. Присвой товар нову ціну - 2000. Використовуючи шаблонний рядок,
// виведену в консоль інформації про товар, вийде: 'Обрано «Генератор», ціна за
// одиницю 2000 кредитів'.

const name = "генератор"
const price = 1000

console.log(`Обрано «${name}», ціна за одиницю ${price} кредитів`)
// Присвой товар нову ціну
const newprice = 2000
console.log(`Обрано «${name}», ціна за одиницю ${newprice} кредитів`)
