// Function to handle scroll fade-in effect for sections
function fadeInOnScroll() {
    const sections = document.querySelectorAll("section");
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
}

// Function to highlight the active nav link based on the section in view
function highlightNavLink() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        // Check if section is currently in view
        if (sectionTop < window.innerHeight / 2 && sectionTop > -window.innerHeight / 2) {
            navLinks.forEach((link) => link.classList.remove("active"));
            if (navLinks[index]) { // Avoid error if there are more sections than nav links
                navLinks[index].classList.add("active");
            }
        }
    });
}

// Call the fade-in and highlight functions on scroll event
window.addEventListener("scroll", () => {
    fadeInOnScroll();
    highlightNavLink();
});

// Initial call to set the first section as visible on page load
window.addEventListener("load", () => {
    fadeInOnScroll();
    highlightNavLink();
});

// Intersection Observer for scroll animation (for timeline sections)
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the section is visible
});

// Apply the observer to each timeline item
timelineItems.forEach(item => {
    observer.observe(item);
});
