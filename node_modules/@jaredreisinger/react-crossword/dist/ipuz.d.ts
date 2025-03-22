import { CluesInputOriginal } from './types';
/**
 * IPUZ-format JSON data input format.  See http://www.ipuz.org/ for details.
 * Note that only the fields/values supported by this crossword component are
 * used.
 */
export interface IpuzInput {
    /** IPUZ version for this puzzle */
    version: string;
    /** Kind (IPUZ URI) of this puzzle (must have at least one kind) */
    kind: string[];
    /** Copyright information */
    copyright?: string;
    /** Name and/or reference for a publisher */
    publisher?: string;
    /** Bibliographic reference for a published puzzle */
    publication?: string;
    /** Permanent URL for the puzzle */
    url?: string;
    /** Globally unique identifier for the puzzle */
    uniqueid?: string;
    /** Title of puzzle */
    title?: string;
    /** Text displayed above puzzle */
    intro?: string;
    /** Text displayed after successful solve */
    explanation?: string;
    /** Non-displayed annotation */
    annotation?: string;
    /** Author of puzzle */
    author?: string;
    /** Editor of puzzle */
    editor?: string;
    /** Date of puzzle or publication date */
    date?: string;
    /** Notes about the puzzle */
    notes?: string;
    /** Informational only, there is no standard for difficulty */
    difficulty?: string;
    /** Characters that can be entered in the puzzle */
    charset?: string;
    /** Program-specific information from program that wrote this file */
    origin?: string;
    /** Text value which represents a block (defaults to "#") */
    block?: string;
    /** Value which represents an empty cell (defaults to 0) */
    empty?: string;
    /** Named styles for the puzzle */
    styles?: unknown;
    /** Dimensions of the puzzle grid */
    dimensions: {
        width: number;
        height: number;
    };
    /** The puzzle rows, then columns (describes the rendered cells) */
    puzzle: (number | string | null | {
        cell?: number;
        style?: unknown;
    })[][];
    /** Correct solution (row-major cell answers) */
    solution: (string | null)[][];
    /** The final answer to the puzzle */
    answer?: unknown;
    /** Clue sets (each set is array of clue-num, clue tuples.) */
    clues: Record<'Across' | 'Down', [number, string][]>;
    saved?: unknown;
    showenumerations?: unknown;
    clueplacement?: unknown;
    enumeration?: unknown;
    enumerations?: unknown;
    misses?: unknown;
}
export declare function useIpuz(data: unknown): CluesInputOriginal | null;
/** Inspects a value to see if it looks like IPUZ data. */
export declare function isIpuzData(data: unknown): data is IpuzInput;
/** Checks to see whether the IPUZ data is supported. */
export declare function isSupportedIpuz(ipuz: IpuzInput): boolean;
/** Converts an IPUZ crossword to our internal format. */
export declare function convertIpuz(ipuz: IpuzInput): CluesInputOriginal;
