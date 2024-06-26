const webhookURL =
  "https://discord.com/api/webhooks/1115701224759640224/XF-7qow-imwXEzZsGFCs0HrLDnNgfD4AZa1_Gq30pNdPjWK8Mn7V8hfuZybcAxXWhBd9";
const avatarURL = "";
 
const contact = document.getElementById("contact");
const contact1 = document.getElementById("contact-info");
const reportForm = document.getElementById("reportForm");
 
const sendMessage= (event) => {
  event.preventDefault(); // Prevents the default form submission

  // Creating a new HTTP Request
  const request = new XMLHttpRequest();
  request.open("POST", webhookURL);

  // Setting the request headers
  request.setRequestHeader("Content-type", "application/json");

  // Creating the embed message to send
  const embed = {
    author: { name: `Bug Report : ` },
    title: "",
    timestamp: new Date(),
    image: {
      url: "https://media.discordapp.net/attachments/1047281755620642837/1093908333976629318/sjy.gif?width=1025&height=103",
    },
    color: 0x008000,

    footer: { text: `skyrise.site` },
    fields: [
     
      { name: "Contact Method :", value: `${contact.value}`, inline: true },
      { name: "Contact Details :", value: `${contact1.value}`, inline: true },
      { name: "Report Details :", value: `${reportForm.value}`, inline: false },
 
    ],
  };

  // Setting the parameters to send with the request
  const params = {
    username: `SkyRise | Bug Report `,
    avatar_url: avatarURL,
    content: `<@&1098770356904402956>`,
    embeds: [embed],
  };

  // Sending the request
  request.send(JSON.stringify(params));

  // Notifying the user that the order has been sent
  alert(`Thank You , your report has been sent successfully.`);
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
 