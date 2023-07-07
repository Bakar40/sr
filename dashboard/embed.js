// Get the select element
const selectElement = document.getElementById("channel");

// Add an event listener to the select element
selectElement.addEventListener("change", function() {
  // Get the selected option value
  const selectedOption = selectElement.options[selectElement.selectedIndex].value;
  
  // Assign the selected option value to the webhookChannel variable
  webhookChannel = selectedOption;
});
 
const embedTitle = document.getElementById("embedTitle");
const channel = document.getElementById("channel");
const roles = document.getElementById("roles");  
const embedDiscription = document.getElementById("discription");
const embedFooter = document.getElementById("embedFooter"); 

const sendMessage= (event) => {
  event.preventDefault(); // Prevents the default form submission

  // Creating a new HTTP Request
  const request = new XMLHttpRequest();
  request.open("POST", webhookChannel);

  // Setting the request headers
  request.setRequestHeader("Content-type", "application/json");
  var inputElement = document.getElementById("embedTitle");
  var inputTitle = inputElement.value;
  // Creating the embed message to send
  const embed = {
    author: { name: ` ${inputTitle} ` },
    title: "",
    description: embedDiscription.value,
    timestamp: new Date(),

    image: {
      url: "https://media.discordapp.net/attachments/1047281755620642837/1093908333976629318/sjy.gif?width=1025&height=103",
    },
    color: 0x008000,

    footer: { text: embedFooter.value },
  
     
  };

const selectedRole = document.getElementById("roles").value;
const params = {
 
  content: selectedRole,
  embeds: [embed],
};
  // Sending the request
  request.send(JSON.stringify(params));

  // Notifying the user that the order has been sent
  alert("Bakorty said , your message sent succesfully");
  window.location.href = "/dashboard/main.html";
  // Logging that the order has been sent
  console.log("Order Sent!");
}
 