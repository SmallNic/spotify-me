//Constructor function
var Track = function( trackFromUser ){
  this.searchByTrack( trackFromUser )
  this.trackList = []
}

Track.prototype = {
  searchByTrack: function( trackFromUser ){
    var url = 'http://ws.spotify.com/search/1/track.json?q='+trackFromUser;
    $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    context: this
      }).done(function(response){
        this.limit = response.info.limit
        this.numResults = response.info.num_results
        for (var i = 0; i < response.tracks.length; i++){
          var trackInfo = {
            name:response.tracks[i].name,
            href:response.tracks[i].href
          }
          this.trackList.push(trackInfo)
        }
        trackView.render( )
      }).fail(function(){
        console.log("AJAX request was not successful")
      }).always(function(){
        console.log("Always")
      })
  }
}
