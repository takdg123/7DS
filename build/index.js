var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/css/app.css
var app_default = "/build/_assets/app-KN326A4M.css";

// app/css/custom.css
var custom_default = "/build/_assets/custom-FT2UBKRA.css";

// node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min_default = "/build/_assets/bootstrap.min-43MNHBU2.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: bootstrap_min_default },
  { rel: "stylesheet", href: app_default },
  { rel: "stylesheet", href: custom_default },
  { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" },
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("script", { src: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/specification.tsx
var specification_exports = {};
__export(specification_exports, {
  default: () => specification_default
});
import { useState as useState2, useEffect as useEffect2 } from "react";

// app/routes/navigate.tsx
var navigate_exports = {};
__export(navigate_exports, {
  default: () => navigate_default
});
import { useState, useEffect } from "react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function buttonStyle(valid) {
  return {
    height: "130px",
    backgroundColor: valid ? "#fff" : null,
    color: valid ? "#000" : null,
    borderTop: valid ? "2px solid var(--pickled-bluewood-900)" : null,
    transition: "all 0.3s ease"
  };
}
function menuClass(valid) {
  return valid ? "text-xl font-bold border-b-2 border-transparent mx-1.5 sm:mx-6 transition duration-300 ease-in-out transform border-default-500 scale-110 text-orange" : "text-xl font-bold border-b-2 border-transparent mx-1.5 sm:mx-6 transition duration-300 ease-in-out transform hover:border-default-500 hover:scale-110 hover:text-white";
}
function NavBar(props) {
  let [onMouse, setOnMouse] = useState(!1), [isTop, setIsTop] = useState(!props.fixed), [activeMenu, setActiveMenu] = useState(null), handleScroll = () => {
    let isTop2 = window.scrollY === 0;
    console.log(!props.fixed, isTop2 && !props.fixed), setIsTop(isTop2 && !props.fixed);
  }, handleManu = (manu, onMouse2) => {
    setActiveMenu(manu), setOnMouse(onMouse2);
  };
  return useEffect(() => (window.addEventListener("scroll", handleScroll), () => {
    window.removeEventListener("scroll", handleScroll);
  }), []), useEffect(() => {
    setActiveMenu(props.manu);
  }, []), /* @__PURE__ */ jsxDEV3("nav", { className: "justify-center mx-auto shadow fixed w-full top-0 z-1000 text-white", style: {
    backgroundColor: `rgba(7, 28, 48, ${isTop ? 0.5 : 1})`,
    margin: "0 auto"
  }, children: /* @__PURE__ */ jsxDEV3(
    "div",
    {
      className: "container flex items-center justify-center mx-auto capitalize",
      style: { maxWidth: "1440px", color: "#fff", padding: activeMenu === null ? "0rem" : "0rem 1.5rem 0 1.5rem", margin: "0 auto" },
      onMouseLeave: () => handleManu(props.manu, !1),
      children: [
        /* @__PURE__ */ jsxDEV3("button", { "data-collapse-toggle": "navbar-dropdown", type: "button", className: "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600", "aria-controls": "navbar-dropdown", "aria-expanded": "false", children: [
          /* @__PURE__ */ jsxDEV3("span", { className: "sr-only", children: "Open main menu" }, void 0, !1, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV3("svg", { className: "w-5 h-5", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 17 14", children: /* @__PURE__ */ jsxDEV3("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M1 1h15M1 7h15M1 13h15" }, void 0, !1, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 66,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/navigate.tsx",
          lineNumber: 63,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "hidden w-full md:block md:w-auto", id: "navbar-dropdown", children: /* @__PURE__ */ jsxDEV3("ul", { className: "flex flex-col font-medium py-4 md:p-0 mt-0 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 mx-auto", style: { margin: "0 auto" }, children: [
          /* @__PURE__ */ jsxDEV3("li", { style: { width: "120px", textAlign: "center" }, children: /* @__PURE__ */ jsxDEV3(
            "div",
            {
              onMouseEnter: () => handleManu("manuHome", !0),
              children: /* @__PURE__ */ jsxDEV3(
                "button",
                {
                  id: "home",
                  "data-dropdown-toggle": "manuHome",
                  className: menuClass(activeMenu === "manuHome"),
                  children: /* @__PURE__ */ jsxDEV3("a", { href: "/", children: "Home" }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 80,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/navigate.tsx",
                  lineNumber: 75,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/navigate.tsx",
              lineNumber: 72,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV3("li", { style: { width: "150px", textAlign: "center" }, children: /* @__PURE__ */ jsxDEV3(
            "div",
            {
              onMouseEnter: () => handleManu("manuAbout", !0),
              children: [
                /* @__PURE__ */ jsxDEV3(
                  "button",
                  {
                    id: "about",
                    "data-dropdown-toggle": "manuAbout",
                    className: menuClass(activeMenu === "manuAbout"),
                    children: "About Us"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 88,
                    columnNumber: 17
                  },
                  this
                ),
                onMouse ? /* @__PURE__ */ jsxDEV3("div", { style: buttonStyle(activeMenu === "manuAbout"), children: /* @__PURE__ */ jsxDEV3("ul", { className: "text-sm", style: { margin: "0 auto" }, children: [
                  /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3("a", { href: "/team", className: "block py-2 hover:bg-oran-100", style: { padding: "0.5rem" }, children: "Team" }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 99,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 98,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3("a", { href: "/groups", className: "block py-2 hover:bg-oran-100", style: { padding: "0.5rem" }, children: "Working Group" }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 102,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 101,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/navigate.tsx",
                  lineNumber: 97,
                  columnNumber: 19
                }, this) }, void 0, !1, {
                  fileName: "app/routes/navigate.tsx",
                  lineNumber: 96,
                  columnNumber: 17
                }, this) : null
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/navigate.tsx",
              lineNumber: 85,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 84,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV3("li", { style: { width: "120px", textAlign: "center" }, children: /* @__PURE__ */ jsxDEV3(
            "div",
            {
              onMouseEnter: () => handleManu("manu7dt", !0),
              children: [
                /* @__PURE__ */ jsxDEV3(
                  "button",
                  {
                    id: "7dt",
                    "data-dropdown-toggle": "manu7dt",
                    className: menuClass(activeMenu === "manu7dt"),
                    children: "7DT"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 111,
                    columnNumber: 17
                  },
                  this
                ),
                onMouse ? /* @__PURE__ */ jsxDEV3("div", { style: buttonStyle(activeMenu === "manu7dt"), children: /* @__PURE__ */ jsxDEV3("ul", { className: "text-sm", style: { margin: "0 auto" }, children: [
                  /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3("a", { href: "/telescope", className: "block py-2 hover:bg-oran-100", style: { padding: "0.5rem" }, children: "Overview" }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 122,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 121,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3("a", { href: "/location", className: "block py-2 hover:bg-oran-100", style: { padding: "0.5rem" }, children: "Location" }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 125,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 124,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3("a", { href: "/specification", className: "block py-2 hover:bg-oran-100", style: { padding: "0.5rem" }, children: "Specification" }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 128,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 127,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/navigate.tsx",
                  lineNumber: 120,
                  columnNumber: 19
                }, this) }, void 0, !1, {
                  fileName: "app/routes/navigate.tsx",
                  lineNumber: 119,
                  columnNumber: 17
                }, this) : null
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/navigate.tsx",
              lineNumber: 108,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 107,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV3("li", { style: { width: "120px", textAlign: "center" }, children: /* @__PURE__ */ jsxDEV3(
            "div",
            {
              onMouseEnter: () => handleManu("manu7ds", !0),
              children: [
                /* @__PURE__ */ jsxDEV3(
                  "button",
                  {
                    id: "7ds",
                    "data-dropdown-toggle": "manu7ds",
                    className: menuClass(activeMenu === "manu7ds"),
                    children: "7DS"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 138,
                    columnNumber: 17
                  },
                  this
                ),
                onMouse ? /* @__PURE__ */ jsxDEV3("div", { style: buttonStyle(activeMenu === "manu7ds"), children: /* @__PURE__ */ jsxDEV3("ul", { className: "text-sm", children: [
                  /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3("a", { href: "/survey", className: "block py-2 hover:bg-oran-100", style: { padding: "0.5rem" }, children: "Survey" }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 149,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 148,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3("a", { href: "/status", className: "block py-2 hover:bg-oran-100", style: { padding: "0.5rem" }, children: "Status" }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 152,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 151,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3("a", { href: "/data", className: "block py-2 hover:bg-oran-100", style: { padding: "0.5rem" }, children: "Data" }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 155,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 154,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/navigate.tsx",
                  lineNumber: 147,
                  columnNumber: 19
                }, this) }, void 0, !1, {
                  fileName: "app/routes/navigate.tsx",
                  lineNumber: 146,
                  columnNumber: 17
                }, this) : null
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/navigate.tsx",
              lineNumber: 135,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 134,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV3("li", { style: { width: "120px", textAlign: "center" }, children: /* @__PURE__ */ jsxDEV3(
            "div",
            {
              onMouseEnter: () => handleManu("manuScience", !0),
              children: [
                /* @__PURE__ */ jsxDEV3(
                  "button",
                  {
                    id: "science",
                    "data-dropdown-toggle": "manuScience",
                    className: menuClass(activeMenu === "manuScience"),
                    children: "Science"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 165,
                    columnNumber: 17
                  },
                  this
                ),
                onMouse ? /* @__PURE__ */ jsxDEV3("div", { style: buttonStyle(activeMenu === "manuScience"), children: /* @__PURE__ */ jsxDEV3("ul", { className: "text-sm", children: [
                  /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3("a", { href: "/science", className: "block py-2 hover:bg-oran-100", style: { padding: "0.5rem" }, children: "Scientific Goals" }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 176,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 175,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3("a", { href: "/publication", className: "block py-2 hover:bg-oran-100", style: { padding: "0.5rem" }, children: "Publications" }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 179,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 178,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/navigate.tsx",
                  lineNumber: 174,
                  columnNumber: 19
                }, this) }, void 0, !1, {
                  fileName: "app/routes/navigate.tsx",
                  lineNumber: 173,
                  columnNumber: 17
                }, this) : null
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/navigate.tsx",
              lineNumber: 162,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 161,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV3("li", { style: { width: "120px", textAlign: "center" }, children: /* @__PURE__ */ jsxDEV3(
            "div",
            {
              onMouseEnter: () => handleManu("manuNews", !0),
              children: /* @__PURE__ */ jsxDEV3(
                "button",
                {
                  id: "news",
                  "data-dropdown-toggle": "manuNews",
                  className: menuClass(!1),
                  children: /* @__PURE__ */ jsxDEV3("a", { href: "/news", children: "News" }, void 0, !1, {
                    fileName: "app/routes/navigate.tsx",
                    lineNumber: 194,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/navigate.tsx",
                  lineNumber: 189,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/navigate.tsx",
              lineNumber: 186,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 185,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/navigate.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/navigate.tsx",
          lineNumber: 69,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/navigate.tsx",
      lineNumber: 60,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/navigate.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
var navigate_default = NavBar;

// app/routes/footer.tsx
var footer_exports = {};
__export(footer_exports, {
  default: () => footer_default
});
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var FooterBar = () => /* @__PURE__ */ jsxDEV4("footer", { style: { backgroundColor: "black" }, children: /* @__PURE__ */ jsxDEV4("div", { className: "mx-auto w-full", style: { maxWidth: "1440px", margin: "0 auto", padding: "0 10vw 0 10vw" }, children: /* @__PURE__ */ jsxDEV4("div", { className: "grid grid-cols-2 gap-8 py-6 lg:py-8 md:grid-cols-4", children: [
  /* @__PURE__ */ jsxDEV4("div", { children: [
    /* @__PURE__ */ jsxDEV4("h2", { className: "text-sm font-semibold text-gray-900 uppercase text-white", children: "Contact" }, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 9,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("hr", { className: "mb-2" }, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 10,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("p", { className: "text-gray-500", children: " Myungshin Im " }, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("p", { className: "text-gray-500", children: " Professor, Dept. of Physics & Astronomy, Seoul National University," }, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("p", { className: "text-gray-500", children: " 56-1 San, Shillim-dong, Kwanak-gu, Seoul, KOREA " }, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("p", { className: "text-gray-500", children: " +82-2-880-6585/6761 " }, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("p", { className: "text-gray-500 mb-2", children: [
      " ",
      /* @__PURE__ */ jsxDEV4("a", { href: "mailto:mim@astro.snu.ac.kr", children: "mim@astro.snu.ac.kr" }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 15,
        columnNumber: 48
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("hr", {}, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/footer.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV4("div", { children: [
    /* @__PURE__ */ jsxDEV4("h2", { className: "text-sm font-semibold text-gray-900 uppercase text-white", children: "About Us" }, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("hr", { className: "mb-2" }, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 20,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("ul", { className: "text-gray-500 dark:text-gray-400 font-medium", children: [
      /* @__PURE__ */ jsxDEV4("li", { className: "mb-2", children: /* @__PURE__ */ jsxDEV4("a", { href: "/team", className: "hover:color-org", children: "Team" }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 23,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 22,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV4("li", { className: "mb-2", children: /* @__PURE__ */ jsxDEV4("a", { href: "/groups", className: "hover:color-org", children: "Working Group" }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 26,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 25,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("hr", { className: "mb-6" }, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("h2", { className: "text-sm font-semibold text-gray-900 uppercase text-white", children: "7DT" }, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("hr", { className: "mb-2" }, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 31,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("ul", { className: "text-gray-500 dark:text-gray-400 font-medium", children: [
      /* @__PURE__ */ jsxDEV4("li", { className: "mb-2", children: /* @__PURE__ */ jsxDEV4("a", { href: "/telescope", className: "hover:color-org", children: "Overview" }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("li", { className: "mb-2", children: /* @__PURE__ */ jsxDEV4("a", { href: "/location", className: "hover:color-org", children: "Location" }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("li", { className: "mb-2", children: /* @__PURE__ */ jsxDEV4("a", { href: "/specification", className: "hover:color-org", children: "Specification" }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("hr", {}, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/footer.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV4("div", { children: [
    /* @__PURE__ */ jsxDEV4("h2", { className: "text-sm font-semibold text-gray-900 uppercase text-white", children: "7DS" }, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 46,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("hr", { className: "mb-2" }, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("ul", { className: "text-gray-500 dark:text-gray-400 font-medium", children: [
      /* @__PURE__ */ jsxDEV4("li", { className: "mb-2", children: /* @__PURE__ */ jsxDEV4("a", { href: "#", className: "hover:color-org", children: "Survey" }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("li", { className: "mb-2", children: /* @__PURE__ */ jsxDEV4("a", { href: "#", className: "hover:color-org", children: "Status" }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("li", { className: "mb-2", children: /* @__PURE__ */ jsxDEV4("a", { href: "#", className: "hover:color-org", children: "Data" }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("hr", {}, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 59,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/footer.tsx",
    lineNumber: 45,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV4("div", { children: [
    /* @__PURE__ */ jsxDEV4("h2", { className: "text-sm font-semibold text-gray-900 uppercase text-white", children: "Science" }, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("hr", { className: "mb-2" }, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("ul", { className: "text-gray-500 dark:text-gray-400 font-medium", children: [
      /* @__PURE__ */ jsxDEV4("li", { className: "mb-2", children: /* @__PURE__ */ jsxDEV4("a", { href: "/science", className: "hover:color-org", children: "Scientific Goals" }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 66,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("li", { className: "mb-2", children: /* @__PURE__ */ jsxDEV4("a", { href: "/publication", className: "hover:color-org", children: "Publications" }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 69,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/footer.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 64,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("hr", { className: "mb-6" }, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 72,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("h2", { className: "text-sm font-semibold text-gray-900 uppercase text-white", children: /* @__PURE__ */ jsxDEV4("a", { href: "/news", children: "News" }, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 74,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/footer.tsx",
      lineNumber: 73,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/footer.tsx",
    lineNumber: 61,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/footer.tsx",
  lineNumber: 7,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/footer.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/routes/footer.tsx",
  lineNumber: 5,
  columnNumber: 3
}, this), footer_default = FooterBar;

// app/routes/specification.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var Index = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/spec.png")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [submenuTop, setSubmenuTop] = useState2("750px"), [smallWindow, setSmallWindow] = useState2(!0);
  return useEffect2(() => {
    let updateWindow = () => {
      window.innerWidth < 1500 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateWindow(), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []), useEffect2(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, windowHeight = window.innerHeight, newTop = `calc(750px - ${scrollPosition * 0.2 / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), /* @__PURE__ */ jsxDEV5("div", { children: [
    /* @__PURE__ */ jsxDEV5(navigate_default, { manu: "manu7dt" }, void 0, !1, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { style: backgroundImage, children: /* @__PURE__ */ jsxDEV5("div", { style: { height: "700px" } }, void 0, !1, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    smallWindow ? /* @__PURE__ */ jsxDEV5("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxDEV5("ul", { children: [
      /* @__PURE__ */ jsxDEV5("li", { className: "p-2", children: /* @__PURE__ */ jsxDEV5("a", { href: "/telescope", children: "Overview" }, void 0, !1, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 66,
        columnNumber: 31
      }, this) }, void 0, !1, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("li", { className: "p-2", children: /* @__PURE__ */ jsxDEV5("a", { href: "/location", children: "Location" }, void 0, !1, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 67,
        columnNumber: 31
      }, this) }, void 0, !1, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("li", { className: "p-2 active", children: /* @__PURE__ */ jsxDEV5("a", { href: "#", children: "Specification" }, void 0, !1, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 68,
        columnNumber: 38
      }, this) }, void 0, !1, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 64,
      columnNumber: 22
    }, this) : null,
    /* @__PURE__ */ jsxDEV5("div", { className: "mx-auto w-full", style: { maxWidth: "1440px", margin: "0 auto", padding: "50px 10vw 0 10vw", background: "#fff", color: "#264256" }, children: /* @__PURE__ */ jsxDEV5("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsxDEV5("div", { className: "justify-between", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
      /* @__PURE__ */ jsxDEV5("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "The Biggest Ground-based Multi-telescope System" }, void 0, !1, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV5("h3", { className: "text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
        "Specifcation of ",
        /* @__PURE__ */ jsxDEV5("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "7DT" }, void 0, !1, {
          fileName: "app/routes/specification.tsx",
          lineNumber: 79,
          columnNumber: 31
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 74,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "mx-auto w-full", style: { height: "400px", maxWidth: "1440px", margin: "0 auto", padding: "0 10vw 0 10vw" }, children: /* @__PURE__ */ jsxDEV5("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsxDEV5("h3", { className: "text-2xl sm:text-3xl leading-normal font-extrabold tracking-tight", style: { fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: "Optics" }, void 0, !1, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { style: { backgroundColor: "#f9f9f9" }, children: /* @__PURE__ */ jsxDEV5("div", { className: "mx-auto w-full", style: { height: "400px", maxWidth: "1440px", margin: "0 auto", padding: "0 10vw 0 10vw" }, children: /* @__PURE__ */ jsxDEV5("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsxDEV5("h3", { className: "text-2xl sm:text-3xl leading-normal font-extrabold tracking-tight", style: { fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: "Mount" }, void 0, !1, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 96,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "mx-auto w-full", style: { maxWidth: "1440px", margin: "0 auto", padding: "0 10vw 0 10vw" }, children: /* @__PURE__ */ jsxDEV5("div", { className: "p-10 max-w-screen-lg mx-auto", children: [
      /* @__PURE__ */ jsxDEV5("h3", { className: "mb-3 text-2xl sm:text-3xl leading-normal font-extrabold tracking-tight", style: { fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: "Filter" }, void 0, !1, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("p", { className: "text-content", children: "The utilization of 7DT filters allows for the sophisticated observation of an object, enabling the exploration of its characteristics across a diverse spectrum of wavelengths." }, void 0, !1, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 109,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("img", { className: "p-6", src: "/img/filter.png" }, void 0, !1, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("p", { className: "text-content", children: "Here are two examples: NGC7293(left) and NGC0253(right)" }, void 0, !1, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "flex flex-wrap justify-between p-10", style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsxDEV5("img", { src: "/img/NGC7293.gif", width: "40%" }, void 0, !1, {
          fileName: "app/routes/specification.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("img", { src: "/img/NGC0253.gif", width: "40%" }, void 0, !1, {
          fileName: "app/routes/specification.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5(footer_default, {}, void 0, !1, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/specification.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}, specification_default = Index;

// app/routes/publication.tsx
var publication_exports = {};
__export(publication_exports, {
  default: () => publication_default
});
import { useState as useState3, useEffect as useEffect3 } from "react";
import { Pagination } from "flowbite-react";

// app/routes/content/news.json
var news_default = {
  news: [
    {
      type: "press",
      title: "First Release of Images Taken with 7-Dimensional Telescope",
      webpage: "https://gwuniverse.snu.ac.kr/news/highlights/15",
      date: "Feb. 07, 2024",
      source: "Center for the GW universe",
      content: "",
      imgName: "news-4.png"
    },
    {
      type: "meeting",
      title: "2024 SPHEREx-7DT Joint Workshop",
      place: "Grand Hall in Forest Resom",
      webpage: "https://sites.google.com/view/spherex-7ds-workshop/home",
      date: "Jan. 24-26, 2024",
      content: "",
      imgName: "news-3.png"
    },
    {
      type: "publication",
      author: "Paek, Gregory S. H.; Im, Myungshin; Kim, Joonho; Lim, Gu; Park, Bomi; Choi, Changsu; Kim, Sophia; Barbieri, Claudio; Salafia, Om Sharan ; Paek, Insu; Shin, Suhyun; Seo, Jinguk ; Lee, Hyung Mok; Lee, Chung-Uk; Kim, Seung-Lee; Sung, Hyun-Il",
      title: "Gravitational-wave Electromagnetic Counterpart Korean Observatory (GECKO): GECKO Follow-up Observation of GW190425",
      journal: "ApJ",
      date: "Jan. 2024",
      doi: "10.3847/1538-4357/ad0238",
      preprint: "arXiv:2310.19593",
      ref: "2024ApJ...960..113P",
      shortAuthor: "Paek et al.",
      abstract: "One of the keys to the success of multimessenger astronomy is the rapid identification of the electromagnetic wave counterpart, kilonova (KN), of the gravitational-wave (GW) event. Despite its importance, it is hard to find a KN associated with a GW event, due to a poorly constrained GW localization map and numerous signals that could be confused as a KN. Here, we present the Gravitational-wave Electromagnetic wave Counterpart Korean Observatory (GECKO) project, the GECKO observation of GW190425, and prospects of GECKO in the fourth observing run (O4) of the GW detectors. We outline our follow-up observation strategies during O3. In particular, we describe our galaxy-targeted observation criteria that prioritize based on galaxy properties. Armed with this strategy, we performed an optical and/or near-infrared follow-up observation of GW190425, the first binary neutron star merger event during the O3 run. Despite a vast localization area of 7460 deg2, we observed 621 host galaxy candidates, corresponding to 29.5% of the scores we assigned, with most of them observed within the first 3 days of the GW event. Ten transients were discovered during this search, including a new transient with a host galaxy. No plausible KN was found, but we were still able to constrain the properties of potential KNe using upper limits. The GECKO observation demonstrates that GECKO can possibly uncover a GW170817-like KN at a distance <200 Mpc if the localization area is of the order of hundreds of square degrees, providing a bright prospect for the identification of GW electromagnetic wave counterparts during the O4 run.",
      imgName: "news-2.png",
      webpage: "https://iopscience.iop.org/article/10.3847/1538-4357/ad0238",
      webpage2: "https://arxiv.org/abs/2310.19593"
    },
    {
      type: "publication",
      author: "Tak, Donggeun; Uhm, Z. Lucas; Gillanders, James H.",
      title: "Exploring the Impact of the Ejecta Velocity Profile on the Evolution of Kilonova: Diversity of the Kilonova Lightcurves",
      journal: "ApJ",
      date: "Dec. 2023",
      doi: "10.3847/1538-4357/ad06b0",
      preprint: "arXiv:2310.15608",
      ref: "2023ApJ...958..121T",
      shortAuthor: "Tak et al.",
      abstract: "A kilonova is a short-lived explosive event in the Universe, resulting from the merger of two compact objects. Despite its importance as a primary source of heavy elements through r-process nucleosynthesis, its nature is not well understood due to its rarity. In this work, we introduce a model that determines the density of a radially stratified relativistic ejecta. We apply the model to kilonova ejecta and explore several hypothesized velocity profiles as a function of the merger's ejection time. These velocity profiles result in diverse density profiles of the ejecta, for which we conduct radiative transfer simulations using TARDIS with the solar r-process composition. Consequently, we investigate the impact of the ejecta velocity profile on the resulting evolution of the lightcurve and spectra through the line transitions of heavy elements. The change in the rate at which these elements accumulate in the line-forming region leaves its imprint on the kilonova lightcurve at specific wavelengths, causing the lightcurves to decay at different rates. Furthermore, in several profiles, plateau-like behaviors (slow and/or flat decline) are also observed. In conclusion, this work proposes potential scenarios of the evolution of kilonova due to the ejecta velocity profile.",
      imgName: "news-1.png",
      webpage: "https://iopscience.iop.org/article/10.3847/1538-4357/ad06b0",
      webpage2: "https://arxiv.org/abs/2310.15608"
    }
  ]
};

// app/routes/publication.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var Index2 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/news.png")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [currentPage, setCurrentPage] = useState3(1), pubPerPage = 3, [submenuTop, setSubmenuTop] = useState3("200px"), [smallWindow, setSmallWindow] = useState3(!0);
  useEffect3(() => {
    let updateWindow = () => {
      window.innerWidth < 1500 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateWindow(), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []), useEffect3(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, windowHeight = window.innerHeight, newTop = `calc(200px - ${scrollPosition * -0.1 / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let pub = news_default.news.filter((item) => item.type === "publication"), totalPages = Math.ceil(pub.length / pubPerPage), indexOfLastPubs = currentPage * pubPerPage, indexOfFirstPubs = indexOfLastPubs - pubPerPage, currentPub = pub.slice(indexOfFirstPubs, indexOfLastPubs), onPageChange = (page) => setCurrentPage(page);
  return /* @__PURE__ */ jsxDEV6("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsxDEV6(navigate_default, { manu: "manuScience", fixed: !0 }, void 0, !1, {
      fileName: "app/routes/publication.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    smallWindow ? /* @__PURE__ */ jsxDEV6("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxDEV6("ul", { children: [
      /* @__PURE__ */ jsxDEV6("li", { className: "p-2 active", children: /* @__PURE__ */ jsxDEV6("a", { href: "#", children: "Science" }, void 0, !1, {
        fileName: "app/routes/publication.tsx",
        lineNumber: 76,
        columnNumber: 38
      }, this) }, void 0, !1, {
        fileName: "app/routes/publication.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6("li", { className: "p-2", children: /* @__PURE__ */ jsxDEV6("a", { href: "/status", children: "Publications" }, void 0, !1, {
        fileName: "app/routes/publication.tsx",
        lineNumber: 77,
        columnNumber: 31
      }, this) }, void 0, !1, {
        fileName: "app/routes/publication.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/publication.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/publication.tsx",
      lineNumber: 74,
      columnNumber: 22
    }, this) : null,
    /* @__PURE__ */ jsxDEV6("div", { className: "mx-auto w-full", style: { maxWidth: "1440px", margin: "0 auto", padding: "50px 10vw 50px 10vw", background: "#fff", color: "#264256" }, children: /* @__PURE__ */ jsxDEV6("div", { className: "p-10 max-w-screen-lg mx-auto", children: [
      /* @__PURE__ */ jsxDEV6("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsxDEV6("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Meet our works" }, void 0, !1, {
          fileName: "app/routes/publication.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("h3", { className: "text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: /* @__PURE__ */ jsxDEV6("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Publications" }, void 0, !1, {
          fileName: "app/routes/publication.tsx",
          lineNumber: 88,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/publication.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/publication.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "flex flex-wrap items-center justify-center", style: { maxWidth: "1200px", margin: "0 auto", marginBottom: "5rem", textAlign: "center", color: "black" }, children: [
        pub.map((p, index) => (index = index + 1, /* @__PURE__ */ jsxDEV6("div", { className: "w-full flex flex-warp p-6 m-3", style: { boxShadow: "0px 15px 35px rgba(227, 252, 239, 0.1), 0px 5px 15px rgba(0, 0, 0, 0.07)" }, children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "pr-5", style: { width: "70%" }, children: [
            /* @__PURE__ */ jsxDEV6("p", { className: "pb-3", style: { fontSize: "24px", lineHeight: "1.2", color: "var(--pickled-bluewood-600)", fontWeight: 500 }, children: /* @__PURE__ */ jsxDEV6("a", { href: p.webpage, target: "_blank", children: p.title }, void 0, !1, {
              fileName: "app/routes/publication.tsx",
              lineNumber: 98,
              columnNumber: 140
            }, this) }, void 0, !1, {
              fileName: "app/routes/publication.tsx",
              lineNumber: 98,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV6("p", { className: "text-content", style: { fontSize: "12pt" }, children: p.abstract }, void 0, !1, {
              fileName: "app/routes/publication.tsx",
              lineNumber: 99,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/publication.tsx",
            lineNumber: 97,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { style: { width: "30%", textAlign: "left" }, children: [
            /* @__PURE__ */ jsxDEV6("p", { className: "pb-3", children: [
              /* @__PURE__ */ jsxDEV6("span", { className: "text-bluewood-900", style: { fontWeight: 700 }, children: "Authors:" }, void 0, !1, {
                fileName: "app/routes/publication.tsx",
                lineNumber: 102,
                columnNumber: 41
              }, this),
              " ",
              p.author
            ] }, void 0, !0, {
              fileName: "app/routes/publication.tsx",
              lineNumber: 102,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV6("p", { className: "pb-3", children: [
              /* @__PURE__ */ jsxDEV6("span", { className: "text-bluewood-900", style: { fontWeight: 700 }, children: "Journal:" }, void 0, !1, {
                fileName: "app/routes/publication.tsx",
                lineNumber: 103,
                columnNumber: 41
              }, this),
              " ",
              p.journal
            ] }, void 0, !0, {
              fileName: "app/routes/publication.tsx",
              lineNumber: 103,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV6("p", { className: "pb-3", children: [
              /* @__PURE__ */ jsxDEV6("span", { className: "text-bluewood-900", style: { fontWeight: 700 }, children: "Date:" }, void 0, !1, {
                fileName: "app/routes/publication.tsx",
                lineNumber: 104,
                columnNumber: 41
              }, this),
              " ",
              p.date
            ] }, void 0, !0, {
              fileName: "app/routes/publication.tsx",
              lineNumber: 104,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV6("p", { className: "pb-3", children: [
              /* @__PURE__ */ jsxDEV6("span", { className: "text-bluewood-900", style: { fontWeight: 700 }, children: "doi:" }, void 0, !1, {
                fileName: "app/routes/publication.tsx",
                lineNumber: 105,
                columnNumber: 41
              }, this),
              " ",
              /* @__PURE__ */ jsxDEV6("a", { href: p.webpage, target: "_blank", children: p.doi }, void 0, !1, {
                fileName: "app/routes/publication.tsx",
                lineNumber: 105,
                columnNumber: 114
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/publication.tsx",
              lineNumber: 105,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV6("p", { className: "pb-3", children: [
              /* @__PURE__ */ jsxDEV6("span", { className: "text-bluewood-900", style: { fontWeight: 700 }, children: "preprint:" }, void 0, !1, {
                fileName: "app/routes/publication.tsx",
                lineNumber: 106,
                columnNumber: 41
              }, this),
              " ",
              /* @__PURE__ */ jsxDEV6("a", { href: p.webpage2, target: "_blank", children: p.preprint }, void 0, !1, {
                fileName: "app/routes/publication.tsx",
                lineNumber: 106,
                columnNumber: 119
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/publication.tsx",
              lineNumber: 106,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/publication.tsx",
            lineNumber: 101,
            columnNumber: 19
          }, this)
        ] }, index, !0, {
          fileName: "app/routes/publication.tsx",
          lineNumber: 96,
          columnNumber: 17
        }, this))),
        /* @__PURE__ */ jsxDEV6("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsxDEV6(Pagination, { currentPage, totalPages, onPageChange }, void 0, !1, {
          fileName: "app/routes/publication.tsx",
          lineNumber: 111,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/publication.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/publication.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/publication.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/publication.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6(footer_default, {}, void 0, !1, {
      fileName: "app/routes/publication.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/publication.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}, publication_default = Index2;

// app/routes/telescope.tsx
var telescope_exports = {};
__export(telescope_exports, {
  default: () => telescope_default
});
import { useState as useState4, useEffect as useEffect4 } from "react";

// app/routes/content/text.tsx
var mainText = "In recent times, wide-field imaging surveys focusing   on time-series observations have yielded remarkable insights into the   dynamic universe. However, these observations have been restricted to   broad-band imaging in a limited number of filters due to observational   constraints. Recognizing the wealth of information contained in time-series  spectra of astronomical objects, we aim to overcome this limitation.  Our solution involves the development of an innovative multiple telescope   system known as the 7-Dimensional Telescope (7DT). This advanced system   is designed to conduct wide-field integral-field-unit-type time-series   spectroscopy for millions of objects. The primary objective is to carry   out a comprehensive survey of the southern sky spanning an area of 10,000   square degrees, termed the 7-Dimensional Sky Survey (7DS).", overviewText = "The 7-Dimensional Telescope(7DT) is a multiple   telescope system for observing the Universe in an unprecedented way, which   is composed of twenty 0.5m wide-field telescopes. It is being constructed   in Chile, with a target completion date of 2023. \u201C7-Dimension\u201D in its name   represents the 7-dimensional space of the Universe that we will explore in   the x, y position (2D), the distance (2D), the radial velocity (1D), the   brightness of the objects (1D) in the sky to be measured along the wavelength   (1D) and the time (1D). Therefore, the 7DT will obtain the spectral movie of   the Universe for the first time. The 7DT is expected to make significant   contributions to the newly-born \u201Cmulti-messenger astronomy\u201D by identifying   the electromagnetic counterparts of the gravitational-wave sources. The 7DT   will perform a survey called the 7-Dimensional Sky Survey (7DS), which is   expected to tackle difficult problems in many fields of astronomy ranging   from cosmology. galaxy evolution, supermassive black holes, tidal disruption   of stars, solar system objects, supernovae and transients, and the star   formation in our galaxy.", locationText = "Lorem ipsum dolor sit amet, consectetuer   adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum   sociis natoque penatibus et magnis dis parturient montes, nascetur   ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,   pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,   fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus   ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis   pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.   Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat   vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,   feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque   rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper   ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget   condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque   sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.   Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero   venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus   tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales   sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,", surveyText = "Lorem ipsum dolor sit amet, consectetuer   adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum   sociis natoque penatibus et magnis dis parturient montes, nascetur   ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,   pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,   fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus   ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis   pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.   Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat   vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,   feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque   rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper   ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget   condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque   sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.   Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero   venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus   tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales   sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,";

// app/routes/telescope.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var Index3 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/7dt.jpg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [submenuTop, setSubmenuTop] = useState4("750px"), [smallWindow, setSmallWindow] = useState4(!0);
  return useEffect4(() => {
    let updateWindow = () => {
      window.innerWidth < 1500 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateWindow(), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []), useEffect4(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, windowHeight = window.innerHeight, newTop = `calc(750px - ${scrollPosition * 0.5 / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), /* @__PURE__ */ jsxDEV7("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsxDEV7(navigate_default, { manu: "manu7dt" }, void 0, !1, {
      fileName: "app/routes/telescope.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { style: backgroundImage, children: /* @__PURE__ */ jsxDEV7("div", { style: { height: "700px" } }, void 0, !1, {
      fileName: "app/routes/telescope.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/telescope.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    smallWindow ? /* @__PURE__ */ jsxDEV7("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxDEV7("ul", { children: [
      /* @__PURE__ */ jsxDEV7("li", { className: "p-2 active", children: /* @__PURE__ */ jsxDEV7("a", { href: "#", children: "Overview" }, void 0, !1, {
        fileName: "app/routes/telescope.tsx",
        lineNumber: 67,
        columnNumber: 38
      }, this) }, void 0, !1, {
        fileName: "app/routes/telescope.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("li", { className: "p-2", children: /* @__PURE__ */ jsxDEV7("a", { href: "/location", children: "Location" }, void 0, !1, {
        fileName: "app/routes/telescope.tsx",
        lineNumber: 68,
        columnNumber: 31
      }, this) }, void 0, !1, {
        fileName: "app/routes/telescope.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("li", { className: "p-2", children: /* @__PURE__ */ jsxDEV7("a", { href: "/specification", children: "Specification" }, void 0, !1, {
        fileName: "app/routes/telescope.tsx",
        lineNumber: 69,
        columnNumber: 31
      }, this) }, void 0, !1, {
        fileName: "app/routes/telescope.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/telescope.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/telescope.tsx",
      lineNumber: 65,
      columnNumber: 22
    }, this) : null,
    /* @__PURE__ */ jsxDEV7("div", { className: "mx-auto w-full", style: { maxWidth: "1440px", margin: "0 auto", padding: "50px 10vw 50px 10vw", background: "#fff", color: "#264256" }, children: /* @__PURE__ */ jsxDEV7("div", { className: "p-10 max-w-screen-lg mx-auto", children: [
      /* @__PURE__ */ jsxDEV7("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsxDEV7("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "The Next-Generation Telescope" }, void 0, !1, {
          fileName: "app/routes/telescope.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          "Overview of ",
          /* @__PURE__ */ jsxDEV7("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "7DT" }, void 0, !1, {
            fileName: "app/routes/telescope.tsx",
            lineNumber: 80,
            columnNumber: 27
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/telescope.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7("p", { className: "text-content", children: overviewText }, void 0, !1, {
          fileName: "app/routes/telescope.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/telescope.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { children: /* @__PURE__ */ jsxDEV7("img", { src: "/img/overview.png" }, void 0, !1, {
        fileName: "app/routes/telescope.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/telescope.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/telescope.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/telescope.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7(footer_default, {}, void 0, !1, {
      fileName: "app/routes/telescope.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/telescope.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}, telescope_default = Index3;

// app/routes/location.tsx
var location_exports = {};
__export(location_exports, {
  default: () => location_default
});
import { useState as useState5, useEffect as useEffect5 } from "react";
import { Carousel } from "react-bootstrap";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var Index4 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/location.jpg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [index, setIndex] = useState5(0), [submenuTop, setSubmenuTop] = useState5("750px"), [smallWindow, setSmallWindow] = useState5(!0);
  return useEffect5(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, windowHeight = window.innerHeight, newTop = `calc(750px - ${scrollPosition * 0.5 / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), useEffect5(() => {
    let updateWindow = () => {
      window.innerWidth < 1500 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateWindow(), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []), /* @__PURE__ */ jsxDEV8("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsxDEV8(navigate_default, { manu: "manu7dt" }, void 0, !1, {
      fileName: "app/routes/location.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    smallWindow ? /* @__PURE__ */ jsxDEV8("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxDEV8("ul", { children: [
      /* @__PURE__ */ jsxDEV8("li", { className: "p-2", children: /* @__PURE__ */ jsxDEV8("a", { href: "/telescope", children: "Overview" }, void 0, !1, {
        fileName: "app/routes/location.tsx",
        lineNumber: 71,
        columnNumber: 31
      }, this) }, void 0, !1, {
        fileName: "app/routes/location.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("li", { className: "p-2 active", children: /* @__PURE__ */ jsxDEV8("a", { href: "#", children: "Location" }, void 0, !1, {
        fileName: "app/routes/location.tsx",
        lineNumber: 72,
        columnNumber: 38
      }, this) }, void 0, !1, {
        fileName: "app/routes/location.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("li", { className: "p-2", children: /* @__PURE__ */ jsxDEV8("a", { href: "/specification", children: "Specification" }, void 0, !1, {
        fileName: "app/routes/location.tsx",
        lineNumber: 73,
        columnNumber: 31
      }, this) }, void 0, !1, {
        fileName: "app/routes/location.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/location.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/location.tsx",
      lineNumber: 69,
      columnNumber: 22
    }, this) : null,
    /* @__PURE__ */ jsxDEV8("div", { style: backgroundImage, children: /* @__PURE__ */ jsxDEV8("div", { style: { height: "700px" } }, void 0, !1, {
      fileName: "app/routes/location.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/location.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "mx-auto w-full", style: { maxWidth: "1440px", margin: "0 auto", padding: "50px 10vw 50px 10vw", background: "#fff", color: "#264256" }, children: /* @__PURE__ */ jsxDEV8("div", { className: "p-10 max-w-screen-lg mx-auto", children: [
      /* @__PURE__ */ jsxDEV8("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsxDEV8("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Build the Telescope" }, void 0, !1, {
          fileName: "app/routes/location.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          "7DT in ",
          /* @__PURE__ */ jsxDEV8("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Chile" }, void 0, !1, {
            fileName: "app/routes/location.tsx",
            lineNumber: 87,
            columnNumber: 22
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/location.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/location.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("p", { className: "text-content", children: locationText }, void 0, !1, {
        fileName: "app/routes/location.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/location.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/location.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8(Carousel, { activeIndex: index, onSelect: (selectedIndex, e) => {
      setIndex(selectedIndex);
    }, interval: 3e3, style: { zIndex: 100 }, children: ["c1.jpeg", "c2.jpg", "c3.png", "c4.png", "c5.jpg", "c6.jpg", "c7.png"].map((image, idx) => /* @__PURE__ */ jsxDEV8(Carousel.Item, { children: /* @__PURE__ */ jsxDEV8(
      "div",
      {
        className: "d-block w-100",
        style: {
          backgroundImage: `url(./img/carousel/${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "700px",
          overflow: "hidden"
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/location.tsx",
        lineNumber: 96,
        columnNumber: 13
      },
      this
    ) }, idx, !1, {
      fileName: "app/routes/location.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/location.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8(footer_default, {}, void 0, !1, {
      fileName: "app/routes/location.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/location.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}, location_default = Index4;

// app/routes/science.tsx
var science_exports = {};
__export(science_exports, {
  default: () => science_default
});
import { useState as useState6, useEffect as useEffect6 } from "react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var Index5 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/science.jpg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [submenuTop, setSubmenuTop] = useState6("750px"), [smallWindow, setSmallWindow] = useState6(!0);
  return useEffect6(() => {
    let updateWindow = () => {
      window.innerWidth < 1500 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateWindow(), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []), useEffect6(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, windowHeight = window.innerHeight, newTop = `calc(750px - ${scrollPosition * 0.5 / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), /* @__PURE__ */ jsxDEV9("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsxDEV9(navigate_default, { manu: "manuScience" }, void 0, !1, {
      fileName: "app/routes/science.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { style: backgroundImage, children: /* @__PURE__ */ jsxDEV9("div", { style: { height: "700px" } }, void 0, !1, {
      fileName: "app/routes/science.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/science.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    smallWindow ? /* @__PURE__ */ jsxDEV9("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxDEV9("ul", { children: [
      /* @__PURE__ */ jsxDEV9("li", { className: "p-2 active", children: /* @__PURE__ */ jsxDEV9("a", { href: "#", children: "Science" }, void 0, !1, {
        fileName: "app/routes/science.tsx",
        lineNumber: 70,
        columnNumber: 38
      }, this) }, void 0, !1, {
        fileName: "app/routes/science.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV9("li", { className: "p-2", children: /* @__PURE__ */ jsxDEV9("a", { href: "/publication", children: "Publications" }, void 0, !1, {
        fileName: "app/routes/science.tsx",
        lineNumber: 71,
        columnNumber: 31
      }, this) }, void 0, !1, {
        fileName: "app/routes/science.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/science.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/science.tsx",
      lineNumber: 68,
      columnNumber: 22
    }, this) : null,
    /* @__PURE__ */ jsxDEV9("div", { className: "mx-auto w-full", style: { maxWidth: "1440px", margin: "0 auto", padding: "50px 10vw 50px 10vw", background: "#fff", color: "#264256" }, children: /* @__PURE__ */ jsxDEV9("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsxDEV9("div", { className: "justify-between", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
      /* @__PURE__ */ jsxDEV9("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Science" }, void 0, !1, {
        fileName: "app/routes/science.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV9("h3", { className: "text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
        "Scientific ",
        /* @__PURE__ */ jsxDEV9("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Goals" }, void 0, !1, {
          fileName: "app/routes/science.tsx",
          lineNumber: 82,
          columnNumber: 26
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/science.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/science.tsx",
      lineNumber: 77,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/science.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/science.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9(footer_default, {}, void 0, !1, {
      fileName: "app/routes/science.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/science.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}, science_default = Index5;

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  meta: () => meta
});

// app/routes/main.tsx
var main_exports = {};
__export(main_exports, {
  default: () => main_default
});
import { useEffect as useEffect7, useState as useState7 } from "react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var MainPage = () => {
  let [mainSectionHeight, setMainSectionHeight] = useState7(900), [smallWindow, setSmallWindow] = useState7(!0);
  return useEffect7(() => {
    let updateHeight = () => {
      let newHeight = window.innerHeight - 0;
      setMainSectionHeight(newHeight);
    }, updateWindow = () => {
      window.innerWidth < 1200 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateHeight(), updateWindow(), window.addEventListener("resize", updateHeight), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateHeight), window.removeEventListener("resize", updateWindow);
    };
  }, []), /* @__PURE__ */ jsxDEV10("div", { children: [
    /* @__PURE__ */ jsxDEV10("div", { style: {
      backgroundSize: "cover",
      backgroundRepeat: "repeat",
      backgroundImage: 'url("./img/main.png")',
      backgroundAttachment: "fixed",
      backgroundPosition: "50% 0px"
    }, children: /* @__PURE__ */ jsxDEV10("div", { className: "w-full", style: { height: `${mainSectionHeight}px` }, children: /* @__PURE__ */ jsxDEV10("img", { src: "./img/title.png", style: { width: "max(1000px, 70%)", paddingTop: "120px", paddingLeft: "15%" }, alt: "7DT telescope" }, void 0, !1, {
      fileName: "app/routes/main.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/main.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/main.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "mx-auto w-full", style: { maxWidth: "1440px", margin: "0 auto", padding: "50px 10vw 50px 10vw", background: "#fff" }, children: [
      /* @__PURE__ */ jsxDEV10("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Welcome to" }, void 0, !1, {
        fileName: "app/routes/main.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-600)" }, children: "7-Dimensional Telescope" }, void 0, !1, {
        fileName: "app/routes/main.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: smallWindow ? "flex justify-between  items-center" : "text-center", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsxDEV10("div", { style: smallWindow ? { width: "50%", marginRight: "50px" } : {}, children: [
          /* @__PURE__ */ jsxDEV10("hr", { style: { border: "2px solid --pickled-bluewood-900", margin: "15px 0", opacity: 0.8 } }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 62,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV10("p", { className: "text-content", children: mainText }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 63,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV10("hr", { style: { border: "2px solid --pickled-bluewood-900", margin: "15px 0", opacity: 0.8 } }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/main.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { style: smallWindow ? { width: "500px", marginRight: "50px" } : { display: "flex", justifyContent: "space-between", width: "36vw" }, children: [
          /* @__PURE__ */ jsxDEV10("img", { src: "/img/main_sub1.jpg", className: "hover:scale-105 transition duration-1000", style: { boxShadow: "5px 5px 5px #000", margin: "2vw" } }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV10("img", { src: "/img/main_sub2.jpg", className: "hover:scale-105 transition duration-1000", style: { boxShadow: "5px 5px 5px #000", margin: "2vw" } }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 68,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/main.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/main.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/main.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { style: { backgroundColor: "#f9f9f9" }, children: /* @__PURE__ */ jsxDEV10("div", { className: "mx-auto w-full", style: { maxWidth: "1440px", margin: "0 auto", padding: "30px 10vw 0px 10vw" }, children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "justify-center mb-5", style: { maxWidth: "1200px", margin: "0 auto", color: "--pickled-bluewood-900" }, children: [
        /* @__PURE__ */ jsxDEV10("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Meet our" }, void 0, !1, {
          fileName: "app/routes/main.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          "Latest ",
          /* @__PURE__ */ jsxDEV10("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "News" }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 80,
            columnNumber: 22
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/main.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/main.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "flex flex-wrap items-center justify-center", style: { maxWidth: "1200px", margin: "0 auto", marginBottom: "5rem", textAlign: "center" }, children: news_default.news.map((news, index) => {
        if (index = index + 1, index <= 3)
          return /* @__PURE__ */ jsxDEV10("div", { className: `card card-${index}`, children: [
            /* @__PURE__ */ jsxDEV10("img", { src: `./img/news/${news.imgName}` }, void 0, !1, {
              fileName: "app/routes/main.tsx",
              lineNumber: 89,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV10("a", { href: news.webpage, target: "_blank", children: /* @__PURE__ */ jsxDEV10("div", { className: "card-img-hovered", style: { backgroundImage: `var(--card-img-hovered-overlay), url(./img/news/${news.imgName})` } }, void 0, !1, {
              fileName: "app/routes/main.tsx",
              lineNumber: 91,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/main.tsx",
              lineNumber: 90,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV10("div", { className: "card-info", children: [
              /* @__PURE__ */ jsxDEV10("div", { className: "card-about", children: [
                /* @__PURE__ */ jsxDEV10("a", { className: `card-tag ${news.type === "meeting" ? "tag-news" : news.type === "publication" ? "tag-publication" : news.type === "press" ? "tag-press" : null}`, children: news.type }, void 0, !1, {
                  fileName: "app/routes/main.tsx",
                  lineNumber: 95,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV10("div", { className: "card-time", children: news.date }, void 0, !1, {
                  fileName: "app/routes/main.tsx",
                  lineNumber: 96,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/main.tsx",
                lineNumber: 94,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV10("h1", { className: "card-title", children: news.title }, void 0, !1, {
                fileName: "app/routes/main.tsx",
                lineNumber: 98,
                columnNumber: 21
              }, this),
              news.type === "meeting" ? /* @__PURE__ */ jsxDEV10("div", { className: "card-creator", children: [
                "in ",
                /* @__PURE__ */ jsxDEV10("a", { href: "", children: news.place }, void 0, !1, {
                  fileName: "app/routes/main.tsx",
                  lineNumber: 100,
                  columnNumber: 56
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/main.tsx",
                lineNumber: 100,
                columnNumber: 23
              }, this) : news.type === "publication" ? /* @__PURE__ */ jsxDEV10("div", { className: "card-creator", children: [
                "by ",
                /* @__PURE__ */ jsxDEV10("a", { href: "", children: news.shortAuthor }, void 0, !1, {
                  fileName: "app/routes/main.tsx",
                  lineNumber: 102,
                  columnNumber: 56
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/main.tsx",
                lineNumber: 102,
                columnNumber: 23
              }, this) : /* @__PURE__ */ jsxDEV10("div", { className: "card-creator", children: [
                "by ",
                /* @__PURE__ */ jsxDEV10("a", { href: "", children: news.source }, void 0, !1, {
                  fileName: "app/routes/main.tsx",
                  lineNumber: 103,
                  columnNumber: 56
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/main.tsx",
                lineNumber: 103,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/main.tsx",
              lineNumber: 93,
              columnNumber: 19
            }, this)
          ] }, `card-${index}`, !0, {
            fileName: "app/routes/main.tsx",
            lineNumber: 88,
            columnNumber: 17
          }, this);
      }) }, void 0, !1, {
        fileName: "app/routes/main.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/main.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/main.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "mx-auto w-full", style: { maxWidth: "1440px", margin: "0 auto", padding: "0px 10vw 0px 10vw" }, children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "justify-between", style: { maxWidth: "1200px", margin: "0 auto" }, children: /* @__PURE__ */ jsxDEV10("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsxDEV10("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Additional details" }, void 0, !1, {
          fileName: "app/routes/main.tsx",
          lineNumber: 115,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          "More about ",
          /* @__PURE__ */ jsxDEV10("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "7DT" }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 119,
            columnNumber: 26
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/main.tsx",
          lineNumber: 118,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/main.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/main.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "flex items-center justify-center", style: { maxWidth: "1200px", margin: "0 auto", marginBottom: "5rem" }, children: /* @__PURE__ */ jsxDEV10("ul", { className: "tilesWrap", children: [
        /* @__PURE__ */ jsxDEV10("li", { children: [
          /* @__PURE__ */ jsxDEV10("h2", { children: "01" }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 127,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("h3", { children: "Team" }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 128,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("p", { children: "The 7DT team, hosted at Seoul National University, is making vigorous efforts to build and develop the next-generation telescope, 7DT." }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 129,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("button", { children: /* @__PURE__ */ jsxDEV10("a", { href: "/team", children: "Read more" }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 132,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 132,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/main.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("li", { children: [
          /* @__PURE__ */ jsxDEV10("h2", { children: "02" }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 135,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("h3", { children: "Design" }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("p", { children: "The 7DT consists of twenty 0.5m wide-field telescopes in Chile, enabling spectral mapping over a wide field of view." }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 137,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("button", { children: /* @__PURE__ */ jsxDEV10("a", { href: "/telescope", children: "Read more" }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 140,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 140,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/main.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("li", { children: [
          /* @__PURE__ */ jsxDEV10("h2", { children: "03" }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 143,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("h3", { children: "Survey program" }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 144,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("p", { children: "With wide-area and high-cadence survey, the 7 Dimensional Survey (7DS) will explore a deeper Universe" }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 145,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("button", { children: /* @__PURE__ */ jsxDEV10("a", { href: "/survey", children: "Read more" }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 148,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 148,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/main.tsx",
          lineNumber: 142,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("li", { children: [
          /* @__PURE__ */ jsxDEV10("h2", { children: "04" }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 151,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("h3", { children: "Science" }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 152,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("p", { children: "The core of 7DT science includes the new-born multi-messenger astronomy and the seamless survy study." }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("button", { children: "Read more" }, void 0, !1, {
            fileName: "app/routes/main.tsx",
            lineNumber: 156,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/main.tsx",
          lineNumber: 150,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/main.tsx",
        lineNumber: 125,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/main.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/main.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/main.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}, main_default = MainPage;

// app/routes/_index.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "7-dimensional telescope" },
  { name: "description", content: "7-dimensional telescope" }
], Index6 = () => /* @__PURE__ */ jsxDEV11("div", { style: { background: "#fff" }, children: [
  /* @__PURE__ */ jsxDEV11(navigate_default, { manu: "manuHome" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV11(main_default, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV11(footer_default, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/_index.tsx",
  lineNumber: 17,
  columnNumber: 5
}, this), index_default = Index6;

// app/routes/groups.tsx
var groups_exports = {};
__export(groups_exports, {
  default: () => groups_default
});
import { useState as useState8, useEffect as useEffect8 } from "react";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var Index7 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/group.jpg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [submenuTop, setSubmenuTop] = useState8("200px"), [smallWindow, setSmallWindow] = useState8(!0);
  return useEffect8(() => {
    let updateWindow = () => {
      window.innerWidth < 1500 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateWindow(), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []), useEffect8(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, windowHeight = window.innerHeight, newTop = `calc(200px - ${scrollPosition * -0.1 / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), /* @__PURE__ */ jsxDEV12("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsxDEV12(navigate_default, { manu: "manuAbout", fixed: !0 }, void 0, !1, {
      fileName: "app/routes/groups.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    smallWindow ? /* @__PURE__ */ jsxDEV12("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxDEV12("ul", { children: [
      /* @__PURE__ */ jsxDEV12("li", { className: "p-2", children: /* @__PURE__ */ jsxDEV12("a", { href: "/team", children: "Team" }, void 0, !1, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 61,
        columnNumber: 31
      }, this) }, void 0, !1, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV12("li", { className: "p-2 active", children: /* @__PURE__ */ jsxDEV12("a", { href: "#", children: "Working Groups" }, void 0, !1, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 62,
        columnNumber: 38
      }, this) }, void 0, !1, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/groups.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/groups.tsx",
      lineNumber: 59,
      columnNumber: 22
    }, this) : null,
    /* @__PURE__ */ jsxDEV12("div", { className: "mx-auto w-full", style: { maxWidth: "1440px", margin: "0 auto", padding: "50px 10vw 50px 10vw", background: "#fff", color: "#264256" }, children: [
      /* @__PURE__ */ jsxDEV12("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsxDEV12("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsxDEV12("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Explore a Deeper Universe" }, void 0, !1, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV12("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          /* @__PURE__ */ jsxDEV12("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Survey" }, void 0, !1, {
            fileName: "app/routes/groups.tsx",
            lineNumber: 73,
            columnNumber: 15
          }, this),
          " Group"
        ] }, void 0, !0, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsxDEV12("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsxDEV12("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Follow-up Multimessengers" }, void 0, !1, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV12("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          /* @__PURE__ */ jsxDEV12("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Transient" }, void 0, !1, {
            fileName: "app/routes/groups.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, this),
          " Group"
        ] }, void 0, !0, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsxDEV12("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsxDEV12("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Shed Light on the Origin of Universe" }, void 0, !1, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV12("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          /* @__PURE__ */ jsxDEV12("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Cosmology" }, void 0, !1, {
            fileName: "app/routes/groups.tsx",
            lineNumber: 95,
            columnNumber: 15
          }, this),
          " Group"
        ] }, void 0, !0, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsxDEV12("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsxDEV12("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Study with the State-Of-Art technique" }, void 0, !1, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV12("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          /* @__PURE__ */ jsxDEV12("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Machine Learning" }, void 0, !1, {
            fileName: "app/routes/groups.tsx",
            lineNumber: 106,
            columnNumber: 15
          }, this),
          " Group"
        ] }, void 0, !0, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 105,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/groups.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12(footer_default, {}, void 0, !1, {
      fileName: "app/routes/groups.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/groups.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}, groups_default = Index7;

// app/routes/status.tsx
var status_exports = {};
__export(status_exports, {
  default: () => status_default
});
import { useState as useState9, useEffect as useEffect9 } from "react";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var Index8 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/status.png")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% -100px"
  }, [submenuTop, setSubmenuTop] = useState9("750px"), [smallWindow, setSmallWindow] = useState9(!0);
  return useEffect9(() => {
    let updateWindow = () => {
      window.innerWidth < 1500 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateWindow(), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []), useEffect9(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, windowHeight = window.innerHeight, newTop = `calc(750px - ${scrollPosition * 0.5 / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), /* @__PURE__ */ jsxDEV13("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsxDEV13(navigate_default, { manu: "manu7ds" }, void 0, !1, {
      fileName: "app/routes/status.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("div", { style: backgroundImage, children: /* @__PURE__ */ jsxDEV13("div", { style: { height: "700px" } }, void 0, !1, {
      fileName: "app/routes/status.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/status.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    smallWindow ? /* @__PURE__ */ jsxDEV13("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxDEV13("ul", { children: [
      /* @__PURE__ */ jsxDEV13("li", { className: "p-2", children: /* @__PURE__ */ jsxDEV13("a", { href: "/survey", children: "Survey" }, void 0, !1, {
        fileName: "app/routes/status.tsx",
        lineNumber: 70,
        columnNumber: 31
      }, this) }, void 0, !1, {
        fileName: "app/routes/status.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13("li", { className: "p-2 active", children: /* @__PURE__ */ jsxDEV13("a", { href: "#", children: "Status" }, void 0, !1, {
        fileName: "app/routes/status.tsx",
        lineNumber: 71,
        columnNumber: 38
      }, this) }, void 0, !1, {
        fileName: "app/routes/status.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13("li", { className: "p-2", children: /* @__PURE__ */ jsxDEV13("a", { href: "/data", children: "Data" }, void 0, !1, {
        fileName: "app/routes/status.tsx",
        lineNumber: 72,
        columnNumber: 31
      }, this) }, void 0, !1, {
        fileName: "app/routes/status.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/status.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/status.tsx",
      lineNumber: 68,
      columnNumber: 22
    }, this) : null,
    /* @__PURE__ */ jsxDEV13("div", { className: "mx-auto w-full", style: { maxWidth: "1440px", margin: "0 auto", padding: "50px 10vw 50px 10vw", background: "#fff", color: "#264256" }, children: /* @__PURE__ */ jsxDEV13("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsxDEV13("div", { className: "justify-between", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
      /* @__PURE__ */ jsxDEV13("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Observational Conditions" }, void 0, !1, {
        fileName: "app/routes/status.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV13("h3", { className: "text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
        "7DT ",
        /* @__PURE__ */ jsxDEV13("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Status" }, void 0, !1, {
          fileName: "app/routes/status.tsx",
          lineNumber: 83,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/status.tsx",
        lineNumber: 82,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/status.tsx",
      lineNumber: 78,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/status.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/status.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13(footer_default, {}, void 0, !1, {
      fileName: "app/routes/status.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/status.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}, status_default = Index8;

// app/routes/survey.tsx
var survey_exports = {};
__export(survey_exports, {
  default: () => survey_default
});
import { useState as useState10, useEffect as useEffect10 } from "react";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var Index9 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/survey.jpeg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [submenuTop, setSubmenuTop] = useState10("750px"), [smallWindow, setSmallWindow] = useState10(!0);
  return useEffect10(() => {
    let updateWindow = () => {
      window.innerWidth < 1500 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateWindow(), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []), useEffect10(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, windowHeight = window.innerHeight, newTop = `calc(750px - ${scrollPosition * 0.5 / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), /* @__PURE__ */ jsxDEV14("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsxDEV14(navigate_default, { manu: "manu7ds" }, void 0, !1, {
      fileName: "app/routes/survey.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { style: backgroundImage, children: /* @__PURE__ */ jsxDEV14("div", { style: { height: "700px" } }, void 0, !1, {
      fileName: "app/routes/survey.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/survey.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    smallWindow && /* @__PURE__ */ jsxDEV14("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxDEV14("ul", { children: [
      /* @__PURE__ */ jsxDEV14("li", { className: "p-2 active", children: /* @__PURE__ */ jsxDEV14("a", { href: "#", children: "Survey" }, void 0, !1, {
        fileName: "app/routes/survey.tsx",
        lineNumber: 62,
        columnNumber: 40
      }, this) }, void 0, !1, {
        fileName: "app/routes/survey.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV14("li", { className: "p-2", children: /* @__PURE__ */ jsxDEV14("a", { href: "/status", children: "Status" }, void 0, !1, {
        fileName: "app/routes/survey.tsx",
        lineNumber: 63,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/survey.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV14("li", { className: "p-2", children: /* @__PURE__ */ jsxDEV14("a", { href: "/data", children: "Data" }, void 0, !1, {
        fileName: "app/routes/survey.tsx",
        lineNumber: 64,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/survey.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/survey.tsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/survey.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "mx-auto w-full", style: { maxWidth: "1440px", margin: "0 auto", padding: "50px 10vw 50px 10vw", background: "#fff", color: "#264256" }, children: /* @__PURE__ */ jsxDEV14("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsxDEV14("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
      /* @__PURE__ */ jsxDEV14("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Wide-area and High-cadence Survey" }, void 0, !1, {
        fileName: "app/routes/survey.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV14("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
        "Overview of ",
        /* @__PURE__ */ jsxDEV14("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "7DS" }, void 0, !1, {
          fileName: "app/routes/survey.tsx",
          lineNumber: 76,
          columnNumber: 27
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/survey.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV14("p", { className: "text-content", children: surveyText }, void 0, !1, {
        fileName: "app/routes/survey.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/survey.tsx",
      lineNumber: 71,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/survey.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/survey.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14(footer_default, {}, void 0, !1, {
      fileName: "app/routes/survey.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/survey.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}, survey_default = Index9;

// app/routes/data.tsx
var data_exports = {};
__export(data_exports, {
  default: () => data_default2
});
import { useState as useState11, useEffect as useEffect12 } from "react";
import { Table } from "flowbite-react";
import { Pagination as Pagination2 } from "flowbite-react";

// app/routes/plot.tsx
var plot_exports = {};
__export(plot_exports, {
  default: () => plot_default
});
import { useRef, useEffect as useEffect11 } from "react";
import * as d3 from "d3";
import { geoAitoff } from "d3-geo-projection";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var ScatterGeoPlot = ({ data, width, height }) => {
  let svgRef = useRef();
  return useEffect11(() => {
    let svg = d3.select(svgRef.current), projection = geoAitoff().scale(100).translate([width / 2, height / 2]), graticule = d3.geoGraticule();
    svg.append("path").datum(graticule).attr("class", "graticule").attr("d", d3.geoPath().projection(projection)).attr("fill", "none").attr("stroke", "#ccc").attr("stroke-width", 0.5).attr("stroke-opacity", 0.5);
    let circles = svg.selectAll("circle").data(data.filter((d) => typeof d.ra == "number" && typeof d.dec == "number")).enter().append("circle").attr("cx", (d) => projection([parseFloat(d.ra), parseFloat(d.dec)])[0]).attr("cy", (d) => projection([parseFloat(d.ra), parseFloat(d.dec)])[1]).attr("r", 5).attr("fill", "blue").attr("stroke", "black").attr("stroke-width", 1), tooltip = d3.select(svgRef.current.parentNode).append("div").style("position", "absolute").style("background-color", "white").style("border", "1px solid black").style("padding", "5px").style("visibility", "hidden");
    return circles.on("mouseover", (event, d) => {
      tooltip.html(`
        <strong>Name:</strong> ${d.name}<br>
        <strong>Exposure:</strong> ${d.exposure}<br>
        <strong>Sigma:</strong> ${d.sigma}
      `).style`
          visibility: visible;
          left: ${event.pageX + 10}px;
          top: ${event.pageY - 30}px;
        `;
    }), circles.on("mouseout", () => {
      tooltip.style`
        visibility: hidden;
      `;
    }), () => {
      tooltip.remove();
    };
  }, [data, height, width]), /* @__PURE__ */ jsxDEV15("svg", { ref: svgRef, width, height }, void 0, !1, {
    fileName: "app/routes/plot.tsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
}, plot_default = ScatterGeoPlot;

// app/routes/content/data.json
var data_default = [
  {
    name: "Crab Nebula",
    ra: 83.633208,
    dec: 22.014472,
    exposure: 0.333,
    sigma: 7.8,
    ref: !1
  },
  {
    name: "Andromeda Galaxy",
    ra: 10.685542,
    dec: 41.269278,
    exposure: 0.5,
    sigma: 6.5,
    ref: !1
  },
  {
    name: "Orion Nebula",
    ra: 83.82208,
    dec: -5.391111,
    exposure: 0.25,
    sigma: 8.2,
    ref: !1
  },
  {
    name: "Whirlpool Galaxy",
    ra: 197.470375,
    dec: 47.195278,
    exposure: 0.41666667,
    sigma: 6.9,
    ref: !1
  },
  {
    name: "Pleiades Cluster",
    ra: 56.85,
    dec: 24.116667,
    exposure: 0.16666667,
    sigma: 9.1,
    ref: !1
  },
  {
    name: "Eagle Nebula",
    ra: 274.8,
    dec: -13.783333,
    exposure: 0.27777778,
    sigma: 7.3,
    ref: !1
  },
  {
    name: "Horsehead Nebula",
    ra: 85.246875,
    dec: -2.458333,
    exposure: 0.22222222,
    sigma: 8.5,
    ref: !1
  },
  {
    name: "Ring Nebula",
    ra: 283.39775,
    dec: 33.029167,
    exposure: 0.30555556,
    sigma: 7.2,
    ref: !1
  },
  {
    name: "Sombrero Galaxy",
    ra: 185.728708,
    dec: -11.629167,
    exposure: 0.36111111,
    sigma: 6.7,
    ref: !1
  },
  {
    name: "Lagoon Nebula",
    ra: 271.57125,
    dec: -24.386667,
    exposure: 0.26388889,
    sigma: 8,
    ref: !1
  },
  {
    name: "Helix Nebula",
    ra: 337.410375,
    dec: -20.836667,
    exposure: 0.23611111,
    sigma: 8.7,
    ref: !1
  },
  {
    name: "Antennae Galaxies",
    ra: 180.471167,
    dec: -18.869528,
    exposure: 0.47222222,
    sigma: 7.1,
    ref: !1
  },
  {
    name: "Boomerang Nebula",
    ra: 191.20625,
    dec: -54.517222,
    exposure: 0.33333333,
    sigma: 9.3,
    ref: !1
  },
  {
    name: "Omega Nebula",
    ra: 271.57125,
    dec: -24.386667,
    exposure: 0.26388889,
    sigma: 8,
    ref: !1
  },
  {
    name: "Tarantula Nebula",
    ra: 89.658675,
    dec: -69.085,
    exposure: 0.38888889,
    sigma: 7.4,
    ref: !1
  },
  {
    name: "Cat's Eye Nebula",
    ra: 137.389583,
    dec: 13.226667,
    exposure: 0.27777778,
    sigma: 8.4,
    ref: !1
  },
  {
    name: "Veil Nebula",
    ra: 311.40925,
    dec: 30.721389,
    exposure: 0.23611111,
    sigma: 7.6,
    ref: !1
  },
  {
    name: "North America Nebula",
    ra: 344.48875,
    dec: 44.51,
    exposure: 0.26388889,
    sigma: 7.9,
    ref: !1
  },
  {
    name: "Trifid Nebula",
    ra: 270.59125,
    dec: -23.03,
    exposure: 0.33333333,
    sigma: 7,
    ref: !1
  },
  {
    name: "Andromeda Galaxy",
    ra: 10.685542,
    dec: 41.269278,
    exposure: 0.5,
    sigma: 6.5,
    ref: !1
  }
];

// app/routes/data.tsx
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var Index10 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/data.jpg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [submenuTop, setSubmenuTop] = useState11("200px"), [smallWindow, setSmallWindow] = useState11(!0);
  useEffect12(() => {
    let updateWindow = () => {
      window.innerWidth < 1500 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateWindow(), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []), useEffect12(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, windowHeight = window.innerHeight, newTop = `calc(200px - ${scrollPosition * -0.1 / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let [currentPage, setCurrentPage] = useState11(1), rowsPerPage = 10, totalRows = data_default.length, totalPages = Math.ceil(totalRows / rowsPerPage), onPageChange = (page) => {
    setCurrentPage(page);
  }, paginatedData = data_default.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  return /* @__PURE__ */ jsxDEV16("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsxDEV16(navigate_default, { manu: "manu7ds", fixed: !0 }, void 0, !1, {
      fileName: "app/routes/data.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    smallWindow ? /* @__PURE__ */ jsxDEV16("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxDEV16("ul", { children: [
      /* @__PURE__ */ jsxDEV16("li", { className: "p-2", children: /* @__PURE__ */ jsxDEV16("a", { href: "/science", children: "Science" }, void 0, !1, {
        fileName: "app/routes/data.tsx",
        lineNumber: 84,
        columnNumber: 31
      }, this) }, void 0, !1, {
        fileName: "app/routes/data.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV16("li", { className: "p-2 active", children: /* @__PURE__ */ jsxDEV16("a", { href: "#", children: "Data" }, void 0, !1, {
        fileName: "app/routes/data.tsx",
        lineNumber: 85,
        columnNumber: 38
      }, this) }, void 0, !1, {
        fileName: "app/routes/data.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/data.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/data.tsx",
      lineNumber: 82,
      columnNumber: 22
    }, this) : null,
    /* @__PURE__ */ jsxDEV16("div", { className: "mx-auto w-full", style: { maxWidth: "1440px", margin: "0 auto", padding: "50px 10vw 50px 10vw", background: "#fff", color: "#264256" }, children: /* @__PURE__ */ jsxDEV16("div", { className: "p-10 max-w-screen-lg mx-auto", children: [
      /* @__PURE__ */ jsxDEV16("div", { className: "justify-between", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsxDEV16("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Invaluable Observations" }, void 0, !1, {
          fileName: "app/routes/data.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV16("h3", { className: "text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          /* @__PURE__ */ jsxDEV16("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Data" }, void 0, !1, {
            fileName: "app/routes/data.tsx",
            lineNumber: 96,
            columnNumber: 15
          }, this),
          " Archive"
        ] }, void 0, !0, {
          fileName: "app/routes/data.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/data.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "flex w-full justify-center", children: /* @__PURE__ */ jsxDEV16(plot_default, { data: data_default, height: "400", width: "800" }, void 0, !1, {
        fileName: "app/routes/data.tsx",
        lineNumber: 100,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/data.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV16(Table, { striped: !0, children: [
        /* @__PURE__ */ jsxDEV16(Table.Head, { children: [
          /* @__PURE__ */ jsxDEV16(Table.HeadCell, { children: "Target" }, void 0, !1, {
            fileName: "app/routes/data.tsx",
            lineNumber: 105,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV16(Table.HeadCell, { children: "R.A." }, void 0, !1, {
            fileName: "app/routes/data.tsx",
            lineNumber: 106,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV16(Table.HeadCell, { children: "Dec." }, void 0, !1, {
            fileName: "app/routes/data.tsx",
            lineNumber: 107,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV16(Table.HeadCell, { children: "Exposure" }, void 0, !1, {
            fileName: "app/routes/data.tsx",
            lineNumber: 108,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV16(Table.HeadCell, { children: "Significance" }, void 0, !1, {
            fileName: "app/routes/data.tsx",
            lineNumber: 109,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV16(Table.HeadCell, { children: "Details" }, void 0, !1, {
            fileName: "app/routes/data.tsx",
            lineNumber: 110,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/data.tsx",
          lineNumber: 104,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV16(Table.Body, { className: "divide-y", children: paginatedData.map((d, index) => /* @__PURE__ */ jsxDEV16(Table.Row, { className: "bg-white dark:border-gray-700 dark:bg-gray-800", children: [
          /* @__PURE__ */ jsxDEV16(Table.Cell, { className: "whitespace-nowrap font-medium text-gray-900 dark:text-white", children: d.name }, void 0, !1, {
            fileName: "app/routes/data.tsx",
            lineNumber: 116,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV16(Table.Cell, { children: d.ra }, void 0, !1, {
            fileName: "app/routes/data.tsx",
            lineNumber: 119,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV16(Table.Cell, { children: d.dec }, void 0, !1, {
            fileName: "app/routes/data.tsx",
            lineNumber: 120,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV16(Table.Cell, { children: d.exposure }, void 0, !1, {
            fileName: "app/routes/data.tsx",
            lineNumber: 121,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV16(Table.Cell, { children: d.sigma }, void 0, !1, {
            fileName: "app/routes/data.tsx",
            lineNumber: 122,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV16(Table.Cell, { children: d.ref === !1 ? /* @__PURE__ */ jsxDEV16("a", { href: "mailto:mim@astro.snu.ac.kr", className: "font-medium text-cyan-600 hover:underline dark:text-cyan-500", children: "Contact" }, void 0, !1, {
            fileName: "app/routes/data.tsx",
            lineNumber: 125,
            columnNumber: 25
          }, this) : /* @__PURE__ */ jsxDEV16("a", { href: d.ref, className: "font-medium text-cyan-600 hover:underline dark:text-cyan-500", children: "Link" }, void 0, !1, {
            fileName: "app/routes/data.tsx",
            lineNumber: 128,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/data.tsx",
            lineNumber: 123,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/data.tsx",
          lineNumber: 115,
          columnNumber: 19
        }, this)) }, void 0, !1, {
          fileName: "app/routes/data.tsx",
          lineNumber: 112,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/data.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsxDEV16(Pagination2, { currentPage, totalPages, onPageChange }, void 0, !1, {
        fileName: "app/routes/data.tsx",
        lineNumber: 139,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/data.tsx",
        lineNumber: 138,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/data.tsx",
      lineNumber: 90,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/data.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16(footer_default, {}, void 0, !1, {
      fileName: "app/routes/data.tsx",
      lineNumber: 143,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/data.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}, data_default2 = Index10;

// app/routes/news.tsx
var news_exports = {};
__export(news_exports, {
  default: () => news_default2
});
import { useState as useState12 } from "react";
import { Pagination as Pagination3 } from "flowbite-react";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var Index11 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/news.png")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [currentPage, setCurrentPage] = useState12(1), [selectedTypes, setSelectedTypes] = useState12(["press", "publication", "meeting", "update"]), newsPerPage = 3, toggleType = (type) => {
    selectedTypes.includes(type) ? setSelectedTypes(selectedTypes.filter((t) => t !== type)) : setSelectedTypes([...selectedTypes, type]);
  }, filteredNews = selectedTypes.length > 0 ? news_default.news.filter((item) => selectedTypes.includes(item.type)) : news_default.news, totalPages = Math.ceil(filteredNews.length / newsPerPage), indexOfLastNews = currentPage * newsPerPage, indexOfFirstNews = indexOfLastNews - newsPerPage, currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews), onPageChange = (page) => setCurrentPage(page);
  return /* @__PURE__ */ jsxDEV17("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsxDEV17(navigate_default, { manu: "manuNews", fixed: !0 }, void 0, !1, {
      fileName: "app/routes/news.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17("div", { className: "mx-auto w-full", style: { maxWidth: "1440px", margin: "0 auto", padding: "50px 10vw 50px 10vw", background: "#fff", color: "#264256" }, children: /* @__PURE__ */ jsxDEV17("div", { className: "p-10 max-w-screen-lg mx-auto", children: [
      /* @__PURE__ */ jsxDEV17("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsxDEV17("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "A Bunch of Intriguing Updates" }, void 0, !1, {
          fileName: "app/routes/news.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV17("h3", { className: "text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          "Latest ",
          /* @__PURE__ */ jsxDEV17("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "News" }, void 0, !1, {
            fileName: "app/routes/news.tsx",
            lineNumber: 52,
            columnNumber: 22
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/news.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/news.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV17("div", { className: "flex justify-center mr-7 ml-7", children: /* @__PURE__ */ jsxDEV17("ul", { className: "items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex ", children: ["press", "publication", "meeting", "update"].map((type, index) => /* @__PURE__ */ jsxDEV17("li", { className: "w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600", children: /* @__PURE__ */ jsxDEV17("div", { className: "flex items-center ps-3", children: [
        /* @__PURE__ */ jsxDEV17("input", { id: `${type}-checkbox-list`, type: "checkbox", value: "1", className: `w-4 h-4 text-${type}-color bg-gray-100 border-gray-300 rounded focus:ring-blue-500`, checked: selectedTypes.includes(type), onChange: () => toggleType(type) }, void 0, !1, {
          fileName: "app/routes/news.tsx",
          lineNumber: 60,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV17("label", { htmlFor: `${type}-checkbox-list`, className: "w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300", style: { textTransform: "uppercase" }, children: type }, void 0, !1, {
          fileName: "app/routes/news.tsx",
          lineNumber: 61,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/news.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this) }, index, !1, {
        fileName: "app/routes/news.tsx",
        lineNumber: 58,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/news.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/news.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV17("div", { className: "flex flex-wrap items-center justify-center", style: { maxWidth: "1200px", margin: "0 auto", marginBottom: "5rem", textAlign: "center" }, children: [
        currentNews.map((news, index) => (index = index + 1, /* @__PURE__ */ jsxDEV17("div", { className: `news news-${index}`, children: /* @__PURE__ */ jsxDEV17("div", { className: "news-content", children: [
          /* @__PURE__ */ jsxDEV17("div", { className: "news-img-container", children: [
            /* @__PURE__ */ jsxDEV17("img", { src: `./img/news/${news.imgName}`, alt: "News Image" }, void 0, !1, {
              fileName: "app/routes/news.tsx",
              lineNumber: 75,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV17("a", { href: "", className: "news-img-hovered", style: { backgroundImage: `var(--news-img-hovered-overlay), url(./img/news/${news.imgName})` } }, void 0, !1, {
              fileName: "app/routes/news.tsx",
              lineNumber: 76,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/news.tsx",
            lineNumber: 74,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { className: "news-info", children: [
            /* @__PURE__ */ jsxDEV17("div", { className: "news-about", children: [
              /* @__PURE__ */ jsxDEV17("a", { className: `news-tag ${news.type === "meeting" ? "tag-news" : news.type === "publication" ? "tag-publication" : news.type === "press" ? "tag-press" : null}`, children: news.type }, void 0, !1, {
                fileName: "app/routes/news.tsx",
                lineNumber: 80,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV17("div", { className: "news-time", children: news.date }, void 0, !1, {
                fileName: "app/routes/news.tsx",
                lineNumber: 81,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/news.tsx",
              lineNumber: 79,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV17("h1", { className: "news-title", children: news.title }, void 0, !1, {
              fileName: "app/routes/news.tsx",
              lineNumber: 83,
              columnNumber: 23
            }, this),
            news.type === "meeting" ? /* @__PURE__ */ jsxDEV17("div", { className: "news-creator", children: [
              "in ",
              /* @__PURE__ */ jsxDEV17("a", { href: "", children: news.place }, void 0, !1, {
                fileName: "app/routes/news.tsx",
                lineNumber: 85,
                columnNumber: 58
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/news.tsx",
              lineNumber: 85,
              columnNumber: 25
            }, this) : news.type === "publication" ? /* @__PURE__ */ jsxDEV17("div", { className: "news-creator", children: [
              "by ",
              /* @__PURE__ */ jsxDEV17("a", { href: "", children: news.shortAuthor }, void 0, !1, {
                fileName: "app/routes/news.tsx",
                lineNumber: 87,
                columnNumber: 58
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/news.tsx",
              lineNumber: 87,
              columnNumber: 25
            }, this) : /* @__PURE__ */ jsxDEV17("div", { className: "news-creator", children: [
              "by ",
              /* @__PURE__ */ jsxDEV17("a", { href: "", children: news.source }, void 0, !1, {
                fileName: "app/routes/news.tsx",
                lineNumber: 88,
                columnNumber: 58
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/news.tsx",
              lineNumber: 88,
              columnNumber: 25
            }, this),
            news.webpage ? /* @__PURE__ */ jsxDEV17("a", { href: news.webpage, className: "details-button", target: "_blank", children: "Details \u25B6" }, void 0, !1, {
              fileName: "app/routes/news.tsx",
              lineNumber: 90,
              columnNumber: 39
            }, this) : null
          ] }, void 0, !0, {
            fileName: "app/routes/news.tsx",
            lineNumber: 78,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/news.tsx",
          lineNumber: 73,
          columnNumber: 19
        }, this) }, `news-${index}`, !1, {
          fileName: "app/routes/news.tsx",
          lineNumber: 72,
          columnNumber: 17
        }, this))),
        /* @__PURE__ */ jsxDEV17("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsxDEV17(Pagination3, { currentPage, totalPages, onPageChange }, void 0, !1, {
          fileName: "app/routes/news.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/news.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/news.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/news.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/news.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17(footer_default, {}, void 0, !1, {
      fileName: "app/routes/news.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/news.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}, news_default2 = Index11;

// app/routes/team.tsx
var team_exports = {};
__export(team_exports, {
  default: () => team_default2
});
import { useState as useState13, useEffect as useEffect14 } from "react";

// app/routes/content/team.json
var team_default = {
  members: [
    {
      name: "Prof. Hyung Mok Lee",
      title: "Principal Investigator",
      major: "Stellar Dynamics, Galaxy Evolution, Gravitational Wave Astronomy",
      affiliation: "Seoul National University",
      email: "hmlee@snu.ac.kr",
      webpage: "https://sites.google.com/view/hyung-mok-lee/",
      imgName: "LeeHM.jpeg"
    },
    {
      name: "Prof. Myungshin Im",
      title: "Co-Principal Investigator",
      major: "Galaxy Evolution, Observational Cosmology",
      affiliation: "Seoul National University",
      email: "mim@astro.snu.ac.kr",
      webpage: "http://astro.snu.ac.kr/~mim",
      imgName: "ImMS.jpeg"
    },
    {
      name: "Dr. Donggeun Tak",
      title: "Research Associate",
      major: "Multiwavelength / multimessenger science, transient astrophysics",
      affiliation: "Seoul National University",
      email: "donggeun.tak@gmail.com",
      orcid: "https://orcid.org/0000-0002-9852-2469",
      imgName: "TakDG.jpeg"
    }
  ]
};

// app/routes/team.tsx
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var Index12 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/team.jpeg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [submenuTop, setSubmenuTop] = useState13("750px"), [smallWindow, setSmallWindow] = useState13(!0);
  return useEffect14(() => {
    let updateWindow = () => {
      window.innerWidth < 1500 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateWindow(), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []), useEffect14(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, windowHeight = window.innerHeight, newTop = `calc(750px - ${scrollPosition * 0.3 / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), /* @__PURE__ */ jsxDEV18("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsxDEV18(navigate_default, { manu: "manuAbout" }, void 0, !1, {
      fileName: "app/routes/team.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { style: backgroundImage, children: /* @__PURE__ */ jsxDEV18("div", { style: { height: "700px" } }, void 0, !1, {
      fileName: "app/routes/team.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/team.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    smallWindow ? /* @__PURE__ */ jsxDEV18("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxDEV18("ul", { children: [
      /* @__PURE__ */ jsxDEV18("li", { className: "p-2 active", children: /* @__PURE__ */ jsxDEV18("a", { href: "#", children: "Team" }, void 0, !1, {
        fileName: "app/routes/team.tsx",
        lineNumber: 66,
        columnNumber: 38
      }, this) }, void 0, !1, {
        fileName: "app/routes/team.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV18("li", { className: "p-2", children: /* @__PURE__ */ jsxDEV18("a", { href: "/groups", children: "Working Groups" }, void 0, !1, {
        fileName: "app/routes/team.tsx",
        lineNumber: 67,
        columnNumber: 31
      }, this) }, void 0, !1, {
        fileName: "app/routes/team.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/team.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/team.tsx",
      lineNumber: 64,
      columnNumber: 22
    }, this) : null,
    /* @__PURE__ */ jsxDEV18("div", { className: "mx-auto w-full", style: { maxWidth: "1440px", margin: "0 auto", padding: "50px 10vw 50px 10vw", background: "#fff", color: "#264256" }, children: /* @__PURE__ */ jsxDEV18("div", { className: "p-10 max-w-screen-lg mx-auto", children: [
      /* @__PURE__ */ jsxDEV18("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsxDEV18("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Introducing" }, void 0, !1, {
          fileName: "app/routes/team.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          "Our ",
          /* @__PURE__ */ jsxDEV18("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Team" }, void 0, !1, {
            fileName: "app/routes/team.tsx",
            lineNumber: 79,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/team.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/team.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "sm:grid grid-cols-2 gap-6 my-10", children: team_default.members.map((member, index) => /* @__PURE__ */ jsxDEV18("div", { className: "max-w-sm w-full lg:max-w-full lg:flex mx-auto my-10", children: [
        /* @__PURE__ */ jsxDEV18(
          "div",
          {
            className: "h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden",
            style: { backgroundImage: `url(./img/team/${member.imgName})`, backgroundPosition: "center" }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/team.tsx",
            lineNumber: 86,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV18("div", { className: "border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4", children: /* @__PURE__ */ jsxDEV18("div", { children: [
          /* @__PURE__ */ jsxDEV18(
            "a",
            {
              href: "mailto:" + member.email,
              className: "text-gray-900 font-bold text-xl mb-2 hover:text-bluewood-600 transition duration-500 ease-in-out",
              children: member.name
            },
            void 0,
            !1,
            {
              fileName: "app/routes/team.tsx",
              lineNumber: 91,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ jsxDEV18("p", { className: "text-sm text-gray-600", children: member.title }, void 0, !1, {
            fileName: "app/routes/team.tsx",
            lineNumber: 94,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV18("p", { className: "text-gray-900 font-bold text-base mt-4", children: "Major" }, void 0, !1, {
            fileName: "app/routes/team.tsx",
            lineNumber: 97,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV18("p", { className: "text-sm text-gray-600", children: member.major }, void 0, !1, {
            fileName: "app/routes/team.tsx",
            lineNumber: 100,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV18("p", { className: "text-gray-900 font-bold text-base mt-4", children: "Affiliation" }, void 0, !1, {
            fileName: "app/routes/team.tsx",
            lineNumber: 103,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV18("p", { className: "text-sm text-gray-600", children: member.affiliation }, void 0, !1, {
            fileName: "app/routes/team.tsx",
            lineNumber: 106,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV18("div", { className: "my-4 flex", children: [
            member.webpage && /* @__PURE__ */ jsxDEV18("a", { className: "mr-3", href: member.webpage, children: /* @__PURE__ */ jsxDEV18("svg", { className: "w-6 h-6 text-gray-800 dark:text-white", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV18("path", { fillRule: "evenodd", d: "M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z", clipRule: "evenodd" }, void 0, !1, {
              fileName: "app/routes/team.tsx",
              lineNumber: 113,
              columnNumber: 27
            }, this) }, void 0, !1, {
              fileName: "app/routes/team.tsx",
              lineNumber: 112,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/routes/team.tsx",
              lineNumber: 111,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ jsxDEV18("a", { className: "mr-3", href: "mailto:" + member.email, children: /* @__PURE__ */ jsxDEV18("i", { className: "fa fa-envelope" }, void 0, !1, {
              fileName: "app/routes/team.tsx",
              lineNumber: 118,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/team.tsx",
              lineNumber: 117,
              columnNumber: 21
            }, this),
            member.orcid && /* @__PURE__ */ jsxDEV18("a", { className: "mr-3 flex items-center", href: member.orcid, children: /* @__PURE__ */ jsxDEV18("img", { alt: "ORCID logo", src: "https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png", width: "16px", height: "16px" }, void 0, !1, {
              fileName: "app/routes/team.tsx",
              lineNumber: 122,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/routes/team.tsx",
              lineNumber: 121,
              columnNumber: 39
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/team.tsx",
            lineNumber: 109,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/team.tsx",
          lineNumber: 90,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/team.tsx",
          lineNumber: 89,
          columnNumber: 15
        }, this)
      ] }, index, !0, {
        fileName: "app/routes/team.tsx",
        lineNumber: 85,
        columnNumber: 17
      }, this)) }, void 0, !1, {
        fileName: "app/routes/team.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/team.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/team.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18(footer_default, {}, void 0, !1, {
      fileName: "app/routes/team.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/team.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}, team_default2 = Index12;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-MCGG2PRW.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-SYCA6SCI.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-IFJMOQTG.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-3OAMENJE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-IWJHNUKY.js", imports: ["/build/_shared/chunk-KRSW6ASU.js", "/build/_shared/chunk-FNPLCOOP.js", "/build/_shared/chunk-TGYAQQH6.js", "/build/_shared/chunk-VX5OIUM5.js", "/build/_shared/chunk-B2PQPTZ7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/data": { id: "routes/data", parentId: "root", path: "data", index: void 0, caseSensitive: void 0, module: "/build/routes/data-C2HWPYT2.js", imports: ["/build/_shared/chunk-QKLUKKVU.js", "/build/_shared/chunk-7WLVTK43.js", "/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-VX5OIUM5.js", "/build/_shared/chunk-B2PQPTZ7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/footer": { id: "routes/footer", parentId: "root", path: "footer", index: void 0, caseSensitive: void 0, module: "/build/routes/footer-53AP6AKW.js", imports: ["/build/_shared/chunk-VX5OIUM5.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/groups": { id: "routes/groups", parentId: "root", path: "groups", index: void 0, caseSensitive: void 0, module: "/build/routes/groups-LW2DRIKT.js", imports: ["/build/_shared/chunk-VX5OIUM5.js", "/build/_shared/chunk-B2PQPTZ7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/location": { id: "routes/location", parentId: "root", path: "location", index: void 0, caseSensitive: void 0, module: "/build/routes/location-PBO4PHJY.js", imports: ["/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-TGYAQQH6.js", "/build/_shared/chunk-VX5OIUM5.js", "/build/_shared/chunk-B2PQPTZ7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/main": { id: "routes/main", parentId: "root", path: "main", index: void 0, caseSensitive: void 0, module: "/build/routes/main-L2QYRQ4U.js", imports: ["/build/_shared/chunk-KRSW6ASU.js", "/build/_shared/chunk-FNPLCOOP.js", "/build/_shared/chunk-TGYAQQH6.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/navigate": { id: "routes/navigate", parentId: "root", path: "navigate", index: void 0, caseSensitive: void 0, module: "/build/routes/navigate-Q73F577S.js", imports: ["/build/_shared/chunk-B2PQPTZ7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/news": { id: "routes/news", parentId: "root", path: "news", index: void 0, caseSensitive: void 0, module: "/build/routes/news-G6G63V7G.js", imports: ["/build/_shared/chunk-7WLVTK43.js", "/build/_shared/chunk-FNPLCOOP.js", "/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-VX5OIUM5.js", "/build/_shared/chunk-B2PQPTZ7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/plot": { id: "routes/plot", parentId: "root", path: "plot", index: void 0, caseSensitive: void 0, module: "/build/routes/plot-ANXUG3QZ.js", imports: ["/build/_shared/chunk-QKLUKKVU.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/publication": { id: "routes/publication", parentId: "root", path: "publication", index: void 0, caseSensitive: void 0, module: "/build/routes/publication-4K6UH54U.js", imports: ["/build/_shared/chunk-7WLVTK43.js", "/build/_shared/chunk-FNPLCOOP.js", "/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-VX5OIUM5.js", "/build/_shared/chunk-B2PQPTZ7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/science": { id: "routes/science", parentId: "root", path: "science", index: void 0, caseSensitive: void 0, module: "/build/routes/science-MQYYUJAB.js", imports: ["/build/_shared/chunk-VX5OIUM5.js", "/build/_shared/chunk-B2PQPTZ7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/specification": { id: "routes/specification", parentId: "root", path: "specification", index: void 0, caseSensitive: void 0, module: "/build/routes/specification-GSE3KW3B.js", imports: ["/build/_shared/chunk-VX5OIUM5.js", "/build/_shared/chunk-B2PQPTZ7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/status": { id: "routes/status", parentId: "root", path: "status", index: void 0, caseSensitive: void 0, module: "/build/routes/status-O4YTF4HT.js", imports: ["/build/_shared/chunk-VX5OIUM5.js", "/build/_shared/chunk-B2PQPTZ7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/survey": { id: "routes/survey", parentId: "root", path: "survey", index: void 0, caseSensitive: void 0, module: "/build/routes/survey-CATAKAEN.js", imports: ["/build/_shared/chunk-TGYAQQH6.js", "/build/_shared/chunk-VX5OIUM5.js", "/build/_shared/chunk-B2PQPTZ7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/team": { id: "routes/team", parentId: "root", path: "team", index: void 0, caseSensitive: void 0, module: "/build/routes/team-TGRIO5O7.js", imports: ["/build/_shared/chunk-VX5OIUM5.js", "/build/_shared/chunk-B2PQPTZ7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/telescope": { id: "routes/telescope", parentId: "root", path: "telescope", index: void 0, caseSensitive: void 0, module: "/build/routes/telescope-27YANVZY.js", imports: ["/build/_shared/chunk-TGYAQQH6.js", "/build/_shared/chunk-VX5OIUM5.js", "/build/_shared/chunk-B2PQPTZ7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "ae3a07d6", hmr: { runtime: "/build/_shared/chunk-IFJMOQTG.js", timestamp: 1707983449839 }, url: "/build/manifest-AE3A07D6.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/specification": {
    id: "routes/specification",
    parentId: "root",
    path: "specification",
    index: void 0,
    caseSensitive: void 0,
    module: specification_exports
  },
  "routes/publication": {
    id: "routes/publication",
    parentId: "root",
    path: "publication",
    index: void 0,
    caseSensitive: void 0,
    module: publication_exports
  },
  "routes/telescope": {
    id: "routes/telescope",
    parentId: "root",
    path: "telescope",
    index: void 0,
    caseSensitive: void 0,
    module: telescope_exports
  },
  "routes/location": {
    id: "routes/location",
    parentId: "root",
    path: "location",
    index: void 0,
    caseSensitive: void 0,
    module: location_exports
  },
  "routes/navigate": {
    id: "routes/navigate",
    parentId: "root",
    path: "navigate",
    index: void 0,
    caseSensitive: void 0,
    module: navigate_exports
  },
  "routes/science": {
    id: "routes/science",
    parentId: "root",
    path: "science",
    index: void 0,
    caseSensitive: void 0,
    module: science_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/footer": {
    id: "routes/footer",
    parentId: "root",
    path: "footer",
    index: void 0,
    caseSensitive: void 0,
    module: footer_exports
  },
  "routes/groups": {
    id: "routes/groups",
    parentId: "root",
    path: "groups",
    index: void 0,
    caseSensitive: void 0,
    module: groups_exports
  },
  "routes/status": {
    id: "routes/status",
    parentId: "root",
    path: "status",
    index: void 0,
    caseSensitive: void 0,
    module: status_exports
  },
  "routes/survey": {
    id: "routes/survey",
    parentId: "root",
    path: "survey",
    index: void 0,
    caseSensitive: void 0,
    module: survey_exports
  },
  "routes/data": {
    id: "routes/data",
    parentId: "root",
    path: "data",
    index: void 0,
    caseSensitive: void 0,
    module: data_exports
  },
  "routes/main": {
    id: "routes/main",
    parentId: "root",
    path: "main",
    index: void 0,
    caseSensitive: void 0,
    module: main_exports
  },
  "routes/news": {
    id: "routes/news",
    parentId: "root",
    path: "news",
    index: void 0,
    caseSensitive: void 0,
    module: news_exports
  },
  "routes/plot": {
    id: "routes/plot",
    parentId: "root",
    path: "plot",
    index: void 0,
    caseSensitive: void 0,
    module: plot_exports
  },
  "routes/team": {
    id: "routes/team",
    parentId: "root",
    path: "team",
    index: void 0,
    caseSensitive: void 0,
    module: team_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
