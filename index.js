let activeHiragana = [];
for (let i = 0; i < hiragana.length; i++)
{
    if (studentData.hiragana[hiragana[i]].stage > -1)
    {
        activeHiragana.push(studentData.hiragana[hiragana[i]]);
        activeHiragana[activeHiragana.length-1].hiragana = hiragana[i];
    }
}
BiasWeights();

nextCard();

