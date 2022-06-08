"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HighlightText;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _highlightWordsCore = require("highlight-words-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function HighlightText(_ref) {
  let {
    autoEscape,
    caseSensitive,
    sanitize,
    searchWords,
    textToHighlight,
    highlightStyle,
    highlightComponent,
    textComponent
  } = _ref,
      props = _objectWithoutProperties(_ref, ["autoEscape", "caseSensitive", "sanitize", "searchWords", "textToHighlight", "highlightStyle", "highlightComponent", "textComponent"]);

  const chunks = (0, _highlightWordsCore.findAll)({
    autoEscape,
    caseSensitive,
    sanitize,
    searchWords,
    textToHighlight
  });
  const Text = textComponent || _reactNative.Text;
  const Highlight = highlightComponent || _reactNative.Text;
  return /*#__PURE__*/_react.default.createElement(Text, props, chunks.map((chunk, index) => {
    const text = textToHighlight.substr(chunk.start, chunk.end - chunk.start);
    return chunk.highlight ? /*#__PURE__*/_react.default.createElement(Highlight, {
      key: "chunk-".concat(index),
      style: highlightStyle
    }, text) : text;
  }));
}
//# sourceMappingURL=index.js.map