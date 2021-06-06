var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var i = 180; i <=250; i = i + 250) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var v = 270; v <=280; v = v + 280) {
    divisions.push(new Divisions(v, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var a = 360; a <=420; a = a + 420) {
    divisions.push(new Divisions(a, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var p = 460; p <=480; p = p + 480) {
    divisions.push(new Divisions(p, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var o = 550; o <=580; o = o + 580) {
    divisions.push(new Divisions(o, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var r = 650; r <=660; r = r + 660) {
    divisions.push(new Divisions(r, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var s = 760; s <=780; s = s + 780) {
    divisions.push(new Divisions(s, height-divisionHeight/2, 10, divisionHeight));
  }




  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects

  for (var j = 35; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects


  for (var j = 25; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }


    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }

    if(frameCount%60===0){
    particles.push( new Particle(random(300,500 ),10,10));
    }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 

  for (var t = 0; t < particles.length; t++){
    particles[t].display();
  }

}