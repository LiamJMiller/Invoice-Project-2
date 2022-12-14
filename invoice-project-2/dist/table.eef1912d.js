// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"table.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* <form id="">
  <select>
    <option value="" selected="selected">Select Site</option>
    <option>Waterside Essex</option>
    <option>Dunton Court</option>
    <option>New Forest Glades</option>
    <option>Milford on sea</option>
    <option>Leicester</option>
    <option>Did Not Work</option>
  </select>
</form>

<form id="">
  <select>
    <option value="" selected="selected">Select Shift</option>
    <option>Day</option>
    <option>Night</option>
    <option>Double</option>
    <option>Did Not Work</option>
    <option>Holiday</option>
  </select>
</form>

<form id="">
  <select>
    <option value="" selected="selected">Select Pay</option>
    <option>150</option>
    <option>300</option>
    <option>450</option>
    <option>Did Not Work</option>
  </select>
</form> */
///////////////////////
// const invoiceTemplate = document.createElement("template");
// invoiceTemplate.innerHTML = `
//   <form id="invoiceTable">
//     <table class="table">
//       <tr>
//         <th>WeekDay</th>
//         <th>date</th>
//         <th>Site</th>
//         <th>Shift</th>
//         <th>Rate</th>
//       </tr>
//       <tr>
//         <td>Monday</td>
//         <td>4</td>
//         <td>
//           <form id="monSite">
//             <select>
//               <option value="" selected="selected">
//                 Select Site
//               </option>
//               <option>Waterside Essex</option>
//               <option>Dunton Court</option>
//               <option>New Forest Glades</option>
//               <option>Milford on sea</option>
//               <option>Leicester</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="monShift">
//             <select>
//               <option value="" selected="selected">
//                 Select Shift
//               </option>
//               <option>Day</option>
//               <option>Night</option>
//               <option>Double</option>
//               <option>Did Not Work</option>
//               <option>Holiday</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="monPay">
//             <select>
//               <option value="" selected="selected">
//                 Select Pay
//               </option>
//               <option>150</option>
//               <option>300</option>
//               <option>450</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//       </tr>
//       <tr>
//         <td>Tuesday</td>
//         <td>4</td>
//         <td>
//           <form id="tueSite">
//             <select>
//               <option value="" selected="selected">
//                 Select Site
//               </option>
//               <option>Waterside Essex</option>
//               <option>Dunton Court</option>
//               <option>New Forest Glades</option>
//               <option>Milford on sea</option>
//               <option>Leicester</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="tueShift">
//             <select>
//               <option value="" selected="selected">
//                 Select Shift
//               </option>
//               <option>Day</option>
//               <option>Night</option>
//               <option>Double</option>
//               <option>Did Not Work</option>
//               <option>Holiday</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="tuePay">
//             <select>
//               <option value="" selected="selected">
//                 Select Pay
//               </option>
//               <option>150</option>
//               <option>300</option>
//               <option>450</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//       </tr>
//       <tr>
//         <td>Wednesday</td>
//         <td>4</td>
//         <td>
//           <form id="wedSite">
//             <select>
//               <option value="" selected="selected">
//                 Select Site
//               </option>
//               <option>Waterside Essex</option>
//               <option>Dunton Court</option>
//               <option>New Forest Glades</option>
//               <option>Milford on sea</option>
//               <option>Leicester</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="wedShift">
//             <select>
//               <option value="" selected="selected">
//                 Select Shift
//               </option>
//               <option>Day</option>
//               <option>Night</option>
//               <option>Double</option>
//               <option>Did Not Work</option>
//               <option>Holiday</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="wedPay">
//             <select>
//               <option value="" selected="selected">
//                 Select Pay
//               </option>
//               <option>150</option>
//               <option>300</option>0<option>450</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//       </tr>
//       <tr>
//         <td>Thursday</td>
//         <td>4</td>
//         <td>
//           <form id="ThuSite">
//             <select>
//               <option value="" selected="selected">
//                 Select Site
//               </option>
//               <option>Waterside Essex</option>
//               <option>Dunton Court</option>
//               <option>New Forest Glades</option>
//               <option>Milford on sea</option>
//               <option>Leicester</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="ThuShift">
//             <select>
//               <option value="" selected="selected">
//                 Select Shift
//               </option>
//               <option>Day</option>
//               <option>Night</option>
//               <option>Double</option>
//               <option>Did Not Work</option>
//               <option>Holiday</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="ThuPay">
//             <select>
//               <option value="" selected="selected">
//                 Select Pay
//               </option>
//               <option>150</option>
//               <option>300</option>
//               <option>450</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//       </tr>
//       <tr>
//         <td>Friday</td>
//         <td>4</td>
//         <td>
//           <form id="friSite">
//             <select>
//               <option value="" selected="selected">
//                 Select Site
//               </option>
//               <option>Waterside Essex</option>
//               <option>Dunton Court</option>
//               <option>New Forest Glades</option>
//               <option>Milford on sea</option>
//               <option>Leicester</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="FriShift">
//             <select>
//               <option value="" selected="selected">
//                 Select Shift
//               </option>
//               <option>Day</option>
//               <option>Night</option>
//               <option>Double</option>
//               <option>Did Not Work</option>
//               <option>Holiday</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="FriPay">
//             <select>
//               <option value="" selected="selected">
//                 Select Pay
//               </option>
//               <option>150</option>
//               <option>300</option>
//               <option>450</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//       </tr>
//       <tr>
//         <td>Saturday</td>
//         <td>4</td>
//         <td>
//           <form id="satSite">
//             <select>
//               <option value="" selected="selected">
//                 Select Site
//               </option>
//               <option>Waterside Essex</option>
//               <option>Dunton Court</option>
//               <option>New Forest Glades</option>
//               <option>Milford on sea</option>
//               <option>Leicester</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="satShift">
//             <select>
//               <option value="" selected="selected">
//                 Select Shift
//               </option>
//               <option>Day</option>
//               <option>Night</option>
//               <option>Double</option>
//               <option>Did Not Work</option>
//               <option>Holiday</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="satPay">
//             <select>
//               <option value="" selected="selected">
//                 Select Pay
//               </option>
//               <option>150</option>
//               <option>300</option>
//               <option>450</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//       </tr>
//       <tr>
//         <td>Sunday</td>
//         <td>4</td>
//         <td>
//           <form id="sunSite">
//             <select>
//               <option value="" selected="selected">
//                 Select Site
//               </option>
//               <option>Waterside Essex</option>
//               <option>Dunton Court</option>
//               <option>New Forest Glades</option>
//               <option>Milford on sea</option>
//               <option>Leicester</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="sunShift">
//             <select>
//               <option value="" selected="selected">
//                 Select Shift
//               </option>
//               <option>Day</option>
//               <option>Night</option>
//               <option>Double</option>
//               <option>Did Not Work</option>
//               <option>Holiday</option>
//             </select>
//           </form>
//         </td>
//         <td>
//           <form id="sunPay">
//             <select>
//               <option value="" selected="selected">
//                 Select Pay
//               </option>
//               <option>150</option>
//               <option>300</option>
//               <option>450</option>
//               <option>Did Not Work</option>
//             </select>
//           </form>
//         </td>
//       </tr>
//       <tr id="totals">
//         <th>Totals</th>
//         <td>------</td>
//         <td>total Days</td>
//         <td>total Shifts</td>
//         <td>Total Rate</td>
//       </tr>
//     </table>
//     <button class="button">Submit grid</button>
//   </form>
// `;
// class invoiceTable extends HTMLTableElement {
//   constructor() {
//     super();
//   }
//   connectedCallback() {
//     const shadowRoot = this.attachShadow({ mode: "open" });
//     shadowRoot.appendChild(invoiceTemplate.content);
//   }
// }
// customElements.define("header-component", Header);
//////////////////////
var siteSelector = document.createElement("form");
siteSelector.innerHTML = "  \n<select>\n<option value=\"\" selected=\"selected\">Select Site</option>\n<option>Waterside Essex</option>\n<option>Dunton Court</option>\n<option>New Forest Glades</option>\n<option>Milford on sea</option>\n<option>Leicester</option>\n<option>Did Not Work</option>\n</select>";

var siteDropdown = /*#__PURE__*/function (_HTMLElement) {
  _inherits(siteDropdown, _HTMLElement);

  var _super = _createSuper(siteDropdown);

  function siteDropdown() {
    _classCallCheck(this, siteDropdown);

    return _super.call(this);
  }

  _createClass(siteDropdown, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var shadowRoot = this.attachShadow({
        mode: "open"
      });
      shadowRoot.appendChild(siteSelector.content);
    }
  }]);

  return siteDropdown;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65319" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","table.js"], null)
//# sourceMappingURL=/table.eef1912d.js.map