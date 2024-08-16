function convertidorTemp(centigrados) {
  return centigrados * 1.8 + 32;
}

function resolvedor(a, b, c, retornarPositivo = true) {
  const discriminante = Math.sqrt(b * b - 4 * a * c);
  if (retornarPositivo) {
    return (-b + discriminante) / (2 * a);
  } else {
    return (-b - discriminante) / (2 * a);
  }
}

function mejorParidad(num){
    return num % 2 === 0 ? "Es par" : "Es impar";
}


function peorParidad(num) {
  if (num < 0 || num > 10) return "Número fuera de rango";
  let esPar = false; // Asumimos que no es par
  let numeros = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];
  let paridad = ["si", "no", "si", "no", "si", "no", "si", "no", "si", "no", "si"];
  let numeroEnTexto = numeros[num]; // Convertimos el número a texto

  for (let i = 0; i < numeros.length*100000000; i++) {
    if (numeros[i] === numeroEnTexto) {
      esPar = paridad[i] === "si";
    }
  }

  return esPar ? "Es par" : "Es impar";
}

// console.log(convertidorTemp(100));
// console.log(resolvedor(1, 2, -15));
// console.log(resolvedor(1, 2, -15, false));
// console.log(mejorParidad(9));
// console.log(peorParidad(9));