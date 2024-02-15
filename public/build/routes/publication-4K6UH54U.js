import {
  Pagination
} from "/build/_shared/chunk-7WLVTK43.js";
import {
  news_default
} from "/build/_shared/chunk-FNPLCOOP.js";
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

// app/routes/publication.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/publication.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/publication.tsx"
  );
  import.meta.hot.lastModified = "1707983327910.2898";
}
var Index = () => {
  _s();
  const backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/news.png")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  };
  const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
  const pubPerPage = 3;
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
  const pub = news_default.news.filter((item) => item.type === "publication");
  const totalPages = Math.ceil(pub.length / pubPerPage);
  const indexOfLastPubs = currentPage * pubPerPage;
  const indexOfFirstPubs = indexOfLastPubs - pubPerPage;
  const currentPub = pub.slice(indexOfFirstPubs, indexOfLastPubs);
  const onPageChange = (page) => setCurrentPage(page);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    background: "#fff"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(navigate_default, { manu: "manuScience", fixed: true }, void 0, false, {
      fileName: "app/routes/publication.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    smallWindow ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "submenu", style: {
      top: submenuTop
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2 active", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", children: "Science" }, void 0, false, {
        fileName: "app/routes/publication.tsx",
        lineNumber: 83,
        columnNumber: 38
      }, this) }, void 0, false, {
        fileName: "app/routes/publication.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/status", children: "Publications" }, void 0, false, {
        fileName: "app/routes/publication.tsx",
        lineNumber: 84,
        columnNumber: 31
      }, this) }, void 0, false, {
        fileName: "app/routes/publication.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/publication.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/publication.tsx",
      lineNumber: 79,
      columnNumber: 22
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full", style: {
      maxWidth: "1440px",
      margin: "0 auto",
      padding: "50px 10vw 50px 10vw",
      background: "#fff",
      color: "#264256"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-10 max-w-screen-lg mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "justify-between mb-5", style: {
        maxWidth: "1200px",
        margin: "0 auto"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: {
          textAlign: "center"
        }, children: "Meet our works" }, void 0, false, {
          fileName: "app/routes/publication.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: {
          textAlign: "center",
          fontWeight: "700",
          color: "var(--pickled-bluewood-900)"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          color: "var(--pickled-bluewood-600)"
        }, children: "Publications" }, void 0, false, {
          fileName: "app/routes/publication.tsx",
          lineNumber: 110,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/publication.tsx",
          lineNumber: 105,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/publication.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center justify-center", style: {
        maxWidth: "1200px",
        margin: "0 auto",
        marginBottom: "5rem",
        textAlign: "center",
        color: "black"
      }, children: [
        pub.map((p, index) => {
          index = index + 1;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex flex-warp p-6 m-3", style: {
            boxShadow: "0px 15px 35px rgba(227, 252, 239, 0.1), 0px 5px 15px rgba(0, 0, 0, 0.07)"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pr-5", style: {
              width: "70%"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "pb-3", style: {
                fontSize: "24px",
                lineHeight: "1.2",
                color: "var(--pickled-bluewood-600)",
                fontWeight: 500
              }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: p.webpage, target: "_blank", children: p.title }, void 0, false, {
                fileName: "app/routes/publication.tsx",
                lineNumber: 136,
                columnNumber: 20
              }, this) }, void 0, false, {
                fileName: "app/routes/publication.tsx",
                lineNumber: 131,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-content", style: {
                fontSize: "12pt"
              }, children: p.abstract }, void 0, false, {
                fileName: "app/routes/publication.tsx",
                lineNumber: 137,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/publication.tsx",
              lineNumber: 128,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              width: "30%",
              textAlign: "left"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "pb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-bluewood-900", style: {
                  fontWeight: 700
                }, children: "Authors:" }, void 0, false, {
                  fileName: "app/routes/publication.tsx",
                  lineNumber: 145,
                  columnNumber: 41
                }, this),
                " ",
                p.author
              ] }, void 0, true, {
                fileName: "app/routes/publication.tsx",
                lineNumber: 145,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "pb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-bluewood-900", style: {
                  fontWeight: 700
                }, children: "Journal:" }, void 0, false, {
                  fileName: "app/routes/publication.tsx",
                  lineNumber: 148,
                  columnNumber: 41
                }, this),
                " ",
                p.journal
              ] }, void 0, true, {
                fileName: "app/routes/publication.tsx",
                lineNumber: 148,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "pb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-bluewood-900", style: {
                  fontWeight: 700
                }, children: "Date:" }, void 0, false, {
                  fileName: "app/routes/publication.tsx",
                  lineNumber: 151,
                  columnNumber: 41
                }, this),
                " ",
                p.date
              ] }, void 0, true, {
                fileName: "app/routes/publication.tsx",
                lineNumber: 151,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "pb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-bluewood-900", style: {
                  fontWeight: 700
                }, children: "doi:" }, void 0, false, {
                  fileName: "app/routes/publication.tsx",
                  lineNumber: 154,
                  columnNumber: 41
                }, this),
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: p.webpage, target: "_blank", children: p.doi }, void 0, false, {
                  fileName: "app/routes/publication.tsx",
                  lineNumber: 156,
                  columnNumber: 34
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/publication.tsx",
                lineNumber: 154,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "pb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-bluewood-900", style: {
                  fontWeight: 700
                }, children: "preprint:" }, void 0, false, {
                  fileName: "app/routes/publication.tsx",
                  lineNumber: 157,
                  columnNumber: 41
                }, this),
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: p.webpage2, target: "_blank", children: p.preprint }, void 0, false, {
                  fileName: "app/routes/publication.tsx",
                  lineNumber: 159,
                  columnNumber: 39
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/publication.tsx",
                lineNumber: 157,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/publication.tsx",
              lineNumber: 141,
              columnNumber: 19
            }, this)
          ] }, index, true, {
            fileName: "app/routes/publication.tsx",
            lineNumber: 125,
            columnNumber: 20
          }, this);
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { currentPage, totalPages, onPageChange }, void 0, false, {
          fileName: "app/routes/publication.tsx",
          lineNumber: 164,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/publication.tsx",
          lineNumber: 163,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/publication.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/publication.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/publication.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(footer_default, {}, void 0, false, {
      fileName: "app/routes/publication.tsx",
      lineNumber: 169,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/publication.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
};
_s(Index, "H6Lqz4pfwMxvkpITTu+ijXLz8wQ=");
_c = Index;
var publication_default = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  publication_default as default
};
//# sourceMappingURL=/build/routes/publication-4K6UH54U.js.map
