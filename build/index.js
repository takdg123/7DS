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
import { jsx } from "react/jsx-runtime";
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
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
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
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
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
var app_default = "/build/_assets/app-NPVMXMEC.css";

// app/css/custom.css
var custom_default = "/build/_assets/custom-ADH57EPD.css";

// node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min_default = "/build/_assets/bootstrap.min-TQVI2G2N.css";

// app/root.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var links = () => [
  { rel: "stylesheet", href: bootstrap_min_default },
  { rel: "stylesheet", href: app_default },
  { rel: "stylesheet", href: custom_default },
  { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" },
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
];
function App() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx2("script", { src: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js" }),
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx2(Outlet, {}),
      /* @__PURE__ */ jsx2(ScrollRestoration, {}),
      /* @__PURE__ */ jsx2(Scripts, {}),
      /* @__PURE__ */ jsx2(LiveReload, {})
    ] })
  ] });
}

// app/routes/publication.tsx
var publication_exports = {};
__export(publication_exports, {
  default: () => publication_default
});
import { useState as useState2 } from "react";

// app/routes/navigate.tsx
var navigate_exports = {};
__export(navigate_exports, {
  default: () => navigate_default
});
import { useState, useEffect } from "react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function buttonStyle(valid) {
  return {
    height: "170px",
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
  let [onMouse, setOnMouse] = useState(!1), [isTop, setIsTop] = useState(!props.fixed), [activeMenu, setActiveMenu] = useState(null), [showMenu, setShowMenu] = useState(!1), handleScroll = () => {
    let isTop2 = window.scrollY === 0;
    setIsTop(isTop2 && !props.fixed);
  }, handleManu = (manu, onMouse2) => {
    setActiveMenu(manu), setOnMouse(onMouse2);
  };
  return useEffect(() => (window.addEventListener("scroll", handleScroll), () => {
    window.removeEventListener("scroll", handleScroll);
  }), []), useEffect(() => {
    setActiveMenu(props.manu);
  }, []), /* @__PURE__ */ jsx3("nav", { className: "justify-center mx-auto shadow fixed w-full top-0 z-1000 text-white", style: {
    backgroundColor: `rgba(7, 28, 48, ${isTop ? 0.5 : 1})`,
    margin: "0 auto"
  }, children: /* @__PURE__ */ jsxs2(
    "div",
    {
      className: "container flex justify-between mx-auto capitalize",
      style: { maxWidth: "1440px", color: "#fff", padding: activeMenu === null ? "0rem" : "0rem 1.5rem 0 1.5rem", margin: "0 auto" },
      onMouseLeave: () => handleManu(props.manu, !1),
      children: [
        /* @__PURE__ */ jsxs2("button", { onClick: () => setShowMenu(!showMenu), "data-collapse-toggle": "navbar-dropdown", type: "button", className: "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600", "aria-controls": "navbar-dropdown", "aria-expanded": "false", children: [
          /* @__PURE__ */ jsx3("span", { className: "sr-only", children: "Open main menu" }),
          /* @__PURE__ */ jsx3("svg", { className: "w-5 h-5", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 17 14", children: /* @__PURE__ */ jsx3("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M1 1h15M1 7h15M1 13h15" }) })
        ] }),
        /* @__PURE__ */ jsx3("div", { className: `w-full md:block md:w-auto ${showMenu ? "block pt-5 justify-start" : "hidden"}`, id: "navbar-dropdown", children: /* @__PURE__ */ jsxs2("ul", { className: "flex flex-col font-medium py-4 md:p-0 mt-0 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 mx-auto", style: { margin: "0 auto" }, children: [
          /* @__PURE__ */ jsx3("li", { className: "$(showMenu) ? pb-2 : ''", style: { textAlign: showMenu ? "left" : "center" }, children: /* @__PURE__ */ jsx3(
            "div",
            {
              onMouseEnter: () => handleManu("manuHome", !0),
              children: /* @__PURE__ */ jsx3(
                "button",
                {
                  id: "home",
                  "data-dropdown-toggle": "manuHome",
                  className: menuClass(activeMenu === "manuHome"),
                  children: /* @__PURE__ */ jsx3("a", { href: "/", children: "Home" })
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx3("li", { className: "$(showMenu) ? pb-2 : ''", style: { textAlign: showMenu ? "left" : "center" }, children: /* @__PURE__ */ jsx3(
            "div",
            {
              onMouseEnter: () => handleManu("manuTeam", !0),
              children: /* @__PURE__ */ jsx3(
                "button",
                {
                  id: "team",
                  "data-dropdown-toggle": "manuTeam",
                  className: menuClass(activeMenu === "manuTeam"),
                  children: /* @__PURE__ */ jsx3("a", { href: "/team", children: "Team" })
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx3("li", { className: "$(showMenu) ? pb-2 : ''", style: { textAlign: showMenu ? "left" : "center" }, children: /* @__PURE__ */ jsx3(
            "div",
            {
              onMouseEnter: () => handleManu("manuScience", !0),
              children: /* @__PURE__ */ jsx3(
                "button",
                {
                  id: "home",
                  "data-dropdown-toggle": "manuScience",
                  className: menuClass(activeMenu === "manuScience"),
                  children: /* @__PURE__ */ jsx3("a", { href: "/science", children: "Science" })
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx3("li", { className: "$(showMenu) ? pb-2 : ''", style: { textAlign: showMenu ? "left" : "center" }, children: /* @__PURE__ */ jsxs2(
            "div",
            {
              onMouseEnter: () => handleManu("manu7ds", !0),
              children: [
                /* @__PURE__ */ jsx3(
                  "button",
                  {
                    id: "7ds",
                    "data-dropdown-toggle": "manu7ds",
                    className: menuClass(activeMenu === "manu7ds"),
                    children: /* @__PURE__ */ jsx3("a", { href: "/survey", children: "Survey" })
                  }
                ),
                onMouse && !showMenu ? /* @__PURE__ */ jsx3("div", { style: buttonStyle(activeMenu === "manu7ds"), children: /* @__PURE__ */ jsxs2("ul", { className: "text-sm", children: [
                  /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "/survey", className: "block py-2 hover:bg-oran-100", style: { padding: "0.5rem" }, children: "Design" }) }),
                  /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "/status", className: "block py-2 hover:bg-oran-100", style: { padding: "0.5rem" }, children: "Status" }) }),
                  /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "/group", className: "block py-2 hover:bg-oran-100", style: { padding: "0.5rem" }, children: "Working Group" }) })
                ] }) }) : showMenu ? /* @__PURE__ */ jsxs2("ul", { className: "text-sm", children: [
                  /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "/survey", className: "block py-0 ml-5 hover:scale-110 hover:text-orange", style: { padding: "0.5rem" }, children: "- Design" }) }),
                  /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "/status", className: "block py-0 ml-5 hover:scale-110 hover:text-orange", style: { padding: "0.5rem" }, children: "- Status" }) }),
                  /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "/group", className: "block py-0 ml-5 hover:scale-110 hover:text-orange", style: { padding: "0.5rem" }, children: "- Working Group" }) })
                ] }) : null
              ]
            }
          ) }),
          /* @__PURE__ */ jsx3("li", { className: "$(showMenu) ? pb-2 : ''", style: { textAlign: showMenu ? "left" : "center" }, children: /* @__PURE__ */ jsxs2(
            "div",
            {
              onMouseEnter: () => handleManu("manu7dt", !0),
              children: [
                /* @__PURE__ */ jsx3(
                  "button",
                  {
                    id: "7dt",
                    "data-dropdown-toggle": "manu7dt",
                    className: menuClass(activeMenu === "manu7dt"),
                    children: /* @__PURE__ */ jsx3("a", { href: "/telescope", children: "Facilities" })
                  }
                ),
                onMouse && !showMenu ? /* @__PURE__ */ jsx3("div", { style: buttonStyle(activeMenu === "manu7dt"), children: /* @__PURE__ */ jsxs2("ul", { className: "text-sm", style: { margin: "0 auto" }, children: [
                  /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "/telescope", className: "block py-2 hover:bg-oran-100", style: { padding: "0.5rem" }, children: "Overview" }) }),
                  /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "/location", className: "block py-2 hover:bg-oran-100", style: { padding: "0.5rem" }, children: "Location" }) }),
                  /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "/instrument", className: "block py-2 hover:bg-oran-100", style: { padding: "0.5rem" }, children: "Instrument" }) }),
                  /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsxs2("a", { href: "/server", className: "block py-2 hover:bg-oran-100", style: { padding: "0.5rem" }, children: [
                    "Computational",
                    /* @__PURE__ */ jsx3("br", {}),
                    "Resources"
                  ] }) })
                ] }) }) : showMenu ? /* @__PURE__ */ jsxs2("ul", { className: "text-sm", style: { margin: "0 auto" }, children: [
                  /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "/telescope", className: "block py-0 ml-5 hover:scale-110 hover:text-orange", style: { padding: "0.5rem" }, children: "- Overview" }) }),
                  /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "/location", className: "block py-0 ml-5 hover:scale-110 hover:text-orange", style: { padding: "0.5rem" }, children: "- Location" }) }),
                  /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "/instrument", className: "block py-0 ml-5 hover:scale-110 hover:text-orange", style: { padding: "0.5rem" }, children: "- Instrument" }) }),
                  /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "/server", className: "block py-0 ml-5 hover:scale-110 hover:text-orange", style: { padding: "0.5rem" }, children: "- Computational Resources" }) })
                ] }) : null
              ]
            }
          ) }),
          /* @__PURE__ */ jsx3("li", { className: "$(showMenu) ? pb-2 : ''", style: { textAlign: showMenu ? "left" : "center" }, children: /* @__PURE__ */ jsxs2(
            "div",
            {
              onMouseEnter: () => handleManu("manuData", !0),
              children: [
                /* @__PURE__ */ jsx3(
                  "button",
                  {
                    id: "data",
                    "data-dropdown-toggle": "manuData",
                    className: menuClass(activeMenu === "manuData"),
                    children: /* @__PURE__ */ jsx3("a", { href: "/data", children: "Data" })
                  }
                ),
                onMouse && !showMenu ? /* @__PURE__ */ jsx3("div", { style: buttonStyle(activeMenu === "manuData"), children: /* @__PURE__ */ jsxs2("ul", { className: "text-sm", children: [
                  /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "/data", className: "block py-2 hover:bg-oran-100", style: { padding: "0.5rem" }, children: "Survey Data" }) }),
                  /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "/nonsurvey", className: "block py-2 hover:bg-oran-100", style: { padding: "0.5rem" }, children: "Non-survey" }) }),
                  /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "/images", className: "block py-2 hover:bg-oran-100", style: { padding: "0.5rem" }, children: "Images" }) })
                ] }) }) : showMenu ? /* @__PURE__ */ jsxs2("ul", { className: "text-sm", children: [
                  /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "/data", className: "block py-0 ml-5 hover:scale-110 hover:text-orange", style: { padding: "0.5rem" }, children: "- Survey Data" }) }),
                  /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "/nonsurvey", className: "block py-0 ml-5 hover:scale-110 hover:text-orange", style: { padding: "0.5rem" }, children: "- Non-survey" }) }),
                  /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "/images", className: "block py-0 ml-5 hover:scale-110 hover:text-orange", style: { padding: "0.5rem" }, children: "- Images" }) })
                ] }) : null
              ]
            }
          ) }),
          /* @__PURE__ */ jsx3("li", { className: "$(showMenu) ? pb-2 : ''", style: { textAlign: showMenu ? "left" : "center" }, children: /* @__PURE__ */ jsx3(
            "div",
            {
              onMouseEnter: () => handleManu("manuPaper", !0),
              children: /* @__PURE__ */ jsx3(
                "button",
                {
                  id: "publication",
                  "data-dropdown-toggle": "manuPaper",
                  className: menuClass(activeMenu === "manuPaper"),
                  children: /* @__PURE__ */ jsx3("a", { href: "/publication", children: "Publications" })
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx3("li", { className: "$(showMenu) ? pb-2 : ''", style: { textAlign: showMenu ? "left" : "center" }, children: /* @__PURE__ */ jsx3(
            "div",
            {
              onMouseEnter: () => handleManu("manuNews", !0),
              children: /* @__PURE__ */ jsx3(
                "button",
                {
                  id: "news",
                  "data-dropdown-toggle": "manuNews",
                  className: menuClass(activeMenu === "manuNews"),
                  children: /* @__PURE__ */ jsx3("a", { href: "/news", children: "News" })
                }
              )
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsx3("a", { className: "logo-container", href: "/", children: /* @__PURE__ */ jsx3("img", { src: "/img/logoWname.png", alt: "Logo", className: "logo-image" }) })
      ]
    }
  ) });
}
var navigate_default = NavBar;

// app/routes/footer.tsx
var footer_exports = {};
__export(footer_exports, {
  default: () => footer_default
});
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var FooterBar = () => /* @__PURE__ */ jsx4("footer", { style: { backgroundColor: "black", zIndex: 1e3, position: "relative" }, children: /* @__PURE__ */ jsx4("div", { className: "mx-auto w-full main-container", style: { maxWidth: "1440px", margin: "0 auto", padding: "0 10vw 0 10vw" }, children: /* @__PURE__ */ jsxs3("div", { className: "grid grid-cols-2 gap-8 py-6 lg:py-8 md:grid-cols-4", children: [
  /* @__PURE__ */ jsxs3("div", { children: [
    /* @__PURE__ */ jsx4("h2", { className: "text-sm font-semibold text-gray-900 uppercase text-white", children: "Contact" }),
    /* @__PURE__ */ jsx4("hr", { className: "mb-2" }),
    /* @__PURE__ */ jsx4("p", { className: "text-gray-500", children: " Myungshin Im " }),
    /* @__PURE__ */ jsx4("p", { className: "text-gray-500", children: " Professor, Dept. of Physics & Astronomy, Seoul National University," }),
    /* @__PURE__ */ jsx4("p", { className: "text-gray-500", children: " 56-1 San, Shillim-dong, Kwanak-gu, Seoul, KOREA " }),
    /* @__PURE__ */ jsx4("p", { className: "text-gray-500", children: " +82-2-880-6585/6761 " }),
    /* @__PURE__ */ jsxs3("p", { className: "text-gray-500 mb-2", children: [
      " ",
      /* @__PURE__ */ jsx4("a", { href: "mailto:mim@astro.snu.ac.kr", children: "mim@astro.snu.ac.kr" })
    ] }),
    /* @__PURE__ */ jsx4("hr", {})
  ] }),
  /* @__PURE__ */ jsxs3("div", { children: [
    /* @__PURE__ */ jsx4("h2", { className: "text-sm font-semibold text-gray-900 uppercase text-white", children: "About Us" }),
    /* @__PURE__ */ jsx4("hr", { className: "mb-2" }),
    /* @__PURE__ */ jsxs3("ul", { className: "text-gray-500 dark:text-gray-400 font-medium", children: [
      /* @__PURE__ */ jsx4("li", { className: "mb-2", children: /* @__PURE__ */ jsx4("a", { href: "/team", className: "hover:color-org", children: "Team" }) }),
      /* @__PURE__ */ jsx4("li", { className: "mb-2", children: /* @__PURE__ */ jsx4("a", { href: "/groups", className: "hover:color-org", children: "Working Group" }) })
    ] }),
    /* @__PURE__ */ jsx4("hr", { className: "mb-6" }),
    /* @__PURE__ */ jsx4("h2", { className: "text-sm font-semibold text-gray-900 uppercase text-white", children: "7DT" }),
    /* @__PURE__ */ jsx4("hr", { className: "mb-2" }),
    /* @__PURE__ */ jsxs3("ul", { className: "text-gray-500 dark:text-gray-400 font-medium", children: [
      /* @__PURE__ */ jsx4("li", { className: "mb-2", children: /* @__PURE__ */ jsx4("a", { href: "/telescope", className: "hover:color-org", children: "Overview" }) }),
      /* @__PURE__ */ jsx4("li", { className: "mb-2", children: /* @__PURE__ */ jsx4("a", { href: "/location", className: "hover:color-org", children: "Location" }) }),
      /* @__PURE__ */ jsx4("li", { className: "mb-2", children: /* @__PURE__ */ jsx4("a", { href: "/specification", className: "hover:color-org", children: "Specification" }) })
    ] }),
    /* @__PURE__ */ jsx4("hr", {})
  ] }),
  /* @__PURE__ */ jsxs3("div", { children: [
    /* @__PURE__ */ jsx4("h2", { className: "text-sm font-semibold text-gray-900 uppercase text-white", children: "7DS" }),
    /* @__PURE__ */ jsx4("hr", { className: "mb-2" }),
    /* @__PURE__ */ jsxs3("ul", { className: "text-gray-500 dark:text-gray-400 font-medium", children: [
      /* @__PURE__ */ jsx4("li", { className: "mb-2", children: /* @__PURE__ */ jsx4("a", { href: "#", className: "hover:color-org", children: "Survey" }) }),
      /* @__PURE__ */ jsx4("li", { className: "mb-2", children: /* @__PURE__ */ jsx4("a", { href: "#", className: "hover:color-org", children: "Status" }) }),
      /* @__PURE__ */ jsx4("li", { className: "mb-2", children: /* @__PURE__ */ jsx4("a", { href: "#", className: "hover:color-org", children: "Data" }) })
    ] }),
    /* @__PURE__ */ jsx4("hr", {})
  ] }),
  /* @__PURE__ */ jsxs3("div", { children: [
    /* @__PURE__ */ jsx4("h2", { className: "text-sm font-semibold text-gray-900 uppercase text-white", children: "Science" }),
    /* @__PURE__ */ jsx4("hr", { className: "mb-2" }),
    /* @__PURE__ */ jsxs3("ul", { className: "text-gray-500 dark:text-gray-400 font-medium", children: [
      /* @__PURE__ */ jsx4("li", { className: "mb-2", children: /* @__PURE__ */ jsx4("a", { href: "/science", className: "hover:color-org", children: "Scientific Goals" }) }),
      /* @__PURE__ */ jsx4("li", { className: "mb-2", children: /* @__PURE__ */ jsx4("a", { href: "/publication", className: "hover:color-org", children: "Publications" }) })
    ] }),
    /* @__PURE__ */ jsx4("hr", { className: "mb-6" }),
    /* @__PURE__ */ jsx4("h2", { className: "text-sm font-semibold text-gray-900 uppercase text-white", children: /* @__PURE__ */ jsx4("a", { href: "/news", children: "News" }) })
  ] })
] }) }) }), footer_default = FooterBar;

// app/routes/publication.tsx
import { Pagination } from "flowbite-react";

// app/routes/content/news.json
var news_default = {
  news: [
    {
      type: "press",
      title: "First Release of Images Taken with 7-Dimensional Telescope",
      webpage: "https://sites.google.com/view/7dtfirstimages",
      date: "Feb. 14, 2024",
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
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var Index = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/news.png")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [currentPage, setCurrentPage] = useState2(1), [showAbstract, setShowAbstract] = useState2(!1), pubPerPage = 5, pub = news_default.news.filter((item) => item.type === "publication"), totalPages = Math.ceil(pub.length / pubPerPage), indexOfLastPubs = currentPage * pubPerPage, indexOfFirstPubs = indexOfLastPubs - pubPerPage, currentPub = pub.slice(indexOfFirstPubs, indexOfLastPubs), onPageChange = (page) => setCurrentPage(page);
  return /* @__PURE__ */ jsxs4("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsx5(navigate_default, { manu: "manuPaper", fixed: !0 }),
    /* @__PURE__ */ jsx5("div", { className: "mx-auto w-full main-container", children: /* @__PURE__ */ jsxs4("div", { className: "p-10 max-w-screen-lg mx-auto", children: [
      /* @__PURE__ */ jsxs4("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsx5("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Meet our works" }),
        /* @__PURE__ */ jsx5("h3", { className: "text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: /* @__PURE__ */ jsx5("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Publications" }) })
      ] }),
      /* @__PURE__ */ jsx5("div", { className: "w-full", style: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ jsx5("button", { style: { textAlign: "right" }, onClick: () => setShowAbstract(!showAbstract), children: showAbstract ? "Hide Abstract" : "Show Abstract" }) }),
      /* @__PURE__ */ jsxs4("div", { className: "flex flex-wrap items-center justify-center", style: { maxWidth: "1200px", margin: "0 auto", marginBottom: "5rem", textAlign: "center", color: "black" }, children: [
        pub.map((p, index) => (index = index + 1, /* @__PURE__ */ jsxs4("div", { className: "w-full pub-container p-6 m-3", style: { boxShadow: "0px 15px 35px rgba(227, 252, 239, 0.1), 0px 5px 15px rgba(0, 0, 0, 0.07)" }, children: [
          /* @__PURE__ */ jsxs4("div", { className: "pr-5 p-cont-1", children: [
            /* @__PURE__ */ jsx5("p", { className: "pb-3", style: { fontSize: "24px", lineHeight: "1.2", color: "var(--pickled-bluewood-600)", fontWeight: 500 }, children: /* @__PURE__ */ jsx5("a", { href: p.webpage, target: "_blank", children: p.title }) }),
            showAbstract && /* @__PURE__ */ jsx5("p", { className: "text-content", style: { fontSize: "12pt" }, children: p.abstract }),
            !showAbstract && /* @__PURE__ */ jsxs4("p", { className: "pb-3", children: [
              /* @__PURE__ */ jsx5("span", { className: "text-bluewood-900", style: { fontWeight: 700 }, children: "Authors:" }),
              " ",
              p.author
            ] })
          ] }),
          /* @__PURE__ */ jsxs4("div", { className: "p-cont-2", style: { textAlign: "left" }, children: [
            showAbstract && /* @__PURE__ */ jsxs4("p", { className: "pb-3", children: [
              /* @__PURE__ */ jsx5("span", { className: "text-bluewood-900", style: { fontWeight: 700 }, children: "Authors:" }),
              " ",
              p.author
            ] }),
            /* @__PURE__ */ jsxs4("p", { className: "pb-3", children: [
              /* @__PURE__ */ jsx5("span", { className: "text-bluewood-900", style: { fontWeight: 700 }, children: "Journal:" }),
              " ",
              p.journal
            ] }),
            /* @__PURE__ */ jsxs4("p", { className: "pb-3", children: [
              /* @__PURE__ */ jsx5("span", { className: "text-bluewood-900", style: { fontWeight: 700 }, children: "Date:" }),
              " ",
              p.date
            ] }),
            /* @__PURE__ */ jsxs4("p", { className: "pb-3", children: [
              /* @__PURE__ */ jsx5("span", { className: "text-bluewood-900", style: { fontWeight: 700 }, children: "doi:" }),
              " ",
              /* @__PURE__ */ jsx5("a", { href: p.webpage, target: "_blank", children: p.doi })
            ] }),
            /* @__PURE__ */ jsxs4("p", { className: "pb-3", children: [
              /* @__PURE__ */ jsx5("span", { className: "text-bluewood-900", style: { fontWeight: 700 }, children: "preprint:" }),
              " ",
              /* @__PURE__ */ jsx5("a", { href: p.webpage2, target: "_blank", children: p.preprint })
            ] })
          ] })
        ] }, index))),
        /* @__PURE__ */ jsx5("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsx5(Pagination, { currentPage, totalPages, onPageChange }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx5(footer_default, {})
  ] });
}, publication_default = Index;

// app/routes/instrument.tsx
var instrument_exports = {};
__export(instrument_exports, {
  default: () => instrument_default
});
import { useState as useState3, useEffect as useEffect3 } from "react";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var Index2 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/spec.png")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [submenuTop, setSubmenuTop] = useState3("750px"), [smallWindow, setSmallWindow] = useState3(!0);
  return useEffect3(() => {
    let updateWindow = () => {
      window.innerWidth < 1500 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateWindow(), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []), useEffect3(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, windowHeight = window.innerHeight, newTop = `calc(750px - ${scrollPosition * 0.2 / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), /* @__PURE__ */ jsxs5("div", { children: [
    /* @__PURE__ */ jsx6(navigate_default, { manu: "manu7dt" }),
    /* @__PURE__ */ jsx6("div", { style: backgroundImage, children: /* @__PURE__ */ jsx6("div", { style: { height: "700px" } }) }),
    smallWindow ? /* @__PURE__ */ jsx6("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxs5("ul", { children: [
      /* @__PURE__ */ jsx6("li", { className: "p-2", children: /* @__PURE__ */ jsx6("a", { href: "/telescope", children: "Overview" }) }),
      /* @__PURE__ */ jsx6("li", { className: "p-2", children: /* @__PURE__ */ jsx6("a", { href: "/location", children: "Location" }) }),
      /* @__PURE__ */ jsx6("li", { className: "p-2 active", children: /* @__PURE__ */ jsx6("a", { href: "#", children: "Instrument" }) }),
      /* @__PURE__ */ jsx6("li", { className: "p-2", children: /* @__PURE__ */ jsxs5("a", { href: "/server", children: [
        "Computational",
        /* @__PURE__ */ jsx6("br", {}),
        "Resorces"
      ] }) })
    ] }) }) : null,
    /* @__PURE__ */ jsx6("div", { className: "mx-auto w-full main-container", children: /* @__PURE__ */ jsx6("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsxs5("div", { className: "justify-between", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
      /* @__PURE__ */ jsx6("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "The Biggest Ground-based Multi-telescope System" }),
      /* @__PURE__ */ jsxs5("h3", { className: "text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
        "Specifcation of ",
        /* @__PURE__ */ jsx6("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "7DT" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx6("div", { className: "mx-auto w-full", style: { height: "400px", maxWidth: "1440px", margin: "0 auto", padding: "0 10vw 0 10vw" }, children: /* @__PURE__ */ jsx6("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsx6("h3", { className: "text-2xl sm:text-3xl leading-normal font-extrabold tracking-tight", style: { fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: "Optics" }) }) }),
    /* @__PURE__ */ jsx6("div", { style: { backgroundColor: "#f9f9f9" }, children: /* @__PURE__ */ jsx6("div", { className: "mx-auto w-full", style: { height: "400px", maxWidth: "1440px", margin: "0 auto", padding: "0 10vw 0 10vw" }, children: /* @__PURE__ */ jsx6("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsx6("h3", { className: "text-2xl sm:text-3xl leading-normal font-extrabold tracking-tight", style: { fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: "Mount" }) }) }) }),
    /* @__PURE__ */ jsx6("div", { className: "mx-auto w-full", style: { maxWidth: "1440px", margin: "0 auto", padding: "0 10vw 0 10vw" }, children: /* @__PURE__ */ jsxs5("div", { className: "p-10 max-w-screen-lg mx-auto", children: [
      /* @__PURE__ */ jsx6("h3", { className: "mb-3 text-2xl sm:text-3xl leading-normal font-extrabold tracking-tight", style: { fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: "Filter" }),
      /* @__PURE__ */ jsx6("p", { className: "text-content", children: "The utilization of 7DT filters allows for the sophisticated observation of an object, enabling the exploration of its characteristics across a diverse spectrum of wavelengths." }),
      /* @__PURE__ */ jsx6("img", { className: "p-6", src: "/img/filter.png" }),
      /* @__PURE__ */ jsx6("p", { className: "text-content", children: "Here are two examples: NGC7293(left) and NGC0253(right)" }),
      /* @__PURE__ */ jsxs5("div", { className: "flex flex-wrap justify-between p-10", style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsx6("img", { src: "/img/NGC7293.gif", width: "40%" }),
        /* @__PURE__ */ jsx6("img", { src: "/img/NGC0253.gif", width: "40%" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx6(footer_default, {})
  ] });
}, instrument_default = Index2;

// app/routes/nonsurvey.tsx
var nonsurvey_exports = {};
__export(nonsurvey_exports, {
  default: () => nonsurvey_default
});
import { useState as useState4, useEffect as useEffect5 } from "react";
import { Table } from "flowbite-react";
import { Pagination as Pagination2 } from "flowbite-react";

// app/routes/plot.tsx
var plot_exports = {};
__export(plot_exports, {
  default: () => plot_default
});
import { useRef, useEffect as useEffect4 } from "react";
import * as d3 from "d3";
import { geoAitoff } from "d3-geo-projection";
import { jsx as jsx7 } from "react/jsx-runtime";
var ScatterGeoPlot = ({ data, width, height }) => {
  let svgRef = useRef();
  return useEffect4(() => {
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
  }, [data, height, width]), /* @__PURE__ */ jsx7("svg", { ref: svgRef, width, height });
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

// app/routes/nonsurvey.tsx
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
var Index3 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/data.jpg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [submenuTop, setSubmenuTop] = useState4("200px"), [smallWindow, setSmallWindow] = useState4(!0);
  useEffect5(() => {
    let updateWindow = () => {
      window.innerWidth < 1500 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateWindow(), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []), useEffect5(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, windowHeight = window.innerHeight, newTop = `calc(200px - ${scrollPosition * -0.1 / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let [currentPage, setCurrentPage] = useState4(1), rowsPerPage = 10, totalRows = data_default.length, totalPages = Math.ceil(totalRows / rowsPerPage), onPageChange = (page) => {
    setCurrentPage(page);
  }, paginatedData = data_default.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  return /* @__PURE__ */ jsxs6("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsx8(navigate_default, { manu: "manuData", fixed: !0 }),
    smallWindow ? /* @__PURE__ */ jsx8("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxs6("ul", { children: [
      /* @__PURE__ */ jsx8("li", { className: "p-2", children: /* @__PURE__ */ jsx8("a", { href: "/data", children: "Survey Data" }) }),
      /* @__PURE__ */ jsx8("li", { className: "p-2 active", children: /* @__PURE__ */ jsx8("a", { href: "#", children: "Non-Survey" }) }),
      /* @__PURE__ */ jsx8("li", { className: "p-2", children: /* @__PURE__ */ jsx8("a", { href: "/images", children: "Images" }) })
    ] }) }) : null,
    /* @__PURE__ */ jsx8("div", { className: "mx-auto w-full main-container", children: /* @__PURE__ */ jsxs6("div", { className: "p-10 max-w-screen-lg mx-auto", children: [
      /* @__PURE__ */ jsxs6("div", { className: "justify-between", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsx8("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Invaluable Observations" }),
        /* @__PURE__ */ jsxs6("h3", { className: "text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          /* @__PURE__ */ jsx8("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Data" }),
          " Archive"
        ] })
      ] }),
      /* @__PURE__ */ jsx8("div", { className: "flex w-full justify-center", children: /* @__PURE__ */ jsx8(plot_default, { data: data_default, height: "400", width: "800" }) }),
      /* @__PURE__ */ jsxs6(Table, { striped: !0, children: [
        /* @__PURE__ */ jsxs6(Table.Head, { children: [
          /* @__PURE__ */ jsx8(Table.HeadCell, { children: "Target" }),
          /* @__PURE__ */ jsx8(Table.HeadCell, { children: "R.A." }),
          /* @__PURE__ */ jsx8(Table.HeadCell, { children: "Dec." }),
          /* @__PURE__ */ jsx8(Table.HeadCell, { children: "Exposure" }),
          /* @__PURE__ */ jsx8(Table.HeadCell, { children: "Significance" }),
          /* @__PURE__ */ jsx8(Table.HeadCell, { children: "Details" })
        ] }),
        /* @__PURE__ */ jsx8(Table.Body, { className: "divide-y", children: paginatedData.map((d, index) => /* @__PURE__ */ jsxs6(Table.Row, { className: "bg-white dark:border-gray-700 dark:bg-gray-800", children: [
          /* @__PURE__ */ jsx8(Table.Cell, { className: "whitespace-nowrap font-medium text-gray-900 dark:text-white", children: d.name }),
          /* @__PURE__ */ jsx8(Table.Cell, { children: d.ra }),
          /* @__PURE__ */ jsx8(Table.Cell, { children: d.dec }),
          /* @__PURE__ */ jsx8(Table.Cell, { children: d.exposure }),
          /* @__PURE__ */ jsx8(Table.Cell, { children: d.sigma }),
          /* @__PURE__ */ jsx8(Table.Cell, { children: d.ref === !1 ? /* @__PURE__ */ jsx8("a", { href: "mailto:mim@astro.snu.ac.kr", className: "font-medium text-cyan-600 hover:underline dark:text-cyan-500", children: "Contact" }) : /* @__PURE__ */ jsx8("a", { href: d.ref, className: "font-medium text-cyan-600 hover:underline dark:text-cyan-500", children: "Link" }) })
        ] })) })
      ] }),
      /* @__PURE__ */ jsx8("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsx8(Pagination2, { currentPage, totalPages, onPageChange }) })
    ] }) }),
    /* @__PURE__ */ jsx8(footer_default, {})
  ] });
}, nonsurvey_default = Index3;

// app/routes/telescope.tsx
var telescope_exports = {};
__export(telescope_exports, {
  default: () => telescope_default
});
import { useState as useState5, useEffect as useEffect6 } from "react";

// app/routes/content/text.tsx
var mainText1 = "A research team from the Department of Physics &   Astronomy at Seoul National has revealed first-light images of the 7-Dimensional   Telescope (7DT). The released images show colorful views of several celestial   bodies and demonstrate scientific capabilities of 7DT", mainText2 = "Through meticulous observations and advanced analysis,   our goal is to shed light on unraveling mysterious objects in the universe such   as gravitational-wave sources, supermassive black holes, new transient sources,   peculiar stellar phenomena, and small bodies of the solar system.";
var overviewText = "The 7-Dimensional Telescope(7DT) is a multiple   telescope system for observing the Universe in an unprecedented way, which   is composed of twenty 0.5m wide-field telescopes. It is being constructed   in Chile, with a target completion date of 2023. \u201C7-Dimension\u201D in its name   represents the 7-dimensional space of the Universe that we will explore in   the x, y position (2D), the distance (2D), the radial velocity (1D), the   brightness of the objects (1D) in the sky to be measured along the wavelength   (1D) and the time (1D). Therefore, the 7DT will obtain the spectral movie of   the Universe for the first time. The 7DT is expected to make significant   contributions to the newly-born \u201Cmulti-messenger astronomy\u201D by identifying   the electromagnetic counterparts of the gravitational-wave sources. The 7DT   will perform a survey called the 7-Dimensional Sky Survey (7DS), which is   expected to tackle difficult problems in many fields of astronomy ranging   from cosmology. galaxy evolution, supermassive black holes, tidal disruption   of stars, solar system objects, supernovae and transients, and the star   formation in our galaxy.", locationText = "Lorem ipsum dolor sit amet, consectetuer   adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum   sociis natoque penatibus et magnis dis parturient montes, nascetur   ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,   pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,   fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus   ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis   pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.   Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat   vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,   feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque   rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper   ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget   condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque   sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.   Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero   venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus   tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales   sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,", surveyText = "Lorem ipsum dolor sit amet, consectetuer   adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum   sociis natoque penatibus et magnis dis parturient montes, nascetur   ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,   pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,   fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus   ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis   pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.   Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat   vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,   feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque   rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper   ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget   condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque   sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.   Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero   venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus   tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales   sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,";

// app/routes/telescope.tsx
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
var Index4 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/7dt.jpg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [submenuTop, setSubmenuTop] = useState5("750px"), [smallWindow, setSmallWindow] = useState5(!0);
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
  }, []), /* @__PURE__ */ jsxs7("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsx9(navigate_default, { manu: "manu7dt" }),
    /* @__PURE__ */ jsx9("div", { style: backgroundImage, children: /* @__PURE__ */ jsx9("div", { style: { height: "700px" } }) }),
    smallWindow ? /* @__PURE__ */ jsx9("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxs7("ul", { children: [
      /* @__PURE__ */ jsx9("li", { className: "p-2 active", children: /* @__PURE__ */ jsx9("a", { href: "#", children: "Overview" }) }),
      /* @__PURE__ */ jsx9("li", { className: "p-2", children: /* @__PURE__ */ jsx9("a", { href: "/location", children: "Location" }) }),
      /* @__PURE__ */ jsx9("li", { className: "p-2", children: /* @__PURE__ */ jsx9("a", { href: "/instrument", children: "Instrument" }) }),
      /* @__PURE__ */ jsx9("li", { className: "p-2", children: /* @__PURE__ */ jsxs7("a", { href: "/server", children: [
        "Computational",
        /* @__PURE__ */ jsx9("br", {}),
        "Resorces"
      ] }) })
    ] }) }) : null,
    /* @__PURE__ */ jsx9("div", { className: "mx-auto w-full main-container", children: /* @__PURE__ */ jsxs7("div", { className: "p-10 max-w-screen-lg mx-auto", children: [
      /* @__PURE__ */ jsxs7("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsx9("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "The Next-Generation Telescope" }),
        /* @__PURE__ */ jsxs7("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          "Overview of ",
          /* @__PURE__ */ jsx9("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "7DT" })
        ] }),
        /* @__PURE__ */ jsx9("p", { className: "text-content", children: overviewText })
      ] }),
      /* @__PURE__ */ jsx9("div", { children: /* @__PURE__ */ jsx9("img", { src: "/img/overview.png" }) })
    ] }) }),
    /* @__PURE__ */ jsx9(footer_default, {})
  ] });
}, telescope_default = Index4;

