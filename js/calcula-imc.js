//Atribui a variavel apenas 1 paciente da querySelector informada
//var paciente = document.querySelector("#primeiro-paciente");

//Atribui a variavel, todos os pacientes da querySelectorAll informada
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    
    //Para Nao ter q alterar todas as variaveis, atribuimos a mesma a nova variavel
    var paciente = pacientes[i];
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;


    var tdImc = paciente.querySelector(".info-imc");
    
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if(!pesoEhValido){
        console.log("Peso Invalido!");
        tdImc.textContent = "Peso Inválido!"
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }
    
    if(!alturaEhValida){
        console.log("Altura Invalida!");
        tdImc.textContent = "Altura Inválido!"
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }
    
    //Reaproveitamento de codigo
    //Foi criado uma Função solicitando como paramento, o PEso e Altura
    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }

    
}

function calculaImc(peso, altura){

    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}


function validaPeso(peso){

    if(peso >= 0 && peso <= 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    console.log(altura);
    
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}