 var path,rabbit,carrot,leaf,potato,rock;
var pathImg,rabbitImg,carrotImg,potatoImg,leafImg,rockImg;
var foodCollection = 0;
var carrotGroup,potatoGroup,leafGroup,rockGroup;


var gameState="play";

function preload(){
    pathImg = loadImage("forest.png");
    rabbitImg = loadAnimation("hungryBunny.png");
    carrotImg = loadImage("carrot.png");
    leafImg = loadImage("leaf.png");
    potatoImg = loadImage("potato.png");
    rockImg = loadImage("rock.png");
    
 }

function setup() {
    createCanvas(400,500);
    path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 3;
path.scale=2

rabbit = createSprite(70,480,20,20);
rabbit.addAnimation("SahilRunning",rabbitImg);
rabbit.scale=0.4;


carrotGroup=new Group();
potatoGroup=new Group();
leafGroup=new Group();
rockGroup=new Group();
}

function draw() {
    if(gameState==="play"){
        background(0);
        rabbit.x = World.mouseX;
        
        edges= createEdgeSprites();
        rabbit.collide(edges);

if(path.y > 400 ){
    path.y = height/2;
  }
    createCarrot();
    createPotato();
    createLeaf();
    createRock();
}
if (carrotGroup.isTouching(rabbit)) {
    carrotGroup.destroyEach();
    foodCollection=foodCollection+300;
  }
  else if (potatoGroup.isTouching(rabbit)) {
    potatoGroup.destroyEach();
    foodCollection=foodCollection+200;
    
  }else if(leafGroup.isTouching(rabbit)) {
    leafGroup.destroyEach();
    foodCollection=foodCollection+100
  }
  else{
    if(rockGroup.isTouching(rabbit)) {
      
      

      gameState="end"
      path.velocityY=0
      rabbit.visible=false
      

        carrotGroup.destroyEach();
        potatoGroup.destroyEach();
        leafGroup.destroyEach();
        rockGroup.destroyEach();

         carrotGroup.setVelocityYEach(0);
         potatoGroup.setVelocityYEach(0);
        leafGroup.setVelocityYEach(0);
        rockGroup.setVelocityYEach(0);
        
    }
    
    drawSprites()
    textSize(20);
  fill("white");
  text("Food: "+ foodCollection,10,30);
}
if(gameState=="end"){
stroke("yellow")
fill("yellow")
textSize(30)
text("Gameover",200,200)
}
}




function createCarrot() {
    if (World.frameCount % 200 == 0) {
     carrot = createSprite(Math.round(random(50, 350),40, 10, 10));
    carrot.addImage(carrotImg);
    carrot.scale=0.12;
    carrot.velocityY = 3;
    carrot.lifetime = 250;
    carrotGroup.add(carrot);
    }
  }
  
  function createPotato() {
    if (World.frameCount % 320 == 0) {
     potato = createSprite(Math.round(random(50, 350),40, 10, 10));
    potato.addImage(potatoImg);
    potato.scale=0.3;
    potato.velocityY = 3;
    potato.lifetime = 250;
    potatoGroup.add(potato);
  }
  }
  
  function createLeaf() {
    if (World.frameCount % 410 == 0) {
    leaf = createSprite(Math.round(random(50, 350),40, 10, 10));
    leaf.addImage(leafImg);
    leaf.scale=0.13;
    leaf.velocityY = 3;
    leaf.lifetime = 250;
    leafGroup.add(leaf);
    }
  }
  
  function createRock(){
    if (World.frameCount % 530 == 0) {
    rock = createSprite(Math.round(random(50, 350),40, 10, 10));
    rock.addImage(rockImg);
    rock.scale=0.3;
    rock.velocityY = 3;
    rock.lifetime = 250;
    rockGroup.add(rock);
    }
  }
