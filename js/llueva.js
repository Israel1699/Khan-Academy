var sketchProc = function(processingInstance) {

  with (processingInstance) {
  size(580,430);



var xPositions = [random(500)];
var yPositions = [0];
var a = 0;
var colors = [color(212, 34, 34), color(73, 189, 81),color(0, 255, 162),color(134, 20, 179),color(255, 234, 0), color(15, 125, 110)];

for (var b = 0; b < random(150); b++){
    xPositions.push (random(width));
    yPositions.push (random(height));

}
draw = function() {
    background(204, 247, 255);


    for (var i = 0; i < xPositions.length; i++) {
        noStroke();

        fill(colors[floor(random(0,5))]);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;

        if ( yPositions[i]>height   ){
            yPositions[i]=1;
        }
    }
};

    mouseClicked = function(){
        xPositions.push (mouseX);
        yPositions.push (mouseY);
    };

  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
