import { renderSubstack } from "./substackComponent";
import createButtonObserver from "roamjs-components/dom/createButtonObserver";
import createBlock from "roamjs-components/writes/createBlock";

var runners = {
    observers: [],
}

export default {
    onload: ({ extensionAPI }) => {
        const onloadArgs = { extensionAPI };
        const crosswordObserver = createButtonObserver({
            attribute: 'substack',
            render: (b) => {
                renderSubstack(b, onloadArgs)
            }
        });
        runners['observers'] = [crosswordObserver];

        extensionAPI.ui.commandPalette.addCommand({
            label: "Embed a post from Substack",
            callback: () => {
                const uid = window.roamAlphaAPI.ui.getFocusedBlock()?.["block-uid"];
                if (uid == undefined) {
                    alert("Please focus a block before importing a post from Substack");
                    return;
                } else {
                    window.roamAlphaAPI.updateBlock(
                        { block: { uid: uid, string: "Loading...".toString(), open: true } });
                        fetchSubstack(uid, false);
                }
            }
        });

        async function fetchSubstack(blockUid) {
            var cDate, cAuthor, cDay, cMonth, cYear, data, cols, rows;
            breakme: {
                var url = `https://raw.githubusercontent.com/doshea/nyt_crosswords/master/${year}/${month}/${day}.json`;
                const response = await fetch(url);
                data = await response.json();

                // setTimeout is needed because sometimes block is left blank
                setTimeout(async () => {
                    await window.roamAlphaAPI.updateBlock({ "block": { "uid": blockUid, "string": "**NYT Crossword**" } });
                    var authorString = "";
                    if (cAuthor.match(" and ")) {
                        authorString = "[[";
                        var cAuthors = cAuthor.split(" and ");
                        for (var i = 0; i < cAuthors.length - 1; i++) {
                            authorString += cAuthors[i] + "]] [["
                        }
                        authorString += cAuthors[cAuthors.length - 1] + "]]";
                    } else {
                        authorString = "[[" + cAuthor + "]]"
                    }
                    await createBlock({
                        node: {
                            text: "[[" + crosswordDate + "]] ~ " + authorString,
                            children: [
                                {
                                    text: "{{crossword}}",
                                    children: [
                                        {
                                            text: "Crossword Definition: #NYTCrosswordData^^" + sourceString + "^^",
                                        },
                                        {
                                            text: "Crossword Guesses: #NYTCrosswordData^^{\"guesses\":{}}^^",
                                        },
                                    ],
                                },
                            ],
                        },
                        parentUid: blockUid,
                    });
                    let blockData = window.roamAlphaAPI.data.pull("[:node/title :block/uid {:block/children ...}]", `[:block/uid \"${blockUid}\"]`);
                    await window.roamAlphaAPI.updateBlock({ "block": { "uid": blockData[":block/children"][0][":block/children"][0][":block/uid"], "open": false } });
                }, 200);

                document.querySelector("body")?.click();
            }
        };
    },
    onunload: () => {
        for (let index = 0; index < runners['observers'].length; index++) {
            const element = runners['observers'][index];
            element.disconnect()
        };
    }
}
