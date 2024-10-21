// Get all navigation links
const navLinks = document.querySelectorAll('nav a');

// Function to handle click event for navigation
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Remove 'active' class from all links and contents
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));

        // Add 'active' class to clicked link and corresponding content
        this.classList.add('active');
        document.getElementById(this.getAttribute('data-target')).classList.add('active');
    });
});