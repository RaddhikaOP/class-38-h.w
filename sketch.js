
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player, box;
var edges;


function preload()
{
  
}

function setup() {
	createCanvas(displayWidth-20,displayHeight-130);

	edges = createEdgeSprites();

	player = createSprite(windowWidth/2+530,windowHeight/2+300,50,50)
	player.bounceOff(edges)
	box = createSprite(windowWidth/2-550,windowHeight/2-300,50,50)
	 box.shapeColor = "yellow"

	


	engine = Engine.create();
	world = engine.world;

	
	Engine.run(engine);
	}

	


function draw() {
	
	background("blue");

	if(keyIsDown(UP_ARROW)&& player.y<displayHeight-130){
		player.y = player.y-20
	  }

	  if(keyIsDown(DOWN_ARROW)&& player.y<displayHeight-130){
		player.y = player.y+20
	  }

	  if(keyIsDown(RIGHT_ARROW)&& player.x<displayWidth-20){
		player.x = player.x+20
	  }

	  if(keyIsDown(LEFT_ARROW)&& player.x<displayWidth-20){
		player.x = player.x-20
	  }

	  if (player.isTouching(box)){
		color("black")
		  text ("you win",windowWidth/2-20,windowHeight/2-130)
		  textSize(5000)
		  
	  }

	camera.position.x=windowWidth/2;
    camera.position.y=player.y;



	Engine.update(engine);
	
    drawSprites();
 
}



