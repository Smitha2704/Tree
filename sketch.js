
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,ground,stone;
var boy;
var launcher;
var mango1,mango2,mango3;

function preload()
{
	boy = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(400,430, 20, 20);
	ground= new Ground(0, 650);
	stone = new Stone(100,100,20);
	mango1 = new Mango(300,400);
	launcher = new Launcher(stone.body,{x:100,y:500})

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  image(boy,70,440,200,300);
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  //drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  launcherObject.attach(stone.body);
	}
  }

  function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

