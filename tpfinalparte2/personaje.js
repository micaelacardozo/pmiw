class Vida {
  constructor() {
    this.cantidad = 3;
  }

  perder() {
    this.cantidad--;
    if (this.cantidad < 0) this.cantidad = 0;
  }

  mostrar(x, y) {
    fill(240);
    textAlign(LEFT);
    textSize(20);
    text("Vidas: " + this.cantidad, x, y);
  }
}
 
// --- clase Margot ---
class Margot {
  constructor(pisoY, escenarios) {
    this.w = 30;
    this.h = 40;
    this.x = width - this.w - 10;
    this.y = pisoY - this.h;
    this.vida = new Vida();
    this.pisoActual = pisoY;
    this.escenarios = escenarios;
  }

  mostrar() {
    fill(0, 255, 0);
    image(jugadora,this.x, this.y, this.w, this.h);
    this.vida.mostrar(10, 30);
  }

  moverDerecha() {
    this.x += 10;
    if (this.x + this.w > width) this.x = width - this.w;
  }

  moverIzquierda() {
    this.x -= 10;
    if (this.x < 0) this.x = 0;
  }

 subirEscalera() {
  let escaleras = [this.escenarios.escalera1, this.escenarios.escalera2, this.escenarios.escalera3];

  for (let i = 0; i < escaleras.length; i++) {
    if (this.y + this.h === escaleras[i].y + escaleras[i].h &&
        this.x + this.w > escaleras[i].x &&
        this.x < escaleras[i].x + escaleras[i].w) {
      this.y = escaleras[i].y - this.h;
      this.pisoActual = escaleras[i].y;
    }
  }
}

 teclaPresionada(keyCode) {
  if (this.estado === "jugando") {
    return;
  }

  if (keyCode === LEFT_ARROW) {
    this.moverIzquierda();
  }
  else if (keyCode === RIGHT_ARROW) {
    this.moverDerecha();
  }
  else if (keyCode === UP_ARROW) {
    this.subirEscalera();
  }
 }
}
