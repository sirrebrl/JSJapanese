let selectedHiragana;
let incorrectHiragana = [];

let direction = 0;
let correct = -1;
let answered = false;

let firstDraw = true;

function SelectRandomHiragana()
{
    let selector = Math.random();
    for (let i = 0; i < activeHiragana.length; i++)
    {
        selector -= activeHiragana[i].weight;
        if (selector <= 0)
        {
            let allocate = activeHiragana[i].weight / (activeHiragana.length - 1);
            for (let j = 0; j < activeHiragana.length; j++)
            {
                activeHiragana[j].weight += allocate;
            }
            activeHiragana[i].weight = 0;

            selectedHiragana = activeHiragana[i];
            return;
        }
    }
}

function RandomizeIncorrectHiragana(stage)
{
    let numWrong = (stage == 1) ? 1 : 4;
    incorrectHiragana = [];
    let selector;
    let preselected;

    while (incorrectHiragana.length < numWrong)
    {
        selector = Math.floor(Math.random() * activeHiragana.length);
        if (selectedHiragana.hiragana == activeHiragana[selector].hiragana) continue;
        preselected = false;
        for (let i = 0; i < incorrectHiragana.length; i++)
        {
            if (incorrectHiragana[i].hiragana == activeHiragana[selector].hiragana)
            {
                preselected = true;
                break;
            }
        }
        if (preselected) continue;
        incorrectHiragana.push(activeHiragana[selector]);
    }
}

function nextCard()
{
    console.log('drawing card');

    if (!firstDraw)
    {
        if (selectedHiragana.stage == 0)
        {
            for (let i = 0; i < activeHiragana.length; i++)
            {
                if (activeHiragana[i].hiragana == selectedHiragana.hiragana)
                {
                    activeHiragana[i].progress++;
                    if (activeHiragana[i].progress == 5) 
                    {
                        activeHiragana[i].stage++;
                        activeHiragana[i].progress = [0, 0, 0, 0, 0];
                    }
                }
            }
        }
    }

    let reselect = true;
    while (reselect)
    {
        reselect = false;
        SelectRandomHiragana();
        if (selectedHiragana.stage == 2)
        {
            reselect = Math.random() > 0.08;
        }
    }

    console.log('hiragana selected, ' + selectedHiragana.hiragana + ' stage ' + selectedHiragana.stage);

    direction = 0;
    correct = -1;

    switch(selectedHiragana.stage)
    {
        case 0:
            HiraganaPortal[0].pages.default.labels[0].text = selectedHiragana.hiragana;
            HiraganaPortal[0].pages.default.labels[1].text = selectedHiragana.romaji;

            for (let i = 0; i < activeHiragana.length; i++)
            {
                if (activeHiragana[i].hiragana == selectedHiragana.hiragana)
                {
                    activeHiragana[i].progress++;
                    if (activeHiragana[i].progress == 5) 
                    {
                        activeHiragana[i].stage++;
                        activeHiragana[i].progress = [0, 0, 0, 0, 0];
                    }
                }
            }

            destroyPortal();
            ConstructPortal(window.innerHeight, window.innerWidth, HiraganaPortal[0]);

            break;
        case 1:
            direction = Math.round(Math.random());

            HiraganaPortal[1].pages.default.labels[0].text = (direction == 0) ? selectedHiragana.hiragana : selectedHiragana.romaji;

            RandomizeIncorrectHiragana();
            correct = Math.round(Math.random());
            let leftButton = (correct == 0) ? ((direction == 1) ? selectedHiragana.hiragana : selectedHiragana.romaji) : ((direction == 1) ? incorrectHiragana[0].hiragana : incorrectHiragana[0].romaji);
            let rightButton = (correct == 1) ? ((direction == 1) ? selectedHiragana.hiragana : selectedHiragana.romaji) : ((direction == 1) ? incorrectHiragana[0].hiragana : incorrectHiragana[0].romaji);
            HiraganaPortal[1].pages.default.toggles[0].settings[0].text = leftButton;
            HiraganaPortal[1].pages.default.toggles[0].settings[1].text = leftButton;
            HiraganaPortal[1].pages.default.toggles[1].settings[0].text = rightButton;
            HiraganaPortal[1].pages.default.toggles[1].settings[1].text = rightButton;
            HiraganaPortal[1].pages.default.toggles[0].settings[1].color = (correct == 0) ? '#88FF88' : '#ff8888';
            HiraganaPortal[1].pages.default.toggles[1].settings[1].color = (correct == 1) ? '#88FF88' : '#ff8888';

            destroyPortal();
            ConstructPortal(window.innerHeight, window.innerWidth, HiraganaPortal[1]);

            break;
        case 2:
            direction = Math.round(Math.random());

            HiraganaPortal[2].pages.default.labels[0].text = (direction == 0) ? selectedHiragana.hiragana : selectedHiragana.romaji;

            RandomizeIncorrectHiragana();
            correct = Math.floor(Math.random() * 4);
            let buttons = [];
            switch (correct)
            {
                case 0:
                    buttons[0] = (direction == 1) ? selectedHiragana.hiragana : selectedHiragana.romaji;
                    buttons[1] = (direction == 1) ? incorrectHiragana[0].hiragana : incorrectHiragana[0].romaji;
                    buttons[2] = (direction == 1) ? incorrectHiragana[1].hiragana : incorrectHiragana[1].romaji;
                    buttons[3] = (direction == 1) ? incorrectHiragana[2].hiragana : incorrectHiragana[2].romaji;
                    break;
                case 1:
                    buttons[1] = (direction == 1) ? selectedHiragana.hiragana : selectedHiragana.romaji;
                    buttons[0] = (direction == 1) ? incorrectHiragana[0].hiragana : incorrectHiragana[0].romaji;
                    buttons[2] = (direction == 1) ? incorrectHiragana[1].hiragana : incorrectHiragana[1].romaji;
                    buttons[3] = (direction == 1) ? incorrectHiragana[2].hiragana : incorrectHiragana[2].romaji;
                    break;
                case 2:
                    buttons[2] = (direction == 1) ? selectedHiragana.hiragana : selectedHiragana.romaji;
                    buttons[1] = (direction == 1) ? incorrectHiragana[0].hiragana : incorrectHiragana[0].romaji;
                    buttons[0] = (direction == 1) ? incorrectHiragana[1].hiragana : incorrectHiragana[1].romaji;
                    buttons[3] = (direction == 1) ? incorrectHiragana[2].hiragana : incorrectHiragana[2].romaji;
                    break;
                case 3:
                    buttons[3] = (direction == 1) ? selectedHiragana.hiragana : selectedHiragana.romaji;
                    buttons[1] = (direction == 1) ? incorrectHiragana[0].hiragana : incorrectHiragana[0].romaji;
                    buttons[2] = (direction == 1) ? incorrectHiragana[1].hiragana : incorrectHiragana[1].romaji;
                    buttons[0] = (direction == 1) ? incorrectHiragana[2].hiragana : incorrectHiragana[2].romaji;
                    break;
            }
            for (let i = 0; i < 4; i++)
            {
                HiraganaPortal[2].pages.default.toggles[i].settings[0].text = buttons[i];
                HiraganaPortal[2].pages.default.toggles[i].settings[1].text = buttons[i];
                HiraganaPortal[2].pages.default.toggles[i].settings[1].color = (correct == i) ? '#88FF88' : '#ff8888';
            }

            destroyPortal();
            ConstructPortal(window.innerHeight, window.innerWidth, HiraganaPortal[2]);

            break;
    }

    answered = false;

    SaveStudentData();
}

