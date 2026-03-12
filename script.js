fetch('gallery.json')
    .then(response => response.json())
    .then(data => {
        const gallery = document.getElementById('gallery');
        data.forEach(photo => {
            const div = document.createElement('div');
            div.className = 'photo';
            div.innerHTML = `
                <img src="${photo.src}" alt="${photo.title}" onclick="openViewer(this)">
                <div class="photo-info">
                    <h3>${photo.title}</h3>
                    <p>${photo.settings}</p>
                    <p><em>${photo.story}</em></p>
                </div>
            `;
            gallery.appendChild(div);
        });
    });
