/* ==========================================================================
   THE SOCIOLOGY ARCHIVE — HERTI LITERARY ENGINE & NAVIGATION
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initCoverAnimation();
    refreshIcons();
});

function refreshIcons() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// --------------------------------------------------------------------------
// 1. SEQUENTIAL LINE-BY-LINE COVER ANIMATION
// --------------------------------------------------------------------------
function initCoverAnimation() {
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");
    const divider = document.querySelector(".ornament-divider");
    const startBtn = document.getElementById("startJourneyBtn");

    // Line 1 fade in
    setTimeout(() => {
        if (line1) line1.classList.add("visible");
    }, 400);

    // Line 2 fade in
    setTimeout(() => {
        if (line2) line2.classList.add("visible");
    }, 1800);

    // Line 3 fade in
    setTimeout(() => {
        if (line3) line3.classList.add("visible");
    }, 3400);

    // Ornament line fade in
    setTimeout(() => {
        if (divider) divider.classList.add("visible");
    }, 4600);

    // Button fade in
    setTimeout(() => {
        if (startBtn) startBtn.classList.add("visible");
    }, 5400);
}

// --------------------------------------------------------------------------
// 2. NAVIGATION BETWEEN VIEWS (Cover -> Museum Hall -> Durkheim Room)
// --------------------------------------------------------------------------
function enterMuseum() {
    const cover = document.getElementById("coverScreen");
    const hall = document.getElementById("museumHall");

    if (cover) cover.style.display = "none";
    if (hall) {
        hall.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    refreshIcons();
}

function enterGallery1() {
    const hall = document.getElementById("museumHall");
    const room = document.getElementById("durkheimRoom");

    if (hall) hall.style.display = "none";
    if (room) {
        room.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    refreshIcons();
}

function backToHall() {
    const room = document.getElementById("durkheimRoom");
    const hall = document.getElementById("museumHall");

    if (room) room.style.display = "none";
    if (hall) {
        hall.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    refreshIcons();
}

function backToCover() {
    const hall = document.getElementById("museumHall");
    const room = document.getElementById("durkheimRoom");
    const cover = document.getElementById("coverScreen");

    if (hall) hall.style.display = "none";
    if (room) room.style.display = "none";
    if (cover) {
        cover.style.display = "flex";
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    refreshIcons();
}

// Attach functions to global scope
window.enterMuseum = enterMuseum;
window.enterGallery1 = enterGallery1;
window.backToHall = backToHall;
window.backToCover = backToCover;
