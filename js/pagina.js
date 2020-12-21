var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
background(186, 145, 20); // wooden table
ellipse(200, 200, 350, 350); // plate
ellipse(200, 200, 300, 300);
fill(252, 233, 138);
triangle(190,60,110,295,280,295);//Pizza

//Peperoni
fill(250, 10, 10);
ellipse(190,135,40,40);
ellipse(175,200,45,45);
ellipse(220,250,50,50);
//orilla
fill(242, 179, 53);
ellipse(196,297,171,14);
//Piña
fill(247, 255, 3);
rect(141,258,10,20,9);
rect(194,160,10,20,9);
rect(170,230,10,20,9);
rect(248,264,10,20,9);
rect(214,189,10,20,9);


  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
