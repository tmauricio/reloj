import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private relojesNumero_1 = Array<Reloj>();
  private relojesNumero_2 = Array<Reloj>();
  private relojesNumero_3 = Array<Reloj>();
  private relojesNumero_4 = Array<Reloj>();
  private relojesNumero_5 = Array<Reloj>();
  private relojesNumero_6 = Array<Reloj>();
  private relojesPuntos = Array<Reloj>();

  private horas: number;
  private minutos: number;
  private segundos: number;
  private tiempoAnimacion = 3000;

  private totalRelojesNumero = 32;
  private totalRelojesPuntos = 32;

  private arriba_izquierda_1 = [90, 180];
  private arriba_izquierda_2 = [90, 225];

  private arriba_derecha_1 = [270, 180];

  private abajo_izquierda_1 = [90, 0];

  private abajo_derecha_1 = [270, 0];

  private vertical = [0, 180];
  private horizontal = [90, 270];
  private diagonal_1 = [45, 225];
  private diagonal_2 = [135, 315];

  private medio_0 = [0, 0];
  private medio_45 = [45, 45];
  private medio_90 = [90, 90];
  private medio_135 = [135, 135];
  private medio_180 = [180, 180];
  private medio_225 = [225, 225];
  private medio_270 = [270, 270];
  private medio_315 = [315, 315];

  // FORMAS A UTILIZAR
  /*private numero = [this.arriba_izquierda, this.arriba_derecha, this.abajo_izquierda, this.abajo_derecha];
  private punto = [this.diagonal, this.arriba_izquierda, this.arriba_derecha, this.diagonal, this.diagonal,
        this.abajo_izquierda, this.abajo_derecha, this.diagonal];
  private lineaNada = [this.diagonal, this.diagonal, this.diagonal, this.diagonal]*/

  private vacio = [
    this.medio_225, this.medio_225, this.medio_225, this.medio_225,
    this.medio_225, this.medio_225, this.medio_225, this.medio_225,
    this.medio_225, this.medio_225, this.medio_225, this.medio_225,
    this.medio_225, this.medio_225, this.medio_225, this.medio_225,
    this.medio_225, this.medio_225, this.medio_225, this.medio_225,
    this.medio_225, this.medio_225, this.medio_225, this.medio_225,
    this.medio_225, this.medio_225, this.medio_225, this.medio_225,
    this.medio_225, this.medio_225, this.medio_225, this.medio_225
  ];
  private puntos = [
      this.medio_225, this.medio_225, this.medio_225, this.medio_225,
      this.medio_225, this.arriba_izquierda_1, this.arriba_derecha_1, this.medio_225, this.medio_225,
          this.abajo_izquierda_1, this.abajo_derecha_1, this.medio_225,
      this.medio_225, this.medio_225, this.medio_225, this.medio_225,
      this.medio_225, this.medio_225, this.medio_225, this.medio_225,
      this.medio_225, this.arriba_izquierda_1, this.arriba_derecha_1, this.medio_225, this.medio_225,
          this.abajo_izquierda_1, this.abajo_derecha_1, this.medio_225,
      this.medio_225, this.medio_225, this.medio_225, this.medio_225
  ];
  private numeroCero = [
    this.arriba_izquierda_1, this.horizontal, this.horizontal, this.arriba_derecha_1,
    this.vertical, this.arriba_izquierda_1, this.arriba_derecha_1, this.vertical,
    this.vertical, this.vertical, this.vertical, this.vertical,
    this.vertical, this.vertical, this.vertical, this.vertical,
    this.vertical, this.vertical, this.vertical, this.vertical,
    this.vertical, this.vertical, this.vertical, this.vertical,
    this.vertical, this.abajo_izquierda_1, this.abajo_derecha_1, this.vertical,
    this.abajo_izquierda_1, this.horizontal, this.horizontal, this.abajo_derecha_1
  ];
  private numeroUno = [
    this.medio_225, this.medio_225, [90, 225], this.arriba_derecha_1,
    this.medio_225, [45, 180], this.medio_225, this.vertical,
    this.medio_225, this.abajo_izquierda_1, this.arriba_derecha_1, this.vertical,
    this.medio_225, this.medio_225, this.vertical, this.vertical,
    this.medio_225, this.medio_225, this.vertical, this.vertical,
    this.medio_225, this.medio_225, this.vertical, this.vertical,
    this.medio_225, this.medio_225, this.vertical, this.vertical,
    this.medio_225, this.medio_225, this.abajo_izquierda_1, this.abajo_derecha_1
  ];
  private numeroDos = [
    this.arriba_izquierda_1, this.horizontal, this.horizontal, this.arriba_derecha_1,
    this.abajo_izquierda_1, this.horizontal, this.arriba_derecha_1, this.vertical,
    this.medio_225, this.medio_225, [0, 225], [0, 225],
    this.medio_225, this.diagonal_1, this.diagonal_1, this.medio_225,
    [45, 180], [45, 180], this.medio_225, this.medio_225,
    this.vertical, this.vertical, this.medio_225, this.medio_225,
    this.vertical, this.abajo_izquierda_1, this.horizontal, this.arriba_derecha_1,
    this.abajo_izquierda_1, this.horizontal, this.horizontal, this.abajo_derecha_1
  ];
  private numeroTres = [
    this.arriba_izquierda_1, this.horizontal, this.horizontal, this.arriba_derecha_1,
    this.abajo_izquierda_1, this.horizontal, this.arriba_derecha_1, this.vertical,
    this.medio_225, this.medio_225, [0, 225], [0, 225],
    this.medio_225, [45, 180], [45, 180], this.medio_225,
    this.medio_225, [0, 135], [0, 135], this.medio_225,
    this.medio_225, this.medio_225, [315, 180], [315, 180],
    this.arriba_izquierda_1, this.horizontal, this.abajo_derecha_1, this.vertical,
    this.abajo_izquierda_1, this.horizontal, this.horizontal, this.abajo_derecha_1
  ];
  private numeroCuatro = [
    this.medio_225, this.medio_225, [90, 225], this.arriba_derecha_1,
    this.medio_225, this.diagonal_1, [180, 225], this.vertical,
    [45, 180], [45, 180], this.vertical, this.vertical,
    this.vertical, this.abajo_izquierda_1, [0, 270], this.vertical,
    this.abajo_izquierda_1, this.horizontal, this.arriba_derecha_1, this.vertical,
    this.medio_225, this.medio_225, this.vertical, this.vertical,
    this.medio_225, this.medio_225, this.vertical, this.vertical,
    this.medio_225, this.medio_225, this.abajo_izquierda_1, this.abajo_derecha_1
  ];
  private numeroCinco = [
    this.arriba_izquierda_1, this.horizontal, this.horizontal, this.arriba_derecha_1,
    this.vertical, this.arriba_izquierda_1, this.horizontal, this.abajo_derecha_1,
    this.vertical, this.abajo_izquierda_1, [135, 270], this.medio_225,
    this.abajo_izquierda_1, [135, 270], this.medio_225, [315, 180],
    this.medio_225, this.medio_225, [315, 180], this.vertical,
    this.medio_225, this.medio_225, [0, 225], [0, 225],
    this.arriba_izquierda_1, [45, 270], this.diagonal_1, this.medio_225,
    this.abajo_izquierda_1, [45, 270], this.medio_225, this.medio_225
  ];
  private numeroSeis = [
    this.arriba_izquierda_1, this.horizontal, this.horizontal, this.arriba_derecha_1,
    this.vertical, this.arriba_izquierda_1, this.horizontal, this.abajo_derecha_1,
    this.vertical, this.vertical, this.medio_225, this.medio_225,
    this.vertical, this.abajo_izquierda_1, this.horizontal, this.arriba_derecha_1,
    this.vertical, this.arriba_izquierda_1, this.arriba_derecha_1, this.vertical,
    this.vertical, this.vertical, this.vertical, this.vertical,
    this.vertical, this.abajo_izquierda_1, this.abajo_derecha_1, this.vertical,
    this.abajo_izquierda_1, this.horizontal, this.horizontal, this.abajo_derecha_1
  ];
  private numeroSiete = [
    this.arriba_izquierda_1, this.horizontal, this.horizontal, this.arriba_derecha_1,
    this.abajo_izquierda_1, this.horizontal, this.arriba_derecha_1, this.vertical,
    this.medio_225, this.medio_225, this.vertical, this.vertical,
    this.medio_225, this.medio_225, this.vertical, this.vertical,
    this.medio_225, this.medio_225, this.vertical, this.vertical,
    this.medio_225, this.medio_225, this.vertical, this.vertical,
    this.medio_225, this.medio_225, this.vertical, this.vertical,
    this.medio_225, this.medio_225, this.abajo_izquierda_1, this.abajo_derecha_1
  ];
  private numeroOcho = [
    this.arriba_izquierda_1, this.horizontal, this.horizontal, this.arriba_derecha_1,
    this.vertical, this.arriba_izquierda_1, this.arriba_derecha_1, this.vertical,
    this.vertical, this.vertical, this.vertical, this.vertical,
    this.vertical, this.abajo_izquierda_1, this.abajo_derecha_1, this.vertical,
    this.vertical, this.arriba_izquierda_1, this.arriba_derecha_1, this.vertical,
    this.vertical, this.vertical, this.vertical, this.vertical,
    this.vertical, this.abajo_izquierda_1, this.abajo_derecha_1, this.vertical,
    this.abajo_izquierda_1, this.horizontal, this.horizontal, this.abajo_derecha_1
  ];
  private numeroNueve = [
    this.arriba_izquierda_1, this.horizontal, this.horizontal, this.arriba_derecha_1,
    this.vertical, this.arriba_izquierda_1, this.arriba_derecha_1, this.vertical,
    this.vertical, this.vertical, this.vertical, this.vertical,
    this.vertical, this.abajo_izquierda_1, this.abajo_derecha_1, this.vertical,
    this.abajo_izquierda_1, this.horizontal, this.arriba_derecha_1, this.vertical,
    this.medio_225, this.medio_225, this.vertical, this.vertical,
    this.arriba_izquierda_1, this.horizontal, this.abajo_derecha_1, this.vertical,
    this.abajo_izquierda_1, this.horizontal, this.horizontal, this.abajo_derecha_1
  ];


  constructor() {}

  ngOnInit(): void {
    // INICIALIZO RELOJES
    for (let a = 0; a < this.totalRelojesNumero; a++) {
      this.relojesNumero_1.push( {nro: a, position_1: 225, position_2: 225, pos_final_1: 225, pos_final_2: 225} );
      this.relojesNumero_2.push( {nro: a, position_1: 225, position_2: 225, pos_final_1: 225, pos_final_2: 225} );
      this.relojesNumero_3.push( {nro: a, position_1: 225, position_2: 225, pos_final_1: 225, pos_final_2: 225} );
      this.relojesNumero_4.push( {nro: a, position_1: 225, position_2: 225, pos_final_1: 225, pos_final_2: 225} );
      this.relojesNumero_5.push( {nro: a, position_1: 225, position_2: 225, pos_final_1: 225, pos_final_2: 225} );
      this.relojesNumero_6.push( {nro: a, position_1: 225, position_2: 225, pos_final_1: 225, pos_final_2: 225} );
    }
    for (let a = 0; a < this.totalRelojesPuntos; a++) {
      this.relojesPuntos.push( {nro: a, position_1: 0, position_2: 0, pos_final_1: 0, pos_final_2: 0} );
    }

    setInterval(() => {
      const hora = new Date();
      this.minutos = hora.getMinutes();
      this.horas = hora.getHours();
      this.segundos = hora.getSeconds();

      this.setearCaracter(this.relojesPuntos, this.puntos);

      this.dibujarHora(parseInt('' + (this.horas / 10), 10), 1);
      this.dibujarHora(parseInt('' + (this.horas % 10), 10), 2);
      this.dibujarHora(parseInt('' + (this.minutos / 10), 10), 3);
      this.dibujarHora(parseInt('' + (this.minutos % 10), 10), 4);
      this.dibujarHora(parseInt('' + (this.segundos / 10), 10), 5);
      this.dibujarHora(parseInt('' + (this.segundos % 10), 10), 6);
    }, 1000);
  }


  dibujarHora(numero: number, caracter: number) {
    let relojCaracter;
    let maquetaNumero;
    if (caracter === 1) {
      relojCaracter = this.relojesNumero_1;
    } else if (caracter === 2) {
      relojCaracter = this.relojesNumero_2;
    } else if (caracter === 3) {
      relojCaracter = this.relojesNumero_3;
    } else if (caracter === 4) {
      relojCaracter = this.relojesNumero_4;
    } else if (caracter === 5) {
      relojCaracter = this.relojesNumero_5;
    } else if (caracter === 6) {
      relojCaracter = this.relojesNumero_6;
    }

    if (numero === 0) {
      maquetaNumero = this.numeroCero;
    } else if (numero === 1) {
      maquetaNumero = this.numeroUno;
    } else if (numero === 2) {
      maquetaNumero = this.numeroDos;
    } else if (numero === 3) {
      maquetaNumero = this.numeroTres;
    } else if (numero === 4) {
      maquetaNumero = this.numeroCuatro;
    } else if (numero === 5) {
      maquetaNumero = this.numeroCinco;
    } else if (numero === 6) {
      maquetaNumero = this.numeroSeis;
    } else if (numero === 7) {
      maquetaNumero = this.numeroSiete;
    } else if (numero === 8) {
      maquetaNumero = this.numeroOcho;
    } else if (numero === 9) {
      maquetaNumero = this.numeroNueve;
    } else {
      maquetaNumero = this.puntos;
    }

    this.setearCaracter(relojCaracter, maquetaNumero);
  }

  armarPuntos() {
    this.setearCaracter(this.relojesPuntos, this.puntos);
    setTimeout(() => {
      this.setearCaracter(this.relojesPuntos, this.vacio);
    }, (this.tiempoAnimacion + 1000));
  }


  /**
   * Setea los valores de los reloje de un caracter
   * @param caracter
   * @param valores
   */
  setearCaracter(caracter, valores) {
    for (let a = 0; a < caracter.length; a++) {
      caracter[a].position_1 = valores[a][0];
      caracter[a].position_2 = valores[a][1];
    }
    setTimeout(() => {
      for (let a = 0; a < caracter.length; a++) {
        caracter[a].pos_final_1 = valores[a][0];
        caracter[a].pos_final_2 = valores[a][1];
      }
    }, (this.tiempoAnimacion - 1));
  }
}



export class Reloj {
  nro: number;
  position_1: number;
  position_2: number;
  pos_final_1: number;
  pos_final_2: number;
}