// 1. Fetch data and build the gallery
fetch('gallery.json')
    .then(response => response.json())
    .then(data => {
        // CMS Compatibility: Check if data is wrapped in a 'photos' key
        // If 'data.photos' exists, use it; otherwise, use 'data' (for your old format)
        const photoList = data.photos || data; 
        
        const gallery = document.getElementById('gallery');
        gallery.innerHTML = ''; // Clear placeholder text
        
        photoList.forEach(photo => {
            const div = document.createElement('div');
            div.className = 'photo';
            // Note: Ensure the image path from CMS starts with the correct folder
            // CMS often returns paths like "photo1.jpg"; we ensure it's "images/photo1.jpg"
            const imgSrc = photo.src.startsWith('images/') ? photo.src : `images/${photo.src}`;
            
            div.innerHTML = `
                <img src="${imgSrc}" alt="${photo.title}" onclick="openViewer('${imgSrc}')">
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
    if (viewer && viewerImg) {
        viewerImg.src = src;
        viewer.style.display = 'flex';
    }
}

function closeViewer() {
    const viewer = document.getElementById('viewer');
    if (viewer) {
        viewer.style.display = 'none';
    }
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
