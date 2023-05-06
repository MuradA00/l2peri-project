// const cards = document.querySelectorAll('.world__grid-item'),
//       playBtns = document.querySelectorAll('#play-btn'),
//       body = document.body,
//       modal = document.querySelector('.modal'),
//       modalCloseBtn = document.querySelector('.modal__close');
//       closeIcon = document.querySelector('.menu__close'),
//       burger = document.querySelector('.burger'),
//       navLinks = document.querySelectorAll('.menu-nav__item a'),
//       menu = document.querySelector('.menu'),
//       html = document.documentElement,
//       menuDropdown = document.querySelector('.menu-nav__dropdown'),
//       menuDropdownTriggers = document.querySelectorAll('.menu-nav__link--dropdown');

// cards.forEach(card => {
//   const currentInfoBlock = card.querySelector('.world__item-descr');

//   const currentInfoTextHeight = currentInfoBlock.children[0].clientHeight

//   card.addEventListener('mouseenter', () => {
//     currentInfoBlock.style.height = `calc(${currentInfoTextHeight}px + 0.75rem)`
//     currentInfoBlock.style.opacity = '100%';
//   })
//   card.addEventListener('mouseleave', () => {
//     currentInfoBlock.style.height = 0
//     currentInfoBlock.style.opacity = 0
//   })
// })

// menuDropdownTriggers.forEach(tirgger => {
//   tirgger.addEventListener('click', function() {
//     this.classList.toggle('active-dropdown')
//     const hiddenDropdownBlock = this.querySelector('.menu-nav__dropdown');
//     const hiddenDropdownLinkHeight = hiddenDropdownBlock.children[0].clientHeight;

//     if (this.classList.contains('active-dropdown')) {
//       hiddenDropdownBlock.style.maxHeight = `${hiddenDropdownLinkHeight}px`
//       hiddenDropdownBlock.style.opacity = 1
//     } else {
//       hiddenDropdownBlock.style.maxHeight = 0
//       hiddenDropdownBlock.style.opacity = 0
//     }
//   })
// })

// function closeMenuByClick() {
//   if (navLinks.length > 0) {
//     navLinks.forEach(link => {
//       link.addEventListener('click', closeMenu);
//     })
//   }
// }

// closeMenuByClick();

// function showMenu() {
//   closeIcon.classList.remove('closed')
//   burger.classList.toggle('active-burger');
//   body.classList.add('body-locked')
//   if (burger.classList.contains('active-burger')) {
//     menu.classList.add('show-menu')
//     body.classList.add('body-locked')
//     html.classList.add('body-locked')

//     setTimeout(() => {
//       menu.classList.add('show-links')
//     }, 500)
//   } else {
//     menu.classList.remove('show-menu')
//     body.classList.remove('body-locked')
//     html.classList.remove('body-locked');
//   }
// }

// function closeMenu() {
//   closeIcon.classList.add('closed');
//   menu.classList.remove('show-menu');
//   burger.classList.remove('active-burger');
//   body.classList.remove('body-locked')
//   html.classList.remove('body-locked');
//   menu.classList.remove('show-links');
// }

// if (burger) {
//   closeIcon.addEventListener('click', closeMenu);
// }

// if (burger) {
//   burger.addEventListener('click', showMenu);
// }

// function showModal(modal) {
//   modal.classList.add('show-modal')
//   body.style.overflow = 'hidden';
//  }

//  function hideModal(modal) {
//   modal.classList.remove('show-modal');
//   body.style.overflow = '';
//  }

// playBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     showModal(modal);
//   })
// })

// modalCloseBtn.addEventListener('click', () => hideModal(modal));

// window.addEventListener('click', (e) => {
//    if (e.target === document.querySelector('.modal__container')) {
//     hideModal(modal);
//    }
// })

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
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: true
    // }
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

