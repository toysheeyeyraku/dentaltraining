$(document).ready(function () {
    
  //start menu - include
  $(".header__wr-burger").on("click", function () {
   
       
        menuClick();
    

});
function menuClick() {
    
    if (!$('.header__wr-nav').hasClass("active")) {
       
        $('.header__wr-nav').toggleClass("active");
        if ($(window).width()>565){
        $('.header__wr-nav').find(".header__nav").slideDown(300);
        }
    } else {
      
        $('.header__wr-nav').toggleClass("active");
        if ($(window).width()>565){
        $('.header__wr-nav').find(".header__nav").slideUp(300);
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
    prevArrow: $('.jessica-arrow-left'),
    nextArrow: $('.jessica-arrow-right')
   
   
  });
  
  $('.thubnail-blocks > .thubnail-block').click(function() {
    $('.slick-slider-jessica').slick('slickGoTo',$(this).index());
})
        
});


