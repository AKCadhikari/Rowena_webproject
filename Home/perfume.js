let currentIndex = 0;
const items = document.querySelectorAll('.slide .item');

function showNextItem() {
    // Reset classes
    items.forEach((item, index) => {
        item.classList.remove('left', 'middle', 'right');
        if (index === currentIndex) {
            item.classList.add('middle');
        } else if (index === (currentIndex + 1) % items.length) {
            item.classList.add('right');
        } else if (index === (currentIndex - 1 + items.length) % items.length) {
            item.classList.add('left');
        }
    });

    currentIndex = (currentIndex + 1) % items.length;
}

// Initial setup
showNextItem();

// Cycle every 3 seconds
setInterval(showNextItem, 3000);

document.addEventListener("DOMContentLoaded", function() {
   // Get the modal element
var modal = document.getElementById("myModal");

// Get the elements to update within the modal
var modalImg = document.getElementById("modalImg");
var modalTitle = document.getElementById("modalTitle");
var modalText = document.getElementById("modalText");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Add click event listeners to each card
document.querySelectorAll('.card-popup').forEach(function(card) {
    // Prevent modal from opening when "More" button is clicked
    card.querySelector('.more-btn').addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the card click event
        window.location.href = this.href; // Navigate to the link
    });

    // Add click event listener to card body
    card.addEventListener('click', function(event) {
        // Prevent the "More" button from opening the modal
        if (!event.target.classList.contains('more-btn')) {
            // Get the image, title, and full text from the card
            var imgSrc = card.querySelector('.card-img-top').src;
            var title = card.querySelector('.card-title').innerText;
            var text = card.querySelector('.full-text').innerText;

            // Update the modal content
            modalImg.src = imgSrc;
            modalTitle.innerText = title;
            modalText.innerText = text;

            // Display the modal
            modal.style.display = "block";
        }
    });
});

// Close the modal when the user clicks on <span> (x)
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


});

//brands

(function ($) {
  ("use strict");

  

  // product column of 4 activation
  $(".product_column4")
    .on("changed.owl.carousel initialized.owl.carousel", function (event) {
      $(event.target)
        .find(".owl-item")
        .removeClass("last")
        .eq(event.item.index + event.page.size - 1)
        .addClass("last");
    })
    .owlCarousel({
      autoplay: true,
      loop: true,
      nav: true,
      autoplay: false,
      autoplayTimeout: 5000,
      items: 4,
      dots: false,
      navText: [
        '<i class="fa fa-arrow-left"></i>',
        '<i class="fa fa-arrow-right"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
      },
    });

  // tooltip activation

  $(".action_links ul li a,.add_to_cart a,.footer_social_link ul li a").tooltip(
    {
      animated: "fade",
      placement: "top",
      container: "body",
    }
  );

 
})(jQuery);






