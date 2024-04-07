
const { fromEuroToDollar } = require('./app.js')
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
const { fromEuroToYen } = require('./app.js')
test("One euro should be 164,34 Yen Japones", function() {
    // Importo la funcion desde app.js
    const { fromEuroToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const Yens = fromEuroToYen(3.5);

    // Si 1 euro son 164.34 Yenes, entonces 3.5 euros debe ser (3.5 * 164.34)
    const expected = 3.5 * 164.34;

    // Hago mi comparación (la prueba)
    expect(fromEuroToYen(3.5)).toBe(575.19); // 1 euro son 164.34 Yenes, entonces 3.5 euros deberían ser = (3.5 * 164.34)
})
const { fromEuroToPound } = require('./app.js')
test("One euro should be 0.86 Pound", function() {
    // Importo la funcion desde app.js
    const { fromEuroToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const Yens = fromEuroToPound(3.5);

    // Si 1 euro son 0.86 Pounds, entonces 3.5 euros debe ser (3.5 * 0.86)
    const expected = 3.5 * 0.86;

    // Hago mi comparación (la prueba)
    expect(fromEuroToPound(3.5)).toBe(3.01); // 1 euro son 0.86 Pounds, entonces 3.5 euros deberían ser = (3.5 * 0.86)
})