 
    // Define the blocked IP address
const blockedIP = "999.999.99.999";

// Define the Discord webhook URL
const webhookURL = "https://discord.com/api/webhooks/1108146144414023720/Rf-wtwYM1ACxwbRmp6ihyBQht1ly7A6lZBEAGJvLe1S2cj4Je1VYfDxf3H3D8iUwKRHI";

// Define the message to send to Discord
const message = "A banned user with IP address " + blockedIP + " tried to access the website.";

// Define the embed to send to Discord
const embed = {
  title: "Banned user tried to access the website",
  description: "IP address: " + blockedIP,
  color: 16711680, // Red color
  timestamp: new Date().toISOString()
};

// Define the data to send to the webhook
const data = {
  content: "",
  embeds: [embed]
};

// Get the visitor's IP address
async function getIPAddress() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error(error);
  }
}

// Send message to Discord
async function sendMessageToDiscord() {
  const ip = await getIPAddress();
  if (ip === blockedIP) {
    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      console.log("Message sent to Discord");
      window.location.href = "/appeal/form.html";
    } catch (error) {
      console.error(error);
    }
  }
}

// Set cooldown time and send message to Discord every interval
const cooldown = 1000; // Set the cooldown time in milliseconds (30,000 milliseconds = 30 seconds)
let lastSentTime = 0;
function sendToDiscord() {
  if (Date.now() - lastSentTime >= cooldown) {
    sendMessageToDiscord();
    lastSentTime = Date.now();
  }
}
setInterval(sendToDiscord, cooldown);
 
