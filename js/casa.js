var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
background(125, 255, 255);

fill(56, 8, 8);
for(var x = 60; x < 305; x += 34){
    for(var y = 147; y < 378; y += 10){
        rect(x,y,40,9);
    }
}

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);


fill(120, 80, 19);
rect(180, 294, 40, 77);

pushStyle();
stroke(0);strokeWeight(10);
point(212,336);
popStyle();

fill(255, 255, 0);
for(var x=80; x<300; x+=63){
        rect(x,170,50,50);
}

var grass = getImage("../images/Hopper-Happy.png");
var bush = getImage("cute/TreeShort");
for (var i=0; i<400; i+=40){
    image(grass,i,360,40,40);
    if((i/40)%3===0){
         image(bush,i,360,40,40);
    }
}




  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
