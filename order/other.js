const webhookURL =
  "https://discord.com/api/webhooks/1125198564725899404/gdoQmQKCMuXbrgdOntbx9d5LA8UPLcE02cXeQs1CdmdNoF45bu1QsP6Du59rse49Bk3X";
const avatarURL = "";
const productID = document.getElementById("productID");
  const contact = document.getElementById("contact");
const contact1 = document.getElementById("contact-info");
const discount = document.getElementById("giftCodeInput");
const paymentMethod = document.getElementById("paymentMethod");

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
      { name: "Contact Method :", value: `${contact.value}`, inline: true }, 
      { name: "Contact Info :", value: `${contact1.value}`, inline: true },
      { name: "Product Name :", value: `${productID.value}`, inline: false },
      { name: "Payment Method :", value: `${paymentMethod.value}`, inline: true }, 
       { name: "Gift / Referal Code :", value: `${discount.value}`, inline: false },
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
  