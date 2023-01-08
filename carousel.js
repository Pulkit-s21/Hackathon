      const swiper = new Swiper('.swiper', {
      // Optional parameters
      speed: 500,
      spaceBetween: 150,
      autoplay: {
        delay: 3000
      },

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

    const slider = document.getElementById("slider")

    console.log(slider)