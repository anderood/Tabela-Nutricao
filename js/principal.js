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
    }
    
    if( altura <= 0 || altura >= 3){
        console.log("Altura Invalida!");
        tdAltura.textContent = "Altura Inválido!"
        alturaEhValida = false;
    }
    
    if(alturaEhValida && pesoEhValido){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }else {
        tdImc.textContent = "Altura e/ou peso Inválidos!"
    }
}
