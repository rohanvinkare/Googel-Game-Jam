document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var topHomeLink = document.getElementById('topHome');

    topHomeLink.addEventListener('click', function() {
        // Scroll to the top smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});