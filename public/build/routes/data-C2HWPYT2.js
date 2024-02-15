import {
  plot_default
} from "/build/_shared/chunk-QKLUKKVU.js";
import {
  Pagination,
  Table
} from "/build/_shared/chunk-7WLVTK43.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import "/build/_shared/chunk-GIAAE3CH.js";
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

// app/routes/data.tsx
var import_react = __toESM(require_react(), 1);

// app/routes/content/data.json
var data_default = [
  {
    name: "Crab Nebula",
    ra: 83.633208,
    dec: 22.014472,
    exposure: 0.333,
    sigma: 7.8,
    ref: false
  },
  {
    name: "Andromeda Galaxy",
    ra: 10.685542,
    dec: 41.269278,
    exposure: 0.5,
    sigma: 6.5,
    ref: false
  },
  {
    name: "Orion Nebula",
    ra: 83.82208,
    dec: -5.391111,
    exposure: 0.25,
    sigma: 8.2,
    ref: false
  },
  {
    name: "Whirlpool Galaxy",
    ra: 197.470375,
    dec: 47.195278,
    exposure: 0.41666667,
    sigma: 6.9,
    ref: false
  },
  {
    name: "Pleiades Cluster",
    ra: 56.85,
    dec: 24.116667,
    exposure: 0.16666667,
    sigma: 9.1,
    ref: false
  },
  {
    name: "Eagle Nebula",
    ra: 274.8,
    dec: -13.783333,
    exposure: 0.27777778,
    sigma: 7.3,
    ref: false
  },
  {
    name: "Horsehead Nebula",
    ra: 85.246875,
    dec: -2.458333,
    exposure: 0.22222222,
    sigma: 8.5,
    ref: false
  },
  {
    name: "Ring Nebula",
    ra: 283.39775,
    dec: 33.029167,
    exposure: 0.30555556,
    sigma: 7.2,
    ref: false
  },
  {
    name: "Sombrero Galaxy",
    ra: 185.728708,
    dec: -11.629167,
    exposure: 0.36111111,
    sigma: 6.7,
    ref: false
  },
  {
    name: "Lagoon Nebula",
    ra: 271.57125,
    dec: -24.386667,
    exposure: 0.26388889,
    sigma: 8,
    ref: false
  },
  {
    name: "Helix Nebula",
    ra: 337.410375,
    dec: -20.836667,
    exposure: 0.23611111,
    sigma: 8.7,
    ref: false
  },
  {
    name: "Antennae Galaxies",
    ra: 180.471167,
    dec: -18.869528,
    exposure: 0.47222222,
    sigma: 7.1,
    ref: false
  },
  {
    name: "Boomerang Nebula",
    ra: 191.20625,
    dec: -54.517222,
    exposure: 0.33333333,
    sigma: 9.3,
    ref: false
  },
  {
    name: "Omega Nebula",
    ra: 271.57125,
    dec: -24.386667,
    exposure: 0.26388889,
    sigma: 8,
    ref: false
  },
  {
    name: "Tarantula Nebula",
    ra: 89.658675,
    dec: -69.085,
    exposure: 0.38888889,
    sigma: 7.4,
    ref: false
  },
  {
    name: "Cat's Eye Nebula",
    ra: 137.389583,
    dec: 13.226667,
    exposure: 0.27777778,
    sigma: 8.4,
    ref: false
  },
  {
    name: "Veil Nebula",
    ra: 311.40925,
    dec: 30.721389,
    exposure: 0.23611111,
    sigma: 7.6,
    ref: false
  },
  {
    name: "North America Nebula",
    ra: 344.48875,
    dec: 44.51,
    exposure: 0.26388889,
    sigma: 7.9,
    ref: false
  },
  {
    name: "Trifid Nebula",
    ra: 270.59125,
    dec: -23.03,
    exposure: 0.33333333,
    sigma: 7,
    ref: false
  },
  {
    name: "Andromeda Galaxy",
    ra: 10.685542,
    dec: 41.269278,
    exposure: 0.5,
    sigma: 6.5,
    ref: false
  }
];

