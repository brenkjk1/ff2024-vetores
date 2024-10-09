// // Declaração de vetor:
// let vetor = [];

// // Adiciono por posição:
// vetor[0] = "Nome 1";
// // Adiciono na ultima posição
// vetor.push("Nome 2");

// vetor.push(prompt("Insira um valor"));

// console.log(vetor);

let numeros = [];
for (let i = 0; 1 < 5; i++) {
    let numero = prompt("Insira um número!");
    while (isNaN(numero)) {
        alert("Isso não é um número válido!")
        numero = prompt("Insira um número novamente!")
    }
    numero = parseInt(numero);
    numeros.push(numero);
}

console.log(numeros);