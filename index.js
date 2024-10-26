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
xhttp.open("GET", "books.xml", true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("title");
    document.getElementById("demo").innerHTML =
    x[2].childNodes[0].nodeValue;
}