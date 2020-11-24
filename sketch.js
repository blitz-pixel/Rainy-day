const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var land,block;
var maxDrops = 100;
var rain = [];
var thunder1,thunder2,thunder3,thunder4;
var thunder;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 =loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
  var canvas = createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  for(i = 0;i<maxDrops;i++){
    rain.push(new drop(random(0,490),random(0,200)));
  }

  //rain = new drop(10,10);
  land = new ground(250,480,20,10);
  block = new umbrella(250,590);
  //ground.ShapeColour("brown");
    
}

function draw(){
  background(0);
 Engine.update(engine);
// console.log(rain);
//block.debug = true;
//block.setCollider()
if(frameCount%60 == 0){
  var thunder = createSprite(random(10,480),20,10,10);
   var rand = Math.round(random(1,4));
   switch(rand){
     case 1: thunder.addImage(thunder1);
               break;
                  thunder.destroy();
     case 2: thunder.addImage(thunder2);
              break;
     case 3: thunder.addImage(thunder3);
             break;
     case 4: thunder.addImage(thunder4);
              break;
     default: break;

   }
   thunder.lifetime = 10;
} 

  drawSprites();

  for(i =0;i<rain.length;i++){
    rain[i].display();
  }
  

   //rain.display();
   // land.display();
    block.display();
}   

