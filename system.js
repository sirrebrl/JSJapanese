let selectedHiragana;
let incorrectHiragana = [];

let direction = 0;
let correct = -1;
let answered = false;
let answer = "";

let firstDraw = true;

function SelectRandomHiragana()
{
    let selector = Math.random();
    console.log('selector: ' + selector);
    let selection = false;

    for (let i = 0; i < activeHiragana.length; i++)
    {
        selector -= activeHiragana[i].weight;
        if (selector <= 0)
        {
            activeHiragana[i].weight *= 0.8;
            NormalizeWeights();

            selectedHiragana = activeHiragana[i];
            return;
        }
    }

    if (!selection) { console.log('selector subtraction error'); }
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
        console.log('hiragana: ' + selectedHiragana.hiragana + ', weight: ' + (Math.round(selectedHiragana.weight * 1000) / 1000));
        // if (selectedHiragana.stage == 2)
        // {
        //     reselect = Math.random() > 0.08;
        // }
    }

    answered = false;
    answer = "";
    SaveStudentData();

    direction = 0;

    correct = -1;

    switch(selectedHiragana.stage)
    {
        case 0:
            HiraganaPortal[0].pages.default.flashcards[0].text = selectedHiragana.hiragana;
            HiraganaPortal[0].pages.default.flashcards[1].text = selectedHiragana.romaji;

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

            HiraganaPortal[1].pages.default.flashcards[0].text = (direction == 0) ? selectedHiragana.hiragana : selectedHiragana.romaji;
            if (direction == 1) { HiraganaPortal[1].pages.default.subcards[0].text = `(${selectedHiragana.ref})`; }

            RandomizeIncorrectHiragana();
            correct = Math.round(Math.random());
            let leftButton = (correct == 0) ? ((direction == 1) ? selectedHiragana.hiragana : selectedHiragana.romaji) : ((direction == 1) ? incorrectHiragana[0].hiragana : incorrectHiragana[0].romaji);
            let rightButton = (correct == 1) ? ((direction == 1) ? selectedHiragana.hiragana : selectedHiragana.romaji) : ((direction == 1) ? incorrectHiragana[0].hiragana : incorrectHiragana[0].romaji);
            HiraganaPortal[1].pages.default.optioncards[0].text = leftButton;
            HiraganaPortal[1].pages.default.optioncards[0].text = leftButton;
            HiraganaPortal[1].pages.default.optioncards[1].text = rightButton;
            HiraganaPortal[1].pages.default.optioncards[1].text = rightButton;

            destroyPortal();
            ConstructPortal(window.innerHeight, window.innerWidth, HiraganaPortal[1]);

            break;
        case 2:
            direction = Math.round(Math.random());

            HiraganaPortal[2].pages.default.flashcards[0].text = (direction == 0) ? selectedHiragana.hiragana : selectedHiragana.romaji;
            if (direction == 1) { HiraganaPortal[2].pages.default.subcards[0].text = `(${selectedHiragana.ref})`; }

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
                HiraganaPortal[2].pages.default.optioncards[i].text = buttons[i];
            }

            destroyPortal();
            ConstructPortal(window.innerHeight, window.innerWidth, HiraganaPortal[2]);

            break;
        case 3:
            direction = Math.round(Math.random());
            HiraganaPortal[direction+3].pages.default.flashcards[0].text = (direction == 0) ? selectedHiragana.hiragana : selectedHiragana.romaji;
            if (direction == 1) HiraganaPortal[4].pages.default.subcards[0].text = `(${selectedHiragana.ref})`;
            destroyPortal();
            ConstructPortal(window.innerHeight, window.innerWidth, HiraganaPortal[direction+3]);

            break;
    }
}

function validateCard(answerCard)
{
    let answer;
    switch(answerCard)
    {
        case 'option0': answer = 0; break;
        case 'option1': answer = 1; break;
        case 'option2': answer = 2; break;
        case 'option3': answer = 3; break;
    }

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
            activeHiragana[progressive].stage++;
            activeHiragana[progressive].progress = (activeHiragana[progressive].stage == 2) ? [0, 0, 0, 0, 0, 0, 0, 0] : [0, 0, 0, 0, 0, 0];
            ApproveActivation();
        }
    }

    let response = { validation: (answer == correct ? 2 : 1), answer: 'option' + correct}

    return response;
}

function ApproveActivation()
{
    for (let i = 0; i < activeHiragana.length; i++)
    {
        if (activeHiragana[i].stage < 2) return;
    }

    studentData.hiraganaBatch++;

    for (let i = 0; i < hiraganaBatches[studentData.hiraganaBatch].length; i++)
    {
        let thisHiragana = hiraganaBatches[studentData.hiraganaBatch][i]
        studentData.hiragana[thisHiragana].stage = 0;
        activeHiragana.push(studentData.hiragana[thisHiragana]);
        activeHiragana[activeHiragana.length-1].hiragana = thisHiragana;
    }
    BiasWeights();
}

