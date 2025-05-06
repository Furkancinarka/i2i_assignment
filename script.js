document.addEventListener('DOMContentLoaded', () => {
    const artistInput = document.getElementById('artist');
    const songInput = document.getElementById('song');
    const searchBtn = document.getElementById('search-btn');
    const lyricsDiv = document.getElementById('lyrics');
    const songTitle = document.getElementById('song-title');
    const errorMessage = document.getElementById('error-message');
    const loader = document.getElementById('loader');

    searchBtn.addEventListener('click', searchLyrics);
    
    // Allow searching with Enter key
    [artistInput, songInput].forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchLyrics();
            }
        });
    });

    async function searchLyrics() {
        const artist = artistInput.value.trim();
        const song = songInput.value.trim();
        
        // Validate inputs
        if (!artist || !song) {
            showError('Please enter both artist and song name.');
            return;
        }
        
        // Reset UI
        lyricsDiv.textContent = '';
        errorMessage.textContent = '';
        errorMessage.classList.add('hidden');
        songTitle.classList.add('hidden');
        
        // Show loader
        loader.classList.remove('hidden');
        
        try {
            // Call the lyrics.ovh API
            const response = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(song)}`);
            
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Hide loader
            loader.classList.add('hidden');
            
            if (data.lyrics) {
                // Display the lyrics
                songTitle.textContent = `${artist} - ${song}`;
                songTitle.classList.remove('hidden');
                lyricsDiv.textContent = data.lyrics;
            } else {
                showError('No lyrics found for this song.');
            }
        } catch (error) {
            // Hide loader
            loader.classList.add('hidden');
            
            if (error.message.includes('404')) {
                showError('Lyrics not found. Please check the artist and song name.');
            } else {
                showError(`Error fetching lyrics: ${error.message}`);
            }
            console.error('Error fetching lyrics:', error);
        }
    }
    
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.remove('hidden');
    }
}); 