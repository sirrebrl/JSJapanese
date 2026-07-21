let HiraganaPortal = [
    {
        verticalCells: 34,
        horizontalCells: 60,
        headerText: 3,
        flashcardText: 7,
        buttonText: 3,
        activePage: 'default',
        pages: {
            list: ['default'],
            default: {
                headers: [
                    {
                        text: 'HIRAGANA',
                        top: 1, left: 20,
                        height: 3, width: 20
                    }
                ],
                flashcards: [
                    {
                        text: '',
                        top: 7, left: 15,
                        height: 10, width: 10
                    },
                    {
                        text: '',
                        top: 7, left: 35,
                        height: 10, width: 10
                    }
                ],
                buttons: [
                    {
                        text: 'NEXT',
                        left: 24, top: 22,
                        width: 12, height: 3,
                        function: nextCard
                    }
                ]
            }
        }
    },
    {
        verticalCells: 34,
        horizontalCells: 60,
        headerText: 3,
        flashcardText: 6,
        subcardText: 2,
        optioncardText: 4,
        activePage: 'default',
        pages: {
            list: ['default'],
            default: {
                headers: [
                    {
                        text: 'HIRAGANA',
                        top: 1, left: 20,
                        height: 3, width: 20
                    }
                ],
                flashcards: [
                    {
                        text: '',
                        top: 5, left: 22,
                        height: 8, width: 16
                    }
                ],
                subcards: [
                    {
                        text: '',
                        left: 35, top: 10,
                        width: 4, height: 4
                    }
                ],
                optioncards: [
                    {
                        id: 'option0',
                        text: '',
                        left: 16, top: 17,
                        width: 12, height: 8
                    },
                    {
                        id: 'option1',
                        text: '',
                        left: 32, top: 17,
                        width: 12, height: 8
                    }
                ]
            }
        }
    },
    {
        verticalCells: 34,
        horizontalCells: 60,
        headerText: 3,
        flashcardText: 6,
        subcardText: 2,
        optioncardText: 4,
        activePage: 'default',
        pages: {
            list: ['default'],
            default: {
                headers: [
                    {
                        text: 'HIRAGANA',
                        top: 1, left: 20,
                        height: 3, width: 20
                    }
                ],
                flashcards: [
                    {
                        text: '',
                        top: 12, left: 6,
                        height: 8, width: 16
                    }
                ],
                subcards: [
                    {
                        text: '',
                        left: 10, top: 22,
                        width: 8, height: 4
                    }
                ],
                optioncards: [
                    {
                        id: 'option0',
                        text: '',
                        left: 23, top: 8,
                        width: 12, height: 8
                    },
                    {
                        id: 'option1',
                        text: '',
                        left: 38, top: 8,
                        width: 12, height: 8
                    },
                    {
                        id: 'option2',
                        text: '',
                        left: 23, top: 20,
                        width: 12, height: 8
                    },
                    {
                        id: 'option3',
                        text: '',
                        left: 38, top: 20,
                        width: 12, height: 8
                    }
                ]
            }
        }
    },
    {
        verticalCells: 34,
        horizontalCells: 68,
        headerText: 3,
        flashcardText: 8,
        answerboxText: 4,
        buttonText: 2,
        keyboardText: 2,
        activePage: 'default',
        pages: {
            list: ['default'],
            default: {
                headers: [
                    {
                        text: 'HIRAGANA',
                        top: 1, left: 20,
                        height: 3, width: 20
                    }
                ],
                flashcards: [
                    {
                        text: '',
                        top: 0, left: 6,
                        height: 8, width: 12
                    }
                ],
                answerbox:
                {
                    left: 24, top: 5,
                    width: 12, height: 6
                },
                buttons: [
                    {
                        text: 'SUBMIT',
                        left: 10, top: 28,
                        width: 15, height: 2,
                        function: submitAnswer
                    },
                    {
                        text: 'CLEAR',
                        left: 29, top: 28,
                        width: 15, height: 2,
                        function: clearAnswer
                    }
                ],
                keyboard: []
            }
        }
    },
    {
        verticalCells: 34,
        horizontalCells: 60,
        headerText: 3,
        flashcardText: 6,
        subcardText: 4,
        answerboxText: 4,
        buttonText: 2,
        keyboardText: 2,
        toggleText: 5,
        activePage: 'default',
        pages: {
            list: ['default'],
            default: {
                headers: [
                    {
                        text: 'HIRAGANA',
                        top: 1, left: 20,
                        height: 3, width: 20
                    }
                ],
                flashcards: [
                    {
                        text: '',
                        top: 0, left: 6,
                        height: 8, width: 12
                    }
                ],
                subcards: [
                    {
                        text: '',
                        left: 19, top: 4,
                        width: 4, height: 4
                    }
                ],
                answerbox:
                {
                    left: 25, top: 5,
                    width: 10, height: 6
                },
                buttons: [
                    {
                        text: 'SUBMIT',
                        left: 12, top: 28,
                        width: 15, height: 2,
                        function: submitAnswer
                    },
                    {
                        text: 'CLEAR',
                        left: 28, top: 28,
                        width: 15, height: 2,
                        function: clearAnswer
                    }
                ],
                keyboard: [],
                toggles: [
                    {
                        id: 'dakuten',
                        settings: [
                            {
                                text: 'ﾞ',
                                color: '#888888'
                            },
                            {
                                text: 'ﾞ',
                                color: '#88FF88'
                            }
                        ],
                        left: 45, top: 12,
                        width: 6, height: 6
                    },
                    {
                        id: 'handakuten',
                        settings: [
                            {
                                text: '°',
                                color: '#888888'
                            },
                            {
                                text: '°',
                                color: '#88FF88'
                            }
                        ],
                        left: 45, top: 21,
                        width: 6, height: 6
                    }
                ]
            }
        }
    }
]

