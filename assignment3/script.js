let totalToppingPrice = 0; // Track the total price of added toppings
let basePrice = 0; // Track the base price of the selected pizza size

// Allow the element to be a drop target
function allowDrop(event) {
  event.preventDefault();
}

// Initialize the drag event with topping data
function drag(event) {
  const overlaySrc = event.target.getAttribute("data-overlay");
  const toppingPrice = event.target.getAttribute("data-price");
  event.dataTransfer.setData("overlay", overlaySrc);
  event.dataTransfer.setData("price", toppingPrice); // Store the topping price
}

// Handle the drop event to add toppings to the pizza
function drop(event) {
  event.preventDefault();

  const overlaySrc = event.dataTransfer.getData("overlay");
  const toppingPrice = parseFloat(event.dataTransfer.getData("price"));

  if (overlaySrc) {
    const overlayImage = document.createElement("img");
    overlayImage.src = overlaySrc;
    overlayImage.className = "topping-overlay";

    // Set overlay image position to center of the dough
    overlayImage.style.position = "absolute";
    overlayImage.style.top = "50%";
    overlayImage.style.left = "50%";
    overlayImage.style.transform = "translate(-50%, -50%)";

    document.getElementById("overlay-container").appendChild(overlayImage);

    // Update total topping price and display updated total below the dough
    totalToppingPrice += toppingPrice;
    updateToppingPriceDisplay();
  }
}

// Update the topping price display below the dough
function updateToppingPriceDisplay() {
  const totalWithToppings = basePrice + totalToppingPrice;
  document.getElementById("total-with-toppings").textContent = totalWithToppings.toFixed(2);
}

// Set base price based on selected size and reset toppings
function selectSize(button) {
  document.querySelectorAll('.size-button').forEach(btn => btn.classList.remove('selected'));
  button.classList.add('selected');

  basePrice = parseFloat(button.getAttribute('data-price')); // Get and set the new base price
  document.getElementById('price').textContent = basePrice.toFixed(2);

  resetPizza(); // Reset toppings on size change
  updateToppingPriceDisplay(); // Update the displayed total
}

// Initialize the default price on load
document.addEventListener('DOMContentLoaded', () => {
  const defaultButton = document.querySelector('.size-button.selected');
  if (defaultButton) {
    basePrice = parseFloat(defaultButton.getAttribute('data-price'));
    document.getElementById('price').textContent = basePrice.toFixed(2);
    updateToppingPriceDisplay();
  }
});

// Clear all toppings and reset topping price
function resetPizza() {
  document.getElementById("overlay-container").innerHTML = ""; 
  totalToppingPrice = 0;
  updateToppingPriceDisplay();
}

// Show the checkout modal with final price
function showCheckout() {
  const finalPrice = basePrice + totalToppingPrice;
  document.getElementById("final-price").textContent = finalPrice.toFixed(2);
  document.getElementById("checkout-modal").style.display = "block"; // Show modal
}

// Close the checkout modal
function closeCheckout() {
  document.getElementById("checkout-modal").style.display = "none"; // Hide modal
}

