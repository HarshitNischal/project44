var canvas, backgroundImage;
var ranks;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;


var form, player, game;

var cars, car1, car2, car3, car4, car5, car6, car7, car8, car9, car10 ;

function preload(){
c1=loadImage("among us black.png")
c2=loadImage("among us cyan.png")
c3=loadImage("among us dark blue.png")
c4=loadImage("among us dark green.png")
t=loadImage("Among us map.png ")
c5=loadImage("among us orange.png")
c6=loadImage("among us pink.png")
c7=loadImage("among us purple.png")
c8=loadImage("Red.png")
c9=loadImage("among us white.png")
c10=loadImage("among us yellow.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
  if (gameState===0)
  {
   background("red")
  }
  if(playerCount === 10){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    clear();
    background("yellow")

    game.end();
  }
}
