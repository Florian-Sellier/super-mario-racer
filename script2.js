window.addEventListener("keydown", affiche, false);
window.addEventListener("keyup", mvt, false);

function affiche(evenement)
        {
			var mouvJ1=true;
			var pos1=joueur1.style.left;
			
			if (document.body)
				{
				var posGeorgie = (document.body.clientWidth)-120;
				} 
				else
				{
				var posGeorgie = (window.innerWidth)-120;
				}
			
            gauche=joueur1.offsetLeft;
			gauche2=joueur2.offsetLeft;
            
			//Déplacement Joueur 1 + changement d'apparence lors du déplacement
            if(evenement.key=="d")
                {
					add1=Math.random() * (20) + 1;
                    joueur1.style.left=gauche+add1+"px";
					joueur1.style.backgroundColor="yellow";
					if(georgieRet==true){
						joueur1.style.left="20px";
					}
                }

			//Déplacement Joueur 1 + changement d'apparence lors du déplacement
            if(evenement.code=="ArrowRight")
                {
					add2=Math.random() * (20) + 1;
                    joueur2.style.left=gauche2+add2+"px";
					joueur2.style.backgroundColor="yellow";
					if(georgieRet==true){
						joueur2.style.left="20px";
					}
                }
			
			//Si le Joueur 1 gagne
			if ((gauche-posGeorgie)>0){
				alert("Joueur 1 gagne");
				alert("Retour au départ imminent");
				joueur1.style.left=20+"px";
				}
			
			//Si le Joueur 2 gagne
			if ((gauche2-posGeorgie)>0){
				alert("Joueur 2 gagne");
				alert("Retour au départ imminent");
				joueur2.style.left=20+"px";
				}
			
			
		}

//Retour à l'apparence normale lors du soulèvement des touches
function mvt(evenement) {
	if(evenement.key=="d")
		joueur1.style.backgroundColor="cyan";
	
	if(evenement.code=="ArrowRight")
		joueur2.style.backgroundColor="purple";
	}



