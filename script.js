document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.logo').addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('active');
    });
});
