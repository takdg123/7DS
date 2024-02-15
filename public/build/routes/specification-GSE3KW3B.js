import {
  footer_default
} from "/build/_shared/chunk-VX5OIUM5.js";
import {
  navigate_default
} from "/build/_shared/chunk-B2PQPTZ7.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-IFJMOQTG.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/specification.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/specification.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/specification.tsx"
  );
  import.meta.hot.lastModified = "1707977867929.2017";
}
var Index = () => {
  _s();
  const backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/spec.png")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  };
  const [submenuTop, setSubmenuTop] = (0, import_react.useState)("750px");
  const [smallWindow, setSmallWindow] = (0, import_react.useState)(true);
  (0, import_react.useEffect)(() => {
    const updateWindow = () => {
      if (window.innerWidth < 1500) {
        setSmallWindow(false);
      } else {
        setSmallWindow(true);
      }
    };
    updateWindow();
    window.addEventListener("resize", updateWindow);
    return () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []);
  (0, import_react.useEffect)(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const slowFactor = 0.2;
      const newTop = `calc(750px - ${scrollPosition * slowFactor / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(navigate_default, { manu: "manu7dt" }, void 0, false, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: backgroundImage, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      height: "700px"
    } }, void 0, false, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    smallWindow ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "submenu", style: {
      top: submenuTop
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/telescope", children: "Overview" }, void 0, false, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 76,
        columnNumber: 31
      }, this) }, void 0, false, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/location", children: "Location" }, void 0, false, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 77,
        columnNumber: 31
      }, this) }, void 0, false, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2 active", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", children: "Specification" }, void 0, false, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 78,
        columnNumber: 38
      }, this) }, void 0, false, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 72,
      columnNumber: 22
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full", style: {
      maxWidth: "1440px",
      margin: "0 auto",
      padding: "50px 10vw 0 10vw",
      background: "#fff",
      color: "#264256"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "justify-between", style: {
      maxWidth: "1200px",
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: {
        textAlign: "center"
      }, children: "The Biggest Ground-based Multi-telescope System" }, void 0, false, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight", style: {
        textAlign: "center",
        fontWeight: "700",
        color: "var(--pickled-bluewood-900)"
      }, children: [
        "Specifcation of ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          color: "var(--pickled-bluewood-600)"
        }, children: "7DT" }, void 0, false, {
          fileName: "app/routes/specification.tsx",
          lineNumber: 104,
          columnNumber: 31
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 99,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 90,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full", style: {
      height: "400px",
      maxWidth: "1440px",
      margin: "0 auto",
      padding: "0 10vw 0 10vw"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl sm:text-3xl leading-normal font-extrabold tracking-tight", style: {
      fontWeight: "700",
      color: "var(--pickled-bluewood-900)"
    }, children: "Optics" }, void 0, false, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 119,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 118,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      backgroundColor: "#f9f9f9"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full", style: {
      height: "400px",
      maxWidth: "1440px",
      margin: "0 auto",
      padding: "0 10vw 0 10vw"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl sm:text-3xl leading-normal font-extrabold tracking-tight", style: {
      fontWeight: "700",
      color: "var(--pickled-bluewood-900)"
    }, children: "Mount" }, void 0, false, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 138,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 137,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 131,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full", style: {
      maxWidth: "1440px",
      margin: "0 auto",
      padding: "0 10vw 0 10vw"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-10 max-w-screen-lg mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-3 text-2xl sm:text-3xl leading-normal font-extrabold tracking-tight", style: {
        fontWeight: "700",
        color: "var(--pickled-bluewood-900)"
      }, children: "Filter" }, void 0, false, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 154,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-content", children: "The utilization of 7DT filters allows for the sophisticated observation of an object, enabling the exploration of its characteristics across a diverse spectrum of wavelengths." }, void 0, false, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 161,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "p-6", src: "/img/filter.png" }, void 0, false, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 166,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-content", children: "Here are two examples: NGC7293(left) and NGC0253(right)" }, void 0, false, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 168,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap justify-between p-10", style: {
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/img/NGC7293.gif", width: "40%" }, void 0, false, {
          fileName: "app/routes/specification.tsx",
          lineNumber: 173,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/img/NGC0253.gif", width: "40%" }, void 0, false, {
          fileName: "app/routes/specification.tsx",
          lineNumber: 174,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/specification.tsx",
        lineNumber: 170,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 153,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 148,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(footer_default, {}, void 0, false, {
      fileName: "app/routes/specification.tsx",
      lineNumber: 180,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/specification.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
};
_s(Index, "icemYXnM0SbU2YUlYNjIeWTHQsg=");
_c = Index;
var specification_default = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  specification_default as default
};
//# sourceMappingURL=/build/routes/specification-GSE3KW3B.js.map
