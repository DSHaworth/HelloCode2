$(function(){

  loadContent("home.html");

  $("div.topnav a").click(function(){

    //Deselect All items
    $("div.topnav a").removeClass("active");

    //Highlight  current item
    $(this).addClass("active");

    var htmlSource = $(this).attr("html-source");

    loadContent(htmlSource);
  });

  function loadContent(sourceUrl){
    $("#content").load(sourceUrl, function (responseText, textStatus, req) {
        console.log(arguments);
        if (textStatus == "error") {
          $("#content").html(responseText);
        }
    });      
  }

});