//Number

var num = 100;
console.log(num);

//String
var str = "This is a string";
console.log(str);

//Boolean
var bool = true;
console.log(bool);

//Undefined
var object;
console.log(object);

//Reassigning a variable
//Null
object = null;
console.log(object);

//Array containing same data type
var arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
console.log(arr1[4]);

//Array containing different data types
var arr2 = [100, "Dhriti", false];
console.log(arr2);
console.log(arr2[1]);

//Array containing arrays
var arr3 = [[1, 2], [2,3], [3, 4], [4,5]];
console.log(arr3);
console.log(arr3[2]);
console.log(arr3[2][0]);

arr3.push("Srishti");
console.log(arr3);

arr3.pop();
console.log(arr3);

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState= "onsling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState!=="launched"){       //NOT operator --> !
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState="launched"
}


function keyPressed(){
    if(keyCode === 32){
        //slingshot.attach(bird.body);
    }
}

/*  
To store data ==> Variables

Data types:

1. Number
2. String
3. Null
4. Boolean - true/false
5. Undefined

To store multiple variables/values --> DATA STRUCTURE

ARRAY
- List of items (variables)
- contains different or same data types
- created inside []
- Items contained are called elements
- Elements are separated by a comma
*/
   