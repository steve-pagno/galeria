let nImg, img, indicador;
nImg = 1;
trocaImg(nImg);

//Botões de próximo e anterior
function botoes(n) {
    trocaImg(nImg += n);
}

// Controle das imagens
function imgAtual(n) {
    trocaImg(nImg = n);
}

//Trocas das imagens
function trocaImg(n) {
    img = document.getElementsByClassName("trocarImagens");
    indicador = document.getElementsByClassName("indicador");

    if (n > img.length) {
        nImg = 1;
    }
    
    if (n < 1) {
        nImg = img.length;
    }

    for (let i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }

    for (let i = 0; i < indicador.length; i++) {
        indicador[i].className = indicador[i].className.replace(" active", "");
    }

    img[nImg - 1].style.display = "block";
    indicador[nImg - 1].className += " active";
}