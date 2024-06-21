    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }

    // Function to toggle the display of the text container
        function toggleText(containerId) {
            var textContainer = document.getElementById(containerId);
            if (textContainer.style.display === "none") {
                textContainer.style.display = "block";
            } else {
                textContainer.style.display = "none";
            }
        }

        document.getElementById("showTextButton").addEventListener("click", function() {
            toggleText("textContainer");
        });


document.addEventListener('dragstart', function(event) {
    event.preventDefault();
});

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
