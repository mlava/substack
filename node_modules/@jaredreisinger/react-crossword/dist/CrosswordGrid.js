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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importStar(require("styled-components"));
const Cell_1 = __importDefault(require("./Cell"));
const context_1 = require("./context");
// import {
// } from './types';
const defaultTheme = {
    columnBreakpoint: '768px',
    gridBackground: 'rgb(0,0,0)',
    cellBackground: 'rgb(255,255,255)',
    cellBorder: 'rgb(0,0,0)',
    textColor: 'rgb(0,0,0)',
    numberColor: 'rgba(0,0,0, 0.25)',
    focusBackground: 'rgb(255,255,0)',
    highlightBackground: 'rgb(255,255,204)',
};
const GridWrapper = styled_components_1.default.div.attrs(( /* props */) => ({
    className: 'crossword grid',
})) `
  /* position: relative; */
  /* min-width: 20rem; */
  /* max-width: 60rem; Should the size matter? */
  width: auto;
  flex: 2 1 50%;
`;
const CrosswordGridPropTypes = {
    /** presentation values for the crossword; these override any values coming from a parent ThemeProvider context. */
    theme: prop_types_1.default.shape({
        /** browser-width at which the clues go from showing beneath the grid to showing beside the grid */
        columnBreakpoint: prop_types_1.default.string,
        /** overall background color (fill) for the crossword grid; can be `'transparent'` to show through a page background image */
        gridBackground: prop_types_1.default.string,
        /**  background for an answer cell */
        cellBackground: prop_types_1.default.string,
        /** border for an answer cell */
        cellBorder: prop_types_1.default.string,
        /** color for answer text (entered by the player) */
        textColor: prop_types_1.default.string,
        /** color for the across/down numbers in the grid */
        numberColor: prop_types_1.default.string,
        /** background color for the cell with focus, the one that the player is typing into */
        focusBackground: prop_types_1.default.string,
        /** background color for the cells in the answer the player is working on,
         * helps indicate in which direction focus will be moving; also used as a
         * background on the active clue  */
        highlightBackground: prop_types_1.default.string,
    }),
};
// export interface CrosswordGridImperative {
//   /**
//    * Sets focus to the crossword component.
//    */
//   focus: () => void;
// }
/**
 * The rendering component for the crossword grid itself.
 */
