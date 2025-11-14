class Juego {
  constructor() {
    this.cantidadCajas = 10;
    this.cajas = [];

    for (let i = 0; i < this.cantidadCajas; i++) {
      this.cajas[i] = new Caja(random(10, width - 10), -i * 50);
    }

    this.escenarios = new Escenarios();
    this.margot = new Margot(this.escenarios.piso1.y, this.escenarios);

    this.botonInicio = new Boton(width / 2 - 60, height / 2 + 100, 120, 40, "Ver tutorial");

    this.pantallas = new Pantalla(this.botonInicio);

    this.estado = "inicio";
  }

 mostrar() {
  if (this.estado === "inicio") {
    this.pantallas.mostrarInicio();
  }
  else if (this.estado === "tutorial") {
    this.pantallas.mostrarTutorial();
  }
  else if (this.estado === "jugando") {
    this.mostrarJuego();

      if (this.margot.vida.cantidad === 0) {
        this.estado = "perdiste";
       }
     else if (this.escapoPuerta()) {
        this.estado = "ganaste";
    }
  }
  else if (this.estado === "perdiste") {
    this.pantallas.mostrarPerdiste();
  }
  else if (this.estado === "ganaste") {
    this.pantallas.mostrarGanaste();
  }
  else if (this.estado === "creditos") {
    this.pantallas.mostrarCreditos();
  }
}
  mostrarJuego() {
    this.escenarios.mostrar();

    for (let i = 0; i < this.cajas.length; i++) {
      this.cajas[i].mover();
      this.cajas[i].mostrar();
    }

    this.chocar();
    this.margot.mostrar();
  }

  teclaPresionada(keyCode) {
    if (this.estado === "tutorial" && keyCode === ENTER) {
      this.estado = "jugando";
    }
    else if (this.estado === "jugando") {
      this.margot.teclaPresionada(keyCode);
    }
    else if (this.estado === "perdiste" && keyCode === ENTER) {
      this.estado = "creditos";
    }
    else if (this.estado === "ganaste" && keyCode === ENTER) {
      this.estado = "creditos";
    }
    else if (this.estado === "creditos" && keyCode === ENTER) {
      objPri = new Juego();
      this.estado = "inicio";
    }
  }

  mousePresionado(mx, my) {
    if (this.estado === "inicio" && this.botonInicio.mouseDentro(mx, my)) {
      this.estado = "tutorial";
    }
  }

  chocar() {
    for (let i = 0; i < this.cajas.length; i++) {
      if (this.margot.x < this.cajas[i].x + this.cajas[i].w &&
          this.margot.x + this.margot.w > this.cajas[i].x &&
          this.margot.y < this.cajas[i].y + this.cajas[i].h &&
          this.margot.y + this.margot.h > this.cajas[i].y) {
        this.cajas[i].y = -this.cajas[i].h;
        this.cajas[i].x = random(10, width - 10);
        this.margot.vida.perder();
        golpe.play();
      }
    }
  }

  escapoPuerta() {
    if ( this.margot.x < this.escenarios.puerta.x + this.escenarios.puerta.w &&
         this.margot.x + this.margot.w > this.escenarios.puerta.x &&
         this.margot.y < this.escenarios.puerta.y + this.escenarios.puerta.h &&
         this.margot.y + this.margot.h > this.escenarios.puerta.y) {
      ganar.play();
      return true; 
    }
    return false;
  }
}
