const webhookURL = "https://discord.com/api/webhooks/1097456200066547722/03Qp7-f5Bs51Q5touc7NoxQ6RuHktrEdJya184pjF_nv9OzOtnrmK3L2JI3G0ys-M1yv"
const avatarURL = "https://cdn.discordapp.com/attachments/1092629562065698856/1097456875567591484/mta-screen_2023-04-08_04-12-47.png" // OPTIONAL | The URL for the PFP of the webhook itself. Must be a link to a supported image format.

// Getting the elements from the HTML page
const username = document.getElementById('username')
const kosomak = document.getElementById('kosomak')
const usertag = document.getElementById('usertag')
const userID = document.getElementById('userID')
const reason = document.getElementById('reason')
const appeal = document.getElementById('appeal')

function sendMessage() { // After submitting the form.
    var request = new XMLHttpRequest() // Creates a new XML Http Request
    request.open("POST", webhookURL) // Opens a new HTTP Request to the webhook URL
    request.setRequestHeader('Content-type', 'application/json') // Sets the request Type

    var embed = { // Embed to send.
        author: { name: `${username.value}#${usertag.value}` }, // Author of the embed
        title: "New Order", // Title of the embed
        timestamp: new Date(), // Footer Timestamp of the embed
        color: 0xFF0000, // Color of the embed
        footer: { text: `SkyRise .site | User ID: ${(userID.value).toString()}` }, // Footer of the embed
        fields: [ // Fields of the embed
            { name: "User", value: `${username.value}#${(usertag.value).toString()}`, inline: true },
            { name: "kosomak", value: `${kosomak.value}#${(kosomak.value).toString()}`, inline: true },
            { name: "UserID", value: `${(userID.value).toString()}`, inline: true },
            { name: "Reason for Ban", value: `${reason.value}` },
            { name: "Appeal", value: `${appeal.value}` }
        ]
    }

    var params = { // Parameters to send the request
        username: `MythMine | Ban Appeals`, // Name of the webhook
        avatar_url: avatarURL,
      content: `<@&1092790174414549132>`,// PFP URL of the webhook
        embeds: [ embed ] // Embeds to send with the webhook
    }

    request.send(JSON.stringify(params)) // Sends the request 
    alert('Ban Appeal Sent!') // Tells the user that the appeal has been sent.
    console.log('Ban Appeal Sent!') // Logs that the appeal has been sent. (For DEVELOPMENT purposes)
}