// app/routes/location.tsx
var location_exports = {};
__export(location_exports, {
  default: () => location_default
});
import { useState as useState6, useEffect as useEffect7 } from "react";
import { Carousel } from "react-bootstrap";
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
var Index5 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/location.jpg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [index, setIndex] = useState6(0), [submenuTop, setSubmenuTop] = useState6("750px"), [smallWindow, setSmallWindow] = useState6(!0);
  return useEffect7(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, windowHeight = window.innerHeight, newTop = `calc(750px - ${scrollPosition * 0.5 / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), useEffect7(() => {
    let updateWindow = () => {
      window.innerWidth < 1500 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateWindow(), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []), /* @__PURE__ */ jsxs8("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsx10(navigate_default, { manu: "manu7dt" }),
    smallWindow ? /* @__PURE__ */ jsx10("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxs8("ul", { children: [
      /* @__PURE__ */ jsx10("li", { className: "p-2", children: /* @__PURE__ */ jsx10("a", { href: "/telescope", children: "Overview" }) }),
      /* @__PURE__ */ jsx10("li", { className: "p-2 active", children: /* @__PURE__ */ jsx10("a", { href: "#", children: "Location" }) }),
      /* @__PURE__ */ jsx10("li", { className: "p-2", children: /* @__PURE__ */ jsx10("a", { href: "/instrument", children: "Instrument" }) }),
      /* @__PURE__ */ jsx10("li", { className: "p-2", children: /* @__PURE__ */ jsxs8("a", { href: "/server", children: [
        "Computational",
        /* @__PURE__ */ jsx10("br", {}),
        "Resorces"
      ] }) })
    ] }) }) : null,
    /* @__PURE__ */ jsx10("div", { style: backgroundImage, children: /* @__PURE__ */ jsx10("div", { style: { height: "700px" } }) }),
    /* @__PURE__ */ jsx10("div", { className: "mx-auto w-full main-container", children: /* @__PURE__ */ jsxs8("div", { className: "p-10 max-w-screen-lg mx-auto", children: [
      /* @__PURE__ */ jsxs8("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsx10("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Build the Telescope" }),
        /* @__PURE__ */ jsxs8("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          "7DT in ",
          /* @__PURE__ */ jsx10("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Chile" })
        ] })
      ] }),
      /* @__PURE__ */ jsx10("p", { className: "text-content", children: locationText })
    ] }) }),
    /* @__PURE__ */ jsx10(Carousel, { activeIndex: index, onSelect: (selectedIndex, e) => {
      setIndex(selectedIndex);
    }, interval: 3e3, style: { zIndex: 100 }, children: ["c1.jpg", "c2.jpg", "c3.jpg", "c4.jpg", "c5.jpg", "c6.jpg", "c7.jpg"].map((image, idx) => /* @__PURE__ */ jsx10(Carousel.Item, { children: /* @__PURE__ */ jsx10(
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
      }
    ) }, idx)) }),
    /* @__PURE__ */ jsx10(footer_default, {})
  ] });
}, location_default = Index5;

// app/routes/science.tsx
var science_exports = {};
__export(science_exports, {
  default: () => science_default
});
import { useState as useState7, useEffect as useEffect8 } from "react";
import { jsx as jsx11, jsxs as jsxs9 } from "react/jsx-runtime";
var Index6 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/science.jpg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [submenuTop, setSubmenuTop] = useState7("750px"), [smallWindow, setSmallWindow] = useState7(!0);
  return useEffect8(() => {
    let updateWindow = () => {
      window.innerWidth < 1500 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateWindow(), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []), useEffect8(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, windowHeight = window.innerHeight, newTop = `calc(750px - ${scrollPosition * 0.5 / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), /* @__PURE__ */ jsxs9("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsx11(navigate_default, { manu: "manuScience" }),
    /* @__PURE__ */ jsx11("div", { style: backgroundImage, children: /* @__PURE__ */ jsx11("div", { style: { height: "700px" } }) }),
    smallWindow ? /* @__PURE__ */ jsx11("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxs9("ul", { children: [
      /* @__PURE__ */ jsx11("li", { className: "p-2 active", children: /* @__PURE__ */ jsx11("a", { href: "#", children: "Science" }) }),
      /* @__PURE__ */ jsx11("li", { className: "p-2", children: /* @__PURE__ */ jsx11("a", { href: "/publication", children: "Publications" }) })
    ] }) }) : null,
    /* @__PURE__ */ jsx11("div", { className: "mx-auto w-full main-container", children: /* @__PURE__ */ jsx11("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsxs9("div", { className: "justify-between", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
      /* @__PURE__ */ jsx11("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Science" }),
      /* @__PURE__ */ jsxs9("h3", { className: "text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
        "Scientific ",
        /* @__PURE__ */ jsx11("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Goals" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx11(footer_default, {})
  ] });
}, science_default = Index6;

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
import { useEffect as useEffect9, useState as useState8, useRef as useRef2 } from "react";
import { jsx as jsx12, jsxs as jsxs10 } from "react/jsx-runtime";
var MainPage = () => {
  let [smallWindow, setSmallWindow] = useState8(!0), [backgroudImageSet, setBackgroudImageSet] = useState8("fixed"), [scrollPos, setScrollPos] = useState8(0), rulerImageRef = useRef2(!1), rulerImageRefFixed = useRef2(!1);
  useEffect9(() => {
    let updateWindow = () => {
      window.innerWidth < 1200 ? setSmallWindow(!1) : setSmallWindow(!0);
    }, handleScroll = () => {
      let scrollY = window.scrollY;
      setScrollPos(scrollY);
    };
    return updateWindow(), window.addEventListener("scroll", handleScroll), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow), window.removeEventListener("scroll", handleScroll);
    };
  }, []), useEffect9(() => {
    let handleScroll = () => {
      if (rulerImageRef.current) {
        let scrollX = window.scrollY || window.pageYOffset;
        rulerImageRef.current.style.backgroundPositionX = `-${scrollX}px`;
      }
      if (rulerImageRefFixed.current) {
        let scrollX = window.scrollY || window.pageYOffset;
        rulerImageRefFixed.current.style.backgroundPositionX = `-${scrollX}px`;
      }
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundImage: 'url("./img/main.jpg")',
    backgroundAttachment: backgroudImageSet,
    backgroundPosition: "50% 0px"
  }, rulerImage = {
    backgroundSize: "cover",
    backgroundImage: 'url("./img/ruler.jpg")',
    backgroundRepeat: "none repeat-x",
    backgroundPosition: "50% 0px",
    width: "100%",
    height: "40px",
    zIndex: 200
  };
  return useEffect9(() => {
    window.innerWidth < 768 && setBackgroudImageSet("scroll");
  }, []), console.log(backgroundImage), /* @__PURE__ */ jsxs10("div", { children: [
    /* @__PURE__ */ jsx12("div", { style: backgroundImage, children: /* @__PURE__ */ jsx12("div", { className: "w-full", style: { height: "60rem" }, children: /* @__PURE__ */ jsx12("img", { src: "./img/title.png", style: { width: "max(1000px, 70%)", paddingTop: "120px", paddingLeft: "15%" }, alt: "7DT telescope" }) }) }),
    /* @__PURE__ */ jsx12("div", { className: "mx-auto w-full main-container", children: /* @__PURE__ */ jsx12("div", { className: "flex items-center justify-center", style: { maxWidth: "1200px", margin: "0 auto" }, children: /* @__PURE__ */ jsxs10("div", { className: "tilesWrap", children: [
      /* @__PURE__ */ jsxs10("div", { children: [
        /* @__PURE__ */ jsx12("h2", { children: "Intro" }),
        /* @__PURE__ */ jsx12("h3", { children: "Featured Media" }),
        /* @__PURE__ */ jsx12(
          "iframe",
          {
            width: "100%",
            src: "https://www.youtube.com/embed/7Ks4JOwkKe0?si=nHESaCB0GMYHHbea",
            title: "YouTube video player",
            frameBorder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            allowFullScreen: !0,
            className: "iframe-container"
          }
        ),
        /* @__PURE__ */ jsx12("p", { style: { paddingTop: "0px" }, children: mainText1 })
      ] }),
      /* @__PURE__ */ jsxs10("div", { children: [
        /* @__PURE__ */ jsx12("h2", { children: "Science" }),
        /* @__PURE__ */ jsx12("h3", { children: "7 Scientific Goals" }),
        /* @__PURE__ */ jsxs10("tile", { children: [
          /* @__PURE__ */ jsx12("img", { src: "/img/science.jpg" }),
          /* @__PURE__ */ jsx12("p", { children: mainText2 })
        ] }),
        /* @__PURE__ */ jsx12("button", { children: /* @__PURE__ */ jsx12("a", { href: "/science", children: "Read more" }) })
      ] }),
      /* @__PURE__ */ jsxs10("div", { children: [
        /* @__PURE__ */ jsx12("h2", { children: "Survey" }),
        /* @__PURE__ */ jsx12("h3", { children: "7 Dimensional Sky Survey" }),
        /* @__PURE__ */ jsxs10("tile", { children: [
          /* @__PURE__ */ jsx12("img", { src: "/img/overview.png" }),
          /* @__PURE__ */ jsx12("p", { children: "Leveraging both wide-area and high-cadence observation strategies, the 7 Dimensional Survey (7DS) delves into previously unexplored cosmic realms by dedicated working groups." })
        ] }),
        /* @__PURE__ */ jsx12("button", { children: /* @__PURE__ */ jsx12("a", { href: "/survey", children: "Read more" }) })
      ] }),
      /* @__PURE__ */ jsxs10("div", { children: [
        /* @__PURE__ */ jsx12("h2", { children: "Facilities" }),
        /* @__PURE__ */ jsx12("h3", { children: "7 Dimensional Telescope" }),
        /* @__PURE__ */ jsxs10("tile", { children: [
          /* @__PURE__ */ jsx12("img", { src: "/img/7dt.jpg" }),
          /* @__PURE__ */ jsx12("p", { children: "The 7-Dimensional Telescope (7DT), a pioneering multi-telescope system, comprises 20 individual telescopes, each with a 50cm diameter, strategically positioned at Chile." })
        ] }),
        /* @__PURE__ */ jsx12("button", { children: /* @__PURE__ */ jsx12("a", { href: "/telescope", children: "Read more" }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx12("div", { style: { backgroundColor: "#fff" }, children: /* @__PURE__ */ jsxs10("div", { className: "mx-auto w-full", style: { maxWidth: "1440px", margin: "0 auto", padding: "30px 10vw 0px 10vw" }, children: [
      /* @__PURE__ */ jsxs10("div", { className: "justify-center mb-5", style: { maxWidth: "1200px", margin: "0 auto", color: "--pickled-bluewood-900" }, children: [
        /* @__PURE__ */ jsx12("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Meet our" }),
        /* @__PURE__ */ jsxs10("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          "Latest ",
          /* @__PURE__ */ jsx12("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "News" })
        ] })
      ] }),
      /* @__PURE__ */ jsx12("div", { className: "flex flex-wrap items-center justify-center", style: { maxWidth: "1200px", margin: "0 auto", marginBottom: "5rem", textAlign: "center" }, children: news_default.news.map((news, index) => {
        if (index = index + 1, index <= 3)
          return /* @__PURE__ */ jsxs10("div", { className: `card card-${index}`, children: [
            /* @__PURE__ */ jsx12("img", { src: `./img/news/${news.imgName}` }),
            /* @__PURE__ */ jsx12("a", { href: news.webpage, target: "_blank", children: /* @__PURE__ */ jsx12("div", { className: "card-img-hovered", style: { backgroundImage: `var(--card-img-hovered-overlay), url(./img/news/${news.imgName})` } }) }),
            /* @__PURE__ */ jsxs10("div", { className: "card-info", children: [
              /* @__PURE__ */ jsxs10("div", { className: "card-about", children: [
                /* @__PURE__ */ jsx12("a", { className: `card-tag ${news.type === "meeting" ? "tag-news" : news.type === "publication" ? "tag-publication" : news.type === "press" ? "tag-press" : null}`, children: news.type }),
                /* @__PURE__ */ jsx12("div", { className: "card-time", children: news.date })
              ] }),
              /* @__PURE__ */ jsx12("h1", { className: "card-title", children: news.title }),
              news.type === "meeting" ? /* @__PURE__ */ jsxs10("div", { className: "card-creator", children: [
                "in ",
                /* @__PURE__ */ jsx12("a", { href: "", children: news.place })
              ] }) : news.type === "publication" ? /* @__PURE__ */ jsxs10("div", { className: "card-creator", children: [
                "by ",
                /* @__PURE__ */ jsx12("a", { href: "", children: news.shortAuthor })
              ] }) : /* @__PURE__ */ jsxs10("div", { className: "card-creator", children: [
                "by ",
                /* @__PURE__ */ jsx12("a", { href: "", children: news.source })
              ] })
            ] })
          ] }, `card-${index}`);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx12("div", { ref: rulerImageRef, style: { ...rulerImage, position: "fixed", bottom: "0" } })
  ] });
}, main_default = MainPage;

// app/routes/_index.tsx
import { jsx as jsx13, jsxs as jsxs11 } from "react/jsx-runtime";
var meta = () => [
  { title: "7-dimensional telescope" },
  { name: "description", content: "7-dimensional telescope" }
], Index7 = () => /* @__PURE__ */ jsxs11("div", { style: { background: "#fff" }, children: [
  /* @__PURE__ */ jsx13(navigate_default, { manu: "manuHome" }),
  /* @__PURE__ */ jsx13(main_default, {}),
  /* @__PURE__ */ jsx13(footer_default, {})
] }), index_default = Index7;

// app/routes/images.tsx
var images_exports = {};
__export(images_exports, {
  default: () => images_default2
});
import { useState as useState9, useEffect as useEffect10 } from "react";
import { Pagination as Pagination3 } from "flowbite-react";

// app/routes/content/images.json
var images_default = [
  {
    name: "The 7-Dimensional Telescope.",
    file: "Figure1_7DT.jpeg"
  },
  {
    name: "Another view of the 7-Dimensional Telescope.",
    file: "Figure2_7DT.jpg"
  },
  {
    name: "The 7-Dimensional Telescope in action at night. ",
    file: "Figure3_7DTatNight.JPG"
  },
  {
    name: "Image of the Sculptor Galaxy (NGC 253) ",
    file: "Figure4_NGC0253.jpg"
  },
  {
    name: "An image demonstrating the field of view of the 7-Dimensional Telescope. ",
    file: "Figure5_NGC253+6moon.jpg"
  },
  {
    name: "Pseudo-color composite Image of the Helix Nebula",
    file: "Figure7_Helix_Nebula_Zoomin.jpeg"
  },
  {
    name: "Pseudo-color Images of the Helix Nebula taken at wavelengths of 370 nm, 500 nm, and 650 nm, corresponding to blue, green, and red.",
    file: "Figure8a(lowres)_u-500-650_asinh.png"
  },
  {
    name: "Pseudo-color image of the Trifid Nebula.",
    file: "Figure9(lowres)_NGC6514_RGB.jpg"
  }
];

// app/routes/images.tsx
import { jsx as jsx14, jsxs as jsxs12 } from "react/jsx-runtime";
var Index8 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/data.jpg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [submenuTop, setSubmenuTop] = useState9("200px"), [smallWindow, setSmallWindow] = useState9(!0), [currentPage, setCurrentPage] = useState9(1), imagesPerPage = 6, totalPages = Math.ceil(images_default.length / imagesPerPage), paginatedImages = images_default.slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage), onPageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return useEffect10(() => {
    let updateWindow = () => {
      window.innerWidth < 1500 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateWindow(), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []), useEffect10(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, windowHeight = window.innerHeight, newTop = `calc(200px - ${scrollPosition * -0.1 / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), console.log(images_default), /* @__PURE__ */ jsxs12("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsx14(navigate_default, { manu: "manuData", fixed: !0 }),
    smallWindow ? /* @__PURE__ */ jsx14("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxs12("ul", { children: [
      /* @__PURE__ */ jsx14("li", { className: "p-2", children: /* @__PURE__ */ jsx14("a", { href: "/data", children: "Survey Data" }) }),
      /* @__PURE__ */ jsx14("li", { className: "p-2", children: /* @__PURE__ */ jsx14("a", { href: "/nonsurvey", children: "Non-Survey" }) }),
      /* @__PURE__ */ jsx14("li", { className: "p-2 active", children: /* @__PURE__ */ jsx14("a", { href: "#", children: "Images" }) })
    ] }) }) : null,
    /* @__PURE__ */ jsx14("div", { className: "mx-auto w-full main-container", children: /* @__PURE__ */ jsxs12("div", { className: "p-10 max-w-screen-lg mx-auto", children: [
      /* @__PURE__ */ jsxs12("div", { className: "justify-between", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsx14("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Beautiful Universe" }),
        /* @__PURE__ */ jsxs12("h3", { className: "text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          /* @__PURE__ */ jsx14("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Image" }),
          " Archive"
        ] })
      ] }),
      /* @__PURE__ */ jsx14("div", { className: "gallery", children: /* @__PURE__ */ jsx14("ul", { children: paginatedImages.map((img, index) => /* @__PURE__ */ jsx14("li", { children: /* @__PURE__ */ jsx14("a", { href: `./img/images/${img.file}`, children: /* @__PURE__ */ jsxs12("figure", { children: [
        /* @__PURE__ */ jsx14("img", { src: `./img/images/${img.file}` }),
        /* @__PURE__ */ jsx14("figcaption", { children: img.name })
      ] }) }) }, index)) }) }),
      /* @__PURE__ */ jsx14("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsx14(Pagination3, { currentPage, totalPages, onPageChange }) })
    ] }) }),
    /* @__PURE__ */ jsx14(footer_default, {})
  ] });
}, images_default2 = Index8;

// app/routes/server.tsx
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});
import { useState as useState10, useEffect as useEffect11 } from "react";
import { jsx as jsx15, jsxs as jsxs13 } from "react/jsx-runtime";
var Index9 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/status.png")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% -100px"
  }, [submenuTop, setSubmenuTop] = useState10("750px"), [smallWindow, setSmallWindow] = useState10(!0);
  return useEffect11(() => {
    let updateWindow = () => {
      window.innerWidth < 1500 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateWindow(), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []), useEffect11(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, windowHeight = window.innerHeight, newTop = `calc(750px - ${scrollPosition * 0.5 / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), /* @__PURE__ */ jsxs13("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsx15(navigate_default, { manu: "manu7dt" }),
    /* @__PURE__ */ jsx15("div", { style: backgroundImage, children: /* @__PURE__ */ jsx15("div", { style: { height: "700px" } }) }),
    smallWindow ? /* @__PURE__ */ jsx15("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxs13("ul", { children: [
      /* @__PURE__ */ jsx15("li", { className: "p-2", children: /* @__PURE__ */ jsx15("a", { href: "/telescope", children: "Overview" }) }),
      /* @__PURE__ */ jsx15("li", { className: "p-2", children: /* @__PURE__ */ jsx15("a", { href: "/location", children: "Location" }) }),
      /* @__PURE__ */ jsx15("li", { className: "p-2", children: /* @__PURE__ */ jsx15("a", { href: "/instrument", children: "Instrument" }) }),
      /* @__PURE__ */ jsx15("li", { className: "p-2 active", children: /* @__PURE__ */ jsxs13("a", { href: "#", children: [
        "Computational",
        /* @__PURE__ */ jsx15("br", {}),
        "Resorces"
      ] }) })
    ] }) }) : null,
    /* @__PURE__ */ jsx15("div", { className: "mx-auto w-full main-container", children: /* @__PURE__ */ jsx15("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsxs13("div", { className: "justify-between", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
      /* @__PURE__ */ jsx15("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Center for Machine Learning Viability" }),
      /* @__PURE__ */ jsxs13("h3", { className: "text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
        /* @__PURE__ */ jsx15("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Computational" }),
        " Resorces"
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx15(footer_default, {})
  ] });
}, server_default = Index9;

// app/routes/status.tsx
var status_exports = {};
__export(status_exports, {
  default: () => status_default
});
import { useState as useState11, useEffect as useEffect12 } from "react";
import { jsx as jsx16, jsxs as jsxs14 } from "react/jsx-runtime";
var Index10 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/status.png")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% -100px"
  }, [submenuTop, setSubmenuTop] = useState11("750px"), [smallWindow, setSmallWindow] = useState11(!0);
  return useEffect12(() => {
    let updateWindow = () => {
      window.innerWidth < 1500 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateWindow(), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []), useEffect12(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, windowHeight = window.innerHeight, newTop = `calc(750px - ${scrollPosition * 0.5 / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), /* @__PURE__ */ jsxs14("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsx16(navigate_default, { manu: "manu7ds" }),
    /* @__PURE__ */ jsx16("div", { style: backgroundImage, children: /* @__PURE__ */ jsx16("div", { style: { height: "700px" } }) }),
    smallWindow ? /* @__PURE__ */ jsx16("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxs14("ul", { children: [
      /* @__PURE__ */ jsx16("li", { className: "p-2", children: /* @__PURE__ */ jsx16("a", { href: "/survey", children: "Survey" }) }),
      /* @__PURE__ */ jsx16("li", { className: "p-2 active", children: /* @__PURE__ */ jsx16("a", { href: "#", children: "Status" }) }),
      /* @__PURE__ */ jsx16("li", { className: "p-2", children: /* @__PURE__ */ jsx16("a", { href: "/data", children: "Working Group" }) })
    ] }) }) : null,
    /* @__PURE__ */ jsx16("div", { className: "mx-auto w-full main-container", children: /* @__PURE__ */ jsx16("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsxs14("div", { className: "justify-between", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
      /* @__PURE__ */ jsx16("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Observational Conditions" }),
      /* @__PURE__ */ jsxs14("h3", { className: "text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
        "7DT ",
        /* @__PURE__ */ jsx16("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Status" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx16(footer_default, {})
  ] });
}, status_default = Index10;

// app/routes/survey.tsx
var survey_exports = {};
__export(survey_exports, {
  default: () => survey_default
});
import { useState as useState12, useEffect as useEffect13 } from "react";
import { jsx as jsx17, jsxs as jsxs15 } from "react/jsx-runtime";
var Index11 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/survey.jpeg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [submenuTop, setSubmenuTop] = useState12("750px"), [smallWindow, setSmallWindow] = useState12(!0);
  return useEffect13(() => {
    let updateWindow = () => {
      window.innerWidth < 1500 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateWindow(), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []), useEffect13(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, windowHeight = window.innerHeight, newTop = `calc(750px - ${scrollPosition * 0.5 / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), /* @__PURE__ */ jsxs15("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsx17(navigate_default, { manu: "manu7ds" }),
    /* @__PURE__ */ jsx17("div", { style: backgroundImage, children: /* @__PURE__ */ jsx17("div", { style: { height: "700px" } }) }),
    smallWindow && /* @__PURE__ */ jsx17("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxs15("ul", { children: [
      /* @__PURE__ */ jsx17("li", { className: "p-2 active", children: /* @__PURE__ */ jsx17("a", { href: "#", children: "Survey" }) }),
      /* @__PURE__ */ jsx17("li", { className: "p-2", children: /* @__PURE__ */ jsx17("a", { href: "/status", children: "Status" }) }),
      /* @__PURE__ */ jsx17("li", { className: "p-2", children: /* @__PURE__ */ jsx17("a", { href: "/group", children: "Working Group" }) })
    ] }) }),
    /* @__PURE__ */ jsx17("div", { className: "mx-auto w-full main-container", children: /* @__PURE__ */ jsx17("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsxs15("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
      /* @__PURE__ */ jsx17("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Wide-area and High-cadence Survey" }),
      /* @__PURE__ */ jsxs15("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
        "Overview of ",
        /* @__PURE__ */ jsx17("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "7DS" })
      ] }),
      /* @__PURE__ */ jsx17("p", { className: "text-content", children: surveyText })
    ] }) }) }),
    /* @__PURE__ */ jsx17(footer_default, {})
  ] });
}, survey_default = Index11;

// app/routes/group.tsx
var group_exports = {};
__export(group_exports, {
  default: () => group_default
});
import { useState as useState13, useEffect as useEffect14 } from "react";
import { jsx as jsx18, jsxs as jsxs16 } from "react/jsx-runtime";
var Index12 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/group.jpg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [submenuTop, setSubmenuTop] = useState13("200px"), [smallWindow, setSmallWindow] = useState13(!0);
  return useEffect14(() => {
    let updateWindow = () => {
      window.innerWidth < 1500 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateWindow(), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []), useEffect14(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, windowHeight = window.innerHeight, newTop = `calc(200px - ${scrollPosition * -0.1 / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), /* @__PURE__ */ jsxs16("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsx18(navigate_default, { manu: "manu7ds", fixed: !0 }),
    smallWindow ? /* @__PURE__ */ jsx18("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxs16("ul", { children: [
      /* @__PURE__ */ jsx18("li", { className: "p-2", children: /* @__PURE__ */ jsx18("a", { href: "/survey", children: "Survey" }) }),
      /* @__PURE__ */ jsx18("li", { className: "p-2", children: /* @__PURE__ */ jsx18("a", { href: "/status", children: "Status" }) }),
      /* @__PURE__ */ jsx18("li", { className: "p-2 active", children: /* @__PURE__ */ jsx18("a", { href: "#", children: "Working Group" }) })
    ] }) }) : null,
    /* @__PURE__ */ jsxs16("div", { className: "mx-auto w-full main-container", children: [
      /* @__PURE__ */ jsx18("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsxs16("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsx18("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Explore a Deeper Universe" }),
        /* @__PURE__ */ jsxs16("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          /* @__PURE__ */ jsx18("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Survey" }),
          " Group"
        ] })
      ] }) }),
      /* @__PURE__ */ jsx18("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsxs16("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsx18("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Follow-up Multimessengers" }),
        /* @__PURE__ */ jsxs16("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          /* @__PURE__ */ jsx18("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Transient" }),
          " Group"
        ] })
      ] }) }),
      /* @__PURE__ */ jsx18("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsxs16("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsx18("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Shed Light on the Origin of Universe" }),
        /* @__PURE__ */ jsxs16("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          /* @__PURE__ */ jsx18("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Cosmology" }),
          " Group"
        ] })
      ] }) }),
      /* @__PURE__ */ jsx18("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ jsxs16("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsx18("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Study with the State-Of-Art technique" }),
        /* @__PURE__ */ jsxs16("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          /* @__PURE__ */ jsx18("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Machine Learning" }),
          " Group"
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx18(footer_default, {})
  ] });
}, group_default = Index12;

// app/routes/data.tsx
var data_exports = {};
__export(data_exports, {
  default: () => data_default2
});
import { useState as useState14, useEffect as useEffect15 } from "react";
import { Table as Table2 } from "flowbite-react";
import { Pagination as Pagination4 } from "flowbite-react";
import { jsx as jsx19, jsxs as jsxs17 } from "react/jsx-runtime";
var Index13 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/data.jpg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [submenuTop, setSubmenuTop] = useState14("200px"), [smallWindow, setSmallWindow] = useState14(!0);
  useEffect15(() => {
    let updateWindow = () => {
      window.innerWidth < 1500 ? setSmallWindow(!1) : setSmallWindow(!0);
    };
    return updateWindow(), window.addEventListener("resize", updateWindow), () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []), useEffect15(() => {
    let handleScroll = () => {
      let scrollPosition = window.scrollY, windowHeight = window.innerHeight, newTop = `calc(200px - ${scrollPosition * -0.1 / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let [currentPage, setCurrentPage] = useState14(1), rowsPerPage = 10, totalRows = data_default.length, totalPages = Math.ceil(totalRows / rowsPerPage), onPageChange = (page) => {
    setCurrentPage(page);
  }, paginatedData = data_default.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  return /* @__PURE__ */ jsxs17("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsx19(navigate_default, { manu: "manuData", fixed: !0 }),
    smallWindow ? /* @__PURE__ */ jsx19("div", { className: "submenu", style: { top: submenuTop }, children: /* @__PURE__ */ jsxs17("ul", { children: [
      /* @__PURE__ */ jsx19("li", { className: "p-2 active", children: /* @__PURE__ */ jsx19("a", { href: "#", children: "Survey Data" }) }),
      /* @__PURE__ */ jsx19("li", { className: "p-2", children: /* @__PURE__ */ jsx19("a", { href: "/nonsurvey", children: "Non-Survey" }) }),
      /* @__PURE__ */ jsx19("li", { className: "p-2", children: /* @__PURE__ */ jsx19("a", { href: "/images", children: "Images" }) })
    ] }) }) : null,
    /* @__PURE__ */ jsx19("div", { className: "mx-auto w-full main-container", children: /* @__PURE__ */ jsxs17("div", { className: "p-10 max-w-screen-lg mx-auto", children: [
      /* @__PURE__ */ jsxs17("div", { className: "justify-between", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsx19("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Invaluable Observations" }),
        /* @__PURE__ */ jsxs17("h3", { className: "text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          /* @__PURE__ */ jsx19("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Data" }),
          " Archive"
        ] })
      ] }),
      /* @__PURE__ */ jsx19("div", { className: "flex w-full justify-center", children: /* @__PURE__ */ jsx19(plot_default, { data: data_default, height: "400", width: "800" }) }),
      /* @__PURE__ */ jsxs17(Table2, { striped: !0, children: [
        /* @__PURE__ */ jsxs17(Table2.Head, { children: [
          /* @__PURE__ */ jsx19(Table2.HeadCell, { children: "Target" }),
          /* @__PURE__ */ jsx19(Table2.HeadCell, { children: "R.A." }),
          /* @__PURE__ */ jsx19(Table2.HeadCell, { children: "Dec." }),
          /* @__PURE__ */ jsx19(Table2.HeadCell, { children: "Exposure" }),
          /* @__PURE__ */ jsx19(Table2.HeadCell, { children: "Significance" }),
          /* @__PURE__ */ jsx19(Table2.HeadCell, { children: "Details" })
        ] }),
        /* @__PURE__ */ jsx19(Table2.Body, { className: "divide-y", children: paginatedData.map((d, index) => /* @__PURE__ */ jsxs17(Table2.Row, { className: "bg-white dark:border-gray-700 dark:bg-gray-800", children: [
          /* @__PURE__ */ jsx19(Table2.Cell, { className: "whitespace-nowrap font-medium text-gray-900 dark:text-white", children: d.name }),
          /* @__PURE__ */ jsx19(Table2.Cell, { children: d.ra }),
          /* @__PURE__ */ jsx19(Table2.Cell, { children: d.dec }),
          /* @__PURE__ */ jsx19(Table2.Cell, { children: d.exposure }),
          /* @__PURE__ */ jsx19(Table2.Cell, { children: d.sigma }),
          /* @__PURE__ */ jsx19(Table2.Cell, { children: d.ref === !1 ? /* @__PURE__ */ jsx19("a", { href: "mailto:mim@astro.snu.ac.kr", className: "font-medium text-cyan-600 hover:underline dark:text-cyan-500", children: "Contact" }) : /* @__PURE__ */ jsx19("a", { href: d.ref, className: "font-medium text-cyan-600 hover:underline dark:text-cyan-500", children: "Link" }) })
        ] })) })
      ] }),
      /* @__PURE__ */ jsx19("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsx19(Pagination4, { currentPage, totalPages, onPageChange }) })
    ] }) }),
    /* @__PURE__ */ jsx19(footer_default, {})
  ] });
}, data_default2 = Index13;

// app/routes/news.tsx
var news_exports = {};
__export(news_exports, {
  default: () => news_default2
});
import { useState as useState15 } from "react";
import { Pagination as Pagination5 } from "flowbite-react";
import { jsx as jsx20, jsxs as jsxs18 } from "react/jsx-runtime";
var Index14 = () => {
  let backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/news.png")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, [currentPage, setCurrentPage] = useState15(1), [selectedTypes, setSelectedTypes] = useState15(["press", "publication", "meeting", "update"]), newsPerPage = 3, toggleType = (type) => {
    selectedTypes.includes(type) ? setSelectedTypes(selectedTypes.filter((t) => t !== type)) : setSelectedTypes([...selectedTypes, type]);
  }, filteredNews = selectedTypes.length > 0 ? news_default.news.filter((item) => selectedTypes.includes(item.type)) : news_default.news, totalPages = Math.ceil(filteredNews.length / newsPerPage), indexOfLastNews = currentPage * newsPerPage, indexOfFirstNews = indexOfLastNews - newsPerPage, currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews), onPageChange = (page) => setCurrentPage(page);
  return /* @__PURE__ */ jsxs18("div", { style: { background: "#fff" }, children: [
    /* @__PURE__ */ jsx20(navigate_default, { manu: "manuNews", fixed: !0 }),
    /* @__PURE__ */ jsx20("div", { className: "mx-auto w-full main-container", children: /* @__PURE__ */ jsxs18("div", { className: "p-10 max-w-screen-lg mx-auto", children: [
      /* @__PURE__ */ jsxs18("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsx20("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "A Bunch of Intriguing Updates" }),
        /* @__PURE__ */ jsxs18("h3", { className: "text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
          "Latest ",
          /* @__PURE__ */ jsx20("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "News" })
        ] })
      ] }),
      /* @__PURE__ */ jsx20("div", { className: "flex justify-center mr-7 ml-7", children: /* @__PURE__ */ jsx20("ul", { className: "items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex ", children: ["press", "publication", "meeting", "update"].map((type, index) => /* @__PURE__ */ jsx20("li", { className: "w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600", children: /* @__PURE__ */ jsxs18("div", { className: "flex items-center ps-3", children: [
        /* @__PURE__ */ jsx20("input", { id: `${type}-checkbox-list`, type: "checkbox", value: "1", className: `w-4 h-4 text-${type}-color bg-gray-100 border-gray-300 rounded focus:ring-blue-500`, checked: selectedTypes.includes(type), onChange: () => toggleType(type) }),
        /* @__PURE__ */ jsx20("label", { htmlFor: `${type}-checkbox-list`, className: "w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300", style: { textTransform: "uppercase" }, children: type })
      ] }) }, index)) }) }),
      /* @__PURE__ */ jsxs18("div", { className: "flex flex-wrap items-center justify-center", style: { maxWidth: "1200px", margin: "0 auto", marginBottom: "5rem", textAlign: "center" }, children: [
        currentNews.map((news, index) => (index = index + 1, /* @__PURE__ */ jsx20("div", { className: `news news-${index}`, children: /* @__PURE__ */ jsxs18("div", { className: "news-content", children: [
          /* @__PURE__ */ jsxs18("div", { className: "news-img-container", children: [
            /* @__PURE__ */ jsx20("img", { src: `./img/news/${news.imgName}`, alt: "News Image" }),
            /* @__PURE__ */ jsx20("a", { href: "", className: "news-img-hovered", style: { backgroundImage: `var(--news-img-hovered-overlay), url(./img/news/${news.imgName})` } })
          ] }),
          /* @__PURE__ */ jsxs18("div", { className: "news-info", children: [
            /* @__PURE__ */ jsxs18("div", { className: "news-about", children: [
              /* @__PURE__ */ jsx20("a", { className: `news-tag ${news.type === "meeting" ? "tag-news" : news.type === "publication" ? "tag-publication" : news.type === "press" ? "tag-press" : null}`, children: news.type }),
              /* @__PURE__ */ jsx20("div", { className: "news-time", children: news.date })
            ] }),
            /* @__PURE__ */ jsx20("h1", { className: "news-title", children: news.title }),
            news.type === "meeting" ? /* @__PURE__ */ jsxs18("div", { className: "news-creator", children: [
              "in ",
              /* @__PURE__ */ jsx20("a", { href: "", children: news.place })
            ] }) : news.type === "publication" ? /* @__PURE__ */ jsxs18("div", { className: "news-creator", children: [
              "by ",
              /* @__PURE__ */ jsx20("a", { href: "", children: news.shortAuthor })
            ] }) : /* @__PURE__ */ jsxs18("div", { className: "news-creator", children: [
              "by ",
              /* @__PURE__ */ jsx20("a", { href: "", children: news.source })
            ] }),
            news.webpage ? /* @__PURE__ */ jsx20("a", { href: news.webpage, className: "details-button", target: "_blank", children: "Details \u25B6" }) : null
          ] })
        ] }) }, `news-${index}`))),
        /* @__PURE__ */ jsx20("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsx20(Pagination5, { currentPage, totalPages, onPageChange }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx20(footer_default, {})
  ] });
}, news_default2 = Index14;

// app/routes/team.tsx
var team_exports = {};
__export(team_exports, {
  default: () => team_default2
});

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
import { jsx as jsx21, jsxs as jsxs19 } from "react/jsx-runtime";
var Index15 = () => /* @__PURE__ */ jsxs19("div", { style: { background: "#fff" }, children: [
  /* @__PURE__ */ jsx21(navigate_default, { manu: "manuTeam" }),
  /* @__PURE__ */ jsx21("div", { style: {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/team.jpeg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  }, children: /* @__PURE__ */ jsx21("div", { style: { height: "700px" } }) }),
  /* @__PURE__ */ jsx21("div", { className: "mx-auto w-full m,main-container", children: /* @__PURE__ */ jsxs19("div", { className: "p-10 max-w-screen-lg mx-auto", children: [
    /* @__PURE__ */ jsxs19("div", { className: "justify-between mb-5", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
      /* @__PURE__ */ jsx21("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: { textAlign: "center" }, children: "Introducing" }),
      /* @__PURE__ */ jsxs19("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: { textAlign: "center", fontWeight: "700", color: "var(--pickled-bluewood-900)" }, children: [
        "Our ",
        /* @__PURE__ */ jsx21("span", { style: { color: "var(--pickled-bluewood-600)" }, children: "Team" })
      ] })
    ] }),
    /* @__PURE__ */ jsx21("div", { className: "sm:grid grid-cols-2 gap-6 my-10", children: team_default.members.map((member, index) => /* @__PURE__ */ jsxs19("div", { className: "max-w-sm w-full lg:max-w-full lg:flex mx-auto my-10", children: [
      /* @__PURE__ */ jsx21(
        "div",
        {
          className: "h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden",
          style: { backgroundImage: `url(./img/team/${member.imgName})`, backgroundPosition: "center" }
        }
      ),
      /* @__PURE__ */ jsx21("div", { className: "border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4", children: /* @__PURE__ */ jsxs19("div", { children: [
        /* @__PURE__ */ jsx21(
          "a",
          {
            href: "mailto:" + member.email,
            className: "text-gray-900 font-bold text-xl mb-2 hover:text-bluewood-600 transition duration-500 ease-in-out",
            children: member.name
          }
        ),
        /* @__PURE__ */ jsx21("p", { className: "text-sm text-gray-600", children: member.title }),
        /* @__PURE__ */ jsx21("p", { className: "text-gray-900 font-bold text-base mt-4", children: "Major" }),
        /* @__PURE__ */ jsx21("p", { className: "text-sm text-gray-600", children: member.major }),
        /* @__PURE__ */ jsx21("p", { className: "text-gray-900 font-bold text-base mt-4", children: "Affiliation" }),
        /* @__PURE__ */ jsx21("p", { className: "text-sm text-gray-600", children: member.affiliation }),
        /* @__PURE__ */ jsxs19("div", { className: "my-4 flex", children: [
          member.webpage && /* @__PURE__ */ jsx21("a", { className: "mr-3", href: member.webpage, children: /* @__PURE__ */ jsx21("svg", { className: "w-6 h-6 text-gray-800 dark:text-white", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx21("path", { fillRule: "evenodd", d: "M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z", clipRule: "evenodd" }) }) }),
          /* @__PURE__ */ jsx21("a", { className: "mr-3", href: "mailto:" + member.email, children: /* @__PURE__ */ jsx21("i", { className: "fa fa-envelope" }) }),
          member.orcid && /* @__PURE__ */ jsx21("a", { className: "mr-3 flex items-center", href: member.orcid, children: /* @__PURE__ */ jsx21("img", { alt: "ORCID logo", src: "https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png", width: "16px", height: "16px" }) })
        ] })
      ] }) })
    ] }, index)) })
  ] }) }),
  /* @__PURE__ */ jsx21(footer_default, {})
] }), team_default2 = Index15;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-AITFHW7L.js", imports: ["/build/_shared/chunk-JFFONA33.js", "/build/_shared/chunk-3RVWVZ2O.js", "/build/_shared/chunk-DWFMXSZ6.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-EYVGXLIC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-MAGRFFCQ.js", imports: ["/build/_shared/chunk-QD2QECUV.js", "/build/_shared/chunk-AEU4PSZ2.js", "/build/_shared/chunk-UBUR7GQJ.js", "/build/_shared/chunk-NYOPF2AR.js", "/build/_shared/chunk-ARMGUE6S.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/data": { id: "routes/data", parentId: "root", path: "data", index: void 0, caseSensitive: void 0, module: "/build/routes/data-DDU3PCVG.js", imports: ["/build/_shared/chunk-H3RFQF4Y.js", "/build/_shared/chunk-XKS22JWY.js", "/build/_shared/chunk-X4KODEMR.js", "/build/_shared/chunk-NYOPF2AR.js", "/build/_shared/chunk-ARMGUE6S.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/footer": { id: "routes/footer", parentId: "root", path: "footer", index: void 0, caseSensitive: void 0, module: "/build/routes/footer-3IS4OHNP.js", imports: ["/build/_shared/chunk-NYOPF2AR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/group": { id: "routes/group", parentId: "root", path: "group", index: void 0, caseSensitive: void 0, module: "/build/routes/group-YNPETBTP.js", imports: ["/build/_shared/chunk-NYOPF2AR.js", "/build/_shared/chunk-ARMGUE6S.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/images": { id: "routes/images", parentId: "root", path: "images", index: void 0, caseSensitive: void 0, module: "/build/routes/images-NU57EYN6.js", imports: ["/build/_shared/chunk-X4KODEMR.js", "/build/_shared/chunk-NYOPF2AR.js", "/build/_shared/chunk-ARMGUE6S.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/instrument": { id: "routes/instrument", parentId: "root", path: "instrument", index: void 0, caseSensitive: void 0, module: "/build/routes/instrument-QDL3DZNR.js", imports: ["/build/_shared/chunk-NYOPF2AR.js", "/build/_shared/chunk-ARMGUE6S.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/location": { id: "routes/location", parentId: "root", path: "location", index: void 0, caseSensitive: void 0, module: "/build/routes/location-DCLAJUGZ.js", imports: ["/build/_shared/chunk-UBUR7GQJ.js", "/build/_shared/chunk-NYOPF2AR.js", "/build/_shared/chunk-ARMGUE6S.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/main": { id: "routes/main", parentId: "root", path: "main", index: void 0, caseSensitive: void 0, module: "/build/routes/main-RDJ5RGYF.js", imports: ["/build/_shared/chunk-QD2QECUV.js", "/build/_shared/chunk-AEU4PSZ2.js", "/build/_shared/chunk-UBUR7GQJ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/navigate": { id: "routes/navigate", parentId: "root", path: "navigate", index: void 0, caseSensitive: void 0, module: "/build/routes/navigate-N3EEG3EP.js", imports: ["/build/_shared/chunk-ARMGUE6S.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/news": { id: "routes/news", parentId: "root", path: "news", index: void 0, caseSensitive: void 0, module: "/build/routes/news-GZQ4KSNP.js", imports: ["/build/_shared/chunk-AEU4PSZ2.js", "/build/_shared/chunk-X4KODEMR.js", "/build/_shared/chunk-NYOPF2AR.js", "/build/_shared/chunk-ARMGUE6S.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/nonsurvey": { id: "routes/nonsurvey", parentId: "root", path: "nonsurvey", index: void 0, caseSensitive: void 0, module: "/build/routes/nonsurvey-PLDHGLCA.js", imports: ["/build/_shared/chunk-H3RFQF4Y.js", "/build/_shared/chunk-XKS22JWY.js", "/build/_shared/chunk-X4KODEMR.js", "/build/_shared/chunk-NYOPF2AR.js", "/build/_shared/chunk-ARMGUE6S.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/plot": { id: "routes/plot", parentId: "root", path: "plot", index: void 0, caseSensitive: void 0, module: "/build/routes/plot-VWHBGLH7.js", imports: ["/build/_shared/chunk-XKS22JWY.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/publication": { id: "routes/publication", parentId: "root", path: "publication", index: void 0, caseSensitive: void 0, module: "/build/routes/publication-MEJRWVWD.js", imports: ["/build/_shared/chunk-AEU4PSZ2.js", "/build/_shared/chunk-X4KODEMR.js", "/build/_shared/chunk-NYOPF2AR.js", "/build/_shared/chunk-ARMGUE6S.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/science": { id: "routes/science", parentId: "root", path: "science", index: void 0, caseSensitive: void 0, module: "/build/routes/science-25KINR75.js", imports: ["/build/_shared/chunk-NYOPF2AR.js", "/build/_shared/chunk-ARMGUE6S.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/server": { id: "routes/server", parentId: "root", path: "server", index: void 0, caseSensitive: void 0, module: "/build/routes/server-O3L22BMT.js", imports: ["/build/_shared/chunk-NYOPF2AR.js", "/build/_shared/chunk-ARMGUE6S.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/status": { id: "routes/status", parentId: "root", path: "status", index: void 0, caseSensitive: void 0, module: "/build/routes/status-OFYUCO6M.js", imports: ["/build/_shared/chunk-NYOPF2AR.js", "/build/_shared/chunk-ARMGUE6S.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/survey": { id: "routes/survey", parentId: "root", path: "survey", index: void 0, caseSensitive: void 0, module: "/build/routes/survey-DAGNUC2Z.js", imports: ["/build/_shared/chunk-UBUR7GQJ.js", "/build/_shared/chunk-NYOPF2AR.js", "/build/_shared/chunk-ARMGUE6S.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/team": { id: "routes/team", parentId: "root", path: "team", index: void 0, caseSensitive: void 0, module: "/build/routes/team-HF2AOXHA.js", imports: ["/build/_shared/chunk-NYOPF2AR.js", "/build/_shared/chunk-ARMGUE6S.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/telescope": { id: "routes/telescope", parentId: "root", path: "telescope", index: void 0, caseSensitive: void 0, module: "/build/routes/telescope-JGIDKHGA.js", imports: ["/build/_shared/chunk-UBUR7GQJ.js", "/build/_shared/chunk-NYOPF2AR.js", "/build/_shared/chunk-ARMGUE6S.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "bfb36bb3", hmr: void 0, url: "/build/manifest-BFB36BB3.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/publication": {
    id: "routes/publication",
    parentId: "root",
    path: "publication",
    index: void 0,
    caseSensitive: void 0,
    module: publication_exports
  },
  "routes/instrument": {
    id: "routes/instrument",
    parentId: "root",
    path: "instrument",
    index: void 0,
    caseSensitive: void 0,
    module: instrument_exports
  },
  "routes/nonsurvey": {
    id: "routes/nonsurvey",
    parentId: "root",
    path: "nonsurvey",
    index: void 0,
    caseSensitive: void 0,
    module: nonsurvey_exports
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
  "routes/images": {
    id: "routes/images",
    parentId: "root",
    path: "images",
    index: void 0,
    caseSensitive: void 0,
    module: images_exports
  },
  "routes/server": {
    id: "routes/server",
    parentId: "root",
    path: "server",
    index: void 0,
    caseSensitive: void 0,
    module: server_exports
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
  "routes/group": {
    id: "routes/group",
    parentId: "root",
    path: "group",
    index: void 0,
    caseSensitive: void 0,
    module: group_exports
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
