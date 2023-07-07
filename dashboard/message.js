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

const selectedRole = document.getElementById("roles").value;
  // Setting the request headers
  request.setRequestHeader("Content-type", "application/json");
  var inputElement = document.getElementById("embedTitle");
 
  // Creating the embed message to send
 // Setting the request headers
 request.setRequestHeader("Content-type", "application/json");

 // Creating the message to send
 const message = {
  content: `${embedDiscription.value}\n${selectedRole}`
 };

 // Sending the request
 request.send(JSON.stringify(message));

 // Notifying the user that the message has been sent
 alert("Bakorty said, your message sent successfully");
 window.location.href = "/dashboard/main.html";

 // Logging that the message has been sent
 console.log("Message Sent!");
} 