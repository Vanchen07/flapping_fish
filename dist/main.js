/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bird.js":
/*!*********************!*\
  !*** ./src/bird.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bird; });\n\nconst CONSTANTS = {\n    BIRD_WIDTH: 30,\n    BIRD_HEIGHT: 40\n}\n\nclass Bird {\n    constructor(dimensions) {\n        this.velocity = 0;\n        this.dimensions = dimensions;\n        this.x = (1/3)*(this.dimensions.width);\n        this.y = (1/2)*(this.dimensions.height);\n    }\n\n    drawBird(ctx) {\n        ctx.fillStyle = \"yellow\";\n        ctx.fillRect(this.x, this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);\n        // console.log(this.x, this.y)\n    }\n\n    animate(ctx) {\n        this.move()\n        this.drawBird(ctx);\n    }\n\n    move() {\n        let gravity = 0.5;\n        this.y += this.velocity;\n        this.velocity += gravity;\n    }\n\n    flap() {\n        this.velocity = -8;\n    }\n\n    getBounds() {\n        return ({\n            left: this.x,\n            right: this.x + CONSTANTS.BIRD_WIDTH,\n            top: this.y, \n            bottom: this.y + CONSTANTS.BIRD_HEIGHT,\n        })\n    }\n\n    outOfBounds() {\n        let overTop = this.y < 0;\n        let belowBottom = this.y + CONSTANTS.BIRD_HEIGHT > this.dimensions.height;\n        // console.log(\"bird height\", this.y + CONSTANTS.BIRD_HEIGHT)\n        // console.log(\"height\", this.dimensions.height)\n        return overTop || belowBottom;\n    }\n}\n\n//# sourceURL=webpack:///./src/bird.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FlappyBird; });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _bird__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bird */ \"./src/bird.js\");\n\n\n\nclass FlappyBird {\n  constructor(canvas){\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    \n    this.click = this.click.bind(this);\n    this.animate = this.animate.bind(this);\n    canvas.addEventListener('mousedown', this.click)\n    this.restart();\n  }\n\n  restart() {\n    this.running = false;\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    this.bird = new _bird__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\n\n    this.animate();\n  }\n\n  animate() {\n    this.level.animate(this.ctx);\n    this.bird.animate(this.ctx);\n\n    if (this.gameOver()) {\n      alert(\"You've lost\")\n      this.restart();\n    }\n\n    if (this.running) {\n      requestAnimationFrame(this.animate)\n    }\n  }\n\n  gameOver() {\n    return (\n      this.level.collidesWith(this.bird.getBounds()) || this.bird.outOfBounds()\n    );\n  }\n\n  play() {\n    this.running = true;\n    this.animate();\n  }\n\n  click() {\n    if (!this.running) {\n      this.play();\n    }\n    this.bird.flap();\n  }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const canvas = document.getElementById('bird-game');\n    let game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n    game.restart();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\nconst CONSTANTS = {\n  PIPE_SPEED: 2,\n  // GAP_HEIGHT: 150,\n  PIPE_WIDTH: 50,\n  EDGE_BUFFER: 150,\n  PIPE_SPACING: 220, //horizontal spacing btwn pipes\n  WARM_UP_SECONDS: 1\n};\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    \n    const firstPipe = this.dimensions.width + (CONSTANTS.WARM_UP_SECONDS * 60 * CONSTANTS.PIPE_SPEED);\n    // console.log(\"first\", firstPipe)\n    this.pipes = [ \n      this.randomPipe(firstPipe), \n      this.randomPipe(firstPipe + CONSTANTS.PIPE_SPACING), \n      this.randomPipe(firstPipe + (CONSTANTS.PIPE_SPACING * 2))\n    ];\n  }\n\n  randomPipe(x) {\n    const heightRange = this.dimensions.height - (2 * CONSTANTS.EDGE_BUFFER)\n    const gapTop = (Math.random() * heightRange) + CONSTANTS.EDGE_BUFFER;\n    \n    \n    const pipe = {\n      bottomPipe: {\n        bottom: this.dimensions.height,\n        left: x,\n        right: CONSTANTS.PIPE_WIDTH + x,\n        top: gapTop,\n      }\n    }\n    \n    // console.log(\"heightrange\", heightRange)\n    // console.log(\"gaptop\", gapTop)\n    // if (pipe.bottomPipe.bottom - pipe.bottomPipe.top > 400) console.log(\"diff\", pipe.bottomPipe.bottom - pipe.bottomPipe.top)\n    // console.log(\"canvas\", this.dimensions)\n    // console.log(\"pipe\", pipe)\n    // console.log(pipe.bottomPipe.left)\n    return pipe\n  }\n\n  drawBackground(ctx) { \n    ctx.fillStyle = \"lightseagreen\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n\n  animate(ctx) {\n    this.drawBackground(ctx);\n    this.movePipes();\n    this.drawPipes(ctx);\n  }\n\n  movePipes() {\n    this.pipes.forEach((pipe) => {\n      pipe.bottomPipe.left -= CONSTANTS.PIPE_SPEED;\n      pipe.bottomPipe.right -= CONSTANTS.PIPE_SPEED;\n    })\n\n    if (this.pipes[0].bottomPipe.right <= 0) {\n      this.pipes.shift();\n      const newX = this.pipes[1].bottomPipe.left + CONSTANTS.PIPE_SPACING;\n      this.pipes.push(this.randomPipe(newX));\n    }\n  }\n\n  drawPipes(ctx) {\n    // console.log(\"pipes\", this.pipes)\n    this.pipes.forEach((pipe) => {\n      ctx.fillStyle = \"lightgrey\";\n      ctx.fillRect(\n        pipe.bottomPipe.left,\n        pipe.bottomPipe.top,\n        CONSTANTS.PIPE_WIDTH,\n        pipe.bottomPipe.bottom - pipe.bottomPipe.top\n      );\n    })\n  }\n\n  collidesWith(bird) {\n    let collison = false;\n\n    this.pipes.forEach((pipe) => {\n      if (this.overlap(pipe.bottomPipe, bird)) collison = true\n    })\n\n    return collison;\n  }\n\n  overlap(pipe, bird) {\n    if(pipe.left >= bird.right || pipe.right <= bird.left) {\n      return false;\n    }\n\n    if (pipe.top <= bird.bottom || pipe.bottom <= bird.top) {\n      return false;\n    }\n    console.log(\"overelap\")\n    return true;\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ })

/******/ });