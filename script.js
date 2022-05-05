let menu = document.querySelector('#bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// window.onscroll = () =>{
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
// }

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-box').clickList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').clickList.remove('active');
}

var swiper = new Swiper(".home-slider", {
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
    loop:true
  });

// // for home page special dish images
// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/Previous controls 
// function plusSlides(n){
//     showSlides(slideIndex += n);
// }

// // Thumbnail image controls 
// function currentSlide(n){
//     showSlides(slideIndex = n);
// }

// function showSlides(n){
//     var i;
//     var slides = document.getElementsByClassName("slide");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length){slideIndex = 1} 
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++){
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++){
//         dots[i].className = dots[i].className.replace(" active","");
//     }

//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
// }
  