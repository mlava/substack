import PropTypes, { InferProps } from 'prop-types';
export type OverrideProps<T, O> = Omit<T, keyof O> & O;
export type EnhancedProps<T, O> = OverrideProps<InferProps<T>, O>;
export type Direction = 'across' | 'down';
export interface GridPosition {
    /** The 0-indexed row for the position. */
    row: number;
    /** The 0-indexed column for the position. */
    col: number;
}
/**
 * Clue/answer for a single across or down clue.
 */
declare const clueInputPropsOriginal: {
    /** The clue to display */
    clue: PropTypes.Validator<string>;
    /** The answer for the clue */
    answer: PropTypes.Validator<string>;
    /** The 0-based row on which the answer begins */
    row: PropTypes.Validator<number>;
    /** The 0-based column on which the answer begins */
    col: PropTypes.Validator<number>;
};
export declare const clueShapeOriginal: PropTypes.Requireable<PropTypes.InferProps<{
    /** The clue to display */
    clue: PropTypes.Validator<string>;
    /** The answer for the clue */
    answer: PropTypes.Validator<string>;
    /** The 0-based row on which the answer begins */
    row: PropTypes.Validator<number>;
    /** The 0-based column on which the answer begins */
    col: PropTypes.Validator<number>;
}>>;
export type ClueTypeOriginal = InferProps<typeof clueInputPropsOriginal>;
export declare const cluesInputShapeOriginal: PropTypes.Requireable<PropTypes.InferProps<{
    /** "across" clues and answers */
    across: PropTypes.Validator<{
        [x: string]: NonNullable<PropTypes.InferProps<{
            /** The clue to display */
            clue: PropTypes.Validator<string>;
            /** The answer for the clue */
            answer: PropTypes.Validator<string>;
            /** The 0-based row on which the answer begins */
            row: PropTypes.Validator<number>;
            /** The 0-based column on which the answer begins */
            col: PropTypes.Validator<number>;
        }>>;
    }>;
    /** "down" clues and answers */
    down: PropTypes.Validator<{
        [x: string]: NonNullable<PropTypes.InferProps<{
            /** The clue to display */
            clue: PropTypes.Validator<string>;
            /** The answer for the clue */
            answer: PropTypes.Validator<string>;
            /** The 0-based row on which the answer begins */
            row: PropTypes.Validator<number>;
            /** The 0-based column on which the answer begins */
            col: PropTypes.Validator<number>;
        }>>;
    }>;
}>>;
/**
 * The (original) input-format for clues and answers.  Note that while the
 * keys/properties under 'across' and 'down' are canonically the clue/answer
 * numbers, they can be *any* string value
 */
export type CluesInputOriginal = Record<Direction, Record<string, ClueTypeOriginal>>;
/**
 * The input-format for clues and answers.  Only the original format is
 * currently available, but there may be some additional formats added in the
 * future.
 */
export type CluesInput = CluesInputOriginal;
/**
 * The data stored/returned for a specific cell/position in the crossword.
 */
export type UsedCellData = GridPosition & {
    /** Whether the position/cell is used at all. */
    used: boolean;
    /** If present, a display "number" label for the cell */
    number?: string;
    /** The correct answer value for *only* this cell (a single letter) */
    answer: string;
    /** The user's guess value for *only* this cell (a single letter) */
    guess?: string;
    /** If present, the clue-number key for the "across" for this cell */
    across?: string;
    /** If present, the clue-number key for the "down" for this cell */
    down?: string;
};
/**
 * The data stored/returned for a specific unused or out-of-bounds cell/position
 * in the crossword.
 */
export type UnusedCellData = GridPosition & {
    /** Whether the position/cell is used at all. */
    used: false;
    /** Whether the position/cell is completely out-of-bounds */
    outOfBounds?: boolean;
};
/**
 * The data stored/returned for a specific cell/position in the crossword.
 */
export type CellData = UsedCellData | UnusedCellData;
export type GridData = CellData[][];
export type CluesData = Record<Direction, (ClueTypeOriginal & {
    number: string;
    complete?: boolean;
    correct?: boolean;
})[]>;
export type AnswerTuple = [Direction, string, string];
/**
 * A handler to help set focus so that the core provider doesn't have to know
 * how a specific component mananges focus.
 */
export interface FocusHandler {
    (): void;
}
export {};
