window.addEventListener("keydown", affiche, false);
window.addEventListener("keyup", mvt, false);

function affiche(evenement)
        {
			var mouvJ1=true;
			var pos1=joueur1.style.left;
			
            gauche=joueur1.offsetLeft;
            haut=joueur1.offsetTop;
            
            if(evenement.key=="d")
                {
                    joueur1.style.left=gauche+Math.random() * (20) + 1+"px";
					console.log(pos1);
					joueur1.style.backgroundColor="yellow";
					if(georgieRet==true){
						joueur1.style.left="20px";
					}
                }
			if(evenement.onkeyup=="d")
                {
					joueur1.style.backgroundColor="cyan";
                }
			
			gauche2=joueur2.offsetLeft;
            haut2=joueur2.offsetTop;

            if(evenement.code=="ArrowRight")
                {
                    joueur2.style.left=gauche2+(Math.random() * (20) + 1)+"px";
					joueur2.style.backgroundColor="yellow";
					if(georgieRet==true){
						joueur2.style.left="20px";
					}
                }
			
			
			
		}

function mvt(evenement) {
	if(evenement.key=="d")
		joueur1.style.backgroundColor="cyan";
	
	if(evenement.code=="ArrowRight")
		joueur2.style.backgroundColor="purple";
	}
                
        


