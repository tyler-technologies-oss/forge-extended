"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DarkMode = DarkMode;
exports.updateStore = exports.store = exports.prefersDark = exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _global = require("@storybook/global");
var _theming = require("@storybook/theming");
var _components = require("@storybook/components");
var _icons = require("@storybook/icons");
var _coreEvents = require("@storybook/core-events");
var _managerApi = require("@storybook/manager-api");
var _fastDeepEqual = _interopRequireDefault(require("fast-deep-equal"));
var _constants = require("./constants");
var _excluded = ["current", "stylePreview"];
var _window$matchMedia;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var _ref = _global.global,
  document = _ref.document,
  window = _ref.window;
var modes = ['light', 'dark'];
var STORAGE_KEY = 'sb-addon-themes-3';
var prefersDark = (_window$matchMedia = window.matchMedia) === null || _window$matchMedia === void 0 ? void 0 : _window$matchMedia.call(window, '(prefers-color-scheme: dark)');
exports.prefersDark = prefersDark;
var defaultParams = {
  classTarget: 'body',
  dark: _theming.themes.dark,
  darkClass: ['dark'],
  light: _theming.themes.light,
  lightClass: ['light'],
  stylePreview: false,
  userHasExplicitlySetTheTheme: false
};

/** Persist the dark mode settings in localStorage */
var updateStore = function updateStore(newStore) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newStore));
};

/** Add the light/dark class to an element */
exports.updateStore = updateStore;
var toggleDarkClass = function toggleDarkClass(el, _ref2) {
  var current = _ref2.current,
    _ref2$darkClass = _ref2.darkClass,
    darkClass = _ref2$darkClass === void 0 ? defaultParams.darkClass : _ref2$darkClass,
    _ref2$lightClass = _ref2.lightClass,
    lightClass = _ref2$lightClass === void 0 ? defaultParams.lightClass : _ref2$lightClass;
  if (current === 'dark') {
    var _el$classList, _el$classList2;
    (_el$classList = el.classList).remove.apply(_el$classList, _toConsumableArray(arrayify(lightClass)));
    (_el$classList2 = el.classList).add.apply(_el$classList2, _toConsumableArray(arrayify(darkClass)));
  } else {
    var _el$classList3, _el$classList4;
    (_el$classList3 = el.classList).remove.apply(_el$classList3, _toConsumableArray(arrayify(darkClass)));
    (_el$classList4 = el.classList).add.apply(_el$classList4, _toConsumableArray(arrayify(lightClass)));
  }
};

/** Coerce a string to a single item array, or return an array as-is */
var arrayify = function arrayify(classes) {
  var arr = [];
  return arr.concat(classes).map(function (item) {
    return item;
  });
};

/** Update the preview iframe class */
var updatePreview = function updatePreview(store) {
  var _iframe$contentWindow;
  var iframe = document.getElementById('storybook-preview-iframe');
  if (!iframe) {
    return;
  }
  var iframeDocument = iframe.contentDocument || ((_iframe$contentWindow = iframe.contentWindow) === null || _iframe$contentWindow === void 0 ? void 0 : _iframe$contentWindow.document);
  var target = iframeDocument === null || iframeDocument === void 0 ? void 0 : iframeDocument.querySelector(store.classTarget);
  if (!target) {
    return;
  }
  toggleDarkClass(target, store);
};

/** Update the manager iframe class */
var updateManager = function updateManager(store) {
  var manager = document.querySelector(store.classTarget);
  if (!manager) {
    return;
  }
  toggleDarkClass(manager, store);
};

/** Update changed dark mode settings and persist to localStorage  */
var store = function store() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var storedItem = window.localStorage.getItem(STORAGE_KEY);
  if (typeof storedItem === 'string') {
    var stored = JSON.parse(storedItem);
    if (userTheme) {
      if (userTheme.dark && !(0, _fastDeepEqual["default"])(stored.dark, userTheme.dark)) {
        stored.dark = userTheme.dark;
        updateStore(stored);
      }
      if (userTheme.light && !(0, _fastDeepEqual["default"])(stored.light, userTheme.light)) {
        stored.light = userTheme.light;
        updateStore(stored);
      }
    }
    return stored;
  }
  return _objectSpread(_objectSpread({}, defaultParams), userTheme);
};

