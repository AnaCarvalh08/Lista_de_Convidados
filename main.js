// array vaziou

let convidados = [];

function enviar() {
    const nomeConvidado = document.getElementById("inputConvidado").value;
    convidados.push(nomeConvidado);
    console.log(convidados);
    document.getElementById("inputConvidado").value = "";

}

function exibir() {
    const listaConvidados = convidados.join('<br>');
    document.getElementById("pExibir").innerHTML = listaConvidados;
    console.log(listaConvidados);
}

function organizar() {
    convidados.sort();
    const listaConvidados = convidados.join('<br>');
    document.getElementById("pExibir").innerHTML = listaConvidados;
    console.log(convidados);
}

//excluir tudo
//function excluir() {
//  let nomeRemovido = convidados;
//  convidados.splice(nomeRemovido);
//}

function pesquisar() {
    const pesquisarInput = document.getElementById("pesquisarInput").value.toLowerCase();
    const resultadoPesquisa = document.getElementById("resultadoPesquisa");
    let nomeEncontrado = convidados.find(function (nome) {
        return nome.toLowerCase() === pesquisarInput;
    })
    if (nomeEncontrado) {
        resultadoPesquisa.textContent = nomeEncontrado + " ENCONTRADO NA LISTA";
    }
    else if (excluir) {
        resultadoPesquisa.textContent = pesquisarInput + " NÃO ENCONTRADO NA LISTA";
    }
    else {
        resultadoPesquisa.textContent = pesquisarInput + " NÃO ENCONTRADO NA LISTA";
    }
    document.getElementById("pesquisarInput").value = "";
}

function excluir (){
    const InputExcluir = document.getElementById("InputExcluir").value.toLowerCase();
    const index = convidados.findIndex(function(nome){
        return nome.toLowerCase() === InputExcluir;
    })

    if(index !== -1){
        convidados.splice(index, 1)
        document.getElementById("resultadoExclusao").innerHTML = InputExcluir + " excluido com sucesso"
    }
    else {
        document.getElementById("resultadoExclusao").innerHTML = InputExcluir + " nome não consta na lista"
    }
    document.getElementById("InputExcluir").value = "";
}
