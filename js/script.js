let temperature = document.querySelector('#temperatura');
const celsius = document.querySelector('#celsius');
const fahrenheit = document.querySelector('#fahrenheit');
let text = document.querySelector('#text');

function convertToFahrenheit() {
    let getTemperature = Number(temperature.value);
    let toFahrenheit = ((getTemperature * 1.8) + 32).toFixed(2).replace('.', ',');

    return toFahrenheit;
}

function convertToCelsius() {
    let getTemperature = Number(temperature.value);
    let toCelsius = ((getTemperature - 32) / 1.8).toFixed(2).replace('.', ',');

    return toCelsius;

}

fahrenheit.addEventListener('click', () => {
    if (temperature.value == "") {
        text.innerHTML = "É necessário fornecer uma temperatura"
    } else {
        text.innerHTML = `${convertToFahrenheit()} Graus Fahrenheit`
    };

    temperature.value = '';
    temperature.focus();


});

celsius.addEventListener('click', () => {
    if (temperature.value == "") {
        text.innerHTML = "É necessário fornecer uma temperatura"
    } else {
        text.innerHTML = `${convertToCelsius()} Graus Celsius`
    };

    temperature.value = '';
    temperature.focus();

});