const video = document.querySelector("video");
const playBtn = document.getElementById("playBtn");
const muteBtn = document.getElementById("muteBtn");
const volumeRange = document.getElementById("volume");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");

let volumeValue = 0.5;
video.volume = volumeValue;

const handlePlayClick = (e) => {
  // if the video is playing, pause it
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playBtn.innerText = video.paused ? "Play" : "Pause";
};

const handleMuteClick = (e) => {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
  muteBtn.innerText = video.muted ? "Unmute" : "Mute";
  volumeRange.value = video.muted ? 0 : volumeValue;
};

const handleVolumeChange = (event) => {
  const {
    target: { value },
  } = event;
  if (video.muted) {
    video.muted = false;
    muteBtn.innerText = "Mute";
  }
  volumeValue = value;
  video.volume = value;

  if (video.volume === 0) {
    video.muted = true;
    muteBtn.innerText = "Unmute";
  }
};
const formatTime = (seconds) => {
  return new Date(seconds * 1000).toISOString().substr(11, 8);
};

const handleLoadedMetadta = () => {
  return (totalTime.innerText = formatTime(Math.floor(video.duration)));
};

const handleTimeupdate = () => {
  return (currentTime.innerText = formatTime(Math.floor(video.currentTime)));
};
playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMuteClick);
volumeRange.addEventListener("input", handleVolumeChange);
video.addEventListener("loadedmetadata", handleLoadedMetadta);
video.addEventListener("timeupdate", handleTimeupdate);

if (video.readyState == 4) {
  handleLoadedMetadata();
}
