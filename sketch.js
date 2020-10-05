var wall,car;

var speed, weight;

var deformation;

function setup() {
  createCanvas(1200,400);

  speed = random(55,90);
  weight = random(400,1500);

  wall = createSprite(1100,200,60,height/2);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;  
  

}

function draw() {
  background(255,255,255);  

  if(wall.x-car.x<(car.width+wall.width)/2){
     car.velocityX = 0;
  deformation = (0.5*weight*speed*speed)/22500;
if(deformation < 200){
car.shapeColor = color(0,255,0);
}
 if(deformation > 100 && deformation<180){
  car.shapeColor = color(230,230,0);
} 
if(deformation>180){
  car.shapeColor = color(255,0,0);
}
  }
  console.log(deformation);
  drawSprites();
}