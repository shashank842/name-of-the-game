var fixedRect, movingRect,object1,object2,object3,object4,object5,object6;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
object1=createSprite(100,100,50,50)
object1.shapeColor="green"
object2=createSprite(200,100,50,50)
object2.shapeColor="green"
object3=createSprite(300,100,50,50)
object3.shapeColor="green"
object4=createSprite(400,100,50,50)
object4.shapeColor="green"
object5=createSprite(200,600,50,50)
object5.shapeColor="blue"
object5.velocityX=3
object6=createSprite(1000,600,50,50)
object6.shapeColor="blue"
object6.velocityX=-3



}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,object2)){
  movingRect.shapeColor="orange";
  object2.shapeColor="orange";
}
 else{
   movingRect.shapeColor="green"
   object2.shapeColor="green"
 }
 bounceOff(object5,object6) 
  drawSprites();
}
function isTouching(objectx,objecty){
  //object 1 = moving rect=x
  //object2 = fixed rect=y
  if (objectx.x - objecty.x < objecty.width/2 + objectx.width/2
    && objecty.x - objectx.x < objecty.width/2 + objectx.width/2
    && objectx.y - objecty.y < objecty.height/2 + objectx.height/2
    && objecty.y - objectx.y < objecty.height/2 + objectx.height/2) {
 return true;
}
else {
  return false;
}
}
function bounceOff(objectx,objecty){
if(isTouching(objectx,objecty)}{
objectx.velocityX=objectx.velocityX*-1
objecty.velocityX=objecty.velocityX*-1
objectx.velocityY=objectx.velocityY*-1
objecty.velocityY=objecty.velocityY*-1
}
}



