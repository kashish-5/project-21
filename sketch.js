var wall ,thickness;
var bullet,speed,weight;



function setup() {
  createCanvas(800,400);

  bullet= createSprite(0, 200, 30, 5);
  bullet.shapeColor="white";

  wall=createSprite(770,200,30,70);
  wall.shapeColor="white";

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX=speed;
}

function draw() {
  background(0);
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);


    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
    console.log(damage); 

  }
 drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
 if (bulletRightEdge>=wallLeftEdge){
   return true;
 }
   return false;
}