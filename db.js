class Hiragana
{
    constructor(_romaji, _hiragana, _ref)
    {
        this.romaji = _romaji;
        this.hiragana = _hiragana;
        this.ref = _ref;
    }
}

class JapaneseWord
{
    constructor(_japanese, _romaji, _english, _katakana = false)
    {
        this.japanese = _japanese;
        this.romaji = _romaji;
        this.english = _english;
        this.katakana = _katakana;
    }
}

const hiragana = [
   "あ", "い", "う", "え", "お",
   "か", "き", "く", "け", "こ",
   "が", "ぎ", "ぐ", "げ", "ご",
   "さ", "し", "す", "せ", "そ",
   "ざ", "じ", "ず", "ぜ", "ぞ",
   "た", "ち", "つ", "て", "と",
   "だ", "ぢ", "づ", "で", "ど",
   "な", "に", "ぬ", "ね", "の",
   "は", "ひ", "ふ", "へ", "ほ",
   "ば", "び", "ぶ", "べ", "ぼ",
   "ぱ", "ぴ", "ぷ", "ぺ", "ぽ",
   "ま", "み", "む", "め", "も",
   "ら", "り", "る", "れ", "ろ",
   "や", "ゆ", "よ",
   "わ", "を",
   "ん"
];

const hiraganaBatches = [
   ["あ", "い", "う", "え", "お", "ん"],
   ["か", "き", "く", "け", "こ"],
   ["が", "ぎ", "ぐ", "げ", "ご"],
   ["さ", "し", "す", "せ", "そ"],
   ["ざ", "じ", "ず", "ぜ", "ぞ"],
   ["た", "ち", "つ", "て", "と"],
   ["だ", "ぢ", "づ", "で", "ど"],
   ["な", "に", "ぬ", "ね", "の"],
   ["は", "ひ", "ふ", "へ", "ほ"],
   ["ば", "び", "ぶ", "べ", "ぼ"],
   ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"],
   ["ま", "み", "む", "め", "も"],
   ["ら", "り", "る", "れ", "ろ"],
   ["や", "ゆ", "よ", "わ", "を"]
];

const latinKeys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"]
];

const hiraganaKeys = [
    [ 
        { base: "あ", dakuten: "", handakuten: "", modifier: "" }, 
        { base: "い", dakuten: "", handakuten: "", modifier: "" },
        { base: "う", dakuten: "", handakuten: "", modifier: "" },
        { base: "え", dakuten: "", handakuten: "", modifier: "" },
        { base: "お", dakuten: "", handakuten: "", modifier: "" },
        { base: "ん", dakuten: "", handakuten: "", modifier: "" }
    ],
    [ 
        { base: "か", dakuten: "が", handakuten: "", modifier: "" },
        { base: "き", dakuten: "ぎ", handakuten: "", modifier: "" },
        { base: "く", dakuten: "ぐ", handakuten: "", modifier: "" },
        { base: "け", dakuten: "げ", handakuten: "", modifier: "" },
        { base: "こ", dakuten: "ご", handakuten: "", modifier: "" }
    ],
    [ 
        { base: "さ", dakuten: "ざ", handakuten: "", modifier: "" },
        { base: "し", dakuten: "じ", handakuten: "", modifier: "" },
        { base: "す", dakuten: "ず", handakuten: "", modifier: "" },
        { base: "せ", dakuten: "ぜ", handakuten: "", modifier: "" },
        { base: "そ", dakuten: "ぞ", handakuten: "", modifier: "" }
    ],
    [ 
        { base: "た", dakuten: "だ", handakuten: "", modifier: "" },
        { base: "ち", dakuten: "ぢ", handakuten: "", modifier: "" },
        { base: "つ", dakuten: "づ", handakuten: "", modifier: "っ" },
        { base: "て", dakuten: "で", handakuten: "", modifier: "" }, 
        { base: "と", dakuten: "ど", handakuten: "", modifier: "" } 
    ],
    [ 
        { base: "な", dakuten: "", handakuten: "", modifier: "" }, 
        { base: "に", dakuten: "", handakuten: "", modifier: "" }, 
        { base: "ぬ", dakuten: "", handakuten: "", modifier: "" }, 
        { base: "ね", dakuten: "", handakuten: "", modifier: "" }, 
        { base: "の", dakuten: "", handakuten: "", modifier: "" } 
    ],
    [ 
        { base: "は", dakuten: "ば", handakuten: "ぱ", modifier: "" }, 
        { base: "ひ", dakuten: "び", handakuten: "ぴ", modifier: "" }, 
        { base: "ふ", dakuten: "ぶ", handakuten: "ぷ", modifier: "" }, 
        { base: "へ", dakuten: "べ", handakuten: "ぺ", modifier: "" }, 
        { base: "ほ", dakuten: "ぼ", handakuten: "ぽ", modifier: "" } 
    ],
    [ 
        { base: "ま", dakuten: "", handakuten: "", modifier: "" }, 
        { base: "み", dakuten: "", handakuten: "", modifier: "" }, 
        { base: "む", dakuten: "", handakuten: "", modifier: "" }, 
        { base: "め", dakuten: "", handakuten: "", modifier: "" }, 
        { base: "も", dakuten: "", handakuten: "", modifier: "" }
    ],
    [ 
        { base: "ら", dakuten: "", handakuten: "", modifier: "" }, 
        { base: "り", dakuten: "", handakuten: "", modifier: "" }, 
        { base: "る", dakuten: "", handakuten: "", modifier: "" }, 
        { base: "れ", dakuten: "", handakuten: "", modifier: "" }, 
        { base: "ろ", dakuten: "", handakuten: "", modifier: "" } 
    ],
    [
        { base: "や", dakuten: "", handakuten: "", modifier: "ゃ" }, 
        { base: "ゆ", dakuten: "", handakuten: "", modifier: "" }, 
        { base: "よ", dakuten: "", handakuten: "", modifier: "ゅ" }, 
        { base: "わ", dakuten: "", handakuten: "", modifier: "" }, 
        { base: "を", dakuten: "", handakuten: "", modifier: "ょ" } 
    ]
]

