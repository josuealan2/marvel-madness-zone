var apiKey = 'AIzaSyC0PpzjRDdgeE-NDNEE_kjaIZ5LsdLQg4c';
var videoId = 'os2C0TdDphc';

var player;

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

function onPlayerReady(event) {
  event.target.playVideo();
}

fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=os2C0TdDphc&key=AIzaSyC0PpzjRDdgeE-NDNEE_kjaIZ5LsdLQg4c")
.then(Response => Response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('Error fetching data from Youtube API', error);
});
