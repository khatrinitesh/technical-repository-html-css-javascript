// Select all tabs and tab content
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

// Add event listener for each tab
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs and content
        tabs.forEach(tab => tab.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        // Add 'active' class to clicked tab and corresponding content
        tab.classList.add('active');
        contents[index].classList.add('active');
    });
});
