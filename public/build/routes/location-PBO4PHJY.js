import {
  require_jsx_runtime
} from "/build/_shared/chunk-NMZL6IDN.js";
import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
import {
  locationText
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames4() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames4.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames4.default = classNames4;
        module.exports = classNames4;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames4;
        });
      } else {
        window.classNames = classNames4;
      }
    })();
  }
});

// node_modules/invariant/browser.js
var require_browser = __commonJS({
  "node_modules/invariant/browser.js"(exports, module) {
    "use strict";
    var invariant3 = function(condition, format, a, b, c, d, e, f) {
      if (true) {
        if (format === void 0) {
          throw new Error("invariant requires an error message argument");
        }
      }
      if (!condition) {
        var error;
        if (format === void 0) {
          error = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(
            format.replace(/%s/g, function() {
              return args[argIndex++];
            })
          );
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module.exports = invariant3;
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement2, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement2(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement2(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// app/routes/location.tsx
var import_react26 = __toESM(require_react(), 1);

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/uncontrollable/lib/esm/hook.js
var import_react = __toESM(require_react());

// node_modules/uncontrollable/lib/esm/utils.js
var import_invariant = __toESM(require_browser());
function defaultKey(key) {
  return "default" + key.charAt(0).toUpperCase() + key.substr(1);
}

// node_modules/uncontrollable/lib/esm/hook.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = (0, import_react.useRef)(propValue !== void 0);
  var _useState = (0, import_react.useState)(defaultValue), stateValue = _useState[0], setState = _useState[1];
  var isProp2 = propValue !== void 0;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp2;
  if (!isProp2 && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }
  return [isProp2 ? propValue : stateValue, (0, import_react.useCallback)(function(value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (handler)
      handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}
function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function(result, fieldName) {
    var _extends2;
    var _ref = result, defaultValue = _ref[defaultKey(fieldName)], propsValue = _ref[fieldName], rest = _objectWithoutPropertiesLoose(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));
    var handlerName = config[fieldName];
    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]), value = _useUncontrolledProp[0], handler = _useUncontrolledProp[1];
    return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/uncontrollable/lib/esm/uncontrollable.js
var import_react2 = __toESM(require_react());

// node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
function componentWillMount() {
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== void 0) {
    this.setState(state);
  }
}
function componentWillReceiveProps(nextProps) {
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== void 0 ? state : null;
  }
  this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

// node_modules/uncontrollable/lib/esm/uncontrollable.js
var import_invariant2 = __toESM(require_browser());

// node_modules/react-bootstrap/esm/ThemeProvider.js
var React2 = __toESM(require_react());
var import_react3 = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
"use client";
var DEFAULT_BREAKPOINTS = ["xxl", "xl", "lg", "md", "sm", "xs"];
var DEFAULT_MIN_BREAKPOINT = "xs";
var ThemeContext = /* @__PURE__ */ React2.createContext({
  prefixes: {},
  breakpoints: DEFAULT_BREAKPOINTS,
  minBreakpoint: DEFAULT_MIN_BREAKPOINT
});
var {
  Consumer,
  Provider
} = ThemeContext;
function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = (0, import_react3.useContext)(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useIsRTL() {
  const {
    dir
  } = (0, import_react3.useContext)(ThemeContext);
  return dir === "rtl";
}

// node_modules/dom-helpers/esm/ownerDocument.js
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

// node_modules/dom-helpers/esm/ownerWindow.js
function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}

// node_modules/dom-helpers/esm/getComputedStyle.js
function getComputedStyle2(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}

// node_modules/dom-helpers/esm/hyphenate.js
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, "-$1").toLowerCase();
}

// node_modules/dom-helpers/esm/hyphenateStyle.js
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, "-ms-");
}

// node_modules/dom-helpers/esm/isTransform.js
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}

// node_modules/dom-helpers/esm/css.js
function style(node, property) {
  var css = "";
  var transforms = "";
  if (typeof property === "string") {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle2(node).getPropertyValue(hyphenateStyleName(property));
  }
  Object.keys(property).forEach(function(key) {
    var value = property[key];
    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });
  if (transforms) {
    css += "transform: " + transforms + ";";
  }
  node.style.cssText += ";" + css;
}
var css_default = style;

// node_modules/react-transition-group/esm/Transition.js
var import_prop_types2 = __toESM(require_prop_types());
var import_react5 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/react-transition-group/esm/config.js
var config_default = {
  disabled: false
};

// node_modules/react-transition-group/esm/utils/PropTypes.js
var import_prop_types = __toESM(require_prop_types());
var timeoutsShape = true ? import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.shape({
  enter: import_prop_types.default.number,
  exit: import_prop_types.default.number,
  appear: import_prop_types.default.number
}).isRequired]) : null;
var classNamesShape = true ? import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.shape({
  enter: import_prop_types.default.string,
  exit: import_prop_types.default.string,
  active: import_prop_types.default.string
}), import_prop_types.default.shape({
  enter: import_prop_types.default.string,
  enterDone: import_prop_types.default.string,
  enterActive: import_prop_types.default.string,
  exit: import_prop_types.default.string,
  exitDone: import_prop_types.default.string,
  exitActive: import_prop_types.default.string
})]) : null;

