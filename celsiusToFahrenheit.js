module.exports = celsiusToFahrenheit

function celsiusToFahrenheit(C){

  let resultat= C*1.8+32
  return resultat
}

let Fahrenheit = celsiusToFahrenheit(30);
Console.log(Fahrenheit);


