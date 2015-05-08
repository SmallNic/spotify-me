//Constructor function
var Artist = function( artistFromUser ){
  this.searchByArtist( artistFromUser )
  this.artistList = []
}

Artist.prototype = {
  searchByArtist: function( artistFromUser ){
    var url = 'http://ws.spotify.com/search/1/artist.json?q='+artistFromUser;
    $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    context: this
      }).done(function(response){
        for (var i = 0; i < response.artists.length; i++){
          var artistInfo = {
            name:response.artists[i].name,
            href:response.artists[i].href
          }
          this.artistList.push(artistInfo)
        }
        artistView.render()
      }).fail(function(){
        console.log("AJAX request was not successful")
      }).always(function(){
        console.log("Always")
      })
  }
}
