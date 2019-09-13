(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-2\">\n      <div style=\"float: left; width: 25%;\" *ngFor=\"let reloj of relojesNumero_1; let i = index;\">\n        <div class=\"reloj\">\n          <div class=\"aguja\" [ngClass]=\"{'gira-0': reloj.position_1 == 0, 'gira-45': reloj.position_1 == 45, 'gira-90': reloj.position_1 == 90, 'gira-135': reloj.position_1 == 135, 'gira-180': reloj.position_1 == 180, 'gira-225': reloj.position_1 == 225, 'gira-270': reloj.position_1 == 270, 'gira-315': reloj.position_1 == 315,\n                                        'girado-0': reloj.pos_final_1 == 0, 'girado-45': reloj.pos_final_1 == 45, 'girado-90': reloj.pos_final_1 == 90, 'girado-135': reloj.pos_final_1 == 135, 'girado-180': reloj.pos_final_1 == 180, 'girado-225': reloj.pos_final_1 == 225, 'girado-270': reloj.pos_final_1 == 270, 'girado-315': reloj.pos_final_1 == 315}\">\n            <div class=\"contenido\"></div>\n          </div>\n          <div class=\"aguja\" [ngClass]=\"{'gira-0': reloj.position_2 == 0, 'gira-45': reloj.position_2 == 45, 'gira-90': reloj.position_2 == 90, 'gira-135': reloj.position_2 == 135, 'gira-180': reloj.position_2 == 180, 'gira-225': reloj.position_2 == 225, 'gira-270': reloj.position_2 == 270, 'gira-315': reloj.position_2 == 315,\n                                        'girado-0': reloj.pos_final_2 == 0, 'girado-45': reloj.pos_final_2 == 45, 'girado-90': reloj.pos_final_2 == 90, 'girado-135': reloj.pos_final_2 == 135, 'girado-180': reloj.pos_final_2 == 180, 'girado-225': reloj.pos_final_2 == 225, 'girado-270': reloj.pos_final_2 == 270, 'girado-315': reloj.pos_final_2 == 315}\">\n            <div class=\"contenido\"></div>\n          </div>\n        </div>\n      </div>\n  </div>\n  <div class=\"col-2\">\n      <div style=\"float: left; width: 25%;\" *ngFor=\"let reloj of relojesNumero_2; let i = index;\">\n        <div class=\"reloj\">\n          <div class=\"aguja\" [ngClass]=\"{'gira-0': reloj.position_1 == 0, 'gira-45': reloj.position_1 == 45, 'gira-90': reloj.position_1 == 90, 'gira-135': reloj.position_1 == 135, 'gira-180': reloj.position_1 == 180, 'gira-225': reloj.position_1 == 225, 'gira-270': reloj.position_1 == 270, 'gira-315': reloj.position_1 == 315,\n                                        'girado-0': reloj.pos_final_1 == 0, 'girado-45': reloj.pos_final_1 == 45, 'girado-90': reloj.pos_final_1 == 90, 'girado-135': reloj.pos_final_1 == 135, 'girado-180': reloj.pos_final_1 == 180, 'girado-225': reloj.pos_final_1 == 225, 'girado-270': reloj.pos_final_1 == 270, 'girado-315': reloj.pos_final_1 == 315}\">\n            <div class=\"contenido\"></div>\n          </div>\n          <div class=\"aguja\" [ngClass]=\"{'gira-0': reloj.position_2 == 0, 'gira-45': reloj.position_2 == 45, 'gira-90': reloj.position_2 == 90, 'gira-135': reloj.position_2 == 135, 'gira-180': reloj.position_2 == 180, 'gira-225': reloj.position_2 == 225, 'gira-270': reloj.position_2 == 270, 'gira-315': reloj.position_2 == 315,\n                                        'girado-0': reloj.pos_final_2 == 0, 'girado-45': reloj.pos_final_2 == 45, 'girado-90': reloj.pos_final_2 == 90, 'girado-135': reloj.pos_final_2 == 135, 'girado-180': reloj.pos_final_2 == 180, 'girado-225': reloj.pos_final_2 == 225, 'girado-270': reloj.pos_final_2 == 270, 'girado-315': reloj.pos_final_2 == 315}\">\n            <div class=\"contenido\"></div>\n          </div>\n        </div>\n      </div>\n  </div>\n\n  <div class=\"col-2\">\n      <div style=\"float: left; width: 25%;\" *ngFor=\"let reloj of relojesPuntos; let i = index;\">\n        <div class=\"reloj\">\n          <div class=\"aguja\" [ngClass]=\"{'gira-0': reloj.position_1 == 0, 'gira-45': reloj.position_1 == 45, 'gira-90': reloj.position_1 == 90, 'gira-135': reloj.position_1 == 135, 'gira-180': reloj.position_1 == 180, 'gira-225': reloj.position_1 == 225, 'gira-270': reloj.position_1 == 270, 'gira-315': reloj.position_1 == 315,\n                                        'girado-0': reloj.pos_final_1 == 0, 'girado-45': reloj.pos_final_1 == 45, 'girado-90': reloj.pos_final_1 == 90, 'girado-135': reloj.pos_final_1 == 135, 'girado-180': reloj.pos_final_1 == 180, 'girado-225': reloj.pos_final_1 == 225, 'girado-270': reloj.pos_final_1 == 270, 'girado-315': reloj.pos_final_1 == 315}\">\n            <div class=\"contenido\"></div>\n          </div>\n          <div class=\"aguja\" [ngClass]=\"{'gira-0': reloj.position_2 == 0, 'gira-45': reloj.position_2 == 45, 'gira-90': reloj.position_2 == 90, 'gira-135': reloj.position_2 == 135, 'gira-180': reloj.position_2 == 180, 'gira-225': reloj.position_2 == 225, 'gira-270': reloj.position_2 == 270, 'gira-315': reloj.position_2 == 315,\n                                        'girado-0': reloj.pos_final_2 == 0, 'girado-45': reloj.pos_final_2 == 45, 'girado-90': reloj.pos_final_2 == 90, 'girado-135': reloj.pos_final_2 == 135, 'girado-180': reloj.pos_final_2 == 180, 'girado-225': reloj.pos_final_2 == 225, 'girado-270': reloj.pos_final_2 == 270, 'girado-315': reloj.pos_final_2 == 315}\">\n            <div class=\"contenido\"></div>\n          </div>\n        </div>\n      </div>\n  </div>\n\n  <div class=\"col-2\">\n      <div style=\"float: left; width: 25%;\" *ngFor=\"let reloj of relojesNumero_3; let i = index;\">\n        <div class=\"reloj\">\n          <div class=\"aguja\" [ngClass]=\"{'gira-0': reloj.position_1 == 0, 'gira-45': reloj.position_1 == 45, 'gira-90': reloj.position_1 == 90, 'gira-135': reloj.position_1 == 135, 'gira-180': reloj.position_1 == 180, 'gira-225': reloj.position_1 == 225, 'gira-270': reloj.position_1 == 270, 'gira-315': reloj.position_1 == 315,\n                                        'girado-0': reloj.pos_final_1 == 0, 'girado-45': reloj.pos_final_1 == 45, 'girado-90': reloj.pos_final_1 == 90, 'girado-135': reloj.pos_final_1 == 135, 'girado-180': reloj.pos_final_1 == 180, 'girado-225': reloj.pos_final_1 == 225, 'girado-270': reloj.pos_final_1 == 270, 'girado-315': reloj.pos_final_1 == 315}\">\n            <div class=\"contenido\"></div>\n          </div>\n          <div class=\"aguja\" [ngClass]=\"{'gira-0': reloj.position_2 == 0, 'gira-45': reloj.position_2 == 45, 'gira-90': reloj.position_2 == 90, 'gira-135': reloj.position_2 == 135, 'gira-180': reloj.position_2 == 180, 'gira-225': reloj.position_2 == 225, 'gira-270': reloj.position_2 == 270, 'gira-315': reloj.position_2 == 315,\n                                        'girado-0': reloj.pos_final_2 == 0, 'girado-45': reloj.pos_final_2 == 45, 'girado-90': reloj.pos_final_2 == 90, 'girado-135': reloj.pos_final_2 == 135, 'girado-180': reloj.pos_final_2 == 180, 'girado-225': reloj.pos_final_2 == 225, 'girado-270': reloj.pos_final_2 == 270, 'girado-315': reloj.pos_final_2 == 315}\">\n            <div class=\"contenido\"></div>\n          </div>\n        </div>\n      </div>\n  </div>\n  <div class=\"col-2\">\n      <div style=\"float: left; width: 25%;\" *ngFor=\"let reloj of relojesNumero_4; let i = index;\">\n        <div class=\"reloj\">\n          <div class=\"aguja\" [ngClass]=\"{'gira-0': reloj.position_1 == 0, 'gira-45': reloj.position_1 == 45, 'gira-90': reloj.position_1 == 90, 'gira-135': reloj.position_1 == 135, 'gira-180': reloj.position_1 == 180, 'gira-225': reloj.position_1 == 225, 'gira-270': reloj.position_1 == 270, 'gira-315': reloj.position_1 == 315,\n                                        'girado-0': reloj.pos_final_1 == 0, 'girado-45': reloj.pos_final_1 == 45, 'girado-90': reloj.pos_final_1 == 90, 'girado-135': reloj.pos_final_1 == 135, 'girado-180': reloj.pos_final_1 == 180, 'girado-225': reloj.pos_final_1 == 225, 'girado-270': reloj.pos_final_1 == 270, 'girado-315': reloj.pos_final_1 == 315}\">\n            <div class=\"contenido\"></div>\n          </div>\n          <div class=\"aguja\" [ngClass]=\"{'gira-0': reloj.position_2 == 0, 'gira-45': reloj.position_2 == 45, 'gira-90': reloj.position_2 == 90, 'gira-135': reloj.position_2 == 135, 'gira-180': reloj.position_2 == 180, 'gira-225': reloj.position_2 == 225, 'gira-270': reloj.position_2 == 270, 'gira-315': reloj.position_2 == 315,\n                                        'girado-0': reloj.pos_final_2 == 0, 'girado-45': reloj.pos_final_2 == 45, 'girado-90': reloj.pos_final_2 == 90, 'girado-135': reloj.pos_final_2 == 135, 'girado-180': reloj.pos_final_2 == 180, 'girado-225': reloj.pos_final_2 == 225, 'girado-270': reloj.pos_final_2 == 270, 'girado-315': reloj.pos_final_2 == 315}\">\n            <div class=\"contenido\"></div>\n          </div>\n        </div>\n      </div>\n  </div>\n\n\n  <div class=\"col-2\">\n      <div style=\"float: left; width: 25%;\" *ngFor=\"let reloj of relojesNumero_5; let i = index;\">\n        <div class=\"reloj\">\n          <div class=\"aguja\" [ngClass]=\"{'gira-0': reloj.position_1 == 0, 'gira-45': reloj.position_1 == 45, 'gira-90': reloj.position_1 == 90, 'gira-135': reloj.position_1 == 135, 'gira-180': reloj.position_1 == 180, 'gira-225': reloj.position_1 == 225, 'gira-270': reloj.position_1 == 270, 'gira-315': reloj.position_1 == 315,\n                                        'girado-0': reloj.pos_final_1 == 0, 'girado-45': reloj.pos_final_1 == 45, 'girado-90': reloj.pos_final_1 == 90, 'girado-135': reloj.pos_final_1 == 135, 'girado-180': reloj.pos_final_1 == 180, 'girado-225': reloj.pos_final_1 == 225, 'girado-270': reloj.pos_final_1 == 270, 'girado-315': reloj.pos_final_1 == 315}\">\n            <div class=\"contenido\"></div>\n          </div>\n          <div class=\"aguja\" [ngClass]=\"{'gira-0': reloj.position_2 == 0, 'gira-45': reloj.position_2 == 45, 'gira-90': reloj.position_2 == 90, 'gira-135': reloj.position_2 == 135, 'gira-180': reloj.position_2 == 180, 'gira-225': reloj.position_2 == 225, 'gira-270': reloj.position_2 == 270, 'gira-315': reloj.position_2 == 315,\n                                        'girado-0': reloj.pos_final_2 == 0, 'girado-45': reloj.pos_final_2 == 45, 'girado-90': reloj.pos_final_2 == 90, 'girado-135': reloj.pos_final_2 == 135, 'girado-180': reloj.pos_final_2 == 180, 'girado-225': reloj.pos_final_2 == 225, 'girado-270': reloj.pos_final_2 == 270, 'girado-315': reloj.pos_final_2 == 315}\">\n            <div class=\"contenido\"></div>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n  \n  <!-- <div class=\"row\">\n    <div class=\"col-1\" style=\"float: left; width: 5%;\" *ngFor=\"let reloj of relojes; let i = index;\">\n      <div class=\"reloj\">\n        <div class=\"aguja\" [ngClass]=\"{'gira-0': reloj.position_1 == 0, 'gira-90': reloj.position_1 == 90, 'gira-180': reloj.position_1 == 180, 'gira-270': reloj.position_1 == 270}\">\n          <div class=\"contenido\"></div>\n        </div>\n        <div class=\"aguja\" [ngClass]=\"{'gira-0': reloj.position_2 == 0, 'gira-90': reloj.position_2 == 90, 'gira-180': reloj.position_2 == 180, 'gira-270': reloj.position_2 == 270}\">\n          <div class=\"contenido\"></div>\n        </div>\n      </div>\n    </div>\n  </div> -->\n  \n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, Reloj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reloj", function() { return Reloj; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.relojesNumero_1 = Array();
        this.relojesNumero_2 = Array();
        this.relojesNumero_3 = Array();
        this.relojesNumero_4 = Array();
        this.relojesNumero_5 = Array();
        this.relojesNumero_6 = Array();
        this.relojesPuntos = Array();
        this.tiempoAnimacion = 3000;
        this.totalRelojesNumero = 32;
        this.totalRelojesPuntos = 32;
        this.arriba_izquierda_1 = [90, 180];
        this.arriba_izquierda_2 = [90, 225];
        this.arriba_derecha_1 = [270, 180];
        this.abajo_izquierda_1 = [90, 0];
        this.abajo_derecha_1 = [270, 0];
        this.vertical = [0, 180];
        this.horizontal = [90, 270];
        this.diagonal_1 = [45, 225];
        this.diagonal_2 = [135, 315];
        this.medio_0 = [0, 0];
        this.medio_45 = [45, 45];
        this.medio_90 = [90, 90];
        this.medio_135 = [135, 135];
        this.medio_180 = [180, 180];
        this.medio_225 = [225, 225];
        this.medio_270 = [270, 270];
        this.medio_315 = [315, 315];
        // FORMAS A UTILIZAR
        /*private numero = [this.arriba_izquierda, this.arriba_derecha, this.abajo_izquierda, this.abajo_derecha];
        private punto = [this.diagonal, this.arriba_izquierda, this.arriba_derecha, this.diagonal, this.diagonal,
              this.abajo_izquierda, this.abajo_derecha, this.diagonal];
        private lineaNada = [this.diagonal, this.diagonal, this.diagonal, this.diagonal]*/
        this.vacio = [
            this.medio_225, this.medio_225, this.medio_225, this.medio_225,
            this.medio_225, this.medio_225, this.medio_225, this.medio_225,
            this.medio_225, this.medio_225, this.medio_225, this.medio_225,
            this.medio_225, this.medio_225, this.medio_225, this.medio_225,
            this.medio_225, this.medio_225, this.medio_225, this.medio_225,
            this.medio_225, this.medio_225, this.medio_225, this.medio_225,
            this.medio_225, this.medio_225, this.medio_225, this.medio_225,
            this.medio_225, this.medio_225, this.medio_225, this.medio_225
        ];
        this.puntos = [
            this.medio_225, this.medio_225, this.medio_225, this.medio_225,
            this.medio_225, this.arriba_izquierda_1, this.arriba_derecha_1, this.medio_225, this.medio_225,
            this.abajo_izquierda_1, this.abajo_derecha_1, this.medio_225,
            this.medio_225, this.medio_225, this.medio_225, this.medio_225,
            this.medio_225, this.medio_225, this.medio_225, this.medio_225,
            this.medio_225, this.arriba_izquierda_1, this.arriba_derecha_1, this.medio_225, this.medio_225,
            this.abajo_izquierda_1, this.abajo_derecha_1, this.medio_225,
            this.medio_225, this.medio_225, this.medio_225, this.medio_225
        ];
        this.numeroCero = [
            this.arriba_izquierda_1, this.horizontal, this.horizontal, this.arriba_derecha_1,
            this.vertical, this.arriba_izquierda_1, this.arriba_derecha_1, this.vertical,
            this.vertical, this.vertical, this.vertical, this.vertical,
            this.vertical, this.vertical, this.vertical, this.vertical,
            this.vertical, this.vertical, this.vertical, this.vertical,
            this.vertical, this.vertical, this.vertical, this.vertical,
            this.vertical, this.abajo_izquierda_1, this.abajo_derecha_1, this.vertical,
            this.abajo_izquierda_1, this.horizontal, this.horizontal, this.abajo_derecha_1
        ];
        this.numeroUno = [
            this.medio_225, this.medio_225, [90, 225], this.arriba_derecha_1,
            this.medio_225, [45, 180], this.medio_225, this.vertical,
            this.medio_225, this.abajo_izquierda_1, this.arriba_derecha_1, this.vertical,
            this.medio_225, this.medio_225, this.vertical, this.vertical,
            this.medio_225, this.medio_225, this.vertical, this.vertical,
            this.medio_225, this.medio_225, this.vertical, this.vertical,
            this.medio_225, this.medio_225, this.vertical, this.vertical,
            this.medio_225, this.medio_225, this.abajo_izquierda_1, this.abajo_derecha_1
        ];
        this.numeroDos = [
            this.arriba_izquierda_1, this.horizontal, this.horizontal, this.arriba_derecha_1,
            this.abajo_izquierda_1, this.horizontal, this.arriba_derecha_1, this.vertical,
            this.medio_225, this.medio_225, [0, 225], [0, 225],
            this.medio_225, this.diagonal_1, this.diagonal_1, this.medio_225,
            [45, 180], [45, 180], this.medio_225, this.medio_225,
            this.vertical, this.vertical, this.medio_225, this.medio_225,
            this.vertical, this.abajo_izquierda_1, this.horizontal, this.arriba_derecha_1,
            this.abajo_izquierda_1, this.horizontal, this.horizontal, this.abajo_derecha_1
        ];
        this.numeroTres = [
            this.arriba_izquierda_1, this.horizontal, this.horizontal, this.arriba_derecha_1,
            this.abajo_izquierda_1, this.horizontal, this.arriba_derecha_1, this.vertical,
            this.medio_225, this.medio_225, [0, 225], [0, 225],
            this.medio_225, [45, 180], [45, 180], this.medio_225,
            this.medio_225, [0, 135], [0, 135], this.medio_225,
            this.medio_225, this.medio_225, [315, 180], [315, 180],
            this.arriba_izquierda_1, this.horizontal, this.abajo_derecha_1, this.vertical,
            this.abajo_izquierda_1, this.horizontal, this.horizontal, this.abajo_derecha_1
        ];
        this.numeroCuatro = [
            this.medio_225, this.medio_225, [90, 225], this.arriba_derecha_1,
            this.medio_225, this.diagonal_1, [180, 225], this.vertical,
            [45, 180], [45, 180], this.vertical, this.vertical,
            this.vertical, this.abajo_izquierda_1, [0, 270], this.vertical,
            this.abajo_izquierda_1, this.horizontal, this.arriba_derecha_1, this.vertical,
            this.medio_225, this.medio_225, this.vertical, this.vertical,
            this.medio_225, this.medio_225, this.vertical, this.vertical,
            this.medio_225, this.medio_225, this.abajo_izquierda_1, this.abajo_derecha_1
        ];
        this.numeroCinco = [
            this.arriba_izquierda_1, this.horizontal, this.horizontal, this.arriba_derecha_1,
            this.vertical, this.arriba_izquierda_1, this.horizontal, this.abajo_derecha_1,
            this.vertical, this.abajo_izquierda_1, [135, 270], this.medio_225,
            this.abajo_izquierda_1, [135, 270], this.medio_225, [315, 180],
            this.medio_225, this.medio_225, [315, 180], this.vertical,
            this.medio_225, this.medio_225, [0, 225], [0, 225],
            this.arriba_izquierda_1, [45, 270], this.diagonal_1, this.medio_225,
            this.abajo_izquierda_1, [45, 270], this.medio_225, this.medio_225
        ];
        this.numeroSeis = [
            this.arriba_izquierda_1, this.horizontal, this.horizontal, this.arriba_derecha_1,
            this.vertical, this.arriba_izquierda_1, this.horizontal, this.abajo_derecha_1,
            this.vertical, this.vertical, this.medio_225, this.medio_225,
            this.vertical, this.abajo_izquierda_1, this.horizontal, this.arriba_derecha_1,
            this.vertical, this.arriba_izquierda_1, this.arriba_derecha_1, this.vertical,
            this.vertical, this.vertical, this.vertical, this.vertical,
            this.vertical, this.abajo_izquierda_1, this.abajo_derecha_1, this.vertical,
            this.abajo_izquierda_1, this.horizontal, this.horizontal, this.abajo_derecha_1
        ];
        this.numeroSiete = [
            this.arriba_izquierda_1, this.horizontal, this.horizontal, this.arriba_derecha_1,
            this.abajo_izquierda_1, this.horizontal, this.arriba_derecha_1, this.vertical,
            this.medio_225, this.medio_225, this.vertical, this.vertical,
            this.medio_225, this.medio_225, this.vertical, this.vertical,
            this.medio_225, this.medio_225, this.vertical, this.vertical,
            this.medio_225, this.medio_225, this.vertical, this.vertical,
            this.medio_225, this.medio_225, this.vertical, this.vertical,
            this.medio_225, this.medio_225, this.abajo_izquierda_1, this.abajo_derecha_1
        ];
        this.numeroOcho = [
            this.arriba_izquierda_1, this.horizontal, this.horizontal, this.arriba_derecha_1,
            this.vertical, this.arriba_izquierda_1, this.arriba_derecha_1, this.vertical,
            this.vertical, this.vertical, this.vertical, this.vertical,
            this.vertical, this.abajo_izquierda_1, this.abajo_derecha_1, this.vertical,
            this.vertical, this.arriba_izquierda_1, this.arriba_derecha_1, this.vertical,
            this.vertical, this.vertical, this.vertical, this.vertical,
            this.vertical, this.abajo_izquierda_1, this.abajo_derecha_1, this.vertical,
            this.abajo_izquierda_1, this.horizontal, this.horizontal, this.abajo_derecha_1
        ];
        this.numeroNueve = [
            this.arriba_izquierda_1, this.horizontal, this.horizontal, this.arriba_derecha_1,
            this.vertical, this.arriba_izquierda_1, this.arriba_derecha_1, this.vertical,
            this.vertical, this.vertical, this.vertical, this.vertical,
            this.vertical, this.abajo_izquierda_1, this.abajo_derecha_1, this.vertical,
            this.abajo_izquierda_1, this.horizontal, this.arriba_derecha_1, this.vertical,
            this.medio_225, this.medio_225, this.vertical, this.vertical,
            this.arriba_izquierda_1, this.horizontal, this.abajo_derecha_1, this.vertical,
            this.abajo_izquierda_1, this.horizontal, this.horizontal, this.abajo_derecha_1
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // INICIALIZO RELOJES
        for (var a = 0; a < this.totalRelojesNumero; a++) {
            this.relojesNumero_1.push({ nro: a, position_1: 225, position_2: 225, pos_final_1: 225, pos_final_2: 225 });
            this.relojesNumero_2.push({ nro: a, position_1: 225, position_2: 225, pos_final_1: 225, pos_final_2: 225 });
            this.relojesNumero_3.push({ nro: a, position_1: 225, position_2: 225, pos_final_1: 225, pos_final_2: 225 });
            this.relojesNumero_4.push({ nro: a, position_1: 225, position_2: 225, pos_final_1: 225, pos_final_2: 225 });
            this.relojesNumero_5.push({ nro: a, position_1: 225, position_2: 225, pos_final_1: 225, pos_final_2: 225 });
            this.relojesNumero_6.push({ nro: a, position_1: 225, position_2: 225, pos_final_1: 225, pos_final_2: 225 });
        }
        for (var a = 0; a < this.totalRelojesPuntos; a++) {
            this.relojesPuntos.push({ nro: a, position_1: 0, position_2: 0, pos_final_1: 0, pos_final_2: 0 });
        }
        setInterval(function () {
            var hora = new Date();
            _this.minutos = hora.getMinutes();
            _this.horas = hora.getHours();
            _this.segundos = hora.getSeconds();
            _this.setearCaracter(_this.relojesPuntos, _this.puntos);
            _this.dibujarHora(parseInt('' + (_this.horas / 10), 10), 1);
            _this.dibujarHora(parseInt('' + (_this.horas % 10), 10), 2);
            _this.dibujarHora(parseInt('' + (_this.minutos / 10), 10), 3);
            _this.dibujarHora(parseInt('' + (_this.minutos % 10), 10), 4);
            _this.dibujarHora(parseInt('' + (_this.segundos / 10), 10), 5);
            _this.dibujarHora(parseInt('' + (_this.segundos % 10), 10), 6);
        }, 1000);
    };
    AppComponent.prototype.dibujarHora = function (numero, caracter) {
        var relojCaracter;
        var maquetaNumero;
        if (caracter === 1) {
            relojCaracter = this.relojesNumero_1;
        }
        else if (caracter === 2) {
            relojCaracter = this.relojesNumero_2;
        }
        else if (caracter === 3) {
            relojCaracter = this.relojesNumero_3;
        }
        else if (caracter === 4) {
            relojCaracter = this.relojesNumero_4;
        }
        else if (caracter === 5) {
            relojCaracter = this.relojesNumero_5;
        }
        else if (caracter === 6) {
            relojCaracter = this.relojesNumero_6;
        }
        if (numero === 0) {
            maquetaNumero = this.numeroCero;
        }
        else if (numero === 1) {
            maquetaNumero = this.numeroUno;
        }
        else if (numero === 2) {
            maquetaNumero = this.numeroDos;
        }
        else if (numero === 3) {
            maquetaNumero = this.numeroTres;
        }
        else if (numero === 4) {
            maquetaNumero = this.numeroCuatro;
        }
        else if (numero === 5) {
            maquetaNumero = this.numeroCinco;
        }
        else if (numero === 6) {
            maquetaNumero = this.numeroSeis;
        }
        else if (numero === 7) {
            maquetaNumero = this.numeroSiete;
        }
        else if (numero === 8) {
            maquetaNumero = this.numeroOcho;
        }
        else if (numero === 9) {
            maquetaNumero = this.numeroNueve;
        }
        else {
            maquetaNumero = this.puntos;
        }
        this.setearCaracter(relojCaracter, maquetaNumero);
    };
    AppComponent.prototype.armarPuntos = function () {
        var _this = this;
        this.setearCaracter(this.relojesPuntos, this.puntos);
        setTimeout(function () {
            _this.setearCaracter(_this.relojesPuntos, _this.vacio);
        }, (this.tiempoAnimacion + 1000));
    };
    /**
     * Setea los valores de los reloje de un caracter
     * @param caracter
     * @param valores
     */
    AppComponent.prototype.setearCaracter = function (caracter, valores) {
        for (var a = 0; a < caracter.length; a++) {
            caracter[a].position_1 = valores[a][0];
            caracter[a].position_2 = valores[a][1];
        }
        setTimeout(function () {
            for (var a = 0; a < caracter.length; a++) {
                caracter[a].pos_final_1 = valores[a][0];
                caracter[a].pos_final_2 = valores[a][1];
            }
        }, (this.tiempoAnimacion - 1));
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

var Reloj = /** @class */ (function () {
    function Reloj() {
    }
    return Reloj;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ext-mauricit\workspace-node-js\reloj\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map