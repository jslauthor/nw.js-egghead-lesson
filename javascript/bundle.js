/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var gui = __webpack_require__(1);
	var win = gui.Window.get();

	var menuBar = new gui.Menu({ type: "menubar" });
	menuBar.createMacBuiltin("NW.js Demo");
	win.menu = menuBar;

	var developMenu = new gui.Menu();
	var developToggleitem = new gui.MenuItem({
	    label: "Toggle Dev Tools",
	    click: function click() {
	        if (win.isDevToolsOpen()) win.closeDevTools();else win.showDevTools();
	    }
	});

	developMenu.append(developToggleitem);
	win.menu.append(new gui.MenuItem({
	    label: "Develop",
	    submenu: developMenu
	}));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("nw.gui");

/***/ }
/******/ ]);