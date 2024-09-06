function desglosarString(string, tipoletra) {
  let letras = [...string];
  let letrasFiltradas = letras.filter((letra) => {
    if (tipoletra === "vocales") {
      return "aeiou".includes(letra);
    } else if (tipoletra === "consonantes") {
      return !"aeiou".includes(letra);
    }
  });
  return letrasFiltradas.length;
}
console.log(desglosarString("murcielagos", "vocales"), "desglosarString"); //5
console.log(desglosarString("murcielagos", "consonantes"), "desglosarString"); //6

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9), "twoSum"); // [0, 1]
console.log(twoSum([3, 2, 4], 6), "twoSum"); // [1, 2]

function conversionRomana(string) {
  const romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const numerosArabigos = [...string].map((num, i, arr) => {
    const valorActual = romanos[num];
    const valorSiguiente = romanos[arr[i + 1]];
    return valorSiguiente && valorActual < valorSiguiente ? -valorActual : valorActual;
  });

  return numerosArabigos.reduce((suma, num) => suma + num);
}

console.log(conversionRomana("III"), "conversionRomana"); // 3
console.log(conversionRomana("XIV"), "conversionRomana"); // 14
console.log(conversionRomana("MMXXIV"), "conversionRomana"); // 2024
console.log(conversionRomana("MXMVII"), "conversionRomana"); // 1997