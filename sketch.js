const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 100, 600, 50);

	bobObject1 = new Bob(200, 500);
	bobObject2 = new Bob(300, 500);
	bobObject3 = new Bob(400, 500);
	bobObject4 = new Bob(500, 500);
	bobObject5 = new Bob(600, 500);

	rope1 = new Rope(roof.body, bobObject1.body, -200, 0);
	rope2 = new Rope(roof.body, bobObject2.body, -100, 0);
	rope3 = new Rope(roof.body, bobObject3.body, 0, 0);
	rope4 = new Rope(roof.body, bobObject4.body, 100, 0);
	rope5 = new Rope(roof.body, bobObject5.body, 200, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-50, y:-70});
	}
}