// coffee.js

// Sticky navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.nav_bar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0,0,0,0.9)';
        navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3)';
    } else {
        navbar.style.backgroundColor = 'black';
        navbar.style.boxShadow = 'none';
    }
});

// Highlight current section in menu
const sections = document.querySelectorAll('section, #About, #Menu, #products, #Review, #Contact, #Blogs');
const menuLinks = document.querySelectorAll('.nav_body a');

window.addEventListener('scroll', function () {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Button animation
const buttons = document.querySelectorAll('.btn, .bt');
buttons.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'scale(1.2)';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'scale(1)';
    });
});

// Simple search functionality
const searchInput = document.querySelector('input[type="search"]');
const allTexts = document.querySelectorAll('h1, h2, h3, h4, p');

searchInput.addEventListener('keyup', function () {
    const filter = searchInput.value.toLowerCase();
    allTexts.forEach(el => {
        if (el.textContent.toLowerCase().includes(filter)) {
            el.style.backgroundColor = 'yellow';
        } else {
            el.style.backgroundColor = 'transparent';
        }
    });
});
