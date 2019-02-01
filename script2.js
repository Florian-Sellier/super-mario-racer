window.addEventListener("keydown", affiche, false);

function affiche(evenement)
        {
			var mouvJ1=true;
			var pos1=joueur1.style.right;
			
            gauche=joueur1.offsetLeft;
            haut=joueur1.offsetTop;
            if(evenement.key=="q")
                {
                    joueur1.style.left=gauche-Math.random() * (10) + 1+"px";
					console.log(georgieRet);
					if(georgieRet==true){
						joueur1.style.left="20px";
					}
                }
            else if(evenement.key=="d")
                {
                    joueur1.style.left=gauche+Math.random() * (10) + 1+"px";
					console.log(pos1);
					if(georgieRet==true){
						joueur1.style.left="20px";
					}
                }
             else if(evenement.key=="z")
                {
                    joueur1.style.top=haut-Math.random() * (10) + 1+"px";	
					if(georgieRet==true){
						joueur1.style.left="20px";
					}
                }
            else if(evenement.key=="s")
                {
                    joueur1.style.top=haut+Math.random() * (10) + 1+"px";
					if(georgieRet==true){
						joueur1.style.left="20px";
					}
			
                }
			
			gauche2=joueur2.offsetLeft;
            haut2=joueur2.offsetTop;
            if(evenement.code=="ArrowLeft")
                {
                    joueur2.style.left=gauche2-(Math.random()*(10)+1)+"px";
					if(georgieRet==true){
						joueur2.style.left="20px";
					}
                }
            else if(evenement.code=="ArrowRight")
                {
                    joueur2.style.left=gauche2+(Math.random() * (10) + 1)+"px";
					if(georgieRet==true){
						joueur2.style.left="20px";
					}
                }
             else if(evenement.code=="ArrowUp")
                {
                    joueur2.style.top=haut2-Math.random() * (10) + 1+"px";
					if(georgieRet==true){
						joueur2.style.left="20px";
					}
                }
            else if(evenement.code=="ArrowDown")
                {
                    joueur2.style.top=haut2+Math.random() * (10) + 1+"px";
					if(georgieRet==true){
						joueur2.style.left="20px";
					}
                }
			
			
			
		}

function test(evenement) {
        }


