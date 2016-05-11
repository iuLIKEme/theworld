
$( document ).ready(function() {




 

// body.append("<img src= " + response.data[2].images.fixed_height.url +">");




console.log( "ready!" );
});


function search() {
    var searchuser = document.getElementById("x").value;
    var link= "https://api.giphy.com/v1/gifs/search?q="+searchuser+"&api_key=dc6zaTOxFJmzC";
    console.log(searchuser);
    
     $.ajax({
  url: link,
  context: document.body
}).done(function(response) {
  console.log(response);
  
  for (var i=0; i<response.data.length ;i++){
    
    $("body").append("<img src= " + response.data[i].images.fixed_height.url +">");

    }
});
    
    
}



//*console.log(response.data[2].images.fixed_height.url)