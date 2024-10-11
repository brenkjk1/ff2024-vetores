let registros = [];

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const idade = parseInt(document.getElementById('idade').value);
    const salario = parseFloat(document.getElementById('salario').value);
    const sexo = document.getElementById('sexo').value;

    // Validações
    if (nome.split(' ').length < 2) {
        alert("O nome completo deve conter pelo menos um nome e um sobrenome.");
        return;
    }

    if (idade < 15 || idade > 119) {
        alert("A idade deve ser maior que 14 e menor que 120.");
        return;
    }

    if (salario < 1500 || salario > 15000) {
        alert("O salário deve ser entre 1500 e 15000.");
        return;
    }

    // Adiciona registro
    if (registros.length < 50) {
        registros.push({ nome, idade, salario, sexo });
        document.getElementById('form').reset();
    } else {
        alert("Limite de 50 registros atingido.");
    }

    // Exibe registros
    exibirRegistros();
});

function exibirRegistros() {
    const tabelaCorpo = document.getElementById('tabelaCorpo');
    tabelaCorpo.innerHTML = '';

    registros.forEach(registro => {
        const row = `<tr>
                        <td>${registro.nome}</td>
                        <td>${registro.idade}</td>
                        <td>${registro.salario.toFixed(2)}</td>
                        <td>${registro.sexo}</td>
                     </tr>`;
        tabelaCorpo.innerHTML += row;
    });

    document.getElementById('registros').style.display = 'table';
    bloquearCampos();
}

function bloquearCampos() {
    document.getElementById('nome').disabled = true;
    document.getElementById('idade').disabled = true;
    document.getElementById('salario').disabled = true;
    document.getElementById('sexo').disabled = true;
    document.getElementById('submitBtn').innerText = "Recomeçar";
    document.getElementById('submitBtn').onclick = recomeçar;
}

function recomeçar() {
    registros = [];
    document.getElementById('tabelaCorpo').innerHTML = '';
    document.getElementById('registros').style.display = 'none';
    document.getElementById('form').reset();
    document.getElementById('form').querySelectorAll('input, select').forEach(el => el.disabled = false);
    document.getElementById('submitBtn').innerText = "+";
    document.getElementById('submitBtn').onclick = null;
}