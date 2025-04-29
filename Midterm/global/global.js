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