"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetest_task"]("main",{

/***/ "./src/components/ModalInfo/ModalInfo.tsx":
/*!************************************************!*\
  !*** ./src/components/ModalInfo/ModalInfo.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModalInfo\": () => (/* binding */ ModalInfo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Modal.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/hooks */ \"./src/store/hooks.ts\");\n/* harmony import */ var _store_slices_uiModalInfoSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/slices/uiModalInfoSlice */ \"./src/store/slices/uiModalInfoSlice.ts\");\n\n\n\n\nconst ModalInfo = () => {\n    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const { message, show, proceedHandler } = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((store) => store.uiModalInfo);\n    const handleClose = () => {\n        dispatch(_store_slices_uiModalInfoSlice__WEBPACK_IMPORTED_MODULE_2__.actionsModalInfo.close());\n    };\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object.assign({ show: show, onHide: handleClose, centered: true, \"aria-labelledby\": \"modal-info\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Body, { children: message }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Footer, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object.assign({ className: \"border-bottoom\", variant: \"\", onClick: handleClose }, { children: \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object.assign({ className: \"border-bottoom\", variant: \"\", onClick: () => {\n                            handleClose();\n                            proceedHandler();\n                        } }, { children: \"\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u044C\" }))] })] })));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbEluZm8vTW9kYWxJbmZvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXRhc2svLi9zcmMvY29tcG9uZW50cy9Nb2RhbEluZm8vTW9kYWxJbmZvLnRzeD9hYjU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uLy4uL3N0b3JlL2hvb2tzJztcbmltcG9ydCB7IGFjdGlvbnNNb2RhbEluZm8gfSBmcm9tICcuLi8uLi9zdG9yZS9zbGljZXMvdWlNb2RhbEluZm9TbGljZSc7XG5leHBvcnQgY29uc3QgTW9kYWxJbmZvID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgICBjb25zdCB7IG1lc3NhZ2UsIHNob3csIHByb2NlZWRIYW5kbGVyIH0gPSB1c2VBcHBTZWxlY3Rvcigoc3RvcmUpID0+IHN0b3JlLnVpTW9kYWxJbmZvKTtcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uc01vZGFsSW5mby5jbG9zZSgpKTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoTW9kYWwsIE9iamVjdC5hc3NpZ24oeyBzaG93OiBzaG93LCBvbkhpZGU6IGhhbmRsZUNsb3NlLCBjZW50ZXJlZDogdHJ1ZSwgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJtb2RhbC1pbmZvXCIgfSwgeyBjaGlsZHJlbjogW19qc3goTW9kYWwuQm9keSwgeyBjaGlsZHJlbjogbWVzc2FnZSB9KSwgX2pzeHMoTW9kYWwuRm9vdGVyLCB7IGNoaWxkcmVuOiBbX2pzeChCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYm9yZGVyLWJvdHRvb21cIiwgdmFyaWFudDogXCJcIiwgb25DbGljazogaGFuZGxlQ2xvc2UgfSwgeyBjaGlsZHJlbjogXCJcXHUwNDE3XFx1MDQzMFxcdTA0M0FcXHUwNDQwXFx1MDQ0QlxcdTA0NDJcXHUwNDRDXCIgfSkpLCBfanN4KEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJib3JkZXItYm90dG9vbVwiLCB2YXJpYW50OiBcIlwiLCBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZWVkSGFuZGxlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCB7IGNoaWxkcmVuOiBcIlxcdTA0MUZcXHUwNDQwXFx1MDQzRVxcdTA0MzRcXHUwNDNFXFx1MDQzQlxcdTA0MzZcXHUwNDM4XFx1MDQ0MlxcdTA0NENcIiB9KSldIH0pXSB9KSkpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ModalInfo/ModalInfo.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("102fa1c0b616f2692d21")
/******/ })();
/******/ 
/******/ }
);