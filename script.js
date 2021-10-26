// var slideIndex = 1;
// showSlides();
// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("gal");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 3000); 
// }

var modal = document.getElementById('myModal');
var img = $(".myImg");
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('.myImg').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

//JS code for gallery slideshow
var gal_slideIndex=1;
var gal_myTimer;
var gal_container;

window.addEventListener("load",function(){
  galshowSlides(gal_slideIndex);
  gal_myTimer = setInterval(function(){galplusSlides(1)}, 4000);

  gal_container = document.getElementsByClassName('galslide-inner')[0];
  gal_container.addEventListener('mouseenter',pause)
  gal_container.addEventListener('mouseleave',resume)
})

function galplusSlides(n){
  clearInterval(gal_myTimer);
  if(n<0)
  {
    galshowSlides(gal_slideIndex -=1);
  }
  else{
    galshowSlides(gal_slideIndex +=1);
  }

  if(n===-1)
  {
    gal_myTimer = setInterval(function(){galplusSlides(n + 2)}, 4000);
  }
  else{
    gal_myTimer = setInterval(function(){galplusSlides(n+1)}, 4000);
  }
}
function galcurrentSlide(n){
  clearInterval(gal_myTimer);
  gal_myTimer = setInterval(function(){galplusSlides(n + 1)}, 4000);
  galshowSlides(gal_slideIndex = n);
}

function galshowSlides(n){
  var i;
  var slides = document.getElementsByClassName("gal");
  var galdots = document.getElementsByClassName("gal-dot");
  if (n > slides.length) {gal_slideIndex = 1}
  if (n < 1) {gal_slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < galdots.length; i++) {
      galdots[i].className = galdots[i].className.replace(" active", "");
  }
  slides[gal_slideIndex-1].style.display = "block";
  galdots[gal_slideIndex-1].className += " active";
}


//JS code for latest from season slideshow
var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

pause = () => {
  clearInterval(myTimer);
}

resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}