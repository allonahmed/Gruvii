function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { Text as RNText } from 'react-native';
import { findAll } from 'highlight-words-core';
export default function HighlightText(_ref) {
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

  const chunks = findAll({
    autoEscape,
    caseSensitive,
    sanitize,
    searchWords,
    textToHighlight
  });
  const Text = textComponent || RNText;
  const Highlight = highlightComponent || RNText;
  return /*#__PURE__*/React.createElement(Text, props, chunks.map((chunk, index) => {
    const text = textToHighlight.substr(chunk.start, chunk.end - chunk.start);
    return chunk.highlight ? /*#__PURE__*/React.createElement(Highlight, {
      key: "chunk-".concat(index),
      style: highlightStyle
    }, text) : text;
  }));
}
//# sourceMappingURL=index.js.map