// node_modules/react-transition-group/esm/TransitionGroupContext.js
var import_react4 = __toESM(require_react());
var TransitionGroupContext_default = import_react4.default.createContext(null);

// node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow2(node) {
  return node.scrollTop;
};

// node_modules/react-transition-group/esm/Transition.js
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
          if (node)
            forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config_default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : import_react_dom.default.findDOMNode(this);
    if (!exit || config_default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ import_react5.default.createElement(TransitionGroupContext_default.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : import_react5.default.cloneElement(import_react5.default.Children.only(children), childProps))
    );
  };
  return Transition2;
}(import_react5.default.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: import_prop_types2.default.shape({
    current: typeof Element === "undefined" ? import_prop_types2.default.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return import_prop_types2.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: import_prop_types2.default.oneOfType([import_prop_types2.default.func.isRequired, import_prop_types2.default.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: import_prop_types2.default.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: import_prop_types2.default.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: import_prop_types2.default.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: import_prop_types2.default.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: import_prop_types2.default.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: import_prop_types2.default.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener)
      pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: import_prop_types2.default.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: import_prop_types2.default.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types2.default.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: import_prop_types2.default.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: import_prop_types2.default.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: import_prop_types2.default.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: import_prop_types2.default.func
} : {};
function noop() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition_default = Transition;

// node_modules/dom-helpers/esm/canUseDOM.js
var canUseDOM_default = !!(typeof window !== "undefined" && window.document && window.document.createElement);

// node_modules/dom-helpers/esm/addEventListener.js
var optionsSupported = false;
var onceSupported = false;
try {
  options = {
    get passive() {
      return optionsSupported = true;
    },
    get once() {
      return onceSupported = optionsSupported = true;
    }
  };
  if (canUseDOM_default) {
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, true);
  }
} catch (e) {
}
var options;
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== "boolean" && !onceSupported) {
    var once = options.once, capture = options.capture;
    var wrappedHandler = handler;
    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };
      handler.__once = wrappedHandler;
    }
    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }
  node.addEventListener(eventName, handler, options);
}
var addEventListener_default = addEventListener;

// node_modules/dom-helpers/esm/removeEventListener.js
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== "boolean" ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);
  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}
var removeEventListener_default = removeEventListener;

// node_modules/dom-helpers/esm/listen.js
function listen(node, eventName, handler, options) {
  addEventListener_default(node, eventName, handler, options);
  return function() {
    removeEventListener_default(node, eventName, handler, options);
  };
}
var listen_default = listen;

// node_modules/dom-helpers/esm/triggerEvent.js
function triggerEvent(node, eventName, bubbles, cancelable) {
  if (bubbles === void 0) {
    bubbles = false;
  }
  if (cancelable === void 0) {
    cancelable = true;
  }
  if (node) {
    var event = document.createEvent("HTMLEvents");
    event.initEvent(eventName, bubbles, cancelable);
    node.dispatchEvent(event);
  }
}

// node_modules/dom-helpers/esm/transitionEnd.js
function parseDuration(node) {
  var str = css_default(node, "transitionDuration") || "";
  var mult = str.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(str) * mult;
}
function emulateTransitionEnd(element, duration, padding) {
  if (padding === void 0) {
    padding = 5;
  }
  var called = false;
  var handle = setTimeout(function() {
    if (!called)
      triggerEvent(element, "transitionend", true);
  }, duration + padding);
  var remove = listen_default(element, "transitionend", function() {
    called = true;
  }, {
    once: true
  });
  return function() {
    clearTimeout(handle);
    remove();
  };
}
function transitionEnd(element, handler, duration, padding) {
  if (duration == null)
    duration = parseDuration(element) || 0;
  var removeEmulate = emulateTransitionEnd(element, duration, padding);
  var remove = listen_default(element, "transitionend", handler);
  return function() {
    removeEmulate();
    remove();
  };
}

