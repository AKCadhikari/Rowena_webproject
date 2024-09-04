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
