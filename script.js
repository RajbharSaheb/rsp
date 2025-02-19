// Initialize Video.js player
var player = videojs('videoPlayer', {
    controls: true,
    autoplay: false,
    preload: 'auto'
});

// Load Video from Input Field
function loadVideo() {
    var videoURL = document.getElementById('videoURL').value;
    
    if (videoURL) {
        var videoSource = document.getElementById('videoSource');
        videoSource.src = videoURL;
        
        player.src({ src: videoURL, type: 'application/x-mpegURL' });
        player.load();
        player.play();
    } else {
        alert("Please enter a valid video URL!");
    }
}

// Add Extra Controls
player.ready(function() {
    this.on('loadedmetadata', function() {
        console.log('Video loaded:', this.currentSrc());
    });

    // Add Playback Speed Control
    player.controlBar.addChild('PlaybackRateMenuButton', {}, 7);

    // Add Quality & Audio Track Selection
    player.controlBar.addChild('AudioTrackButton', {}, 8);
});
