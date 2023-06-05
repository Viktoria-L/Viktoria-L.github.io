constructionMessage("Denna sida är under uppbyggnad, kom gärna tillbaka senare för mer innehåll =)")

//education-carousel
let swiperEdu = new Swiper(".mySwiperEducation", {
    slidesPerView: "auto",
    slideToScroll: 1,
    spaceBetween: 30,
    speed: 450,
    loop: false,
    mousewheel: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1100: {
        spaceBetween: 0,
        slidesPerView: 3,
        direction: "vertical",
      },
    },
  });
  
  let swiperExp = new Swiper(".mySwiperExperience", {
    slidesPerView: "auto",
    slideToScroll: 1,
    spaceBetween: 30,
    speed: 450,
    loop: false,
    mousewheel: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1100: {
        spaceBetween: 0,
        slidesPerView: 3,
        direction: "vertical",
      },
    },
  });
  
  //Scrollreveal
  function revealFunction(){
  
    window.sr = ScrollReveal({distance:'100%', easing:'ease-out', reset:true});
    sr.reveal('.js-reveal-0', {duration:900});
    sr.reveal('.js-reveal-1', {duration:1000});
    sr.reveal('.js-reveal-2', {duration:1200});
    sr.reveal('.js-reveal-3', {duration:1400});
  }
  revealFunction();


  function constructionMessage (text) {
    let modal = document.createElement("div");
    let welcomeSection = document.querySelector("#welcome-section");
    modal.innerText = text;
    modal.className = "construction-modal";
    welcomeSection.prepend(modal);
    setTimeout(() => {
      welcomeSection.removeChild(modal);
    }, 5000);
  
  }