const eyes = document.querySelectorAll('.eye');
const pupils = document.querySelectorAll('.pupil');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    eyes.forEach((eye, index) => {
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const deltaX = mouseX - eyeCenterX;
        const deltaY = mouseY - eyeCenterY;

        const angle = Math.atan2(deltaY, deltaX);

        // Move the pupil based on angle
        const distance = Math.min(eyeRect.width / 4, Math.hypot(deltaX, deltaY));
        const pupilX = distance * Math.cos(angle);
        const pupilY = distance * Math.sin(angle);

        pupils[index].style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
    });
});
