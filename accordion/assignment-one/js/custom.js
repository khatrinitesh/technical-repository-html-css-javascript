// Get all the accordion buttons
const accordionButtons = document.querySelectorAll('.accordion-button');

// Loop through all buttons and add event listeners
accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const accordionItem = this.parentElement;

        // Toggle the 'active' class on the accordion item
        accordionItem.classList.toggle('active');

        // Close other open items (optional)
        // To make sure only one section opens at a time, you can do this:
        // if (accordionItem.classList.contains('active')) {
        //     document.querySelectorAll('.accordion-item').forEach(item => {
        //         if (item !== accordionItem) {
        //             item.classList.remove('active');
        //         }
        //     });
        // }
    });
});
