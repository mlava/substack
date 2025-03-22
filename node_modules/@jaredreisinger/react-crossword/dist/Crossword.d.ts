import React from 'react';
import PropTypes from 'prop-types';
import { EnhancedProps } from './types';
import { CrosswordProviderImperative, CrosswordProviderProps } from './CrosswordProvider';
declare const crosswordPropTypes: {
    /** the label for the "across" clues */
    acrossLabel: PropTypes.Requireable<string>;
    /** the label for the "down" clues */
    downLabel: PropTypes.Requireable<string>;
    data: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
        across: PropTypes.Validator<{
            [x: string]: NonNullable<PropTypes.InferProps<{
                clue: PropTypes.Validator<string>;
                answer: PropTypes.Validator<string>;
                row: PropTypes.Validator<number>;
                col: PropTypes.Validator<number>;
            }>>;
        }>;
        /** the label for the "down" clues */
        down: PropTypes.Validator<{
            [x: string]: NonNullable<PropTypes.InferProps<{
                clue: PropTypes.Validator<string>;
                answer: PropTypes.Validator<string>;
                row: PropTypes.Validator<number>;
                col: PropTypes.Validator<number>;
            }>>;
        }>;
    }>>>;
    theme: PropTypes.Requireable<PropTypes.InferProps<{
        allowNonSquare: PropTypes.Requireable<boolean>;
        columnBreakpoint: PropTypes.Requireable<string>;
        gridBackground: PropTypes.Requireable<string>;
        cellBackground: PropTypes.Requireable<string>;
        cellBorder: PropTypes.Requireable<string>;
        textColor: PropTypes.Requireable<string>;
        numberColor: PropTypes.Requireable<string>;
        focusBackground: PropTypes.Requireable<string>;
        highlightBackground: PropTypes.Requireable<string>;
    }>>;
    useStorage: PropTypes.Requireable<boolean>;
    storageKey: PropTypes.Requireable<string>;
    onAnswerComplete: PropTypes.Requireable<(...args: any[]) => any>;
    onAnswerCorrect: PropTypes.Requireable<(...args: any[]) => any>;
    onCorrect: PropTypes.Requireable<(...args: any[]) => any>;
    onAnswerIncorrect: PropTypes.Requireable<(...args: any[]) => any>;
    onLoadedCorrect: PropTypes.Requireable<(...args: any[]) => any>;
    onCrosswordComplete: PropTypes.Requireable<(...args: any[]) => any>;
    onCrosswordCorrect: PropTypes.Requireable<(...args: any[]) => any>;
    onCellChange: PropTypes.Requireable<(...args: any[]) => any>;
    onClueSelected: PropTypes.Requireable<(...args: any[]) => any>;
    children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
};
export type CrosswordProps = EnhancedProps<typeof crosswordPropTypes, Omit<CrosswordProviderProps, 'children'>>;
export type CrosswordImperative = CrosswordProviderImperative;
/**
 * The default export from the react-crossword library, `Crossword` renders an
 * answer grid and clues in a basic layout and provides access to most
 * functionality.
 */
declare const Crossword: React.ForwardRefExoticComponent<Omit<PropTypes.InferProps<{
    /** the label for the "across" clues */
    acrossLabel: PropTypes.Requireable<string>;
    /** the label for the "down" clues */
    downLabel: PropTypes.Requireable<string>;
    data: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
        across: PropTypes.Validator<{
            [x: string]: NonNullable<PropTypes.InferProps<{
                clue: PropTypes.Validator<string>;
                answer: PropTypes.Validator<string>;
                row: PropTypes.Validator<number>;
                col: PropTypes.Validator<number>;
            }>>;
        }>;
        /** the label for the "down" clues */
        down: PropTypes.Validator<{
            [x: string]: NonNullable<PropTypes.InferProps<{
                clue: PropTypes.Validator<string>;
                answer: PropTypes.Validator<string>;
                row: PropTypes.Validator<number>;
                col: PropTypes.Validator<number>;
            }>>;
        }>;
    }>>>;
    theme: PropTypes.Requireable<PropTypes.InferProps<{
        allowNonSquare: PropTypes.Requireable<boolean>;
        columnBreakpoint: PropTypes.Requireable<string>;
        gridBackground: PropTypes.Requireable<string>;
        cellBackground: PropTypes.Requireable<string>;
        cellBorder: PropTypes.Requireable<string>;
        textColor: PropTypes.Requireable<string>;
        numberColor: PropTypes.Requireable<string>;
        focusBackground: PropTypes.Requireable<string>;
        highlightBackground: PropTypes.Requireable<string>;
    }>>;
    useStorage: PropTypes.Requireable<boolean>;
    storageKey: PropTypes.Requireable<string>;
    onAnswerComplete: PropTypes.Requireable<(...args: any[]) => any>;
    onAnswerCorrect: PropTypes.Requireable<(...args: any[]) => any>;
    onCorrect: PropTypes.Requireable<(...args: any[]) => any>;
    onAnswerIncorrect: PropTypes.Requireable<(...args: any[]) => any>;
    onLoadedCorrect: PropTypes.Requireable<(...args: any[]) => any>;
    onCrosswordComplete: PropTypes.Requireable<(...args: any[]) => any>;
    onCrosswordCorrect: PropTypes.Requireable<(...args: any[]) => any>;
    onCellChange: PropTypes.Requireable<(...args: any[]) => any>;
    onClueSelected: PropTypes.Requireable<(...args: any[]) => any>;
    children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
}>, "data" | "theme" | "useStorage" | "storageKey" | "onAnswerComplete" | "onAnswerCorrect" | "onCorrect" | "onAnswerIncorrect" | "onLoadedCorrect" | "onCrosswordComplete" | "onCrosswordCorrect" | "onCellChange" | "onClueSelected"> & Omit<CrosswordProviderProps, "children"> & React.RefAttributes<CrosswordProviderImperative>>;
export default Crossword;
