window.onbeforeunload = function () {
      window.scrollTo(0, 0);
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

// Function to toggle the display of the text container
        function toggleText(containerId) {
            var textContainer = document.getElementById(containerId);
            if (textContainer.style.display === "none") {
                textContainer.style.display = "block";
            } else {
                textContainer.style.display = "none";
            }
        }

        document.getElementById('button1').addEventListener('click', function() {
            var content1 = document.getElementById('content1');
            var content2 = document.getElementById('content2');
            var content3 = document.getElementById('content3');
            var content4 = document.getElementById('content4');
            var content5 = document.getElementById('content5');
            var content6 = document.getElementById('content6');
            var content7 = document.getElementById('content7');
            var content8 = document.getElementById('content8');
            var content9 = document.getElementById('content9');
            var content10 = document.getElementById('content10');
            var content11 = document.getElementById('content11');
            var content12 = document.getElementById('content12');
            if (content1.style.display === 'none' || content1.style.display === '') {
                content1.style.display = 'block';
                content2.style.display = 'none'; // Hide content2 when content1 is shown
            } else {
                content1.style.display = 'none';
            }
        });

        document.getElementById('button2').addEventListener('click', function() {
            var content2 = document.getElementById('content2');
            if (content2.style.display === 'none' || content2.style.display === '') {
                content2.style.display = 'block';
            } else {
                content2.style.display = 'none';
            }
        });
        document.getElementById('button3').addEventListener('click', function() {
            var content3 = document.getElementById('content3');
            if (content3.style.display === 'none' || content3.style.display === '') {
                content3.style.display = 'block';
            } else {
                content3.style.display = 'none';
            }
        });
        document.getElementById('button4').addEventListener('click', function() {
            var content4 = document.getElementById('content4');
            if (content4.style.display === 'none' || content4.style.display === '') {
                content4.style.display = 'block';
            } else {
                content4.style.display = 'none';
            }
        });
        document.getElementById('button5').addEventListener('click', function() {
            var content5 = document.getElementById('content5');
            if (content5.style.display === 'none' || content5.style.display === '') {
                content5.style.display = 'block';
            } else {
                content5.style.display = 'none';
            }
        });
        document.getElementById('button6').addEventListener('click', function() {
            var content6 = document.getElementById('content6');
            if (content6.style.display === 'none' || content6.style.display === '') {
                content6.style.display = 'block';
            } else {
                content6.style.display = 'none';
            }
        });

        document.getElementById('button7').addEventListener('click', function() {
            var content7 = document.getElementById('content7');
            if (content7.style.display === 'none' || content7.style.display === '') {
                content7.style.display = 'block';
            } else {
                content7.style.display = 'none';
            }
        });
        document.getElementById('button8').addEventListener('click', function() {
            var content8 = document.getElementById('content8');
            if (content8.style.display === 'none' || content8.style.display === '') {
                content8.style.display = 'block';
            } else {
                content8.style.display = 'none';
            }
        });
        document.getElementById('button9').addEventListener('click', function() {
            var content9 = document.getElementById('content9');
            if (content9.style.display === 'none' || content9.style.display === '') {
                content9.style.display = 'block';
            } else {
                content9.style.display = 'none';
            }
        });
        document.getElementById('button10').addEventListener('click', function() {
            var content10 = document.getElementById('content10');
            if (content10.style.display === 'none' || content10.style.display === '') {
                content10.style.display = 'block';
            } else {
                content10.style.display = 'none';
            }
        });
        document.getElementById('button11').addEventListener('click', function() {
            var content11 = document.getElementById('content11');
            if (content11.style.display === 'none' || content11.style.display === '') {
                content11.style.display = 'block';
            } else {
                content11.style.display = 'none';
            }
        });
        document.getElementById('button12').addEventListener('click', function() {
            var content12 = document.getElementById('content12');
            if (content12.style.display === 'none' || content12.style.display === '') {
                content12.style.display = 'block';
            } else {
                content12.style.display = 'none';
            }
        });