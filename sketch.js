/*
 *
 * HEADER
 * EJERCICIO 1 (13/FEBRERO/2018)
 * MURACO PROGRAMMING HERE
 * 
 *
 * URL
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */
 
 //video
var video;
//var positions = [];
/*
 *****************************************
 *****************************************
 * LIFE CYCLE METHODS
 *****************************************
 *****************************************
 */
 
 function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function setup() {
   //size en JAVA 300,300
  createCanvas(displayWidth,displayHeight);
  initializeVideo();
}

function draw() {
  background(255);
  drawVideo();
  

}

/*
 *****************************************
 *****************************************
 * video meth
 *****************************************
 *****************************************
 */

function initializeVideo() {
  video= createVideo("assets/videos/IMG_2731.mov");
  video.loop();
  video.hide();
  /*video= createVideo("assets/videos/IMG_2733.mov");
  video.loop();*/
  
  
 // video.hide();
}

function drawVideo() {
  //image(video, 20, 600, 600);
  
    //resizeCanvas(displayHeight,displayWidth);
   //filter('INVERT');
   
  //video.loadPixels();
  
   var correctionX = (windowWidth / 2) - video.width / 2;
  var correctionY = (windowHeight / 2) - video.height / 2;

  video.loadPixels();
  
  var stepSize = 13;
  
  for (var y = 0; y < video.height; y+=stepSize) {
    
    for (var x = 0; x < video.width; x+= stepSize) {
      
      var index = (x + (y * video.width))*4;
      
      var darkness = (255 - video.pixels[index])/255;
      
      var radius = darkness * stepSize;
      
      fill(video.pixels[index],video.pixels[index+1], video.pixels[index+2],video.pixels[index+3]);
      ellipse(x, y, radius, radius);
      
     /* video.pixels[index] = video.pixels[index + 1];
      video.pixels[index + 1] = video.pixels[index + 2];
      video.pixels[index + 2] = video.pixels[index + 58];
      video.pixels[index + 3] = video.pixels[index + 90];*/

    }
    
  }
  
/* 

stepSize

 for (var y = 0; y < video.height; y++) {
    
    for (var x = 0; x < video.width; x++) {
      
      var index = (x + (y * video.width))*4;



  video.set(0,0) = color (255, 255 , 0 ,255);
  video.get(0,0);
  
  video.pixels[0] = 255; //R
  video.pixels[1] = 255; //G
  video.pixels[2] = 0; // B
  video.pixels[3] = 255; // alpha
  
  
  video.pixels[index + 1] = video.pixexls[index + 3];
      video.pixels[index + 2] = video.pixexls[index + 1];
      video.pixels[index + 3] = video.pixexls[index + 1];
      video.pixels[index + 4] = video.pixexls[index + 3];

  
  
 video.updatePixels();
  image(video, correctionX, correctionY);

  image(video, 300, 300);
  
  formula para determinar INDEX
  index = [x + (y * w)] * 4 * b 
  (beta)
  b = 0 r
    = 1 g
    = 2 b
    = 3 a
    
  */
  
  
}




