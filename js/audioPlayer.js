const audio = document.getElementById('audio');
const playButton = document.querySelector('.play-pause-button');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');
const currentTime = document.querySelector('.current-time');
const totalTime = document.querySelector('.total-time');
const songTitle = document.querySelector('.song-title');
const songArtist = document.querySelector('.song-artist');
const songImage = document.querySelector('.song-image img');

let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
  updateButton();
}

function updateButton() {
    let icon = isPlaying ? 'pause' : 'play';
    playButton.innerHTML = `<i class="bi bi-${icon}-circle-fill"></i>`;
  }


  function updateProgress() {
    let percent = (audio.currentTime / audio.duration) * 100;
    let durationMinutes = Math.floor(audio.duration / 60);
    let durationSeconds = Math.floor(audio.duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    let currentTimeMinutes = Math.floor(audio.currentTime / 60);
    let currentTimeSeconds = Math.floor(audio.currentTime % 60);
    if (currentTimeSeconds < 10) {
      currentTimeSeconds = `0${currentTimeSeconds}`;
    }
    progress.style.width = `${percent}%`;
    totalTime.textContent = `${durationMinutes}:${durationSeconds}`;
    currentTime.textContent = `${currentTimeMinutes}:${currentTimeSeconds}`;
  }
  
  function setProgress(e) {
    let width = this.clientWidth;
    let clickX = e.offsetX;
    let duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
  }
  
  function loadSong(song) {
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    songImage.src = song.image;
    audio.src = song.audio;
  }
  
  playButton.addEventListener('click', togglePlay);
  audio.addEventListener('timeupdate', updateProgress);
  progressBar.addEventListener('click', setProgress);


