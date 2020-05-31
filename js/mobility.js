
 
     var mobility = document.getElementById("mobility");
     
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "/mobility.json",
  "contentType" : "josn",
  "method": "GET",
}


$.ajax(settings).done(function (jcontent){
for (var i=0 ; i < jcontent.length ; i++)
{
    var citta= "";
     for (var x = 0; x < jcontent[i].città.length; x++) {
        citta += '<span class="card-tag">' + jcontent[i].città[x] + '</span> '; }
    
             mobility.innerHTML += '<div class="card card-teaser rounded shadow"><div class="card-body"><div class="top-icon"><img src="' + jcontent[i].logo + '" style="max-height:50px;"><br><br></div>' + citta +'<br><br><h5 class="card-title">' + jcontent[i].slogan + '</h5><p class="card-text">' + jcontent[i].descrizione + '</p><div class="callout ' + jcontent[i].callout + '"><div class="callout-title"><svg class="icon"><use xlink:href="/svg/sprite.svg#it-info-circle"></use></svg>' + jcontent[i].callouttitle + '</div><p>' + jcontent[i].callouttext + '</p></div><div class="it-card-footer"><span class="">Codice promo: <span class="badge badge-pill badge-primary">' + jcontent[i].promo + '</span></span><a class="btn btn-outline-primary" href="' + jcontent[i].link + '" target="_blank">Prova ora</a></div></div></div>';

    }
    mobility.innerHTML += '<div class="card card-teaser rounded shadow"><div class="card-body"><div class="callout note"><div class="callout-title"><svg class="icon"><use xlink:href="/svg/sprite.svg#it-info-circle"></use></svg>Altri in arrivo</div><p>Stiamo lavorando per elencarli tutti...</p></div></div></div>';
});