const digraphs = [
    new Hiragana("kya", "きゃ", ""),
    new Hiragana("kyu", "きゅ", ""),
    new Hiragana("kyo", "きょ", ""),
    new Hiragana("gya", "ぎゃ", ""),
    new Hiragana("gyu", "ぎゅ", ""),
    new Hiragana("gyo", "ぎょ", ""),
    new Hiragana("nya", "にゃ", ""),
    new Hiragana("nyu", "にゅ", ""),
    new Hiragana("nyo", "にょ", ""),
    new Hiragana("hya", "ひゃ", ""),
    new Hiragana("hyu", "ひゅ", ""),
    new Hiragana("hyo", "ひょ", ""),
    new Hiragana("bya", "びゃ", ""),
    new Hiragana("byu", "びゅ", ""),
    new Hiragana("byo", "びょ", ""),
    new Hiragana("pya", "ぴゃ", ""),
    new Hiragana("pyu", "ぴゅ", ""),
    new Hiragana("pyo", "ぴょ", ""),
    new Hiragana("mya", "みゃ", ""),
    new Hiragana("myu", "みゅ", ""),
    new Hiragana("myo", "みょ", ""),
    new Hiragana("rya", "りゃ", ""),
    new Hiragana("ryu", "りゅ", ""),
    new Hiragana("ryo", "りょ", ""),
    new Hiragana("ja", "じゃ", ""),
    new Hiragana("ju", "じゅ", ""),
    new Hiragana("je", "じぇ", ""),
    new Hiragana("jo", "じょ", ""),
    new Hiragana("cha", "ちゃ", ""),
    new Hiragana("chu", "ちゅ", ""),
    new Hiragana("che", "ちぇ", ""),
    new Hiragana("cho", "ちょ", ""),
    new Hiragana("sha", "しゃ", ""),
    new Hiragana("shu", "しゅ", ""),
    new Hiragana("she", "しぇ", ""),
    new Hiragana("sho", "しょ", "")
];

