$(document).ready(function() {

    $(".top-performer-section").owlCarousel({
    
        autoPlay: true,
        items: 1,
        center: true,
        nav:true,
        dots:true,
        loop:true,
        responsive: {
            0: {
                items: 1
            },
            475: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            },
            1280: {
                items: 1
            }
    }
    }); 
});

$(document).ready(function() {

    $(".latest-videos-section-row").owlCarousel({
    
        autoPlay: true,
        items: 4,
        center: true,
        nav:true,
        dots:true,
        loop:true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            475: {
                items: 1
            },
            768: {
                items: 3
            },
            991: {
                items: 3
            },
            1280: {
                items: 3
            }
    }
    }); 
});

$(document).ready(function() {

    $(".top-performer-match").owlCarousel({
    
        items: 1,
        center: true,
        nav:true,
        dots:true,
        loop:true,
        responsive: {
            0: {
                items: 1
            },
            475: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            },
            1280: {
                items: 1
            }
    }
    }); 
});

/* Scorecard Tabs */

let scoreTab1 = document.getElementById('scorecard-item1');
let scoreTab2 = document.getElementById('scorecard-item2');
let scoreTab3 = document.getElementById('scorecard-item3');

scoreTab1.addEventListener('click', () => {
    scoreTab2.style.backgroundColor = '#e7e7e7';
    scoreTab2.style.color = '#000';
    scoreTab1.style.backgroundColor = '#1f4cbe';
    scoreTab1.style.color = '#fff';
    scoreTab3.style.backgroundColor = '#e7e7e7';
    scoreTab3.style.color = '#000';
})

scoreTab2.addEventListener('click', () => {
    scoreTab2.style.backgroundColor = '#1f4cbe';
    scoreTab2.style.color = '#fff';
    scoreTab1.style.backgroundColor = '#e7e7e7';
    scoreTab1.style.color = '#000';
    scoreTab3.style.backgroundColor = '#e7e7e7';
    scoreTab3.style.color = '#000';
})

scoreTab3.addEventListener('click', () => {
    scoreTab2.style.backgroundColor = '#e7e7e7';
    scoreTab2.style.color = '#000';
    scoreTab1.style.backgroundColor = '#e7e7e7';
    scoreTab1.style.color = '#000';
    scoreTab3.style.backgroundColor = '#1f4cbe';
    scoreTab3.style.color = '#fff';
})

let teamTab1 = document.getElementById('scorecard-team1');
let teamTab2 = document.getElementById('scorecard-team2');

teamTab1.addEventListener('click', () => {
    teamTab1.style.backgroundColor = '#ef4123';
    teamTab1.style.color = '#fff';
    teamTab2.style.backgroundColor = 'rgb(245 245 245)';
    teamTab2.style.color = '#000';
})

teamTab2.addEventListener('click', () => {
    teamTab1.style.backgroundColor = 'rgb(245 245 245)';
    teamTab1.style.color = '#000';
    teamTab2.style.backgroundColor = '#ef4123';
    teamTab2.style.color = '#fff';
})