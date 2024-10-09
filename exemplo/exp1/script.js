let notas = [];
for (let i = 0; i < 4; i++){
    let nota = prompt(`Informe a ${i + 1} nota!`)
    nota = nota.replace(',','.');
    while (isNaN(nota) || nota.trim() === ""){
        alert("Nota inválida!")
        nota = prompt(`Informe a ${i + 1} nota novamente!`)
    }
    nota = parseFloat(nota);
    notas.push(nota);
    // notas[i] = nota;
}

let soma = 0;
let media = 0;
let quant = notas.length;
for (let m = 0; m < quant; m++) {
    soma += notas[m];    
}
media = soma/quant;

alert(`A média das notas informadas é: ${media.toFixed(2)}`)