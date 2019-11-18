$(function(){

  loadContent("home.html");

  var navbarLinksQuery = ".navbar a";

  $(navbarLinksQuery).click(function(){

    //Deselect All items
    $(navbarLinksQuery).removeClass("active");

    //Highlight  current item
    $(this).addClass("active");

    var url = $(this).attr("url");
    console.log(url);
    loadContent(url);
  });

  function loadContent(sourceUrl){
    var pageContentQuery = "#page-content";
    
    $(pageContentQuery).load(sourceUrl, function (responseText, textStatus, req) {
        console.log(arguments);
        if (textStatus == "error") {
          $(pageContentQuery).html(responseText);
        }
    });      
  }

});