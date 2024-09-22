function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

let slideIndex1 = 1;
let slideIndex2 = 1;
showSlides1(slideIndex1);
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
  }

function showSlides1(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides1");
    if (n > slides.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex1 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex1-1].style.display = "block";
}

  function showSlides2(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides2");
      if (n > slides.length) {slideIndex2 = 1}
      if (n < 1) {slideIndex2 = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex2-1].style.display = "block";
  }
  
