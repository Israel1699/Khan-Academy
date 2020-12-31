document.addEventListener('keydown',function(evento){
    if(evento.keyCode == 32){
      console.log("salta");
      if(nivel.muerto == false){
      saltar();
      }
      else{
        nivel.velocidad = 6;
        nube.velocidad = 1;
        bigmoom.x = ancho + 100;
        nube.x = ancho + 100;
        nivel.puntuacion = 0;
        nivel.muerto = false;
      }
    }
});
var imgChop, imgAlgodon,imgtope,imgSuelo;
function cargaImagenes(){
  imgChop = new Image();
  imgAlgodon = new Image();
  imgtope = new Image();
  imgSuelo = new Image();
  imgChop.src ='images/chooper.png';
  imgAlgodon.src='images/684.png';
  imgtope.src='images/plab.png';
  imgSuelo.src='images/suelo5.png';
}

var ancho = 700;
var alto = 300;
var canvas,ctx;


function inicializa(){
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  cargaImagenes();
}

 function borraCanvas(){

 canvas.width = ancho;
 canvas.height = alto;
 }
 var suelo = 200;
 var movchopp ={
   y: 200,vy:0,gravedad:2,salto:28,vymax:9,saltando:false };
var bigmoom={x:ancho+100 , y:suelo-30}
var nivel = {velocidad:6,puntuacion:0,muerto:false};
var nube = { x:400, y:suelo-200,velocidad:1}
var suelog= {x:0,y:suelo-55};
 function dibujaChopper(){
      ctx.drawImage(imgChop,0,0,500,500,100,movchopp.y,80,80);
 }
 function dibujaBigMonm(){
     ctx.drawImage(imgtope,0,0,700,700,bigmoom.x,bigmoom.y,110,135);

 }
 function dibujaNube(){
  ctx.drawImage(imgAlgodon,0,0,500,500,nube.x,nube.y,120,105);
 }
 function dibujasuelo(){
  ctx.drawImage(imgSuelo,suelog.x,0,700,500,0,suelog.y,700,200);
 }
 function logicaSuelo(){
    if(suelog.x > 700){
      suelog.x = 0;
    }
    else{
      suelog.x += nivel.velocidad;
    }
 }
 function logicaBigMom(){
  if(bigmoom.x < -100){
     bigmoom.x = ancho + 100;
     nivel.puntuacion++;
  }
  else{
    bigmoom.x -= nivel.velocidad;
  }
 }
 function logicaNube(){
  if(nube.x < -100){
     nube.x = ancho + 100;
  }
  else{
    nube.x -= nube.velocidad;
  }
 }
 function saltar(){
   movchopp.saltando = true;
   movchopp.vy = movchopp.salto;
 }
 function gravedad(){
    if(movchopp.saltando == true){
      if (movchopp.y - movchopp.vy - movchopp.gravedad > suelo) {
        movchopp.saltando = false;
        movchopp.vy = 0;
        movchopp.y = suelo;

      }
      else{
      movchopp.vy -= movchopp.gravedad;
      movchopp.y -= movchopp.vy;
    }
  }
 }
 function colision(){
   //ctx.drawImage(imgChop,0,0,500,500,100,movchopp.y,80,80);
   if(bigmoom.x >= 100 && bigmoom.x <= 150){
       if(movchopp.y >= suelo-55){
          nivel.muerto = true;
          nivel.velocidad = 0;
          nube.velocidad =0;
       }
   }


 }
 function puntuacion(){
   ctx.font = "30px impact";
   ctx.fillStyle = '#555555';
   ctx.fillText(`${nivel.puntuacion}`,600,50);
   ctx.fillText('Score :',500,50);
   if (nivel.muerto == true) {
     ctx.font= "30px impact"
     ctx.fillText('GAME OVER SAIRA',240,150);
   }
 }
var FPS = 50;
setInterval(function(){
 principal();
},1000/FPS);

function principal(){
    console.log("principal");
    borraCanvas();
    gravedad();
    colision();
    logicaSuelo();
    logicaBigMom();
    logicaNube();
    dibujasuelo();
    dibujaNube();
    dibujaBigMonm();
    dibujaChopper();
    puntuacion();

}


   // Get the canvas that Processing-js will use
   var canvas = document.getElementById("mycanvas");
   // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
   var processing = new Processing(canvas, sketchProc);
