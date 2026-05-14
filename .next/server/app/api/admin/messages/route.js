"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/admin/messages/route";
exports.ids = ["app/api/admin/messages/route"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fmessages%2Froute&page=%2Fapi%2Fadmin%2Fmessages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fmessages%2Froute.ts&appDir=E%3A%5CDemo%20Website%5Ctensai-nextjs%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CDemo%20Website%5Ctensai-nextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fmessages%2Froute&page=%2Fapi%2Fadmin%2Fmessages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fmessages%2Froute.ts&appDir=E%3A%5CDemo%20Website%5Ctensai-nextjs%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CDemo%20Website%5Ctensai-nextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_Demo_Website_tensai_nextjs_app_api_admin_messages_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/messages/route.ts */ \"(rsc)/./app/api/admin/messages/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/messages/route\",\n        pathname: \"/api/admin/messages\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/messages/route\"\n    },\n    resolvedPagePath: \"E:\\\\Demo Website\\\\tensai-nextjs\\\\app\\\\api\\\\admin\\\\messages\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_Demo_Website_tensai_nextjs_app_api_admin_messages_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/admin/messages/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRm1lc3NhZ2VzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhZG1pbiUyRm1lc3NhZ2VzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWRtaW4lMkZtZXNzYWdlcyUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDRGVtbyUyMFdlYnNpdGUlNUN0ZW5zYWktbmV4dGpzJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1FJTNBJTVDRGVtbyUyMFdlYnNpdGUlNUN0ZW5zYWktbmV4dGpzJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNvQjtBQUNqRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbnNhaS1uZXh0anMvP2UzZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRTpcXFxcRGVtbyBXZWJzaXRlXFxcXHRlbnNhaS1uZXh0anNcXFxcYXBwXFxcXGFwaVxcXFxhZG1pblxcXFxtZXNzYWdlc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYWRtaW4vbWVzc2FnZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hZG1pbi9tZXNzYWdlc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYWRtaW4vbWVzc2FnZXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJFOlxcXFxEZW1vIFdlYnNpdGVcXFxcdGVuc2FpLW5leHRqc1xcXFxhcHBcXFxcYXBpXFxcXGFkbWluXFxcXG1lc3NhZ2VzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hZG1pbi9tZXNzYWdlcy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fmessages%2Froute&page=%2Fapi%2Fadmin%2Fmessages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fmessages%2Froute.ts&appDir=E%3A%5CDemo%20Website%5Ctensai-nextjs%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CDemo%20Website%5Ctensai-nextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/admin/messages/route.ts":
/*!*****************************************!*\
  !*** ./app/api/admin/messages/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PATCH: () => (/* binding */ PATCH)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\n\n\nconst DATA_FILE = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"data\", \"contact-messages.json\");\nfunction isAuthenticated() {\n    const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_3__.cookies)();\n    return !!cookieStore.get(\"admin_token\")?.value;\n}\nfunction readData() {\n    try {\n        return JSON.parse((0,fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync)(DATA_FILE, \"utf-8\"));\n    } catch  {\n        return [];\n    }\n}\nfunction writeData(d) {\n    (0,fs__WEBPACK_IMPORTED_MODULE_1__.writeFileSync)(DATA_FILE, JSON.stringify(d, null, 2), \"utf-8\");\n}\nasync function GET() {\n    if (!isAuthenticated()) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(readData().reverse());\n}\nasync function PATCH(req) {\n    if (!isAuthenticated()) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const { id, read } = await req.json();\n    const data = readData();\n    const idx = data.findIndex((m)=>m.id === id);\n    if (idx === -1) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Not found\"\n    }, {\n        status: 404\n    });\n    data[idx].read = read;\n    writeData(data);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        success: true\n    });\n}\nasync function DELETE(req) {\n    if (!isAuthenticated()) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const { id } = await req.json();\n    const data = readData();\n    writeData(data.filter((m)=>m.id !== id));\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        success: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL21lc3NhZ2VzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1RDtBQUNQO0FBQ3pCO0FBQ2U7QUFFdEMsTUFBTUssWUFBWUYsZ0RBQVMsQ0FBQ0ksUUFBUUMsR0FBRyxJQUFJLFFBQVE7QUFFbkQsU0FBU0M7SUFDUCxNQUFNQyxjQUFjTixxREFBT0E7SUFDM0IsT0FBTyxDQUFDLENBQUNNLFlBQVlDLEdBQUcsQ0FBQyxnQkFBZ0JDO0FBQzNDO0FBRUEsU0FBU0M7SUFDUCxJQUFJO1FBQUUsT0FBT0MsS0FBS0MsS0FBSyxDQUFDZCxnREFBWUEsQ0FBQ0ksV0FBVztJQUFVLEVBQUUsT0FBTTtRQUFFLE9BQU8sRUFBRTtJQUFDO0FBQ2hGO0FBQ0EsU0FBU1csVUFBVUMsQ0FBWTtJQUFJZixpREFBYUEsQ0FBQ0csV0FBV1MsS0FBS0ksU0FBUyxDQUFDRCxHQUFHLE1BQU0sSUFBSTtBQUFTO0FBRTFGLGVBQWVFO0lBQ3BCLElBQUksQ0FBQ1YsbUJBQW1CLE9BQU9ULHFEQUFZQSxDQUFDb0IsSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBZSxHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUMxRixPQUFPdEIscURBQVlBLENBQUNvQixJQUFJLENBQUNQLFdBQVdVLE9BQU87QUFDN0M7QUFFTyxlQUFlQyxNQUFNQyxHQUFnQjtJQUMxQyxJQUFJLENBQUNoQixtQkFBbUIsT0FBT1QscURBQVlBLENBQUNvQixJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFlLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBQzFGLE1BQU0sRUFBRUksRUFBRSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNRixJQUFJTCxJQUFJO0lBQ25DLE1BQU1RLE9BQU9mO0lBQ2IsTUFBTWdCLE1BQU1ELEtBQUtFLFNBQVMsQ0FBQyxDQUFDQyxJQUFzQkEsRUFBRUwsRUFBRSxLQUFLQTtJQUMzRCxJQUFJRyxRQUFRLENBQUMsR0FBRyxPQUFPN0IscURBQVlBLENBQUNvQixJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFZLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBQy9FTSxJQUFJLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxHQUFHQTtJQUNqQlgsVUFBVVk7SUFDVixPQUFPNUIscURBQVlBLENBQUNvQixJQUFJLENBQUM7UUFBRVksU0FBUztJQUFLO0FBQzNDO0FBRU8sZUFBZUMsT0FBT1IsR0FBZ0I7SUFDM0MsSUFBSSxDQUFDaEIsbUJBQW1CLE9BQU9ULHFEQUFZQSxDQUFDb0IsSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBZSxHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUMxRixNQUFNLEVBQUVJLEVBQUUsRUFBRSxHQUFHLE1BQU1ELElBQUlMLElBQUk7SUFDN0IsTUFBTVEsT0FBT2Y7SUFDYkcsVUFBVVksS0FBS00sTUFBTSxDQUFDLENBQUNILElBQXNCQSxFQUFFTCxFQUFFLEtBQUtBO0lBQ3RELE9BQU8xQixxREFBWUEsQ0FBQ29CLElBQUksQ0FBQztRQUFFWSxTQUFTO0lBQUs7QUFDM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW5zYWktbmV4dGpzLy4vYXBwL2FwaS9hZG1pbi9tZXNzYWdlcy9yb3V0ZS50cz9mOGNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB7IHJlYWRGaWxlU3luYywgd3JpdGVGaWxlU3luYyB9IGZyb20gJ2ZzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnXG5cbmNvbnN0IERBVEFfRklMRSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsICdjb250YWN0LW1lc3NhZ2VzLmpzb24nKVxuXG5mdW5jdGlvbiBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gY29va2llcygpXG4gIHJldHVybiAhIWNvb2tpZVN0b3JlLmdldCgnYWRtaW5fdG9rZW4nKT8udmFsdWVcbn1cblxuZnVuY3Rpb24gcmVhZERhdGEoKSB7XG4gIHRyeSB7IHJldHVybiBKU09OLnBhcnNlKHJlYWRGaWxlU3luYyhEQVRBX0ZJTEUsICd1dGYtOCcpKSB9IGNhdGNoIHsgcmV0dXJuIFtdIH1cbn1cbmZ1bmN0aW9uIHdyaXRlRGF0YShkOiB1bmtub3duW10pIHsgd3JpdGVGaWxlU3luYyhEQVRBX0ZJTEUsIEpTT04uc3RyaW5naWZ5KGQsIG51bGwsIDIpLCAndXRmLTgnKSB9XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIGlmICghaXNBdXRoZW50aWNhdGVkKCkpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LCB7IHN0YXR1czogNDAxIH0pXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihyZWFkRGF0YSgpLnJldmVyc2UoKSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBBVENIKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQoKSkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSlcbiAgY29uc3QgeyBpZCwgcmVhZCB9ID0gYXdhaXQgcmVxLmpzb24oKVxuICBjb25zdCBkYXRhID0gcmVhZERhdGEoKVxuICBjb25zdCBpZHggPSBkYXRhLmZpbmRJbmRleCgobTogeyBpZDogc3RyaW5nIH0pID0+IG0uaWQgPT09IGlkKVxuICBpZiAoaWR4ID09PSAtMSkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdOb3QgZm91bmQnIH0sIHsgc3RhdHVzOiA0MDQgfSlcbiAgZGF0YVtpZHhdLnJlYWQgPSByZWFkXG4gIHdyaXRlRGF0YShkYXRhKVxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxOiBOZXh0UmVxdWVzdCkge1xuICBpZiAoIWlzQXV0aGVudGljYXRlZCgpKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KVxuICBjb25zdCB7IGlkIH0gPSBhd2FpdCByZXEuanNvbigpXG4gIGNvbnN0IGRhdGEgPSByZWFkRGF0YSgpXG4gIHdyaXRlRGF0YShkYXRhLmZpbHRlcigobTogeyBpZDogc3RyaW5nIH0pID0+IG0uaWQgIT09IGlkKSlcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInJlYWRGaWxlU3luYyIsIndyaXRlRmlsZVN5bmMiLCJwYXRoIiwiY29va2llcyIsIkRBVEFfRklMRSIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiaXNBdXRoZW50aWNhdGVkIiwiY29va2llU3RvcmUiLCJnZXQiLCJ2YWx1ZSIsInJlYWREYXRhIiwiSlNPTiIsInBhcnNlIiwid3JpdGVEYXRhIiwiZCIsInN0cmluZ2lmeSIsIkdFVCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInJldmVyc2UiLCJQQVRDSCIsInJlcSIsImlkIiwicmVhZCIsImRhdGEiLCJpZHgiLCJmaW5kSW5kZXgiLCJtIiwic3VjY2VzcyIsIkRFTEVURSIsImZpbHRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/messages/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fmessages%2Froute&page=%2Fapi%2Fadmin%2Fmessages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fmessages%2Froute.ts&appDir=E%3A%5CDemo%20Website%5Ctensai-nextjs%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CDemo%20Website%5Ctensai-nextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();