const webhookURL =
  "https://discord.com/api/webhooks/1125197297551151185/HJQH1PUI1tzpVcyIEhx42YfDW0XuvZEkksX0Po-_w_0NX6gBVkSoESgks_SnVP8tprXJ";
const avatarURL = "";
const botName = document.getElementById("botName");
const image = document.getElementById("image");
const botType = document.getElementById("botType");
const contact = document.getElementById("contact");
const contact1 = document.getElementById("contact-info");
const deadline = document.getElementById("deadline");
const paymentMethod = document.getElementById("paymentMethod");
const botDetails = document.getElementById("botDetails");
const discount = document.getElementById("giftCodeInput")

const sendMessage= (event) => {
  event.preventDefault(); // Prevents the default form submission

  // Creating a new HTTP Request
  const request = new XMLHttpRequest();
  request.open("POST", webhookURL);

  // Setting the request headers
  request.setRequestHeader("Content-type", "application/json");

  // Creating the embed message to send
  const embed = {
    author: { name: `New Order : ` },
    title: "",
    timestamp: new Date(),
    image: {
      url: "https://media.discordapp.net/attachments/1047281755620642837/1093908333976629318/sjy.gif?width=1025&height=103",
    },
    color: 0x008000,

    footer: { text: `skyrise.site` },
    fields: [
      { name: "Bot Name :", value: `${botName.value}`, inline: true },
      { name: "Bot Type :", value: `${botType.value}`, inline: true },
      {
        name: "Payment Method :",
        value: `${paymentMethod.value}`,
        inline: false,
      },
      { name: "Contact Info :", value: `${contact1.value}`, inline: true },

      { name: "Contact Method :", value: `${contact.value}`, inline: true },
      { name: "Duration :", value: `${deadline.value}`, inline: false },
      { name: "Gift / Referal Code :", value: `${discount.value}`, inline: false },
      { name: "Bot Details :", value: `${botDetails.value}`, inline: false },
    ],
  };

  // Setting the parameters to send with the request
  const params = {
    username: `New Order`,
    avatar_url: avatarURL,
    content: `<@&1098770386302287872>`,
    embeds: [embed],
  };

  // Sending the request
  request.send(JSON.stringify(params));

  // Notifying the user that the order has been sent
  alert("Dear Customer, your order has been sent successfully.");
  alert(
    "We will communicate with you using the method you have specified. We won't keep you waiting, my friend."
  );
  
  window.location.href = "/thanks";

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
    contactInfo.pattern = "";
  } else {
    contactInfo.disabled = true;
    contactInfo.value = "";
    contactInfo.placeholder = "";
    contactInfo.pattern = "";
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


 
  const web22 = 'https://discord.com/api/webhooks/1098778290191351808/E_QXEKQ2KVPCH2HnHsbiG4IcQHNOy2KJOxTaOESFboc0WmZSvJWz4kdUQzUdJED2oqYg'; // Replace with your webhook URL

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
  
 