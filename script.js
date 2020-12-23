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

    // 
    function setProjectDescModalContentByInd(ind) {
      document.getElementById("projectModalTitle").innerHTML = titles[ind]
      var ul = document.querySelector('.project-desc')
      
      var list = projectDesc[ind]
      ul.innerHTML = ''
      for (var i = 0; i < list.length; i++) {
        var li = document.createElement("li")
        li.innerHTML = list[i];
        ul.appendChild(li);
      }
    }

    //
    function onChangeCurInd() {
      setNewVideoSrcByInd(curInd)
      setProjectDescModalContentByInd(curInd)
    }

    var linksUrl = [
      'https://github.com/eireensid/animal-shelter',
      'https://github.com/eireensid/laravel-books-and-authors',
      'https://github.com/eireensid/Hotel-site',
      'https://github.com/eireensid/architecture-landing'
    ]

    var videos = [
      'https://youtube.com/embed/PAwuTx4i850',
      'https://youtube.com/embed/PxslLYPhej0',
      'https://www.youtube.com/embed/9NjhChKMjFM',
      'https://www.youtube.com/embed/TAJim20qnd8'
    ]

    var titles = [
      'Сайт приюта для животных',
      'Books and authors',
      'Hotel booking',
      'Architecture landing page'
    ]

    var projectDesc = {
      0: ['- Адаптивная верстка сайта', '- Мобильное меню', '- Переиспользование карточек для домашних животных и животных приюта', '- Реализация карусели животных', '- Фильтрация животных', '- Реализация галереи и пагинации', '- Переиспользование модального окна', '- Хлебные крошки', '- Поиск по галерее', '- Local storage'],
      1: ['- С помощью миграций созданы таблицы «Авторы» и «Книги»',
        '- Реализованы маршруты api для создания, чтения, модификации и удаления авторов и книг',
        '- Создана админ-панель для настройки авторов и их книг',
        '- Выведение списка авторов и их книг на главной странице'],
      2: ['- Datepicker для выбора дат прибытия и отъезда',
        '- Расчет количества гостей и комнат',
        '- Слайдер для выбора диапазона цены номера',
        '- Карточки комнат'],
      3: ['- Поиск по странице',
        '- Слайдер-карусель проектов',
        '- Валидация контактной формы']
    }

    var curInd = 0
    onChangeCurInd()

    function increaseCurInd() {
      curInd = (curInd + 1) % videos.length
      // src video в начале = нулевой элемент массива
      onChangeCurInd()
    }

    function decreaseCurInd() {
      curInd = curInd - 1
      if (curInd < 0) {
        curInd = videos.length - 1
      }
      onChangeCurInd()
    }
    
    document.querySelector('.btn-next').addEventListener('click', increaseCurInd)
    document.querySelector('.btn-back').addEventListener('click', decreaseCurInd)

    // Mobile view
    document.querySelector('.btn-right').addEventListener('click', increaseCurInd)
    document.querySelector('.btn-left').addEventListener('click', decreaseCurInd)

    document.querySelector('.code-btn').addEventListener('click', function() {
      var link = linksUrl[curInd]
      document.getElementById("abc").href = link
    })
})