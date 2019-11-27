function africa() {
    document.querySelector("#title").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("#text1").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#zahl1").innerHTML = "" + eu1;
    document.querySelector("#zahl2").innerHTML = "" + eu2;
    document.querySelector("#zahl3").innerHTML = "" + eu3;
    document.querySelector("#zahl4").innerHTML = "" + eu4;
    document.querySelector(".chart").setAttribute('style', 'height:' + eu2 + '%');
}
