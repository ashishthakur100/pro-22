var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg1 = loadAnimation("fairyimg1.png");
	starImg = loadImage("starnight");
	

}

function setup() {
	createCanvas(800, 750);


	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	 star.x = starBody.position.x;
	 star.x = starBody.position.x;

}


function draw() {
  background(bgImg);
  starBody.isStatic = false;
 if(keyDown("left"))
 {
    fairy.x = fairy.x - 2;
 }

 if(keyDown("right"))
 {
    fairy.x = fairy.x + 2;
 }

if (keyDown("down"))
{
   star.velocityY = 2;
}


if (star.position.y> 470)
{
	star.velocityY = 0;
   fairy.x = 510;
   fairy.y = 470;


}

  drawSprites();

}

