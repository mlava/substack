"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cluesInputShapeOriginal = exports.clueShapeOriginal = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
// We draw a distinction between the clue "input" data (which must be provided
// by the consumer), and the in-progress clue/game data that includes answer
// status, "correct" values, etc.  Also, while there's only one version of the
// in-progress data (meant only to be consumed by the react-crossword
// components), there is *potentially* more than one input format for
// clues/answers.
/**
 * Clue/answer for a single across or down clue.
 */
const clueInputPropsOriginal = {
    /** The clue to display */
    clue: prop_types_1.default.string.isRequired,
    /** The answer for the clue */
    answer: prop_types_1.default.string.isRequired,
    /** The 0-based row on which the answer begins */
    row: prop_types_1.default.number.isRequired,
    /** The 0-based column on which the answer begins */
    col: prop_types_1.default.number.isRequired,
};
exports.clueShapeOriginal = prop_types_1.default.shape(clueInputPropsOriginal);
exports.cluesInputShapeOriginal = prop_types_1.default.shape({
    /** "across" clues and answers */
    across: prop_types_1.default.objectOf(exports.clueShapeOriginal.isRequired).isRequired,
    /** "down" clues and answers */
    down: prop_types_1.default.objectOf(exports.clueShapeOriginal.isRequired).isRequired,
});
//# sourceMappingURL=types.js.map