let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#duvida")
let nomeOk = false
let emailOk = false
let duvidaOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {

    let txtNome = document.querySelector("#txtNome")

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {

    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".com") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
        emailOk = false
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaDuvida() {

    let txtDuvida = document.querySelector("#txtDuvida")

    if (duvida.value.length >= 100) {
        txtDuvida.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtDuvida.style.color = "red"
        txtDuvida.style.display = "block"
        duvidaOk = false
    } else {
        duvidaOk = true
        txtDuvida.style.display = "none"
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && duvidaOk == true) {
        alert("Formulário enviado com Sucesso!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar...")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "350px"
    mapa.style.height = "250px"
}