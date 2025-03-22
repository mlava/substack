"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
// import styled from 'styled-components';
const context_1 = require("./context");
const Clue_1 = __importDefault(require("./Clue"));
// interface ClueInfo {
//   number: string;
//   clue: string;
//   correct?: boolean;
// }
const directionCluesPropTypes = {
    /** direction of this list of clues ("across" or "down") */
    direction: prop_types_1.default.string.isRequired,
    /** a label to use instead of the (English) default */
    label: prop_types_1.default.string,
};
function DirectionClues({ direction, label, }) {
    const { clues } = (0, react_1.useContext)(context_1.CrosswordContext);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "direction" }, { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ className: "header" }, { children: label || direction.toUpperCase() })), clues === null || clues === void 0 ? void 0 : clues[direction].map(({ number, clue, complete, correct }) => ((0, jsx_runtime_1.jsx)(Clue_1.default, Object.assign({ direction: direction, number: number, complete: complete, correct: correct }, { children: clue }), number)))] })));
}
exports.default = DirectionClues;
DirectionClues.propTypes = directionCluesPropTypes;
DirectionClues.defaultProps = {
    label: undefined,
};
//# sourceMappingURL=DirectionClues.js.map