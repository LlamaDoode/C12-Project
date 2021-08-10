var garden,rabbit;
var gardenImg,rabbitImg;
var green_leaf,greenImg ;
var orange_leaf, orangeImg ;
var apple,appleImg ;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  greenImg = loadImage("leaf.png") ;
  orangeImg = loadImage("orangeLeaf.png") ;
  appleImg = loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  console.log(garden.depth) ;


  edges= createEdgeSprites();
  
  rabbit.x = World.mouseX ;
 
  if (rabbit.x>360) {
    rabbit.x=360 ;
  }

  if (rabbit.x<50) {
    rabbit.x=50 ;
  }

  if (frameCount%80==0) {
    var r = Math.round(random(1,3)) 
    if (r==1) {
      spawnApples() ;
    }

    if (r==2) {
      spawnGreen() ;
    }

    if (r==3) {
      spawnOrange() ;
    }
  }
  drawSprites() ;


}
function spawnApples() {
      apple = createSprite(100,0) ;
      apple.addImage(appleImg) ;
      apple.x = Math.round(random(50,350)) ;
      apple.scale = 0.09 ;
    apple.velocityY = 6 ;
}

function spawnGreen() {
  green_leaf = createSprite(100,0) ;
    green_leaf.addImage(greenImg) ;
    green_leaf.x = Math.round(random(50,350)) ;
    green_leaf.scale = 0.1 ;
    green_leaf.velocityY = 6 ;
}

function spawnOrange() {
  orange_leaf = createSprite(100,0) ;
    orange_leaf.addImage(orangeImg) ;
    orange_leaf.x = Math.round(random(50,350)) ;
    orange_leaf.scale = 0.1 ;
    orange_leaf.velocityY = 6 ;
}