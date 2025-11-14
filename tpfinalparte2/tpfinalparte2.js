//Micaela Cardozo, comisión 1
// https://youtu.be/V3yobzXBWWc                                 
let objPri;

let imagenes = []; 
let jugadora; 
let escalera;
let puerta;
let fondo;
let caja;

let ganar;
let golpe;
let sonido; 

function preload() {
  jugadora = loadImage('data/nena.png');
  escalera = loadImage('data/escalera.png');
  puerta = loadImage('data/puerta.png');
  fondo = loadImage('data/ropero.jpg');
  caja = loadImage('data/caja.png');

  for (let i = 0; i <= 4; i++) {
    imagenes[i] = loadImage("data/imagen" + i + ".jpg");
  }

  golpe = loadSound('data/perdervida.mp3');
  ganar = loadSound('data/victoria.mp3');
  sonido = loadSound('data/musicafondo.mp3');
}

function setup() {
  createCanvas(640, 480);
  objPri = new Juego();
  sonido.amp(0.3);
  sonido.loop();
}

function draw() {
  background(220);
  objPri.mostrar();
}

function keyPressed() {
  objPri.teclaPresionada(keyCode);
}

function mousePressed() {
  objPri.mousePresionado(mouseX, mouseY);
}
