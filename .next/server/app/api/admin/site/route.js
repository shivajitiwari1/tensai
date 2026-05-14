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
exports.id = "app/api/admin/site/route";
exports.ids = ["app/api/admin/site/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fsite%2Froute&page=%2Fapi%2Fadmin%2Fsite%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fsite%2Froute.ts&appDir=E%3A%5CDemo%20Website%5Ctensai-nextjs%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CDemo%20Website%5Ctensai-nextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fsite%2Froute&page=%2Fapi%2Fadmin%2Fsite%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fsite%2Froute.ts&appDir=E%3A%5CDemo%20Website%5Ctensai-nextjs%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CDemo%20Website%5Ctensai-nextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_Demo_Website_tensai_nextjs_app_api_admin_site_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/site/route.ts */ \"(rsc)/./app/api/admin/site/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/site/route\",\n        pathname: \"/api/admin/site\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/site/route\"\n    },\n    resolvedPagePath: \"E:\\\\Demo Website\\\\tensai-nextjs\\\\app\\\\api\\\\admin\\\\site\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_Demo_Website_tensai_nextjs_app_api_admin_site_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/admin/site/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRnNpdGUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmFkbWluJTJGc2l0ZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmFkbWluJTJGc2l0ZSUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDRGVtbyUyMFdlYnNpdGUlNUN0ZW5zYWktbmV4dGpzJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1FJTNBJTVDRGVtbyUyMFdlYnNpdGUlNUN0ZW5zYWktbmV4dGpzJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNnQjtBQUM3RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbnNhaS1uZXh0anMvPzY5ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRTpcXFxcRGVtbyBXZWJzaXRlXFxcXHRlbnNhaS1uZXh0anNcXFxcYXBwXFxcXGFwaVxcXFxhZG1pblxcXFxzaXRlXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hZG1pbi9zaXRlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWRtaW4vc2l0ZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYWRtaW4vc2l0ZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkU6XFxcXERlbW8gV2Vic2l0ZVxcXFx0ZW5zYWktbmV4dGpzXFxcXGFwcFxcXFxhcGlcXFxcYWRtaW5cXFxcc2l0ZVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYWRtaW4vc2l0ZS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fsite%2Froute&page=%2Fapi%2Fadmin%2Fsite%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fsite%2Froute.ts&appDir=E%3A%5CDemo%20Website%5Ctensai-nextjs%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CDemo%20Website%5Ctensai-nextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/admin/site/route.ts":
/*!*************************************!*\
  !*** ./app/api/admin/site/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\n\n\nconst DATA_FILE = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"data\", \"site.json\");\nfunction isAuthenticated() {\n    const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_3__.cookies)();\n    return !!cookieStore.get(\"admin_token\")?.value;\n}\nfunction readSite() {\n    return JSON.parse((0,fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync)(DATA_FILE, \"utf-8\"));\n}\nfunction writeSite(data) {\n    (0,fs__WEBPACK_IMPORTED_MODULE_1__.writeFileSync)(DATA_FILE, JSON.stringify(data, null, 2), \"utf-8\");\n}\n// GET /api/admin/site?section=stats\nasync function GET(req) {\n    if (!isAuthenticated()) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const section = req.nextUrl.searchParams.get(\"section\");\n    const site = readSite();\n    if (section) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(site[section] ?? null);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(site);\n}\n// PUT /api/admin/site?section=stats — update a specific section\nasync function PUT(req) {\n    if (!isAuthenticated()) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    try {\n        const section = req.nextUrl.searchParams.get(\"section\");\n        const body = await req.json();\n        const site = readSite();\n        if (section) {\n            site[section] = body;\n        } else {\n            // full site update\n            Object.assign(site, body);\n        }\n        writeSite(site);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true\n        });\n    } catch  {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Invalid data\"\n        }, {\n            status: 400\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL3NpdGUvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDUDtBQUN6QjtBQUNlO0FBRXRDLE1BQU1LLFlBQVlGLGdEQUFTLENBQUNJLFFBQVFDLEdBQUcsSUFBSSxRQUFRO0FBRW5ELFNBQVNDO0lBQ1AsTUFBTUMsY0FBY04scURBQU9BO0lBQzNCLE9BQU8sQ0FBQyxDQUFDTSxZQUFZQyxHQUFHLENBQUMsZ0JBQWdCQztBQUMzQztBQUVBLFNBQVNDO0lBQ1AsT0FBT0MsS0FBS0MsS0FBSyxDQUFDZCxnREFBWUEsQ0FBQ0ksV0FBVztBQUM1QztBQUVBLFNBQVNXLFVBQVVDLElBQWE7SUFDOUJmLGlEQUFhQSxDQUFDRyxXQUFXUyxLQUFLSSxTQUFTLENBQUNELE1BQU0sTUFBTSxJQUFJO0FBQzFEO0FBRUEsb0NBQW9DO0FBQzdCLGVBQWVFLElBQUlDLEdBQWdCO0lBQ3hDLElBQUksQ0FBQ1gsbUJBQW1CLE9BQU9ULHFEQUFZQSxDQUFDcUIsSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBZSxHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUMxRixNQUFNQyxVQUFVSixJQUFJSyxPQUFPLENBQUNDLFlBQVksQ0FBQ2YsR0FBRyxDQUFDO0lBQzdDLE1BQU1nQixPQUFPZDtJQUNiLElBQUlXLFNBQVMsT0FBT3hCLHFEQUFZQSxDQUFDcUIsSUFBSSxDQUFDTSxJQUFJLENBQUNILFFBQVEsSUFBSTtJQUN2RCxPQUFPeEIscURBQVlBLENBQUNxQixJQUFJLENBQUNNO0FBQzNCO0FBRUEsZ0VBQWdFO0FBQ3pELGVBQWVDLElBQUlSLEdBQWdCO0lBQ3hDLElBQUksQ0FBQ1gsbUJBQW1CLE9BQU9ULHFEQUFZQSxDQUFDcUIsSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBZSxHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUMxRixJQUFJO1FBQ0YsTUFBTUMsVUFBVUosSUFBSUssT0FBTyxDQUFDQyxZQUFZLENBQUNmLEdBQUcsQ0FBQztRQUM3QyxNQUFNa0IsT0FBTyxNQUFNVCxJQUFJQyxJQUFJO1FBQzNCLE1BQU1NLE9BQU9kO1FBQ2IsSUFBSVcsU0FBUztZQUNYRyxJQUFJLENBQUNILFFBQVEsR0FBR0s7UUFDbEIsT0FBTztZQUNMLG1CQUFtQjtZQUNuQkMsT0FBT0MsTUFBTSxDQUFDSixNQUFNRTtRQUN0QjtRQUNBYixVQUFVVztRQUNWLE9BQU8zQixxREFBWUEsQ0FBQ3FCLElBQUksQ0FBQztZQUFFVyxTQUFTO1FBQUs7SUFDM0MsRUFBRSxPQUFNO1FBQ04sT0FBT2hDLHFEQUFZQSxDQUFDcUIsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBZSxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNwRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVuc2FpLW5leHRqcy8uL2FwcC9hcGkvYWRtaW4vc2l0ZS9yb3V0ZS50cz8yM2Q5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB7IHJlYWRGaWxlU3luYywgd3JpdGVGaWxlU3luYyB9IGZyb20gJ2ZzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnXG5cbmNvbnN0IERBVEFfRklMRSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsICdzaXRlLmpzb24nKVxuXG5mdW5jdGlvbiBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gY29va2llcygpXG4gIHJldHVybiAhIWNvb2tpZVN0b3JlLmdldCgnYWRtaW5fdG9rZW4nKT8udmFsdWVcbn1cblxuZnVuY3Rpb24gcmVhZFNpdGUoKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKHJlYWRGaWxlU3luYyhEQVRBX0ZJTEUsICd1dGYtOCcpKVxufVxuXG5mdW5jdGlvbiB3cml0ZVNpdGUoZGF0YTogdW5rbm93bikge1xuICB3cml0ZUZpbGVTeW5jKERBVEFfRklMRSwgSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMiksICd1dGYtOCcpXG59XG5cbi8vIEdFVCAvYXBpL2FkbWluL3NpdGU/c2VjdGlvbj1zdGF0c1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIGlmICghaXNBdXRoZW50aWNhdGVkKCkpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LCB7IHN0YXR1czogNDAxIH0pXG4gIGNvbnN0IHNlY3Rpb24gPSByZXEubmV4dFVybC5zZWFyY2hQYXJhbXMuZ2V0KCdzZWN0aW9uJylcbiAgY29uc3Qgc2l0ZSA9IHJlYWRTaXRlKClcbiAgaWYgKHNlY3Rpb24pIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihzaXRlW3NlY3Rpb25dID8/IG51bGwpXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihzaXRlKVxufVxuXG4vLyBQVVQgL2FwaS9hZG1pbi9zaXRlP3NlY3Rpb249c3RhdHMg4oCUIHVwZGF0ZSBhIHNwZWNpZmljIHNlY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQocmVxOiBOZXh0UmVxdWVzdCkge1xuICBpZiAoIWlzQXV0aGVudGljYXRlZCgpKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KVxuICB0cnkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSByZXEubmV4dFVybC5zZWFyY2hQYXJhbXMuZ2V0KCdzZWN0aW9uJylcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKVxuICAgIGNvbnN0IHNpdGUgPSByZWFkU2l0ZSgpXG4gICAgaWYgKHNlY3Rpb24pIHtcbiAgICAgIHNpdGVbc2VjdGlvbl0gPSBib2R5XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZ1bGwgc2l0ZSB1cGRhdGVcbiAgICAgIE9iamVjdC5hc3NpZ24oc2l0ZSwgYm9keSlcbiAgICB9XG4gICAgd3JpdGVTaXRlKHNpdGUpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludmFsaWQgZGF0YScgfSwgeyBzdGF0dXM6IDQwMCB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicmVhZEZpbGVTeW5jIiwid3JpdGVGaWxlU3luYyIsInBhdGgiLCJjb29raWVzIiwiREFUQV9GSUxFIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJpc0F1dGhlbnRpY2F0ZWQiLCJjb29raWVTdG9yZSIsImdldCIsInZhbHVlIiwicmVhZFNpdGUiLCJKU09OIiwicGFyc2UiLCJ3cml0ZVNpdGUiLCJkYXRhIiwic3RyaW5naWZ5IiwiR0VUIiwicmVxIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwic2VjdGlvbiIsIm5leHRVcmwiLCJzZWFyY2hQYXJhbXMiLCJzaXRlIiwiUFVUIiwiYm9keSIsIk9iamVjdCIsImFzc2lnbiIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/site/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fsite%2Froute&page=%2Fapi%2Fadmin%2Fsite%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fsite%2Froute.ts&appDir=E%3A%5CDemo%20Website%5Ctensai-nextjs%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CDemo%20Website%5Ctensai-nextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();