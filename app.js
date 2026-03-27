// Project Videos
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

// Hover sign
const hoverSign = document.querySelector('.hover-sign');

// Store videos in array
const videoList = [video1, video2, video3];

// Video hover functionality
videoList.forEach(function(video){

    if(video){

        video.addEventListener("mouseover", function(){
            video.play();

            if(hoverSign){
                hoverSign.classList.add("active");
            }

        });

        video.addEventListener("mouseout", function(){
            video.pause();

            if(hoverSign){
                hoverSign.classList.remove("active");
            }

        });

    }

});


// Sidebar open
menu.addEventListener("click", function(){

    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");

});


// Sidebar close
closeIcon.addEventListener("click", function(){

    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");

});

// Navigation helpers
const contactButtons = document.querySelectorAll('.contact-btn');
const contactSection = document.getElementById('contact');
const scrollDown = document.getElementById('scroll-down');

// scroll to contact on contact button click
if(contactButtons && contactSection) {
    contactButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// scroll down arrow goes to about section
if(scrollDown) {
    scrollDown.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if(aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}