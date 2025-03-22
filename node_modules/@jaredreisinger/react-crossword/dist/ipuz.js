"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertIpuz = exports.isSupportedIpuz = exports.isIpuzData = exports.useIpuz = void 0;
const react_1 = require("react");
const IpuzURI = 'http://ipuz.org';
const IpuzVersionURI = `${IpuzURI}/v`;
const IpuzVersion = 2;
const IpuzCrosswordURI = `${IpuzURI}/crossword#`;
const IpuzCrosswordVersion = 1;
const directionMap = {
    Across: 'across',
    Down: 'down',
};
function useIpuz(data) {
    return (0, react_1.useMemo)(() => {
        if (!isIpuzData(data)) {
            // eslint-disable-next-line no-console
            console.error('useIpuz() was not given IPUZ data');
            return null;
        }
        if (!isSupportedIpuz(data)) {
            // eslint-disable-next-line no-console
            console.error('useIpuz() was not given supported IPUZ data');
            return null;
        }
        return convertIpuz(data);
    }, [data]);
}
exports.useIpuz = useIpuz;
/** Inspects a value to see if it looks like IPUZ data. */
function isIpuzData(data) {
    return (!!data &&
        typeof data === 'object' &&
        'version' in data &&
        typeof data.version === 'string' &&
        data.version.startsWith(IpuzVersionURI));
}
exports.isIpuzData = isIpuzData;
/** Checks to see whether the IPUZ data is supported. */
function isSupportedIpuz(ipuz) {
    const version = Number.parseInt(ipuz.version.substring(IpuzVersionURI.length), 10);
    if (version > IpuzVersion) {
        return false;
    }
    if (ipuz.kind.length !== 1 || !ipuz.kind[0].startsWith(IpuzCrosswordURI)) {
        return false;
    }
    const crosswordVersion = Number.parseInt(ipuz.kind[0].substring(IpuzCrosswordURI.length), 10);
    if (crosswordVersion > IpuzCrosswordVersion) {
        return false;
    }
    return true;
}
exports.isSupportedIpuz = isSupportedIpuz;
/** Converts an IPUZ crossword to our internal format. */
function convertIpuz(ipuz) {
    // loop through the puzzle and figure out the row/col of each clue...
    const clueLocs = ipuz.puzzle.reduce((memoOuter, rowData, row) => rowData.reduce((memoInner, cell, col) => {
        var _a;
        const key = typeof cell === 'object' ? (_a = cell === null || cell === void 0 ? void 0 : cell.cell) !== null && _a !== void 0 ? _a : -1 : cell;
        memoInner[key.toString()] = { row, col };
        return memoInner;
    }, memoOuter), {});
    // console.log('GOT CLUE LOCS', clueLocs);
    const converted = Object.fromEntries(Object.entries(ipuz.clues).map(([dir, clueList]) => {
        const dirClues = clueList.reduce((memo, [num, clueText]) => {
            // console.log('looking for', dir, num);
            const { row, col } = clueLocs[num.toString()];
            // get the answer by inspecting the solution grid
            let answer = '';
            const dr = dir === 'Across' ? 0 : 1;
            const dc = dir === 'Across' ? 1 : 0;
            for (let r = row, c = col; r < ipuz.dimensions.height && c < ipuz.dimensions.width; r += dr, c += dc) {
                const ch = ipuz.solution[r][c];
                if (!ch || ch === '#') {
                    break;
                }
                answer += ch;
            }
            memo[num.toString()] = {
                clue: clueText,
                answer,
                row,
                col,
            };
            return memo;
        }, {});
        return [directionMap[dir], dirClues];
    }));
    return converted;
}
exports.convertIpuz = convertIpuz;
//# sourceMappingURL=ipuz.js.map