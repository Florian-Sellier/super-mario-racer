var joueur1, joueur2;
window.addEventListener("load",initialisation, false);
function initialisation() {
    joueur1 = document.getElementById("joueur1");
    joueur2 = document.getElementById("joueur2");

}

var tempsretourne1;
var tempsAle1 = Math.floor(Math.random() * 5000) + 2000;

var georgieRet;
var tempsretourne2;
var tempsAle2 = Math.floor(Math.random() * 2000) + 1000;

var tempsprep;

var divGeorgie = document.getElementById( 'georgie' );
divGeorgie.style.backgroundColor = 'green';


document.ready(georgie1());
document.ready(initialisation());

function georgie1() {
  tempsretourne1 = setTimeout(retourne1, tempsAle1);
}

function georgie2() {
  tempsretourne2 = setTimeout(retourne2, 500);
}

function georgiePrep() {
  tempsprep = setTimeout(prep, tempsAle2);
}

function retourne1() {
	var tempsAle1 = Math.floor(Math.random() * 5000) + 2000;
	var tempsAle2 = Math.floor(Math.random() * 2000) + 1000;
	console.log (tempsAle1);
	console.log(georgieRet);
	georgieRet=false;
	divGeorgie.style.backgroundColor = 'green';
	georgiePrep();
}

function retourne2() {
	var tempsAle1 = Math.floor(Math.random() * 5000) + 2000;
	var tempsAle2 = Math.floor(Math.random() * 2000) + 1000;
	console.log (tempsAle1);
	console.log(georgieRet);
	georgieRet=true;
	divGeorgie.style.backgroundColor = 'red';
	georgie1();
}

function prep() {
	var tempsAle1 = Math.floor(Math.random() * 5000) + 2000;
	var tempsAle2 = Math.floor(Math.random() * 2000) + 1000;
	divGeorgie.style.backgroundColor = 'orange';
	georgie2();
}
