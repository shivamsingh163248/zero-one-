let slideIndex1 = 1;
showSlides4(slideIndex1);

function plusSlides(n) {
  showSlides4(slideIndex1 += n);
}

function currentSlide(n) {
  showSlides4(slideIndex1 = n);
}

function showSlides4(n) {
  let i;
  let slides1 = document.getElementsByClassName("mySlides_teacher");
  let dots = document.getElementsByClassName("dott1");
  if (n > slides1.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " active";
}