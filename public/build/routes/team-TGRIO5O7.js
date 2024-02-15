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

// app/routes/team.tsx
var import_react = __toESM(require_react(), 1);

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
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/team.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/team.tsx"
  );
  import.meta.hot.lastModified = "1707892505777.8406";
}
var Index = () => {
  _s();
  const backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/team.jpeg")',
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
      const slowFactor = 0.3;
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(navigate_default, { manu: "manuAbout" }, void 0, false, {
      fileName: "app/routes/team.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: backgroundImage, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      height: "700px"
    } }, void 0, false, {
      fileName: "app/routes/team.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/team.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    smallWindow ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "submenu", style: {
      top: submenuTop
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2 active", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", children: "Team" }, void 0, false, {
        fileName: "app/routes/team.tsx",
        lineNumber: 79,
        columnNumber: 38
      }, this) }, void 0, false, {
        fileName: "app/routes/team.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/groups", children: "Working Groups" }, void 0, false, {
        fileName: "app/routes/team.tsx",
        lineNumber: 80,
        columnNumber: 31
      }, this) }, void 0, false, {
        fileName: "app/routes/team.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/team.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/team.tsx",
      lineNumber: 75,
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
        }, children: "Introducing" }, void 0, false, {
          fileName: "app/routes/team.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: {
          textAlign: "center",
          fontWeight: "700",
          color: "var(--pickled-bluewood-900)"
        }, children: [
          "Our ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            color: "var(--pickled-bluewood-600)"
          }, children: "Team" }, void 0, false, {
            fileName: "app/routes/team.tsx",
            lineNumber: 107,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/team.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/team.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:grid grid-cols-2 gap-6 my-10", children: team_default.members.map((member, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-sm w-full lg:max-w-full lg:flex mx-auto my-10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden", style: {
            backgroundImage: `url(./img/team/${member.imgName})`,
            backgroundPosition: "center"
          } }, void 0, false, {
            fileName: "app/routes/team.tsx",
            lineNumber: 115,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:" + member.email, className: "text-gray-900 font-bold text-xl mb-2 hover:text-bluewood-600 transition duration-500 ease-in-out", children: member.name }, void 0, false, {
              fileName: "app/routes/team.tsx",
              lineNumber: 122,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: member.title }, void 0, false, {
              fileName: "app/routes/team.tsx",
              lineNumber: 124,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-900 font-bold text-base mt-4", children: "Major" }, void 0, false, {
              fileName: "app/routes/team.tsx",
              lineNumber: 127,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: member.major }, void 0, false, {
              fileName: "app/routes/team.tsx",
              lineNumber: 130,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-900 font-bold text-base mt-4", children: "Affiliation" }, void 0, false, {
              fileName: "app/routes/team.tsx",
              lineNumber: 133,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: member.affiliation }, void 0, false, {
              fileName: "app/routes/team.tsx",
              lineNumber: 136,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-4 flex", children: [
              member.webpage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "mr-3", href: member.webpage, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-6 h-6 text-gray-800 dark:text-white", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z", clipRule: "evenodd" }, void 0, false, {
                fileName: "app/routes/team.tsx",
                lineNumber: 142,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/team.tsx",
                lineNumber: 141,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/team.tsx",
                lineNumber: 140,
                columnNumber: 40
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "mr-3", href: "mailto:" + member.email, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fa fa-envelope" }, void 0, false, {
                fileName: "app/routes/team.tsx",
                lineNumber: 146,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/team.tsx",
                lineNumber: 145,
                columnNumber: 21
              }, this),
              member.orcid && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "mr-3 flex items-center", href: member.orcid, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: "ORCID logo", src: "https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png", width: "16px", height: "16px" }, void 0, false, {
                fileName: "app/routes/team.tsx",
                lineNumber: 149,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/team.tsx",
                lineNumber: 148,
                columnNumber: 38
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/team.tsx",
              lineNumber: 139,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/team.tsx",
            lineNumber: 121,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/team.tsx",
            lineNumber: 120,
            columnNumber: 15
          }, this)
        ] }, index, true, {
          fileName: "app/routes/team.tsx",
          lineNumber: 114,
          columnNumber: 20
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/team.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/team.tsx",
      lineNumber: 92,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/team.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(footer_default, {}, void 0, false, {
      fileName: "app/routes/team.tsx",
      lineNumber: 159,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/team.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
};
_s(Index, "icemYXnM0SbU2YUlYNjIeWTHQsg=");
_c = Index;
var team_default2 = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  team_default2 as default
};
//# sourceMappingURL=/build/routes/team-TGRIO5O7.js.map
