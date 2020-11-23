const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//declaring global varibles
var umbrella, boyImg;
var rand;
var thunder1, thunder2, thunder3, thunder4, thunder;
var drops = [];
var maxDrops = 100;


var thunderCreatedFrame = 0;



function preload()
{
    //loading images
    boyImg = loadAnimation("walking_8.png", "walking_7.png",
        "walking_6.png", "walking_5.png", "walking_4.png",
        "walking_3.png", "walking_2.png", "walking_1.png");
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup()
{
    createCanvas(400, 600);

    engine = Engine.create();
    world = engine.world;
    
    umbrella = new Umbrella(200, 450);


    //creating new drops
    if(frameCount % 150 === 0)
    {
 for(var i = 0; i < maxDrops; i++)
        {
            drops.push(new Drop(random(0,400), random(0,400), 5));
        }
    }
}

function draw()
{
    background("black");  
    Engine.update(engine);

    umbrella.display();

   
   
   
    rand = Math.round(random(1, 4));
    if(frameCount % 80 === 0 && frameCount >= 1)
    {

        //creating random thunder
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(30, 370),random(10, 30),10,10);
        switch (rand) {
            case 1:
                thunder.addImage(thunder1);
                break;
            case 2:
                thunder.addImage(thunder2);
                break;
            case 3:
                thunder.addImage(thunder3);
                break;
            case 4:
                thunder.addImage(thunder4);
                break;
            default:break;
        }
        thunder.scale = random(0.3, 0.6);
    }

   
   
    //destroying thunder after 20 framcounts
    if(thunderCreatedFrame + 20 === frameCount &&thunder)
    {
        thunder.destroy();
    }

    for(var i = 0; i < maxDrops; i++)
    {
           drops[i].display();
        drops[i].updateY();
    }
}

