
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree, tree_image;
var boy, boy_image;
var stone;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var trow;

function preload()
{
	tree_image = loadImage("Plucking mangoes/tree.png");
	boy_image = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree = createSprite(600, 500, 50, 100);
	tree.addImage(tree_image);
	tree.scale = 0.3;

	boy = createSprite(100, 625, 20, 100);
	boy.addImage(boy_image);
	boy.scale = 0.08;

	ground = new Ground(400, 680, 800, 10);
	stone = new Stone(50, 555, 40, 40);
	mango1 = new Mango(540, 430, 50);
	mango2 = new Mango(560, 380, 50);
	mango3 = new Mango(600, 480, 50);
	mango4 = new Mango(650, 360, 50);
	mango5 = new Mango(630, 340, 50);
	mango6 = new Mango(700, 500, 50);
	mango7 = new Mango(720, 450, 50);
	mango8 = new Mango(500, 400, 50);
	mango9 = new Mango(700, 400, 50);
	mango10 = new Mango(680, 490, 50)
	trow = new Throw(stone.body, {x: 50, y:580});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  keyPressed();

  ground.display();
  
  drawSprites();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  trow.display();

  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);
  detectcollision(stone, mango7);
  detectcollision(stone, mango8);
  detectcollision(stone, mango9);
  detectcollision(stone, mango10);
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
	trow.fly();
}

function detectcollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.r + lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.body.setPosition(stone.body, {x:50, y:555});
		trow.attach(stone.body);
	}
}



