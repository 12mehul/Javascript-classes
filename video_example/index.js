const video = document.getElementById("myVideo");
const playPauseBtn = document.getElementById("playPauseBtn");

playPauseBtn.addEventListener("click", function () {
  if (!playPauseBtn.classList.contains("slide")) {
    playPauseBtn.classList.add("slide");
    video.pause();
  } else {
    playPauseBtn.classList.remove("slide");
    video.play();
  }
});
