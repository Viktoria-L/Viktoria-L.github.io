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
    // breakpoints: {
    //   1100: {
    //     spaceBetween: 0,
    //     slidesPerView: 3,
    //     direction: "vertical",
    //   },
    // },
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
    // breakpoints: {
    //   1100: {
    //     spaceBetween: 0,
    //     slidesPerView: 3,
    //     direction: "vertical",
    //   },
    // },
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


//Modal

let modal = document.getElementById("myModal");
let img = document.getElementsByClassName("myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

let showModal = function (){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener('click', showModal);
}

// Close-span
let span = document.getElementsByClassName("close")[0];

//Close,event
span.onclick = function() {
  modal.style.display = "none";
}
