// Source Code: https://www.youtube.com/watch?v=5k0pG9wjyfs Pro Coder

// Text Animation
const texts = [
    "STUDENT",
    "CREATOR",
    "DESIGNER",
]

const speed = 100;
const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
    if(characterIndex<texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex)
        characterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 100)
    }
}

function eraseText(){
    if(textElements.innerHTML.length>0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50);
    }
    else{
        textIndex = (textIndex +1)%texts.length;
        characterIndex = 0
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;
// End of Text Animation

// Project Image Carousel
// Source Code: https://www.youtube.com/watch?v=Xh-wIMqohD0 LunaDev
let items = document.querySelectorAll('.project-carousel .project');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;
function loadShow(){
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for(var i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for(var i = active - 1; i >= 0; i--){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
next.onclick = function(){
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}
// End of Project Image Carousel
