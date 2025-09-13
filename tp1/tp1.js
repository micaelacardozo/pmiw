//Micaela Cardozo, comision 1
//https://youtu.be/Fu YV4kdnLHU



let opart; 
let mousePresionado = false; 

function preload() {
  opart = loadImage('data/op.jpg');
}

function setup() {
  createCanvas(800, 400);
  background(200);
}
r 
function draw() {
  image(opart, 0, 0, width/2, height);
  
  let velocidad = 0.085;
  let desplazamiento = 0.88; 
  let maxsegundosalt = 0.0075; 
  let velocidadframes = height * velocidad;
  if (velocidadframes < 1) velocidadframes = 1;
     
  let segundosr = frameCount / velocidadframes;
  let segundosmaximos = height * maxsegundosalt;
  if (segundosr > segundosmaximos) segundosr = segundosmaximos;

  let cantidad = int(segundosr) + 1; 

  let espacioX = width / 2;
  let espacioY = height;

  let espaciocua = 1 + desplazamiento;
  let ancho = espacioX / (cantidad * espaciocua);
  let alto = espacioY / (cantidad * espaciocua);

  let movX = ancho * desplazamiento;
  let movY = alto * desplazamiento;

  let cuaX = ancho + movX;
  let cuaY = alto + movY;

  let totalAncho = cantidad * cuaX;
  let totalAlto = cantidad * cuaY;

  let margenX = (espacioX - totalAncho) / 2;
  let margenY = (espacioY - totalAlto) / 2;

  for (let i = 0; i < cantidad; i++) {
    for (let j = 0; j < cantidad; j++) {
      let x = width / 2 + margenX + i * cuaX;
      let y = margenY + j * cuaY;
      obraop(x, y, ancho, alto, desplazamiento);
    }
  }
}

// reseteo
function keyPressed() {
  if (key === 'r' || key === 'R') {
    frameCount = 0;
  }
}

// mouse
function mousePressed() {
  mousePresionado = true;
}

function mouseReleased() {
  mousePresionado = false;
}
