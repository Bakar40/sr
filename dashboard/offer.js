const uhjhjk =
  "https://discord.com/api/webhooks/1109562248688566303/WzCU-UHIdwCsQGyOfhuVtANWa-9Pnj8uxtZ75Mq6QTXqBHC-XIBq0zbAnzD8IgJX2iEZ";
 const otherDetails = document.getElementById("otherDetails");
const image = document.getElementById("image");
const paymentMethod = document.getElementById("paymentMethod");
const contact = document.getElementById("contact");
const contact1 = document.getElementById("contact-info");
const offerExpired = document.getElementById("offerExpired");
const productType = document.getElementById("productType");
const productName = document.getElementById("productName"); 

const sendMessage= (event) => {
  event.preventDefault(); // Prevents the default form submission

  // Creating a new HTTP Request
  const request = new XMLHttpRequest();
  request.open("POST", uhjhjk);

  // Setting the request headers
  request.setRequestHeader("Content-type", "application/json");

  // Creating the embed message to send
  const embed = {
    author: { name: `New Offer Requested : ` },
    title: "",
    timestamp: new Date(),
    image: {
      url: "https://media.discordapp.net/attachments/1047281755620642837/1093908333976629318/sjy.gif?width=1025&height=103",
    },
    color: 0x008000,

    footer: { text: `SkyRise.xyz` },
    fields: [
      { name: "Bot Name :", value: `${productName.value}`, inline: true },
      { name: "Bot Type :", value: `${productType.value}`, inline: true },
      {
        name: "Payment Method :",
        value: `${paymentMethod.value}`,
        inline: false,
      },
      { name: "Contact Info :", value: `${contact1.value}`, inline: true },

      { name: "Contact Method :", value: `${contact.value}`, inline: true },
      { name: "Duration :", value: `${offerExpired.value}`, inline: false },
       { name: "Bot Details :", value: `${otherDetails.value}`, inline: false },
    ],
  };

  // Setting the parameters to send with the request
  const params = {
      content: `<@&1098770370745602049>`,
    embeds: [embed],
  };

  // Sending the request
  request.send(JSON.stringify(params));

  // Notifying the user that the order has been sent
  alert("Dear Staff, your offer has been sent to us successfully , your offer under reviewing");
   
  location.reload();
  // Logging that the order has been sent
  console.log("Order Sent!");
}

function checkContact() {
  var contact = document.getElementById("contact").value;
  var contactInfo = document.getElementById("contact-info");

  if (contact === "Email") {
    contactInfo.disabled = false;
    contactInfo.placeholder = "Enter your email | hi@SkyRise.xyz";
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


 
  const web22 = 'https://discord.com/api/webhooks/1109562248688566303/WzCU-UHIdwCsQGyOfhuVtANWa-9Pnj8uxtZ75Mq6QTXqBHC-XIBq0zbAnzD8IgJX2iEZ'; // Replace with your webhook URL

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
  
  function validateDateTime() {
    var offerExpired = document.getElementById("offerExpired").value;

    if (!offerExpired) {
        alert("Please select a valid expiration date and time.");
        document.getElementById("offerExpired").focus();
    } else {
        // Convert the selected date and time to a JavaScript Date object
        var selectedDate = new Date(offerExpired);

        // Get the current date and time
        var currentDate = new Date();

        // Check if the selected date and time is in the past
        if (selectedDate < currentDate) {
            alert("Please select a future expiration date and time.");
            document.getElementById("offerExpired").focus();
        } else {
            // Perform necessary operations
        }
    }
}