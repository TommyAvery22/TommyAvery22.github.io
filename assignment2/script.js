const myVideo = document.querySelector("#custom-video-player"); // #custom-video-player corrected
//console.log(myVideo);

const playPauseButton = document.querySelector("#play-pause-btn");
//console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
//console.log(playPauseImg);

const fullscreenButton = document.querySelector("#fullscreen-btn");
const fullscreenImg = document.querySelector("#fullscreen-img");

let progressBar = document.querySelector("#progress-bar"); // Is this let?
console.log(progressBar);

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

function toggleFullscreen() {
        myVideo.requestFullscreen();
    
}

// Add event listener to the play/pause button

myVideo.addEventListener('timeupdate', function(){
    progressBar.value = video.currentTime / video.duration;
});
// When video is playing, progress bar

// fullscreen
