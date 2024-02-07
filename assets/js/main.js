// Fixed Header On window Scroll
$(document).ready(function(){
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      if(scrollTop >= 150){
        $('body').addClass('fixed-header');
      }else{
        $('body').removeClass('fixed-header');
      }
    });
  //Home slider Js
  $('.home__title-slide-wrapper').owlCarousel({
      loop: true,
      margin: 0,
      dots: false,
      nav: false,    
      items: 1,
      autoplay: true,
      autoPlaySpeed: 5000,
      autoPlayTimeout: 5000,
      autoplayHoverPause: true,
  });

  // Courses Slider Js
  $('.course-items-wrapper').owlCarousel({
      loop: true,
      margin: 0,
      dots: false,
      nav: true,
      autoPlay: true,
      autoPlaySpeed: 1000,
      autoPlayTimeout: 1000,
      autoPlayHoverPause: false,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items:2
          },
          1000: {
              items: 3
          }
      }
  });

  //Team Slider Js
  $('.team-items-wrapper').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,        
      autoplay: true,
      smartSpeed:1000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 2,
          nav: true
        },
        1024: {
          items: 2,
          nav: true,
          loop: true,
          margin: 0
        },
        1025: {
          items: 3,
          nav: true,
          loop: true,
          margin: 0
        }
      },
  });

  //Review Slider Js
  $('.review-items-wrapper').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 1,
          nav: true
        },
        1024: {
          items: 2,
          nav: true,
          loop: true,
          margin: 0
        }
      },
      autoplay: true,
      smartSpeed:1000
  });

  //Client Slider JS
  $('.client-items-wrapper').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        676: {
          items: 2
        },
        991: {
          items: 4
        },
        1000: {
          items: 6
        }
      },
      autoplay: true,
      smartSpeed:1000,
  });

});


// video popup start
$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});

// Input Validation For Animate Label
$('.animate-label input, .animate-label textarea').on('change', function(){
  if($(this).val().length > 0){
    $(this).addClass('filled');
  }else{
    $(this).removeClass('filled');
  }
});

$('.animate-label input, .animate-label textarea').on('focusout', function(){
  if($(this).val().length > 0){
    $(this).removeClass('empty');
  }else{
    $(this).addClass('empty');
  }
});
//Small Device Nav Collapse
$(document).ready(function(){
  if($(window).width() <= 1024){
    $('.nav-item-submenu,.nav-item-mega-menu').addClass('collapse');
  }else{
    $('.nav-item-submenu,.nav-item-mega-menu').removeClass('collapse');
  }
  $(window).resize(function(){
    if($(window).width() <= 1024){
      $('.nav-item-submenu,.nav-item-mega-menu').addClass('collapse');
    }else{
      $('.nav-item-submenu,.nav-item-mega-menu').removeClass('collapse');
    }
  });
  // Small Device Submenu Show and Hide
  $('.nav-item-main-link').on('click', function(e){
    e.preventDefault();
    $(this).closest('.nav-item-main').find('.collapse').collapse('toggle');
  });
  // Small Device Nav Visible and Hide
  $('.nav-toggle-btn').click(function(){
    $(this).closest('.nav-main').toggleClass('menu-visible');
    $(this).closest('body').toggleClass('body-overflow');
  });
});
