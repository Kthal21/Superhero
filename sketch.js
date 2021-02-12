const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint


var engine,world;
var backgImg;
function preload() {
//preload the images here

backgImg = loadImage("bg.png");

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine= Engine.create();
  world= engine.world;
  ground1 = new Ground(1500,750,3000,10);
  h1= new Hero(300,400,100);
  fly1= new Fly (h1.body, {x:210,y:270});
  
}

function draw() {
  background(backgImg);
  
ground1.display();
h1.display();
fly1.display();
  Engine.update(engine);
}

