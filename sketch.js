var database,position;
var balloon,balloonImg;
var b2, b2Img;
var bgImg,bg;
var score = 0;
function preload(){
  bgImg=loadImage("Bg.png")
  balloonImg=loadImage("Hot Air Ballon.png");
  b2Img=loadImage("Hot Air Ballon-02.png");
}
function setup() {

  createCanvas(700,500);

  database = firebase.database();
  
  balloon=createSprite(90,350,20,20);
  balloon.addImage(balloonImg);
  balloon.scale=0.5;

  
 
  var balloonPosition=database.ref('balloon/height');
  balloonPosition.on('value',readHeight);
}

function draw() {
  background(bgImg);  
 
textSize(15);
fill("black")
  text("Use the Arrow Keys to move the Hot Air Balloon",40,40);
  if(keyDown(UP_ARROW)){
    balloon.y=balloon.y-10;
   // balloon.addAnimation("Hot Air Ballon",b2);
   balloon.scale=balloon.scale-0.01;
  }
  else if (keyDown(DOWN_ARROW)){
    balloon.y=balloon.y+10;
    balloon.scale=balloon.scale+0.01;
  
  }
 else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+10;
  }
  else if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10;
  }
  
  
  drawSprites();
}

function updateHeight(x,y){
 database.ref('balloon/height').set({
  'x':height.x+x,
   'y':height.y+y
 })
}

function readHeight(data){
  height= data.val();
  
 
}