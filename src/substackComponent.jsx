import { createComponentRender } from "roamjs-components/components/ComponentContainer";
import React, { useEffect, useState } from 'react';

const CrosswordElement = ({ blockUid }) => {
    return <CrosswordProvider data={JSON.parse(crosswordData)} storageKey={key} onCorrect={storeGuesses} onLoadedCorrect={localStorage.setItem(key, cRRGuessesString)} isCrosswordCorrect={() => alert("Congratulations!")} >
        <div class="crosswordGrid">
            <CrosswordGrid />
            <DirectionClues direction="across" />
            <DirectionClues direction="down" />
        </div>
    </CrosswordProvider>;
};

export const renderCrossword = createComponentRender(
    ({ blockUid }) => <CrosswordElement blockUid={blockUid} />,
    "crossword-element-parent"
);

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}