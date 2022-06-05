
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj, leftside, wall1,wall2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		denstity:1.2
}
	//Create the Bodies Here.
groundObj= new Ground(width/2,670,width,20);
leftside = new Ground(1100,600,20,120);
wall1 = new Ground(600,600,20,120);
wall2 = new Ground(790,600,20,120);
ball = Bodies.circle(200,100,25,ball_options);
World.add(world, ball);


	Engine.run(engine);
  
}
function keyPressed(){
	if (keyCode ===  UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.0})
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 groundObj.show();
 leftside.show();
 wall1.show();
 wall2.show();
 ellipse(ball.position.x,ball.position.y,50);
}



