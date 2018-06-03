$(document).ready(function() {
  $("#searchButton").click(function() {
    var searchedItem = $("#search").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchedItem + "&limit=10&format=json&callback=?";
    
    $.ajax({
      type:"GET",
      url:url,
      async:false,
      cache:true,
      dataType:"json",
      success: function (data) {
        $("#results").html('');
        for (var i=0; i < data[1].length; i++) {
          $("#results").prepend("<li><a href='" + data[3][i] + "' target='_blank'>" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>")
        }
      },
      error: function(errorMessage) {
        alert("Error!");
      }
    });
  }); 
});