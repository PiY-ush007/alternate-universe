var spacebackground,spacebackgroundimg
var sun,sunimg
var mercury,mercuryimg
var venus,venusimg
var earth,earthimg
var mars,marsimg
var jupiter,jupiterimg
var saturn,saturnimg
var uranus,uranusimg
var neptune,neptuneimg

function preload(){
 spacebackgroundimg=loadImage("solarimages/spacebackground.jpg");
 sunimg=loadImage("solarimages/sun.jpg");
 mercuryimg=loadImage("solarimages/mercury.jpg");
 venusimg=loadImage("solarimages/venus.gif");
 earthimg=loadImage("solarimages/earth.gif");
 marsimg=loadImage("solarimages/mars.gif");
 jupiterimg=loadImage("solarimages/jupiter.gif");
 saturnimg=loadImage("solarimages/saturn.gif");
 uranusimg=loadImage("solarimages/uranus.gif");
 neptuneimg=loadImage("solarimages/neptune.gif")
}



function setup() {
  createCanvas(1000,400);
  spacebackground=createSprite(500,200,1000,400);
  spacebackground.addImage(spacebackgroundimg);
  sun= createSprite(10, 10, 70, 70);
  sun.addImage(sunimg);
  sun.scale=0.05;
  mercury=createSprite(220,80,30,30);
  mercury.addImage(mercuryimg);
  venus=createSprite(300,160,40,40);
  venus.addImage(venusimg);
  venus.scale=0.7;
  earth=createSprite(390,210,40,40);
  earth.addImage(earthimg);
  mars =createSprite(490,250,35,35);
  mars.addImage(marsimg);
  jupiter=createSprite(580,290,50,50);
  jupiter.addImage(jupiterimg);
  saturn=createSprite(670,315,45,45);
  saturn.addImage(saturnimg);
  uranus=createSprite(750,350,40,40);
  uranus.addImage(uranusimg);
  neptune=createSprite(850,375,35,35);
  neptune.addImage(neptuneimg);

}

function draw() {
  background("spacebackground"); 
  text(mouseX + ',' + mouseY, 750,10);

  if (World.frameCount%10===0){
    sun.scale=sun.scale+0.02;
  }
if (sun.collide(mercury)){
  mercury.destroy();
}
if (sun.collide(venus)){
  venus.destroy();
}

if (sun.collide(earth)){
  earth.destroy();
}
if (sun.collide(mars)){
  mars.destroy();
}
if (sun.collide(jupiter)){
   jupiter.destroy();
}
if (sun.collide(saturn)){
  saturn.destroy();
}

if (sun.collide(uranus)){
  uranus.destroy();
}

if (sun.collide(neptune)){
  neptune.destroy();
}



  drawSprites();
}








