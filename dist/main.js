/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initialLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initialLoad */ \"./src/modules/initialLoad.js\");\n/* harmony import */ var _modules_aboutPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/aboutPage */ \"./src/modules/aboutPage.js\");\n/* harmony import */ var _modules_menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menuPage */ \"./src/modules/menuPage.js\");\n/* harmony import */ var _modules_contactPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contactPage */ \"./src/modules/contactPage.js\");\n\n\n\n\n\n(0,_modules_initialLoad__WEBPACK_IMPORTED_MODULE_0__.pageLoadTest)();\n(0,_modules_initialLoad__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n(0,_modules_initialLoad__WEBPACK_IMPORTED_MODULE_0__.tabLoad)();\n\nlet clearNodes = () => {\n    let otherContent = document.getElementById('otherContent')\n    // removes nodes from last to first\n    // while otherContent has nodes, this will run\n    while (otherContent.lastElementChild) {\n        otherContent.removeChild(otherContent.lastElementChild);\n    }\n}\n\nlet aboutBtn = document.getElementById('about')\nlet menuBtn = document.getElementById('menu')\nlet contactBtn = document.getElementById('contact')\nlet logoBtn = document.getElementById('logo');\n\naboutBtn.addEventListener(\"click\", () => {\n    clearNodes();\n    (0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_1__.aboutPageTest)();\n    (0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_1__.loadAboutPage)();\n})\n\nmenuBtn.addEventListener(\"click\", () => {\n    clearNodes();\n    (0,_modules_menuPage__WEBPACK_IMPORTED_MODULE_2__.menuPageTest)();\n    (0,_modules_menuPage__WEBPACK_IMPORTED_MODULE_2__.loadMenuPage)();\n})\n\ncontactBtn.addEventListener(\"click\", () => {\n    clearNodes();\n    (0,_modules_contactPage__WEBPACK_IMPORTED_MODULE_3__.contactPageTest)();\n    (0,_modules_contactPage__WEBPACK_IMPORTED_MODULE_3__.loadContactPage)();\n})\n\nlogoBtn.addEventListener(\"click\", () => {\n    clearNodes();\n})\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/aboutPage.js":
/*!**********************************!*\
  !*** ./src/modules/aboutPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutPageTest\": () => (/* binding */ aboutPageTest),\n/* harmony export */   \"loadAboutPage\": () => (/* binding */ loadAboutPage)\n/* harmony export */ });\nlet aboutPageTest = () => {\n    console.log(\"About Page running\")\n}\n\nlet loadAboutPage = () => {\n    // dynamically create divs based off array\n    let divArray = ['aboutTitle', 'aboutText', 'onomichiyakiTitle', 'onomichiyakiAbout'];\n    let otherContent = document.getElementById('otherContent');\n\n    for (let i = 0; i < divArray.length; i++) {\n        let div = document.createElement('div');\n        div.className = divArray[i];\n        div.id = divArray[i];\n        otherContent.appendChild(div)\n    }\n    console.log(otherContent)\n    renderText();\n}\n\nlet renderText = () => {\n    let aboutTitle = document.getElementById('aboutTitle')\n    let aboutText = document.getElementById('aboutText');\n    let onomichiyakiTitle = document.getElementById('onomichiyakiTitle')\n    let onomichiyakiAbout = document.getElementById('onomichiyakiAbout')\n    \n    // add text\n    aboutTitle.innerHTML = \"About Aso's Okonomiyaki\"\n    aboutText.innerHTML = \"Established in 1998, Aso has been serving the people of Onomichi proudly for over 20 years!\"\n                        + \" come in any time to try our delicious Onomichi Style Okonomiyaki\"\n\n    onomichiyakiTitle.innerHTML = \"What is Onomichiyaki?\"\n    onomichiyakiAbout.innerHTML = \"Influenced by both Hiroshima and Fuchu style Okonomiyaki \"\n                                + \"Onomichiyaki merges the Hiroshima style of layered noodles, cabbage and meat\"\n                                + \"whilst using Onomichi's local seafood to create a unique flavour\"\n                                + \"the Okonomiyaki is finally fried until the noodles are beautifully crispy; a technique borrowed from Fuchu.\"\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/aboutPage.js?");

/***/ }),

