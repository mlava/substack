"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCorrectAnswers = exports.deserializeGuesses = exports.loadGuesses = exports.serializeGuesses = exports.saveGuesses = exports.clearGuesses = exports.byNumber = exports.createGridData = exports.fillClues = exports.createEmptyGrid = exports.calculateExtents = exports.otherDirection = exports.isAcross = exports.bothDirections = void 0;
const directionInfo = {
    across: {
        primary: 'col',
        orthogonal: 'row',
    },
    down: {
        primary: 'row',
        orthogonal: 'col',
    },
};
exports.bothDirections = Object.keys(directionInfo);
function isAcross(direction) {
    return direction === 'across';
}
exports.isAcross = isAcross;
function otherDirection(direction) {
    return isAcross(direction) ? 'down' : 'across';
}
exports.otherDirection = otherDirection;
function calculateExtents(data, direction) {
    const dir = directionInfo[direction];
    let primaryMax = 0;
    let orthogonalMax = 0;
    Object.entries(data[direction]).forEach(([, info]) => {
        const primary = info[dir.primary] + info.answer.length - 1;
        if (primary > primaryMax) {
            primaryMax = primary;
        }
        const orthogonal = info[dir.orthogonal];
        if (orthogonal > orthogonalMax) {
            orthogonalMax = orthogonal;
        }
    });
    const rowColMax = {
        row: 0,
        col: 0,
    };
    rowColMax[dir.primary] = primaryMax;
    rowColMax[dir.orthogonal] = orthogonalMax;
    return rowColMax;
}
exports.calculateExtents = calculateExtents;
// const emptyCellData: Partial<CellData> = {
//   used: false,
//   // number: undefined, // null,
//   // answer: '',
//   // guess: '',
//   // row: r,
//   // col: c,
//   // across: '', //null,
//   // down: '', //null,
// } as const;
function createEmptyGrid(rows, cols) {
    const gridData = Array(rows);
    // Rather than [x][y] in column-major order, the cells are indexed as
    // [row][col] in row-major order.
    for (let r = 0; r < rows; r++) {
        gridData[r] = Array(cols);
        for (let c = 0; c < cols; c++) {
            gridData[r][c] = {
                // ...emptyCellData,
                row: r,
                col: c,
                used: false,
            };
        }
    }
    return gridData;
}
exports.createEmptyGrid = createEmptyGrid;
function fillClues(gridData, clues, data, direction) {
    const dir = directionInfo[direction];
    Object.entries(data[direction]).forEach(([number, info]) => {
        const { row: rowStart, col: colStart, clue, answer } = info;
        for (let i = 0; i < answer.length; i++) {
            const row = rowStart + (dir.primary === 'row' ? i : 0);
            const col = colStart + (dir.primary === 'col' ? i : 0);
            const cellData = gridData[row][col];
            // TODO?: check to ensure the answer is the same if it's already set?
            cellData.used = true;
            cellData.answer = answer[i];
            cellData[direction] = number;
            if (i === 0) {
                // TODO?: check to ensure the number is the same if it's already set?
                cellData.number = number;
            }
        }
        clues[direction].push({
            number,
            clue,
            answer,
            col: colStart,
            row: rowStart,
        });
    });
    clues[direction].sort(byNumber);
}
exports.fillClues = fillClues;
// Given the "nice format" for a crossword, generate the usable data optimized
// for rendering and our interactivity.
function createGridData(data, allowNonSquare) {
    const acrossMax = calculateExtents(data, 'across');
    const downMax = calculateExtents(data, 'down');
    let rows = Math.max(acrossMax.row, downMax.row) + 1;
    let cols = Math.max(acrossMax.col, downMax.col) + 1;
    if (!allowNonSquare) {
        const size = Math.max(rows, cols);
        rows = size;
        cols = size;
    }
    const gridData = createEmptyGrid(rows, cols);
    // Now fill with answers... and also collect the clues
    const clues = {
        across: [],
        down: [],
    };
    fillClues(gridData, clues, data, 'across');
    fillClues(gridData, clues, data, 'down');
    return { rows, cols, gridData, clues };
}
exports.createGridData = createGridData;
function byNumber(a, b) {
    const aNum = Number.parseInt(a.number, 10);
    const bNum = Number.parseInt(b.number, 10);
    return aNum - bNum;
}
exports.byNumber = byNumber;
function clearGuesses(storageKey) {
    if (!window.localStorage) {
        return;
    }
    window.localStorage.removeItem(storageKey);
}
exports.clearGuesses = clearGuesses;
function saveGuesses(gridData, storageKey) {
    const { localStorage } = window;
    if (!localStorage) {
        return;
    }
    const guesses = serializeGuesses(gridData);
    const saveData = {
        date: Date.now(),
        guesses,
    };
    localStorage.setItem(storageKey, JSON.stringify(saveData));
}
exports.saveGuesses = saveGuesses;
function serializeGuesses(gridData) {
    const guesses = gridData.reduce((memo, row, r) => row.reduce((memoInner, cellData, c) => {
        var _a;
        const { guess } = cellData;
        if (guess !== '') {
            memoInner[`${r}_${c}`] = (_a = cellData.guess) !== null && _a !== void 0 ? _a : '';
        }
        return memoInner;
    }, memo), {});
    return guesses;
}
exports.serializeGuesses = serializeGuesses;
function loadGuesses(gridData, storageKey) {
    const { localStorage } = window;
    if (!localStorage) {
        return;
    }
    const saveRaw = localStorage.getItem(storageKey);
    if (!saveRaw) {
        return;
    }
    const saveData = JSON.parse(saveRaw);
    // TODO: check date for expiration?
    deserializeGuesses(gridData, saveData.guesses);
}
exports.loadGuesses = loadGuesses;
function deserializeGuesses(gridData, guesses) {
    Object.entries(guesses).forEach(([key, val]) => {
        const [rStr, cStr] = key.split('_');
        const r = parseInt(rStr, 10);
        const c = parseInt(cStr, 10);
        // ignore any out-of-bounds guesses!
        if (r <= gridData.length - 1 && c <= gridData[0].length - 1) {
            gridData[r][c].guess = val;
        }
    });
}
exports.deserializeGuesses = deserializeGuesses;
function findCorrectAnswers(data, gridData) {
    const correctAnswers = [];
    exports.bothDirections.forEach((direction) => {
        const across = isAcross(direction);
        Object.entries(data[direction]).forEach(([num, info]) => {
            const { row, col } = info;
            let correct = true;
            for (let i = 0; i < info.answer.length; i++) {
                const r = across ? row : row + i;
                const c = across ? col + i : col;
                if (gridData[r][c].guess !== info.answer[i]) {
                    correct = false;
                    break;
                }
            }
            if (correct) {
                // same args as notifyCorrect: direction, number, answer
                correctAnswers.push([direction, num, info.answer]);
            }
        });
    });
    return correctAnswers;
}
exports.findCorrectAnswers = findCorrectAnswers;
//# sourceMappingURL=util.js.map