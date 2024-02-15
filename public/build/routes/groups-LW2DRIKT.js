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

// app/routes/groups.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/groups.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/groups.tsx"
  );
  import.meta.hot.lastModified = "1707983373304.79";
}
var Index = () => {
  _s();
  const backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/group.jpg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  };
  const [submenuTop, setSubmenuTop] = (0, import_react.useState)("200px");
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
      const slowFactor = -0.1;
      const newTop = `calc(200px - ${scrollPosition * slowFactor / windowHeight * 100}%)`;
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(navigate_default, { manu: "manuAbout", fixed: true }, void 0, false, {
      fileName: "app/routes/groups.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    smallWindow ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "submenu", style: {
      top: submenuTop
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/team", children: "Team" }, void 0, false, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 72,
        columnNumber: 31
      }, this) }, void 0, false, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2 active", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", children: "Working Groups" }, void 0, false, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 73,
        columnNumber: 38
      }, this) }, void 0, false, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/groups.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/groups.tsx",
      lineNumber: 68,
      columnNumber: 22
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full", style: {
      maxWidth: "1440px",
      margin: "0 auto",
      padding: "50px 10vw 50px 10vw",
      background: "#fff",
      color: "#264256"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "justify-between mb-5", style: {
        maxWidth: "1200px",
        margin: "0 auto"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: {
          textAlign: "center"
        }, children: "Explore a Deeper Universe" }, void 0, false, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: {
          textAlign: "center",
          fontWeight: "700",
          color: "var(--pickled-bluewood-900)"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            color: "var(--pickled-bluewood-600)"
          }, children: "Survey" }, void 0, false, {
            fileName: "app/routes/groups.tsx",
            lineNumber: 99,
            columnNumber: 15
          }, this),
          " Group"
        ] }, void 0, true, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "justify-between mb-5", style: {
        maxWidth: "1200px",
        margin: "0 auto"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: {
          textAlign: "center"
        }, children: "Follow-up Multimessengers" }, void 0, false, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 111,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: {
          textAlign: "center",
          fontWeight: "700",
          color: "var(--pickled-bluewood-900)"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            color: "var(--pickled-bluewood-600)"
          }, children: "Transient" }, void 0, false, {
            fileName: "app/routes/groups.tsx",
            lineNumber: 121,
            columnNumber: 15
          }, this),
          " Group"
        ] }, void 0, true, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 116,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "justify-between mb-5", style: {
        maxWidth: "1200px",
        margin: "0 auto"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: {
          textAlign: "center"
        }, children: "Shed Light on the Origin of Universe" }, void 0, false, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: {
          textAlign: "center",
          fontWeight: "700",
          color: "var(--pickled-bluewood-900)"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            color: "var(--pickled-bluewood-600)"
          }, children: "Cosmology" }, void 0, false, {
            fileName: "app/routes/groups.tsx",
            lineNumber: 143,
            columnNumber: 15
          }, this),
          " Group"
        ] }, void 0, true, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 138,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 129,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-10 max-w-screen-lg mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "justify-between mb-5", style: {
        maxWidth: "1200px",
        margin: "0 auto"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: {
          textAlign: "center"
        }, children: "Study with the State-Of-Art technique" }, void 0, false, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 155,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: {
          textAlign: "center",
          fontWeight: "700",
          color: "var(--pickled-bluewood-900)"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            color: "var(--pickled-bluewood-600)"
          }, children: "Machine Learning" }, void 0, false, {
            fileName: "app/routes/groups.tsx",
            lineNumber: 165,
            columnNumber: 15
          }, this),
          " Group"
        ] }, void 0, true, {
          fileName: "app/routes/groups.tsx",
          lineNumber: 160,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 151,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/groups.tsx",
        lineNumber: 150,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/groups.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(footer_default, {}, void 0, false, {
      fileName: "app/routes/groups.tsx",
      lineNumber: 172,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/groups.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
};
_s(Index, "792ae9QhNRYcdyZhWfo5hsMBMIw=");
_c = Index;
var groups_default = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  groups_default as default
};
//# sourceMappingURL=/build/routes/groups-LW2DRIKT.js.map
