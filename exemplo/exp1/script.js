let listaSalarios = [];
for (let i = 0; i < 5; i++) {
    //leitura do salário em String
    let salarioString = prompt("Informe o Salario: ");
    //conversão do salário de string para float (número decimal)
    let salario = parseFloat(salarioString);
    //insere na lista (vetor)
    listaSalarios.push(salario);
}

let mensagem = "Salarios Líquidos: \n";

for (let j = 0; j < listaSalarios.length; j++) {

    // F1: 
    // desconto = salariobruto x 12/100 ;
    // salarioliquido = salariobruto - desconto 

    // F2: 100-12 = 88 
    // salarioliquido =  salariobruto X 88/100;

    let salLiquido =  listaSalarios[j] - (listaSalarios[j] * (12/100)); 
    //let salLiquido = listaSalarios[j] * (88 / 100);

    mensagem += "R$ " + salLiquido.toFixed(2) + "\n";
}
alert(mensagem);