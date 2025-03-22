"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrosswordSizeContext = exports.CrosswordContext = void 0;
const react_1 = __importDefault(require("react"));
// eslint-disable-next-line @typescript-eslint/no-empty-function
function nop() { }
/**
 * CrosswordContext represents the crossword puzzle itself, as well as provides
 * callbacks for the core implementation of crossword user-interaction logic.
 * This ensures that any number of individual components can leverage a single
 * core implementation.
 */
exports.CrosswordContext = react_1.default.createContext({
    rows: 0,
    cols: 0,
    gridData: [],
    // clues: { across: [], down: [] },
    handleInputKeyDown: nop,
    handleInputChange: nop,
    handleCellClick: nop,
    handleInputClick: nop,
    handleClueSelected: nop,
    registerFocusHandler: nop,
    focused: false,
    selectedPosition: { row: 0, col: 0 },
    selectedDirection: 'across',
    selectedNumber: '',
    crosswordCorrect: false,
});
exports.CrosswordSizeContext = react_1.default.createContext({
    cellSize: 0,
    cellPadding: 0,
    cellInner: 0,
    cellHalf: 0,
    fontSize: 0,
});
//# sourceMappingURL=context.js.map