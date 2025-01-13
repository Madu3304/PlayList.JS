
const form = document.querySelector('#form');
const songsContainer = document.querySelector('#songsContainer');
const submitVerAr = document.querySelector('#submitVerAr');
const submitVerGene = document.querySelector('#submitVerGene'); 

const apiURL = 'https://guilhermeonrails.github.io/api-csharp-songs/songs.json';

const fetch = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao buscar.');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

const insertSongsIntoPage = (songs) => {
    songsContainer.innerHTML = songs.map((song) => `
        <li class="song">
            <span class="song-artist"><strong>${song.artist}</strong></span>
        </li>
    `).join('');
};

const insertSongs = (songs) => {
    songsContainer.innerHTML = songs.map((song) => `
        <li class="song">
            <span class="song-genre"><strong>${song.genre}</strong></span>
        </li>
    `).join('');
};

//artistas
const sortArtists = (data) => {
    return data.sort((a, b) => {
        const artistA = a.artist.toLowerCase();
        const artistB = b.artist.toLowerCase();
        return artistA < artistB ? -1 : artistA > artistB ? 1 : 0;
    });
};

//gêneros
const sortGenres = (data) => {
    return data.sort((a) => {
        const genreA = a.genre.toLowerCase();
        return genreA ? -1 : genreA > 1 ;
    });
};

submitVerAr.addEventListener('click', async (event) => {
    event.preventDefault(); 
    const data = await fetch(apiURL);
    if (!data) return;
    const sortedArtists = sortArtists(data);
    insertSongsIntoPage(sortedArtists);
});

submitVerGene.addEventListener('click', async (event) => {
    event.preventDefault(); 
    const data = await fetch(apiURL);
    if (!data) return;
    const sortedGenres = sortGenres(data);
    insertSongs(sortedGenres);
});
