var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
var x = 200;
var y = 250;

noStroke();
background(207, 254, 255);
fill(30, 204, 91); // a nice froggy green!

ellipse(x, y, 200, 100); // face
ellipse(x - 50, y - 50, 40, 40); // left eye socket
ellipse(x + 50, y - 50, 40, 40); // right eye socket

fill(255, 255, 255); // for the whites of the eyes!
ellipse(x - 50, y - 50, 30, 30); // left eyeball
ellipse(x + 50, y - 50, 30, 30); // right eyeball

fill(0, 0, 0);
ellipse(x, y, 140,60);//boca

//ojos
fill(0, 0, 0);
rect(x -56, y -53,12,8,5);
rect(x +44, y -53,12,8,5);

  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
