let letras = [];

for (let i = 0; i < 10; i++) {
    let letra = prompt(`Digite a ${i + 1}ª letra!`);
    while (!isNaN(letra) || letra.trim() == '' || letra.length !== 1) {
        alert("Letra inválida!");
        letra = prompt(`Digite a ${i + 1}ª letra novamente!`)
    }
    letras.push(letra);
}

let msg = "";
let = quantidade = 0;
for (let j = 0; j < letras.length; j++) {
    let letraLida = letras[j].toUpperCase();
    let vgs = ["A", "E", "I", "O", "U"];
    if (!(vgs[0] === letraLida) &&
        !(vgs[1] === letraLida) &&
        !(vgs[2] === letraLida) &&
        !(vgs[3] === letraLida) &&
        !(vgs[4] === letraLida)) {
        msg += letras[j] + " ";
        quantidade++;
    }

}

alert(`A quantidades de consoantes é ${quantidade} e as consoantes são elas: ${msg}`);