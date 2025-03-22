/// <reference types="react" />
import PropTypes from 'prop-types';
import type { UsedCellData, EnhancedProps } from './types';
declare const cellPropTypes: {
    /** the data specific to this cell */
    cellData: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
        row: PropTypes.Validator<number>;
        col: PropTypes.Validator<number>;
        guess: PropTypes.Requireable<string>;
        number: PropTypes.Requireable<string>;
        answer: PropTypes.Requireable<string>;
    }>>>;
    /** whether this cell has focus */
    focus: PropTypes.Requireable<boolean>;
    /** whether this cell is highlighted */
    highlight: PropTypes.Requireable<boolean>;
    /** handler called when the cell is clicked */
    onClick: PropTypes.Requireable<(...args: any[]) => any>;
};
export type CellProps = EnhancedProps<typeof cellPropTypes, {
    /** the data specific to this cell */
    cellData: UsedCellData;
    /** handler called when the cell is clicked */
    onClick?: (cellData: UsedCellData) => void;
}>;
/**
 * An individual-letter answer cell within the crossword grid.
 *
 * A `Cell` lives inside the SVG for a
 * [`CrosswordGrid`](#/Complex%20layouts/CrosswordGrid), and renders at a
 * position determined by the `row`, `col`, and `cellSize` properties from
 * `cellData` and `renderContext`.
 */
declare function Cell({ cellData, onClick, focus, highlight, }: CellProps): JSX.Element;
declare namespace Cell {
    var propTypes: {
        /** the data specific to this cell */
        cellData: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
            row: PropTypes.Validator<number>;
            col: PropTypes.Validator<number>;
            guess: PropTypes.Requireable<string>;
            number: PropTypes.Requireable<string>;
            answer: PropTypes.Requireable<string>;
        }>>>;
        /** whether this cell has focus */
        focus: PropTypes.Requireable<boolean>;
        /** whether this cell is highlighted */
        highlight: PropTypes.Requireable<boolean>;
        /** handler called when the cell is clicked */
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
    var defaultProps: {
        focus: boolean;
        highlight: boolean;
        onClick: null;
    };
}
export default Cell;
