
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
}




let textLength = 0;
let text = 'İnnovativ kuryer xidməti üzrə express çatdırılma!';

function type() {
    let textChar = text.charAt(textLength++);
    let paragraph = document.getElementById("typed");
    let charElement = document.createTextNode(textChar);
    paragraph.appendChild(charElement);
    if(textLength < text.length+1) {
        setTimeout('type()', 50);
    } else {
        text = '';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    type();
});
