// script.js

const songList = [
  {
    title: "Song One",
    file: "assets/songs/song1.mp3",
    cover: "assets/images/cover1.jpg"
  },
  {
    title: "Song Two",
    file: "assets/songs/song2.mp3",
    cover: "assets/images/cover2.jpg"
  },
  {
    title: "Song Three",
    file: "assets/songs/song3.mp3",
    cover: "assets/images/cover3.jpg"
  }
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById("audio-player");
const audioSource = document.getElementById("audio-source");
const songTitle = document.getElementById("song-title");
const coverImage = document.getElementById("cover");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const songListElement = document.getElementById("song-list");

function loadSong(index) {
  const song = songList[index];
  songTitle.textContent = song.title;
  audioSource.src = song.file;
  coverImage.src = song.cover;
  audioPlayer.load();
}

function playSong() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playBtn.textContent = "⏸️";
  } else {
    audioPlayer.pause();
    playBtn.textContent = "▶️";
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songList.length;
  loadSong(currentSongIndex);
  audioPlayer.play();
  playBtn.textContent = "⏸️";
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songList.length) % songList.length;
  loadSong(currentSongIndex);
  audioPlayer.play();
  playBtn.textContent = "⏸️";
}

function populatePlaylist() {
  songList.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.addEventListener("click", () => {
      currentSongIndex = index;
      loadSong(index);
      audioPlayer.play();
      playBtn.textContent = "⏸️";
    });
    songListElement.appendChild(li);
  });
}

// Event Listeners
playBtn.addEventListener("click", playSong);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);
audioPlayer.addEventListener("ended", nextSong);

// Initialize
loadSong(currentSongIndex);
populatePlaylist();
