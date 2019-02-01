var joueur1, joueur2;
window.addEventListener("load",initialisation, false);
function initialisation() {
    joueur1 = document.getElementById("joueur1");
    joueur2 = document.getElementById("joueur2");
    joueur2.addEventListener("click",test,false)
}

var tempsretourne1;
var tempsAle1 = Math.floor(Math.random() * 5000) + 1000;


var tempsretourne2;
var tempsAle2 = Math.floor(Math.random() * 2000) + 1000;


var divGeorgie = document.getElementById( 'georgie' );
divGeorgie.style.backgroundColor = 'green';


document.ready(georgie1());

function georgie1() {
  tempsretourne1 = setTimeout(retourne1, tempsAle1);
}

function georgie2() {
  tempsretourne2 = setTimeout(retourne2, tempsAle2);
}

function retourne1() {
	var tempsAle1 = Math.floor(Math.random() * 5000) + 1000;
	console.log (tempsAle1);
	divGeorgie.style.backgroundColor = 'green';
	georgie2();
}

function retourne2() {
	var tempsAle2 = Math.floor(Math.random() * 5000) + 1000;
	console.log (tempsAle1);
	divGeorgie.style.backgroundColor = 'red';
	georgie1();
}
