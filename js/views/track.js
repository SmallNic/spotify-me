var TrackView = function( searchValue ){
    this.trackModel = new Track( searchValue )
}

TrackView.prototype = {
  render: function (){
    var results = $("#results")
    results.empty()
    for(var i = 0; i < this.trackModel.trackList.length; i ++){
      var href = this.trackModel.trackList[i].href
      var name = this.trackModel.trackList[i].name
      results.append("<li><a href='" + href + "'>" + name + "</a></li>")
    }
  }
}
