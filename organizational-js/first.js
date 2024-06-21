
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
        <span class="icon">⚠️</span>
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

function showContent(contentId) {
            // Hide all content divs
            var contents = document.querySelectorAll('.content');
            contents.forEach(function(content) {
                content.style.display = 'none';
            });

            // Show the selected content div
            var selectedContent = document.getElementById(contentId);
            selectedContent.style.display = 'block';
        }

        const laserPointer = document.getElementById('laser-pointer');
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener('mousemove', function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

function animate() {
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;
    
    laserPointer.style.transform = `translate(${currentX}px, ${currentY}px)`;

    requestAnimationFrame(animate);
}

animate();