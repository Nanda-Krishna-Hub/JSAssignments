function CelsiustoFahrenheit(celsius){
    const temp = celsius;
    const converted = temp*9/5+32;
    console.log("Temp in F is " + converted);
}

function FahrenheitToCelsius(fahrenheit){
    const temp = fahrenheit;
    const converted = (temp-32)*5/9;
    console.log("Temp in celsius is " + converted);
}

CelsiustoFahrenheit(37);

FahrenheitToCelsius(98);
