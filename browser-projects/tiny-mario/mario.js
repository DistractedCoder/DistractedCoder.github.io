var canvasScale = 1;
var frameDelay = 0;

var marioX = 2;
var marioY = 0; //negative off top, 16 dead
var jumpHeight = 10;
var jumpTime = 0;
var jumping = false;

var levelWidth = 0;

//                 sky       cloud     bush                         brick
var palettes = ["#8987ff","#ffffff","#46c463","","","","","","","","#c84c0c"];

var currentLevelData = 0;

var level1Data = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,10,10,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
    [0,0,0,0,0,10,10,0,0,0,0,2,2,2,0,0],
    [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
    [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
]

function setup() {
    createCanvas(16 * canvasScale, 16 * canvasScale);


    currentLevelData = level1Data;

    levelWidth = currentLevelData[0].length - 1; //MINUS 1 because zero based
    
    background("#ffffff");

    drawLevel();

    drawMario();

    //drawGrid();
    frameRate(17);
}

function draw()
{
    //delay global game speed
    
    // if (frameDelay != 0)
    // {
    //     if (frameDelay != 3)
    //     {
    //         frameDelay ++;
    //         return;
    //     }
    //     else
    //     {
    //         frameDelay = 0;
    //     }
    // }
    // frameDelay++;


    //clear screen
    background("#ffffff");

    drawLevel();

    updateMario();
    drawMario();



    updateFavicon();


    //drawGrid();
    //$("#fps").html(frameRate().toFixed(2));
}

function drawLevel()
{
    noStroke();

    for (var y = 0; y < 16; y++)
    {
        for (var x = 0; x < 16; x++)
        {
            fill(palettes[currentLevelData[y][x]]);

            rect(x*canvasScale, y*canvasScale, canvasScale, canvasScale);
        }
    }
}

function updateMario()
{
    //gravity
    if (jumping == false) //if not jumping
    {
        marioY++;
        if (marioY >= 0 || marioY <= 15) //in level height
        {
            if (currentLevelData[marioY][marioX] > 9)
            {
                marioY--;
            }
        }
    }
    else
    {
        marioY--;
        jumpTime++;
        if (jumpTime >= jumpHeight)
        {
            jumping = false;
        }
        if (marioY >= 0 || marioY <= 15) //in level height
        {
            if (currentLevelData[marioY][marioX] > 9)
            {
                marioY++;
                jumping = false;
            }
        }
    }

    handleInputs();
}

function drawMario()
{
    //draw mario
    fill("#d82800");

    rect(marioX*canvasScale, marioY*canvasScale, canvasScale, canvasScale);
}


function handleInputs()
{
    /*
arrowDown
arrowLeft
arrowRight
arrowUp

    */
    
    if (keyboard.pressing("arrowLeft"))
    {
        if (marioX != 0)
        {
            if (currentLevelData[marioY][marioX-1] <= 9)
            {
                marioX--;
            }
        }
    }
    if (keyboard.pressing("arrowRight"))
    {
        if (marioX != levelWidth)
        {
            if (currentLevelData[marioY][marioX+1] <= 9)
            {
                marioX++;
            }
        }
    }
    if (keyboard.pressing("x"))
    {
        if (!jumping)
        {
            if (marioY <= 14)
            {
                if (currentLevelData[marioY+1][marioX] > 9)//grounded
                {
                    jumping = true;
                    jumpTime = 0;
                }
            }
        }
        if (jumping)
        {
            jumpTime++;
        }
    }
    if (keyboard.released("x"))
    {
        jumping = false;
    }

}


function drawGrid()
{
    //draw grid
    noFill();
    stroke(0,0,0,15);
    for (var y = 0; y < 16; y++)
    {
        for (var x = 0; x < 16; x++)
        {
            rect(x*canvasScale, y*canvasScale, canvasScale, canvasScale);
        }
    }
}


function updateFavicon() {
    // Get the data URL of the canvas
    var canvas = document.getElementById('defaultCanvas0');
    var dataURL = canvas.toDataURL('image/png');

    // Create a new favicon link element
    var faviconLink = $('<link rel="icon" type="image/png">');
    faviconLink.attr('href', dataURL);

    // Remove existing favicon link and add the new one
    $('head').find('link[rel="icon"]').remove();
    $('head').append(faviconLink);
}