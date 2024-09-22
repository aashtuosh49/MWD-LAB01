document.getElementById('song-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const artist = document.getElementById('artist').value;
    const errorMessage = document.getElementById('error-message');
    
    if (!title || !artist) {
        errorMessage.textContent = 'Both fields are required!';
        return;
    }
    
    const songList = document.getElementById('song-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${title} by ${artist}`;
    
    songList.appendChild(listItem);
    
    document.getElementById('title').value = '';
    document.getElementById('artist').value = '';
    errorMessage.textContent = '';
});
