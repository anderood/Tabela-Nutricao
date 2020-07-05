var buscaPacientes = document.querySelector('#busca-pacientes');

buscaPacientes.addEventListener('click', function(){
    
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes/1');

    xhr.addEventListener('load', function(){

        var erroAjax = document.querySelector('#erroAjax');
        if(xhr.status == 200){

            
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove('invisivel');
        }
        

    });
    xhr.send();
});