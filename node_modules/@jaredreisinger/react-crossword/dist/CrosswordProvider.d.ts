import React from 'react';
import PropTypes from 'prop-types';
import { AnswerTuple, CluesInput, Direction, EnhancedProps } from './types';
export declare const crosswordProviderPropTypes: {
    /**
     * clue/answer data; see <a
     * href="#/Configuration%20and%20customization/Clue%20input%20format">Clue
     * input format</a> for details.
     */
    data: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
        across: PropTypes.Validator<{
            [x: string]: NonNullable<PropTypes.InferProps<{
                clue: PropTypes.Validator<string>;
                answer: PropTypes.Validator<string>; /** presentation values for the crossword; these override any values coming from a parent ThemeProvider context. */
                row: PropTypes.Validator<number>;
                col: PropTypes.Validator<number>;
            }>>;
        }>;
        down: PropTypes.Validator<{
            [x: string]: NonNullable<PropTypes.InferProps<{
                clue: PropTypes.Validator<string>;
                answer: PropTypes.Validator<string>; /** presentation values for the crossword; these override any values coming from a parent ThemeProvider context. */
                row: PropTypes.Validator<number>;
                col: PropTypes.Validator<number>;
            }>>;
        }>;
    }>>>;
    /** presentation values for the crossword; these override any values coming from a parent ThemeProvider context. */
    theme: PropTypes.Requireable<PropTypes.InferProps<{
        /**
         * whether to allow a non-square rendering
         * @since 5.1.0
         */
        allowNonSquare: PropTypes.Requireable<boolean>;
        /** browser-width at which the clues go from showing beneath the grid to showing beside the grid */
        columnBreakpoint: PropTypes.Requireable<string>;
        /** overall background color (fill) for the crossword grid; can be `'transparent'` to show through a page background image */
        gridBackground: PropTypes.Requireable<string>;
        /**  background for an answer cell */
        cellBackground: PropTypes.Requireable<string>;
        /** border for an answer cell */
        cellBorder: PropTypes.Requireable<string>;
        /** color for answer text (entered by the player) */
        textColor: PropTypes.Requireable<string>;
        /** color for the across/down numbers in the grid */
        numberColor: PropTypes.Requireable<string>;
        /** background color for the cell with focus, the one that the player is typing into */
        focusBackground: PropTypes.Requireable<string>;
        /**
         * background color for the cells in the answer the player is working on,
         * helps indicate in which direction focus will be moving; also used as a
         * background on the active clue
         */
        highlightBackground: PropTypes.Requireable<string>;
    }>>;
    /** whether to use browser storage to persist the player's work-in-progress */
    useStorage: PropTypes.Requireable<boolean>;
    /**
     * a custom storage key to use for persistence; defaults to "guesses" when not
     * provided
     */
    storageKey: PropTypes.Requireable<string>;
    /**
     * callback function that fires when a player completes an answer, whether
     * correct or not; called with `(direction, number, correct, answer)`
     * arguments, where `direction` is `'across'` or `'down'`, `number` is the
     * clue number as text (like `'1'`), `correct` is whether the guessed answer
     * is correct and `answer` is the (actual and correct) answer itself
     *
     * @since 4.3.0
     */
    onAnswerComplete: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * callback function that fires when a player answers a clue correctly; called
     * with `(direction, number, answer)` arguments, where `direction` is
     * `'across'` or `'down'`, `number` is the clue number as text (like `'1'`),
     * and `answer` is the answer itself
     *
     * @since 4.3.0; replacing `onCorrect` (to reduce ambiguity)
     */
    onAnswerCorrect: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * callback function that fires when a player answers a clue correctly; called
     * with `(direction, number, answer)` arguments, where `direction` is
     * `'across'` or `'down'`, `number` is the clue number as text (like `'1'`),
     * and `answer` is the answer itself
     *
     * @deprecated 4.3.0; being replaced by `onAnswerCorrect` (to reduce
     * ambiguity)
     */
    onCorrect: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * callback function that fires when a player answers a clue *in*correctly;
     * called with `(direction, number, answer)` arguments, where `direction` is
     * `'across'` or `'down'`, `number` is the clue number as text (like `'1'`),
     * and `answer` is the (actual and correct) answer itself
     *
     * @since 4.3.0
     */
    onAnswerIncorrect: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * callback function that's called when a crossword is loaded, to batch up
     * correct answers loaded from storage; passed an array of the same values
     * that `onCorrect` would recieve
     */
    onLoadedCorrect: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * callback function that's called when the overall crossword is complete,
     * whether correct or not; called with `(correct)` argument, a boolean which
     * indicates whether the crossword is correct or not.
     */
    onCrosswordComplete: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * callback function that's called when the overall crossword is completely
     * correct (or not)
     *
     * NOTE: this will be deprecated for `onCrosswordComplete` in the future.
     */
    onCrosswordCorrect: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * callback function called when a cell changes (e.g. when the user types a
     * letter); called with `(row, col, char)` arguments, where the `row` and
     * `column` are the 0-based position of the cell, and `char` is the character
     * typed (already massaged into upper-case)
     */
    onCellChange: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * callback function called when a clue is selected
     */
    onClueSelected: PropTypes.Requireable<(...args: any[]) => any>;
    children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
};
export type CrosswordProviderProps = EnhancedProps<typeof crosswordProviderPropTypes, {
    /**
     * clue/answer data; see <a
     * href="#/Configuration%20and%20customization/Clue%20input%20format">Clue
     * input format</a> for details.
     */
    data: CluesInput;
    /**
     * callback function that fires when a player completes an answer, whether
     * correct or not; called with `(direction, number, correct, answer)`
     * arguments, where `direction` is `'across'` or `'down'`, `number` is the
     * clue number as text (like `'1'`), `correct` is whether the guessed answer
     * is correct and `answer` is the (actual and correct) answer itself
     *
     * @since 4.3.0
     */
    onAnswerComplete?: (direction: Direction, number: string, correct: boolean, answer: string) => void;
    /**
     * callback function that fires when a player answers a clue correctly;
     * called with `(direction, number, answer)` arguments, where `direction` is
     * `'across'` or `'down'`, `number` is the clue number as text (like `'1'`),
     * and `answer` is the answer itself
     *
     * @since 4.3.0; replacing `onCorrect` (to reduce ambiguity)
     */
    onAnswerCorrect?: (direction: Direction, number: string, answer: string) => void;
    /**
     * callback function that fires when a player answers a clue correctly;
     * called with `(direction, number, answer)` arguments, where `direction` is
     * `'across'` or `'down'`, `number` is the clue number as text (like `'1'`),
     * and `answer` is the answer itself
     *
     * NOTE: this is the original/previous name for what is now being called
     * `onAnswerCorrect` (to reduce ambiguity).  It will be deprecated in the
     * future.
     */
    onCorrect?: (direction: Direction, number: string, answer: string) => void;
    /**
     * callback function that fires when a player answers a clue *in*correctly;
     * called with `(direction, number, answer)` arguments, where `direction` is
     * `'across'` or `'down'`, `number` is the clue number as text (like `'1'`),
     * and `answer` is the (actual and correct) answer itself
     *
     * @since 4.3.0
     */
    onAnswerIncorrect?: (direction: Direction, number: string, answer: string) => void;
    /**
     * callback function that's called when a crossword is loaded, to batch up
     * correct answers loaded from storage; passed an array of the same values
     * that `onCorrect` would recieve
     */
    onLoadedCorrect?: (loaded: AnswerTuple[]) => void;
    /**
     * callback function that's called when the overall crossword is complete,
     * whether correct or not; called with `(correct)` argument, a boolean which
     * indicates whether the crossword is correct or not.
     */
    onCrosswordComplete?: (correct: boolean) => void;
    /**
     * callback function that's called when the overall crossword is completely
     * correct (or not)
     *
     * NOTE: this will be deprecated for `onCrosswordComplete` in the future.
     */
    onCrosswordCorrect?: (isCorrect: boolean) => void;
    /**
     * callback function called when a cell changes (e.g. when the user types a
     * letter); called with `(row, col, char)` arguments, where the `row` and
     * `column` are the 0-based position of the cell, and `char` is the
     * character typed (already massaged into upper-case)
     */
    onCellChange?: (row: number, col: number, char: string) => void;
    /**
     * callback function called when a clue is selected
     */
    onClueSelected?: (direction: Direction, number: string) => void;
}>;
export interface CrosswordProviderImperative {
    /**
     * Sets focus to the crossword component.
     */
    focus: () => void;
    /**
     * Resets the entire crossword; clearing all answers in the grid and
     * also any persisted data.
     */
    reset: () => void;
    /**
     * Fills all the answers in the grid and calls the `onLoadedCorrect`
     * callback with _**every**_ answer.
     */
    fillAllAnswers: () => void;
    /**
     * Returns whether the crossword is entirely correct or not.
     */
    isCrosswordCorrect: () => boolean;
    /**
     * Sets the “guess” character for a specific grid position.
     *
     * @since 4.1.0
     */
    setGuess: (row: number, col: number, guess: string) => void;
}
/**
 * The fundamental logic and data management component for react-crossword.
 * Prior to 4.0, puzzle management was built into the `Crossword` component.  As
 * of 4.0, the logic implementation has been refactored such that `Crossword`
 * leverages `CrosswordProvider` to do the heavy lifting.
 *
 * @since 4.0
 */
