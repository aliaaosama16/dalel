"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_auth_code_code_module_ts"],{

/***/ 88328:
/*!************************************************************!*\
  !*** ./node_modules/ng-otp-input/fesm2015/ng-otp-input.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgOtpInputComponent": () => (/* binding */ NgOtpInputComponent),
/* harmony export */   "NgOtpInputConfig": () => (/* binding */ Config),
/* harmony export */   "NgOtpInputModule": () => (/* binding */ NgOtpInputModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);







function NgOtpInputComponent_div_0_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function NgOtpInputComponent_div_0_input_1_Template_input_paste_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r5.handlePaste($event);
    })("keyup", function NgOtpInputComponent_div_0_input_1_Template_input_keyup_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const i_r3 = restoredCtx.index;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r7.onKeyUp($event, i_r3);
    })("input", function NgOtpInputComponent_div_0_input_1_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r8.onInput($event);
    })("keydown", function NgOtpInputComponent_div_0_input_1_Template_input_keydown_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const i_r3 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r9.onKeyDown($event, i_r3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("otp-input ", ctx_r1.config.inputClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "otp_", i_r3, "_", ctx_r1.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r2]);
  }
}

function NgOtpInputComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgOtpInputComponent_div_0_input_1_Template, 2, 10, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ng-otp-input-wrapper wrapper ", ctx_r0.config.containerClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "c_", ctx_r0.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.config.containerStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r0.otpForm == null ? null : ctx_r0.otpForm.controls));
  }
}

class KeyboardUtil {
  static ifBackspaceOrDelete(event) {
    return this.ifKey(event, 'Backspace;Delete;Del');
  }

  static ifRightArrow(event) {
    return this.ifKey(event, 'ArrowRight;Right');
  }

  static ifLeftArrow(event) {
    return this.ifKey(event, 'ArrowLeft;Left');
  }

  static ifSpacebar(event) {
    return this.ifKey(event, 'Spacebar; '); //don't remove the space after ; as this will check for space key
  }

  static ifKey(event, keys) {
    let keysToCheck = keys.split(';');
    return keysToCheck.some(k => k === event.key);
  }

}

class KeysPipe {
  transform(value) {
    return Object.keys(value);
  }

}
/** @nocollapse */


KeysPipe.ɵfac = function KeysPipe_Factory(t) {
  return new (t || KeysPipe)();
};
/** @nocollapse */


KeysPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "keys",
  type: KeysPipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'keys'
    }]
  }], null, null);
})();

class NgOtpInputComponent {
  constructor(keysPipe) {
    this.keysPipe = keysPipe;
    this.config = {
      length: 4
    }; // tslint:disable-next-line: no-output-on-prefix

    this.onInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.inputControls = new Array(this.config.length);
    this.componentKey = Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
  }

  get inputType() {
    var _a, _b;

    return ((_a = this.config) === null || _a === void 0 ? void 0 : _a.isPasswordInput) ? 'password' : ((_b = this.config) === null || _b === void 0 ? void 0 : _b.allowNumbersOnly) ? 'tel' : 'text';
  }

