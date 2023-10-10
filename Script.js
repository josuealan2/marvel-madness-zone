// variables api and video key for the iFrame player
var apiKey = 'AIzaSyC0PpzjRDdgeE-NDNEE_kjaIZ5LsdLQg4c';
var videoId = 'os2C0TdDphc';

var player;

// function and object for the iframe player, includes parametes for the video controls
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: 550,
    width: 1904,
    videoId: 'os2C0TdDphc',
    playerVars: {
      'autoplay': 0,
      'controls': 1,
      'rel': 0,
    },
    events: {
      'onReady': onPlayerReady,
    }
  });
}

// button click for the video to play on the website
function onPlayerReady(event) {
  event.target.playVideo();
}

// youtube api fetch request
fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=os2C0TdDphc&key=AIzaSyC0PpzjRDdgeE-NDNEE_kjaIZ5LsdLQg4c")
.then(Response => Response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('Error fetching data from Youtube API', error);
});
