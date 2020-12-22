var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){

    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var paciente = getFormPaciente(form);
    erros = validaPaciente(paciente)

    if(erros.length > 0){
        console.log("brhu")
        exibirErros(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    limpaMensagensErro();
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    
    tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function getFormPaciente(form){
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
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    erros = []

    if (!validaPeso(paciente.peso)){
        erros.push("Peso inválido!");
    }
    if (!validaAltura(paciente.altura)){
        erros.push("Altura inválida!");
    }

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser nulo!")
    }
    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser nula!")
    }
    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser nulo!")
    }
    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser nula!")
    }

    return  erros;
}

function exibirErros(erros){
    limpaMensagensErro();
    var ul = document.querySelector("#mensagens-erro");
    
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function limpaMensagensErro(){
    ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
}