  ngOnInit() {
    this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});

    for (let index = 0; index < this.config.length; index++) {
      this.otpForm.addControl(this.getControlName(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl());
    }

    this.otpForm.valueChanges.subscribe(v => {
      this.keysPipe.transform(this.otpForm.controls).forEach(k => {
        var val = this.otpForm.controls[k].value;

        if (val && val.length > 1) {
          if (val.length >= this.config.length) {
            this.setValue(val);
          } else {
            this.rebuildValue();
          }
        }
      });
    });
  }

  ngAfterViewInit() {
    if (!this.config.disableAutoFocus) {
      const containerItem = document.getElementById(`c_${this.componentKey}`);

      if (containerItem) {
        const ele = containerItem.getElementsByClassName('otp-input')[0];

        if (ele && ele.focus) {
          ele.focus();
        }
      }
    }
  }

  getControlName(idx) {
    return `ctrl_${idx}`;
  }

  onKeyDown($event, inputIdx) {
    if (KeyboardUtil.ifSpacebar($event)) {
      $event.preventDefault();
      return false;
    }
  }

  onInput($event) {
    let newVal = this.currentVal ? `${this.currentVal}${$event.target.value}` : $event.target.value;

    if (this.config.allowNumbersOnly && !this.validateNumber(newVal)) {
      $event.target.value = '';
      $event.stopPropagation();
      $event.preventDefault();
      return;
    }
  }

  onKeyUp($event, inputIdx) {
    const nextInputId = this.appendKey(`otp_${inputIdx + 1}`);
    const prevInputId = this.appendKey(`otp_${inputIdx - 1}`);

    if (KeyboardUtil.ifRightArrow($event)) {
      $event.preventDefault();
      this.setSelected(nextInputId);
      return;
    }

    if (KeyboardUtil.ifLeftArrow($event)) {
      $event.preventDefault();
      this.setSelected(prevInputId);
      return;
    }

    if (KeyboardUtil.ifBackspaceOrDelete($event) && !$event.target.value) {
      this.setSelected(prevInputId);
      this.rebuildValue();
      return;
    }

    if (!$event.target.value) {
      return;
    }

    if (this.ifValidKeyCode($event)) {
      this.setSelected(nextInputId);
    }

    this.rebuildValue();
  }

  validateNumber(val) {
    return val && /^\d*\.?\d*$/.test(val);
  }

  appendKey(id) {
    return `${id}_${this.componentKey}`;
  }

  setSelected(eleId) {
    this.focusTo(eleId);
    const ele = document.getElementById(eleId);

    if (ele && ele.setSelectionRange) {
      setTimeout(() => {
        ele.setSelectionRange(0, 1);
      }, 0);
    }
  }

  ifValidKeyCode(event) {
    const inp = event.key;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile || /[a-zA-Z0-9-_]/.test(inp) || this.config.allowKeyCodes && this.config.allowKeyCodes.includes(event.keyCode);
  }

  focusTo(eleId) {
    const ele = document.getElementById(eleId);

    if (ele) {
      ele.focus();
    }
  } // method to set component value


  setValue(value) {
    if (this.config.allowNumbersOnly && isNaN(value)) {
      return;
    }

    this.otpForm.reset();

    if (!value) {
      this.rebuildValue();
      return;
    }

    value = value.toString().replace(/\s/g, ''); // remove whitespace

    Array.from(value).forEach((c, idx) => {
      if (this.otpForm.get(this.getControlName(idx))) {
        this.otpForm.get(this.getControlName(idx)).setValue(c);
      }
    });

    if (!this.config.disableAutoFocus) {
      const containerItem = document.getElementById(`c_${this.componentKey}`);
      var indexOfElementToFocus = value.length < this.config.length ? value.length : this.config.length - 1;
      let ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];

      if (ele && ele.focus) {
        ele.focus();
      }
    }

    this.rebuildValue();
  }

  rebuildValue() {
    var _a;

    let val = '';
    this.keysPipe.transform(this.otpForm.controls).forEach(k => {
      if (this.otpForm.controls[k].value) {
        let ctrlVal = this.otpForm.controls[k].value;
        let isLengthExceed = ctrlVal.length > 1;
        let isCaseTransformEnabled = !this.config.allowNumbersOnly && this.config.letterCase && (this.config.letterCase.toLocaleLowerCase() == 'upper' || this.config.letterCase.toLocaleLowerCase() == 'lower');
        ctrlVal = ctrlVal[0];
        let transformedVal = isCaseTransformEnabled ? this.config.letterCase.toLocaleLowerCase() == 'upper' ? ctrlVal.toUpperCase() : ctrlVal.toLowerCase() : ctrlVal;

        if (isCaseTransformEnabled && transformedVal == ctrlVal) {
          isCaseTransformEnabled = false;
        } else {
          ctrlVal = transformedVal;
        }

        val += ctrlVal;

        if (isLengthExceed || isCaseTransformEnabled) {
          this.otpForm.controls[k].setValue(ctrlVal);
        }
      }
    });

    if ((_a = this.formCtrl) === null || _a === void 0 ? void 0 : _a.setValue) {
      this.formCtrl.setValue(val);
    }

    this.onInputChange.emit(val);
    this.currentVal = val;
  }

  handlePaste(e) {
    // Get pasted data via clipboard API
    let clipboardData = e.clipboardData || window['clipboardData'];

    if (clipboardData) {
      var pastedData = clipboardData.getData('Text');
    } // Stop data actually being pasted into div


    e.stopPropagation();
    e.preventDefault();

    if (!pastedData || this.config.allowNumbersOnly && !this.validateNumber(pastedData)) {
      return;
    }

    this.setValue(pastedData);
  }

}
/** @nocollapse */


