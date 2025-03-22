"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = require("styled-components");
const context_1 = require("./context");
const cellPropTypes = {
    /** the data specific to this cell */
    cellData: prop_types_1.default.shape({
        row: prop_types_1.default.number.isRequired,
        col: prop_types_1.default.number.isRequired,
        guess: prop_types_1.default.string,
        number: prop_types_1.default.string,
        answer: prop_types_1.default.string,
    }).isRequired,
    /** whether this cell has focus */
    focus: prop_types_1.default.bool,
    /** whether this cell is highlighted */
    highlight: prop_types_1.default.bool,
    /** handler called when the cell is clicked */
    onClick: prop_types_1.default.func,
};
/**
 * An individual-letter answer cell within the crossword grid.
 *
 * A `Cell` lives inside the SVG for a
 * [`CrosswordGrid`](#/Complex%20layouts/CrosswordGrid), and renders at a
 * position determined by the `row`, `col`, and `cellSize` properties from
 * `cellData` and `renderContext`.
 */
function Cell({ cellData, onClick, focus, highlight, }) {
    const { cellSize, cellPadding, cellInner, cellHalf, fontSize } = (0, react_1.useContext)(context_1.CrosswordSizeContext);
    const { 
    // gridBackground,
    cellBackground, cellBorder, textColor, numberColor, focusBackground, highlightBackground, } = (0, react_1.useContext)(styled_components_1.ThemeContext);
    const handleClick = (0, react_1.useCallback)((event) => {
        event.preventDefault();
        if (onClick) {
            onClick(cellData);
        }
    }, [cellData, onClick]);
    const { row, col, guess, number, answer } = cellData;
    const x = col * cellSize;
    const y = row * cellSize;
    return ((0, jsx_runtime_1.jsxs)("g", Object.assign({ onClick: handleClick, style: { cursor: 'default', fontSize: `${fontSize}px` }, className: "clue-cell" }, { children: [(0, jsx_runtime_1.jsx)("rect", { x: x + cellPadding, y: y + cellPadding, width: cellInner, height: cellInner, fill: focus
                    ? focusBackground
                    : highlight
                        ? highlightBackground
                        : cellBackground, stroke: cellBorder, strokeWidth: cellSize / 50 }), number && ((0, jsx_runtime_1.jsx)("text", Object.assign({ x: x + cellPadding * 4, y: y + cellPadding * 4, textAnchor: "start", dominantBaseline: "hanging", style: { fontSize: '50%', fill: numberColor } }, { children: number }))), (0, jsx_runtime_1.jsx)("text", Object.assign({ x: x + cellHalf, y: y + cellHalf + 1, textAnchor: "middle", dominantBaseline: "middle", style: { fill: textColor }, className: answer === guess ? 'guess-text-correct' : 'guess-text-incorrect' }, { children: guess }))] })));
}
exports.default = Cell;
Cell.propTypes = cellPropTypes;
Cell.defaultProps = {
    focus: false,
    highlight: false,
    onClick: null,
};
//# sourceMappingURL=Cell.js.map