
const bannedWords = ['bad', 'offensive', 'inappropriate', 'fuck'
    , 'mf', 'mother fucker', 'curva', 'pussy', 'dick', 'cock', 'puta', 'nigga', 'bitch', 'boobs', 'tits', 'putt', 'gay', 'nudes', 'lesbian', 'ficken', 'baiser', 'joder', '他妈的', 'трахать', 'ファック', '妈的', 'gago', 'کھو', 'بذل', 'गाड़िया', 'cazzo', 'трахати', '씹', 'चुदाना', 'foder', 'fottere', 'sikmek', 'šukat', 'pieprzyć', 'kut', 'fok', 'fokken', 'وسخ', 'خول', 'كس', 'متناك'
];

document.getElementById('botDetails').addEventListener('input', () => {
    let messageValue = document.getElementById('botDetails').value;

    // Check if the message contains any banned words
    if (bannedWords.some(word => messageValue.includes(word))) {
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('botDetails').classList.add('is-invalid');
        let speech = new SpeechSynthesisUtterance("Your message contains banned words. Please remove them.");
        speech.voiceURI = 'Google US English Female';
        speech.lang = 'en-US';
        window.speechSynthesis.speak(speech);
    } else {
        document.getElementById('errorMessage').style.display = 'none';
        document.getElementById('botDetails').classList.remove('is-invalid');
    }
});