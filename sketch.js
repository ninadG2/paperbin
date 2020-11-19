
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;
var bin1;

function preload()
{
	this.image1 = loadImage("sprites/dustbingreen.png")
	this.image2 = loadImage("sprites/paper.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	
   

	//Create the Bodies Here.
    paper1 = new paper(100,200,20)
	ground1 = new ground(width/2,height-10,width,20);
	bin1 = new bin(width/2, 590, 200, 100)
	bin2 = new bin(482,604,10,200)
	bin3 = new bin(315,604,10,200)



	
	Engine.run(engine);
  
}


function draw() {
	console.log(mouseY)
  rectMode(CENTER);
  background(255);
  paper1.appear();
  ground1.appear();
  bin2.appear();
  bin3.appear();
  bin1.appear();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:12.5,y:-20})
	}
}

