var knife;
var knife1;
var pears,apple,orange,banana,gameover;
var pears1,apple1,orange1,banana1,gameover1;
var alien,alien1;
var fruit;
var fruit1;
var sound1;
var sound2;
var scoreballoon = 0;
var orangegroup,applegroup,pearsgroup,bananagroup,aliengroup;
var START =1 ;
var END = 0;
var gamestate = START;
var gameoversound,knifesound;


function preload(){
 

knife1 = loadImage("sword.png");

orange1 = loadImage("fruit1.png");
apple1 = loadImage("fruit2.png");
pears1 = loadImage("fruit3.png");
banana1 = loadImage("fruit4.png");
alien1 = loadImage("alien1.png");
gameover1 = loadImage("gameover.png");
gameoversound = loadSound("gameover.mp3");
knifesound = loadSound("zapsplat_foley_whoosh_whip_swoosh_fast_002_55797-1.mp3");

}

function setup() {
  createCanvas(600, 600);



knife = createSprite(250,250,10,10);
knife.addImage(knife1);

 orangegroup = new Group();
applegroup = new  Group();
  pearsgroup = new Group();
  bananagroup = new Group();
  aliengroup = new Group();

//gameover = createSprite(300,300,30,30);


 
}

function draw(){
 background ("lightblue");

if(gamestate===START){
 
  knife.y = World.mouseY
 knife.x = World.mouseX
  
 gameover1.visible = false;
 
 
  
  fruits();
 Enemy(); 
 
Enemy.velocityX = 0; 
  
   textSize(20);
  stroke("black");
  text("Score :" +scoreballoon,475,25);
 


if (applegroup.isTouching(knife)){
   
   
  
 applegroup.destroyEach();  
scoreballoon = scoreballoon+1;
knifesound.play(); 

}
  
if (orangegroup.isTouching(knife)){
   
   
  
 orangegroup.destroyEach();  
scoreballoon = scoreballoon+1;
knifesound.play(); 
 
}  
  
 if (pearsgroup.isTouching(knife)){
   
   
  
 pearsgroup.destroyEach();  
scoreballoon = scoreballoon+1;
knifesound.play(); 
 
 }  
 
if (bananagroup.isTouching(knife)){
   
   
  
 bananagroup.destroyEach();  
scoreballoon = scoreballoon+1;
 knifesound.play();
 
}    
} 
 

  if(aliengroup.isTouching(knife)){
        gamestate=END;
        
        orangegroup.destroyEach();
        bananagroup.destroyEach(); 
     applegroup.destroyEach();
     pearsgroup.destroyEach();
    aliengroup.destroyEach();
        orangegroup.setVelocityXEach(0);
        aliengroup.setVelocityXEach(0);
        pearsgroup.setVelocityXEach(0);
        applegroup.setVelocityXEach(0);
        bananagroup.setVelocityXEach(0);
   gameoversound.play();
    score = 0;
 
  
       
     
  
  }
 
  if (gamestate === END)
    {
       knife.addImage(gameover1);
        knife.x=300
        knife.y=300;
    }
 
  
  drawSprites();




}

function fruits(){
  
if(World.frameCount%80===0){
  
 fruit = createSprite(550,200,20,20); 
 //fruit.scale = 0.3; 


  r = Math.round(random(1,4));

if(r==1){
  
fruit.addImage(banana1);  
fruit.scale = 0.2;  
fruit.velocityX = -(20+(scoreballoon/5));
  bananagroup.add(fruit);


}
else if(r==2){
  
fruit.addImage(pears1);  
fruit.scale = 0.2;  
pearsgroup.add(fruit);
}

else if(r==3){
fruit.addImage(apple1);
  fruit.scale = 0.2;        
applegroup.add(fruit);



}
else {
 fruit.addImage(orange1); 
 fruit.scale = 0.2;   
orangegroup.add(fruit);

}


fruit.y = Math.round(random(50,340))

fruit.velocityX = -7;
fruit.setLifetime = 100;

 



}  
  
  
  
  


}


function Enemy(){
  
if (World.frameCount%200 === 0) {
  
  alien = createSprite(550,200,20,20); 
 alien.addImage(alien1);
alien.y = Math.round(random( 100,300))
alien.velocityX = -(9+(scoreballoon/10));
  alien.setLifetime = 100; 
  aliengroup.add(alien);


}
  
 
  
  
  
  
  
}






