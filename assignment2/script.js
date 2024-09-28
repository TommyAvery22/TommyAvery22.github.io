const myVideo = document.querySelector("#custom-video-player"); // #custom-video-player corrected
//console.log(myVideo);

const playPauseButton = document.querySelector("#play-pause-button");
//console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
//console.log(playPauseImg);

let progressBar = document.querySelector("#progress-bar"); // Is this let?
console.log(progressBar);

function togglePlayPause() {
  if (myVideo.paused || myVideo.ended) {
    
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png"; // Icon now displays 'pause icon' when video is playing
    myVideo.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png"; // Icon now displays 'play icon' when video is playing
    myVideo.pause();
  }
}

// Add event listener to the play/pause button

myVideo.addEventListener('timeupdate', function(){
    progressBar.value = video.currentTime / video.duration;
});
// When video is playing, progress bar