NgOtpInputComponent.ɵfac = function NgOtpInputComponent_Factory(t) {
  return new (t || NgOtpInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](KeysPipe));
};
/** @nocollapse */


NgOtpInputComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgOtpInputComponent,
  selectors: [["ng-otp-input"]],
  inputs: {
    config: "config",
    formCtrl: "formCtrl"
  },
  outputs: {
    onInputChange: "onInputChange"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "class", "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"], ["autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "ngStyle", "class", "formControl", "id", "paste", "keyup", "input", "keydown", 4, "ngFor", "ngForOf"], ["autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "ngStyle", "formControl", "id", "paste", "keyup", "input", "keydown"], ["inp", ""]],
  template: function NgOtpInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgOtpInputComponent_div_0_Template, 3, 8, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective],
  pipes: [KeysPipe],
  styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      // tslint:disable-next-line: component-selector
      selector: 'ng-otp-input',
      templateUrl: './ng-otp-input.component.html',
      styleUrls: ['./ng-otp-input.component.scss']
    }]
  }], function () {
    return [{
      type: KeysPipe
    }];
  }, {
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onInputChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    formCtrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class NgOtpInputModule {}
/** @nocollapse */


NgOtpInputModule.ɵfac = function NgOtpInputModule_Factory(t) {
  return new (t || NgOtpInputModule)();
};
/** @nocollapse */


NgOtpInputModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgOtpInputModule,
  declarations: [NgOtpInputComponent, KeysPipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule],
  exports: [NgOtpInputComponent]
});
/** @nocollapse */

NgOtpInputModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [KeysPipe],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule],
      declarations: [NgOtpInputComponent, KeysPipe],
      exports: [NgOtpInputComponent],
      providers: [KeysPipe]
    }]
  }], null, null);
})();

class Config {}
/*
 * Public API Surface of ng-otp-input
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 66781:
/*!**********************************************************!*\
  !*** ./src/app/modules/auth/code/code-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodePageRoutingModule": () => (/* binding */ CodePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _code_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code.page */ 81281);




const routes = [
    {
        path: '',
        component: _code_page__WEBPACK_IMPORTED_MODULE_0__.CodePage
    }
];
let CodePageRoutingModule = class CodePageRoutingModule {
};
CodePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CodePageRoutingModule);



/***/ }),

/***/ 8410:
/*!**************************************************!*\
  !*** ./src/app/modules/auth/code/code.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodePageModule": () => (/* binding */ CodePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _code_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-routing.module */ 66781);
/* harmony import */ var _code_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code.page */ 81281);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-otp-input */ 88328);









let CodePageModule = class CodePageModule {
};
CodePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _code_routing_module__WEBPACK_IMPORTED_MODULE_0__.CodePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_8__.NgOtpInputModule
        ],
        declarations: [_code_page__WEBPACK_IMPORTED_MODULE_1__.CodePage]
    })
], CodePageModule);



/***/ }),

/***/ 81281:
/*!************************************************!*\
  !*** ./src/app/modules/auth/code/code.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodePage": () => (/* binding */ CodePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_aliaaosama_Desktop_ionic_projects_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_code_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./code.page.html */ 20083);
/* harmony import */ var _code_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code.page.scss */ 47180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 9171);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language/language.service */ 40301);
/* harmony import */ var src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utilities/utilities.service */ 11062);









