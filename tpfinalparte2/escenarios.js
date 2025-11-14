class Fondo {
  constructor() {
    this.posX = 0;
    this.posY = 0;
  }
  mostrarFondo() {
    image(fondo, this.posX, this.posY);
  }
}

class Piso {
  constructor(y) {
    this.y = y;
    this.h = 10;
  }

  mostrar() {
    fill(72, 49, 30);
    rect(0, this.y, width, this.h);
  }
}

class Escalera {
  constructor(x, pisoInferiorY, pisoSuperiorY) {
    this.x = x;
    this.w = 35;
    this.y = pisoSuperiorY;
    this.h = pisoInferiorY - pisoSuperiorY;
  }

  mostrar() {
    image(escalera, this.x, this.y, this.w, this.h);
  }
}

class Puerta {
  constructor(x, pisoSuperiorY) {
    this.x = x;
    this.y = pisoSuperiorY - 65;
    this.w = 60;
    this.h = 65;
  }

  mostrar() {
    image(puerta, this.x, this.y, this.w, this.h);
  }
}

class Escenarios {
  constructor() {
    this.piso1 = new Piso(420);
    this.piso2 = new Piso(320);
    this.piso3 = new Piso(220);
    this.piso4 = new Piso(120);

    this.escalera1 = new Escalera(10, this.piso1.y, this.piso2.y);
    this.escalera2 = new Escalera(width - 45, this.piso2.y, this.piso3.y);
    this.escalera3 = new Escalera(10, this.piso3.y, this.piso4.y);

    this.puerta = new Puerta(width - 70, this.piso4.y);
    this.fondo = new Fondo();
  }

  mostrar() {
    this.fondo.mostrarFondo();
    this.piso1.mostrar();
    this.piso2.mostrar();
    this.piso3.mostrar();
    this.piso4.mostrar();
    this.escalera1.mostrar();
    this.escalera2.mostrar();
    this.escalera3.mostrar();
    this.puerta.mostrar();
  }
}
