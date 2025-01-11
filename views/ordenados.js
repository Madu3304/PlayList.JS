// const apiURL = 'https://guilhermeonrails.github.io/api-csharp-songs/songs.json';

// const form = document.querySelector('#form');
// const songsContainer = document.querySelector('#songsContainer');
// const submitVerAr = document.querySelector('#submitVerAr'); // Button to order artists
// const submitVerGene = document.querySelector('#submitVerGene'); // Button to order genres

// const fetchData = async (url) => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Erro ao buscar.');
//     }
//     return await response.json();
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

// // Insere músicas na página
// const insertSongsIntoPage = (songs) => {
//   songsContainer.innerHTML = songs.map((song) => `
//     <li class="song">
//       <span class="song-artist"><strong>${song.artist}</strong></span>
//       <span class="song-artist"><strong>${song.genre}</strong></span>
//     </li>
//   `).join('');
// };

// // Sort artists alphabetically
// const sortArtists = (data) => {
//   return data.sort((a, b) => {
//     const artistA = a.artist.toLowerCase();
//     const artistB = b.artist.toLowerCase();
//     return artistA < artistB ? -1 : artistA > artistB ? 1 : 0;
//   });
// };

// // Sort genres alphabetically (assuming 'genre' property exists in the data)
// const sortGenres = (data) => {
//   return data.sort((a, b) => {
//     const genreA = a.genre.toLowerCase();
//     const genreB = b.genre.toLowerCase();
//     return genreA < genreB ? -1 : genreA > genreB ? 1 : 0;
//   });
// };

// // Evento para clique no botão "Ordenar Artistas"
// submitVerAr.addEventListener('click', async (event) => {
//   event.preventDefault(); // Prevent default form submission

//   const data = await fetchData(apiURL);
//   if (!data) return;

//   const sortedArtists = sortArtists(data);
//   insertSongsIntoPage(sortedArtists);
// });

// // Evento para clique no botão "Ordenar Gêneros"
// submitVerGene.addEventListener('click', async (event) => {
//   event.preventDefault(); // Prevent default form submission

//   const data = await fetchData(apiURL);
//   if (!data) return;

//   const sortedGenres = sortGenres(data);
//   insertSongsIntoPage(sortedGenres); // Directly insert sorted genres for display
// });


const apiURL = 'https://guilhermeonrails.github.io/api-csharp-songs/songs.json';

const form = document.querySelector('#form');
const songsContainer = document.querySelector('#songsContainer');
const submitVerAr = document.querySelector('#submitVerAr'); // Button to order artists
const submitVerGene = document.querySelector('#submitVerGene'); // Button to order genres

const fetchData = async (url) => {
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

// Insere músicas na página
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

// Ordena artistas alfabeticamente
const sortArtists = (data) => {
    return data.sort((a, b) => {
        const artistA = a.artist.toLowerCase();
        const artistB = b.artist.toLowerCase();
        return artistA < artistB ? -1 : artistA > artistB ? 1 : 0;
    });
};

// Ordena gêneros alfabeticamente
const sortGenres = (data) => {
    return data.sort((a, b) => {
        const genreA = a.genre.toLowerCase();
        const genreB = b.genre.toLowerCase();
        return genreA < genreB ? -1 : genreA > genreB ? 1 : 0;
    });
};

// Evento para clique no botão "Ordenar Artistas"
submitVerAr.addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent default form submission
    const data = await fetchData(apiURL);
    if (!data) return;
    const sortedArtists = sortArtists(data);
    insertSongsIntoPage(sortedArtists);
});

// Evento para clique no botão "Ordenar Gêneros"
submitVerGene.addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent default form submission
    const data = await fetchData(apiURL);
    if (!data) return;
    const sortedGenres = sortGenres(data);
    insertSongs(sortedGenres); // Directly insert sorted genres for display
});
