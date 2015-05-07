//Constructor function
var Track = function( trackFromUser ){
  console.log("trackFromUser", trackFromUser)
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
        console.log("url", url)
        // console.log("response:", response)
        // for (var i = 0; i < response.artists.length; i++){
        //   var artistInfo = {
        //     name:response.artists[i].name,
        //     href:response.artists[i].href
        //   }
        //   this.artistList.push(artistInfo)
        // }
        // artistView.render()
      }).fail(function(){
        console.log("AJAX request was not successful")
      }).always(function(){
        console.log("Always")
      })
  }
}
