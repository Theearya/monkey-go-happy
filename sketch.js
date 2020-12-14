
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,50,50)
  monkey.addAnimation('running',monkey_running)
  monkey.scale=0.1
  ground=createSprite(200,350,800,20)
  ground.velocityX=-3
  FoodGroup=new Group();
  obstaclesGroup=new Group();
  bananaGroup=new Group();
}


function draw() {
background('cyan')
  if(ground.x<0){
    ground.x=300
  }
  if(keyDown('space')&&monkey.y>250){
    monkey.velocityY=-10
  }
  monkey.velocityY=monkey.velocityY+0.5
  monkey.collide(ground)
  spawnBananas();
  spawnObstacles();
  if(obstaclesGroup.isTouching(monkey)){ obstaclesGroup.setVelocityXEach(0); obstaclesGroup.setLifetimeEach(-1); 
bananaGroup.setVelocityXEach(0); 
bananaGroup.setLifetimeEach(-1); 
ground.velocityX=0;
gameState=0;
                                       }
drawSprites();
  
}
function spawnBananas(){
  if(frameCount%80===0){
   banana=createSprite(400,200,20,20)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-3
    banana.y=Math.round(random(150,200))
    banana.lifetime=200
    FoodGroup.add(banana)
    bananaGroup.add(banana)
  }
}
function spawnObstacles(){
  if(frameCount%200===0){
   obstacle=createSprite(400,320,20,20)
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.1
    obstacle.velocityX=-3
    obstacle.lifetime=200
    obstaclesGroup.add(obstacle)
    
}
}



