var tracks;
var car;
var wall;
var speed;
var weight;
var block1,block2,block3;

function setup() {
  createCanvas(1600,400);
   
  speed= random(55,90);
  weight= random(400,1500);

  car=createSprite(50, 60, 20, 20);
  car.shapeColor= "white";
  car.velocityX= speed;

    for (var i = 100; i < 600; i=i+100) 
  {
  tracks= createSprite(800,i,1600,5);
  tracks.shapeColor= "white";
    }

  for (var g = 50;  g< 600; g=g+100) 
  {
  wall= createSprite(1500,g,20,60);
  wall.shapeColor= "grey";
  }

//creating blocks
block1= createSprite(1480,150,20,20);
block1.shapeColor= "yellow";
block2= createSprite(1480,250,20,20);
block2.shapeColor= "red";
block3= createSprite(1480,350,20,20);
block3.shapeColor= "green";
}
function draw() {
  background("black");  

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX= 0;
    var deformation=0.5*weight*speed*speed/22509
      if(deformation>180){
      car.shapeColor= color(225,0,0)
      }
      if(deformation>180 && deformation>100){
      car.shapeColor= color(230,230,0)
      }
      if( deformation>100){
      car.shapeColor= color(0,255,0)
      }
    }




  drawSprites();
}