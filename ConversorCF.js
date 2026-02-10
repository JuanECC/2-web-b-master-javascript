function  celsiusAFahrenheit(celsius){
    return (celsius * 9/5 )+ 32

}
function fahrenheitACelsius(fahrenheit){
    return (fahrenheit - 32 ) * 5/9;

}

console.log("20C en fahrenheit es: ", celsiusAFahrenheit(20));
console.log("68f en celsius es: ", fahrenheitACelsius(68));


