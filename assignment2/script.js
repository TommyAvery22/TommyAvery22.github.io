// DECLARATIONS
const myVideo = document.querySelector("#custom-video-player"); // Selects the video element
const playPauseImg = document.querySelector("#play-pause-img"); // Selects the play/pause image
const volumeButton = document.querySelector("#sound-button"); // Selects the sound button
const volumeImg = document.querySelector("#volume-img"); // Selects the volume image
const fullscreenButton = document.querySelector("#fullscreen-button"); // Selects the fullscreen button
let progressBarFill = document.querySelector("#progress-bar-fill"); // Selects the progress bar fill element

myVideo.addEventListener("ended", function() { // The event listener will look out for the video ending, when it does it will initiate the replay icon
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/replay.png"; // Show replay icon when the video ends
});

// FUNCTIONS
function togglePlayPause() { // Toggles between play and pause states of the video
  if (myVideo.paused || myVideo.ended) { 
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png"; // Now displays 'pause icon' when video is playing
    myVideo.play(); // Play the video
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png"; // Now displays 'play icon' when video is paused
    myVideo.pause(); // Pause the video
  }
}

// Being a tutorial, users would want to be able to control the video time in the case of a mistake
function startSkip() { // Takes video back to the start
  myVideo.currentTime = 0; // The function makes the current time equal to 0 (i.e. the start)
} 

function endSkip() { // Skips video to end
  myVideo.currentTime = myVideo.duration;
}

function rewindVideo() { // Rewinds the video by 5 seconds
  myVideo.currentTime = Math.max(0, myVideo.currentTime - 5); // Ensure current time doesn't go below 0
}

function fastForwardVideo() { // Fast forwards the video by 5 seconds
  myVideo.currentTime = Math.min(myVideo.duration, myVideo.currentTime + 5); // Ensure current time doesn't exceed video duration
}

// Users may want to mute the video and just follow along visually
function toggleMuteUnmute() { // Toggles mute and unmute state of the video
  if (myVideo.muted) {
    myVideo.muted = false; // Unmute the video
    volumeImg.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png"; // Change to speaker icon
  } else {
    myVideo.muted = true; // Mute the video
    volumeImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png"; // Change to mute icon
  }
}

// Users may want to watch with at fullscreen to get a better view of the instructors actions
function toggleFullscreen() { // Toggles fullscreen mode for the video
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen(); // Request to enter fullscreen
  } else {
    document.exitFullscreen(); // Exit fullscreen if already in it
  }
}

myVideo.addEventListener('timeupdate', function() { // Updates the progress bar as the video plays
  const percentage = (myVideo.currentTime / myVideo.duration) * 100; // Calculates the percentage of the video that has played
  progressBarFill.style.width = percentage + "%"; // Update the width of the progress bar fill based on the percentage
});

