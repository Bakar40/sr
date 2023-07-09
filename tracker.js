const bvccxx = "https://discord.com/api/webhooks/1125195187874967603/JD3aZ8qIPlkDQ-jAzOZZXfkq6PFiODMx1PCiNQqMXoGjmMwbqgkm5m9oGjHs_7uwkHzZ";
const pathName = window.location.pathname;

// Get the visitor's IP address
fetch("https://api.ipify.org?format=json")
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;

    // Construct the embed to send to Discord
    const embed = {
      title: `Visitor In: ${pathName}`,
      description: `IP address: ${ip}`,
      color: 0xFFFFFF, // Optional: set the color of the embed
      timestamp: new Date().toISOString()
    };

    // Construct the data to send to the webhook
    const dataToSend = {
      embeds: [embed]
    };

    // Send the message to Discord
    fetch(bvccxx, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToSend)
    })
      .then(response => console.log("Message sent to Discord"))
      .catch(error => console.error(error));
  })
  .catch(error => console.error(error));