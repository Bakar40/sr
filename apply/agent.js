const webhookURL =
  "https://discord.com/api/webhooks/1115700510956212364/tc6PFKjQhjeQBpTPMtT8S-0FsNaGdoino0ZegZ8I8dvFxDCClAEuL7bdqyVkbhDyLOR5";
const avatarURL = "";
const agentName = document.getElementById("agentName");
const image = document.getElementById("image");
const number = document.getElementById("number");
const email = document.getElementById("email");
const gender = document.getElementById("gender");
const country = document.getElementById("country");
const skills = document.getElementById("skills");
const contact = document.getElementById("contact");
const contact1 = document.getElementById("contact-info");
const paymentMethod = document.getElementById("paymentMethod");
const cv = document.getElementById("cv");

const sendMessage= (event) => {
  event.preventDefault(); // Prevents the default form submission

  // Creating a new HTTP Request
  const request = new XMLHttpRequest();
  request.open("POST", webhookURL);

  // Setting the request headers
  request.setRequestHeader("Content-type", "application/json");

  // Creating the embed message to send
  const embed = {
    author: { name: `${agentName.value}'s : ` },
    title: "",
    timestamp: new Date(),
    image: {
      url: "https://media.discordapp.net/attachments/1047281755620642837/1093908333976629318/sjy.gif?width=1025&height=103",
    },
    color: 0x008000,

    footer: { text: `skyrise.site` },
    fields: [
      { name: "Agent Name :", value: `${agentName.value}`, inline: true },
      { name: "Phone Number :", value: `${number.value}`, inline: true },
      { name: "Email Address :", value: `${email.value}`, inline: true },
      { name: "Gender :", value: `${gender.value}`, inline: true },
      { name: "Country :", value: `${country.value}`, inline: true },
      { name: "Skills :", value: `${skills.value}`, inline: true },
      { name: "Contact Method :", value: `${contact.value}`, inline: true },
      { name: "Contact Details :", value: `${contact1.value}`, inline: true },
      { name: "Main Payment Method :", value: `${paymentMethod.value}`, inline: true },
      { name: "CV :", value: `${cv.value}`, inline: false },

    ],
  };

  // Setting the parameters to send with the request
  const params = {
    username: `${agentName.value}'s Application `,
    avatar_url: avatarURL,
    content: `<@&1098770386302287872>`,
    embeds: [embed],
  };

  // Sending the request
  request.send(JSON.stringify(params));

  // Notifying the user that the order has been sent
  alert(`Dear ${agentName.value}, your application has been sent successfully.`);
    alert(
    "We will communicate with you using the method you have specified. We won't keep you waiting, my friend."
  );
  
  window.close();

  // Logging that the order has been sent
  console.log("Order Sent!");
}

function checkContact() {
  var contact = document.getElementById("contact").value;
  var contactInfo = document.getElementById("contact-info");

  if (contact === "Email") {
    contactInfo.disabled = false;
    contactInfo.placeholder = "Enter your email | hi@skyrise.site";
    contactInfo.pattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
  } else if (contact === "WhatsApp") {
    contactInfo.disabled = false;
    contactInfo.placeholder = "Enter your WhatsApp number (including country code) | +201016264207 ";
    contactInfo.pattern = "[+][0-9]{11,14}";
  } else if (contact === "Discord") {
    contactInfo.disabled = false;
    contactInfo.placeholder = "Enter your Discord username and tag (e.g. BaKaR#5213)";
  } else {
    contactInfo.disabled = true;
    contactInfo.value = "";
    contactInfo.placeholder = "";
  }
}

function previewImage(event) {
  var preview = document.getElementById('preview');
  preview.style.display = 'block';
  preview.src = URL.createObjectURL(event.target.files[0]);
}
function previewImage(event) {
  const preview = document.getElementById("preview");
  preview.src = URL.createObjectURL(event.target.files[0]);
  preview.style.display = "block";
}


 
  const web22 = 'https://discord.com/api/webhooks/1115700510956212364/tc6PFKjQhjeQBpTPMtT8S-0FsNaGdoino0ZegZ8I8dvFxDCClAEuL7bdqyVkbhDyLOR5'; // Replace with your webhook URL

  function sendImageToDiscord() {
    const fileInput = document.getElementById('image');
    const file = fileInput.files[0];
  
    const formData = new FormData();
    formData.append('file', file, file.name);
  
    fetch(web22, {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        const imageUrl = `https://cdn.discordapp.com/attachments/${json.id}/${json.filename}`;
        console.log('Image URL:', imageUrl);
      })
      .catch(error => {
        console.error('Error sending image to Discord:', error);
      });
  }
  
 