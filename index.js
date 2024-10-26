function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("index").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://dom1-uralbek.netlify.app/index.txt", true);
  xhttp.send();
}

//dom
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "https://dom1-uralbek.netlify.app/index.xml", true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("logotip");
    document.getElementById("logotip").innerHTML =
    logotip[0].childNodes[0].nodeValue;
}