const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var plane;
var hammer;
var stone;
var rubber;
var iron; 


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(400, 300, 50, 50); 
    rubber = new Rubber(200, 400, 50);
    iron = new Iron(500, 100, 80, 50); 


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display(); 
    rubber.display(); 
    iron.display(); 
 
}