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

/***/ "./src/pages/PostPage.tsx":
/*!********************************!*\
  !*** ./src/pages/PostPage.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostPage\": () => (/* binding */ PostPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _components_NavBtnsOfPage_NavBtnsOfPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBtnsOfPage/NavBtnsOfPage */ \"./src/components/NavBtnsOfPage/NavBtnsOfPage.tsx\");\n/* harmony import */ var _components_TitleOfPage_TitleOfPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TitleOfPage/TitleOfPage */ \"./src/components/TitleOfPage/TitleOfPage.tsx\");\n/* harmony import */ var _components_CardOfComment_CardOfComment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CardOfComment/CardOfComment */ \"./src/components/CardOfComment/CardOfComment.tsx\");\n/* harmony import */ var _components_ThreeDotsSpinner_ThreeDotsSpinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ThreeDotsSpinner/ThreeDotsSpinner */ \"./src/components/ThreeDotsSpinner/ThreeDotsSpinner.tsx\");\n/* harmony import */ var _components_BackgroundGlass_BackgroundGlass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BackgroundGlass/BackgroundGlass */ \"./src/components/BackgroundGlass/BackgroundGlass.tsx\");\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/hooks */ \"./src/store/hooks.ts\");\n/* harmony import */ var _store_slices_Posts_dataPostsSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/slices/Posts/dataPostsSlice */ \"./src/store/slices/Posts/dataPostsSlice.ts\");\n/* harmony import */ var _store_slices_Comments_customSelectorsOfComments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/slices/Comments/customSelectorsOfComments */ \"./src/store/slices/Comments/customSelectorsOfComments.ts\");\n/* harmony import */ var _store_slices_Comments_dataCommentsSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/slices/Comments/dataCommentsSlice */ \"./src/store/slices/Comments/dataCommentsSlice.ts\");\n/* harmony import */ var _store_slices_Comments_fetchGetComments__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/slices/Comments/fetchGetComments */ \"./src/store/slices/Comments/fetchGetComments.ts\");\n/* harmony import */ var _store_slices_Posts_fetchPosts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/slices/Posts/fetchPosts */ \"./src/store/slices/Posts/fetchPosts.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/constants */ \"./src/utils/constants.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst PostPage = () => {\n    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch)();\n    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useNavigate)();\n    const { postId } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useParams)();\n    const post = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)((store) => _store_slices_Posts_dataPostsSlice__WEBPACK_IMPORTED_MODULE_8__.selectorsPosts.selectById(store, Number(postId)));\n    const comments = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)((store) => (0,_store_slices_Comments_customSelectorsOfComments__WEBPACK_IMPORTED_MODULE_9__.selectCommentsByPostId)(store, Number(postId)));\n    const { statusOfLoading: statusOfPostLoading } = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)((store) => store.dataPosts);\n    const { statusOfLoading: statusOfCommentsLoading, postIdsOfLoadedComments } = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)((store) => store.dataComments);\n    const moveToNewPagePageHandler = (path) => () => {\n        dispatch(_store_slices_Posts_dataPostsSlice__WEBPACK_IMPORTED_MODULE_8__.actionsPosts.setActivePostId({ id: null }));\n        navigate(path);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        if (!postId || postIdsOfLoadedComments.includes(Number(postId)))\n            return;\n        if (!post)\n            dispatch((0,_store_slices_Posts_fetchPosts__WEBPACK_IMPORTED_MODULE_12__.fetchPosts)({ method: 'get', postId }));\n        dispatch((0,_store_slices_Comments_fetchGetComments__WEBPACK_IMPORTED_MODULE_11__.fetchGetComments)(postId));\n        dispatch(_store_slices_Comments_dataCommentsSlice__WEBPACK_IMPORTED_MODULE_10__.actionsComments.addPostId({ id: Number(postId) }));\n    }, []);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", Object.assign({ className: \"contianer-page\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NavBtnsOfPage_NavBtnsOfPage__WEBPACK_IMPORTED_MODULE_2__.NavBtnsOfPage, { btns: _utils_constants__WEBPACK_IMPORTED_MODULE_13__.dataOfNavBtns.postPage, onClickHandler: moveToNewPagePageHandler }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_TitleOfPage_TitleOfPage__WEBPACK_IMPORTED_MODULE_3__.TitleOfPage, { title: \"\\u041F\\u043E\\u0441\\u0442\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", Object.assign({ className: \"position-relative p-3 border rounded\" }, { children: [statusOfPostLoading === _utils_constants__WEBPACK_IMPORTED_MODULE_13__.LoadingStatuses.pending && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ThreeDotsSpinner_ThreeDotsSpinner__WEBPACK_IMPORTED_MODULE_5__.ThreeDotsSpinner, {}), statusOfPostLoading === _utils_constants__WEBPACK_IMPORTED_MODULE_13__.LoadingStatuses.fulfilled && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", Object.assign({ className: \"h3\" }, { children: post === null || post === void 0 ? void 0 : post.title }))\n                                ,\n                                    ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { children: post === null || post === void 0 ? void 0 : post.body })\n                                        ,\n                                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_BackgroundGlass_BackgroundGlass__WEBPACK_IMPORTED_MODULE_6__.BackgroundGlass, {})))] })), \")\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", Object.assign({ className: \"d-flex flex-column\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_TitleOfPage_TitleOfPage__WEBPACK_IMPORTED_MODULE_3__.TitleOfPage, { title: \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0438\" }), statusOfCommentsLoading === _utils_constants__WEBPACK_IMPORTED_MODULE_13__.LoadingStatuses.pending && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ThreeDotsSpinner_ThreeDotsSpinner__WEBPACK_IMPORTED_MODULE_5__.ThreeDotsSpinner, {}), statusOfCommentsLoading === _utils_constants__WEBPACK_IMPORTED_MODULE_13__.LoadingStatuses.fulfilled &&\n                                comments.map((comment) => {\n                                    if (!comment)\n                                        return null;\n                                    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CardOfComment_CardOfComment__WEBPACK_IMPORTED_MODULE_4__.CardOfComment, { comment: comment }, comment.id);\n                                })] }))] })] })));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvUG9zdFBhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXRhc2svLi9zcmMvcGFnZXMvUG9zdFBhZ2UudHN4P2NmOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IE5hdkJ0bnNPZlBhZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL05hdkJ0bnNPZlBhZ2UvTmF2QnRuc09mUGFnZSc7XG5pbXBvcnQgeyBUaXRsZU9mUGFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvVGl0bGVPZlBhZ2UvVGl0bGVPZlBhZ2UnO1xuaW1wb3J0IHsgQ2FyZE9mQ29tbWVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZE9mQ29tbWVudC9DYXJkT2ZDb21tZW50JztcbmltcG9ydCB7IFRocmVlRG90c1NwaW5uZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1RocmVlRG90c1NwaW5uZXIvVGhyZWVEb3RzU3Bpbm5lcic7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kR2xhc3MgfSBmcm9tICcuLi9jb21wb25lbnRzL0JhY2tncm91bmRHbGFzcy9CYWNrZ3JvdW5kR2xhc3MnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vc3RvcmUvaG9va3MnO1xuaW1wb3J0IHsgYWN0aW9uc1Bvc3RzLCBzZWxlY3RvcnNQb3N0cyB9IGZyb20gJy4uL3N0b3JlL3NsaWNlcy9Qb3N0cy9kYXRhUG9zdHNTbGljZSc7XG5pbXBvcnQgeyBzZWxlY3RDb21tZW50c0J5UG9zdElkIH0gZnJvbSAnLi4vc3RvcmUvc2xpY2VzL0NvbW1lbnRzL2N1c3RvbVNlbGVjdG9yc09mQ29tbWVudHMnO1xuaW1wb3J0IHsgYWN0aW9uc0NvbW1lbnRzIH0gZnJvbSAnLi4vc3RvcmUvc2xpY2VzL0NvbW1lbnRzL2RhdGFDb21tZW50c1NsaWNlJztcbmltcG9ydCB7IGZldGNoR2V0Q29tbWVudHMgfSBmcm9tICcuLi9zdG9yZS9zbGljZXMvQ29tbWVudHMvZmV0Y2hHZXRDb21tZW50cyc7XG5pbXBvcnQgeyBmZXRjaFBvc3RzIH0gZnJvbSAnLi4vc3RvcmUvc2xpY2VzL1Bvc3RzL2ZldGNoUG9zdHMnO1xuaW1wb3J0IHsgZGF0YU9mTmF2QnRucywgTG9hZGluZ1N0YXR1c2VzIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmV4cG9ydCBjb25zdCBQb3N0UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIGNvbnN0IHsgcG9zdElkIH0gPSB1c2VQYXJhbXMoKTtcbiAgICBjb25zdCBwb3N0ID0gdXNlQXBwU2VsZWN0b3IoKHN0b3JlKSA9PiBzZWxlY3RvcnNQb3N0cy5zZWxlY3RCeUlkKHN0b3JlLCBOdW1iZXIocG9zdElkKSkpO1xuICAgIGNvbnN0IGNvbW1lbnRzID0gdXNlQXBwU2VsZWN0b3IoKHN0b3JlKSA9PiBzZWxlY3RDb21tZW50c0J5UG9zdElkKHN0b3JlLCBOdW1iZXIocG9zdElkKSkpO1xuICAgIGNvbnN0IHsgc3RhdHVzT2ZMb2FkaW5nOiBzdGF0dXNPZlBvc3RMb2FkaW5nIH0gPSB1c2VBcHBTZWxlY3Rvcigoc3RvcmUpID0+IHN0b3JlLmRhdGFQb3N0cyk7XG4gICAgY29uc3QgeyBzdGF0dXNPZkxvYWRpbmc6IHN0YXR1c09mQ29tbWVudHNMb2FkaW5nLCBwb3N0SWRzT2ZMb2FkZWRDb21tZW50cyB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0b3JlKSA9PiBzdG9yZS5kYXRhQ29tbWVudHMpO1xuICAgIGNvbnN0IG1vdmVUb05ld1BhZ2VQYWdlSGFuZGxlciA9IChwYXRoKSA9PiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGFjdGlvbnNQb3N0cy5zZXRBY3RpdmVQb3N0SWQoeyBpZDogbnVsbCB9KSk7XG4gICAgICAgIG5hdmlnYXRlKHBhdGgpO1xuICAgIH07XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFwb3N0SWQgfHwgcG9zdElkc09mTG9hZGVkQ29tbWVudHMuaW5jbHVkZXMoTnVtYmVyKHBvc3RJZCkpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIXBvc3QpXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaFBvc3RzKHsgbWV0aG9kOiAnZ2V0JywgcG9zdElkIH0pKTtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hHZXRDb21tZW50cyhwb3N0SWQpKTtcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uc0NvbW1lbnRzLmFkZFBvc3RJZCh7IGlkOiBOdW1iZXIocG9zdElkKSB9KSk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJjb250aWFuZXItcGFnZVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KE5hdkJ0bnNPZlBhZ2UsIHsgYnRuczogZGF0YU9mTmF2QnRucy5wb3N0UGFnZSwgb25DbGlja0hhbmRsZXI6IG1vdmVUb05ld1BhZ2VQYWdlSGFuZGxlciB9KSwgX2pzeChUaXRsZU9mUGFnZSwgeyB0aXRsZTogXCJcXHUwNDFGXFx1MDQzRVxcdTA0NDFcXHUwNDQyXCIgfSksIF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcInBvc2l0aW9uLXJlbGF0aXZlIHAtMyBib3JkZXIgcm91bmRlZFwiIH0sIHsgY2hpbGRyZW46IFtzdGF0dXNPZlBvc3RMb2FkaW5nID09PSBMb2FkaW5nU3RhdHVzZXMucGVuZGluZyAmJiBfanN4KFRocmVlRG90c1NwaW5uZXIsIHt9KSwgc3RhdHVzT2ZQb3N0TG9hZGluZyA9PT0gTG9hZGluZ1N0YXR1c2VzLmZ1bGZpbGxlZCAmJiAoX2pzeChcInBcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJoM1wiIH0sIHsgY2hpbGRyZW46IHBvc3QgPT09IG51bGwgfHwgcG9zdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9zdC50aXRsZSB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF9qc3goXCJwXCIsIHsgY2hpbGRyZW46IHBvc3QgPT09IG51bGwgfHwgcG9zdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9zdC5ib2R5IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfanN4KEJhY2tncm91bmRHbGFzcywge30pKSldIH0pKSwgXCIpXCIsIF9qc3hzKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiZC1mbGV4IGZsZXgtY29sdW1uXCIgfSwgeyBjaGlsZHJlbjogW19qc3goVGl0bGVPZlBhZ2UsIHsgdGl0bGU6IFwiXFx1MDQxQVxcdTA0M0VcXHUwNDNDXFx1MDQzQ1xcdTA0MzVcXHUwNDNEXFx1MDQ0MlxcdTA0MzBcXHUwNDQwXFx1MDQzOFxcdTA0MzhcIiB9KSwgc3RhdHVzT2ZDb21tZW50c0xvYWRpbmcgPT09IExvYWRpbmdTdGF0dXNlcy5wZW5kaW5nICYmIF9qc3goVGhyZWVEb3RzU3Bpbm5lciwge30pLCBzdGF0dXNPZkNvbW1lbnRzTG9hZGluZyA9PT0gTG9hZGluZ1N0YXR1c2VzLmZ1bGZpbGxlZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tbWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfanN4KENhcmRPZkNvbW1lbnQsIHsgY29tbWVudDogY29tbWVudCB9LCBjb21tZW50LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldIH0pKV0gfSldIH0pKSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/PostPage.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("adb163d7ab58d02658bc")
/******/ })();
/******/ 
/******/ }
);