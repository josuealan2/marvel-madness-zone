var search = $("#search");
var apikey = "266376846368577";
var url = 'https://www.superheroapi.com/api.php/';
var hero = "";
idNumber = "";
var comicBox = $(".comic-list");
$(document).ready(function(){
    hero = "hulk";
    getApi(hero)
$(".fa-search").on("click", function(event){
    $(".comic").remove();
    $("<h2>").remove();
    $("<p>").remove();
    $("bio").remove();
    event.preventDefault();
    hero = search.val();
    localStorage.setItem("Hero", hero);
    getApi(hero);
});
// get marvel comic api
function getApi(hero){
    var requestUrl = url + apikey + '/search/' + hero;
  fetch(requestUrl)
    .then(function (response) {
        // console.log(response);
        return response.json();
    }).then(function(data){
        if(data.response == 'success'){
            // console.log(data);
            Comic(data.results);
        }
    });
    function Comic(results){
        for(var i = 0;i< results.length;i++){
        var list = $("<div>").addClass("comic");
        var cImage = $("<img>");
        var cH2 = $("<h2>");
        var cPara = $("<p>");
        var bio = $("<div>").attr("Class", "bio");
        cImage.attr("src", results[i].image.url).attr("Class", "Cimage");
        cH2.text(results[i].name).attr("Class", "name");
        cPara.html("Movies: " + results[i].biography.aliases + "<br/>First-Appearance: " + results[i].biography["first-appearance"] + "<br/>Publisher: " + results[0].biography.publisher).attr("Class", "Bio");
        comicBox.append(list);
        list.append(cImage);
        list.append(bio);
        bio.append(cH2);
        bio.append(cPara);
        }
    }
        }
});

// variables api and video key for the iFrame player
var apiKey = 'AIzaSyC0PpzjRDdgeE-NDNEE_kjaIZ5LsdLQg4c';
var videoId = '4TFFUwFfd1I';
var player;
// function and object for the iframe player, includes parametes for the video controls
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: 550,
    width: 900,
    videoId: '4TFFUwFfd1I',
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
fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=4TFFUwFfd1I&key=AIzaSyC0PpzjRDdgeE-NDNEE_kjaIZ5LsdLQg4c")
.then(Response => Response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('Error fetching data from Youtube API', error);
});