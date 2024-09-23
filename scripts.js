document.addEventListener('DOMContentLoaded', function () {
    const roles = document.querySelectorAll('.animated-roles .role');
    let index = 0;

    function showNextRole() {
        roles.forEach((role, i) => {
            role.classList.remove('active');
            if (i === index) {
                role.classList.add('active');
            }
        });
        index = (index + 1) % roles.length;
    }

    setInterval(showNextRole, 3000); // Change role every 3 seconds
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});
