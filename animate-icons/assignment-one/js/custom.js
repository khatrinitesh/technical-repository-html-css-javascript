// Get all icons
const icons = document.querySelectorAll('.icon');

// Loop through each icon and add a click event listener
icons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Add the animation class to the clicked icon
        icon.classList.add('animate');
        
        // Remove the animation class after it completes to allow re-triggering the animation
        icon.addEventListener('animationend', () => {
            icon.classList.remove('animate');
        });
    });
});
