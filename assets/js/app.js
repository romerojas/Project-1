// Get the modal
var modal = document.getElementById("myModal");

//Disable Nav and Scroll
var noBodyOver = document.getElementsByTagName("body")[0];
var naav = document.getElementById("header");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "images/fulls/resume.jpg";
  naav.style.display = "none";
  document.getElementsByTagName('html')[0].style.overflow = "hidden";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
  naav.style.display = "block";
  document.getElementsByTagName('html')[0].style.overflow = "scroll";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    naav.style.display = "block";
    document.getElementsByTagName('html')[0].style.overflow = "scroll";
  }
}