

$(document).ready(function(){
    
    $("#submit").click(function(){
        search();
    });
    
});
    
    function search() {
    var searchuser = document.getElementById("country").value;
     var link= "https://restcountries.eu/rest/v1/name/"+searchuser;
    console.log(searchuser);
     $.ajax({
  url: link,
  context: document.body
}).done(function(response) {
  console.log(response);
  


    
    $("body").append("<li>"+ "<h3>" +"-----> The Country that you search for is called: " + response[0].name + " <----- </h3>" +"</li>");
    
     $("body").append("<li>" + "<h3>"+ "The Capital is: " + response[0].capital +"</h3>"+ "</li>");
     
      $("body").append("<li>" + "<h3>"+ "The Region is: " + response[0].region +"</h3>"+ "</li>");
     
    $("body").append("<li>" + "<h3>"+ "The Subregion is: " + response[0].subregion +"</h3>"+ "</li>");
    
    $("body").append("<li>" + "<h3>"+ "The Timezone is: " + response[0].timezones +"</h3>"+ "</li>");
    
    $("body").append("<li>" + "<h3>"+ "The Borders of this country are: " + response[0].borders +"</h3>"+ "</li>");
    
    $("body").append( "<li>" + "<h3>" + " The population is: "  +  response[0].population + "</h3>" +"</li>");
    
 
    
    
 
   $("body").append("<li>"+ "<h3>"+ "Alternative spellings:" +"</h3>"+ "</li");
   
for (var i=0; i<response[0].altSpellings.length-1 ;i++){
        
    
    $("body").append( "<ul>" + "<h3>" + response[0].altSpellings[i] + "</h3>"+"</ul>");

}

    $("body").append("<hr>"+"<hr>"+"<hr>"+"<hr>");

});
    
    
}

