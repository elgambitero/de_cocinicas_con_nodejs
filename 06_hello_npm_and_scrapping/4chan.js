/*
*
*/

var request = require("request"),
  cheerio = require("cheerio"),
  url = "http://boards.4chan.org/vr/catalog";

//setInterval(getDooMThread, 2000);
getDooMThread();

function getLastNews () {
  request(url, function (error, response, body) {
    if (!error) {
      var $ = cheerio.load(body),
        //nombre y primer voto
        primera_noticia = $("#newswrap .news-summary")[0];
        var votos = $(primera_noticia).find(".votes").text().split(" ")[1];
        var nombre = $(primera_noticia).find("h2").text();

        console.log(nombre + " --> " + votos);

    } else {
      console.log("error: " + error);
    }
  });
}

function getDooMThread(){
    request(url, function (error, response, body){
       if(!error){
           var $ = cheerio.load(body);
           catalog = $("#content .threads");
           teaser = $("#thread-2928105").find("b").text();
           console.log(teaser);
       }
       else{
           console.log("error: " + error);
       }
    });
}
