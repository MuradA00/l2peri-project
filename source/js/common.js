const playBtns = document.querySelectorAll('#play-btn'),
      body = document.body,
      videoModal = document.querySelector('.video-modal'),
      videoModalClose = document.querySelector('.video-modal__close'),
      videoModalTrigger = document.querySelector('.home__play-btn'),
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('.modal__close');
      closeIcon = document.querySelector('.menu__close'),
      burger = document.querySelector('.burger'),
      navLinks = document.querySelectorAll('.menu-nav__item a'),
      menu = document.querySelector('.menu'),
      html = document.documentElement;

AOS.init({
  once: true
})

function closeMenuByClick() {
  if (navLinks.length > 0) {
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    })
  }
}

closeMenuByClick();

if (videoModal) {

  window.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.video-modal__container')) {
      console.log(e);
      videoModal.classList.remove('show-video')
      body.classList.remove('body-locked')
    }
 })


  videoModalTrigger.addEventListener('click', () => {
    videoModalTrigger.classList.add('active-video')

    if (videoModalTrigger.classList.contains('active-video')) {
      videoModal.classList.add('show-video')
      body.classList.add('body-locked')
    } else {
      videoModal.classList.remove('show-video')
      body.classList.remove('body-locked')
    }

    videoModalClose.addEventListener('click', () => {
      videoModalTrigger.classList.remove('active-video')
      videoModal.classList.remove('show-video');
      body.classList.remove('body-locked');

    })


  })
}

function showMenu() {
  closeIcon.classList.remove('closed')
  burger.classList.toggle('active-burger');
  body.classList.add('body-locked')
  if (burger.classList.contains('active-burger')) {
    menu.classList.add('show-menu')
    body.classList.add('body-locked')
    html.classList.add('body-locked')

    setTimeout(() => {
      menu.classList.add('show-links')
    }, 500)
  } else {
    menu.classList.remove('show-menu')
    body.classList.remove('body-locked')
    html.classList.remove('body-locked');
  }
}

function closeMenu() {
  closeIcon.classList.add('closed');
  menu.classList.remove('show-menu');
  burger.classList.remove('active-burger');
  body.classList.remove('body-locked')
  html.classList.remove('body-locked');
  menu.classList.remove('show-links');
}

if (burger) {
  closeIcon.addEventListener('click', closeMenu);
}

if (burger) {
  burger.addEventListener('click', showMenu);
}

function showModal(modal) {
  modal.classList.add('show-modal')
  body.classList.add('body-locked')
  html.classList.add('body-locked')
 }

 function hideModal(modal) {
  modal.classList.remove('show-modal');
  body.classList.remove('body-locked')
  html.classList.remove('body-locked')
 }

playBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    showModal(modal);
  })
})

modalCloseBtn.addEventListener('click', () => hideModal(modal));

window.addEventListener('click', (e) => {
   if (e.target === document.querySelector('.modal__container')) {
    hideModal(modal);
   }
})

if (Swiper) {

  const worldsSlider = new Swiper('.worlds__inner', {
    slidesPerView: 1,
    direction: 'horizontal',

    pagination: {
      el: '.worlds__pagination-row',
      clickable: true
    },
    breakpoints: {
      640: {
        spaceBetween: 24,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 24,
        slidesPerView: 4
      }
    }
  })

  const sliderRow = new Swiper('.slider__inner', {
    slidesPerView: 1,
    direction: 'horizontal',
    speed: 1250,
    allowTouchMode: true,
    pagination: {
      el: '.slider__pagination-row',
      clickable: true
    },
    autoplay: true
  })

  const calendarRow = new Swiper('.calendar__inner', {
    slidesPerView: 1,
    speed: 1250,
    navigation: {
      nextEl: '.calendar__navigation-arrow--right',
      prevEl: '.calendar__navigation-arrow--left'
    }
  })
}