declare const CrosswordProvider: React.ForwardRefExoticComponent<Omit<PropTypes.InferProps<{
    /**
     * clue/answer data; see <a
     * href="#/Configuration%20and%20customization/Clue%20input%20format">Clue
     * input format</a> for details.
     */
    data: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
        across: PropTypes.Validator<{
            [x: string]: NonNullable<PropTypes.InferProps<{
                clue: PropTypes.Validator<string>;
                answer: PropTypes.Validator<string>; /** presentation values for the crossword; these override any values coming from a parent ThemeProvider context. */
                row: PropTypes.Validator<number>;
                col: PropTypes.Validator<number>;
            }>>;
        }>;
        down: PropTypes.Validator<{
            [x: string]: NonNullable<PropTypes.InferProps<{
                clue: PropTypes.Validator<string>;
                answer: PropTypes.Validator<string>; /** presentation values for the crossword; these override any values coming from a parent ThemeProvider context. */
                row: PropTypes.Validator<number>;
                col: PropTypes.Validator<number>;
            }>>;
        }>;
    }>>>;
    /** presentation values for the crossword; these override any values coming from a parent ThemeProvider context. */
    theme: PropTypes.Requireable<PropTypes.InferProps<{
        /**
         * whether to allow a non-square rendering
         * @since 5.1.0
         */
        allowNonSquare: PropTypes.Requireable<boolean>;
        /** browser-width at which the clues go from showing beneath the grid to showing beside the grid */
        columnBreakpoint: PropTypes.Requireable<string>;
        /** overall background color (fill) for the crossword grid; can be `'transparent'` to show through a page background image */
        gridBackground: PropTypes.Requireable<string>;
        /**  background for an answer cell */
        cellBackground: PropTypes.Requireable<string>;
        /** border for an answer cell */
        cellBorder: PropTypes.Requireable<string>;
        /** color for answer text (entered by the player) */
        textColor: PropTypes.Requireable<string>;
        /** color for the across/down numbers in the grid */
        numberColor: PropTypes.Requireable<string>;
        /** background color for the cell with focus, the one that the player is typing into */
        focusBackground: PropTypes.Requireable<string>;
        /**
         * background color for the cells in the answer the player is working on,
         * helps indicate in which direction focus will be moving; also used as a
         * background on the active clue
         */
        highlightBackground: PropTypes.Requireable<string>;
    }>>;
    /** whether to use browser storage to persist the player's work-in-progress */
    useStorage: PropTypes.Requireable<boolean>;
    /**
     * a custom storage key to use for persistence; defaults to "guesses" when not
     * provided
     */
    storageKey: PropTypes.Requireable<string>;
    /**
     * callback function that fires when a player completes an answer, whether
     * correct or not; called with `(direction, number, correct, answer)`
     * arguments, where `direction` is `'across'` or `'down'`, `number` is the
     * clue number as text (like `'1'`), `correct` is whether the guessed answer
     * is correct and `answer` is the (actual and correct) answer itself
     *
     * @since 4.3.0
     */
    onAnswerComplete: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * callback function that fires when a player answers a clue correctly; called
     * with `(direction, number, answer)` arguments, where `direction` is
     * `'across'` or `'down'`, `number` is the clue number as text (like `'1'`),
     * and `answer` is the answer itself
     *
     * @since 4.3.0; replacing `onCorrect` (to reduce ambiguity)
     */
    onAnswerCorrect: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * callback function that fires when a player answers a clue correctly; called
     * with `(direction, number, answer)` arguments, where `direction` is
     * `'across'` or `'down'`, `number` is the clue number as text (like `'1'`),
     * and `answer` is the answer itself
     *
     * @deprecated 4.3.0; being replaced by `onAnswerCorrect` (to reduce
     * ambiguity)
     */
    onCorrect: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * callback function that fires when a player answers a clue *in*correctly;
     * called with `(direction, number, answer)` arguments, where `direction` is
     * `'across'` or `'down'`, `number` is the clue number as text (like `'1'`),
     * and `answer` is the (actual and correct) answer itself
     *
     * @since 4.3.0
     */
    onAnswerIncorrect: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * callback function that's called when a crossword is loaded, to batch up
     * correct answers loaded from storage; passed an array of the same values
     * that `onCorrect` would recieve
     */
    onLoadedCorrect: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * callback function that's called when the overall crossword is complete,
     * whether correct or not; called with `(correct)` argument, a boolean which
     * indicates whether the crossword is correct or not.
     */
    onCrosswordComplete: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * callback function that's called when the overall crossword is completely
     * correct (or not)
     *
     * NOTE: this will be deprecated for `onCrosswordComplete` in the future.
     */
    onCrosswordCorrect: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * callback function called when a cell changes (e.g. when the user types a
     * letter); called with `(row, col, char)` arguments, where the `row` and
     * `column` are the 0-based position of the cell, and `char` is the character
     * typed (already massaged into upper-case)
     */
    onCellChange: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * callback function called when a clue is selected
     */
    onClueSelected: PropTypes.Requireable<(...args: any[]) => any>;
    children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
}>, "data" | "onAnswerComplete" | "onAnswerCorrect" | "onCorrect" | "onAnswerIncorrect" | "onLoadedCorrect" | "onCrosswordComplete" | "onCrosswordCorrect" | "onCellChange" | "onClueSelected"> & {
    /**
     * clue/answer data; see <a
     * href="#/Configuration%20and%20customization/Clue%20input%20format">Clue
     * input format</a> for details.
     */
    data: CluesInput;
    /**
     * callback function that fires when a player completes an answer, whether
     * correct or not; called with `(direction, number, correct, answer)`
     * arguments, where `direction` is `'across'` or `'down'`, `number` is the
     * clue number as text (like `'1'`), `correct` is whether the guessed answer
     * is correct and `answer` is the (actual and correct) answer itself
     *
     * @since 4.3.0
     */
    onAnswerComplete?: ((direction: Direction, number: string, correct: boolean, answer: string) => void) | undefined;
    /**
     * callback function that fires when a player answers a clue correctly;
     * called with `(direction, number, answer)` arguments, where `direction` is
     * `'across'` or `'down'`, `number` is the clue number as text (like `'1'`),
     * and `answer` is the answer itself
     *
     * @since 4.3.0; replacing `onCorrect` (to reduce ambiguity)
     */
    onAnswerCorrect?: ((direction: Direction, number: string, answer: string) => void) | undefined;
    /**
     * callback function that fires when a player answers a clue correctly;
     * called with `(direction, number, answer)` arguments, where `direction` is
     * `'across'` or `'down'`, `number` is the clue number as text (like `'1'`),
     * and `answer` is the answer itself
     *
     * NOTE: this is the original/previous name for what is now being called
     * `onAnswerCorrect` (to reduce ambiguity).  It will be deprecated in the
     * future.
     */
    onCorrect?: ((direction: Direction, number: string, answer: string) => void) | undefined;
    /**
     * callback function that fires when a player answers a clue *in*correctly;
     * called with `(direction, number, answer)` arguments, where `direction` is
     * `'across'` or `'down'`, `number` is the clue number as text (like `'1'`),
     * and `answer` is the (actual and correct) answer itself
     *
     * @since 4.3.0
     */
    onAnswerIncorrect?: ((direction: Direction, number: string, answer: string) => void) | undefined;
    /**
     * callback function that's called when a crossword is loaded, to batch up
     * correct answers loaded from storage; passed an array of the same values
     * that `onCorrect` would recieve
     */
    onLoadedCorrect?: ((loaded: AnswerTuple[]) => void) | undefined;
    /**
     * callback function that's called when the overall crossword is complete,
     * whether correct or not; called with `(correct)` argument, a boolean which
     * indicates whether the crossword is correct or not.
     */
    onCrosswordComplete?: ((correct: boolean) => void) | undefined;
    /**
     * callback function that's called when the overall crossword is completely
     * correct (or not)
     *
     * NOTE: this will be deprecated for `onCrosswordComplete` in the future.
     */
    onCrosswordCorrect?: ((isCorrect: boolean) => void) | undefined;
    /**
     * callback function called when a cell changes (e.g. when the user types a
     * letter); called with `(row, col, char)` arguments, where the `row` and
     * `column` are the 0-based position of the cell, and `char` is the
     * character typed (already massaged into upper-case)
     */
    onCellChange?: ((row: number, col: number, char: string) => void) | undefined;
    /**
     * callback function called when a clue is selected
     */
    onClueSelected?: ((direction: Direction, number: string) => void) | undefined;
} & React.RefAttributes<CrosswordProviderImperative>>;
export default CrosswordProvider;
