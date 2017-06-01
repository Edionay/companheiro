/**
 * Created by edion on 28/05/2017.
 */

$( document ).ready(function(){
    $(".button-collapse").sideNav();
    $('.modal').modal();
    $('ul.tabs').tabs();
    $('.tooltipped').tooltip({delay: 50});
});

$('.button-collapse').sideNav({
        menuWidth: 210
});


function excluirTarefa(idDaLinha) {
    const tabelaDeTarefas = document.getElementById("dados-de-tarefas");
    const linhaASerApagada = document.getElementById(idDaLinha);
    if (window.confirm("Deseja apagar a linha selecionada?")) {
        tabelaDeTarefas.deleteRow(linhaASerApagada.rowIndex);
    }
}

function incluirTarefa() {

    let tabelaDeTarefas = document.getElementById("dados-de-tarefas");
    let nome = document.getElementById("nome_do_aluno");
    let texto = document.getElementById("titulo");
    let data = document.getElementById("data-solicitacao");


    let novaTarefa= tabelaDeTarefas.insertRow(0);

    let campo1 = novaTarefa.insertCell();
    let campo2 = novaTarefa.insertCell();
    let campo3 = novaTarefa.insertCell();
    let campo4 = novaTarefa.insertCell();
    let campo5 = novaTarefa.insertCell();
    let campo6 = novaTarefa.insertCell();
    let campo7 = novaTarefa.insertCell();


    campo1.appendChild(document.createTextNode(texto.value));
    campo2.appendChild(document.createTextNode(nome.value));
    campo3.appendChild(document.createTextNode(data.value));
    campo6.appendChild(document.createTextNode('Pendente'));

    const iconeDoBotaoDetalhes = document.createElement('i');
    iconeDoBotaoDetalhes.className = "material-icons prefix";
    iconeDoBotaoDetalhes.innerText = "remove_red_eye";
    const botaoDetalhes = document.createElement('a');
    botaoDetalhes.className = "waves-effect waves-light btn pink accent-1 btn tooltipped";
    botaoDetalhes.setAttribute('data-delay', '50');
    botaoDetalhes.setAttribute('data-tooltip', 'Visualizar');
    botaoDetalhes.appendChild(iconeDoBotaoDetalhes);

    const iconeDoBotaoExcluir = document.createElement('i');
    iconeDoBotaoDetalhes.className = "material-icons prefix";
    iconeDoBotaoDetalhes.innerText = "delete";
    const botaoExcluir = document.createElement('a');
    botaoDetalhes.className = "waves-effect waves-light btn pink accent-1 btn tooltipped";
    botaoDetalhes.setAttribute('data-delay', '50');
    botaoDetalhes.setAttribute('data-tooltip', 'Visualizar');
    botaoDetalhes.appendChild(iconeDoBotaoExcluir);

    const iconeDoBotaoAssumir = document.createElement('i');
    iconeDoBotaoDetalhes.className = "material-icons prefix";
    iconeDoBotaoDetalhes.innerText = "mail";
    const botaoAssumir = document.createElement('a');
    botaoDetalhes.className = "waves-effect waves-light btn pink accent-1 btn tooltipped";
    botaoDetalhes.setAttribute('data-delay', '50');
    botaoDetalhes.setAttribute('data-tooltip', 'Assumir tarefa');
    botaoDetalhes.appendChild(iconeDoBotaoAssumir);

    campo7.appendChild(botaoDetalhes, botaoExcluir, botaoAssumir);
}

function incluirAluno() {

    let tabelaDeDiscentes = document.getElementById("dados-de-alunos");
    let nome = document.getElementById("nome_completo");
    let matricula = document.getElementById("matricula");
    let curso = document.getElementById("curso");
    let email = document.getElementById("email");
    let telefone1 = document.getElementById("telefone1");
    let telefone2 = document.getElementById("telefone2");

    let novoDiscente = tabelaDeDiscentes.insertRow(0);

    let campo1 = novoDiscente.insertCell();
    let campo2 = novoDiscente.insertCell();
    let campo3 = novoDiscente.insertCell();
    let campo4 = novoDiscente.insertCell();
    let campo5 = novoDiscente.insertCell();
    let campo6 = novoDiscente.insertCell();
    let campo7 = novoDiscente.insertCell();

    campo1.appendChild(document.createTextNode(nome.value));
    campo2.appendChild(document.createTextNode(matricula.value));
    campo3.appendChild(document.createTextNode(curso.value));
    campo4.appendChild(document.createTextNode(email.value));
    campo5.appendChild(document.createTextNode(telefone1.value));
    campo6.appendChild(document.createTextNode(telefone2.value));

    const iconeDoBotaoDetalhes = document.createElement('i');
    iconeDoBotaoDetalhes.className = "material-icons prefix";
    iconeDoBotaoDetalhes.innerText = "remove_red_eye";
    const botaoDetalhes = document.createElement('a');
    botaoDetalhes.className = "waves-effect waves-light btn pink accent-1 btn tooltipped";
    botaoDetalhes.setAttribute('data-delay', '50');
    botaoDetalhes.setAttribute('data-tooltip', 'Visualizar');
    botaoDetalhes.appendChild(iconeDoBotaoDetalhes);

    const iconeDoBotaoEmail = document.createElement('i');
    iconeDoBotaoDetalhes.className = "material-icons prefix";
    iconeDoBotaoDetalhes.innerText = "mail";
    const botaoEmail = document.createElement('a');
    botaoEmail.className = "waves-effect waves-light btn pink accent-1 btn tooltipped";
    botaoEmail.setAttribute('data-delay', '50');
    botaoEmail.setAttribute('data-tooltip', 'Visualizar');
    botaoEmail.appendChild(iconeDoBotaoEmail);

    const iconeDoBotaoExcluir = document.createElement('i');
    iconeDoBotaoDetalhes.className = "material-icons prefix";
    iconeDoBotaoDetalhes.innerText = "delete";
    const botaoExcluir = document.createElement('a');
    botaoExcluir.className = "waves-effect waves-light btn pink accent-1 btn tooltipped";
    botaoExcluir.setAttribute('data-delay', '50');
    botaoExcluir.setAttribute('data-tooltip', 'Visualizar');
    botaoExcluir.appendChild(iconeDoBotaoExcluir);

    campo7.appendChild(botaoDetalhes, botaoEmail, botaoExcluir);
}

