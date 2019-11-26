var a = "Die Emission von ";
var b = "ist ";
var c = "kg CO2. Relativ zur Gesamtemission der Welt verursacht ";
var d = "damit ";
var e = "%. Für ";
var f = "hat sich 2018 im Vergleich zu 2008 die Emission um ";
var g = "% verändert. 2018 im Vergleich zu 2008 sind das ";
var h = "kg CO2.";
var afrika = "Afrika ";
var südamerika = "Süd Amerika ";
var europa = "Europa ";
var nordamerika = "Nord Amerika ";
var asien = "Asien ";
var australien = "Australien ";
var afrika08 = 1028;
var südamerika08 = 1132.6;
var europa08 = 4965.7;
var nordamerika08 = 6600.4;
var asien08 = 12954.7;
var australien08 = 1993;
var afrika18 = 1235.5;
var südamerika18 = 1261.5;
var europa18 = 4209.3;
var nordamerika18 = 6035.6;
var asien18 = 16274.1;
var australien18 = 2100.5;
var gesamt08 = afrika08 + südamerika08 + europa08 + nordamerika08 + asien08 + australien08;
var gesamt18 = afrika18 + südamerika18 + europa18 + nordamerika18 + asien18 + australien18;
var afr1 = (afrika18 / gesamt18) * 100;
var afr2 = ((afrika08 / afrika18) * 100);
var afr3 = 100 - afr2;
var afr4 = afrika18 - afrika08;
console.log(a + afrika + b + afrika18 + c + afrika + d + afr1 + e + afrika + f + afr3 + g + afr4 + h);
var sa1 = (südamerika18 / gesamt18) * 100;
var sa2 = ((südamerika08 / südamerika18) * 100);
var sa3 = 100 - sa2;
var sa4 = südamerika18 - südamerika08;
console.log(a + südamerika + b + südamerika18 + c + südamerika + d + sa1 + e + südamerika + f + sa3 + g + sa4 + h);
var eu1 = (europa18 / gesamt18) * 100;
var eu2 = (europa08 / europa18) * 100;
var eu3 = 100 - eu2;
var eu4 = europa18 - europa08;
console.log(a + europa + b + europa18 + c + europa + d + eu1 + e + europa + f + eu3 + g + eu4 + h);
var na1 = (nordamerika18 / gesamt18) * 100;
var na2 = (nordamerika08 / nordamerika18) * 100;
var na3 = 100 - na2;
var na4 = nordamerika18 - nordamerika08;
console.log(a + nordamerika + b + nordamerika18 + c + nordamerika + d + na1 + e + nordamerika + f + na3 + g + na4 + h);
var as1 = (asien18 / gesamt18) * 100;
var as2 = (asien08 / asien18) * 100;
var as3 = 100 - as2;
var as4 = asien18 - asien08;
console.log(a + asien + b + asien18 + c + asien + d + as1 + e + asien + f + as3 + g + as4 + h);
var au1 = (australien18 / gesamt18) * 100;
var au2 = (australien08 / australien18) * 100;
var au3 = 100 - au2;
var au4 = australien18 - australien08;
console.log(a + australien + b + australien18 + c + australien + d + au1 + e + australien + f + au3 + g + au4 + h);
function europe() {
    document.querySelector("#title").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("#text1").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#zahl1").innerHTML = "" + eu1;
    document.querySelector("#zahl2").innerHTML = "" + eu2;
    document.querySelector("#zahl3").innerHTML = "" + eu3;
    document.querySelector("#zahl4").innerHTML = "" + eu4;
    document.querySelector(".chart").setAttribute('style', 'height:' + eu2 + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#Europe').addEventListener('click', europe);
});
function northamerica() {
    document.querySelector("#title").innerHTML = "Carbon Dioxide Emissions in Nordthamerica";
    document.querySelector("#text1").innerHTML = "Emission absolute of Northamerica in 2018";
    document.querySelector("#zahl1").innerHTML = "" + na1;
    document.querySelector("#zahl2").innerHTML = "" + na2;
    document.querySelector("#zahl3").innerHTML = "" + na3;
    document.querySelector("#zahl4").innerHTML = "" + na4;
    document.querySelector(".chart").setAttribute('style', 'height:' + na2 + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#northamerica').addEventListener('click', northamerica);
});
function southamerica() {
    document.querySelector("#title").innerHTML = "Carbon Dioxide Emissions in Southamerica";
    document.querySelector("#text1").innerHTML = "Emission absolute of Southamerica in 2018";
    document.querySelector("#zahl1").innerHTML = "" + sa1;
    document.querySelector("#zahl2").innerHTML = "" + sa2;
    document.querySelector("#zahl3").innerHTML = "" + sa3;
    document.querySelector("#zahl4").innerHTML = "" + sa4;
    document.querySelector(".chart").setAttribute('style', 'height:' + sa2 + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#southamerica').addEventListener('click', southamerica);
});
function afric() {
    document.querySelector("#title").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector("#text1").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector("#zahl1").innerHTML = "" + afr1;
    document.querySelector("#zahl2").innerHTML = "" + afr2;
    document.querySelector("#zahl3").innerHTML = "" + afr3;
    document.querySelector("#zahl4").innerHTML = "" + afr4;
    document.querySelector(".chart").setAttribute('style', 'height:' + afr2 + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#afric').addEventListener('click', afric);
});
//# sourceMappingURL=Aufgabe6.js.map