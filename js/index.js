new Swiper('.swiper', {
    navigation: {
        nextEl: '.portfolio__arrow-right',
        prevEl: '.portfolio__arrow-left',
        disabledClass: 'portfolio__arrow-disable'
      },
    breakpoints: {
        480: {
            grid: {
                fill: 'row',
                rows: 2
            }
        },
        768: {
            slidesPerView: 2,
            grid: {
                fill: 'row',
                rows: 2
            }
        }
    }
});

// typed
new typed('#multiple__text',{
    strings: ['сайтов', 'ботов'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

if (window.jQuery) {
    // jQuery подключен к странице
  }