// node_modules/react-bootstrap/esm/transitionEndListener.js
function parseDuration2(node, property) {
  const str = css_default(node, property) || "";
  const mult = str.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(str) * mult;
}
function transitionEndListener(element, handler) {
  const duration = parseDuration2(element, "transitionDuration");
  const delay = parseDuration2(element, "transitionDelay");
  const remove = transitionEnd(element, (e) => {
    if (e.target === element) {
      remove();
      handler(e);
    }
  }, duration + delay);
}

// node_modules/react-bootstrap/esm/triggerBrowserReflow.js
function triggerBrowserReflow(node) {
  node.offsetHeight;
}

// node_modules/react-bootstrap/esm/TransitionWrapper.js
var import_react7 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useMergedRefs.js
var import_react6 = __toESM(require_react());
var toFnRef = (ref) => !ref || typeof ref === "function" ? ref : (value) => {
  ref.current = value;
};
function mergeRefs(refA, refB) {
  const a = toFnRef(refA);
  const b = toFnRef(refB);
  return (value) => {
    if (a)
      a(value);
    if (b)
      b(value);
  };
}
function useMergedRefs(refA, refB) {
  return (0, import_react6.useMemo)(() => mergeRefs(refA, refB), [refA, refB]);
}
var useMergedRefs_default = useMergedRefs;

// node_modules/react-bootstrap/esm/safeFindDOMNode.js
var import_react_dom2 = __toESM(require_react_dom());
function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && "setState" in componentOrElement) {
    return import_react_dom2.default.findDOMNode(componentOrElement);
  }
  return componentOrElement != null ? componentOrElement : null;
}

// node_modules/react-bootstrap/esm/TransitionWrapper.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
"use client";
var TransitionWrapper = /* @__PURE__ */ import_react7.default.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  addEndListener,
  children,
  childRef,
  ...props
}, ref) => {
  const nodeRef = (0, import_react7.useRef)(null);
  const mergedRef = useMergedRefs_default(nodeRef, childRef);
  const attachRef = (r) => {
    mergedRef(safeFindDOMNode(r));
  };
  const normalize = (callback) => (param) => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, param);
    }
  };
  const handleEnter = (0, import_react7.useCallback)(normalize(onEnter), [onEnter]);
  const handleEntering = (0, import_react7.useCallback)(normalize(onEntering), [onEntering]);
  const handleEntered = (0, import_react7.useCallback)(normalize(onEntered), [onEntered]);
  const handleExit = (0, import_react7.useCallback)(normalize(onExit), [onExit]);
  const handleExiting = (0, import_react7.useCallback)(normalize(onExiting), [onExiting]);
  const handleExited = (0, import_react7.useCallback)(normalize(onExited), [onExited]);
  const handleAddEndListener = (0, import_react7.useCallback)(normalize(addEndListener), [addEndListener]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Transition_default, {
    ref,
    ...props,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef,
    children: typeof children === "function" ? (status, innerProps) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      children(status, {
        ...innerProps,
        ref: attachRef
      })
    ) : /* @__PURE__ */ import_react7.default.cloneElement(children, {
      ref: attachRef
    })
  });
});
var TransitionWrapper_default = TransitionWrapper;

