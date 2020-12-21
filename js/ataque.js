var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
var a = 200;
var b = 200;
var total = 100;

draw = function() {
    background(207, 254, 255);

    fill(240, 209, 36);
        triangle(
            a-total/1.8,
            a-total/13.6,
            a-total/0.9,
            a+total/1.67,
            a-total/0.89,
            a-total/1.5); // cola


    ellipse(a, b, total*10/7, total); // Cuerpo

    fill(0, 0, 0);
    ellipse(a+total/2, b-total/8, total/12, total/12);//ojo

};


  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
