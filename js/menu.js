function botaoMenuTransf(x) {
    x.classList.toggle('transf')
}

function botaoMenuConteudo() {
    var x = document.getElementById("conteudo")
    if (x.style.display == "block"){
        x.style.display = "none"
    }
    else { x.style.display = "block" }
}