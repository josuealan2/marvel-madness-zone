var YoutubeKey = 'AIzaSyC0PpzjRDdgeE-NDNEE_kjaIZ5LsdLQg4c';

function YoutubePlayer(){
  var PLayer = new YoutubeKey.Player('player', {
    height: 500,
    width: 1519,
    videoId: 'os2C0TdDphc',
    playerVars: {
      'autoplay': 0,
      'controls': 1,
      'rel': 0,
    }
  })
}