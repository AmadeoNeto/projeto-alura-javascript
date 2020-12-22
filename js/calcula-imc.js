var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido){
        console.log("Peso inválido!");
        tdImc.textContent = "Peso inválido!" 
    }

    if(!alturaValida){
        console.log("Altura inválida!");
        tdImc.textContent = "Altura inválida!" 
    }

    if(pesoValido && alturaValida){
        tdImc.textContent = calculaImc(peso,altura);
    }
    else{
        paciente.classList.add("paciente-invalido");
    }

    function calculaImc(peso,altura){
        imc = peso/(altura*altura);
        return imc.toFixed(2);
    }

    function validaPeso(peso){
        return peso > 0 && peso < 1000 ;
    }

    function validaAltura(altura){
        return altura > 0 && altura < 3.0;
    }
}