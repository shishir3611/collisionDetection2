var fixedRect,movingRect;
var me,you,he,she;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400,400,50,100);
  movingRect = createSprite(100,100,100,50);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor="green";
  
  me = createSprite(100,100,50, 100);
  me.shapeColor = 'chocolate';
  you = createSprite(200,100,50, 100);
  you.shapeColor = 'chocolate';
  he = createSprite(300,100,50, 100);
  he.shapeColor = 'chocolate';
  she = createSprite(400,100,50, 100);
  she.shapeColor = 'chocolate';
  
}

function draw() {
  background(0);  
  movingRect.y = mouseY;
  movingRect.x = mouseX;

  //console.log(movingRect.x - fixedRect.x);
  //console.log(movingRect.width/2 + fixedRect.width/2);

  if (itIsTouching(movingRect, he)){
    he.shapeColor = "red";
    he.x = 300;
    he.y = 300;
    movingRect.shapeColor="red";
  }else{
    he.shapeColor = "chocolate";
    movingRect.shapeColor="green";
  }

  drawSprites();
}
