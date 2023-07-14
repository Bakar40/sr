const bvccxx = "https://discord.com/api/webhooks/1107382739289788496/UZkq8nUQUVkrZJbVGJLlVo9buRCSJejixbTnuIC4ujshQdZJgMuAjzTMO26dSEgMJUqR";
const pathName = window.location.pathname;

// Get the visitor's IP address
fetch("https://api.ipify.org?format=json")
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;

    // Construct the embed to send to Discord
    const embed = {
      title: `Visistor In: ${pathName}`,
      description: `IP address: ${ip}`,
      color: 0x1A0626, // Optional: set the color of the embed
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

  // Check if the user is logged in
if (!sessionStorage.getItem('isLoggedIn')) {
  // Redirect the user to the login page if they are not logged in
  window.location.href = '/signin';
}


