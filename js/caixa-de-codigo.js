function botaoAbrirCaixa() {
    var x = document.getElementById("caixa")
    var y = document.getElementById("botaoAbrirCaixa")

    if ( x.style.display == "none" ) {
        x.style.display = "block"
        y.style.display = "none"
    }
    else { x.style.display = "none" }
}

function botaoFecharCaixa() {
    var x = document.getElementById("caixa")
    var y = document.getElementById("botaoAbrirCaixa")

    if ( x.style.display == "block" ) {
        x.style.display = "none"
        y.style.display = "block"
    }
    else { x.style.display = "block" }
}

function TrocaParaR() {
    var x = document.getElementById("codigo-r")
    var y = document.getElementById("codigo-python")

    if ( x.style.display == "none") {
        x.style.display = "block"
        y.style.display = "none"
    }
    else { x.style.display = "none" }
}
function TrocaParaPython() {
    var x = document.getElementById("codigo-python")
    var y = document.getElementById("codigo-r")

    if ( x.style.display == "none") {
        x.style.display = "block"
        y.style.display = "none"
    }
    else { x.style.display = "none" }
}