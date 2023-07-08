// Define the blocked IP address
const finalBanIPP = "999.999.99.999";

// Get the visitor's IP address
async function getIPAddress() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error(error);
  }
}

// Check the visitor's IP address against the blocked IP address and close the window if needed
async function checkAndClose() {
  try {
    const ip = await getIPAddress();
    if (ip === finalBanIPP) {
      console.log("Message sent to Discord");
      setTimeout(() => {
        window.close();
      }, 1000); // Close the window after 5 seconds (adjust the time as needed)
    }
  } catch (error) {
    console.error(error);
  }
}

// Execute the check and window closing when needed
checkAndClose();