// app/routes/data.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/data.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/data.tsx"
  );
  import.meta.hot.lastModified = "1707983431159.3345";
}
var Index = () => {
  _s();
  const backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/data.jpg")',
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
  const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
  const rowsPerPage = 10;
  const totalRows = data_default.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const paginatedData = data_default.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    background: "#fff"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(navigate_default, { manu: "manu7ds", fixed: true }, void 0, false, {
      fileName: "app/routes/data.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    smallWindow ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "submenu", style: {
      top: submenuTop
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/science", children: "Science" }, void 0, false, {
        fileName: "app/routes/data.tsx",
        lineNumber: 85,
        columnNumber: 31
      }, this) }, void 0, false, {
        fileName: "app/routes/data.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2 active", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", children: "Data" }, void 0, false, {
        fileName: "app/routes/data.tsx",
        lineNumber: 86,
        columnNumber: 38
      }, this) }, void 0, false, {
        fileName: "app/routes/data.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/data.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/data.tsx",
      lineNumber: 81,
      columnNumber: 22
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full", style: {
      maxWidth: "1440px",
      margin: "0 auto",
      padding: "50px 10vw 50px 10vw",
      background: "#fff",
      color: "#264256"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-10 max-w-screen-lg mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "justify-between", style: {
        maxWidth: "1200px",
        margin: "0 auto"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: {
          textAlign: "center"
        }, children: "Invaluable Observations" }, void 0, false, {
          fileName: "app/routes/data.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: {
          textAlign: "center",
          fontWeight: "700",
          color: "var(--pickled-bluewood-900)"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            color: "var(--pickled-bluewood-600)"
          }, children: "Data" }, void 0, false, {
            fileName: "app/routes/data.tsx",
            lineNumber: 112,
            columnNumber: 15
          }, this),
          " Archive"
        ] }, void 0, true, {
          fileName: "app/routes/data.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/data.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(plot_default, { data: data_default, height: "400", width: "800" }, void 0, false, {
        fileName: "app/routes/data.tsx",
        lineNumber: 118,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/data.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { striped: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Head, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.HeadCell, { children: "Target" }, void 0, false, {
            fileName: "app/routes/data.tsx",
            lineNumber: 123,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.HeadCell, { children: "R.A." }, void 0, false, {
            fileName: "app/routes/data.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.HeadCell, { children: "Dec." }, void 0, false, {
            fileName: "app/routes/data.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.HeadCell, { children: "Exposure" }, void 0, false, {
            fileName: "app/routes/data.tsx",
            lineNumber: 126,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.HeadCell, { children: "Significance" }, void 0, false, {
            fileName: "app/routes/data.tsx",
            lineNumber: 127,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.HeadCell, { children: "Details" }, void 0, false, {
            fileName: "app/routes/data.tsx",
            lineNumber: 128,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/data.tsx",
          lineNumber: 122,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Body, { className: "divide-y", children: paginatedData.map((d, index) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Row, { className: "bg-white dark:border-gray-700 dark:bg-gray-800", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Cell, { className: "whitespace-nowrap font-medium text-gray-900 dark:text-white", children: d.name }, void 0, false, {
              fileName: "app/routes/data.tsx",
              lineNumber: 133,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Cell, { children: d.ra }, void 0, false, {
              fileName: "app/routes/data.tsx",
              lineNumber: 136,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Cell, { children: d.dec }, void 0, false, {
              fileName: "app/routes/data.tsx",
              lineNumber: 137,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Cell, { children: d.exposure }, void 0, false, {
              fileName: "app/routes/data.tsx",
              lineNumber: 138,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Cell, { children: d.sigma }, void 0, false, {
              fileName: "app/routes/data.tsx",
              lineNumber: 139,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Cell, { children: d.ref === false ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:mim@astro.snu.ac.kr", className: "font-medium text-cyan-600 hover:underline dark:text-cyan-500", children: "Contact" }, void 0, false, {
              fileName: "app/routes/data.tsx",
              lineNumber: 141,
              columnNumber: 42
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: d.ref, className: "font-medium text-cyan-600 hover:underline dark:text-cyan-500", children: "Link" }, void 0, false, {
              fileName: "app/routes/data.tsx",
              lineNumber: 143,
              columnNumber: 32
            }, this) }, void 0, false, {
              fileName: "app/routes/data.tsx",
              lineNumber: 140,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/data.tsx",
            lineNumber: 132,
            columnNumber: 22
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/data.tsx",
          lineNumber: 130,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/data.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { currentPage, totalPages, onPageChange }, void 0, false, {
        fileName: "app/routes/data.tsx",
        lineNumber: 153,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/data.tsx",
        lineNumber: 152,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/data.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/data.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(footer_default, {}, void 0, false, {
      fileName: "app/routes/data.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/data.tsx",
    lineNumber: 75,
    columnNumber: 10
  }, this);
};
_s(Index, "NUd2oiqFQLIUD0FT/Am1eXQJ0AI=");
_c = Index;
var data_default2 = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  data_default2 as default
};
//# sourceMappingURL=/build/routes/data-C2HWPYT2.js.map
