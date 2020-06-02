function setup() {
  createCanvas(1350,1400);
}

function draw() {
  background("aqua"); 
  rainDrops();
  drawSprites();
}

function rainDrops (){
  
  var drop = createSprite(200,0,20,20);
  drop.x = random(15,1350);
  drop.width = random(2,6);
  drop.height = random(20,100);
  drop.velocityY = random(2,6);
  drop.shapeColor = color(random(0,255),random(0,255),random(0,225));
 
}
