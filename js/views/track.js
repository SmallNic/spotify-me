var TrackView = function( searchValue ){
    this.trackModel = new Track( searchValue )

}

TrackView.prototype = {
  render: function (){
    var results = $("#results")
    results.empty()
    // for(var i = 0; i < this.artistModel.artistList.length; i ++){
    //   var href = this.artistModel.artistList[i].href
    //   var name = this.artistModel.artistList[i].name
    //   results.append("<li><a href='" + href + "'>" + name + "</a></li>")
    //   // console.log(this.artistModel.artistList[i].name)
    //   // console.log(this.artistModel.artistList[i].href)
    // }
  }
}
