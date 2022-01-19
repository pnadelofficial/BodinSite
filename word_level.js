
$(document).ready(function(){
  $.getJSON('part_data_stanza.json',function(data){
    $.each(data,function(a,b){
      $.each(b, function(c,d){
        $.each(d, function(e,f){
          if(e == "sent_src"){
            $("chap_src").append("<sent_src>");
            $("sent_src").attr("sent_id",function(index){
              return index;
            });
            $.each(f,function(g,h){
              $.each(h, function(i,j){
                $("sent_src").each(function(s){
                  if(s == a){
                    if (typeof j == "object"){
                      $(this).append("<word word_id="+j[0].word_id+" align_id="+ j[0].align_id+" lemma="+j[0].lemma+" pos="+j[0].upos+" relation="+j[0].deprel+" data-toggle="+"tooltip"+">"+j[0].word_text+" "+"</word>")
                    }
                  }
                });
              });
            });
          }
          else{
            $("chap_tgt").append("<sent_tgt>")
            $("sent_tgt").attr("sent_id",function(index){
              return index;
            });
            $.each(f,function(g,h){
              $.each(h, function(i,j){
                $("sent_tgt").each(function(s){
                  if(s == a){
                    if (typeof j == "object"){
                      $(this).append("<word word_id="+j[0].word_id+" align_id="+ j[0].align_id+" lemma="+j[0].lemma+" pos="+j[0].upos+" relation="+j[0].deprel+" feats="+j[0].feats+" data-toggle="+"tooltip"+">"+j[0].word_text+" "+"</word>")
                    }
                  }
                });
              });
            });
          }
        });
      });
    });
    $(function(){
      $('[data-toggle="tooltip"]').tooltip({
        placement: 'auto',
        html: 'true',
        title: function(){if($(this).attr("feats") != 'undefined'){
          return `<ul><li>Lemma: ${$(this).attr("lemma")}</li><li>Part of Speech: ${$(this).attr("pos")}</li><li>UD Relation Tag: ${$(this).attr("relation")}</li><li>Features: ${$(this).attr("feats")}</li></ul>`
        }
        else{
          return `<ul><li>Lemma: ${$(this).attr("lemma")}</li><li>Part of Speech: ${$(this).attr("pos")}</li><li>UD Relation Tag: ${$(this).attr("relation")}</li></ul>`
        }
      }
      });
    });
  });
});

$(document).ready(function(){
  $.getJSON('part_data_latin_stanza_noft.json',function(data){
    $.each(data,function(a,b){
      $.each(b, function(c,d){
        $.each(d, function(e,f){
          if(e == "sent_src"){
          }
          else{
            $("chap_lat").append("<sent_lat>")
            $("sent_lat").attr("sent_id",function(index){
              return index;
            });
            $.each(f,function(g,h){
              $.each(h, function(i,j){
                $("sent_lat").each(function(s){
                  if(s == a){
                    if (typeof j == "object"){
                      $(this).append("<word word_id="+j[0].word_id+" align_id="+ j[0].align_id+" lemma="+j[0].lemma+" pos="+j[0].upos+" relation="+j[0].deprel+" feats="+j[0].feats+" data-toggle="+"tooltip"+">"+j[0].word_text+" "+"</word>")
                    }
                  }
                });
              });
            });
          }
        });
      });
    });
    $(function(){
      $('[data-toggle="tooltip"]').tooltip({
        placement: 'auto',
        html: 'true',
        title: function(){return `<ul><li>Lemma: ${$(this).attr("lemma")}</li><li>Part of Speech: ${$(this).attr("pos")}</li><li>UD Relation Tag: ${$(this).attr("relation")}</li><li>Features: ${$(this).attr("feats")}</li></ul>`}
      });
    });
  });
});

$(document).on("click","word",function(){
  var clickedWord = $( this ).attr('align_id');
  var clickedParent = $( this ).parent().attr("sent_id");
  if(clickedWord !="None"){
  $("word").each(function(index){
    if (($( this ).attr("align_id") == clickedWord) && ($(this).parent().attr("sent_id") == clickedParent)){
      $(this).animate({
        backgroundColor: "yellow"
      }, 250).delay(500).queue(function(){
        $(this).animate({
          backgroundColor: "transparent"
        }, 500).dequeue();
      });
    }
  });
  }
});
