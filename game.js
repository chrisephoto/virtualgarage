// define canvases and contexts
var canvas00 = document.getElementById("canvas-00");
var ctx00 = canvas00.getContext("2d");
var canvas01 = document.getElementById("canvas-01");
var ctx01 = canvas01.getContext("2d");
var canvas02 = document.getElementById("canvas-02");
var ctx02 = canvas02.getContext("2d");
var canvas03 = document.getElementById("canvas-03");
var ctx03 = canvas03.getContext("2d");
var canvas04 = document.getElementById("canvas-04");
var ctx04 = canvas04.getContext("2d");

function initialDraw() {
  ctx01.fillStyle = "#FF0000";
  ctx01.fillRect(0, 0, 150, 75);

  ctx02.fillStyle = "#00FF00";
  ctx02.fillRect(30, 0, 50, 45);

  ctx03.fillStyle = "#0000FF";
  ctx03.fillRect(40, 50, 30, 40);

  ctx04.fillStyle = "#FF00FF";
  ctx04.fillRect(90, 70, 20, 20);
  
  //finalDraw();
}

function updateDraw(canvas, imgsrc, posx, posy) {
  var canvasXX = document.getElementById(canvas);
  var ctxXX = canvasXX.getContext("2d");
  
  ctxXX.drawImage(imgsrc, posx, posy)
  
  //finalDraw();
}

function  finalDraw() {
  // add data from each canvas into main canvas
  ctx00.drawImage(canvas01, 0, 0);
  ctx00.drawImage(canvas02, 0, 0);
  ctx00.drawImage(canvas03, 0, 0);
  ctx00.drawImage(canvas04, 0, 0);
}
