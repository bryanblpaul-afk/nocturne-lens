// Viewer Controls
function openViewer(img) {
    document.getElementById("viewer").style.display = "flex";
    document.getElementById("viewerImage").src = img.src;
}

function closeViewer() {
    document.getElementById("viewer").style.display = "none";
}

// Close on Escape Key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') closeViewer();
});

// Filtering Logic
function filterPhotos(category) {
    document.querySelectorAll(".photo").forEach(photo => {
        const show = (category === 'all' || photo.classList.contains(category));
        photo.style.display = show ? "block" : "none";
    });
}

// Intro Animation
window.addEventListener("load", function() {
    setTimeout(() => {
        document.getElementById("intro").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("intro").style.display = "none";
        }, 2000);
    }, 3000);
});

// Security Deterrent
document.addEventListener("contextmenu", (e) => e.preventDefault());
