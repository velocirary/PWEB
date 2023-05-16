var nome, email, comentario, resposta;

function Enviar() {
    nome = document.pesquisa.elements[0].value;
    email = document.getElementById("txtEmail").value;
    comentario = document.getElementById("txtComentario").value;
        
    if (nome == "" || nome.length < 5)
        Popup("O campo <b>nome</b> deve conter ao menos 5 caracteres.", true);

    else if (((email.indexOf("@") > -1) == false) || ((email.indexOf(".") > -1) == false))
        Popup("O endereço de email fornecido é inválido.", true);

    else if (comentario.length < 20)
        Popup("O campo <b>comentário</b> deve conter ao menos 20 caracteres.", true);

    else if (document.getElementById('rdbSim').checked != true && document.getElementById('rdbNao').checked != true)
        Popup("Responda se é a sua primeira vez nesta página.", true);

    else {
        if (document.getElementById('rdbNao').checked)
            Popup("Que bom que voltou a relizar nossa pesquisa!", false);
        else
            Popup("Volte sempre!", false);
    }

    return false;
}

function Popup(msg, erro) {
    var modal = document.getElementById("myModal");
    var label = document.getElementById("lblMensagem");
    var labelTitulo = document.getElementById("lblTitulo");
    
    if (erro)
        labelTitulo.innerHTML = "<h2>Por favor, preencha todos os campos corretamente.</h2>";
    else
        labelTitulo.innerHTML = "<h2>Pesquisa concluída com sucesso</h2>";

    label.innerHTML = msg;

    modal.style.display = "block";
}

function CloseModal() {
    if (document.getElementById("lblTitulo").innerHTML == "<h2>Pesquisa concluída com sucesso</h2>")
        location.reload();
    else
        document.getElementById("myModal").style.display = "none";
}