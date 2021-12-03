const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const mute = document.getElementById("mute");
const time = document.getElementById("time");
const volume = document.getElementById("volume");

const handlePlay = (e) => {
  // if the video is playing, pause it
  if (video.paused) {
    playBtn.innertext = "Pause";
    video.play();
  } else {
    video.pause();
  }
};

const handlePause = () => (playBtn.innerText = "Play");
const handlePlay = () => (playBtn.innerText = "Pause");
const handleMute = (e) => {
  if (mute !== 0) {
  }
};
playBtn.addEventListener("click", handlePlay);
mute.addEventListener("click", handleMute);
video.addEventListener("pause", handlePause);
video.addEventListener("play", handlePlay);
