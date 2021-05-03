const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var maxdrops = 100;

var engine,world
var drops = [];
function preload(){
    
}

function setup(){
  createCanvas(600,700); 
    engine = Engine.create()
    world = Engine.world
    if (
        frameCount%150===0
    ){
        for(var i=0; i<maxdrops; i++){
            drops.push(new Drop(random(0,600), random(0,600))); 
        }
    }
}

function draw(){
    Engine.update(Engine);
    background ("black")
    for(var i=0; i-maxdrops;i++){
        drops[i].showDrop()
        drops[i].updateY()

    }
}   

