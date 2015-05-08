var ArtistView = function( searchValue ){
  this.artistModel = new Artist( searchValue )
}

ArtistView.prototype = {
  render: function (){
    var results = $("#results")
    results.empty()
    for(var i = 0; i < this.artistModel.artistList.length; i ++){
      var href = this.artistModel.artistList[i].href
      var name = this.artistModel.artistList[i].name
      results.append("<li><a href='" + href + "'>" + name + "</a></li>")
    }
  }
}
