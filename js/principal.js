//Atribui a variavel apenas 1 paciente da querySelector informada
//var paciente = document.querySelector("#primeiro-paciente");

//Atribui a variavel, todos os pacientes da querySelectorAll informada
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    
    //Para Nao ter q alterar todas as variaveis, atribuimos a mesma a nova variavel
    var paciente = pacientes[i];
    
    var tdAltura = paciente.querySelector(".info-altura");
    var tdPeso = paciente.querySelector(".info-peso");
    var tdImc = paciente.querySelector(".info-imc");
    
    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;
    
    var alturaEhValida = true;
    var pesoEhValido = true;
    
    if( peso <= 0 || peso > 1000){
        console.log("Peso Invalido!");
        tdPeso.textContent = "Peso Inválido!"
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }
    
    if( altura <= 0 || altura >= 3){
        console.log("Altura Invalida!");
        tdAltura.textContent = "Altura Inválido!"
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }
    
    if(alturaEhValida && pesoEhValido){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }else {
        tdImc.textContent = "Altura e/ou peso Inválidos!"
    }
}


var botaoAdicionar = document.querySelector("#adicionar-paciente");

//Fica ouvindo o Evento do Botao
botaoAdicionar.addEventListener('click', function(event){

    //Informa ao evento para nao enviar os dados
    event.preventDefault();

    //Seleciona o Form
    var form = document.querySelector("#form-adiciona");

    //Atribui as variaveis ao form
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //cria um novo Elemento Tr
    var pacienteTr = document.createElement("tr");

    //Cria um novos elemento tds
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //Adiciona valores aos Tds
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    //Envia pra dentro do pacienteTr todos os valores
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    //Seleciona a Tabela
    var tabela = document.querySelector("#tabela-pacientes");

    //Envia os dados de PacienteTr pra dentro da tabela
    tabela.appendChild(pacienteTr);

    console.log(tabela);

});