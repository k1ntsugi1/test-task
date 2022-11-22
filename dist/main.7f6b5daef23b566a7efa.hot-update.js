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

/***/ "./src/components/Sidebar/Sidebar.tsx":
/*!********************************************!*\
  !*** ./src/components/Sidebar/Sidebar.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sidebar\": () => (/* binding */ Sidebar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _assets_svg_home_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/svg/home.svg */ \"./src/assets/svg/home.svg\");\n/* harmony import */ var _assets_svg_stickies_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/svg/stickies.svg */ \"./src/assets/svg/stickies.svg\");\n/* harmony import */ var _assets_svg_task_list_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/svg/task-list.svg */ \"./src/assets/svg/task-list.svg\");\n/* harmony import */ var _assets_svg_card_image_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/svg/card-image.svg */ \"./src/assets/svg/card-image.svg\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/constants */ \"./src/utils/constants.ts\");\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/hooks */ \"./src/store/hooks.ts\");\n/* harmony import */ var _utils_toggleVisibilityHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/toggleVisibilityHandler */ \"./src/utils/toggleVisibilityHandler.ts\");\n\n\n\n\n\n\n\n\n\n\n\nconst Sidebar = ({ sizeOfNavItems }) => {\n    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();\n    const { activePostId } = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector)(store => store.dataPosts);\n    const sidebarRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { showStateOfSidebar } = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector)((state) => state.uiSidebar);\n    const classNameOfSidebar = classnames__WEBPACK_IMPORTED_MODULE_2___default()('position-absolute start-0 top-0 z-index-1000 h-100 w-100px shadow-lg transition-opacity bg-white', {\n        'opacity-0': showState === 'hidden',\n        'opacity-100': showState === 'visible'\n    });\n    const classNamesOfLinks = classnames__WEBPACK_IMPORTED_MODULE_2___default()('mt-4 mx-auto cursor-pointer hover');\n    const { width: navItemWidth, height: navItemHeight } = _utils_constants__WEBPACK_IMPORTED_MODULE_7__.sizesOfIcons[sizeOfNavItems];\n    const navigateHandler = (path) => () => {\n        navigate(path);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        (0,_utils_toggleVisibilityHandler__WEBPACK_IMPORTED_MODULE_9__.toggleVisibilityhandler)(sidebarRef, showState);\n        if (showState === 'visible')\n            sidebarRef.current.style.visibility = '';\n    }, [showState]);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", Object.assign({ className: classNameOfSidebar, ref: sidebarRef }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", Object.assign({ className: \"mt-5 d-flex flex-column justify-content-between gap-5\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", { src: _assets_svg_home_svg__WEBPACK_IMPORTED_MODULE_3__, width: navItemWidth, height: navItemHeight, className: classNamesOfLinks, onClick: navigateHandler('/') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", { src: _assets_svg_stickies_svg__WEBPACK_IMPORTED_MODULE_4__, width: navItemWidth, height: navItemHeight, className: classNamesOfLinks, onClick: navigateHandler(`/posts${activePostId ? activePostId : ''}`) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", { src: _assets_svg_card_image_svg__WEBPACK_IMPORTED_MODULE_6__, width: navItemWidth, height: navItemHeight, className: classNamesOfLinks, onClick: navigateHandler('/albums') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", { src: _assets_svg_task_list_svg__WEBPACK_IMPORTED_MODULE_5__, width: navItemWidth, height: navItemHeight, className: classNamesOfLinks, onClick: navigateHandler('/todos') })] })) })));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtdGFzay8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIvU2lkZWJhci50c3g/NmY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEhvbWVMaW5rIGZyb20gJy4uLy4uL2Fzc2V0cy9zdmcvaG9tZS5zdmcnO1xuaW1wb3J0IFBvc3RzTGluayBmcm9tICcuLi8uLi9hc3NldHMvc3ZnL3N0aWNraWVzLnN2Zyc7XG5pbXBvcnQgVGFza3NMaW5rIGZyb20gJy4uLy4uL2Fzc2V0cy9zdmcvdGFzay1saXN0LnN2Zyc7XG5pbXBvcnQgQWxidW1zTGluayBmcm9tICcuLi8uLi9hc3NldHMvc3ZnL2NhcmQtaW1hZ2Uuc3ZnJztcbmltcG9ydCB7IHNpemVzT2ZJY29ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uLy4uL3N0b3JlL2hvb2tzJztcbmltcG9ydCB7IHRvZ2dsZVZpc2liaWxpdHloYW5kbGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdG9nZ2xlVmlzaWJpbGl0eUhhbmRsZXInO1xuZXhwb3J0IGNvbnN0IFNpZGViYXIgPSAoeyBzaXplT2ZOYXZJdGVtcyB9KSA9PiB7XG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIGNvbnN0IHsgYWN0aXZlUG9zdElkIH0gPSB1c2VBcHBTZWxlY3RvcihzdG9yZSA9PiBzdG9yZS5kYXRhUG9zdHMpO1xuICAgIGNvbnN0IHNpZGViYXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgeyBzaG93U3RhdGVPZlNpZGViYXIgfSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudWlTaWRlYmFyKTtcbiAgICBjb25zdCBjbGFzc05hbWVPZlNpZGViYXIgPSBjbigncG9zaXRpb24tYWJzb2x1dGUgc3RhcnQtMCB0b3AtMCB6LWluZGV4LTEwMDAgaC0xMDAgdy0xMDBweCBzaGFkb3ctbGcgdHJhbnNpdGlvbi1vcGFjaXR5IGJnLXdoaXRlJywge1xuICAgICAgICAnb3BhY2l0eS0wJzogc2hvd1N0YXRlID09PSAnaGlkZGVuJyxcbiAgICAgICAgJ29wYWNpdHktMTAwJzogc2hvd1N0YXRlID09PSAndmlzaWJsZSdcbiAgICB9KTtcbiAgICBjb25zdCBjbGFzc05hbWVzT2ZMaW5rcyA9IGNuKCdtdC00IG14LWF1dG8gY3Vyc29yLXBvaW50ZXIgaG92ZXInKTtcbiAgICBjb25zdCB7IHdpZHRoOiBuYXZJdGVtV2lkdGgsIGhlaWdodDogbmF2SXRlbUhlaWdodCB9ID0gc2l6ZXNPZkljb25zW3NpemVPZk5hdkl0ZW1zXTtcbiAgICBjb25zdCBuYXZpZ2F0ZUhhbmRsZXIgPSAocGF0aCkgPT4gKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0ZShwYXRoKTtcbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHRvZ2dsZVZpc2liaWxpdHloYW5kbGVyKHNpZGViYXJSZWYsIHNob3dTdGF0ZSk7XG4gICAgICAgIGlmIChzaG93U3RhdGUgPT09ICd2aXNpYmxlJylcbiAgICAgICAgICAgIHNpZGViYXJSZWYuY3VycmVudC5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XG4gICAgfSwgW3Nob3dTdGF0ZV0pO1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBjbGFzc05hbWVPZlNpZGViYXIsIHJlZjogc2lkZWJhclJlZiB9LCB7IGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIm10LTUgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGdhcC01XCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJpbWdcIiwgeyBzcmM6IEhvbWVMaW5rLCB3aWR0aDogbmF2SXRlbVdpZHRoLCBoZWlnaHQ6IG5hdkl0ZW1IZWlnaHQsIGNsYXNzTmFtZTogY2xhc3NOYW1lc09mTGlua3MsIG9uQ2xpY2s6IG5hdmlnYXRlSGFuZGxlcignLycpIH0pLCBfanN4KFwiaW1nXCIsIHsgc3JjOiBQb3N0c0xpbmssIHdpZHRoOiBuYXZJdGVtV2lkdGgsIGhlaWdodDogbmF2SXRlbUhlaWdodCwgY2xhc3NOYW1lOiBjbGFzc05hbWVzT2ZMaW5rcywgb25DbGljazogbmF2aWdhdGVIYW5kbGVyKGAvcG9zdHMke2FjdGl2ZVBvc3RJZCA/IGFjdGl2ZVBvc3RJZCA6ICcnfWApIH0pLCBfanN4KFwiaW1nXCIsIHsgc3JjOiBBbGJ1bXNMaW5rLCB3aWR0aDogbmF2SXRlbVdpZHRoLCBoZWlnaHQ6IG5hdkl0ZW1IZWlnaHQsIGNsYXNzTmFtZTogY2xhc3NOYW1lc09mTGlua3MsIG9uQ2xpY2s6IG5hdmlnYXRlSGFuZGxlcignL2FsYnVtcycpIH0pLCBfanN4KFwiaW1nXCIsIHsgc3JjOiBUYXNrc0xpbmssIHdpZHRoOiBuYXZJdGVtV2lkdGgsIGhlaWdodDogbmF2SXRlbUhlaWdodCwgY2xhc3NOYW1lOiBjbGFzc05hbWVzT2ZMaW5rcywgb25DbGljazogbmF2aWdhdGVIYW5kbGVyKCcvdG9kb3MnKSB9KV0gfSkpIH0pKSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Sidebar/Sidebar.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c632a4efff7abe6cf5fb")
/******/ })();
/******/ 
/******/ }
);