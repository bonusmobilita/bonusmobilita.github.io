function getComune(searchVal, provincia)
 {
     // Svuota il campo buono
          $('#buono').empty();
     var buono = document.getElementById("buono");
     // Verifica se i dati sono stati inseriti
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

// Provincie che sono città mteropolitane
var cittametro= "NA MI TO BA BO FI GE VE RC RM PA CT ME"

$.ajax(settings).done(function (jcontent){
 

var searchField = "nome";
for (var i=0 ; i < jcontent.length ; i++)
{
    //Ricerca numero (i) comune
    if (jcontent[i][searchField].toLowerCase() == searchVal.toLowerCase() ) {
        if (jcontent[i].sigla == provincia) {
        console.log("OK");
            //Popolazione superiore a 50000
        if (jcontent[i].popolazione >= 50000) {
            buono.innerHTML += '<div class="alert alert-success" role="alert"><h4 class="alert-heading">Bonus disponibile</h4><p>Buone notizie, ' + jcontent[i].nome + ' (' + provincia + ') <strong>rientra</strong> tra i comuni in cui è possibile usufuire del bonus mobilità.</p><hr><p class="mb-0">Scopri qui sotto il valore del buono.</p></div>';
        }
            //Capoluogo di provincia o è Verbania o Carbonia (hanno nomi diversi da quello della provincia e non hanno almeno 50000 abutanti)
            else if (jcontent[i].provincia.nome.includes(jcontent[i].nome) || jcontent[i].nome == "Verbania" || jcontent[i].nome == "Carbonia") {
             buono.innerHTML += '<div class="alert alert-success" role="alert"><h4 class="alert-heading">Bonus disponibile</h4><p>Buone notizie, ' + jcontent[i].nome + ' (' + provincia + ') <strong>rientra</strong> tra i comuni in cui è possibile usufuire del bonus mobilità.</p><hr><p class="mb-0">Scopri qui sotto il valore del buono.</p></div>';  
            }
            //Citta metropolitana
            else if (cittametro.includes(jcontent[i].sigla)) {
             buono.innerHTML += '<div class="alert alert-success" role="alert"><h4 class="alert-heading">Bonus disponibile</h4><p>Buone notizie, ' + jcontent[i].nome + ' (' + provincia + ') <strong>rientra</strong> tra i comuni in cui è possibile usufuire del bonus mobilità.</p><hr><p class="mb-0">Scopri qui sotto il valore del buono.</p></div>';  
            }
            //Citta non ha buono
            else {
             buono.innerHTML += '<div class="alert alert-warning" role="alert"><h4 class="alert-heading">Bonus non disponibile</h4><p>Cattive notizie, ' + jcontent[i].nome + ' (' + provincia + ') <strong>non rientra</strong> tra i comuni in cui è possibile usufuire del bonus mobilità.</p></div>';
            }
         }
        // Manca la provincia o non corrisponde alla città
        else {
           buono.innerHTML += '<div class="alert alert-danger" role="alert"><h4 class="alert-heading">Attenzione</h4><p>Controlla i dati inseriti</p></div>'; 
        }
                return i;
    }
    
}
    // Dati errati, comune non trovato
    if (i == 7904){
        $('#buono').empty();
      buono.innerHTML += '<div class="alert alert-danger" role="alert"><h4 class="alert-heading">Attenzione</h4><p>Controlla i dati inseriti</p></div>';   
    }
      console.log(i);  
});


 }