// node_modules/@restart/hooks/esm/useEventCallback.js
var import_react9 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useCommittedRef.js
var import_react8 = __toESM(require_react());
function useCommittedRef(value) {
  const ref = (0, import_react8.useRef)(value);
  (0, import_react8.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref;
}
var useCommittedRef_default = useCommittedRef;

// node_modules/@restart/hooks/esm/useEventCallback.js
function useEventCallback(fn) {
  const ref = useCommittedRef_default(fn);
  return (0, import_react9.useCallback)(function(...args) {
    return ref.current && ref.current(...args);
  }, [ref]);
}

// node_modules/@restart/ui/esm/Anchor.js
var React7 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useCallbackRef.js
var import_react10 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useEventListener.js
var import_react11 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useGlobalListener.js
var import_react12 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useInterval.js
var import_react13 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useRafInterval.js
var import_react14 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useMergeState.js
var import_react15 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useMounted.js
var import_react16 = __toESM(require_react());
function useMounted() {
  const mounted = (0, import_react16.useRef)(true);
  const isMounted = (0, import_react16.useRef)(() => mounted.current);
  (0, import_react16.useEffect)(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

// node_modules/@restart/hooks/esm/usePrevious.js
var import_react17 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useImage.js
var import_react18 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useResizeObserver.js
var import_react20 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useIsomorphicEffect.js
var import_react19 = __toESM(require_react());
var isReactNative = typeof globalThis !== "undefined" && // @ts-ignore
globalThis.navigator && // @ts-ignore
globalThis.navigator.product === "ReactNative";

// node_modules/@restart/ui/esm/Button.js
var React6 = __toESM(require_react());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var _excluded = ["as", "disabled"];
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function isTrivialHref(href) {
  return !href || href.trim() === "#";
}
function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  role,
  onClick,
  tabIndex = 0,
  type
}) {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = "a";
    } else {
      tagName = "button";
    }
  }
  const meta = {
    tagName
  };
  if (tagName === "button") {
    return [{
      type: type || "button",
      disabled
    }, meta];
  }
  const handleClick = (event) => {
    if (disabled || tagName === "a" && isTrivialHref(href)) {
      event.preventDefault();
    }
    if (disabled) {
      event.stopPropagation();
      return;
    }
    onClick == null ? void 0 : onClick(event);
  };
  const handleKeyDown = (event) => {
    if (event.key === " ") {
      event.preventDefault();
      handleClick(event);
    }
  };
  if (tagName === "a") {
    href || (href = "#");
    if (disabled) {
      href = void 0;
    }
  }
  return [{
    role: role != null ? role : "button",
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: void 0,
    tabIndex: disabled ? void 0 : tabIndex,
    href,
    target: tagName === "a" ? target : void 0,
    "aria-disabled": !disabled ? void 0 : disabled,
    rel: tagName === "a" ? rel : void 0,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, meta];
}
var Button = /* @__PURE__ */ React6.forwardRef((_ref, ref) => {
  let {
    as: asProp,
    disabled
  } = _ref, props = _objectWithoutPropertiesLoose2(_ref, _excluded);
  const [buttonProps, {
    tagName: Component
  }] = useButtonProps(Object.assign({
    tagName: asProp,
    disabled
  }, props));
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Component, Object.assign({}, props, buttonProps, {
    ref
  }));
});
Button.displayName = "Button";

// node_modules/@restart/ui/esm/Anchor.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var _excluded2 = ["onKeyDown"];
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function isTrivialHref2(href) {
  return !href || href.trim() === "#";
}
var Anchor = /* @__PURE__ */ React7.forwardRef((_ref, ref) => {
  let {
    onKeyDown
  } = _ref, props = _objectWithoutPropertiesLoose3(_ref, _excluded2);
  const [buttonProps] = useButtonProps(Object.assign({
    tagName: "a"
  }, props));
  const handleKeyDown = useEventCallback((e) => {
    buttonProps.onKeyDown(e);
    onKeyDown == null ? void 0 : onKeyDown(e);
  });
  if (isTrivialHref2(props.href) || props.role === "button") {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", Object.assign({
      ref
    }, props, buttonProps, {
      onKeyDown: handleKeyDown
    }));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", Object.assign({
    ref
  }, props, {
    onKeyDown
  }));
});
Anchor.displayName = "Anchor";
var Anchor_default = Anchor;

// node_modules/@restart/hooks/esm/useUpdateEffect.js
var import_react21 = __toESM(require_react());
function useUpdateEffect(fn, deps) {
  const isFirst = (0, import_react21.useRef)(true);
  (0, import_react21.useEffect)(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    return fn();
  }, deps);
}
var useUpdateEffect_default = useUpdateEffect;

// node_modules/@restart/hooks/esm/useTimeout.js
var import_react24 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useUpdatedRef.js
var import_react22 = __toESM(require_react());
function useUpdatedRef(value) {
  const valueRef = (0, import_react22.useRef)(value);
  valueRef.current = value;
  return valueRef;
}

// node_modules/@restart/hooks/esm/useWillUnmount.js
var import_react23 = __toESM(require_react());
function useWillUnmount(fn) {
  const onUnmount = useUpdatedRef(fn);
  (0, import_react23.useEffect)(() => () => onUnmount.current(), []);
}