/***/ "./src/modules/contactPage.js":
/*!************************************!*\
  !*** ./src/modules/contactPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPageTest\": () => (/* binding */ contactPageTest),\n/* harmony export */   \"loadContactPage\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nlet contactPageTest = () => {\n    console.log(\"Contact page running\")\n}\n\nlet loadContactPage = () => {\n    let otherContent = document.getElementById('otherContent');\n    // create new divs\n    let divArray = ['contactTitle', 'contactContainer']\n\n    for (let i = 0; i < divArray.length; i++) {\n        let div = document.createElement('div');\n        div.id = divArray[i];\n        div.className = divArray[i];\n        otherContent.appendChild(div);\n    }\n\n    // assign new divs\n    let contactTitle = document.getElementById('contactTitle');\n    let contactContainer = document.getElementById('contactContainer');\n\n    // add 2 new divs to contactContainer\n    let containerArr = [\"contactDiv\", \"googleDiv\"]\n\n    for (let i = 0; i < containerArr.length; i++) {\n        let div = document.createElement('div');\n        div.id = containerArr[i];\n        div.className = containerArr[i];\n        contactContainer.appendChild(div)\n    }\n\n    console.log(otherContent)\n\n    renderOtherContent(contactTitle, contactContainer);\n}\n\nlet renderOtherContent = () => {\n    // assign new divs \n    let contactDiv = document.getElementById('contactDiv')\n    let googleDiv = document.getElementById('googleDiv')\n\n    // style title\n    contactTitle.innerHTML = 'Contact'\n\n    // add text\n    contactDiv.innerHTML = \"<p><b> Name: </b> Aso's Okonomiyaki</p> \" \n                         + \"<p><b> Address: </b> Hiroshima Prefecture, Onomichi City 123456</p>\"\n                         + \"<p><b> Contact: </b> 123-456-7890 </p>\"\n\n    googleDiv.innerHTML = \"Google Maps\" \n\n    // create variables for Google Maps API\n    let map = document.createElement('div')\n    map.id = 'map'\n    googleDiv.appendChild(map);\n\n    // call map\n    initMap();\n}\n\n// Initialize and add the map\nfunction initMap() {\n    // The location of Aso\n    const asoOkonomiyaki = { lat: 34.40138, lng: 133.180840 };\n    // The map, centered at Aso\n    const map = new google.maps.Map(document.getElementById(\"map\"), {\n      zoom: 13, // zooms between 0-19\n      center: asoOkonomiyaki,\n    });\n    // The marker, positioned at Aso\n    const marker = new google.maps.Marker({\n      position: asoOkonomiyaki,\n      map: map,\n    });\n  }\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contactPage.js?");

/***/ }),

/***/ "./src/modules/initialLoad.js":
/*!************************************!*\
  !*** ./src/modules/initialLoad.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoadTest\": () => (/* binding */ pageLoadTest),\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad),\n/* harmony export */   \"tabLoad\": () => (/* binding */ tabLoad)\n/* harmony export */ });\n// webpack tests\nlet pageLoadTest = () => {\n    console.log(\"pageLoad runs look\");\n}\n\n\nlet pageLoad = () => {\n\n// variables\nlet contentDiv = document.getElementById('content');\nlet divArray = [\"header\", \"title\", \"otherContent\", \"footer\"]\n\n\n    // for loop to dynamically create divs\n    for (let i = 0; i < divArray.length; i++) {\n        let div = document.createElement('div');\n        div.className = divArray[i];\n        div.id = divArray[i];\n        contentDiv.appendChild(div);\n    }\n\n    console.log(contentDiv);\n\n    // variables for styling\n\n    let header = document.getElementById('header')\n    let title = document.getElementById('title')\n    let otherContent = document.getElementById('otherContent')\n    let footer = document.getElementById('footer')\n\n    //title\n    title.innerHTML = \"aso's okonomiyaki\";\n\n    //other content\n    // otherContent.innerHTML = 'Other stuff here' commented out to prevent memory leak\n    \n    //footer\n    footer.innerHTML = 'Technologies used: HTML, CSS, Javascript, Webkit, Google Maps API'\n\n}\n\nlet tabLoad = () => {\n    // create tab elements\n    let tabArray = [\"logo\", \"about\", \"menu\", \"contact\"]\n\n    for (let i = 0; i < tabArray.length; i++) {\n       let list = document.createElement('li')\n       list.className = tabArray[i];\n       list.id = tabArray[i];\n       list.innerHTML = tabArray[i];\n       header.appendChild(list);\n    }\n\n    // add clipart to logo list item\n    let logoBtn = document.getElementById('logo');\n    // remove text\n    logoBtn.innerHTML = \"\";\n\n    //create okonomiyakiClipart\n    let okonomiyakiClipart = document.createElement('img')\n    okonomiyakiClipart.src = \"https://2.bp.blogspot.com/-OXYLWw2IV6A/WGCxTlg140I/AAAAAAABAqM/NsIzwDF0vSoUJMaX101Cs87_iOzWMGAYgCLcB/s800/omatsuri_okonomiyaki.png\";\n    okonomiyakiClipart.id = 'okonomiyakiClipart'\n    okonomiyakiClipart.className = 'okonomiyakiClipart'\n\n    logoBtn.appendChild(okonomiyakiClipart);\n}\n\n\n\n\n\n        // read about dom creating global variables and work out how to NOT use them\n        // look at creating just one single function to export from each module\n\n//# sourceURL=webpack://restaurant-page/./src/modules/initialLoad.js?");

/***/ }),

