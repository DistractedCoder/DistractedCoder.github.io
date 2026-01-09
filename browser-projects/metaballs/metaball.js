var w = window.innerWidth;
var h = window.innerHeight;

var cwidth = 600;
var cheight = 400;

var wgraphics = w / 10;
var hgraphics = h / 10;

var metaballs = [];

var graphics;

function setup() {
  var c = createCanvas(w, h);
  graphics = createGraphics(wgraphics, hgraphics);
  c.id("gamecanvas");
  c.parent("sketch-holder");

  for (var i = 0; i < 30; i++)
  {
    metaballs.push(new Metaball());
  }
  
}


let c1, c2;
let colorT = 0;
let colorSpeed = 0.002;

function draw() {
    graphics.blendMode(BLEND);
    graphics.background(0);

    for (var i = 0; i < metaballs.length; i++) {
        metaballs[i].update();
        metaballs[i].show();  
    }

    graphics.filter(BLUR, 6); 
    graphics.filter(THRESHOLD);

    // smoothly interpolate between colors
    colorT += colorSpeed;
    let t = (sin(colorT) * 0.5) + 0.5;

    let fadeColor = lerpColor(
        color(57, 255, 163),
        color(255, 80, 120),
        t
    );

    graphics.blendMode(MULTIPLY);
    graphics.fill(fadeColor);
    graphics.rect(0, 0, w, h);

    image(graphics, 0, 0, w, h);

    document.title = "Metaballs FPS: " + floor(frameRate());
}






//
//  BELOW IS ALL METABALL FUNCTIONS
//


class Metaball {

    constructor() {
        this.x = 300;
        this.y = 200;
        this.r = random(10,25);
        this.vx = random(-1,1) / 3.0;
        this.vy = random(-1,1) / 3.0;
    }


    update()
    {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x > 0)
        {
            if (this.x > wgraphics + this.r)
            {
                this.x -= wgraphics + (this.r*2);
            }
        }
        else
        {
            if (this.x < -this.r)
            {
                this.x += wgraphics + (this.r*2);
            }
        }

        if (this.y > 0)
        {
            if (this.y > hgraphics + this.r)
            {
                this.y -= hgraphics + (this.r*2);
            }
        }
        else
        {
            if (this.y < -this.r)
            {
                this.y += hgraphics + (this.r*2);
            }
        }

        
    }

    show()
    {
        graphics.fill(255);
        graphics.noStroke();
        graphics.ellipse(this.x, this.y, this.r);
    }

}