let leftAlign = 6;
for (let i = 0; i < latinKeys.length; i++)
{
    for (let j = 0; j < latinKeys[i].length; j++)
    {
        let newKey = {
            text: latinKeys[i][j],
            left: j * 5 + leftAlign, top: i * 5 + 13,
            width: 4, height: 2,
            function: typeKey
        };
        HiraganaPortal[3].pages.default.keyboard.push(newKey);
    }
    leftAlign += 2;
}

for (let i = 0; i < hiraganaKeys.length; i++)
{
    for (let j = 0; j < hiraganaKeys[i].length; j++)
    {
        let newKey = {
            text: hiraganaKeys[i][j].base,
            left: i * 4 + 8, top: j * 3 + 12,
            width: 3, height: 1,
            function: typeKey
        };
        HiraganaPortal[4].pages.default.keyboard.push(newKey);
    }
}

HiraganaPortal[1].pages.default.initFunction = function()
{
    if (direction == 1 && selectedHiragana.ref != "")
    {
        portalPanel.ref.innerText = '(' + selectedHiragana.ref + ')';
    }
}

HiraganaPortal[2].pages.default.initFunction = function()
{
    if (direction == 1 && selectedHiragana.ref != "")
    {
        portalPanel.ref.innerText = '(' + selectedHiragana.ref + ')';
    }
}

HiraganaPortal[1].pages.default.updateFunction = function(e)
{
    let goNext = (e.target.dataset.setting == 3);

    if (answered && !goNext) return;

    let response = validateCard(e.target.id);
    e.target.dataset.setting = response.validation;
    if (response.validation == 1) portalPanel[response.answer].dataset.setting = 3;
    else goNext = true;

    answered = true;

    if (goNext)
    {
        const timeoutId = setTimeout(nextCard, 1000);
    }
}

HiraganaPortal[2].pages.default.updateFunction = function(e)
{
    let goNext = (e.target.dataset.setting == 3);

    if (answered && !goNext) return;

    let response = validateCard(e.target.id);
    e.target.dataset.setting = response.validation;
    if (response.validation == 1) portalPanel[response.answer].dataset.setting = 3;
    else goNext = true;

    answered = true;

    if (goNext)
    {
        const timeoutId = setTimeout(nextCard, 1000);
    }
}

HiraganaPortal[4].pages.default.updateFunction = function(e)
{
    if (answer.length > 0) return;

    let currentSetting = parseInt(e.target.dataset.setting);
    let wrap = parseInt(e.target.dataset.wrap);
    currentSetting++;
    currentSetting = currentSetting % wrap;
    e.target.dataset.setting = currentSetting;

    if (currentSetting == 1)
    {
        for (let i = 0; i < hiraganaKeys.length; i++)
        {
            for (let j = 0; j < hiraganaKeys[i].length; j++)
            {
                portalPanel[hiraganaKeys[i][j].base + 'key'].innerText = hiraganaKeys[i][j][e.target.id];
            }
        }
        if (e.target.id == 'dakuten') portalPanel.handakuten.dataset.setting = 0;
        else portalPanel.dakuten.dataset.setting = 0;
    }
    else
    {
        for (let i = 0; i < hiraganaKeys.length; i++)
        {
            for (let j = 0; j < hiraganaKeys[i].length; j++)
            {
                portalPanel[hiraganaKeys[i][j].base + 'key'].innerText = hiraganaKeys[i][j].base;
            }
        }
    }
}