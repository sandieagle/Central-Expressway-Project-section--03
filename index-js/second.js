document.addEventListener('DOMContentLoaded', function() {
            var audio = document.getElementById('audio');
            var playPauseButton = document.getElementById('play-pause');
            var seekBar = document.getElementById('seek-bar');
            var currentTimeDisplay = document.getElementById('current-time');
            var playIcon = document.getElementById('play-icon');
            var pauseIcon = document.getElementById('pause-icon');

            playPauseButton.addEventListener('click', function() {
                if (audio.paused) {
                    audio.play();
                    playIcon.style.display = 'none';
                    pauseIcon.style.display = 'block';
                } else {
                    audio.pause();
                    playIcon.style.display = 'block';
                    pauseIcon.style.display = 'none';
                }
            });

            audio.addEventListener('timeupdate', function() {
                var currentTime = audio.currentTime;
                var duration = audio.duration;
                seekBar.value = (currentTime / duration) * 100;

                var minutes = Math.floor(currentTime / 60);
                var seconds = Math.floor(currentTime % 60);
                
            });

            
        });
function bigImg(x) {
    x.style.height = "180px";
    x.style.width = "180px";
  }
  function normalImg(x) {
    x.style.height = "150px";
    x.style.width = "150px";
  }

  // Get the box element
  const box = document.getElementById('animatedBox');

  // Function to check if the box is in the viewport
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle scroll event
  function handleScroll() {
    if (isElementInViewport(box)) {
      box.classList.add('animate');
      // Remove the event listener to prevent re-triggering
      window.removeEventListener('scroll', handleScroll);
    }
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
      function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less"; 
          moreText.style.display = "inline";
        }
      }
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

// Initiate zoom effect:
imageZoom("myimage", "myresult");

// Function to toggle responsive navigation menu and additional sections box
  function myFunctions() {
    var x = document.getElementById("myTopnav").getElementsByTagName("ul")[0];
    var additionalSections = document.getElementById("additional-sections");
    if (x.className === "") {
      x.className = "responsive";
      additionalSections.classList.add("show");
    } else {
      x.className = "";
      additionalSections.classList.remove("show");
    }
  }

  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keyup', (e) => {
        navigator.clipboard.writeText('');
        showAlert('Copying content is restricted on this site.');
    });

    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showAlert('Copying details from this site is disabled.');
    });
});

function showAlert(message) {
    let alertBox = document.createElement('div');
    alertBox.className = 'alert-box';
    alertBox.innerHTML = `
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
        <i class="icon">⚠️</i>
        ${message}
    `;
    document.body.appendChild(alertBox);
    alertBox.style.display = 'block';

    setTimeout(() => {
        alertBox.style.display = 'none';
        document.body.removeChild(alertBox);
    }, 3000); // Hide the alert after 3 seconds
}

document.addEventListener('dragstart', function(event) {
    event.preventDefault();
});

