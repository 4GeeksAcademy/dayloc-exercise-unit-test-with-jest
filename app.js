
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}



const fromEuroToYen = function (valueInEuro) {
    // Convertimos el valor a dólares
    let valueInYen= valueInEuro * 164.34;
    // Retornamos el valor en dólares
    return valueInYen;
}

const fromEuroToPound = function ValorEnEuro(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInPound= valueInEuro * 0.86;
    // Retornamos el valor en dólares
    return valueInPound;
}
module.exports = { fromEuroToDollar, fromEuroToPound, fromEuroToYen }