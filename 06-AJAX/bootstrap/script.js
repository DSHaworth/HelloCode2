$(function(){

    $('.nav-link').click(function(e) {
  
      let $this = $(this);
      let loadUrl = $this.attr('href');
      
      // Remove 'active' class from all nav-links
      $('.nav-link').removeClass("active");
    
      // Add 'active' class to "this" nav-link
      $this.addClass("active");
      
      loadContent("#content", loadUrl);
      
      return false; // prevent default behavior (href)
    });  
    
    $('.nav-link')[0].click();
  });
  
  // https://api.jquery.com/load/
  function loadContent(target, sourceUrl){
    // Defensive programming - account for Murphy's Law
    $(target).load(sourceUrl, (responseText, textStatus, req) => {
        if (textStatus == "error") {
          $(target).html(responseText);
        }
    });
    //alert("Made the call to get data");
  }