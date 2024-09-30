const myVideo = document.querySelector("#custom-video-player"); // #custom-video-player corrected
const playPauseButton = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const fullscreenButton = document.querySelector("#fullscreen-btn");
const fullscreenImg = document.querySelector("#fullscreen-img");

let progressBarFill = document.querySelector("#progress-bar-fill"); 

// Event listener for the video ending
myVideo.addEventListener("ended", function() {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/replay.png"; // Show replay icon when the video ends
  });

function togglePlayPause() {
  if (myVideo.paused || myVideo.ended) {
    
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png"; // Now displays 'pause icon' when video is playing
    myVideo.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png"; // Now displays 'play icon' when video is playing
    myVideo.pause();
  }
}

// fullscreen function
function toggleFullscreen() {
  if(!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// Add event listener to the play/pause button

// Progress bar updates as video plays
myVideo.addEventListener('timeupdate', function() {
  const percentage = (video.currentTime / video.duration) * 100; // Creates a const for the percentage of the video
    progressBarFill.style.width = percentage + "%"; // Update the width of the progress bar fill
});

// When video is playing, progress bar


