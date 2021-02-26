const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function preload() {
  bg = loadImage("GamingBackground.png")
 


}

function setup() {
  createCanvas(1500, 800);
  engine = Engine.create();
  world = engine.world;

  man = new Hero(200,400,300,200);
  table= new Ground(2,600,800,10);
  m1= new Monster(1330,200,170,170)
  b1= new Box(500,580,35,35)
  b2 = new Box(500,550,35,35)
  b3 = new Box(500,520,35,35)
  b4 = new Box(500,490,35,35)
  b5 = new Box(500,460,35,35)
  b6 = new Box(500,430,35,35)
  b7 = new Box(500,400,35,35)
  b8= new Box(540,580,35,35)
  b9 = new Box(540,550,35,35)
  b10 = new Box(540,520,35,35)
  b11 = new Box(540,490,35,35)
  b12 = new Box(540,460,35,35)
  b13= new Box(540,580,35,35)
  b14 = new Box(580,550,35,35)
  b15 = new Box(580,520,35,35)
  b16 = new Box(580,490,35,35)
  b17 = new Box(580,460,35,35)
  fig= new Ground(200,100,35,35)

  chain1= new Chain(man.body,fig.body)

}

function draw() {
  background(bg);
  Engine.update(engine);

 man.display();
 table.display();
 b1.display();
 m1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 b10.display();
 b11.display();
 b12.display();
 b13.display();
 b14.display();
 b15.display();
 b16.display();
 b17.display();






 
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(man.body, {x: mouseX , y: mouseY});
  //}
}