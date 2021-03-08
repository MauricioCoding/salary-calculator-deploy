(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mauricho/Desktop/Projects/Angular-Workshop/salary-calculator/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "LkI3":
/*!****************************************************!*\
  !*** ./src/app/calculator/calculator.component.ts ***!
  \****************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class CalculatorComponent {
    constructor() {
        this.currentTax = '';
        this.monthlyCurrentTax = '';
        this.roundCurrentTax = '';
        this.globalTax = '';
        this.monthlyGlobalTax = '';
        this.roundGlobalTax = '';
        this.totalMonth = '';
        this.plusTax = '';
        this.salary = '';
        this.noticeMenor = '';
        this.placeholder = 'ej: ₡1.200.000';
    }
    ngOnInit() {
    }
    // 7millones a 10 millones 20%
    // 2millones a 6millones 25%
    // 1millon 2millon 100%
    // 1000000 842000 260%
    // 684000 842000 20%
    onSubmit(pSalary) {
        this.salary = pSalary;
        if (this.salary > 684000) {
            switch (true) {
                case this.salary > 842000 && this.salary < 1236000:
                    this.currentTax = ((this.salary - 840000) * 0.10) * 12;
                    this.monthlyCurrentTax = ((this.salary - 840000) * 0.10);
                    break;
                case this.salary > 1236000 && this.salary < 2169000:
                    this.currentTax = ((1239000 - 842000) * 0.10 + (this.salary - 1239000) * 0.15) * 12;
                    this.monthlyCurrentTax = (1239000 - 842000) * 0.10 + (this.salary - 1239000) * 0.15;
                    break;
                case this.salary > 2169000 && this.salary <= 4337000:
                    this.currentTax = ((1236000 - 842000) * 0.10 + (2169000 - 1239000) * 0.15 + (this.salary - 2169000) * 0.20) * 12;
                    this.monthlyCurrentTax = (1236000 - 842000) * 0.10 + (2169000 - 1239000) * 0.15 + (this.salary - 2169000) * 0.20;
                    break;
                case this.salary > 4337000:
                    // tslint:disable-next-line:max-line-length
                    this.currentTax = (((((1236000 - 842000) * 0.10) + ((2169000 - 1236000) * 0.15)) + ((4337000 - 2169000) * 0.20)) + (this.salary - 4337000) * 0.25) * 12;
                    // tslint:disable-next-line:max-line-length
                    this.monthlyCurrentTax = (((((1236000 - 842000) * 0.10) + ((2169000 - 1236000) * 0.15)) + ((4337000 - 2169000) * 0.20)) + (this.salary - 4337000) * 0.25);
                    break;
            }
            switch (true) {
                case this.salary >= 684000 && this.salary <= 842000:
                    this.currentTax = 0;
                    this.globalTax = (this.salary) * 0.20 * 12;
                    break;
                case this.salary >= 842000 && this.salary <= 1000000:
                    this.monthlyGlobalTax = this.monthlyCurrentTax * 0.98;
                    this.totalMonth = this.monthlyCurrentTax + this.monthlyGlobalTax;
                    this.globalTax = this.totalMonth * 12;
                    break;
                case this.salary >= 1000000 && this.salary < 2000000:
                    this.monthlyGlobalTax = this.monthlyCurrentTax * 0.98;
                    this.totalMonth = this.monthlyCurrentTax + this.monthlyGlobalTax;
                    this.globalTax = this.totalMonth * 12;
                    break;
                case this.salary >= 2000000 && this.salary < 6000000:
                    this.monthlyGlobalTax = this.monthlyCurrentTax * 0.25;
                    this.totalMonth = this.monthlyCurrentTax + this.monthlyGlobalTax;
                    this.globalTax = this.totalMonth * 12;
                    break;
                case this.salary >= 6000000:
                    this.monthlyGlobalTax = this.monthlyCurrentTax * 0.20;
                    this.totalMonth = this.monthlyCurrentTax + this.monthlyGlobalTax;
                    this.globalTax = this.totalMonth * 12;
                    break;
            }
            this.roundCurrentTax = Math.round(this.currentTax);
            this.roundGlobalTax = Math.round(this.globalTax);
            if (this.roundGlobalTax > this.roundCurrentTax) {
                this.plusTax = this.roundGlobalTax - this.roundCurrentTax;
            }
            else {
                this.plusTax = this.roundCurrentTax - this.roundGlobalTax;
            }
            console.log(this.roundGlobalTax, this.roundCurrentTax);
        }
        return this.currentTax;
    }
}
CalculatorComponent.ɵfac = function CalculatorComponent_Factory(t) { return new (t || CalculatorComponent)(); };
CalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculatorComponent, selectors: [["app-calculator"]], decls: 70, vars: 5, consts: [[1, "wrapper"], [1, "container"], [1, "row"], [1, "image-one", "col-md-6", "col-sm-12", "col-sm-6"], [1, "container", "img-position"], ["src", "assets/calculator-elements/cuadro_1.png", "alt", "", 1, "w-100", "h-100"], [1, "content", "content-top"], [1, "col-12"], [1, ""], [1, "col-3", "border", "rounded-left", "border-white", "pt-1", "px-md-2"], [1, "input-icon-one"], [1, "colon-simbol"], [1, "col-9", "px-0"], ["type", "text", 1, "border", "border-white", "rounded-right", 3, "placeholder", "ngModel", "ngModelChange"], [1, "image-two", "col-md-6", "col-sm-12", "col-sm-6"], ["src", "assets/calculator-elements/cuadro_2.png", "alt", "", 1, "w-100"], [1, "content"], [1, "row", "simbol-input"], [1, "col-3", "border", "rounded-left", "border-white", "pt-1", "px-md-2", "input-icon-two"], [1, "input-icon-two"], ["type", "text", "disabled", "disabled", 1, "border", "border-white", "rounded-right", 3, "value"], [1, "image-three", "col-md-6", "col-sm-12", "col-sm-6"], ["src", "assets/calculator-elements/cuadro_3.png", "alt", "", 1, "w-100"], [1, "input-icon-three"], [1, "image-four", "col-md-6", "col-sm-12", "col-sm-6"], [1, "content", "content-bottom"], [1, "col-3", "border", "rounded-left", "border-white", "px-md-2"], [1, "input-icon-four"], [1, "colon-simbol", "sibol-low"]], template: function CalculatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00BFCu\u00E1nto es su salario mensual?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u20A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_Template_input_ngModelChange_18_listener($event) { return ctx.salary = $event; })("ngModelChange", function CalculatorComponent_Template_input_ngModelChange_18_listener() { return ctx.onSubmit(ctx.salary); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Salario sin rebajos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Su pago anual de impuesto al salario ser\u00E1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u20A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Su pago anual de impuesto al salario es:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u20A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Impuesto adicional al a\u00F1o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u20A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.salary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.roundGlobalTax);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.roundCurrentTax);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.plusTax);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["h5[_ngcontent-%COMP%] {\n  font-size: 100%;\n  font-family: \"Poppins-bold\";\n}\n\np[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 100%;\n  font-family: \"Poppins-Medium\";\n}\n\ninput[type=text][_ngcontent-%COMP%] {\n  padding-left: 15%;\n}\n\ninput[_ngcontent-%COMP%]:disabled {\n  border: solid 1px #880000;\n  background-color: #ffffff;\n}\n\nh5[_ngcontent-%COMP%], p[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-align: center;\n}\n\n.img-position[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15%;\n  left: 20%;\n  right: 20%;\n  bottom: 20%;\n}\n\n.border[_ngcontent-%COMP%] {\n  border-width: 3px !important;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-left: 0;\n}\n\n.colon-simbol[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 150%;\n  padding-top: 0;\n  margin: 0;\n  color: #ffffff;\n}\n\n.sibol-low[_ngcontent-%COMP%] {\n  padding-top: 10%;\n}\n\n@media (min-width: 2000px) {\n  .content-top[_ngcontent-%COMP%] {\n    margin-top: 27px;\n  }\n}\n\n@media (min-width: 1024px) {\n  .content[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 40%;\n    left: 20%;\n    right: 20%;\n    bottom: 20%;\n  }\n\n  .content-bottom[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 47%;\n    left: 20%;\n    right: 20%;\n    bottom: 20%;\n  }\n\n  input[_ngcontent-%COMP%] {\n    height: 100%;\n    margin-bottom: 10%;\n  }\n\n  p[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n    margin-bottom: 2%;\n    font-size: 120%;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    padding-top: 15%;\n  }\n\n  .colon-simbol[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 200%;\n    color: #ffffff;\n  }\n}\n\n@media (min-width: 1024px) {\n  .colon-simbol[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 180%;\n    color: #ffffff;\n    height: 10px;\n    padding-left: 1px;\n    font-weight: bold;\n  }\n\n  .content-top[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 40%;\n    left: 20%;\n    right: 20%;\n    bottom: 60%;\n  }\n}\n\n@media (max-width: 425px) {\n  .colon-simbol[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 120%;\n    color: #ffffff;\n    height: 30px;\n    padding-left: 0;\n    padding-top: 0;\n    padding-bottom: 1%;\n    font-weight: bold;\n  }\n\n  .content-top[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 10%;\n    left: 20%;\n    right: 20%;\n    bottom: 20%;\n  }\n}\n\n@media (max-width: 375px) {\n  .colon-simbol[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 100%;\n    color: #ffffff;\n    height: 25px;\n    padding-left: 0;\n    padding-top: 0;\n    font-weight: bold;\n  }\n\n  .content-top[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 10%;\n    left: 20%;\n    right: 20%;\n    bottom: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhbGN1bGF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7QUFJRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUlGOztBQUZBO0VBQ0UsNEJBQUE7QUFLRjs7QUFIQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQU1GOztBQUhBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQU1GOztBQUpBO0VBQ0UsZ0JBQUE7QUFPRjs7QUFIQTtFQUNFO0lBQ0QsZ0JBQUE7RUFNQztBQUNGOztBQUpBO0VBRUU7SUFDRSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7RUFLRjs7RUFGQTtJQUNFLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtFQUtGOztFQUZBO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0VBS0Y7O0VBSEE7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUFNRjs7RUFGQTtJQUNFLGdCQUFBO0VBS0Y7O0VBRkE7SUFDRSxlQUFBO0lBQ0EsY0FBQTtFQUtGO0FBQ0Y7O0FBREE7RUFDRTtJQUNFLGVBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUFHRjs7RUFBQTtJQUNFLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtFQUdGO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLGVBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQUZGOztFQUlBO0lBQ0Usa0JBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQUZGOztFQUlBO0lBQ0Usa0JBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VBREY7QUFDRiIsImZpbGUiOiJjYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5oNXtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMtYm9sZCc7XG59XG5wLCBoNCwgaDZ7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLU1lZGl1bSc7XG59XG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgcGFkZGluZy1sZWZ0OiAxNSU7XG59XG5cbmlucHV0OmRpc2FibGVkIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzg4MDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbmg1LCBwLCBoNCwgaDYge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmltZy1wb3NpdGlvbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNSU7XG4gIGxlZnQ6IDIwJTtcbiAgcmlnaHQ6IDIwJTtcbiAgYm90dG9tOiAyMCU7XG59XG4uYm9yZGVye1xuICBib3JkZXItd2lkdGg6M3B4ICFpbXBvcnRhbnQ7XG59XG5pbnB1dHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uY29sb24tc2ltYm9sIHB7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgcGFkZGluZy10b3A6IDA7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uc2lib2wtbG93e1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgLmNvbnRlbnQtdG9we1xuIG1hcmdpbi10b3A6IDI3cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcblxuICAuY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDAlO1xuICAgIGxlZnQ6IDIwJTtcbiAgICByaWdodDogMjAlO1xuICAgIGJvdHRvbTogMjAlO1xuICB9XG5cbiAgLmNvbnRlbnQtYm90dG9te1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ3JTtcbiAgICBsZWZ0OiAyMCU7XG4gICAgcmlnaHQ6IDIwJTtcbiAgICBib3R0b206IDIwJTtcbiAgfVxuXG4gIGlucHV0e1xuICAgIGhlaWdodDoxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgfVxuICBwLCBoNCwgaDYsIGg1e1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgIGZvbnQtc2l6ZTogMTIwJTtcblxuICB9XG5cbiAgLmNvbnRhaW5lcntcbiAgICBwYWRkaW5nLXRvcDoxNSU7XG4gIH1cblxuICAuY29sb24tc2ltYm9sIHB7XG4gICAgZm9udC1zaXplOiAyMDAlO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuY29sb24tc2ltYm9sIHB7XG4gICAgZm9udC1zaXplOiAxODAlO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGhlaWdodDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5jb250ZW50LXRvcHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MCU7XG4gICAgbGVmdDogMjAlO1xuICAgIHJpZ2h0OiAyMCU7XG4gICAgYm90dG9tOiA2MCU7XG4gIH1cbn1cblxuXG5cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNvbG9uLXNpbWJvbCBwe1xuICAgIGZvbnQtc2l6ZTogMTIwJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuY29udGVudC10b3B7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAlO1xuICAgIGxlZnQ6IDIwJTtcbiAgICByaWdodDogMjAlO1xuICAgIGJvdHRvbTogMjAlO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuICAuY29sb24tc2ltYm9sIHB7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmNvbnRlbnQtdG9we1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwJTtcbiAgICBsZWZ0OiAyMCU7XG4gICAgcmlnaHQ6IDIwJTtcbiAgICBib3R0b206IDIwJTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'salary-calculator';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator/calculator.component */ "LkI3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_3__["CalculatorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator/calculator.component */ "LkI3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_1__["CalculatorComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map