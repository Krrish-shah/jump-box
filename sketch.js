var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1=createSprite(750,600,100,40)
    block1.shapeColor='red'
    block2=createSprite(600,600,100,40)
    block2.shapeColor='pink'
    block3=createSprite(450,600,100,40)
    block3.shapeColor='yellow'
    block4=createSprite(300,600,100,40)
    block4.shapeColor='blue'
    ball=createSprite(random(30,770),200,20,20)
    ball.velocityX=5
    ball.velocityY=10


    //create box sprite and give velocity

}

function draw() {
    edges=createEdgeSprites()
    ball.bounceOff(edges)
    background(rgb(169,169,169));
    drawSprites()
    //create edgeSprite



    //add condition to check if box touching surface and make it box
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor='red'
    }
    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor='pink'
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor='yellow'
}
if(block4.isTouching(ball) && ball.bounceOff(block4)){
    ball.shapeColor='blue'
    ball.velocityX=0
    ball.velocityY=0
}
}