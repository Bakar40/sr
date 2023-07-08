  // Define the discount codes and their corresponding discount percentages
  const discountCodes = {
    '1': 10,
    '2': 20,
    '3': 30,
    'sky':5,
    
  };

  // Get the gift code input field and apply button
  const giftCodeInput = document.querySelector('.giftCode input');
  const giftCodeButton = document.querySelector('.giftCode button');
  const discountCode = document.createElement('div');
  discountCode.setAttribute('id', 'discountCode');
  giftCodeInput.parentNode.insertBefore(discountCode, giftCodeInput.nextSibling);

  // Add an event listener to the apply button
  giftCodeButton.addEventListener('click', () => {
    // Get the entered gift code
    const giftCode = giftCodeInput.value;

    // Check if the gift code is valid
    if (giftCode in discountCodes) {
      // If the gift code is valid, apply the corresponding discount to the relevant div element(s)
      const priceBeforeDiscounts = document.querySelectorAll('.priceBeforeDiscount');
      const discountPercentage = discountCodes[giftCode];
      priceBeforeDiscounts.forEach((priceDiv) => {
        // Check if the discount has already been applied
        if (!priceDiv.hasAttribute('data-discount-applied')) {
          // Get the original price from the price span element and remove commas
          const originalPrice = parseFloat(priceDiv.querySelector('.price').textContent.replace(',', ''));
          // Apply the discount
          const discountedPrice = originalPrice * (1 - (discountPercentage / 100));
          // Update the price span element with the discounted price
          priceDiv.querySelector('.price').textContent = discountedPrice.toFixed(2);
          // Mark the div as having had the discount applied
          priceDiv.setAttribute('data-discount-applied', 'true');
        }
      });
      // Disable the input field and hide the submit button
      giftCodeInput.disabled = true;
      giftCodeButton.style.display = 'none';
      // Display the discount code
      discountCode.textContent = 'Discount code applied: ' + discountPercentage + '% off';
      // Change the button style
      giftCodeInput.setAttribute('style', 'display: inline-block; font-weight: 400; color: white; text-align: center; vertical-align: middle; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; background-color: transparent; border: 1px solid transparent; padding: .375rem .75rem; font-size: 1rem; line-height: 1.5; border-radius: .25rem; transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;');
    } else {
      // If the gift code is invalid, show an error message
      alert('Invalid gift code!!');
    }
  });