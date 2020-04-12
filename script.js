document.addEventListener('DOMContentLoaded', function(){
    // Clear url from anchor
    var url = window.location.href
    if (url.includes('#')) {
      url = url.replace(/#.*/, '')
      location.replace(url)
    }

    // Scroll effect
    window.addEventListener('scroll', function(e) {
      var mouse = document.querySelector('.mouse')
      mouse.style.display = 'block'
      setTimeout(function() {
        mouse.style.display = 'none'
      }, 1000)
    })

    // Toggle button
    document.querySelector('.mobile-menu-button').addEventListener('click', function() {
      var menu = document.querySelector('.mobile-menu-block')
      menu.classList.toggle('mobile-menu-block-visible')
    })

    // Close mobile menu after going to link
    var links = document.querySelectorAll('.mobile-menu .menu-item a') 
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function() {
        var menu = document.querySelector('.mobile-menu-block')
        menu.classList.remove('mobile-menu-block-visible')
      })
    }

    // Carousel
    function setNewVideoSrcByInd(ind) {
      var newSrc = videos[ind]
      var iframe = document.getElementById('video1') 
      // свойство src найденного элемента меняется на значение массива по новому индексу
      iframe.src = newSrc
    }
    var videos = [
      'https://www.youtube.com/embed/9NjhChKMjFM',
      'https://www.youtube.com/embed/CaBioMr4qcs',
      'https://www.youtube.com/embed/xjK1Oincr9w',
      'https://www.youtube.com/embed/TAJim20qnd8'
    ]
    var curInd = 0
    document.querySelector('.btn-next').addEventListener('click', function() {
      curInd = (curInd + 1) % videos.length
      // src video в начале = нулевой элемент массива
      setNewVideoSrcByInd(curInd)
    })
    document.querySelector('.btn-back').addEventListener('click', function() {
      curInd = curInd - 1
      if (curInd < 0) {
        curInd = videos.length - 1
      }
      setNewVideoSrcByInd(curInd)
    })
    document.querySelector('.btn-right').addEventListener('click', function() {
      curInd = (curInd + 1) % videos.length
      // src video в начале = нулевой элемент массива
      setNewVideoSrcByInd(curInd)
    })
    document.querySelector('.btn-left').addEventListener('click', function() {
      curInd = curInd - 1
      if (curInd < 0) {
        curInd = videos.length - 1
      }
      setNewVideoSrcByInd(curInd)
    })
})