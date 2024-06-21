document.addEventListener('DOMContentLoaded', (event) => {
    // List of image IDs
    const imageIds = ['protected-image-1'];

    // Disable right-click on each image by ID
    imageIds.forEach((id) => {
        const image = document.getElementById(id);
        if (image) {
            image.addEventListener('contextmenu', (e) => {
                e.preventDefault();
            });
        }
    });
});

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