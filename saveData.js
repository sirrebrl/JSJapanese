/*

STUDENT DATA CHANGE LOG

*/

let blankStudent =
{
    version: 2,
    activePortal: 'homePortal',
    colorProfile: { },
    hiraganaBatch: 0,
    hiragana: {
        あ: { romaji: "A", ref: "", stage: 0, progress: 0 },
        い: { romaji: "I", ref: "", stage: 0, progress: 0 },
        う: { romaji: "U", ref: "", stage: 0, progress: 0 },
        え: { romaji: "E", ref: "", stage: 0, progress: 0 },
        お: { romaji: "O", ref: "", stage: 0, progress: 0 },
        か: { romaji: "KA", ref: "", stage: -1, progress: 0 },
        き: { romaji: "KI", ref: "", stage: -1, progress: 0 },
        く: { romaji: "KU", ref: "", stage: -1, progress: 0 },
        け: { romaji: "KE", ref: "", stage: -1, progress: 0 },
        こ: { romaji: "KO", ref: "", stage: -1, progress: 0 },
        が: { romaji: "GA", ref: "", stage: -1, progress: 0 },
        ぎ: { romaji: "GI", ref: "", stage: -1, progress: 0 },
        ぐ: { romaji: "GU", ref: "", stage: -1, progress: 0 },
        げ: { romaji: "GE", ref: "", stage: -1, progress: 0 },
        ご: { romaji: "GO", ref: "", stage: -1, progress: 0 },
        さ: { romaji: "SA", ref: "", stage: -1, progress: 0 },
        し: { romaji: "SHI", ref: "", stage: -1, progress: 0 },
        す: { romaji: "SU", ref: "", stage: -1, progress: 0 },
        せ: { romaji: "SE", ref: "", stage: -1, progress: 0 },
        そ: { romaji: "SO", ref: "", stage: -1, progress: 0 },
        ざ: { romaji: "ZA", ref: "", stage: -1, progress: 0 },
        じ: { romaji: "JI", ref: "SHI", stage: -1, progress: 0 },
        ず: { romaji: "ZU", ref: "SU", stage: -1, progress: 0 },
        ぜ: { romaji: "ZE", ref: "", stage: -1, progress: 0 },
        ぞ: { romaji: "ZO", ref: "", stage: -1, progress: 0 },
        た: { romaji: "TA", ref: "", stage: -1, progress: 0 },
        ち: { romaji: "CHI", ref: "", stage: -1, progress: 0 },
        つ: { romaji: "TSU", ref: "", stage: -1, progress: 0 },
        て: { romaji: "TE", ref: "", stage: -1, progress: 0 },
        と: { romaji: "TO", ref: "", stage: -1, progress: 0 },
        だ: { romaji: "DA", ref: "", stage: -1, progress: 0 },
        ぢ: { romaji: "JI", ref: "CHI", stage: -1, progress: 0 },
        づ: { romaji: "ZU", ref: "TSU", stage: -1, progress: 0 },
        で: { romaji: "DE", ref: "", stage: -1, progress: 0 },
        ど: { romaji: "DO", ref: "", stage: -1, progress: 0 },
        な: { romaji: "NA", ref: "", stage: -1, progress: 0 },
        に: { romaji: "NI", ref: "", stage: -1, progress: 0 },
        ぬ: { romaji: "NU", ref: "", stage: -1, progress: 0 },
        ね: { romaji: "NE", ref: "", stage: -1, progress: 0 },
        の: { romaji: "NO", ref: "", stage: -1, progress: 0 },
        は: { romaji: "HA", ref: "", stage: -1, progress: 0 },
        ひ: { romaji: "HI", ref: "", stage: -1, progress: 0 },
        ふ: { romaji: "FU", ref: "", stage: -1, progress: 0 },
        へ: { romaji: "HE", ref: "", stage: -1, progress: 0 },
        ほ: { romaji: "HO", ref: "", stage: -1, progress: 0 },
        ば: { romaji: "BA", ref: "", stage: -1, progress: 0 },
        び: { romaji: "BI", ref: "", stage: -1, progress: 0 },
        ぶ: { romaji: "BU", ref: "", stage: -1, progress: 0 },
        べ: { romaji: "BE", ref: "", stage: -1, progress: 0 },
        ぼ: { romaji: "BO", ref: "", stage: -1, progress: 0 },
        ぱ: { romaji: "PA", ref: "", stage: -1, progress: 0 },
        ぴ: { romaji: "PI", ref: "", stage: -1, progress: 0 },
        ぷ: { romaji: "PU", ref: "", stage: -1, progress: 0 },
        ぺ: { romaji: "PE", ref: "", stage: -1, progress: 0 },
        ぽ: { romaji: "PO", ref: "", stage: -1, progress: 0 },
        ま: { romaji: "MA", ref: "", stage: -1, progress: 0 },
        み: { romaji: "MI", ref: "", stage: -1, progress: 0 },
        む: { romaji: "MU", ref: "", stage: -1, progress: 0 },
        め: { romaji: "ME", ref: "", stage: -1, progress: 0 },
        も: { romaji: "MO", ref: "", stage: -1, progress: 0 },
        ら: { romaji: "RA", ref: "", stage: -1, progress: 0 },
        り: { romaji: "RI", ref: "", stage: -1, progress: 0 },
        る: { romaji: "RU", ref: "", stage: -1, progress: 0 },
        れ: { romaji: "RE", ref: "", stage: -1, progress: 0 },
        ろ: { romaji: "RO", ref: "", stage: -1, progress: 0 },
        や: { romaji: "YA", ref: "", stage: -1, progress: 0 },
        ゆ: { romaji: "YU", ref: "", stage: -1, progress: 0 },
        よ: { romaji: "YO", ref: "", stage: -1, progress: 0 },
        わ: { romaji: "WA", ref: "", stage: -1, progress: 0 },
        を: { romaji: "WO", ref: "", stage: -1, progress: 0 },
        ん: { romaji: "N", ref: "", stage: 0, progress: 0 }
    }
};

// Initializes to blank save in absence of preexisting save
let studentData = JSON.parse(localStorage.getItem('JSJapanese')) || blankStudent;

function SaveStudentData()
{
    localStorage.setItem('JSJapanese', JSON.stringify(studentData));
}

function LoadStudentData()
{
    studentData = JSON.parse(localStorage.getItem('JSJapanese'))
}

// Add new properties to player data object upon opening newer version of Super Assistant
function UpdateStudentData()
{
    if (studentData.version < 2)
    {
        for (let i = 0; i < hiraganaBatches.length; i++)
        {
            if (studentData.hiragana[hiraganaBatches[i][0]].stage < 0)
            {
                studentData.hiraganaBatch = i - 1;
                break;
            }
        }
    }
    SaveStudentData();
}

if (studentData.version < blankStudent.version) UpdateStudentData();

function EraseStudentData()
{
    studentData = blankStudent;
    SaveStudentData();
}