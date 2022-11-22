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

/***/ "./src/store/slices/Posts/dataPostsSlice.ts":
/*!**************************************************!*\
  !*** ./src/store/slices/Posts/dataPostsSlice.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"actionsPosts\": () => (/* binding */ actionsPosts),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"selectorsPosts\": () => (/* binding */ selectorsPosts)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _fetchPosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchPosts */ \"./src/store/slices/Posts/fetchPosts.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/constants */ \"./src/utils/constants.ts\");\n\n\n\nconst initialState = {\n    activePostId: null,\n    statusOfLoading: 'idl',\n    typeOfError: ''\n};\nconst postsEntityAdapter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createEntityAdapter)();\nconst dataPostsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({\n    name: 'posts',\n    initialState: postsEntityAdapter.getInitialState(initialState),\n    reducers: {\n        setActivePostId(state, action) {\n            state.activePostId = action.payload.id;\n        },\n        updatePost(state, action) {\n            postsEntityAdapter.upsertOne(state, action.payload.post);\n        }\n    },\n    extraReducers: (builder) => {\n        builder\n            .addCase(_fetchPosts__WEBPACK_IMPORTED_MODULE_0__.fetchPosts.pending, (state) => {\n            state.statusOfLoading = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.LoadingStatuses.pending;\n            state.typeOfError = '';\n        })\n            .addCase(_fetchPosts__WEBPACK_IMPORTED_MODULE_0__.fetchPosts.fulfilled, (state, { payload }) => {\n            const { posts, method } = payload;\n            state.statusOfLoading = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.LoadingStatuses.fulfilled;\n            postsEntityAdapter.upsertMany(state, posts);\n            if (method === 'post') {\n                const newPost = posts[0];\n                state.activePostId = newPost.id;\n            }\n        })\n            .addCase(_fetchPosts__WEBPACK_IMPORTED_MODULE_0__.fetchPosts.rejected, (state, { payload }) => {\n            state.statusOfLoading = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.LoadingStatuses.rejected;\n            // state.typeOfError = typeOfError;\n        });\n    }\n});\nconst selectorsPosts = postsEntityAdapter.getSelectors((store) => store.dataPosts);\nconst actionsPosts = dataPostsSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataPostsSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc2xpY2VzL1Bvc3RzL2RhdGFQb3N0c1NsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXRhc2svLi9zcmMvc3RvcmUvc2xpY2VzL1Bvc3RzL2RhdGFQb3N0c1NsaWNlLnRzPzJiNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUVudGl0eUFkYXB0ZXIgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IGZldGNoUG9zdHMgfSBmcm9tICcuL2ZldGNoUG9zdHMnO1xuaW1wb3J0IHsgTG9hZGluZ1N0YXR1c2VzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBhY3RpdmVQb3N0SWQ6IG51bGwsXG4gICAgc3RhdHVzT2ZMb2FkaW5nOiAnaWRsJyxcbiAgICB0eXBlT2ZFcnJvcjogJydcbn07XG5jb25zdCBwb3N0c0VudGl0eUFkYXB0ZXIgPSBjcmVhdGVFbnRpdHlBZGFwdGVyKCk7XG5jb25zdCBkYXRhUG9zdHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAncG9zdHMnLFxuICAgIGluaXRpYWxTdGF0ZTogcG9zdHNFbnRpdHlBZGFwdGVyLmdldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIHNldEFjdGl2ZVBvc3RJZChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS5hY3RpdmVQb3N0SWQgPSBhY3Rpb24ucGF5bG9hZC5pZDtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlUG9zdChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgICAgICBwb3N0c0VudGl0eUFkYXB0ZXIudXBzZXJ0T25lKHN0YXRlLCBhY3Rpb24ucGF5bG9hZC5wb3N0KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICAgICAgYnVpbGRlclxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hQb3N0cy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnN0YXR1c09mTG9hZGluZyA9IExvYWRpbmdTdGF0dXNlcy5wZW5kaW5nO1xuICAgICAgICAgICAgc3RhdGUudHlwZU9mRXJyb3IgPSAnJztcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoUG9zdHMuZnVsZmlsbGVkLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBvc3RzLCBtZXRob2QgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgICBzdGF0ZS5zdGF0dXNPZkxvYWRpbmcgPSBMb2FkaW5nU3RhdHVzZXMuZnVsZmlsbGVkO1xuICAgICAgICAgICAgcG9zdHNFbnRpdHlBZGFwdGVyLnVwc2VydE1hbnkoc3RhdGUsIHBvc3RzKTtcbiAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdwb3N0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Bvc3QgPSBwb3N0c1swXTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5hY3RpdmVQb3N0SWQgPSBuZXdQb3N0LmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hQb3N0cy5yZWplY3RlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUuc3RhdHVzT2ZMb2FkaW5nID0gTG9hZGluZ1N0YXR1c2VzLnJlamVjdGVkO1xuICAgICAgICAgICAgLy8gc3RhdGUudHlwZU9mRXJyb3IgPSB0eXBlT2ZFcnJvcjtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5leHBvcnQgY29uc3Qgc2VsZWN0b3JzUG9zdHMgPSBwb3N0c0VudGl0eUFkYXB0ZXIuZ2V0U2VsZWN0b3JzKChzdG9yZSkgPT4gc3RvcmUuZGF0YVBvc3RzKTtcbmV4cG9ydCBjb25zdCBhY3Rpb25zUG9zdHMgPSBkYXRhUG9zdHNTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgZGF0YVBvc3RzU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/slices/Posts/dataPostsSlice.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("721d6e99cdca7a78948b")
/******/ })();
/******/ 
/******/ }
);