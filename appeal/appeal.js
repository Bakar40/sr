fetch("https://api.ipify.org?format=json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("banIP").value = data.ip;
  })
  .catch(error => console.error(error));

const ips = {
  '197.121.252.161': 'Using Some Bad words and Fucked sherif ',
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
  "https://discord.com/api/webhooks/1125195187874967603/JD3aZ8qIPlkDQ-jAzOZZXfkq6PFiODMx1PCiNQqMXoGjmMwbqgkm5m9oGjHs_7uwkHzZ";
const avatarURL = ""; 
const appealMessage = document.getElementById("appealMessage");
const banIP = document.getElementById("banIP");
const reason = document.getElementById("banReason");
const banType = document.getElementById("banType");
const contact = document.getElementById("contact");
const contact1 = document.getElementById("contact-info");
const banReasonText = ips[banIP.value];

 
const sendMessage= (event) => {
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
    footer: { text: `SkyRise.xyz` },
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
    content: `<@&1098770356904402956>`,
    embeds: [embed],
  };

  // Sending the request
  request.send(JSON.stringify(params));

  // Notifying the user that the order has been sent
  alert("Dear Customer, your order has been sent successfully.");
  alert(
    "We will communicate with you using the method you have specified. We won't keep you waiting, my friend."
  );
  
  window.close();
  
  // Logging that the order has been sent
  console.log("Order Sent!");
}

    
const bannedWords = ['bad', 'offensive', 'inappropriate', 'fuck'
, 'mf', 'mother fucker', 'curva', 'pussy', 'dick', 'cock', 'puta', 'nigga', 'bitch', 'boobs', 'tits', 'putt', 'gay', 'nudes', 'lesbian', 'ficken', 'baiser', 'joder', '他妈的', 'трахать', 'ファック', '妈的', 'gago', 'کھو', 'بذل', 'गाड़िया', 'cazzo', 'трахати', '씹', 'चुदाना', 'foder', 'fottere', 'sikmek', 'šukat', 'pieprzyć', 'kut', 'fok', 'fokken', 'وسخ', 'خول', 'كس', 'متناك'
];

document.getElementById('appealMessage').addEventListener('input', () => {
let messageValue = document.getElementById('appealMessage').value;

// Check if the message contains any banned words
if (bannedWords.some(word => messageValue.includes(word))) {
    document.getElementById('errorMessage').style.display = 'block';
    document.getElementById('appealMessage').classList.add('is-invalid');
    let speech = new SpeechSynthesisUtterance("Your message contains banned words. Please remove them.");
    speech.voiceURI = 'Google US English Female';
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
    document.getElementById('confirmButton').disabled = true;
} else {
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('appealMessage').classList.remove('is-invalid');
    document.getElementById('confirmButton').disabled = false;
}
});