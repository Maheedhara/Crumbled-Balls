
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var bottomBody;
var leftBody;
var rightBody;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bottomBody=Bodies.rectange(40,40,200,20,{isStatic:true});
	World.add(world,bottomBody);
	leftBody=Bodies.rectangle(20,20,20,100,{isStatic:true});
	World.add(world,leftBody);
	rightBody=Bodies.rectangle(60,60,20,100,{isStatic:true});
	World.add(world,rightBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



