$("word").click(function(){
  var clickedWord = $( this ).attr('align_id');
  $("word").each(function(index){
    if ($( this ).attr("align_id") == clickedWord){
      $(this).animate({
        backgroundColor: "yellow"
      }, 250).delay(1000).queue(function(){
        $(this).animate({
          backgroundColor: "transparent"
        }, 1000).dequeue();
      });
    };
  });
});