// On initial load, set the dark mode class on the manager
// This is needed if you're using mostly CSS overrides to styles the storybook
// Otherwise the default theme is set in src/preset/manager.tsx
exports.store = store;
updateManager(store());
/** A toolbar icon to toggle between dark and light themes in storybook */
function DarkMode(_ref3) {
  var api = _ref3.api;
  var _React$useState = React.useState(prefersDark.matches),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isDark = _React$useState2[0],
    setDark = _React$useState2[1];
  var darkModeParams = (0, _managerApi.useParameter)('darkMode', {});
  var defaultMode = darkModeParams.current,
    stylePreview = darkModeParams.stylePreview,
    params = _objectWithoutProperties(darkModeParams, _excluded);
  var channel = api.getChannel();
  // Save custom themes on init
  var userHasExplicitlySetTheTheme = React.useMemo(function () {
    return store(params).userHasExplicitlySetTheTheme;
  }, [params]);
  /** Set the theme in storybook, update the local state, and emit an event */
  var setMode = React.useCallback(function (mode) {
    var currentStore = store();
    api.setOptions({
      theme: currentStore[mode]
    });
    setDark(mode === 'dark');
    api.getChannel().emit(_constants.DARK_MODE_EVENT_NAME, mode === 'dark');
    updateManager(currentStore);
    if (stylePreview) {
      updatePreview(currentStore);
    }
  }, [api, stylePreview]);

  /** Update the theme settings in localStorage, react, and storybook */
  var updateMode = React.useCallback(function (mode) {
    var currentStore = store();
    var current = mode || (currentStore.current === 'dark' ? 'light' : 'dark');
    updateStore(_objectSpread(_objectSpread({}, currentStore), {}, {
      current: current
    }));
    setMode(current);
  }, [setMode]);

  /** Update the theme based on the color preference */
  function prefersDarkUpdate(event) {
    if (userHasExplicitlySetTheTheme || defaultMode) {
      return;
    }
    updateMode(event.matches ? 'dark' : 'light');
  }

  /** Render the current theme */
  var renderTheme = React.useCallback(function () {
    var _store = store(),
      _store$current = _store.current,
      current = _store$current === void 0 ? 'light' : _store$current;
    setMode(current);
  }, [setMode]);

  /** Handle the user event and side effects */
  var handleIconClick = function handleIconClick() {
    updateMode();
    var currentStore = store();
    updateStore(_objectSpread(_objectSpread({}, currentStore), {}, {
      userHasExplicitlySetTheTheme: true
    }));
  };

  /** When storybook params change update the stored themes */
  React.useEffect(function () {
    var currentStore = store();
    // Ensure we use the stores `current` value first to persist
    // themeing between page loads and story changes.
    updateStore(_objectSpread(_objectSpread(_objectSpread({}, currentStore), darkModeParams), {}, {
      current: currentStore.current || darkModeParams.current
    }));
    renderTheme();
  }, [darkModeParams, renderTheme]);
  React.useEffect(function () {
    channel.on(_coreEvents.STORY_CHANGED, renderTheme);
    channel.on(_coreEvents.SET_STORIES, renderTheme);
    channel.on(_coreEvents.DOCS_RENDERED, renderTheme);
    prefersDark.addListener(prefersDarkUpdate);
    return function () {
      channel.removeListener(_coreEvents.STORY_CHANGED, renderTheme);
      channel.removeListener(_coreEvents.SET_STORIES, renderTheme);
      channel.removeListener(_coreEvents.DOCS_RENDERED, renderTheme);
      prefersDark.removeListener(prefersDarkUpdate);
    };
  });
  React.useEffect(function () {
    channel.on(_constants.UPDATE_DARK_MODE_EVENT_NAME, updateMode);
    return function () {
      channel.removeListener(_constants.UPDATE_DARK_MODE_EVENT_NAME, updateMode);
    };
  });
  // Storybook's first render doesn't have the global user params loaded so we
  // need the effect to run whenever defaultMode is updated
  React.useEffect(function () {
    // If a users has set the mode this is respected
    if (userHasExplicitlySetTheTheme) {
      return;
    }
    if (defaultMode) {
      updateMode(defaultMode);
    } else if (prefersDark.matches) {
      updateMode('dark');
    }
  }, [defaultMode, updateMode, userHasExplicitlySetTheTheme]);
  return /*#__PURE__*/React.createElement(_components.IconButton, {
    key: "dark-mode",
    title: isDark ? 'Change theme to light mode' : 'Change theme to dark mode',
    onClick: handleIconClick
  }, isDark ? /*#__PURE__*/React.createElement(_icons.SunIcon, {
    "aria-hidden": "true"
  }) : /*#__PURE__*/React.createElement(_icons.MoonIcon, {
    "aria-hidden": "true"
  }));
}
var _default = DarkMode;
exports["default"] = _default;