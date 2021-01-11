class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(960,253);
    car1.addImage(c1)
    car1.scale=0.15
    car2 = createSprite(100,200);
    car2.addImage(c2)
    car2.scale=0.08
    car3 = createSprite(190,200);
    car3.addImage(c3)
    car3.scale=0.15
    car4 = createSprite(280,200);
    car4.addImage(c4)
    car4.scale=0.15
    car5 = createSprite(370,200);
    car5.addImage(c5)
    car5.scale=0.1
    car6 = createSprite(460,200);
    car6.addImage(c6)
    car6.scale=0.1
    car7 = createSprite(550,200);
    car7.addImage(c7)
    car7.scale=0.025
    car8 = createSprite(640,200);
    car8.addImage(c8)
    car8.scale=0.15
    car9 = createSprite(730,200);
    car9.addImage(c9)
    car9.scale=0.15
    car10 = createSprite(820,200);
    car10.addImage(c10)
    car10.scale=0.15
    
    cars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];
    
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      background("#c68767")
      image(t,0,0,displayWidth,displayHeight)
      fill("black")
      text(mouseX,displayWidth-100,100)
      text(mouseY,displayWidth-100,150)
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 10;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
       // index = index + 1 ; 

        //position the cars a little away from each other in x direction
        x = x + 20;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
       //y=displayHeight-100
       // cars[index-1].x = x;
      //cars[index-1].y = y;

        if (index === player.index){
          stroke(10)
          fill("red")
          ellipse(x,y,60,60)
          //text(player.name+":"+player.distance,x,y-100 )
          //cars[index - 1].shapeColor = "red";
         // camera.position.x = displayWidth/2;
        //camera.position.y = cars[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=3
      player.update();
    }
    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distance -=3
      player.update();
    }
    /*if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      cars[index-1].x +=3
      player.update();
    }
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      cars[index-1].x -=3
      player.update();
    }
    if(player.distance>4100){
      //console.log(error)
      gameState = 2
      
    }*/

    drawSprites();
  }
  end(){
    console.log("gameEnded",player.rank)
   // form.end();
  }
}
