var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
var xPos = 100;
var yPos = 350;
var xsun = 350;
var ysun = 50;
draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    xPos +=2;
    yPos -=1;
    ellipse(xsun, ysun, 50, 50);
    xsun -= 2;
    ysun += 1;
};


  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