/***/ "./src/modules/menuPage.js":
/*!*********************************!*\
  !*** ./src/modules/menuPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPageTest\": () => (/* binding */ menuPageTest),\n/* harmony export */   \"loadMenuPage\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nlet menuPageTest = () => {\n    console.log(\"Menu Page Running\")\n}\n\nlet loadMenuPage = () => {\n    let divArray = ['menuTitle', 'menuContainer']\n    let otherContent = document.getElementById('otherContent')\n\n    // dynamically create initial divs based off Array\n    for (let i = 0; i < divArray.length; i++) {\n        let div = document.createElement('div');\n        div.id = divArray[i];\n        div.className = divArray[i];\n        otherContent.appendChild(div);\n    }\n\n    // assign newly created divs\n    let menuTitle = document.getElementById('menuTitle')\n    let menuContainer = document.getElementById('menuContainer')\n\n    // Add titles\n    menuTitle.innerHTML = 'Menu'\n\n    // dynamically create new divs for rendering menu\n    let menuItemsArr = ['noodles', 'toppings', 'extras']\n\n    for (let i = 0; i < menuItemsArr.length; i++) {\n        let div = document.createElement('div');\n        div.id = menuItemsArr[i];\n        div.className = menuItemsArr[i];\n        menuContainer.appendChild(div)\n    }\n\n    // assign newly created divs \n    let noodlesDiv = document.getElementById('noodles')\n    let toppingsDiv = document.getElementById('toppings')\n    let extrasDiv = document.getElementById('extras')\n\n    // create title, type, and price divs to go in noodles, toppings, and extras\n    let menuContainerArr = ['Title','Type','Price']\n\n    for (let i = 0; i < menuContainerArr.length; i++) {\n        let div = document.createElement('div');\n        div.id = 'noodles' + menuContainerArr[i]; // creates noodleTitle, noodleType, noodlePrice\n        div.className = 'noodles' + menuContainerArr[i];\n        noodlesDiv.appendChild(div); // add 3 divs to noodles\n\n        let div2 = document.createElement('div')\n        div2.id = 'toppings' + menuContainerArr[i]; // creates toppingTitle, toppingType, toppingPrice\n        div2.className = 'toppings' + menuContainerArr[i]\n        toppingsDiv.appendChild(div2) // add 3 divs to toppings\n\n        let div3 = document.createElement('div')\n        div3.id = 'extras' + menuContainerArr[i]; // creates extrasTitle, extrasType, extrasPrice\n        div3.className = 'extras' + menuContainerArr[i]\n        extrasDiv.appendChild(div3) // add 3 divs to extras\n    }\n\n    // add titles to new divs ready for styling\n    let noodlesTitle = document.getElementById('noodlesTitle').textContent = 'Noodles'\n    let toppingsTitle = document.getElementById('toppingsTitle').textContent = 'Toppings'\n    let extrasTitle = document.getElementById('extrasTitle').textContent = 'Extras'\n\n    console.log(menuContainer);\n\n   renderMenu(menuContainer, menuTitle)\n}\n\nlet renderMenu = () => {\n    // assign new divs \n    let noodlesType = document.getElementById('noodlesType');\n    let noodlesPrice = document.getElementById('noodlesPrice');\n\n    let toppingsType = document.getElementById('toppingsType');\n    let toppingsPrice = document.getElementById('toppingsPrice');\n\n    let extrasType = document.getElementById('extrasType')\n    let extrasPrice = document.getElementById('extrasPrice')\n\n    console.log(menuContainer)\n    \n    // Menu Arrays to be dynamically added\n    let noodleArray = [\n                        {type: 'soba',\n                        price: \"¥800\"},\n                        {type: 'spicy soba',\n                        price: '¥850'},\n                        {type: 'udon',\n                        price: '¥800'}\n                    ]\n\n    let toppingArray = [\n                        {type: 'pork',\n                        price: '¥100'},\n                        {type: 'mochi',\n                        price: '¥150'},\n                        {type: 'cheese',\n                        price: '¥120'},\n                        {type: 'kimchi',\n                        price: '¥80'},\n                        {type: 'squid',\n                        price: '¥200'}\n                    ]\n\n    let extrasArray = [\n                        {type: 'beer',\n                        price: '¥500'},\n                        {type: 'cola',\n                        price: '¥200'},\n                        {type: 'water',\n                        price: '¥0'}\n                    ]\n\n    // dynamically add array values to new noodles, topping, and extras divs\n\n    //noodles\n    for (let i = 0; i < noodleArray.length; i++) {\n        let typeValue = document.createElement('p');\n        let priceValue = document.createElement('p')\n\n        typeValue.textContent = noodleArray[i].type;\n        noodlesType.appendChild(typeValue)\n\n        priceValue.textContent = noodleArray[i].price;\n        noodlesPrice.appendChild(priceValue)\n    }\n    // toppings\n    for (let i = 0; i < toppingArray.length; i++) {\n        let typeValue = document.createElement('p');\n        let priceValue = document.createElement('p')\n\n        typeValue.textContent = toppingArray[i].type;\n        toppingsType.appendChild(typeValue)\n\n        priceValue.textContent = toppingArray[i].price;\n        toppingsPrice.appendChild(priceValue)\n    }\n    // extras\n    for (let i = 0; i < extrasArray.length; i++) {\n        let typeValue = document.createElement('p');\n        let priceValue = document.createElement('p')\n\n        typeValue.textContent = noodleArray[i].type;\n        extrasType.appendChild(typeValue)\n\n        priceValue.textContent = noodleArray[i].price;\n        extrasPrice.appendChild(priceValue)\n    }\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menuPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;