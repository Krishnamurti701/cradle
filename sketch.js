const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
 
   roof = new Roof(350,100,300,30)
   world.add(world,roof)

    bobObject1 = new BobObject(250,300);
    bobObject2 = new Box(300,300);
    bobObject3 = new (350,300)
    bobObject4 = new Box(400,300);
    bobObject5 = new Box(450,300);


    bobObject1 = new BobObject(bobObject1.body.roof.body,-100,0)
    world.add(world,rope1)
    
     bobObject2 = new BobObject(bobObject2.body.roof.body,-50,0)
    world.add(world,rope2)

     bobObject3 = new BobObject(bobObject3.body.roof.body,0,0)
    world.add(world,rope3)

    bobObject4 = new BobObject(bobObject4.body.roof.body,+50,0)
    world.add(world,rope4)

     bobObject5 = new BobObject(bobObject5.body.roof.body,+100,0)
    world.add(world,rope5)

    Engine.run(engine)
}

function draw(){
    background("white");
    Engine.update(engine);

    roof.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

    bobObject1.display();
    bobObject2.display();
    bobObject3.display();
    bobObject4.display();
    bobObject5.display();
    
}

function keyPressed(){
    if(keyCode=== 32){
        Matter.body.applyForce(bobObject1.body,bobObject1.body.position{x:-730,y:0});
    }
}