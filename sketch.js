var ground, groundImg, invisibleGround;
var man, manImg;
var bg, bgImg;
var gameState = 0;

function preload(){
  manImg = loadImage("fat man running.png");
  bgImg = loadImage("backgroundImg.jpg")
}

function setup() {
  createCanvas(600,500);
  man = createSprite(100, 350, 20, 20);
  man.addImage(manImg);   
  man.scale = 0.55;

  bg = createSprite(400, 200);
  bg.addImage(bgImg);
  bg.x = bg.width/2;

  
}

function draw() {
  background(0);

  if(keyIsDown(RIGHT_ARROW)) {
    man.x += 5;
   }

   if(bg.x < 0) {
     bg.x = bg.width/2;
   }
 
drawSprites();
}