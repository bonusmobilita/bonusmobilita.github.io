
var buono = document.getElementById("banner-comune");
var searchVal = location.search.substring(1);
        console.log(searchVal);
 
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
 

var searchField = "codiceCatastale";
for (var i=0 ; i < jcontent.length ; i++)
{
    //Ricerca numero (i) comune
    if (jcontent[i][searchField] == searchVal ) {
            //Popolazione superiore a 50000
        if (jcontent[i].popolazione >= 50000) {
            buono.innerHTML += '<div class="alert alert-success" role="alert"><h4 class="alert-heading">Bonus mobilità disponibile</h4><p>Buone notizie, ' + jcontent[i].nome + '  <strong>rientra</strong> tra i comuni in cui è possibile usufuire del bonus mobilità.</p><hr><p class="mb-0">Scopri qui sotto il valore del buono.</p><hr><p class="mb-0">Scopri di piu su <a href="https://bonusmobilita.github.io" class="alert-link">https://bonusmobilita.github.io</a></p></div></div>';
        }
            //Capoluogo di provincia o è Verbania o Carbonia (hanno nomi diversi da quello della provincia e non hanno almeno 50000 abutanti)
            else if (jcontent[i].provincia.nome.includes(jcontent[i].nome) || jcontent[i].nome == "Verbania" || jcontent[i].nome == "Carbonia") {
             buono.innerHTML += '<div class="alert alert-success" role="alert"><h4 class="alert-heading">Bonus mobilità disponibile</h4><p>Buone notizie, ' + jcontent[i].nome + '  <strong>rientra</strong> tra i comuni in cui è possibile usufuire del bonus mobilità.</p><hr><p class="mb-0">Scopri qui sotto il valore del buono.</p><hr><p class="mb-0">Scopri di piu su <a href="https://bonusmobilita.github.io" class="alert-link">https://bonusmobilita.github.io</a></p></div></div>';  
            }
            //Citta metropolitana
            else if (cittametro.includes(jcontent[i].sigla)) {
             buono.innerHTML += '<div class="alert alert-success" role="alert"><h4 class="alert-heading">Bonus mobilità disponibile</h4><p>Buone notizie, ' + jcontent[i].nome + '  <strong>rientra</strong> tra i comuni in cui è possibile usufuire del bonus mobilità.</p><hr><p class="mb-0">Scopri qui sotto il valore del buono.</p><hr><p class="mb-0">Scopri di piu su <a href="https://bonusmobilita.github.io" class="alert-link">https://bonusmobilita.github.io</a></p></div></div>';  
            }
            //Citta non ha buono
            else {
             buono.innerHTML += '<div class="alert alert-warning" role="alert"><h4 class="alert-heading">Bonus mobilità non disponibile</h4><p>Cattive notizie, ' + jcontent[i].nome + '  <strong>non rientra</strong> tra i comuni in cui è possibile usufuire del bonus mobilità.</p><hr><p class="mb-0">Scopri di piu su <a href="https://bonusmobilita.github.io" class="alert-link">https://bonusmobilita.github.io</a></p></div>';
            }
        return i;
    }
    
    
        // Dati errati, comune non trovato
    else if (i == 7903) {
        $('#buono').empty();
      buono.innerHTML += '<div class="alert alert-danger" role="alert"><h4 class="alert-heading">Attenzione</h4><p>Il codice catastale non corrisponde a nessun comune. Se sei l\'amministratore verifica il codice catastale inserito nel campo <strong>data-comune="inserisci-il-codice-catastale-comune"</strong></p><hr><p class="mb-0">Scopri di piu su <a href="https://bonusmobilita.github.io" class="alert-link">https://bonusmobilita.github.io/docs</a></p></div></div>';   
    }
}

 });

