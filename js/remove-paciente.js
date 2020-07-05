var pacientes = document.querySelectorAll('.paciente');

var tabela = document.querySelector('#tabela-paciente');

tabela.addEventListener('dblclick', function(event){

    //adiciona uma classe no evento q será removido
    event.target.parentNode.classList.add('fade-out');
    
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);

});