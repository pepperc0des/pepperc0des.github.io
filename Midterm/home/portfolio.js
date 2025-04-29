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

//Navigation Animation
function glideWord(word) {
    const floating = document.createElement("div");
    floating.className = "floating-text";
    floating.textContent = word;

    floating.style.top = "80px";
    floating.style.left = "50%";
    floating.style.transform = "translateX(-50%)";
    floating.style.opacity = 1;

    document.body.appendChild(floating);

    setTimeout(() => {
      floating.remove();
    }, 1500);
}
//End of Navigation Animation

// "Projects" Section
function next(){
    const nxtBtn = document.querySelector(".arrow-left")
    
}

function prev(){
    const prevBtn = document.querySelector(".arrow-right")
    
}
// End of "Projects" Section