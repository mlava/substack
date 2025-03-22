/// <reference types="react" />
import PropTypes, { InferProps } from 'prop-types';
declare const CrosswordGridPropTypes: {
    /** presentation values for the crossword; these override any values coming from a parent ThemeProvider context. */
    theme: PropTypes.Requireable<PropTypes.InferProps<{
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
        /** background color for the cells in the answer the player is working on,
         * helps indicate in which direction focus will be moving; also used as a
         * background on the active clue  */
        highlightBackground: PropTypes.Requireable<string>;
    }>>;
};
export type CrosswordGridProps = InferProps<typeof CrosswordGridPropTypes>;
/**
 * The rendering component for the crossword grid itself.
 */
declare function CrosswordGrid({ theme }: CrosswordGridProps): JSX.Element;
declare namespace CrosswordGrid {
    var propTypes: {
        /** presentation values for the crossword; these override any values coming from a parent ThemeProvider context. */
        theme: PropTypes.Requireable<PropTypes.InferProps<{
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
            /** background color for the cells in the answer the player is working on,
             * helps indicate in which direction focus will be moving; also used as a
             * background on the active clue  */
            highlightBackground: PropTypes.Requireable<string>;
        }>>;
    };
    var defaultProps: {
        theme: null;
    };
}
export default CrosswordGrid;