function typeKey(e)
{
    let key = e.target.innerText;
    answer += key;
    portalPanel.answer.innerText = answer;

    if (direction == 1)
    {
        if (answer.length == 1)
        {
            for (let i = 0; i < hiraganaKeys.length; i++)
            {
                for (let j = 0; j < hiraganaKeys[i].length; j++)
                {
                    portalPanel[hiraganaKeys[i][j].base + 'key'].innerText = hiraganaKeys[i][j].modifier;
                }
            }
            portalPanel.handakuten.dataset.setting = 0;
            portalPanel.dakuten.dataset.setting = 0;
        }
        else
        {
            for (let i = 0; i < hiraganaKeys.length; i++)
            {
                for (let j = 0; j < hiraganaKeys[i].length; j++)
                {
                    portalPanel[hiraganaKeys[i][j].base + 'key'].innerText = "";
                }
            }
            portalPanel.handakuten.dataset.setting = 0;
            portalPanel.dakuten.dataset.setting = 0;
        }
    }
}

function submitAnswer()
{
    let correctAnswer = (direction == 0) ? selectedHiragana.romaji : selectedHiragana.hiragana;
    let progress = (answer == correctAnswer) ? 1 : -1;

    for (let i = 0; i < activeHiragana.length; i++)
    {
        if (activeHiragana[i].hiragana == selectedHiragana.hiragana)
        {
            activeHiragana[i].progress[activeHiragana[i].progress.length-1] += progress;
            activeHiragana[i].progress[activeHiragana[i].progress.length-1] = Math.max(activeHiragana[i].progress[activeHiragana[i].progress.length-1], 0);

            let progressSum = 0;
            let progressLength = activeHiragana[i].progress.length - 1;
            for (let j = 0; j < progressLength - 1; j++)
            {
                activeHiragana[i].progress[j] = activeHiragana[i].progress[j+1];
                progressSum += activeHiragana[i].progress[j];
            }
            activeHiragana[i].progress[progressLength-1] = progress;
            progressSum += activeHiragana[i].progress[progressLength-1];

            if (progressSum == -5)
            {
                activeHiragana[i].stage--;
                activeHiragana[i].progress = [0, 0, 0, 0, 0, 0, 0, 0];
            }

            break;
        }
    }

    portalPanel.answer.dataset.setting = (answer == correctAnswer) ? 2 : 1;
    portalPanel.answer.innerText = correctAnswer;
    const timeoutId = setTimeout(nextCard, (answer == correctAnswer) ? 1000 : 2000);
}

function clearAnswer()
{
    answer = "";
    portalPanel.answer.innerText = answer;

    for (let i = 0; i < hiraganaKeys.length; i++)
    {
        for (let j = 0; j < hiraganaKeys[i].length; j++)
        {
            portalPanel[hiraganaKeys[i][j].base + 'key'].innerText = hiraganaKeys[i][j].base;
        }
    }
    portalPanel.handakuten.dataset.setting = 0;
    portalPanel.dakuten.dataset.setting = 0;
}

function BiasWeights()
{
    let weightSum = 0;

    for (let i = 0; i < activeHiragana.length; i++)
    {
        activeHiragana[i].weight = 0;
        switch (activeHiragana[i].stage)
        {
            case 0:
                activeHiragana[i].weight = 10 + (activeHiragana[i].progress / 2);
                break;
            case 1:
                activeHiragana[i].weight = 6 + Math.abs(activeHiragana[i].progress.reduce((accumulator, current) => accumulator + current, 0) / 2);
                break;
            case 2:
                activeHiragana[i].weight = 3 + Math.abs(activeHiragana[i].progress.reduce((accumulator, current) => accumulator + current, 0) / 2);
                break;
            case 3:
                activeHiragana[i].weight = Math.pow(1.2, -activeHiragana[i].progress[activeHiragana[i].progress.length-1]);
                break;
        }
        weightSum += activeHiragana[i].weight;
    }

    for (let i = 0; i < activeHiragana.length; i++)
    {
        activeHiragana[i].weight /= weightSum;
    }
}

function NormalizeWeights()
{
    let weightSum = 0.0;
    for (let i = 0; i < activeHiragana.length; i++) { weightSum += activeHiragana[i].weight; }
    for (let i = 0; i < activeHiragana.length; i++) { activeHiragana[i].weight /= weightSum; }

    // weightSum = 0.0;
    // for (let i = 0; i < activeHiragana.length; i++) { weightSum += activeHiragana[i].weight; }
    // console.log('post-normalization weight sum: ' + weightSum);
}