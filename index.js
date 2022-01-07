// $("word").click(function(){
//   var clickedWord = $( this ).attr('align_id');
//   $("word").each(function(index){
//     if ($( this ).attr("align_id") == clickedWord){
//       $(this).animate({
//         backgroundColor: "yellow"
//       }, 250).delay(1000).queue(function(){
//         $(this).animate({
//           backgroundColor: "transparent"
//         }, 1000).dequeue();
//       });
//     }
//   });
// });

// $(document).ready(function(){
//   $.getJSON('french_sent.json',function(data){
//     $.each(data, function(k,v){
//       $("p_src").append("<sent_src id="+Object.keys(data).indexOf(k)+" align_id="+v+">"+k+"</sent_src>");
//     });
//   });
// });

// $(document).ready(function(){
//   $.getJSON('english_sent.json',function(data){
//     $.each(data, function(k,v){
//       $("p_tgt").append("<sent_tgt id="+Object.keys(data).indexOf(k)+" align_id="+v+">"+k+"</sent_tgt>");
//     });
//   });
// });

$(document).ready(function(){
  $.getJSON('x_data.json',function(data){
    $.each(data, function(k,v){
      // console.log(k);
      $.each(v, function(j,w){
        $("sentence_src").append("<word id="+w.word_id+" align_id="+w.align_id+">"+k+" "+"</word>");
      });
    });
  });
});

$(document).ready(function(){
  $.getJSON('y_data.json',function(data){
    $.each(data, function(k,v){
      // console.log(k);
      $.each(v, function(j,w){
        $("sentence_tgt").append("<word id="+w.word_id+" align_id="+w.align_id+">"+k+" "+"</word>");
      });
    });
  });
});


