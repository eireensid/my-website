$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav:true,
        responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
        }
    })

    window.addEventListener('scroll', function(e) {
      var mouse = document.querySelector('.mouse')
      mouse.style.display = 'block'
      setTimeout(function() {
        mouse.style.display = 'none'
      }, 1000)
      // console.log('onScrollEvent isBottom', isBottom)
    })

    // Toggle button
    document.querySelector('.mobile-menu-button').addEventListener('click', function() {
      let menu = document.querySelector('.mobile-menu-block')
      menu.classList.toggle('mobile-menu-block-visible')
    })
});