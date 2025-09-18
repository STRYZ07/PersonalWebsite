// *AUTOTYPING ANIMATION
var typed = new Typed(".autotype",{
    strings: ["IT", "Developer", "Programmer", "Designer"],
    typeSpeed: 60,
    backSpeed: 70,
    loop: true
})

// *HEADER SHADW ON SCROLL
const header = document.getElementById("mainheader");

window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        header.classList.add("header-shadow");
    } else {
        header.classList.remove("header-shadow");
    }
});

// *NAVBAR TOGGLE
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// *SCROLL ANIMATION TOP
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    opacity: 0,
    duration: 2500,
    reset: true
});

// *SCROLL ANIMATION HOME
sr.reveal('.name', { delay: 500 });
sr.reveal('.auto', { delay: 400 });
sr.reveal('.homeintro', { delay: 300 });
sr.reveal('.social ', { delay: 200 });
sr.reveal('.Home-image', {  });

// *SCROLL ANIMATION SECTION-HEADER
sr.reveal('.About-header', {  });
sr.reveal('.Contact-header', { delay: 300 });
sr.reveal('.Contact-key', {  });
sr.reveal('.Feedback-header', { delay: 400 });
sr.reveal('.Feedback-content', {  });

// *SCROLL ANIMATION LEFT
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '100px',
    opacity: 0,
    duration: 2500,
    reset: true
});

// *SCROLL ANIMATION ABOUT
srLeft.reveal('.About-content1', { delay: 100 });
// *SCROLL ANIMATION CONTACT
srLeft.reveal('.Contact-content1', { delay: 200 });

// *SCROLL ANIMATION RIGHT
const srRight = ScrollReveal({
    origin: 'right',
    distance: '100px',
    opacity: 0,
    duration: 2500,
    reset: true
});

// *SCROLL ANIMATION SKILL LIST
srRight.reveal('.Skill-list', { interval:200 });
// *SCROLL ANIMATION CONTACT
srRight.reveal('.Contact-content2', { delay: 200 });


// *FEEDBACK EMOOJI FUNCTION
const reactemoji = document.querySelectorAll('.react-emoji');
let selectedEmoji = 0;

reactemoji.forEach(( emoji ) => {
    emoji.addEventListener('click', () => {
        reactemoji.forEach((e => e.classList.remove('selected')));
        emoji.classList.add('selected');
        selectedEmoji = emoji.dataset.rating;
    });
});


// *SENDING CONTACT
const form = document.querySelector('.Contact-content2'); 

function sendEmail() {
    Email.send({
        Host : "s1.maildns.net",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
    message => alert(message)
    );
}