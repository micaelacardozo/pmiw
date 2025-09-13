// OBRA
function obraop(origenX, origenY, ancho, alto, desplazamiento) {
  let movX = ancho * desplazamiento;
  let movY = alto * desplazamiento;
 
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      let x = origenX + i * movX;
      let y = origenY + j * movY;
      cuadrados(x, y, ancho, alto);
    }
  }    
 
  let centroX = origenX + movX / 2;
  let centroY = origenY + movY / 2;
  cuadrados(centroX, centroY, ancho, alto);
}
  
// cuadrados
function cuadrados(posX, posY, ancho, alto) {
  rectMode(CENTER);
  stroke(0);

  let c = 0;
  let cantidadCuadros = ancho / (ancho / 4.5);
  let pixel = ancho / cantidadCuadros;

  let centroX = posX + ancho / 2;
  let centroY = posY + alto / 2;

  let opacidadNegro;
  let opacidadColor = 255;

  if (mouseX >= width / 2) {
    opacidadNegro = calcularOpacidad(mouseX, mouseY, centroX, centroY);
  } else {
    opacidadNegro = 150; 
  }
   //colores
  for (let cua = ancho; cua > 0; cua -= pixel) {
    if (c % 2 === 0)  {
      fill(0, opacidadNegro);   
    } else {  
      if (mousePresionado && mouseX >= width / 2) {
        fill(255, 150, 200, opacidadColor);  
      } else {
        fill(255, opacidadColor);           
      }
    }
    rect(centroX, centroY, cua, cua);
    c++;
  }
} 
 
// opacidad
function calcularOpacidad(mx, my, cx, cy) {
  let d = dist(mx, my, cx, cy);
  let maxD = dist(width / 2, 0, width, height);
  return map(d, 0, maxD, 255, 50);
}
