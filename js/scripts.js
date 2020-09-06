$(document).ready(function () {
    
  //start menu - include
  $(".header__wr-burger").on("click", function () {
   
       
        menuClick();
    

});
function menuClick() {
    
    if (!$('.header__wr-nav').hasClass("active")) {
       
        $('.header__wr-nav').toggleClass("active");
        if ($(window).width()>565){
       // $('.header__wr-nav').find(".header__nav").slideDown(300);
        }
    } else {
      
        $('.header__wr-nav').toggleClass("active");
        if ($(window).width()>565){
        //$('.header__wr-nav').find(".header__nav").slideUp(300);
        }
    }
}
  //end menu - include
  $('.slider2').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    prevArrow: $('.sl33'),
    nextArrow: $('.sl22'),
    responsive: [
        {
            breakpoint: 1280, // tablet breakpoint
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767, // tablet breakpoint
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
   
  });
  $('.slider-blocks').slick({
    infinite: true,
    
    slidesToShow: 3,
    prevArrow: $('.slider-block-1'),
    nextArrow: $('.slider-block-2'),
    responsive: [
        {
            breakpoint: 1612, // tablet breakpoint
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991, // tablet breakpoint
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
   
  });
  $('.slick-slider-jessica').slick({
    infinite: true,
    
    slidesToShow: 1,
    fade: true,
    arrows: true,
    asNavFor: '.thubnail-blocks',
    prevArrow: $('.jessica-arrow-left'),
    nextArrow: $('.jessica-arrow-right'),
    responsive: [
        {
            breakpoint: 991, // tablet breakpoint
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: false
            }
        },
        
    ]
   
  });
  
  $( ".cross-img-video-modal" ).on( "click", function() {
    
    $('.youtube-video').each(function(index) {
        $(this).attr('src', '');
        return false;
      });
    

    $( ".modal-video" ).removeClass("active");
  });
  $( ".play" ).on( "click", function() {
    let video_link = $(this).children(":first").attr('data-video-src') + '?autoplay=1';
    $( ".modal-video" ).children(":first").attr("src",video_link);
    $( ".modal-video" ).addClass("active");
  });
  

$('.thubnail-blocks').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: '.slick-slider-jessica',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });
        
});


