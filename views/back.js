const apiURL = 'https://guilhermeonrails.github.io/api-csharp-songs/songs.json';

const form = document.querySelector('#form');
const searchInputArtista = document.querySelector('#searchInputArtista');
const searchInputMusica = document.querySelector('#searchInputMusica');
const searchInputGenero = document.querySelector('#searchInputGenero');
const songsContainer = document.querySelector('#songsContainer');
const prevAndNextContainer = document.querySelector('#prevAndNextContainer');

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
  songsContainer.innerHTML = songs.map(song => `
    <li class="song">
      <span class="song-artist"><strong>${song.artist}, ${song.song}, ${song.year}, ${song.popularity}</strong></span>
    </li>
  `).join('');
};

// Filtra por artista
const filterByArtist = async (artist) => {
  const data = await fetchData(apiURL);
  if (!data) return;
  const filtered = data.filter(song =>
    artist ? song.artist.toLowerCase().includes(artist.toLowerCase()) : true
  );
  insertSongsIntoPage(filtered);
};

// Filtra por gênero
const filterByGenre = async (genre) => {
  const data = await fetchData(apiURL);
  if (!data) return;
  const filtered = data.filter(song =>
    genre ? song.genre.toLowerCase().includes(genre.toLowerCase()) : true
  );
  insertSongsIntoPage(filtered);
};

// Filtra por música
const filterByMusic = async (music) => {
  const data = await fetchData(apiURL);
  if (!data) return;
  const filtered = data.filter(song =>
    music ? song.song.toLowerCase().includes(music.toLowerCase()) : true
  );
  insertSongsIntoPage(filtered);
};

// Evento para clique nos botões (unchanged)
songsContainer.addEventListener('click', (event) => {
  const clickedElement = event.target;

  if (clickedElement.tagName === 'BUTTON') {
    const artist = clickedElement.getAttribute('data-artist');
    const song = clickedElement.getAttribute('data-song');
    const genre = clickedElement.getAttribute('data-genre');

    prevAndNextContainer.innerHTML = `
      <p><strong>Artista:</strong> ${artist}</p>
      <p><strong>Música:</strong> ${song}</p>
      <p><strong>Gênero:</strong> ${genre}</p>
    `;
    console.log(`Artista: ${artist}, Música: ${song}, Gênero: ${genre}`);
  }
});

// Evento para envio do formulário
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission

  const artist = searchInputArtista.value.trim();
  const music = searchInputMusica.value.trim();
  const genre = searchInputGenero.value.trim();

  if (artist) {
        await filterByArtist(artist);
    } else if (music) {
        await filterByMusic(music);
    } else if (genre) {
        await filterByGenre(genre);
    } else {
        const data = await fetchData(apiURL);
        if (data) {
        insertSongsIntoPage(data);
        }
  }
});
