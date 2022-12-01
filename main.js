


$(document).ready(function(){

   // navigation toggler
   $('.navbar-toggler').click(function(){
      $('.navbar-collapse').slideToggle(450)
   });

   // navbar scroll
   $(window).scroll(function(){
      let pos = $(window).scrollTop()
      if(pos > 100){
         $('.navbar').addClass('cng-navbar')
      }else{
         $('.navbar').removeClass('cng-navbar')
      }
   })

   // Video section
   $(document).ready(function() {
      $('.popup-youtube').magnificPopup({
         disableOn: 700,
         type: 'iframe',
         mainClass: 'mfp-fade',
         removalDelay: 160,
         preloader: false,
         fixedContentPos: false
      });
   });

   // Owl carousel
   $('.team .owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: {
         0:{
            items: 1
         },
         600:{
            items: 2
         },
         1000:{
            items: 3
         }
      }
   })

      // faq section
      $(".faq-head").each(function(){
         $(this).click(function(){
            $(this).next().toggleClass("show-faq-content")
            let icon = $(this).children("span").children("i").attr("class")

            if(icon == "fas fa-plus"){
               $(this).children("span").html(`<i class="fas fa-minus"></i>`)
            }else{
               $(this).children("span").html(`<i class="fas fa-plus"></i>`)
            }
         })
      })

      // Testimonial section
      $(".testimonial .owl-carousel").owlCarousel({
         loop: true,
         autoplay: true,
         dots: true,
         nav: false,
         items: 1
      })
});