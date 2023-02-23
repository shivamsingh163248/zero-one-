let slideIndex = 1;
showSlides4(slideIndex);

function plusSlides(n) {
  showSlides4(slideIndex += n);
}

function currentSlide(n) {
  showSlides4(slideIndex = n);
}

function showSlides4(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides_teacher");
  let dots = document.getElementsByClassName("dott1");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}