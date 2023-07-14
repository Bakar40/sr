fetch("https://api.ipify.org?format=json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("banIP").value = data.ip;
  })
  .catch(error => console.error(error));

const ips = {
  '197.43.130.42': 'Using Some Bad words and Fucked sherif ',
  '999.999.99.999': 'Using Bad words and fucked sherif in his hole'
}

const banReason = document.getElementById('banReason');

document.querySelector('#banIP').addEventListener('input', function(e) {
  const ip = e.target.value
  e.target.value = ips[ip] || ''
  
  if (ips[ip]) {
    document.querySelector('#confirmButton').style.display = 'none'
    e.target.style.color = 'white'
  }
})

document.querySelector('#confirmButton').addEventListener('click', function() {
  const ip = document.querySelector('#banIP').value
  if (ips[ip]) {
    document.querySelector('#confirmButton').style.display = 'none'
    document.querySelector('#banIP').style.display = 'block'
    document.querySelector('#banIP').style.width = '200px'
    document.querySelector('#banReason').style.color = 'white'
    document.querySelector('#banReason').textContent = ips[ip]
    document.querySelector('#banReason').style.display = 'inline-block'
  } else {
    alert("This IP doesn't banned !")
  }
})

const webhookURL =
  "https://discord.com/api/webhooks/1129469372273008680/5QZn7t0gZXtpaBCnMCxqO1pXZnPT_gzaYWZSU_x-KdPBIfkyj4DtKre2ofs7m_PQXGxs";
const avatarURL = ""; 
const appealMessage = document.getElementById("appealMessage");
const banIP = document.getElementById("banIP");
const reason = document.getElementById("banReason");
const banType = document.getElementById("banType");
const contact = document.getElementById("contact");
const contact1 = document.getElementById("contact-info");
const banReasonText = ips[banIP.value];


const sendMessage = (event) => {
  event.preventDefault(); // Prevents the default form submission

  // Creating a new HTTP Request
  const request = new XMLHttpRequest();
  request.open("POST", webhookURL);

  // Setting the request headers
  request.setRequestHeader("Content-type", "application/json");
  const ip = banIP.value;
  const banReasonText = ips[ip] || '';
  const embed = {
    author: { name: `New Appeal : ` },
    title: "",
    timestamp: new Date(),
    image: {
      url: "https://media.discordapp.net/attachments/1047281755620642837/1093908333976629318/sjy.gif?width=1025&height=103",
    },
    color: 0x008000,
    footer: { text: `skyrise.site` },
    fields: [  
      { name: "Device IP :", value: `${ip}`, inline: false },
      { name: "Ban Reason :", value: `${banReasonText}`, inline: false },
      { name: "Ban Type :", value: `${banType.value}`, inline: true },    

      { name: "Contact Method :", value: `${contact.value}`, inline: true },    
      { name: "Contact Info :", value: `${contact1.value}`, inline: true },
      
      { name: "Appeal Message :", value: `${appealMessage.value}`, inline: false }, 

    ],
  };

  // Setting the parameters to send with the request
  const params = {
    username: `New Ban Appeal`,
    avatar_url: avatarURL,
    content: `> <@&1098770356904402956> | <@&1109814413084598372> | <@&1098770358225608824> | `,
    embeds: [embed],
  };

  // Sending the request
  request.send(JSON.stringify(params));

  // Notifying the user that the order has been sent
  alert("Dear Customer, your appeal has been sent successfully.");
  alert(
    "We will communicate with you using the method you have specified. We won't keep you waiting, my friend."
  );
    
  
  // Logging that the appeal has been sent
  console.log("Appeal Sent!");
    window.reload();
      // Closing the window
    window.close();
}

  