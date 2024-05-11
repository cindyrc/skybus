/* $(document).ready(function(){
    $(".accordion-title").click(function(){
    $(this).parent(".accordion-item").find(".accordion-content").slideToggle();
    $(this).parent(".accordion-item").prevAll(".accordion-item").find(".accordion-content").slideUp();
    $(this).parent(".accordion-item").nextAll(".accordion-item").find(".accordion-content").slideUp();
    });
}); */



$( ".accordion-title" ).on( "click", function() {
    $( ".accordion-content" ).slideToggle( "slow", function() {
        $(".accordion-content").hide();
      // Animation complete.
    });
  });

