// Function to validate the form before submission
function validateForm() {
    // Get the values from the input fields
    const fullName = document.querySelector('input[placeholder="abc perera"]').value;
    const email = document.querySelector('input[placeholder="example@example.com"]').value;
    const address = document.querySelector('input[placeholder="home - street - locality"]').value;
    const city = document.querySelector('input[placeholder="Colombo"]').value;
    const state = document.querySelector('input[placeholder="Sri Lanka"]').value;
    const postalCode = document.querySelector('input[placeholder="12345"]').value;
    const paymentMethodSelected = document.querySelector('input[name="payment"]:checked');

    // Check if all fields are filled
    if (!fullName || !email || !address || !city || !state || !postalCode) {
        alert("Please fill out all the billing address fields.");
        return false; // Prevent form submission
    }

    // Check if a payment method is selected
    if (!paymentMethodSelected) {
        alert("Please select a payment method.");
        return false; // Prevent form submission
    }

    // If all fields are filled and payment method is selected, allow form submission
    return true;
}

// Add event listeners to handle the selection and styling of payment methods
document.querySelectorAll('.payment-options .category label').forEach(label => {
    label.addEventListener('click', function() {
        // Remove the 'selected' class from all labels
        document.querySelectorAll('.payment-options .category label').forEach(lbl => lbl.classList.remove('selected'));

        // Add the 'selected' class to the clicked label
        this.classList.add('selected');
    });
});
