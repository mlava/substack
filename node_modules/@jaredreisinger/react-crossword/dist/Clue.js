"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importStar(require("styled-components"));
const context_1 = require("./context");
const ClueWrapper = styled_components_1.default.div.attrs((props) => ({
    className: `clue${props.complete ? (props.correct ? ' correct' : ' incorrect') : ''}`,
})) `
  cursor: default;
  background-color: ${(props) => props.highlight ? props.highlightBackground : 'transparent'};
`;
/**
 * Renders an individual clue, with its number. Makes use of `CrosswordContext`
 * to know whether to render as “highlighted” or not, and uses the theme to
 * provide the highlighting color.
 */
function Clue(_a) {
    var { direction, number, children, complete, correct } = _a, props = __rest(_a, ["direction", "number", "children", "complete", "correct"]);
    const { highlightBackground } = (0, react_1.useContext)(styled_components_1.ThemeContext);
    const { focused, selectedDirection, selectedNumber, handleClueSelected } = (0, react_1.useContext)(context_1.CrosswordContext);
    const handleClick = (0, react_1.useCallback)((event) => {
        event.preventDefault();
        handleClueSelected(direction, number);
    }, [direction, number, handleClueSelected]);
    return ((0, jsx_runtime_1.jsxs)(ClueWrapper, Object.assign({ highlightBackground: highlightBackground, highlight: focused && direction === selectedDirection && number === selectedNumber, complete: complete, correct: correct }, props, { onClick: handleClick, "aria-label": `clue-${number}-${direction}` }, { children: [number, ": ", children] })));
}
exports.default = Clue;
Clue.propTypes = {
    /** direction of the clue: "across" or "down"; passed back in onClick */
    direction: prop_types_1.default.string.isRequired,
    /** number of the clue (the label shown); passed back in onClick */
    number: prop_types_1.default.string.isRequired,
    /** clue text */
    children: prop_types_1.default.node.isRequired,
    /** whether the answer/guess is complete */
    complete: prop_types_1.default.bool,
    /** whether the answer/guess is correct */
    correct: prop_types_1.default.bool,
};
Clue.defaultProps = {
    // children: undefined,
    complete: undefined,
    correct: undefined,
};
//# sourceMappingURL=Clue.js.map