var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,70,70)
}


function draw() 
{
  background("black");
  if(keyDown("UP_ARROW")) 
  {
    box.velocityY=-1
  }
  if(keyDown("DOWN_ARROW"))
  {
    box.velocityY=1
  }
  if(keyDown("RIGHT_ARROW"))
  {
    box.velocityX=1
  }
  if(keyDown("LEFT_ARROW"))
  {
    box.velocityX=-1
  }
  drawSprites();
 
}




