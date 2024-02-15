import {
  surveyText
} from "/build/_shared/chunk-TGYAQQH6.js";
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

// app/routes/survey.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/survey.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/survey.tsx"
  );
  import.meta.hot.lastModified = "1707981804396.0706";
}
var Index = () => {
  _s();
  const backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/survey.jpeg")',
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
      const slowFactor = 0.5;
      const newTop = `calc(750px - ${scrollPosition * slowFactor / windowHeight * 100}%)`;
      setSubmenuTop(newTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    background: "#fff"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(navigate_default, { manu: "manu7ds" }, void 0, false, {
      fileName: "app/routes/survey.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: backgroundImage, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      height: "700px"
    } }, void 0, false, {
      fileName: "app/routes/survey.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/survey.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    smallWindow && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "submenu", style: {
      top: submenuTop
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2 active", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", children: "Survey" }, void 0, false, {
        fileName: "app/routes/survey.tsx",
        lineNumber: 79,
        columnNumber: 40
      }, this) }, void 0, false, {
        fileName: "app/routes/survey.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/status", children: "Status" }, void 0, false, {
        fileName: "app/routes/survey.tsx",
        lineNumber: 80,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/survey.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/data", children: "Data" }, void 0, false, {
        fileName: "app/routes/survey.tsx",
        lineNumber: 81,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/survey.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/survey.tsx",
      lineNumber: 78,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/survey.tsx",
      lineNumber: 75,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full", style: {
      maxWidth: "1440px",
      margin: "0 auto",
      padding: "50px 10vw 50px 10vw",
      background: "#fff",
      color: "#264256"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "justify-between mb-5", style: {
      maxWidth: "1200px",
      margin: "0 auto"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: {
        textAlign: "center"
      }, children: "Wide-area and High-cadence Survey" }, void 0, false, {
        fileName: "app/routes/survey.tsx",
        lineNumber: 97,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: {
        textAlign: "center",
        fontWeight: "700",
        color: "var(--pickled-bluewood-900)"
      }, children: [
        "Overview of ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          color: "var(--pickled-bluewood-600)"
        }, children: "7DS" }, void 0, false, {
          fileName: "app/routes/survey.tsx",
          lineNumber: 107,
          columnNumber: 27
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/survey.tsx",
        lineNumber: 102,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-content", children: surveyText }, void 0, false, {
        fileName: "app/routes/survey.tsx",
        lineNumber: 111,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/survey.tsx",
      lineNumber: 93,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/survey.tsx",
      lineNumber: 92,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/survey.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(footer_default, {}, void 0, false, {
      fileName: "app/routes/survey.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/survey.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
};
_s(Index, "icemYXnM0SbU2YUlYNjIeWTHQsg=");
_c = Index;
var survey_default = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  survey_default as default
};
//# sourceMappingURL=/build/routes/survey-CATAKAEN.js.map