let CodePage = class CodePage {
    constructor(router, auth, menuCtrl, util, language) {
        this.router = router;
        this.auth = auth;
        this.menuCtrl = menuCtrl;
        this.util = util;
        this.language = language;
        this.inputFocusNumber1 = false;
        this.inputFocusNumber2 = false;
        this.inputFocusNumber3 = false;
        this.inputFocusNumber4 = false;
        this.config = {
            length: 4,
            inputStyles: {
                'border': '1px solid var(--ion-color-secondary)',
                'color': 'var(--ion-color-primary)',
                'outline': 'none',
                'background-color': 'var(--ion-color-white)',
                'border-radius': '10px',
                'width': '100%',
                'height': '60px',
                'font-size': ' 25px',
            },
            containerStyles: {
                'display': 'flex',
                'justify-content': 'space-between'
            },
            allowNumbersOnly: true,
        };
        this.menuCtrl.enable(false, 'main');
    }
    // ionViewWillEnter() {
    //   this.menuCtrl.enable(false);
    // }
    ngOnInit() { }
    confirmVerificationCode() {
        this.code = parseInt(this.codeValues);
        console.log('code is :' + this.codeValues.substring(9));
        this.auth.getUserIDObservable().subscribe((val) => {
            this.activationData = {
                lang: this.language.getLanguage(),
                user_id: val,
                code: this.codeValues.substring(9),
                device_id: this.util.deviceID,
            };
        });
        this.util.showLoadingSpinner().then((__) => {
            this.auth.activeAccount(this.activationData).subscribe((data) => {
                if (data.key == 1) {
                    console.log('activeAccount  res :' + JSON.stringify(data));
                    this.util.showMessage(data.msg);
                    this.util.showMessage('login now');
                    this.router.navigateByUrl('/login-register');
                }
                else {
                    this.util.showMessage(data.msg);
                }
                this.util.dismissLoading();
            }, (err) => {
                this.util.dismissLoading();
            });
        });
    }
    focusNumber1(focusStatus) {
        console.log('input focus' + focusStatus);
        this.inputFocusNumber1 = focusStatus;
    }
    focusNumber2(focusStatus) {
        console.log('input focus' + focusStatus);
        this.inputFocusNumber2 = focusStatus;
    }
    focusNumber3(focusStatus) {
        console.log('input focus' + focusStatus);
        this.inputFocusNumber3 = focusStatus;
    }
    focusNumber4(focusStatus) {
        console.log('input focus' + focusStatus);
        this.inputFocusNumber4 = focusStatus;
    }
    next(ev, nextInput) {
        console.log(ev.target.value);
        const input = ev.target;
        const length = input.value.length;
        console.log('length is ' + length);
        const maxLength = input.attributes.maxlength.value;
        console.log('maxLength is ' + maxLength);
        this.codeValues += ev.target.value;
        console.log(this.codeValues);
        if (length >= maxLength) {
            nextInput.setFocus();
        }
    }
    focusFristNumber() { }
    onOtpChange($event) {
        console.log('numbers' + JSON.stringify($event));
    }
};
CodePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: src_app_services_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__.UtilitiesService },
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService }
];
CodePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-code',
        template: _Users_aliaaosama_Desktop_ionic_projects_dalel_node_modules_ngtools_webpack_src_loaders_direct_resource_js_code_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_code_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CodePage);



/***/ }),

