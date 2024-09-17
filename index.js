document.getElementById('toggle-btn').addEventListener('click', function() {
    const menu = document.getElementById('toggle-menu');
    
    if (menu.style.display === "block") {
      menu.style.display = "none";  
    } else {
     menu.style.display = "block";  
    }
});

window.onload = function() {
    var navbar = document.querySelector('.header');
    var sticky = navbar.offsetTop;
    var back = document.querySelector('.back-btn'); 
    var fixed = back.offsetTop;

    function stickyNavbar() {
        if (window.pageYOffset > sticky) {
            navbar.classList.add('fix-top');
        } else {
            navbar.classList.remove('fix-top');
        }
    }

    function stickyButton() {
        if (window.pageYOffset > fixed) {
            back.classList.add('scroll-visible');
        } else {
            back.classList.remove('scroll-visible');
        }
    }

    window.onscroll = function() {
        stickyNavbar();
        stickyButton();
    };
};

