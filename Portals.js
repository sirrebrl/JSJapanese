let HiraganaPortal = [
    {
        verticalCells: 30,
        horizontalCells: 60,
        headerText: 3,
        labelText: 5,
        displayText: 4,
        buttonText: 3,
        inputText: 1,
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
                labels: [
                    {
                        text: '',
                        top: 9, left: 15,
                        height: 10, width: 10
                    },
                    {
                        text: '',
                        top: 9, left: 35,
                        height: 10, width: 10
                    }
                ],
                inputs: [],
                checkboxes: [],
                displays: [],
                buttons: [
                    {
                        text: '>>',
                        left: 26, top: 22,
                        width: 8, height: 3,
                        function: nextCard
                    }
                ],
                toggles: [],
                lockboxes: []
            }
        }
    },
    {
        verticalCells: 30,
        horizontalCells: 60,
        headerText: 3,
        labelText: 4,
        displayText: 2,
        buttonText: 8,
        inputText: 1,
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
                labels: [
                    {
                        text: '',
                        top: 6, left: 26,
                        height: 8, width: 8
                    }
                ],
                inputs: [],
                checkboxes: [],
                displays: [
                    {
                        id: 'ref',
                        left: 35, top: 9,
                        width: 4, height: 4
                    }
                ],
                buttons: [],
                toggles: [
                    {
                        id: 'leftButton',
                        settings: [
                            {
                                text: 'unselected',
                                color: '#888888'
                            },
                            {
                                text: 'selected',
                                color: '#88FF88'
                            }
                        ],
                        left: 20, top: 16,
                        width: 8, height: 8
                    },
                    {
                        id: 'rightButton',
                        settings: [
                            {
                                text: 'unselected',
                                color: '#888888'
                            },
                            {
                                text: 'selected',
                                color: '#88FF88'
                            }
                        ],
                        left: 32, top: 16,
                        width: 8, height: 8
                    }
                ],
                lockboxes: []
            }
        }
    },
    {
        verticalCells: 30,
        horizontalCells: 60,
        headerText: 3,
        labelText: 4,
        displayText: 2,
        buttonText: 8,
        inputText: 1,
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
                labels: [
                    {
                        text: '',
                        top: 11, left: 15,
                        height: 8, width: 8
                    }
                ],
                inputs: [],
                checkboxes: [],
                displays: [
                    {
                        id: 'ref',
                        left: 17, top: 20,
                        width: 4, height: 4
                    }
                ],
                buttons: [],
                toggles: [
                    {
                        id: 'buttonA',
                        settings: [
                            {
                                text: 'unselected',
                                color: '#888888'
                            },
                            {
                                text: 'selected',
                                color: '#88FF88'
                            }
                        ],
                        left: 27, top: 6,
                        width: 8, height: 8
                    },
                    {
                        id: 'buttonB',
                        settings: [
                            {
                                text: 'unselected',
                                color: '#888888'
                            },
                            {
                                text: 'selected',
                                color: '#88FF88'
                            }
                        ],
                        left: 38, top: 6,
                        width: 8, height: 8
                    },
                    {
                        id: 'buttonC',
                        settings: [
                            {
                                text: 'unselected',
                                color: '#888888'
                            },
                            {
                                text: 'selected',
                                color: '#88FF88'
                            }
                        ],
                        left: 27, top: 18,
                        width: 8, height: 8
                    },
                    {
                        id: 'buttonD',
                        settings: [
                            {
                                text: 'unselected',
                                color: '#888888'
                            },
                            {
                                text: 'selected',
                                color: '#88FF88'
                            }
                        ],
                        left: 38, top: 18,
                        width: 8, height: 8
                    }
                ],
                lockboxes: []
            }
        }
    }
]

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
    if (answered) return;
    let currentSetting = parseInt(e.target.dataset.setting);
    if (currentSetting == 1) return;
    currentSetting++;
    e.target.dataset.setting = currentSetting;
    answered = true;
    validateCard(e.target.id == "leftButton" ? 0 : 1);
}

HiraganaPortal[2].pages.default.updateFunction = function(e)
{
    if (answered) return;
    let currentSetting = parseInt(e.target.dataset.setting);
    if (currentSetting == 1) return;
    currentSetting++;
    e.target.dataset.setting = currentSetting;
    answered = true;
    switch (e.target.id)
    {
        case "buttonA":
            validateCard(0);
            break;
        case "buttonB":
            validateCard(1);
            break;
        case "buttonC":
            validateCard(2);
            break;
        case "buttonD":
            validateCard(3);
            break;
    }
}