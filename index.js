let activeHiragana = [];
for (let i = 0; i < hiragana.length; i++)
{
    if (studentData.hiragana[hiragana[i]].stage > -1)
    {
        activeHiragana.push(studentData.hiragana[hiragana[i]]);
        activeHiragana[activeHiragana.length-1].hiragana = hiragana[i];
    }
}
for (let i = 0; i < activeHiragana.length; i++)
{
    activeHiragana[i].weight = 1.0 / activeHiragana.length;
}

nextCard();

