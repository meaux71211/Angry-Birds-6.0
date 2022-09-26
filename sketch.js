const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var  gamestae = "onsling";
var bg = "bg.png";
function preload() {
 getBackgroundImg()
}

function setup(){
  var canvas=createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,1200,20)
  Box1 = new Box(700,320,70,70);
  Box2 = new Box(920,320,70,70);
  Log1 = new Log(810,260,300,PI/2);
  Box3 = new Box(700,240,70,70);
  Box4 = new Box(920,240,70,70);
  Log2 = new Log(810,180,300,PI/2);
  Box5 = new Box(810,160,70,70);
  Log3 = new Log(760,120,150,PI/7);
  Log4 = new Log(860,120,150,-PI/7);
  pig1 = new Pig(810, 350);
  pig2 = new Pig(810, 200);
  bird = new Bird(100, 100);
  platform = new Ground(150,305,300,170);
  // log6 = new Log(230,180,80,PI/2);
  slingshot = new Slingshot(bird.body,{x:200,y:50});

}
function draw()
{
  if(backgroundIMG){
    background(backgroundIMG);
  }
  else{
    background(0);
  }
  
  Engine.update(engine);
  ground.display();
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Log1.display();
  Log2.display();
  Log3.display();
  Log4.display();
  pig1.display();
  pig2.display();
  bird.display();
  platform.display();
  // log6.display();
  slingshot.display();
}
function mouseDragged(){
  if(gamestate!=="launched"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY}); 
  }
 
}
function mouseReleased(){
  slingshot.fly();
  gamestate = "launched"
}
async function getBackgroundImg(){
  var response = await fetch("http://worldclockapi.com/api/json/est/now") ;
  var responseJson = await response.json();
  var datetime = responseJson.currentDateTime;
  var hour = datetime.slice(11, 13);
  if(hour>=06&&hour<=19){
    bg ="bg1.png"
  }
  else{
    bg = "bg2.jpg"
  }
  backgroundIMG = loadImage(bg);
} 