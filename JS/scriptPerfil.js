/* --------------- Nome e Ícone da empresa Canto superior esquerdo --------------- */
let menuM = document.querySelector('.menuM')
let contentM = document.querySelector('.contentM')

menuM.onclick = function() {
    contentM.classList.toggle('active')
}