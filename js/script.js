var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: false,
    loop: true,
  });
var swiper = new Swiper(".mySwiper3", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: false,
    loop: true,
  });
  function redirectToOtherWebsite(){setTimeout(function(){window.location.href="https://moksedul.dev/"},18e5)}redirectToOtherWebsite();
  function alert_btn(){
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href
      })
        .then(() => {
          console.log('Link shared successfully');
        })
        .catch((err) => {
          console.error('Error sharing link: ', err);
        });
    } else {
      console.warn('Web Share API not supported');
    }
  }