function validateCard(answer)
{
    let progressive = -1;
    for (let i = 0; i < activeHiragana.length; i++)
    {
        if (activeHiragana[i].hiragana == selectedHiragana.hiragana)
        {
            progressive = i;
            break;
        }
    }

    if (activeHiragana[progressive].stage < 3)
    {
        let progressSum = 0;
        let progressLength = activeHiragana[progressive].progress.length;
        for (let i = 0; i < progressLength - 1; i++)
        {
            activeHiragana[progressive].progress[i] = activeHiragana[progressive].progress[i+1];
            progressSum += activeHiragana[progressive].progress[i];
        }
        activeHiragana[progressive].progress[progressLength-1] = (answer == correct) ? 1 : -1;
        progressSum += activeHiragana[progressive].progress[progressLength-1];

        if (progressSum == -progressLength)
        {
            activeHiragana[progressive].stage--;
            activeHiragana[progressive].progress = (activeHiragana[progressive].stage == 0) ? 0 : [0, 0, 0, 0, 0];
        }
        if (progressSum == progressLength)
        {
            activeHiragana[progressive].stage = 2;
            activeHiragana[progressive].progress = [0, 0, 0, 0, 0, 0, 0, 0];
            ApproveActivation();
        }
    }

    const timeoutId = setTimeout(nextCard, (answer == correct) ? 400 : 1600);
}

function ApproveActivation()
{
    for (let i = 0; i < activeHiragana.length; i++)
    {
        if (activeHiragana[i].stage < 2) return;
    }

    studentData.hiraganaBatch++;

    let previousCount = activeHiragana.length;
    for (let i = 0; i < hiraganaBatches[studentData.hiraganaBatch].length; i++)
    {
        let thisHiragana = hiraganaBatches[studentData.hiraganaBatch][i]
        studentData.hiragana[thisHiragana].stage = 0;
        activeHiragana.push(studentData.hiragana[thisHiragana]);
        activeHiragana[activeHiragana.length-1].hiragana = thisHiragana;
    }
    for (let i = 0; i < previousCount; i++)
    {
        activeHiragana[i].weight = activeHiragana[i].weight * previousCount / activeHiragana.length;
    }
    for (let i = previousCount; i < activeHiragana.length; i++)
    {
        activeHiragana[i].weight = 1.0 / activeHiragana.length;
    }
}