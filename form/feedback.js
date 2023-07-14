const webhookURL = "https://discord.com/api/webhooks/1098776330830622820/ANUdS0ArvPOsFz_XnFosLqqhZsUW5KxVbRnbyLVVEm6Cj6Rmz1DVOe1P6EwIRY6h40Us";
const avatarURL = "";
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission
  location.reload();});

// Getting the elements from the HTML page
const forWho = document.getElementById('forWho');

const feedbackEXP = document.getElementById('feedbackEXP');
const stars = document.getElementById('stars');
function sendMessage() { // After submitting the form.
  var request = new XMLHttpRequest(); // Creates a new XML Http Request
  request.open("POST", webhookURL); // Opens a new HTTP Request to the webhook URL
  request.setRequestHeader('Content-type', 'application/json'); // Sets the request Type

  var embed = { // Embed to send.
    author: { name: `` }, // Author of the embed
    title: "", // Title of the embed
    timestamp: new Date(), // Footer Timestamp of the embed
    image: { url: "https://cdn.discordapp.com/attachments/1098916906645323866/1114567989468069948/feedbackapp.png" },
    color: 0x008000, // Color of the embed

    footer: { text: `SkyRise.xyz ` }, // Footer of the embed
    fields: [ // Fields of the embed
      { name: "Rate : ", value: `${(stars.value).toString()}`, inline: false },
           { name: "For Agent : ", value: `<@${(forWho.value).toString()}>`, inline: false },

        { name: "Exprience Details :", value: `${feedbackEXP.value}`, inline: false },
      { name: "" , value:` Share your expirence with us , [here](https://www.skyrise.site/form/feedback)`, inline: false },

    ]
   
  };

  var params = { // Parameters to send the request
     avatar_url: avatarURL,
    content: ` `,// PFP URL of the webhook
    embeds: [embed] // Embeds to send with the webhook
  };

  request.send(JSON.stringify(params)); // Sends the request 
  alert('Dear, your feedback review has been sent successfully.'); // Tells the user that the feedback has been sent
    window.close();
    console.log('Feedback Sent!'); // Logs that the feedback has been sent. (For DEVELOPMENT purposes)
}
 