function CrosswordGrid({ theme }) {
    const { rows, cols, gridData, handleInputKeyDown, handleInputChange, handleCellClick, handleInputClick, registerFocusHandler, focused, selectedPosition: { row: focusedRow, col: focusedCol }, selectedDirection: currentDirection, selectedNumber: currentNumber, } = (0, react_1.useContext)(context_1.CrosswordContext);
    const inputRef = (0, react_1.useRef)(null);
    const contextTheme = (0, react_1.useContext)(styled_components_1.ThemeContext);
    // focus and movement
    const focus = (0, react_1.useCallback)(() => {
        var _a;
        // console.log('CrosswordGrid.focus()', { haveRef: !!inputRef.current });
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    (0, react_1.useEffect)(() => {
        // focus.name = 'CrosswordGrid.focus()';
        registerFocusHandler(focus);
        return () => {
            registerFocusHandler(null);
        };
    }, [focus, registerFocusHandler]);
    // We have several properties that we bundle together as context for the
    // cells, rather than have them as independent properties.  (Or should they
    // stay separate? Or be passed as "spread" values?)
    //
    // We used to calculate sizes as "fractions of 100", meaning that the more
    // rows or columns, the smaller the values would get.  In order to support
    // non-square crossword grids, it makes much more sense to use a "fixed" cell
    // size, and then calculate the overall extents as a multiple of the cell
    // size.
    const cellSize = 10;
    const cellPadding = 0.125;
    const cellInner = cellSize - cellPadding * 2;
    const cellHalf = cellSize / 2;
    const fontSize = cellInner * 0.7;
    const sizeContext = (0, react_1.useMemo)(() => ({
        cellSize,
        cellPadding,
        cellInner,
        cellHalf,
        fontSize,
    }), [cellSize, cellPadding, cellInner, cellHalf, fontSize]);
    const height = (0, react_1.useMemo)(() => rows * cellSize, [rows]);
    const width = (0, react_1.useMemo)(() => cols * cellSize, [cols]);
    const cellWidthHtmlPct = (0, react_1.useMemo)(() => 100 / cols, [cols]);
    const cellHeightHtmlPct = (0, react_1.useMemo)(() => 100 / rows, [rows]);
    // In order to ensure the top/left positioning makes sense, there is an
    // absolutely-positioned <div> with no margin/padding that we *don't* expose
    // to consumers.  This keeps the math much more reliable.  (But we're still
    // seeing a slight vertical deviation towards the bottom of the grid!  The "*
    // 0.995" seems to help.)  We also need to calculate the effective px size of
    // the automatically-scaled SVG cells.  We know that "100% width" === "number
    // of columns".
    const inputStyle = (0, react_1.useMemo)(() => ({
        position: 'absolute',
        top: `calc(${focusedRow * cellHeightHtmlPct * 0.995}% + 2px)`,
        left: `calc(${focusedCol * cellWidthHtmlPct}% + 2px)`,
        width: `calc(${cellWidthHtmlPct}% - 4px)`,
        height: `calc(${cellHeightHtmlPct}% - 4px)`,
        fontSize: `${fontSize * 6}px`,
        textAlign: 'center',
        textAnchor: 'middle',
        backgroundColor: 'transparent',
        caretColor: 'transparent',
        margin: 0,
        padding: 0,
        border: 0,
        cursor: 'default',
    }), [cellWidthHtmlPct, cellHeightHtmlPct, focusedRow, focusedCol, fontSize]);
    // The final theme is the merger of three values: the "theme" property
    // passed to the component (which takes precedence), any values from
    // ThemeContext, and finally the "defaultTheme" values fill in for any
    // needed ones that are missing.  (We create this in standard last-one-wins
    // order in Javascript, of course.)
    const finalTheme = (0, react_1.useMemo)(() => (Object.assign(Object.assign(Object.assign({}, defaultTheme), contextTheme), theme)), [contextTheme, theme]);
    return ((0, jsx_runtime_1.jsx)(context_1.CrosswordSizeContext.Provider, Object.assign({ value: sizeContext }, { children: (0, jsx_runtime_1.jsx)(styled_components_1.ThemeProvider, Object.assign({ theme: finalTheme }, { children: (0, jsx_runtime_1.jsx)(GridWrapper, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { margin: 0, padding: 0, position: 'relative' } }, { children: [(0, jsx_runtime_1.jsxs)("svg", Object.assign({ viewBox: `0 0 ${width} ${height}` }, { children: [(0, jsx_runtime_1.jsx)("rect", { x: 0, y: 0, width: width, height: height, fill: finalTheme.gridBackground }), gridData.flatMap((rowData, row) => rowData.map((cellData, col) => cellData.used ? (
                                // Should the Cell figure out its focus/highlight state
                                // directly from the CrosswordContext?
                                (0, jsx_runtime_1.jsx)(Cell_1.default
                                // eslint-disable-next-line react/no-array-index-key
                                , { cellData: cellData, focus: focused && row === focusedRow && col === focusedCol, highlight: focused &&
                                        !!currentNumber &&
                                        cellData[currentDirection] === currentNumber, onClick: handleCellClick }, `R${row}C${col}`)) : undefined))] })), (0, jsx_runtime_1.jsx)("input", { ref: inputRef, "aria-label": "crossword-input", type: "text", onClick: handleInputClick, onKeyDown: handleInputKeyDown, onChange: handleInputChange, value: "", 
                            // onInput={this.handleInput}
                            autoComplete: "off", spellCheck: "false", autoCorrect: "off", style: inputStyle })] })) }) })) })));
}
exports.default = CrosswordGrid;
CrosswordGrid.propTypes = CrosswordGridPropTypes;
CrosswordGrid.defaultProps = {
    theme: null,
};
//# sourceMappingURL=CrosswordGrid.js.map