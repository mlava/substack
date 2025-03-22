import React from 'react';
import type { CellData, CluesData, Direction, FocusHandler, GridData, GridPosition } from './types';
/**
 * CrosswordContextType represents the type of the crossword puzzle itself, as
 * well as provides callbacks for the core implementation of crossword
 * user-interaction logic. This ensures that any number of individual components
 * can leverage a single core implementation.
 */
export interface CrosswordContextType {
    /** The number of rows in the crossword. */
    rows: number;
    /** The number of columns in the crossword. */
    cols: number;
    /** The crossword grid data, including player guesses and "correct" status. */
    gridData: GridData;
    /** The across/down clues, including "correct" status. */
    clues?: CluesData;
    /** A handler for `<input>` element KeyDown events. */
    handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
    /** A handler for `<input>` element Change events. */
    handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
    /** A handler for clicks on any cell in the crossword. */
    handleCellClick: (cellData: CellData) => void;
    /** A handler for `<input>` element Click events. */
    handleInputClick: React.MouseEventHandler<HTMLInputElement>;
    /** A handler for clue selection. */
    handleClueSelected: (direction: Direction, number: string) => void;
    /** Provides registration for focus actions */
    registerFocusHandler: (focusHandler: FocusHandler | null) => void;
    focused: boolean;
    selectedPosition: GridPosition;
    selectedDirection: Direction;
    selectedNumber: string;
    crosswordCorrect: boolean;
}
/**
 * CrosswordContext represents the crossword puzzle itself, as well as provides
 * callbacks for the core implementation of crossword user-interaction logic.
 * This ensures that any number of individual components can leverage a single
 * core implementation.
 */
export declare const CrosswordContext: React.Context<CrosswordContextType>;
export interface CrosswordSizeContextType {
    cellSize: number;
    cellPadding: number;
    cellInner: number;
    cellHalf: number;
    fontSize: number;
}
export declare const CrosswordSizeContext: React.Context<CrosswordSizeContextType>;
