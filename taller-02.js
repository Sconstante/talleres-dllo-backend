function findMax(numeros) {
  let max = -Infinity;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  return max;
}

console.log(findMax([3, 17, -1, 4, -19]), "findMax"); // 17

function includes(numeros, num) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === num) {
      return true;
    }
  }
  return false;
}

console.log(includes([3, 17, -1, 4, -19], 2), "includes"); // false
console.log(includes([3, 17, -1, 4, -19], 4), "includes"); // true

function sum(numeros) {
  return numeros.reduce((suma, num) => suma + num, 0);
}

console.log(sum([3, 17, -1, 4, -19]), "sum"); // 4

function findMin(numeros) {
  let min = Infinity;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < min) {
      min = numeros[i];
    }
  }
  return min;
}

console.log(findMin([3, 17, -1, 4, -19]), "findMin"); // -19

function missingNumbers(numeros) {
  let numFaltantes = [];
  menor = findMin(numeros);
  mayor = findMax(numeros);
  for (let i = menor + 1; i < mayor; i++) {
    if (!includes(numeros, i)) {
      numFaltantes.push(i);
    }
  }
  return numFaltantes;
}

console.log(missingNumbers([7, 2, 4, 6, 3, 9]), "missingNumbers"); // [5, 8]
