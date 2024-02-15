import {
  news_default
} from "/build/_shared/chunk-FNPLCOOP.js";
import {
  mainText
} from "/build/_shared/chunk-TGYAQQH6.js";
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

// app/routes/main.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/main.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/main.tsx"
  );
  import.meta.hot.lastModified = "1707970948735.0244";
}
var MainPage = () => {
  _s();
  const [mainSectionHeight, setMainSectionHeight] = (0, import_react.useState)(900);
  const [smallWindow, setSmallWindow] = (0, import_react.useState)(true);
  (0, import_react.useEffect)(() => {
    const updateHeight = () => {
      const newHeight = window.innerHeight - 0;
      setMainSectionHeight(newHeight);
    };
    const updateWindow = () => {
      if (window.innerWidth < 1200) {
        setSmallWindow(false);
      } else {
        setSmallWindow(true);
      }
    };
    updateHeight();
    updateWindow();
    window.addEventListener("resize", updateHeight);
    window.addEventListener("resize", updateWindow);
    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("resize", updateWindow);
    };
  }, []);
  const backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/main.png")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: backgroundImage, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", style: {
      height: `${mainSectionHeight}px`
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "./img/title.png", style: {
      width: "max(1000px, 70%)",
      paddingTop: "120px",
      paddingLeft: "15%"
    }, alt: "7DT telescope" }, void 0, false, {
      fileName: "app/routes/main.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/main.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/main.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full", style: {
      maxWidth: "1440px",
      margin: "0 auto",
      padding: "50px 10vw 50px 10vw",
      background: "#fff"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: {
        textAlign: "center"
      }, children: "Welcome to" }, void 0, false, {
        fileName: "app/routes/main.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: {
        textAlign: "center",
        fontWeight: "700",
        color: "var(--pickled-bluewood-600)"
      }, children: "7-Dimensional Telescope" }, void 0, false, {
        fileName: "app/routes/main.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: smallWindow ? "flex justify-between  items-center" : "text-center", style: {
        maxWidth: "1200px",
        margin: "0 auto"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: smallWindow ? {
          width: "50%",
          marginRight: "50px"
        } : {}, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { style: {
            border: "2px solid --pickled-bluewood-900",
            margin: "15px 0",
            opacity: 0.8
          } }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 96,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-content", children: mainText }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 101,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { style: {
            border: "2px solid --pickled-bluewood-900",
            margin: "15px 0",
            opacity: 0.8
          } }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 102,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/main.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: smallWindow ? {
          width: "500px",
          marginRight: "50px"
        } : {
          display: "flex",
          justifyContent: "space-between",
          width: "36vw"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/img/main_sub1.jpg", className: "hover:scale-105 transition duration-1000", style: {
            boxShadow: "5px 5px 5px #000",
            margin: "2vw"
          } }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 116,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/img/main_sub2.jpg", className: "hover:scale-105 transition duration-1000", style: {
            boxShadow: "5px 5px 5px #000",
            margin: "2vw"
          } }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 120,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/main.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/main.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/main.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      backgroundColor: "#f9f9f9"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full", style: {
      maxWidth: "1440px",
      margin: "0 auto",
      padding: "30px 10vw 0px 10vw"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "justify-center mb-5", style: {
        maxWidth: "1200px",
        margin: "0 auto",
        color: "--pickled-bluewood-900"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: {
          textAlign: "center"
        }, children: "Meet our" }, void 0, false, {
          fileName: "app/routes/main.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: {
          textAlign: "center",
          fontWeight: "700",
          color: "var(--pickled-bluewood-900)"
        }, children: [
          "Latest ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            color: "var(--pickled-bluewood-600)"
          }, children: "News" }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 151,
            columnNumber: 22
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/main.tsx",
          lineNumber: 146,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/main.tsx",
        lineNumber: 136,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center justify-center", style: {
        maxWidth: "1200px",
        margin: "0 auto",
        marginBottom: "5rem",
        textAlign: "center"
      }, children: news_default.news.map((news, index) => {
        index = index + 1;
        if (index <= 3) {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `card card-${index}`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: `./img/news/${news.imgName}` }, void 0, false, {
              fileName: "app/routes/main.tsx",
              lineNumber: 166,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: news.webpage, target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-img-hovered", style: {
              backgroundImage: `var(--card-img-hovered-overlay), url(./img/news/${news.imgName})`
            } }, void 0, false, {
              fileName: "app/routes/main.tsx",
              lineNumber: 168,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/main.tsx",
              lineNumber: 167,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-info", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-about", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: `card-tag ${news.type === "meeting" ? "tag-news" : news.type === "publication" ? "tag-publication" : news.type === "press" ? "tag-press" : null}`, children: news.type }, void 0, false, {
                  fileName: "app/routes/main.tsx",
                  lineNumber: 174,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-time", children: news.date }, void 0, false, {
                  fileName: "app/routes/main.tsx",
                  lineNumber: 175,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/main.tsx",
                lineNumber: 173,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "card-title", children: news.title }, void 0, false, {
                fileName: "app/routes/main.tsx",
                lineNumber: 177,
                columnNumber: 21
              }, this),
              news.type === "meeting" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-creator", children: [
                "in ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "", children: news.place }, void 0, false, {
                  fileName: "app/routes/main.tsx",
                  lineNumber: 178,
                  columnNumber: 81
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/main.tsx",
                lineNumber: 178,
                columnNumber: 48
              }, this) : news.type === "publication" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-creator", children: [
                "by ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "", children: news.shortAuthor }, void 0, false, {
                  fileName: "app/routes/main.tsx",
                  lineNumber: 178,
                  columnNumber: 180
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/main.tsx",
                lineNumber: 178,
                columnNumber: 147
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-creator", children: [
                "by ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "", children: news.source }, void 0, false, {
                  fileName: "app/routes/main.tsx",
                  lineNumber: 178,
                  columnNumber: 255
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/main.tsx",
                lineNumber: 178,
                columnNumber: 222
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/main.tsx",
              lineNumber: 172,
              columnNumber: 19
            }, this)
          ] }, `card-${index}`, true, {
            fileName: "app/routes/main.tsx",
            lineNumber: 165,
            columnNumber: 22
          }, this);
        }
      }) }, void 0, false, {
        fileName: "app/routes/main.tsx",
        lineNumber: 156,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/main.tsx",
      lineNumber: 131,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/main.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full", style: {
      maxWidth: "1440px",
      margin: "0 auto",
      padding: "0px 10vw 0px 10vw"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "justify-between", style: {
        maxWidth: "1200px",
        margin: "0 auto"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "justify-between mb-5", style: {
        maxWidth: "1200px",
        margin: "0 auto"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-sm leading-7 text-gray-500 font-regular", style: {
          textAlign: "center"
        }, children: "Additional details" }, void 0, false, {
          fileName: "app/routes/main.tsx",
          lineNumber: 200,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: {
          textAlign: "center",
          fontWeight: "700",
          color: "var(--pickled-bluewood-900)"
        }, children: [
          "More about ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            color: "var(--pickled-bluewood-600)"
          }, children: "7DT" }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 210,
            columnNumber: 26
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/main.tsx",
          lineNumber: 205,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/main.tsx",
        lineNumber: 196,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/main.tsx",
        lineNumber: 192,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center", style: {
        maxWidth: "1200px",
        margin: "0 auto",
        marginBottom: "5rem"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "tilesWrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "01" }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 224,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Team" }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 225,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The 7DT team, hosted at Seoul National University, is making vigorous efforts to build and develop the next-generation telescope, 7DT." }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 226,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/team", children: "Read more" }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 229,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 229,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/main.tsx",
          lineNumber: 223,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "02" }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 232,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Design" }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 233,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The 7DT consists of twenty 0.5m wide-field telescopes in Chile, enabling spectral mapping over a wide field of view." }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 234,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/telescope", children: "Read more" }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 237,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 237,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/main.tsx",
          lineNumber: 231,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "03" }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 240,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Survey program" }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 241,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "With wide-area and high-cadence survey, the 7 Dimensional Survey (7DS) will explore a deeper Universe" }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 242,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/survey", children: "Read more" }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 245,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 245,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/main.tsx",
          lineNumber: 239,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "04" }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 248,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Science" }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 249,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The core of 7DT science includes the new-born multi-messenger astronomy and the seamless survy study." }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 250,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "Read more" }, void 0, false, {
            fileName: "app/routes/main.tsx",
            lineNumber: 253,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/main.tsx",
          lineNumber: 247,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/main.tsx",
        lineNumber: 222,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/main.tsx",
        lineNumber: 216,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/main.tsx",
      lineNumber: 187,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/main.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
};
_s(MainPage, "tOBiHmmNB0CG38khC4iz6XhTG8U=");
_c = MainPage;
var main_default = MainPage;
var _c;
$RefreshReg$(_c, "MainPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  main_default
};
//# sourceMappingURL=/build/_shared/chunk-KRSW6ASU.js.map
