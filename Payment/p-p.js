// popup.js
document.getElementById('submit-payment').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    var cardHolder = document.getElementById('card-holder').value;
    var cardNumber = document.getElementById('card-number').value;
    var validThru = document.getElementById('valid-thru').value;
    var cvc = document.getElementById('cvc').value;

    // Check if all fields are filled
    if (cardHolder === "" || cardNumber === "" || validThru === "" || cvc === "") {
        showPopup('error-popup');
    } else {
        hidePaymentForm(); // Hide the payment form
        showPopup('confirm-popup'); // Show the confirmation popup
    }
});

function showPopup(popupId) {
    document.getElementById('popup-overlay').classList.add('open-overlay');
    let popup = document.getElementById(popupId);
    popup.classList.add('open-popup');
}

function closePopup(popupId) {
    document.getElementById('popup-overlay').classList.remove('open-overlay');
    let popup = document.getElementById(popupId);
    popup.classList.remove('open-popup');
}

function hidePaymentForm() {
    document.getElementById('payment-form').style.display = 'none';
}

function confirmPayment() {
    closePopup('confirm-popup');
    showPopup('success-popup'); // Show success popup after confirmation
}

function cancelPayment() {
    closePopup('confirm-popup');
    document.getElementById('payment-form').style.display = 'block'; // Show the form again
}