const words = [
    new JapaneseWord("こんにちは", "konnichiwa", "good afternoon"),
    new JapaneseWord("こんばんは", "konbanwa", "good evening"),
    new JapaneseWord("おはようございます", "ohayou gozaimasu", "good morning"),
    new JapaneseWord("てんき", "tenki", "weather"),
    new JapaneseWord("いい", "ii", "good, nice, or fine"),
    new JapaneseWord("です", "desu", "is, am, or are"),
    new JapaneseWord("けしき", "keshiki", "a view"),
    new JapaneseWord("あめ", "ame", "rain"),
    new JapaneseWord("ひどい", "hidoi", "terrible"),
    new JapaneseWord("さむい", "samui", "cold (temperature)"),
    new JapaneseWord("あつい", "atsui", "hot (temperature)"),
    new JapaneseWord("かんこう", "kankou", "sightseeing"),
    new JapaneseWord("さんぽ", "sanpo", "a walk"),
    new JapaneseWord("ハイキング", "haikingu", "hiking", true),
    new JapaneseWord("ええ", "ee", "yes (plain)"),
    new JapaneseWord("はい", "hai", "yes (polite)"),
    new JapaneseWord("ほんとうに", "hontou ni", "indeed"),
    new JapaneseWord("ありがとう", "arigatou", "thank you (plain)"),
    new JapaneseWord("ありがとうございます", "arigatou gozaimasu", "thank you (polite)"),
    new JapaneseWord("どうも", "doumo", "thanks"),
    new JapaneseWord("いいえ", "iie", "no, or no problem"),
    new JapaneseWord("げんきです", "genki desu", "is/am/are fine"),
    new JapaneseWord("おかげさまで", "okagesama de", "thank you for asking how I am"),
    new JapaneseWord("さようなら", "sayounara", "goodbye"),
    new JapaneseWord("じゃあ", "jaa", "well then"),
    new JapaneseWord("また", "mata", "again"),
    new JapaneseWord("あした", "ashita", "tomorrow"),
    new JapaneseWord("おやすみなさい", "oyasuminasai", "goodnight"),
    new JapaneseWord("らいしゅう", "raishuu", "next week"),
    new JapaneseWord("げつようび", "getsuyoubi", "monday"),
    new JapaneseWord("きんようび", "kinyoubi", "friday"),
    new JapaneseWord("きをつけて", "ko o tsukete", "take care"),
    new JapaneseWord("かようび", "kayoubi", "tuesday"),
    new JapaneseWord("すいようび", "suiyoubi", "wednesday"),
    new JapaneseWord("もくようび", "mokuyoubi", "thursday"),
    new JapaneseWord("どようび", "doyoubi", "saturday"),
    new JapaneseWord("にちようび", "nichiyoubi", "sunday"),
    new JapaneseWord("なんようび", "nan youbi", "what day of the week"),
    new JapaneseWord("かぜ", "kaze", "wind"),
    new JapaneseWord("あたたかい", "atatakai", "warm"),
    new JapaneseWord("すずしい", "suzushii", "cool"),
    new JapaneseWord("はだざむい", "hadazamui", "chilly"),
    new JapaneseWord("むしあつい", "mushiatsui", "stifling hot"),
    new JapaneseWord("あかるい", "akarui", "bright or light"),
    new JapaneseWord("くらい", "kurai", "dark"),
    new JapaneseWord("さわやか", "sawayaka", "refreshing"),
    new JapaneseWord("おでかけ", "odekake", "going out"),
    new JapaneseWord("かいもの", "kaimono", "shopping"),
    new JapaneseWord("がっこう", "gakkou", "going to school"),
    new JapaneseWord("りょこう", "ryokou", "travel"),
    new JapaneseWord("しごと", "shigoto", "work"),
    new JapaneseWord("にわしごと", "niwa shigoto", "yard work"),
    new JapaneseWord("ジョギング", "jogingu", "jogging", true),
    new JapaneseWord("ボランティア", "borantia", "volunteer", true),
    new JapaneseWord("げんき？", "genki?", "how are you?"),
    new JapaneseWord("いそがしい", "isogashii", "busy"),
    new JapaneseWord("ひま", "hima", "free"),
    new JapaneseWord("まあまあ", "maamaa", "so so, or not bad"),
    new JapaneseWord("とても", "totemo", "very")
];