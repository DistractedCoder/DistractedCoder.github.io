function closeMenuAndGo(link) {
    console.log('Link clicked:', link.href);
    // Close the off-canvas menu
    $('body').removeClass('offCanvas__menu-visible');

    // Delay navigation to allow menu animation to finish
    setTimeout(function () {
        window.location.href = link.href;
    }, 600); // match menu close animation
}

(function ($) {
    "use strict";
// Hamburger menu open
$('.hamburger-btn').on('click', function () {
    $('body').addClass('offCanvas__menu-visible');
});

// Close menu when overlay or close button is clicked
$('.offCanvas__overlay, .close-btn').on('click', function () {
    $('body').removeClass('offCanvas__menu-visible');
});

// // Smooth scroll for all anchor links
// $('a[href^="#"]').on('click', function (e) {
//     var target = $(this).attr('href');

//     // If target section exists
//     if ($(target).length) {
//         e.preventDefault();

//         var isOffCanvasLink = $(this).closest('.offCanvas__menu').length;

//         // If link is inside off-canvas menu, hide menu first
//         if (isOffCanvasLink) {
//             $('body').removeClass('offCanvas__menu-visible');

//             setTimeout(function () {
//                 $('html, body').animate(
//                     { scrollTop: $(target).offset().top - 70 },
//                     600
//                 );
//             }, 600); // match menu animation time
//         } 
//         // Otherwise (main header or anywhere else)
//         else {
//             $('html, body').animate(
//                 { scrollTop: $(target).offset().top -70 },
//                 600
//             );
//         }

//         // Remove hash from URL
//         history.replaceState(null, null, window.location.pathname);
//     }
// });



// Function to handle scroll events
function handleScroll() {
    if ($(window).scrollTop() < 100) {
        $(".header").removeClass("sticky");
    } else {
        $(".header").addClass("sticky");
    }
}

// Check scroll position on page load/refresh
handleScroll();

// Add scroll event listener
$(window).scroll(function() {
    handleScroll();
});
})(jQuery);


// THUMBNAILS
const thumbSwiper = new Swiper(".thumbSwiper", {
    slidesPerView: 3.25,
    spaceBetween: 10,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    allowTouchMove: true,
    loop: false, 
    breakpoints: {
        768: {
            slidesPerView: 3.25
        }
    }
});

// MAIN SLIDER
const mainSwiper = new Swiper(".mainSwiper", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: thumbSwiper,
    },
    allowTouchMove: true,
    loop: true, 
    on: {
        slideChange: function () {
            // stop embedded video
            document.querySelectorAll("iframe").forEach(iframe => {
                iframe.src = iframe.src;
            });

            // make sure active thumbnail is visible
            thumbSwiper.slideTo(this.realIndex);
        }
    }
});
