var faturamentoDiario = [785, 255, 0, 0, 588, 1001, 255.4, 857, 874, 0, 0];

Array.min = function (array) {
  return Math.min.apply(Math, array);
};

Array.max = function (array) {
  return Math.max.apply(Math, array);
};

function calcularMediaAnual(array) {
    let filtrado = array.filter(faturamento => faturamento > 0);
    let soma = filtrado.reduce((total, valor) => total + valor, 0);
    return soma / filtrado.length;
}

function contarDiasAcimaDaMedia(array, mediaAnual) {
    return array.filter(faturamento => faturamento > mediaAnual).length;
}

let mediaAnual = calcularMediaAnual(faturamentoDiario);
let diasAcimaDaMedia = contarDiasAcimaDaMedia(faturamentoDiario, mediaAnual);

console.log("Menor Valor: R$", Array.min(faturamentoDiario));
console.log("Maior Valor: R$", Array.max(faturamentoDiario));
console.log("Média: R$", mediaAnual);
console.log('Dias com faturamento acima da média anual:', diasAcimaDaMedia);


