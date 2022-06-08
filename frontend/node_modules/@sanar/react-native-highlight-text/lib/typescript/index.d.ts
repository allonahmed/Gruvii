import React from 'react';
import { TextProps, TextStyle } from 'react-native';
import { FindAllArgs } from 'highlight-words-core';
interface HighlightTextProps extends FindAllArgs, TextProps {
    highlightStyle?: TextStyle;
    highlightComponent?: React.ComponentType<TextProps>;
    textComponent?: React.ComponentType<TextProps>;
}
export default function HighlightText({ autoEscape, caseSensitive, sanitize, searchWords, textToHighlight, highlightStyle, highlightComponent, textComponent, ...props }: HighlightTextProps): JSX.Element;
export {};
