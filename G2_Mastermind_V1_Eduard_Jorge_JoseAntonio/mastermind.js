var k=1;
var color;
var aposicion;
var apuesta=[];

window.onload=function(){

	colores();


}

	var colors=["rojo","verde","negro","azul_claro","naranja","rosa","amarillo","azul"];
	var aleatorio=[];
	var colore;


	function colores(){
	
		for (var i =0; i <4; i++) {
		x=Math.floor(Math.random() * 8);
		aleatorio.push(colors[x]);
		//document.getElementById("random").innerHTML=aleatorio;
	}

}

	function escollir_color(esc){
			if(apuesta.length<4){
			apuesta.push(colors[esc]);
			pintar();
		}
		if (apuesta.length== 4){pintar();}	
		
			
	}
	function pintar(){ //habia apuestas[i], no apuesta[i] i calilla_negro, no cailla_negra
		for (var i = 0; i < 4; i++) {
			if(apuesta[i]=="rojo"){
				document.getElementById("fila"+ k + i ).src="imagenes/casilla_roja.png";
			}else if(apuesta[i]=="verde"){
				document.getElementById("fila"+ k + i ) .src="imagenes/casilla_verde.png";
			}else if(apuesta[i]=="negro"){
				document.getElementById("fila"+ k + i ).src="imagenes/casilla_negra.png";
			}else if(apuesta[i]=="azul_claro"){
				document.getElementById("fila"+ k + i ).src="imagenes/casilla_azul_claro.png";
			}else if(apuesta[i]=="naranja"){
				document.getElementById("fila"+ k + i ).src="imagenes/casilla_naranja.png";
			}else if(apuesta[i]=="rosa"){
				document.getElementById("fila"+ k + i ).src="imagenes/casilla_rosa.png";
			}else if(apuesta[i]=="amarillo"){
				document.getElementById("fila"+ k + i ).src="imagenes/casilla_amarilla.png";	
			}else if(apuesta[i]=="azul"){
				document.getElementById("fila"+ k + i ).src="imagenes/casilla_azul.png";	
			}			

		
		}
	}

	var verificaciones=[];
	var posicion_correcta=0;


	function compara(){
		document.getElementById("visor").innerHTML="";
		verificaciones=[]
		for(i=0;i<4;i++){
				posicio=0;colore=0;
			for (j=0;j<aleatorio.length;j++){

				if (apuesta[i]==aleatorio[j]){
				
				
					if(i==j){posicio=1;}
					else{colore=1; }
			
				}
			//document.getElementById("visor").innerHTML=document.getElementById("visor").innerHTML+"color correcte, en correcte possició<br>";
			//document.getElementById("visor").innerHTML=document.getElementById("visor").innerHTML+"color correcte, en dolenta possició<br>";
			}
		
			//verificaciones=[];
		
				if(posicio==1){
					verificaciones.push("aposicion");
					posicion_correcta++;
					
					//console.log("posicion")
					
				}
				if (posicio==0 && colore==1){
					verificaciones.push("color");
				
					
				}
				
				verificaciones.sort();

				for (var pepe = 0; pepe < verificaciones.length; pepe++) {
					//console.log(pepe)
					if (verificaciones[pepe]=="aposicion") {
						document.getElementById("fila1"+ k + pepe ).src="imagenes/color_posicion.png";
					}else if (verificaciones[pepe]=="color") {
						document.getElementById("fila1"+ k + pepe ).src="imagenes/casilla.png";
					}
					
				}
			
			}
		
		if(posicion_correcta==4){
						location.href = 'ganar.html';
						

				}else if (k>7) {
					location.href = 'gameover.html';
				}else{
					k++;
					i=0;
					apuesta=[];
					aposicion=0;
					color=0;
					posicion_correcta=0;
				}	
	}
	function rejugar(){
		location.reload();
	}

	
	
	
	