const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (Event) => {
    Event.preventDefault();

    //Verifica se o nome está vazio.//
    if(nameInput.value === "") {
        alert('Por favor, preencha seu Nome.');
        return;
    }
//Se todos os campos estiver corretamente preenchidos, envie o formulário.
form.submit()
});

//Função que valida e-mail
function isEmailValid(email) {
    //Cria uma regex para validar email
    const emailRegex = new RegExp(
        //usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\./
    )
}


function toggleMenu() {
    var items = document.getElementById("itens");
    items.classList.toggle("active");
}
