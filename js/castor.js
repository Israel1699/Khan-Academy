var bee;
var grass;
var spider;
var currentScene;
var separation = 100;
var large = 200;
var state;
var range = 4;

const init = function(pro){
    with (pro) {
        size(400,400);
        fill(220, 0, 55);
        frameRate(30);
        background(255,255,255);
    }
};

function drawAfter(pro, callback){
    bee = pro.loadImage("./imgages/bee.png");
    grass = pro.loadImage("./imgages/grass.png");
    spider = pro.loadImage("./imgages/spider.png");
    setTimeout(() => {
        callback(bee, 200, 100, 40, 40)
        callback(spider, 220, 70, 40, 40)
    }, 500);
}

var sketchProc = function(processingInstance) {

    with (processingInstance) {
        init(processingInstance)
        drawAfter(processingInstance, image);
        /**
         * Bloque de la clase Button, constructor y metodos
         *
         */
        class Button{
            constructor(config){
                this.x = config.x || 0;
                this.y = config.y || 0;
                this.width = config.width || 80;
                this.height = config.height || 50;
                this.label = config.label || "Click";
                this.color = config.color || color(207, 85, 85);
                this.onClick = config.onClick || function() {};
            };
            //draw the button
            draw (str) {
                if(str)
                    this.label=str;

                if (this.isMouseInside() && mousePressed) {
                    fill(255, 255, 255);
                }
                else {
                    fill(this.color);
                }
                rectMode(CENTER);
                rect(this.x, this.y, this.width, this.height, 5);
                fill(0, 0, 0);
                textSize(19);
                textAlign(CENTER, CENTER);
                text(this.label, this.x, this.y);
            };
            //check if mouse cursor is inside the button
            isMouseInside () {
                return mouseX > this.x-this.width/2 &&
                       mouseX < (this.x + this.width/2) &&
                       mouseY > this.y - this.height/2 &&
                       mouseY < (this.y + this.height/2);
            };
            //handle mouse clicks for the button
            handleMouseClick () {
                if (this.isMouseInside()) {
                    this.onClick();
                }
            };
        };
        /**
         * Bloque de la clase Beaver, es el personaje de l juego
         *
        */
        class Beaver{
            constructor(x, y){
                this.x = x;
                this.y = y;
                this.img = bee;
                this.sticks = 0;
                this.level = 1;
            }
            draw() {
                fill(255, 0, 0);
                this.y = constrain(this.y, 0, height-100);
                image(this.img, this.x, this.y, 40, 40);
            };
            hop() {
                //this.img = getImage("creatures/Hopper-Jumping");
                this.y -= 5;
            };
            fall() {
                //this.img = getImage("creatures/Hopper-Happy");
                this.y += 5;
            };
            checkForStickGrab(stick) {
                if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
                    (stick.y <= this.y && this.y  <= (stick.y + large))) {
                    stick.x = -400;
                    this.sticks+=10;
                }
            };
            checkForSpiderTouch(spi) {
                if ((spi.x >= this.x && spi.x <= (this.x + 40)) &&
                    (spi.y >= this.y && spi.y <= (this.y + 40))) {
                    //stick.x = -400;
                    this.sticks-=1;
                }
            };

        }
        class Spider{
            constructor(x, y){
                this.x = x;
                this.y = y;
                this.img = spider;
                this.sticks = 0;
                this.level = 1;
            }
            up() {
                this.y -= 10;
                this.x -= 3;
                if(this.x<0)
                    this.x=400;
            };
            down() {
                this.y += 10;
                this.x -= 3;
                if(this.x<0)
                    this.x=400;
            };
            draw() {
                fill(255, 0, 0);
                stroke(0,0,0);
                this.y = constrain(this.y, 0, height-100);
                image(this.img, this.x, this.y, 40, 40);
                line(this.x+20, 0, this.x+20, this.y);
            };
        }
        /**
         * Bloque de la clase Stick, el elemento que da puntos */
        class Stick{
            constructor(x, y) {
                this.x = x;
                this.y = y;
            };
            draw() {
                fill(89, 71, 0);
                //rectMode(CENTER);
                //rect(this.x, this.y, 5, 40);
                rect(this.x, 0, 5, this.y);
                rect(this.x, this.y+large, 5, height);
            };
        };
        /**
         * Bloque de declaracion de variables
         */
        var beaver = new Beaver(200, 300);
        var spidy = new Spider(400,200);
        var sticks = [];
        for (var i = 0; i < 5; i++) {
            sticks.push(new Stick(i * separation + 300, random(20, 260)));
        }

        var grassXs = [];
        for (var i = 0; i < 25; i++) {
            grassXs.push(i*20);
        }
        var btn1 = new Button({
            x: 340,
            y: 340,
            width: 100,
            height: 30,
            color: color(250,100,250),
            label:"Comenzar",
            onClick: function() {
                //if(currentScene === 1)
                currentScene = 2;
            }
        });

        /**
         * Bloque de escenas
         */
        var drawScene1 = function() {
            currentScene = 1;
            background(235, 247, 255);
            fill(0, 85, 255);
            textSize(20);
            text("The bee game, do you want try to save her?", 10, height/2);
        };

        var drawScene3 = function() {
            currentScene = 3;
            background(227, 254, 255);
            fill(130, 79, 43);
            rectMode(CORNER);
            rect(0, height*0.90, width, height*0.10);

            for (var i = 0; i < grassXs.length; i++) {
                image(grass, i*20, height*0.85, 20, 20);

            }
            if(state){
                text("YOU WIN!!!!", 100, 200);
                btn1.draw("Next Level");
                large -= 20;
                separation -= 10;
                range*=2;
                beaver.level++;
            }
            else{
                text("YOU lose!!!!", 100, 200);
                btn1.draw("Otra vez");
            }
            beaver.sticks = 0;
            sticks = [];
            for (var i = 0; i < range; i++) {
                sticks.push(new Stick(i * separation + 300, random(20, 260)));
            }

        };

        draw = function() {

            if(currentScene === 2 )
            {
                // static
                background(227, 254, 255);
                fill(130, 79, 43);
                rectMode(CORNER);
                rect(0, height*0.90, width, height*0.10);
                //dibujo de pasto
                for (var i = 0; i < grassXs.length; i++) {
                    image(grass, grassXs[i], height*0.85, 20, 20);
                    grassXs[i] -= 1;
                    if (grassXs[i] <= -20) {
                        grassXs[i] = width;
                    }
                }
                //dibujo de sticks
                for (var i = 0; i < sticks.length; i++) {
                    sticks[i].draw();
                    beaver.checkForStickGrab(sticks[i]);
                    sticks[i].x -= 1;
                }
                beaver.checkForSpiderTouch(spidy);
                //estadisiticas
                textSize(18);
                text("Score: " + beaver.sticks, 40, 30);
                text("Level: " + beaver.level, 40, 50);
                //evaluacion al final del juego
                if (beaver.sticks/sticks.length/10 >= 0.95) {
                    textSize(36);
                    text("YOU WIN!!!!", 100, 200);
                    state = true;
                    drawScene3();
                }
                else if(sticks[sticks.length-1].x<0)//checar aqui porque se pueden comer la ultima creo que si por  que si se la come es -400
                {
                    textSize(36);
                    text("YOU lose!!!!", 100, 200);
                    state = false;

                    drawScene3();
                }
                //control de la abeja
                if (keyPressed && keyCode === 0) {
                    beaver.hop();
                } else {
                    beaver.fall();
                }
                //control de la araña
                if(frameCount%3===0){
                    if (round(random(0,1))) {
                        spidy.up();
                    } else {
                        spidy.down();
                    }
                }
                beaver.draw();
                spidy.draw();
            }
        };

        mouseClicked = function() {
            btn1.handleMouseClick();
            //btn2.handleMouseClick();
        };

        drawScene1();
        btn1.draw();

    }
};

   // Get the canvas that Processing-js will use
   var canvas = document.getElementById("mycanvas");
   // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
   var processing = new Processing(canvas, sketchProc);
