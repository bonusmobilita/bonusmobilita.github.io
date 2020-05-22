function getComune(searchVal, provincia)
 {
          $('#buono').empty();
     var buono = document.getElementById("buono");
     if (searchVal == "") {
           buono.innerHTML += '<div class="alert alert-danger" role="alert"><h4 class="alert-heading">Attenzione</h4><p>Completa i campi richiesti</p></div>';
}
 
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "/comuni.json",
  "contentType" : "josn",
  "method": "GET",
}




$.ajax(settings).done(function (jcontent){
 

var searchField = "nome";
for (var i=0 ; i < jcontent.length ; i++)
{
    if (jcontent[i][searchField] == searchVal ) {
        if (jcontent[i].sigla == provincia) {
        console.log("OK");
        if (jcontent[i].popolazione >= 50000) {
            buono.innerHTML += '<div class="alert alert-success" role="alert"><h4 class="alert-heading">Bonus disponibile</h4><p>Buone notizie, ' + jcontent[i].nome + ' (' + provincia + ') <strong>rientra</strong> tra i comuni in cui è possibile usufuire del bonus mobilità.</p><hr><p class="mb-0">Scopri qui sotti il valore del buono.</p></div>';
        }
            else if (jcontent[i].nome == jcontent[i].provincia.nome) {
             buono.innerHTML += '<div class="alert alert-danger" role="alert"><h4 class="alert-heading">Bonus non disponibile</h4><p>Cattive notizie, ' + jcontent[i].nome + ' (' + provincia + ') <strong>non rientra</strong> tra i comuni in cui è possibile usufuire del bonus mobilità.</p></div>';  
            }
            else {
             buono.innerHTML += '<div class="alert alert-danger" role="alert"><h4 class="alert-heading">Bonus non disponibile</h4><p>Cattive notizie, ' + jcontent[i].nome + ' (' + provincia + ') <strong>non rientra</strong> tra i comuni in cui è possibile usufuire del bonus mobilità.</p></div>';
            }
         }
        else if (jcontent[i].nome == ""){
           buono.innerHTML += '<div class="alert alert-danger" role="alert"><h4 class="alert-heading">Attenzione</h4><p>Controlla i dati inseriti</p></div>'; 
        }
        else {
           buono.innerHTML += '<div class="alert alert-danger" role="alert"><h4 class="alert-heading">Attenzione</h4><p>Controlla i dati inseriti</p></div>'; 
        }
    }
    
}
        
});


 }