// node_modules/@restart/hooks/esm/useTimeout.js
var MAX_DELAY_MS = 2 ** 31 - 1;
function setChainedTimeout(handleRef, fn, timeoutAtMs) {
  const delayMs = timeoutAtMs - Date.now();
  handleRef.current = delayMs <= MAX_DELAY_MS ? setTimeout(fn, delayMs) : setTimeout(() => setChainedTimeout(handleRef, fn, timeoutAtMs), MAX_DELAY_MS);
}
function useTimeout() {
  const isMounted = useMounted();
  const handleRef = (0, import_react24.useRef)();
  useWillUnmount(() => clearTimeout(handleRef.current));
  return (0, import_react24.useMemo)(() => {
    const clear = () => clearTimeout(handleRef.current);
    function set(fn, delayMs = 0) {
      if (!isMounted())
        return;
      clear();
      if (delayMs <= MAX_DELAY_MS) {
        handleRef.current = setTimeout(fn, delayMs);
      } else {
        setChainedTimeout(handleRef, fn, Date.now() + delayMs);
      }
    }
    return {
      set,
      clear,
      handleRef
    };
  }, []);
}

// node_modules/react-bootstrap/esm/Carousel.js
var import_classnames3 = __toESM(require_classnames());
var React11 = __toESM(require_react());
var import_react25 = __toESM(require_react());

// node_modules/react-bootstrap/esm/CarouselCaption.js
var React8 = __toESM(require_react());
var import_classnames = __toESM(require_classnames());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
"use client";
var CarouselCaption = /* @__PURE__ */ React8.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "carousel-caption");
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Component, {
    ref,
    className: (0, import_classnames.default)(className, bsPrefix),
    ...props
  });
});
CarouselCaption.displayName = "CarouselCaption";
var CarouselCaption_default = CarouselCaption;

// node_modules/react-bootstrap/esm/CarouselItem.js
var import_classnames2 = __toESM(require_classnames());
var React9 = __toESM(require_react());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
"use client";
var CarouselItem = /* @__PURE__ */ React9.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  bsPrefix,
  className,
  ...props
}, ref) => {
  const finalClassName = (0, import_classnames2.default)(className, useBootstrapPrefix(bsPrefix, "carousel-item"));
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Component, {
    ref,
    ...props,
    className: finalClassName
  });
});
CarouselItem.displayName = "CarouselItem";
var CarouselItem_default = CarouselItem;

// node_modules/react-bootstrap/esm/ElementChildren.js
var React10 = __toESM(require_react());
function map(children, func) {
  let index = 0;
  return React10.Children.map(children, (child) => /* @__PURE__ */ React10.isValidElement(child) ? func(child, index++) : child);
}
function forEach(children, func) {
  let index = 0;
  React10.Children.forEach(children, (child) => {
    if (/* @__PURE__ */ React10.isValidElement(child))
      func(child, index++);
  });
}

