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
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
// import produce from 'immer';
const styled_components_1 = __importDefault(require("styled-components"));
const CrosswordProvider_1 = __importStar(require("./CrosswordProvider"));
const CrosswordGrid_1 = __importDefault(require("./CrosswordGrid"));
const DirectionClues_1 = __importDefault(require("./DirectionClues"));
// interface OuterWrapperProps {
//   correct?: boolean;
// }
// const OuterWrapper = styled.div.attrs<OuterWrapperProps>((props) => ({
//   className: `crossword${props.correct ? ' correct' : ''}`,
// }))<OuterWrapperProps>`
//   margin: 0;
//   padding: 0;
//   border: 0;
//   /* position: relative; */
//   /* width: 40%; */
//   display: flex;
//   flex-direction: row;
//   @media (max-width: ${(props) => props.theme.columnBreakpoint}) {
//     flex-direction: column;
//   }
// `;
const CluesWrapper = styled_components_1.default.div.attrs(( /* props */) => ({
    className: 'clues',
})) `
  padding: 0 1em;
  flex: 1 2 25%;

  @media (max-width: ${(props) => props.theme.columnBreakpoint}) {
    margin-top: 2em;
  }

  .direction {
    margin-bottom: 2em;
    /* padding: 0 1em;
    flex: 1 1 20%; */

    .header {
      margin-top: 0;
      margin-bottom: 0.5em;
    }

    div {
      margin-top: 0.5em;
    }
  }
`;
const crosswordPropTypes = Object.assign(Object.assign({}, CrosswordProvider_1.crosswordProviderPropTypes), { 
    /** the label for the "across" clues */
    acrossLabel: prop_types_1.default.string, 
    /** the label for the "down" clues */
    downLabel: prop_types_1.default.string });
// @ts-expect-error TS doesn't allow non-optional props to be deleted, but we're
// building this into a new type!
delete crosswordPropTypes.children;
/**
 * The default export from the react-crossword library, `Crossword` renders an
 * answer grid and clues in a basic layout and provides access to most
 * functionality.
 */
const Crossword = react_1.default.forwardRef((_a, ref) => {
    var { acrossLabel, downLabel } = _a, props = __rest(_a, ["acrossLabel", "downLabel"]);
    const providerRef = (0, react_1.useRef)(null);
    // expose some imperative methods
    (0, react_1.useImperativeHandle)(ref, () => ({
        /**
         * Sets focus to the crossword component.
         */
        focus: () => { var _a; return (_a = providerRef.current) === null || _a === void 0 ? void 0 : _a.focus(); },
        /**
         * Resets the entire crossword; clearing all answers in the grid and
         * also any persisted data.
         */
        reset: () => { var _a; return (_a = providerRef.current) === null || _a === void 0 ? void 0 : _a.reset(); },
        /**
         * Fills all the answers in the grid and calls the `onLoadedCorrect`
         * callback with _**every**_ answer.
         */
        fillAllAnswers: () => { var _a; return (_a = providerRef.current) === null || _a === void 0 ? void 0 : _a.fillAllAnswers(); },
        /**
         * Returns whether the crossword is entirely correct or not.
         *
         * @since 2.2.0
         */
        isCrosswordCorrect: () => { var _a; return !!((_a = providerRef.current) === null || _a === void 0 ? void 0 : _a.isCrosswordCorrect()); },
        /**
         * Sets the “guess” character for a specific grid position.
         *
         * @since 4.1.0
         */
        setGuess: (row, col, guess) => { var _a; return (_a = providerRef.current) === null || _a === void 0 ? void 0 : _a.setGuess(row, col, guess); },
    }), []);
    return ((0, jsx_runtime_1.jsxs)(CrosswordProvider_1.default, Object.assign({}, props, { ref: providerRef }, { children: [(0, jsx_runtime_1.jsx)(CrosswordGrid_1.default, {}), (0, jsx_runtime_1.jsxs)(CluesWrapper, { children: [(0, jsx_runtime_1.jsx)(DirectionClues_1.default, { direction: "across", label: acrossLabel }), (0, jsx_runtime_1.jsx)(DirectionClues_1.default, { direction: "down", label: downLabel })] })] })));
});
Crossword.displayName = 'Crossword';
Crossword.propTypes = crosswordPropTypes;
Crossword.defaultProps = Object.assign(Object.assign({}, CrosswordProvider_1.default.defaultProps), { acrossLabel: undefined, downLabel: undefined });
exports.default = Crossword;
//# sourceMappingURL=Crossword.js.map