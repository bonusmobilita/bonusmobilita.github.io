var settings = {
  "async": true,
  "crossDomain": true,
  "url": "/faq.json",
  "contentType" : "josn",
  "method": "GET",
}

var faq = document.getElementById("faq");  
 

$.ajax(settings).done(function (jcontent){
for (var i=0 ; i < jcontent.length ; i++) {
      
   faq.innerHTML += '  <div class="collapse-header" id="heading' + i + '"><button data-toggle="collapse" data-target="#collapse' + i + '" aria-expanded="false" aria-controls="collapse' + i + '">' + jcontent[i].domanda + '</button></div><div id="collapse' + i + '" class="collapse" role="tabpanel" aria-labelledby="heading' + i + '"><div class="collapse-body">' + jcontent[i].risposta + '</div></div>';   
      
      
  }
});
  
  
  
  