// node_modules/react-bootstrap/esm/Carousel.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
"use client";
var SWIPE_THRESHOLD = 40;
function isVisible(element) {
  if (!element || !element.style || !element.parentNode || !element.parentNode.style) {
    return false;
  }
  const elementStyle = getComputedStyle(element);
  return elementStyle.display !== "none" && elementStyle.visibility !== "hidden" && getComputedStyle(element.parentNode).display !== "none";
}
var Carousel = /* @__PURE__ */ React11.forwardRef(({
  defaultActiveIndex = 0,
  ...uncontrolledProps
}, ref) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "div",
    bsPrefix,
    slide = true,
    fade = false,
    controls = true,
    indicators = true,
    indicatorLabels = [],
    activeIndex,
    onSelect,
    onSlide,
    onSlid,
    interval = 5e3,
    keyboard = true,
    onKeyDown,
    pause = "hover",
    onMouseOver,
    onMouseOut,
    wrap = true,
    touch = true,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    prevIcon = /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", {
      "aria-hidden": "true",
      className: "carousel-control-prev-icon"
    }),
    prevLabel = "Previous",
    nextIcon = /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", {
      "aria-hidden": "true",
      className: "carousel-control-next-icon"
    }),
    nextLabel = "Next",
    variant,
    className,
    children,
    ...props
  } = useUncontrolled({
    defaultActiveIndex,
    ...uncontrolledProps
  }, {
    activeIndex: "onSelect"
  });
  const prefix = useBootstrapPrefix(bsPrefix, "carousel");
  const isRTL = useIsRTL();
  const nextDirectionRef = (0, import_react25.useRef)(null);
  const [direction, setDirection] = (0, import_react25.useState)("next");
  const [paused, setPaused] = (0, import_react25.useState)(false);
  const [isSliding, setIsSliding] = (0, import_react25.useState)(false);
  const [renderedActiveIndex, setRenderedActiveIndex] = (0, import_react25.useState)(activeIndex || 0);
  (0, import_react25.useEffect)(() => {
    if (!isSliding && activeIndex !== renderedActiveIndex) {
      if (nextDirectionRef.current) {
        setDirection(nextDirectionRef.current);
      } else {
        setDirection((activeIndex || 0) > renderedActiveIndex ? "next" : "prev");
      }
      if (slide) {
        setIsSliding(true);
      }
      setRenderedActiveIndex(activeIndex || 0);
    }
  }, [activeIndex, isSliding, renderedActiveIndex, slide]);
  (0, import_react25.useEffect)(() => {
    if (nextDirectionRef.current) {
      nextDirectionRef.current = null;
    }
  });
  let numChildren = 0;
  let activeChildInterval;
  forEach(children, (child, index) => {
    ++numChildren;
    if (index === activeIndex) {
      activeChildInterval = child.props.interval;
    }
  });
  const activeChildIntervalRef = useCommittedRef_default(activeChildInterval);
  const prev = (0, import_react25.useCallback)((event) => {
    if (isSliding) {
      return;
    }
    let nextActiveIndex = renderedActiveIndex - 1;
    if (nextActiveIndex < 0) {
      if (!wrap) {
        return;
      }
      nextActiveIndex = numChildren - 1;
    }
    nextDirectionRef.current = "prev";
    onSelect == null ? void 0 : onSelect(nextActiveIndex, event);
  }, [isSliding, renderedActiveIndex, onSelect, wrap, numChildren]);
  const next = useEventCallback((event) => {
    if (isSliding) {
      return;
    }
    let nextActiveIndex = renderedActiveIndex + 1;
    if (nextActiveIndex >= numChildren) {
      if (!wrap) {
        return;
      }
      nextActiveIndex = 0;
    }
    nextDirectionRef.current = "next";
    onSelect == null ? void 0 : onSelect(nextActiveIndex, event);
  });
  const elementRef = (0, import_react25.useRef)();
  (0, import_react25.useImperativeHandle)(ref, () => ({
    element: elementRef.current,
    prev,
    next
  }));
  const nextWhenVisible = useEventCallback(() => {
    if (!document.hidden && isVisible(elementRef.current)) {
      if (isRTL) {
        prev();
      } else {
        next();
      }
    }
  });
  const slideDirection = direction === "next" ? "start" : "end";
  useUpdateEffect_default(() => {
    if (slide) {
      return;
    }
    onSlide == null ? void 0 : onSlide(renderedActiveIndex, slideDirection);
    onSlid == null ? void 0 : onSlid(renderedActiveIndex, slideDirection);
  }, [renderedActiveIndex]);
  const orderClassName = `${prefix}-item-${direction}`;
  const directionalClassName = `${prefix}-item-${slideDirection}`;
  const handleEnter = (0, import_react25.useCallback)((node) => {
    triggerBrowserReflow(node);
    onSlide == null ? void 0 : onSlide(renderedActiveIndex, slideDirection);
  }, [onSlide, renderedActiveIndex, slideDirection]);
  const handleEntered = (0, import_react25.useCallback)(() => {
    setIsSliding(false);
    onSlid == null ? void 0 : onSlid(renderedActiveIndex, slideDirection);
  }, [onSlid, renderedActiveIndex, slideDirection]);
  const handleKeyDown = (0, import_react25.useCallback)((event) => {
    if (keyboard && !/input|textarea/i.test(event.target.tagName)) {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          if (isRTL) {
            next(event);
          } else {
            prev(event);
          }
          return;
        case "ArrowRight":
          event.preventDefault();
          if (isRTL) {
            prev(event);
          } else {
            next(event);
          }
          return;
        default:
      }
    }
    onKeyDown == null ? void 0 : onKeyDown(event);
  }, [keyboard, onKeyDown, prev, next, isRTL]);
  const handleMouseOver = (0, import_react25.useCallback)((event) => {
    if (pause === "hover") {
      setPaused(true);
    }
    onMouseOver == null ? void 0 : onMouseOver(event);
  }, [pause, onMouseOver]);
  const handleMouseOut = (0, import_react25.useCallback)((event) => {
    setPaused(false);
    onMouseOut == null ? void 0 : onMouseOut(event);
  }, [onMouseOut]);
  const touchStartXRef = (0, import_react25.useRef)(0);
  const touchDeltaXRef = (0, import_react25.useRef)(0);
  const touchUnpauseTimeout = useTimeout();
  const handleTouchStart = (0, import_react25.useCallback)((event) => {
    touchStartXRef.current = event.touches[0].clientX;
    touchDeltaXRef.current = 0;
    if (pause === "hover") {
      setPaused(true);
    }
    onTouchStart == null ? void 0 : onTouchStart(event);
  }, [pause, onTouchStart]);
  const handleTouchMove = (0, import_react25.useCallback)((event) => {
    if (event.touches && event.touches.length > 1) {
      touchDeltaXRef.current = 0;
    } else {
      touchDeltaXRef.current = event.touches[0].clientX - touchStartXRef.current;
    }
    onTouchMove == null ? void 0 : onTouchMove(event);
  }, [onTouchMove]);
  const handleTouchEnd = (0, import_react25.useCallback)((event) => {
    if (touch) {
      const touchDeltaX = touchDeltaXRef.current;
      if (Math.abs(touchDeltaX) > SWIPE_THRESHOLD) {
        if (touchDeltaX > 0) {
          prev(event);
        } else {
          next(event);
        }
      }
    }
    if (pause === "hover") {
      touchUnpauseTimeout.set(() => {
        setPaused(false);
      }, interval || void 0);
    }
    onTouchEnd == null ? void 0 : onTouchEnd(event);
  }, [touch, pause, prev, next, touchUnpauseTimeout, interval, onTouchEnd]);
  const shouldPlay = interval != null && !paused && !isSliding;
  const intervalHandleRef = (0, import_react25.useRef)();
  (0, import_react25.useEffect)(() => {
    var _ref, _activeChildIntervalR;
    if (!shouldPlay) {
      return void 0;
    }
    const nextFunc = isRTL ? prev : next;
    intervalHandleRef.current = window.setInterval(document.visibilityState ? nextWhenVisible : nextFunc, (_ref = (_activeChildIntervalR = activeChildIntervalRef.current) != null ? _activeChildIntervalR : interval) != null ? _ref : void 0);
    return () => {
      if (intervalHandleRef.current !== null) {
        clearInterval(intervalHandleRef.current);
      }
    };
  }, [shouldPlay, prev, next, activeChildIntervalRef, interval, nextWhenVisible, isRTL]);
  const indicatorOnClicks = (0, import_react25.useMemo)(() => indicators && Array.from({
    length: numChildren
  }, (_, index) => (event) => {
    onSelect == null ? void 0 : onSelect(index, event);
  }), [indicators, numChildren, onSelect]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Component, {
    ref: elementRef,
    ...props,
    onKeyDown: handleKeyDown,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    className: (0, import_classnames3.default)(className, prefix, slide && "slide", fade && `${prefix}-fade`, variant && `${prefix}-${variant}`),
    children: [indicators && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {
      className: `${prefix}-indicators`,
      children: map(children, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", {
        type: "button",
        "data-bs-target": "",
        "aria-label": indicatorLabels != null && indicatorLabels.length ? indicatorLabels[index] : `Slide ${index + 1}`,
        className: index === renderedActiveIndex ? "active" : void 0,
        onClick: indicatorOnClicks ? indicatorOnClicks[index] : void 0,
        "aria-current": index === renderedActiveIndex
      }, index))
    }), /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {
      className: `${prefix}-inner`,
      children: map(children, (child, index) => {
        const isActive = index === renderedActiveIndex;
        return slide ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TransitionWrapper_default, {
          in: isActive,
          onEnter: isActive ? handleEnter : void 0,
          onEntered: isActive ? handleEntered : void 0,
          addEndListener: transitionEndListener,
          children: (status, innerProps) => /* @__PURE__ */ React11.cloneElement(child, {
            ...innerProps,
            className: (0, import_classnames3.default)(child.props.className, isActive && status !== "entered" && orderClassName, (status === "entered" || status === "exiting") && "active", (status === "entering" || status === "exiting") && directionalClassName)
          })
        }) : /* @__PURE__ */ React11.cloneElement(child, {
          className: (0, import_classnames3.default)(child.props.className, isActive && "active")
        });
      })
    }), controls && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime9.Fragment, {
      children: [(wrap || activeIndex !== 0) && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Anchor_default, {
        className: `${prefix}-control-prev`,
        onClick: prev,
        children: [prevIcon, prevLabel && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", {
          className: "visually-hidden",
          children: prevLabel
        })]
      }), (wrap || activeIndex !== numChildren - 1) && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Anchor_default, {
        className: `${prefix}-control-next`,
        onClick: next,
        children: [nextIcon, nextLabel && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", {
          className: "visually-hidden",
          children: nextLabel
        })]
      })]
    })]
  });
});
Carousel.displayName = "Carousel";
var Carousel_default = Object.assign(Carousel, {
  Caption: CarouselCaption_default,
  Item: CarouselItem_default
});

