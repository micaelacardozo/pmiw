class Boton {
  constructor(x, y, w, h, texto) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.texto = texto;
  }

  mostrar() {
    if (this.mouseDentro(mouseX, mouseY)) {
      fill(20, 142, 92);
    } else {
      fill(59, 188, 135);
    }
    rect(this.x, this.y, this.w, this.h);
    fill(142, 86, 135);
    textSize(20);
    text(this.texto, this.x + 60, this.y + this.h / 2 + 5);
  }

  mouseDentro(mx, my) {
    return ( mx > this.x && mx < this.x + this.w &&
             my > this.y && my < this.y + this.h );
  }
}


class Pantalla {
  constructor(botonInicio) {
    this.botonInicio = botonInicio;

    this.textosInicio = [
    "El escape de Margot"
    ];

    this.textosTutorial = [
      "Ayuda a Margot a llegar a la puerta para escapar.",
      "Subí por las escaleras.",
      "Evitá las cajas porque te quitan vida.",
      "Presiona ENTER para comenzar."
    ];

    this.textosPerdiste = [
      "PERDISTE",
      "Margot no pudo ver el sol",
      "Presiona ENTER para ver créditos"
    ];

    this.textosGanaste = [
      "GANASTE!",
      "Margot logró ver el sol",
      "Presiona ENTER para ver créditos"
    ];

    this.textosCreditos = [
      "Créditos:",
      "Alumna: Cardozo Micaela",
      "Profesor: Jose Bugiolachi",
      "Presiona ENTER para volver al inicio"
    ];
  }

  mostrarInicio() {
    image(imagenes[0], 0, 0, width, height);
    fill(169, 242, 212);
    textAlign(CENTER);
    textSize(40);
    text(this.textosInicio[0], width / 2, height / 2 - 80);
    this.botonInicio.mostrar();
  }

  mostrarTutorial() {
    image(imagenes[1], 0, 0, width, height);
    fill(110, 157, 115);
    textSize(28);
    for (let i = 0; i < this.textosTutorial.length; i++) {
      text(this.textosTutorial[i], 320, 150 + i * 50);
    }
  }

  mostrarPerdiste() {
    image(imagenes[2], 0, 0, width, height);
    fill(36, 17, 1);
    textAlign(CENTER);
    textSize(30);
    for (let i = 0; i < this.textosPerdiste.length; i++) {
      text(this.textosPerdiste[i], width / 2, height / 2 + 50 + i * 40);
    }
  }

  mostrarGanaste() {
    image(imagenes[3], 0, 0, width, height);
    fill(1, 36, 1);
    textAlign(CENTER);
    textSize(30);
    for (let i = 0; i < this.textosGanaste.length; i++) {
      text(this.textosGanaste[i], width / 2, height / 2 + 60 + i * 40);
    }
  }

  mostrarCreditos() {
    image(imagenes[4], 0, 0, width, height);
    fill(210);
    textAlign(LEFT);
    textSize(28);
    for (let i = 0; i < this.textosCreditos.length; i++) {
      text(this.textosCreditos[i], 100, 250 + i * 50);
    }
  }
}
