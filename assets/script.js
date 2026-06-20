const nav = document.getElementById("firstnav");
const secondnav = document.getElementById("secondnav");
const openbtn = document.getElementById("openbtn");
const openbtnsecond = document.getElementById("openbtnsecond");
const closebtn = document.getElementById("closebtn");
const overlay = document.getElementById("overlay");
const languageSelector = document.querySelector(".language-selector");
const dropdown = document.querySelector(".dropdown");
const langBtn = document.querySelector(".lang-btn");
const alertbtn = document.querySelectorAll (".alertbtn")
const screen  = document.querySelectorAll ("html")

// Language Dropdown
langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("show");
});

document.addEventListener("click", (e) => {
    if (languageSelector && !languageSelector.contains(e.target)) {
        dropdown.classList.remove("show");
    }
});

// Open First Menu
openbtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.add("navmenu");
    overlay.classList.add("active");
});

// Close Menu
closebtn.addEventListener("click", () => {

    if (secondnav.classList.contains("secondnavmenu")) {

        secondnav.classList.remove("secondnavmenu");

        setTimeout(() => {
            nav.classList.remove("navmenu");
            overlay.classList.remove("active");
        }, 300);

    } else {

        nav.classList.remove("navmenu");
        overlay.classList.remove("active");

    }

});

// Close Menu With Overlay
overlay.addEventListener("click", () => {

    if (secondnav.classList.contains("secondnavmenu")) {

        secondnav.classList.remove("secondnavmenu");

        setTimeout(() => {
            nav.classList.remove("navmenu");
            overlay.classList.remove("active");
        }, 300);

    } 
    else {

        nav.classList.remove("navmenu");
        overlay.classList.remove("active");

    }
});

// Open Second Menu
openbtnsecond.addEventListener("click", (e) => {
    e.stopPropagation();
    secondnav.classList.add("secondnavmenu");
    overlay.classList.add("active");
});


// Placeholder for future features /  Multi-button alert handler ==>


alertbtn.forEach((item)=>

{item.addEventListener("click",(e)=>{
    e.stopPropagation();
    alert ("این قسمت به دلیل کمبود زمان و تکراری بودن توسعه پیدا نکرده :)")
})

});

const videosectionalert = document.getElementById ("videosectionalert")
videosectionalert.addEventListener("click", (e) => {

alert ("متن ها و عکس های این قسمت به دلیل مدام عوض شدن ویدیو ها در سایت اصلی از قسمت (news) برداشته شده اند ")
}
)

const cardSection = document.querySelector(".cardsection");
const indicator = document.querySelector(".slider-indicator");
const sliderLine = document.querySelector(".slider-line");

let mouseDown = false;
let startX = 0;


cardSection.addEventListener("mousedown", function(e) {
    mouseDown = true;
    startX = e.clientX;
});


cardSection.addEventListener("mouseup", function() {
    mouseDown = false;
});

cardSection.addEventListener("mouseleave", function() {
    mouseDown = false;
});


cardSection.addEventListener("mousemove", function(e) {

    if (!mouseDown) return;

    e.preventDefault();

    let distance = startX - e.clientX;

    cardSection.scrollLeft += distance;

    startX = e.clientX;
});


cardSection.addEventListener("scroll", function() {

    let maxScroll =
        cardSection.scrollWidth - cardSection.clientWidth;

    let percent =
        cardSection.scrollLeft / maxScroll;

    let maxMove =
        sliderLine.clientWidth - indicator.offsetWidth;

    indicator.style.left =
        percent * maxMove + "px";
});

// VIDEO CAROUSEL

const videocardSection = document.querySelector(".video-cards-section");
const videoindicator = document.querySelector(".video-slider-indicator");
const videosliderLine = document.querySelector(".video-slider-line");

let videoMouseDown = false;
let videoStartX = 0;
let isDragging = false;

videocardSection.addEventListener("dragstart", (e) => {
    e.preventDefault();
});

videocardSection.addEventListener("mousedown", (e) => {

    videoMouseDown = true;
    videoStartX = e.clientX;
    isDragging = false;

});

document.addEventListener("mouseup", () => {

    videoMouseDown = false;

    setTimeout(() => {
        isDragging = false;
    }, 50);

});

videocardSection.addEventListener("mouseleave", () => {

    videoMouseDown = false;

});

videocardSection.addEventListener("mousemove", (e) => {

    if (!videoMouseDown) return;

    e.preventDefault();

    const walk = videoStartX - e.clientX;

    if (Math.abs(walk) > 5) {
        isDragging = true;
    }

    videocardSection.scrollLeft += walk;

    videoStartX = e.clientX;

});

videocardSection.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", (e) => {

        if (isDragging) {

            e.preventDefault();
            e.stopPropagation();

        }

    });

});

videocardSection.addEventListener("scroll", () => {

    const maxScroll =
        videocardSection.scrollWidth - videocardSection.clientWidth;

    if (maxScroll <= 0) return;

    const percent =
        videocardSection.scrollLeft / maxScroll;

    const maxMove =
        videosliderLine.clientWidth - videoindicator.offsetWidth;

    videoindicator.style.left =
        percent * maxMove + "px";

});

Screen.addEventListener("load", (e) =>{
    alert ("dfsdfsf")
})