// app/routes/location.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/location.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/location.tsx"
  );
  import.meta.hot.lastModified = "1707982562765.8376";
}
var Index = () => {
  _s();
  const backgroundImage = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundImage: 'url("./img/location.jpg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 0px"
  };
  const [index, setIndex] = (0, import_react26.useState)(0);
  const [submenuTop, setSubmenuTop] = (0, import_react26.useState)("750px");
  const [smallWindow, setSmallWindow] = (0, import_react26.useState)(true);
  (0, import_react26.useEffect)(() => {
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
  (0, import_react26.useEffect)(() => {
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
  const images = ["c1.jpeg", "c2.jpg", "c3.png", "c4.png", "c5.jpg", "c6.jpg", "c7.png"];
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    background: "#fff"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(navigate_default, { manu: "manu7dt" }, void 0, false, {
      fileName: "app/routes/location.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    smallWindow ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "submenu", style: {
      top: submenuTop
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/telescope", children: "Overview" }, void 0, false, {
        fileName: "app/routes/location.tsx",
        lineNumber: 79,
        columnNumber: 31
      }, this) }, void 0, false, {
        fileName: "app/routes/location.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2 active", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", children: "Location" }, void 0, false, {
        fileName: "app/routes/location.tsx",
        lineNumber: 80,
        columnNumber: 38
      }, this) }, void 0, false, {
        fileName: "app/routes/location.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/specification", children: "Specification" }, void 0, false, {
        fileName: "app/routes/location.tsx",
        lineNumber: 81,
        columnNumber: 31
      }, this) }, void 0, false, {
        fileName: "app/routes/location.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/location.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/location.tsx",
      lineNumber: 75,
      columnNumber: 22
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: backgroundImage, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      height: "700px"
    } }, void 0, false, {
      fileName: "app/routes/location.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/location.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
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
        }, children: "Build the Telescope" }, void 0, false, {
          fileName: "app/routes/location.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900", style: {
          textAlign: "center",
          fontWeight: "700",
          color: "var(--pickled-bluewood-900)"
        }, children: [
          "7DT in ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            color: "var(--pickled-bluewood-600)"
          }, children: "Chile" }, void 0, false, {
            fileName: "app/routes/location.tsx",
            lineNumber: 112,
            columnNumber: 22
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/location.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/location.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-content", children: locationText }, void 0, false, {
        fileName: "app/routes/location.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/location.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/location.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Carousel_default, { activeIndex: index, onSelect: handleSelect, interval: 3e3, style: {
      zIndex: 100
    }, children: images.map((image, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Carousel_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-block w-100", style: {
      backgroundImage: `url(./img/carousel/${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "700px",
      overflow: "hidden"
    } }, void 0, false, {
      fileName: "app/routes/location.tsx",
      lineNumber: 124,
      columnNumber: 13
    }, this) }, idx, false, {
      fileName: "app/routes/location.tsx",
      lineNumber: 123,
      columnNumber: 37
    }, this)) }, void 0, false, {
      fileName: "app/routes/location.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(footer_default, {}, void 0, false, {
      fileName: "app/routes/location.tsx",
      lineNumber: 134,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/location.tsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
};
_s(Index, "WJUQ+dnaytjRzpUQi45NEKKbrJo=");
_c = Index;
var location_default = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  location_default as default
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=/build/routes/location-PBO4PHJY.js.map