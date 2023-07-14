const webhookURL = "https://discord.com/api/webhooks/1098793275902673017/6KiWxC3FRfQM9YWMIw0ob42A0Y4c1XbFYeIyus3SUcg0dALP4MSWYFHCWQ0dG4Vh-kLi"
const avatarURL = ""      
  document.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault(); // يمنع الإرسال الافتراضي للنموذج
            window.location.href = "/thanks.html"; // يتم توجيه المستخدم إلى هذه الصفحة بعد الضغط على زر الإرسال
          });
          
        // Getting the elements from the HTML page
        const websiteName = document.getElementById('websiteName')
        const userID = document.getElementById('userID')
        
        const email = document.getElementById('email')
        const webDetails = document.getElementById('webDetails')

        function sendMessage() { // After submitting the form.
            var request = new XMLHttpRequest() // Creates a new XML Http Request
            request.open("POST", webhookURL) // Opens a new HTTP Request to the webhook URL
            request.setRequestHeader('Content-type', 'application/json') // Sets the request Type

            var embed = { // Embed to send.
                author: { name: `${name.value}'s Apllication` }, // Author of the embed
                title: "New Website Order", // Title of the embed
                timestamp: new Date(), // Footer Timestamp of the embed
                image: { url: "https://cdn.discordapp.com/attachments/1103829015212609667/1104210301978673152/sjy.gif" },
                color: 0x008000, // Color of the embed
                footer: { text: `skyrise.site | User ID: ${(userID.value).toString()}` }, // Footer of the embed
                fields: [ // Fields of the embed
                    { name: "Website Name", value: `${websiteName.value}`, inline: true },
                    /*{ name: "age", value: `${(age.value).toString()}`, inline: true },*/
                    { name: "Email", value: `${email.value}`, inline: true },
                    { name: "UserID", value: `${(userID.value).toString()}`, inline: false },
                    { name: "Profile", value: `[Click here](https://discord.com/users/${userID.value})`, inline: false },
                    { name: "Details", value: `${webDetails.value}`, inline: false },
                ]

            }

            var params = { // Parameters to send the request
                name: `New Website Order `, // Name of the webhook
                avatar_url: avatarURL,
                content: `<@&1104210734872801330>`,// PFP URL of the webhook
                embeds: [embed] // Embeds to send with the webhook

            }

            request.send(JSON.stringify(params)) // Sends the request 
            alert('Dear Customer , Your report sent successfully') // Tells the user that the appeal had beensent.
            console.log('Ban Appeal Sent!') // Logs that the appeal had beensent. (For DEVELOPMENT purposes)
        }


        
 
   
        
const bannedWords = ['bad', 'offensive', 'inappropriate', 'fuck', 'mf', 'mother fucker', 'curva', 'pussy', 'dick', 'cock', 'puta', 'nigga', 'bitch', 'boobs', 'tits', 'putt', 'gay', 'nudes', 'lesbian', 'ficken', 'baiser', 'joder', '他妈的', 'трахать', 'ファック', '妈的', 'gago', 'کھو', 'بذل', 'गाड़िया', 'cazzo', 'трахати', '씹', 'चुदाना', 'foder', 'fottere', 'sikmek', 'šukat', 'pieprzyć', 'kut', 'fok', 'fokken', 'وسخ', 'خول', 'كس', 'متناك'];

// Load the audio file
const audio = new Audio('/assets//sounds/eh-el2araf.mp3');

document.getElementById('webDetails').addEventListener('input', () => {
  let messageValue = document.getElementById('webDetails').value;

  // Check if the message contains any banned words
  if (bannedWords.some(word => messageValue.includes(word))) {
    document.getElementById('errorMessage').style.display = 'block';
    document.getElementById('webDetails').classList.add('is-invalid');
    document.getElementById('submit').disabled = true;
    audio.play();
  } else {
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('webDetails').classList.remove('is-invalid');
    document.getElementById('submit').disabled = false;
  }
});