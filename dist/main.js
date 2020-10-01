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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bird; });\n\nconst CONSTANTS = {\n    BIRD_WIDTH: 30,\n    BIRD_HEIGHT: 40,\n    scale: 3,\n    width: 32,\n    height: 32,\n}\n\nclass Bird {\n    constructor(dimensions) {\n        this.velocity = 0;\n        this.dimensions = dimensions;\n        this.x = (1/3)*(this.dimensions.width);\n        this.y = (1/2)*(this.dimensions.height);\n\n        this.character = new Image();\n        this.character.src = './dist/assets/character2.png';\n        // this.character = new Image();\n        // this.character.src = './dist/assets/ghost-sheet.png';\n\n        this.drawFrame = this.drawFrame.bind(this)\n        this.drawBird = this.drawBird.bind(this)\n\n        this.currentLoopIndex = 0;\n    }\n    \n    drawBird(ctx, frameCount) {\n        // ctx.fillStyle = \"yellow\";\n        // ctx.fillRect(this.x, this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);\n        // this.drawFrame(0, 0, this.x, this.y, ctx);\n        // this.drawFrame(1, 0, this.x, this.y, ctx);\n        // this.drawFrame(2, 0, this.x, this.y, ctx);\n        // this.drawFrame(3, 0, this.x, this.y, ctx);\n\n        const cycleLoop = [0, 1, 2, 3];\n\n        // ctx.clearRect(this.x, this.y, CONSTANTS.width, CONSTANTS.height);\n\n        this.drawFrame(cycleLoop[this.currentLoopIndex], 0, this.x, this.y, ctx);\n        \n        // console.log(cycleLoop[this.currentLoopIndex])\n        \n        if (frameCount === 1) {\n            this.currentLoopIndex++;\n        }\n\n        if (this.currentLoopIndex >= cycleLoop.length) {\n            this.currentLoopIndex = 0;\n        }\n\n        // requestAnimationFrame(() => this.drawBird(ctx));\n    }\n    \n\n    drawFrame(frameX, frameY, canvasX, canvasY, ctx) {\n        const scaledWidth = CONSTANTS.scale * CONSTANTS.width;\n        const scaledHeight = CONSTANTS.scale * CONSTANTS.height;\n        \n        // this.character.onload = () => {\n            ctx.drawImage(this.character, frameX * CONSTANTS.width, frameY * CONSTANTS.height, CONSTANTS.width, CONSTANTS.height, canvasX, canvasY, scaledWidth, scaledHeight)\n        // }\n    }\n\n    animate(ctx, frameCount) {\n        this.move();\n        // this.character.onload = () => this.drawBird(ctx);\n        this.drawBird(ctx, frameCount);\n    }\n\n    move() {\n        let gravity = 0.5;\n        this.y += this.velocity;\n        this.velocity += gravity;\n    }\n\n    flap() {\n        this.velocity = -8;\n    }\n\n    getBounds() {\n        // console.log({\n        //     left: this.x,\n        //     right: this.x + CONSTANTS.BIRD_WIDTH,\n        //     top: this.y,\n        //     bottom: this.y + CONSTANTS.BIRD_HEIGHT,\n        // })\n        const scaledWidth = CONSTANTS.scale * CONSTANTS.width;\n        const scaledHeight = CONSTANTS.scale * CONSTANTS.height;\n\n        return ({\n            left: this.x,\n            right: this.x + scaledWidth,\n            top: this.y, \n            bottom: this.y + scaledHeight,\n        })\n    }\n\n    outOfBounds() {\n        let bounds = this.getBounds();\n\n        let overTop = bounds.top < 0;\n        let belowBottom = bounds.bottom >= this.dimensions.height;\n        // console.log(\"bird height\", this.y + CONSTANTS.BIRD_HEIGHT)\n        // console.log(\"height\", this.dimensions.height)\n        // console.log(bounds)\n        return overTop || belowBottom;\n    }\n}\n\n//# sourceURL=webpack:///./src/bird.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FlappyBird; });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _bird__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bird */ \"./src/bird.js\");\n\n\n\nclass FlappyBird {\n  constructor(canvas){\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    \n    this.frameCount = 0;\n\n    //images\n    this.water = new Image();\n    this.water.src = './dist/assets/water.png';\n    this.back = new Image();\n    this.back.src = './dist/assets/back.png';\n    this.middle = new Image();\n    this.middle.src = './dist/assets/middle.png';\n    this.front = new Image();\n    this.front.src = './dist/assets/front.png';\n    this.backBoat = new Image();\n    this.backBoat.src = './dist/assets/boat-far.png';\n    this.frontBoat = new Image();\n    this.frontBoat.src = './dist/assets/boat-middle.png';\n    this.obstacle = new Image();\n    this.obstacle.src = './dist/assets/spikes.png';\n\n\n    this.click = this.click.bind(this);\n    this.animate = this.animate.bind(this);\n\n    canvas.addEventListener('mousedown', this.click);\n\n    window.onload = () => {\n      this.restart();\n    }\n  }\n\n  restart() {\n    this.running = false;\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    this.bird = new _bird__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\n\n\n    this.animate();\n  }\n\n  animate() {\n    // this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);\n    \n    this.level.animate(this.ctx, this.water, this.back, this.middle, this.front, this.backBoat, this.frontBoat, this.obstacle);\n    this.bird.animate(this.ctx, this.frameCount);\n\n    this.frameCount++\n\n    if (this.frameCount > 15) {\n      this.frameCount = 0;\n    }\n\n    if (this.gameOver()) {\n      alert(\"You've lost\")\n      this.restart();\n    }\n\n    if (this.running) {\n      requestAnimationFrame(this.animate)\n    }\n  }\n\n  gameOver() {\n    return (\n      this.level.collidesWith(this.bird.getBounds()) || this.bird.outOfBounds()\n    );\n  }\n\n  play() {\n    this.running = true;\n    this.animate();\n  }\n\n  click() {\n    if (!this.running) {\n      this.play();\n    }\n    this.bird.flap();\n  }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\nconst CONSTANTS = {\n  PIPE_SPEED: 2,\n  // GAP_HEIGHT: 150,\n  // PIPE_WIDTH: 50,\n  PIPE_WIDTH: 115,\n  EDGE_BUFFER: 250,\n  PIPE_SPACING: 220, //horizontal spacing btwn pipes\n  WARM_UP_SECONDS: 1\n};\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    \n    const firstPipe = this.dimensions.width + (CONSTANTS.WARM_UP_SECONDS * 60 * CONSTANTS.PIPE_SPEED);\n \n    this.pipes = [ \n      this.randomPipe(firstPipe), \n      this.randomPipe(firstPipe + CONSTANTS.PIPE_SPACING), \n      this.randomPipe(firstPipe + (CONSTANTS.PIPE_SPACING * 2))\n    ];\n\n  }\n\n  randomPipe(x) {\n    const heightRange = this.dimensions.height - (2 * CONSTANTS.EDGE_BUFFER)\n    const gapTop = (Math.random() * heightRange) + CONSTANTS.EDGE_BUFFER;\n    \n    \n    const pipe = {\n      bottomPipe: {\n        left: x,\n        right: x + CONSTANTS.PIPE_WIDTH,\n        top: gapTop,\n        bottom: gapTop + 132,\n      }\n    }\n    \n    return pipe\n  }\n\n  drawBackground(ctx, water, back, middle, front, backBoat, frontBoat) { \n    // ctx.fillStyle = \"lightblue\";\n    // ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n    \n    // ctx.clearRect(0,0, this.dimensions.width, this.dimensions.height)\n      ctx.drawImage(water, 0, 0, 288, 208, 0, 0, this.dimensions.width, this.dimensions.height )\n      ctx.drawImage(back, 0, 0, 32, 112, 0, 0.6 * this.dimensions.height, this.dimensions.width, 0.6 * this.dimensions.height )\n      ctx.drawImage(backBoat, 0, 0, 44, 36, 0.6 * this.dimensions.width, 0.57 * this.dimensions.height, 44, 36 )\n      ctx.drawImage(middle, 0, 0, 64, 112, 0, 0.65 * this.dimensions.height, this.dimensions.width, 0.65 * this.dimensions.height )\n      ctx.drawImage(frontBoat, 0, 0, 76, 59, 0.10 * this.dimensions.width, 0.7 * this.dimensions.height, 76, 59 )\n      // ctx.drawImage(front, 0, 0, 144, 80, 0, 0.75 * this.dimensions.height, this.dimensions.width, 0.75 * this.dimensions.height )\n    //\n  }\n\n  animate(ctx, water, back, middle, front, backBoat, frontBoat, obstacle) {\n    this.drawBackground(ctx, water, back, middle, front, backBoat, frontBoat);\n    this.movePipes();\n    this.drawPipes(ctx, obstacle);\n  }\n\n  movePipes() {\n    this.pipes.forEach((pipe) => {\n      pipe.bottomPipe.left -= CONSTANTS.PIPE_SPEED;\n      pipe.bottomPipe.right -= CONSTANTS.PIPE_SPEED;\n    })\n\n    if (this.pipes[0].bottomPipe.right <= 0) {\n      this.pipes.shift();\n      const newX = this.pipes[1].bottomPipe.left + CONSTANTS.PIPE_SPACING;\n      this.pipes.push(this.randomPipe(newX));\n    }\n  }\n\n  drawPipes(ctx, obstacle) {\n    // console.log(\"pipes\", this.pipes)\n    this.pipes.forEach((pipe) => {\n      // ctx.fillStyle = \"lightgrey\";\n      // ctx.fillRect(\n      //   pipe.bottomPipe.left,\n      //   pipe.bottomPipe.top,\n      //   CONSTANTS.PIPE_WIDTH,\n      //   pipe.bottomPipe.bottom - pipe.bottomPipe.top\n      //   );\n\n      // console.log(pipe)\n      ctx.drawImage(obstacle, 0, 0, 32, 32, pipe.bottomPipe.left, pipe.bottomPipe.top, CONSTANTS.PIPE_WIDTH, pipe.bottomPipe.bottom - pipe.bottomPipe.top)\n    })\n  }\n\n  collidesWith(bird) {\n    let collison = false;\n\n    this.pipes.forEach((pipe) => {\n      if (this.overlap(pipe.bottomPipe, bird)) collison = true\n    })\n\n    return collison;\n  }\n\n  overlap(pipe, bird) {\n    if (bird.right >= pipe.left && bird.right <= pipe.right && bird.bottom >= pipe.top) {\n      console.log(\"overlap\")\n      console.log(\"pipe\", pipe)\n      console.log(\"bird\", bird)\n      return true\n    } \n\n    return false;\n\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ })

/******/ });