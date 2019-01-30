var tempsretourne;
var tempsAle;

function RandomNumber(){
var tempsAle = Math.floor(Math.random() * 5000) + 1000;
return tempsAle;    
};

console.log (tempsAle);

document.ready(georgie());

function georgie() {
  tempsretourne = setTimeout(retourne, tempsAle);
}

function retourne() {
	alert("TESST");
	console.log (tempsAle);
	georgie();
}