
const noBtn = document.getElementById("noBtn");
const mainPage = document.getElementById("mainPage");
const successPage = document.getElementById("successPage");

/* RUNNING NO BUTTON */

function moveNoButton() {

    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.random() * maxX);
    const randomY = Math.max(padding, Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.zIndex = "100";
}

// Desktop: kapag lalapitan ng mouse
noBtn.addEventListener("pointerenter", moveNoButton);

// Mobile: kapag susubukan hawakan
noBtn.addEventListener("touchstart", function(event) {
    event.preventDefault();
    moveNoButton();
}, { passive: false });

// Kapag somehow na-click pa rin
noBtn.addEventListener("click", function(event) {
    event.preventDefault();
    moveNoButton();
});

/* YES BUTTON */

function sayYes() {

    mainPage.style.display = "none";

    successPage.classList.add("show");

    // Start flower and heart celebration
    celebration();

    // More flowers!
    setTimeout(celebration, 1000);
    setTimeout(celebration, 2000);
}

/* FLOWER AND HEART CELEBRATION */

function celebration() {

    const emojis = ["🌸", "🌷", "🌹", "💐", "❤️", "💕", "💗", "🌺", "💖"];

    const celebrationArea = document.getElementById("celebration");

    for (let i = 0; i < 45; i++) {

        const particle = document.createElement("div");

        particle.className = "flower-particle";

        particle.innerHTML = emojis[
            Math.floor(Math.random() * emojis.length)
        ];

        particle.style.left = Math.random() * 100 + "vw";

        particle.style.fontSize = (18 + Math.random() * 25) + "px";

        particle.style.animationDuration = (3 + Math.random() * 4) + "s";

        particle.style.animationDelay = Math.random() * 2 + "s";

        celebrationArea.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 9000);
    }
}

/* FLOATING BACKGROUND HEARTS */

function backgroundHearts() {

    const container = document.getElementById("backgroundHearts");

    const heart = document.createElement("div");

    heart.className = "bg-heart";

    heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(backgroundHearts, 500);