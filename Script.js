//Navigation Toggle Menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('menu-open');
    });
});

// JavaScript for Why Us section navigation

$(document).ready(function(){
    $('#scrollLeft').click(function(){
        $('.services-container').animate({scrollLeft: '-=300'}, 300);
    });
    $('#scrollRight').click(function(){
        $('.services-container').animate({scrollLeft: '+=300'}, 300);
    });
});


//Gallery section



// JavaScript for See More functionality
function showMore(button) {
    var popup = button.nextElementSibling;
    if (popup.style.display === "block") {
        popup.style.display = "none";
        button.innerText = "See more";
    } else {
        popup.style.display = "block";
        button.innerText = "See less";
    }
}

