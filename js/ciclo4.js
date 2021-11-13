var miBoton4 = document.getElementById("miBoton4");
miBoton4.onclick = leer;

function leer() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      Funciones(this);
    }
  };
  xhttp.open("GET", "../xml/ciclo4.xml", true);
  xhttp.send();
}


function Funciones(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Nombre</th><th>Codigo</th><th>Descripcion</th></tr>";
  var x = xmlDoc.getElementsByTagName("materia");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue +
    "</td></tr>" ;
  }
document.getElementById("ciclo4").innerHTML = table;
}