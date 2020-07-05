var botaoAdicionar = document.querySelector("#adicionar-paciente");

//Fica ouvindo o Evento do Botao
botaoAdicionar.addEventListener('click', function(event){

    //Informa ao evento para nao enviar os dados
    event.preventDefault();

    //Seleciona o Form
    var form = document.querySelector("#form-adiciona");
    

    //## Refatoramento de Codigo ##
    // //Extrai as variaveis do form
    // var nome = form.nome.value;
    // var peso = form.peso.value;
    // var altura = form.altura.value;
    // var gordura = form.gordura.value;

    var paciente = obtemPacienteDoForm(form);
    

    var pacienteTr = montaTr(paciente);
    
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMsgdeErro(erros)
        return
        
    }
    //## Refatoramento de Codigo ##
    //cria um novo Elemento Tr
    // var pacienteTr = document.createElement("tr");

    // //Cria novos elementos tds
    // var nomeTd = document.createElement("td");
    // var pesoTd = document.createElement("td");
    // var alturaTd = document.createElement("td");
    // var gorduraTd = document.createElement("td");
    // var imcTd = document.createElement("td");

    // //Adiciona valores aos Tds
    // nomeTd.textContent = nome;
    // pesoTd.textContent = peso;
    // alturaTd.textContent = altura;
    // gorduraTd.textContent = gordura;
    // imcTd.textContent = calculaImc(peso, altura);

    // //Envia pra dentro do pacienteTr todos os valores
    // pacienteTr.appendChild(nomeTd);
    // pacienteTr.appendChild(pesoTd);
    // pacienteTr.appendChild(alturaTd);
    // pacienteTr.appendChild(gorduraTd);
    // pacienteTr.appendChild(imcTd);

    //Seleciona a Tabela
    var tabela = document.querySelector("#tabela-pacientes");

    //Envia os dados de PacienteTr pra dentro da tabela
    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = '';

});

function obtemPacienteDoForm(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value, 
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente');

    
  
    // ## Refatorando codigo ##
    // var nomeTd = document.createElement("td");
    // var pesoTd = document.createElement("td");
    // var alturaTd = document.createElement("td");
    // var gorduraTd = document.createElement("td");
    // var imcTd = document.createElement("td");

    // //Adiciona valores aos Tds
    // nomeTd.textContent = paciente.nome;
    // pesoTd.textContent = paciente.peso;
    // alturaTd.textContent = paciente.altura;
    // gorduraTd.textContent = paciente.gordura;
    // imcTd.textContent = paciente.imc;


    // var nomeTd = montaTd(paciente.nome, "info-nome");
    // var pesoTd = montaTd(paciente.peso, "info-peso");
    // var alturaTd = montaTd(paciente.altura, "info-altura");
    // var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    // var imcTd = montaTd(paciente.imc, "info-imc");


    //Envia pra dentro do pacienteTr todos os valores
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}


function montaTd(dado, nomeClass){

    var td = document.createElement('td');

    td.textContent = dado;
    td.classList.add(nomeClass);

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length === 0){
        erros.push("O nome não pode ser em branco")
    }

    if(paciente.gordura.length === 0){
        erros.push("A gordura não pode ficar em Branco")
    }

    if(paciente.peso.length === 0){
        erros.push("O Peso não pode ficar em Branco")
    }

    if(paciente.altura.length === 0){
        erros.push("A Altura não pode ficar em Branco")
    }

    if(!validaPeso(paciente.peso)){
        erros.push('Peso é Inválido!')
    }

    if(!validaAltura(paciente.altura)){
        erros.push('Altura é Inválida!')
    }

    return erros;
}

function exibeMsgdeErro(erros){
    var ul = document.querySelector('#mensagens-erro');
        ul.innerHTML = "";

        erros.forEach(function(erro) {
            var li = document.createElement('li');
            li.textContent = erro;
            ul.appendChild(li);
        });
}