/***/ 20083:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modules/auth/code/code.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"background\">\n  <div class=\"auth-login-register\">\n    <div class=\"logo\">\n      <img src=\"../../../../assets/images/logo.svg\" />\n    </div>\n    <!-- <ion-card>\n      <ng-otp-input\n        (onInputChange)=\"onOtpChange($event)\"\n        [config]=\"config\"\n      ></ng-otp-input>\n    </ion-card> -->\n    <ion-card class=\"auth-container\">\n      <div class=\"auth-container-title\">\n        <h5>{{\"code-verification\"|translate}}</h5>\n      </div>\n\n      <div class=\"auth-container-sub-title\">\n        <p>{{\"enter code sent to mobile\"|translate}}</p>\n      </div>\n\n      <form class=\"auth-form\" (ngSubmit)=\"confirmVerificationCode()\">\n        <ion-row>\n          <ion-col\n            size=\"3\"\n            [ngClass]=\"inputFocusNumber1 ? 'focused' : 'unfocused' \"\n          >\n            <ion-item lines=\"none\">\n              <ion-input\n                class=\"otp\"\n                #n1\n                min=\"0\"\n                max=\"9\"\n                maxlength=\"1\"\n                (keyup)=\"next($event,n2)\"\n                (ionFocus)=\"focusNumber1(true)\"\n                (ionBlur)=\"focusNumber1(false)\"\n                type=\"tel\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-item\n              lines=\"none\"\n              [ngClass]=\"inputFocusNumber2 ? 'focused' : 'unfocused' \"\n            >\n              <ion-input\n                class=\"otp\"\n                #n2\n                min=\"0\"\n                max=\"9\"\n                maxlength=\"1\"\n                (keyup)=\"next($event,n3)\"\n                (ionFocus)=\"focusNumber2(true)\"\n                (ionBlur)=\"focusNumber2(false)\"\n                type=\"tel\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col\n            size=\"3\"\n            [ngClass]=\"inputFocusNumber3 ? 'focused' : 'unfocused' \"\n          >\n            <ion-item lines=\"none\">\n              <ion-input\n                class=\"otp\"\n                #n3\n                min=\"0\"\n                max=\"9\"\n                maxlength=\"1\"\n                (keyup)=\"next($event,n4)\"\n                (ionFocus)=\"focusNumber3(true)\"\n                (ionBlur)=\"focusNumber3(false)\"\n                type=\"tel\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col\n            size=\"3\"\n            [ngClass]=\"inputFocusNumber4 ? 'focused' : 'unfocused' \"\n          >\n            <ion-item lines=\"none\">\n              <ion-input\n                class=\"otp\"\n                #n4\n                min=\"0\"\n                max=\"9\"\n                maxlength=\"1\"\n                (keyup)=\"next($event,'')\"\n                (ionFocus)=\"focusNumber4(true)\"\n                (ionBlur)=\"focusNumber4(false)\"\n                type=\"tel\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-button expand=\"block\" type=\"submit\">\n          <span class=\"auth-btn\"> {{\"confirm\"|translate}} </span>\n        </ion-button>\n      </form>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 47180:
/*!**************************************************!*\
  !*** ./src/app/modules/auth/code/code.page.scss ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-content.background {\n  --background: url('authBg-right.png') 0 0 /100% 100%\n    no-repeat;\n}\n\n.auth-form ion-item {\n  margin-bottom: 0px !important;\n}\n\nion-row {\n  margin-bottom: 24px;\n}\n\nion-item {\n  --inner-padding-end: 0px !important;\n}\n\nion-item::part(native) {\n  padding: 6px 0px !important;\n  text-align: center;\n}\n\nion-item::part(native) .item-inner {\n  padding-inline-end: 0px !important;\n}\n\nion-button {\n  margin-bottom: 32px;\n}\n\nion-input {\n  text-align: center;\n  --padding-end: 0px !important;\n}\n\nion-input .native-input {\n  font-size: 24px !important;\n  padding: 0px;\n  margin: 0px;\n  font-family: \"Cairo-SemiBold\";\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7YUFBQTtBQUVGOztBQUNBO0VBQ0UsNkJBQUE7QUFFRjs7QUFBQTtFQUNFLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxtQ0FBQTtBQUlGOztBQURBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQUlGOztBQUhFO0VBQ0Usa0NBQUE7QUFLSjs7QUFGQTtFQUNFLG1CQUFBO0FBS0Y7O0FBSEE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0FBTUY7O0FBTEU7RUFDRSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBT0oiLCJmaWxlIjoiY29kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2F1dGhCZy1yaWdodC5wbmcpIDAgMCAvMTAwJSAxMDAlXG4gICAgbm8tcmVwZWF0O1xufVxuLmF1dGgtZm9ybSBpb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuaW9uLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5pb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xuICBcbn1cbmlvbi1pdGVtOjpwYXJ0KG5hdGl2ZSkge1xuICBwYWRkaW5nOiA2cHggMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLml0ZW0taW5uZXIge1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmlvbi1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuaW9uLWlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbiAgLm5hdGl2ZS1pbnB1dCB7XG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkNhaXJvLVNlbWlCb2xkXCI7XG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG5cblxuXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_code_code_module_ts.js.map