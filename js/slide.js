const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      slidesPerView:1,
      spaceBetween: 30,
      loop:true,
      loopFillGroupWithBlank:true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
        //   progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });