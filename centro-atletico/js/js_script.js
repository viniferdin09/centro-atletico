// MENU MOBILE

function abrirMenu() {

    const nav = document.querySelector("nav");

    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "75px";
        nav.style.right = "20px";
        nav.style.background = "white";
        nav.style.padding = "20px";
        nav.style.borderRadius = "10px";
        nav.style.zIndex = "1000";
    }

}


// DRAG AND DROP DO CAMPO TÁTICO

function allowDrop(event) {
    event.preventDefault();
}


function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}


function drop(event) {

    event.preventDefault();

    const id = event.dataTransfer.getData("text");

    const jogador = document.getElementById(id);

    if (!jogador) {
        return;
    }

    const campo = document.querySelector(".football-field");

    const rect = campo.getBoundingClientRect();

    const x = event.clientX - rect.left - 25;
    const y = event.clientY - rect.top - 25;

    jogador.style.position = "absolute";
    jogador.style.left = x + "px";
    jogador.style.top = y + "px";
    jogador.style.background = "white";
    jogador.style.color = "#0d6b3d";
    jogador.style.padding = "10px";
    jogador.style.borderRadius = "50%";
    jogador.style.zIndex = "10";

    campo.appendChild(jogador);
}


// SALVAR ESCALAÇÃO

function salvarEscalacao() {

    localStorage.setItem(
        "escalacao",
        document.querySelector(".football-field").innerHTML
    );

    alert("Escalação salva com sucesso! ⚽");

}


// CARREGAR ESCALAÇÃO

window.addEventListener("load", function () {

    const campo = document.querySelector(".football-field");

    if (!campo) {
        return;
    }

    const escalação = localStorage.getItem("escalacao");

    if (escalação) {

        const desejaCarregar =
            confirm("Deseja carregar a última escalação salva?");

        if (desejaCarregar) {
            campo.innerHTML = escalação;
        }

    }

});