$( document ).ready(function() {
    console.log( "ready!" );
    startCounter();
    $("#boton").click(leer);
    $("#pepe").click(pepe);
    drawCanvas();

});

function pepe(){
    $("#cumida").text(" ");
    $("#pepe").toggleClass("cambioBg");
}


function startCounter() {
  var count = 0;

  setInterval(function() {
    $("#counter").text(count++);
  }, 1000);

}

function drawCanvas(){
    var canvas = $("#mycanvas")[0];
    var ctx=canvas.getContext('2d');

    cxt.fillStyle = "rgb(200,0,0)";
    cxt.fillRect=(10,10,15,50);

    ctx.fillStyle="rgba(0,0,200,1)";
    ctx.fillRect=(30,30,55,50);


}


function leer(){
    fs = require('fs');
    fs.readFile('comida.txt', 'utf8', function (err,data) {
        listData = data.split("\n");
        for(i in listData){
            $("#cumida").append("<li>"+listData[i]+"</li>");
        }
    });
}
