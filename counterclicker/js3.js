

$(document).ready(function(){


 var count = 0;




$("#clickme").click(function(){
  count++;
  $("#number").html(count);
   $("#number" ).css( "color", "red" );
    

if (count > 50){
  $("#number").html("YOU WON");
}

  });
  
  
  
  var count2=0;
  
  $("#clickme2").click(function(){
  count2++;
  $("#number2").html(count2);
   $("#number2" ).css( "color", "red" );
    

if (count2 > 50){
  $("#number2").html("YOU WON");
}

  });
  
  
  
  
  
  
  
  $("#start").click(function(){
  
var i = 100;
var counterBack = setInterval(function(){
    i--;
    if(i>=0){
        $('.progress-bar').css('width', i+'%');
    } else {
        clearTimeout(counterBack);
    }
}, 1000);
  
  
  });
  
  
  
  
  
  
  
 $('body').keydown(function(e){
     console.log(e.which);
    if (e.which==90){
    $("#clickme").trigger("click");     
    }
    
});


 $('body').keydown(function(e){
     console.log(e.which);
    if (e.which==76){
    $("#clickme2").trigger("click");     
    }
    
});


 
 
  
  
});
