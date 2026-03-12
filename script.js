// 1. Fetch data and build the gallery
fetch('gallery.json')
    .then(response => response.json())
    .then(data => {
        const gallery = document.getElementById('gallery');
        // Clear any placeholder text
        gallery.innerHTML = ''; 
        
        data.forEach(photo => {
            const div = document.createElement('div');
            div.className = 'photo';
            div.innerHTML = `
                <img src="${photo.src}" alt="${photo.title}" onclick="openViewer('${photo.src}')">
                <div class="photo-info">
                    <h3>${photo.title}</h3>
                    <p>${photo.settings}</p>
                    <p><em>${photo.story}</em></p>
                </div>
            `;
            gallery.appendChild(div);
        });
    })
    .catch(error => console.error('Error loading gallery:', error));

// 2. Viewer Logic
function openViewer(src) {
    const viewer = document.getElementById('viewer');
    const viewerImg = document.getElementById('viewerImage');
    viewerImg.src = src;
    viewer.style.display = 'flex';
}

function closeViewer() {
    document.getElementById('viewer').style.display = 'none';
}

// 3. Hide the Intro "Curtain" after 3 seconds
window.addEventListener('load', () => {
    setTimeout(() => {
        const intro = document.getElementById('intro');
        if (intro) {
            intro.style.opacity = '0';
            setTimeout(() => {
                intro.style.display = 'none';
            }, 1000); 
        }
    }, 3000);
});
