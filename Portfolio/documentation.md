# Documentation

Code I got from tutorial

```HTML
<div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="800" class="typewriter">I'm a <span class="typewriter-text"></span><label for=""></label></div>
```

```JS
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

window.onload = typeWriter
```

```typeWriter``` function types one character at a time from the current word. It calls itself again to create the typing effect and when it's done with a word from the ```texts``` array, it calls the ```eraseText``` function

```eraseText``` removes on character at a time from the word. It calls itself again after a 50ms delay. When it finishes erasing, it moves to the next word in the array and calls the ```typeWriter``` function with a 500ms delay.

```window.onload = typeWriter``` forces the animation to start automatically when the page loads 