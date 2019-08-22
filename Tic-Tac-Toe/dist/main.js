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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Game() {\n  this.grid = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];\n  this.keyMap = {\n    0: { x: 0, y: 0 },\n    1: { x: 0, y: 1 },\n    2: { x: 0, y: 2 },\n    3: { x: 1, y: 0 },\n    4: { x: 1, y: 1 },\n    5: { x: 1, y: 2 },\n    6: { x: 2, y: 0 },\n    7: { x: 2, y: 1 },\n    8: { x: 2, y: 2}\n  };\n\n  this.isXturn = true;\n}\n\nGame.prototype.playMove = function(id) {\n  let position = this.keyMap[id];\n\n  if (this.wins('X') || this.wins('O')) {\n    return\n  }\n  if ((this.grid[position.x][position.y]) !== ' ') {\n    return \n  }\n  let move = this.isXturn ? 'X' : 'O';\n  this.grid[position.x][position.y] = move;\n  this.isXturn = !this.isXturn;\n\n}\n\nGame.prototype.wins = function(move) {\n\n  for (let i = 0; i < this.grid.length; i++) {\n\n    if (this.grid[i][0] === move && this.grid[i][1] === move && this.grid[i][2] === move) {\n      return true;\n      }\n    if (this.grid[0][i] === move && this.grid[1][i] === move && this.grid[2][i] === move) {\n      return true\n    }\n  }\n  if (this.grid[0][0] === move && this.grid[1][1] === move && this.grid[2][2] === move) {\n    return true;\n  }\n  if (this.grid[0][2] === move && this.grid[1][1] === move && this.grid[2][0] === move) {\n    return true;\n  }\n  return false;\n}\n\nGame.prototype.boardfull = function() {\n  for (let i = 0; i < this.grid.length; i++) {\n    for (let j = 0; j < this.grid[i].length; j++) {\n\n      if (this.grid[i][j] === ' ') {\n        return false;\n      }\n    }\n  }\n  return true;\n}\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const View = __webpack_require__(/*! ./view.js */ \"./src/view.js\")// require appropriate file\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");// require appropriate file\n\n  $(() => {\n    let view = new View(); \n    view.setupBoard();\n  });\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction View() {\n  this.game = new Game(); \n}\n\nView.prototype.setupBoard = function () {\n  this.renderHTML();\n};\n\nView.prototype.getHTML = function() {\n  return '<ul>' +\n    `<li id=\"0\">${this.game.grid[0][0]}</li>` +\n    `<li id=\"1\">${this.game.grid[0][1]}</li>` +\n    `<li id=\"2\">${this.game.grid[0][2]}</li>` +\n    `<li id=\"3\">${this.game.grid[1][0]}</li>` +\n    `<li id=\"4\">${this.game.grid[1][1]}</li>` +\n    `<li id=\"5\">${this.game.grid[1][2]}</li>` +\n    `<li id=\"6\">${this.game.grid[2][0]}</li>` +\n    `<li id=\"7\">${this.game.grid[2][1]}</li>` +\n    `<li id=\"8\">${this.game.grid[2][2]}</li>` +\n   `</ul>`;\n\n};\n\nView.prototype.bindEvents = function() {\n  let self = this; \n  $('li').on('click', function(e) { \n    console.log(\"clicked\");\n    self.game.playMove(e.target.id);\n    self.renderHTML();\n  });\n};\n\nView.prototype.renderHTML = function(){\n  let $el = $('.ttt');\n  $el.empty();\n  $el.append(this.getHTML());\n  this.bindEvents();\n  if (this.game.wins('X')) {\n    $el.append('<h1>X wins!</h1>')\n    \n  } else if (this.game.boardfull()) {\n    $el.append(\"<h1>It's a draw!</h1>\")\n  } else if (this.game.wins('O')) {\n    $el.append('<h1>O wins!</h1>')\n  }\n\n};\n\n\n\nmodule.exports = View; \n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });