import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-IFJMOQTG.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/navigate.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/navigate.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/navigate.tsx"
  );
  import.meta.hot.lastModified = "1707982910322.6511";
}
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
  if (valid) {
    return `text-xl font-bold border-b-2 border-transparent mx-1.5 sm:mx-6 transition duration-300 ease-in-out transform border-default-500 scale-110 text-orange`;
  } else {
    return `text-xl font-bold border-b-2 border-transparent mx-1.5 sm:mx-6 transition duration-300 ease-in-out transform hover:border-default-500 hover:scale-110 hover:text-white`;
  }
}
function NavBar(props) {
  _s();
  const [onMouse, setOnMouse] = (0, import_react.useState)(false);
  const [isTop, setIsTop] = (0, import_react.useState)(!props.fixed);
  const [activeMenu, setActiveMenu] = (0, import_react.useState)(null);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const isTop2 = scrollPosition === 0;
    console.log(!props.fixed, isTop2 && !props.fixed);
    setIsTop(isTop2 && !props.fixed);
  };
  const handleManu = (manu, onMouse2) => {
    setActiveMenu(manu);
    setOnMouse(onMouse2);
  };
  (0, import_react.useEffect)(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  (0, import_react.useEffect)(() => {
    setActiveMenu(props.manu);
  }, []);
  const navbarClass = "justify-center mx-auto shadow fixed w-full top-0 z-1000 text-white";
  const navbarStyle = {
    backgroundColor: `rgba(7, 28, 48, ${isTop ? 0.5 : 1})`,
    margin: "0 auto"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: navbarClass, style: navbarStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container flex items-center justify-center mx-auto capitalize", style: {
    maxWidth: "1440px",
    color: "#fff",
    padding: activeMenu === null ? "0rem" : "0rem 1.5rem 0 1.5rem",
    margin: "0 auto"
  }, onMouseLeave: () => handleManu(props.manu, false), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { "data-collapse-toggle": "navbar-dropdown", type: "button", className: "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600", "aria-controls": "navbar-dropdown", "aria-expanded": "false", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
        fileName: "app/routes/navigate.tsx",
        lineNumber: 76,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 17 14", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M1 1h15M1 7h15M1 13h15" }, void 0, false, {
        fileName: "app/routes/navigate.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/navigate.tsx",
        lineNumber: 77,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/navigate.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden w-full md:block md:w-auto", id: "navbar-dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-col font-medium py-4 md:p-0 mt-0 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 mx-auto", style: {
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { style: {
        width: "120px",
        textAlign: "center"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onMouseEnter: () => handleManu("manuHome", true), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { id: "home", "data-dropdown-toggle": "manuHome", className: menuClass(activeMenu === "manuHome"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", children: "Home" }, void 0, false, {
        fileName: "app/routes/navigate.tsx",
        lineNumber: 91,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/navigate.tsx",
        lineNumber: 90,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/navigate.tsx",
        lineNumber: 89,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/navigate.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { style: {
        width: "150px",
        textAlign: "center"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onMouseEnter: () => handleManu("manuAbout", true), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { id: "about", "data-dropdown-toggle": "manuAbout", className: menuClass(activeMenu === "manuAbout"), children: "About Us" }, void 0, false, {
          fileName: "app/routes/navigate.tsx",
          lineNumber: 100,
          columnNumber: 17
        }, this),
        onMouse ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: buttonStyle(activeMenu === "manuAbout"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-sm", style: {
          margin: "0 auto"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/team", className: "block py-2 hover:bg-oran-100", style: {
            padding: "0.5rem"
          }, children: "Team" }, void 0, false, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 108,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 107,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/groups", className: "block py-2 hover:bg-oran-100", style: {
            padding: "0.5rem"
          }, children: "Working Group" }, void 0, false, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 113,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 112,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/navigate.tsx",
          lineNumber: 104,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/navigate.tsx",
          lineNumber: 103,
          columnNumber: 28
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/navigate.tsx",
        lineNumber: 99,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/navigate.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { style: {
        width: "120px",
        textAlign: "center"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onMouseEnter: () => handleManu("manu7dt", true), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { id: "7dt", "data-dropdown-toggle": "manu7dt", className: menuClass(activeMenu === "manu7dt"), children: "7DT" }, void 0, false, {
          fileName: "app/routes/navigate.tsx",
          lineNumber: 125,
          columnNumber: 17
        }, this),
        onMouse ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: buttonStyle(activeMenu === "manu7dt"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-sm", style: {
          margin: "0 auto"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/telescope", className: "block py-2 hover:bg-oran-100", style: {
            padding: "0.5rem"
          }, children: "Overview" }, void 0, false, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 133,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 132,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/location", className: "block py-2 hover:bg-oran-100", style: {
            padding: "0.5rem"
          }, children: "Location" }, void 0, false, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 138,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 137,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/specification", className: "block py-2 hover:bg-oran-100", style: {
            padding: "0.5rem"
          }, children: "Specification" }, void 0, false, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 143,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 142,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/navigate.tsx",
          lineNumber: 129,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/navigate.tsx",
          lineNumber: 128,
          columnNumber: 28
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/navigate.tsx",
        lineNumber: 124,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/navigate.tsx",
        lineNumber: 120,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { style: {
        width: "120px",
        textAlign: "center"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onMouseEnter: () => handleManu("manu7ds", true), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { id: "7ds", "data-dropdown-toggle": "manu7ds", className: menuClass(activeMenu === "manu7ds"), children: "7DS" }, void 0, false, {
          fileName: "app/routes/navigate.tsx",
          lineNumber: 156,
          columnNumber: 17
        }, this),
        onMouse ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: buttonStyle(activeMenu === "manu7ds"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/survey", className: "block py-2 hover:bg-oran-100", style: {
            padding: "0.5rem"
          }, children: "Survey" }, void 0, false, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 162,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 161,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/status", className: "block py-2 hover:bg-oran-100", style: {
            padding: "0.5rem"
          }, children: "Status" }, void 0, false, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 167,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 166,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/data", className: "block py-2 hover:bg-oran-100", style: {
            padding: "0.5rem"
          }, children: "Data" }, void 0, false, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 172,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 171,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/navigate.tsx",
          lineNumber: 160,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/navigate.tsx",
          lineNumber: 159,
          columnNumber: 28
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/navigate.tsx",
        lineNumber: 155,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/navigate.tsx",
        lineNumber: 151,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { style: {
        width: "120px",
        textAlign: "center"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onMouseEnter: () => handleManu("manuScience", true), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { id: "science", "data-dropdown-toggle": "manuScience", className: menuClass(activeMenu === "manuScience"), children: "Science" }, void 0, false, {
          fileName: "app/routes/navigate.tsx",
          lineNumber: 185,
          columnNumber: 17
        }, this),
        onMouse ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: buttonStyle(activeMenu === "manuScience"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/science", className: "block py-2 hover:bg-oran-100", style: {
            padding: "0.5rem"
          }, children: "Scientific Goals" }, void 0, false, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 191,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 190,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/publication", className: "block py-2 hover:bg-oran-100", style: {
            padding: "0.5rem"
          }, children: "Publications" }, void 0, false, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 196,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/navigate.tsx",
            lineNumber: 195,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/navigate.tsx",
          lineNumber: 189,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/navigate.tsx",
          lineNumber: 188,
          columnNumber: 28
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/navigate.tsx",
        lineNumber: 184,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/navigate.tsx",
        lineNumber: 180,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { style: {
        width: "120px",
        textAlign: "center"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onMouseEnter: () => handleManu("manuNews", true), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { id: "news", "data-dropdown-toggle": "manuNews", className: menuClass(false), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/news", children: "News" }, void 0, false, {
        fileName: "app/routes/navigate.tsx",
        lineNumber: 210,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/navigate.tsx",
        lineNumber: 209,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/navigate.tsx",
        lineNumber: 208,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/navigate.tsx",
        lineNumber: 204,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/navigate.tsx",
      lineNumber: 82,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/navigate.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/navigate.tsx",
    lineNumber: 69,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/navigate.tsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_s(NavBar, "DK8JiU/KzBxShHaSR5XkS692ucA=");
_c = NavBar;
var navigate_default = NavBar;
var _c;
$RefreshReg$(_c, "NavBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  navigate_default
};
//# sourceMappingURL=/build/_shared/chunk-B2PQPTZ7.js.map
