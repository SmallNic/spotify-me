// API Docs at:
// https://developer.spotify.com/technologies/web-api/search/

$(document).ready(function(){

  $("#search").on("submit", function ( event ){
    event.preventDefault()
    var searchType = $("#search-type").val()
    var searchValue = $("#search-keyword").val()
    if (searchType === "artist"){
      artistView = new ArtistView ( searchValue )
    }
    else{
      trackView = new TrackView ( searchValue )
    }
  })
})
