var joueur1, joueur2;

window.addEventListener("load",initialisation, false);
function initialisation() {
    joueur1 = document.getElementById("joueur1");
    joueur1.addEventListener("click",test,false);
    joueur2 = document.getElementById("joueur2");
    joueur2.addEventListener("click",test,false);
}

function changeBGImage(Image){
    if (document.body){
    document.body.style.backgroundImage = "url('IMG/"+Image+"')";
    }
}