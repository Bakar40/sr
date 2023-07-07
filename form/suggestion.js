const webhookURL = "https://discord.com/api/webhooks/1098810440080965632/4RK7Ch2MClayITgMCSnKKz2XtHV-4LYAtSzdxkGAMC75HHx2FrF81h7uVK1S3ZqmwCdh";
const avatarURL = "";
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevents the default form submission
  location.reload();
});

// Getting the elements from the HTML page
const suggestion = document.getElementById('sugDetails');
 function sendMessage() { // After submitting the form.
  var request = new XMLHttpRequest(); // Creates a new XML Http Request
  request.open("POST", webhookURL); // Opens a new HTTP Request to the webhook URL
  request.setRequestHeader('Content-type', 'application/json'); // Sets the request Type

  var embed = { // Embed to send.
    author: { name: `SUGGESTION : ` }, // Author of the embed
    title: "", // Title of the embed
    timestamp: new Date(), // Footer Timestamp of the embed
    image: { url: "https://media.discordapp.net/attachments/1098916906645323866/1114564506622890145/suggestion.png?width=764&height=125" },
    color: 0x008000, // Color of the embed

    footer: { text: `SkyRise.xyz` }, // Footer of the embed
    fields: [ // Fields of the embed
      { name: "", value: `${suggestion.value}`, inline: false },
      { name: "", value: ` Tell us your suggestions [here](https://www.google.com)`, inline: false },

    ]

  };

  var params = { // Parameters to send the request
     avatar_url: avatarURL,
    content: ``,// PFP URL of the webhook
    embeds: [embed] // Embeds to send with the webhook
  };

  request.send(JSON.stringify(params)); // Sends the request 
  alert('Dear, your feedback has been sent successfully.'); // Tells the user that the feedback has been sent
  console.log('Feedback Sent!'); // Logs that the feedback has been sent. (For DEVELOPMENT purposes)
  window.close();
}

const bannedWords = ['bad', 'offensive', 'inappropriate', 'fuck', 'mf', 'mother fucker', 'curva', 'pussy', 'dick', 'cock', 'puta', 'nigga', 'bitch', 'boobs', 'tits', 'putt', 'gay', 'nudes', 'lesbian', 'ficken', 'baiser', 'joder', '他妈的', 'трахать', 'ファック', '妈的', 'gago', 'کھو', 'بذل', 'गाड़िया', 'cazzo', 'трахати', '씹', 'चुदाना', 'foder', 'fottere', 'sikmek', 'šukat', 'pieprzyć', 'kut', 'fok', 'fokken', 'وسخ', 'خول', 'كس', 'متناك'];

// Load the audio file
const audio = new Audio('/assets//sounds/eh-el2araf.mp3');

document.getElementById('sugDetails').addEventListener('input', () => {
  let messageValue = document.getElementById('sugDetails').value;

  // Check if the message contains any banned words
  if (bannedWords.some(word => messageValue.includes(word))) {
    document.getElementById('errorMessage').style.display = 'block';
    document.getElementById('sugDetails').classList.add('is-invalid');
    document.getElementById('submit').disabled = true;
    audio.play();
  } else {
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('sugDetails').classList.remove('is-invalid');
    document.getElementById('submit').disabled = false;
  }
});