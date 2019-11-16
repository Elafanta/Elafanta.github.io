var a:string = "Die Emission von ";
var b:string = "ist ";
var c:string = "kg CO2. Relativ zur Gesamtemission der Welt verursacht ";
var d:string = "damit ";
var e:string = "%. Für ";
var f:string = "hat sich 2018 im Vergleich zu 2008 die Emission um ";
var g:string = "% verändert. 2018 im Vergleich zu 2008 sind das ";
var h:string = "kg CO2.";

var afrika:string = "Afrika ";
var südamerika:string = "Süd Amerika ";
var europa:string = "Europa ";
var nordamerika:string = "Nord Amerika ";
var asien:string = "Asien ";
var australien:string = "Australien ";

var afrika08:number = 1028;
var südamerika08:number = 1132.6;
var europa08:number = 4965.7;
var nordamerika08:number = 6600.4;
var asien08:number = 12954.7;
var australien08:number = 1993;

var afrika18:number = 1235.5;
var südamerika18:number = 1261.5;
var europa18:number = 4209.3;
var nordamerika18:number = 6035.6;
var asien18:number = 16274.1;
var australien18:number = 2100.5;

var gesamt08:number = afrika08+südamerika08+europa08+nordamerika08+asien08+australien08
var gesamt18:number = afrika18+südamerika18+europa18+nordamerika18+asien18+australien18


var luecke1afr: number = (afrika18/gesamt18)*100;
var luecke2afr1:number = ((afrika08/afrika18)*100);    
var luecke2afr:number = 100-luecke2afr1;
var luecke3afr:number = afrika18-afrika08;

console.log(a+afrika+b+afrika18+c+afrika+d+luecke1afr+e+afrika+f+luecke2afr+g+luecke3afr+h);


var luecke1sa: number = (südamerika18/gesamt18)*100;
var luecke2sa1: number = ((südamerika08/südamerika18)*100);
var luecke2sa: number = 100-luecke2sa1;
var luecke3sa: number = südamerika18-südamerika08;

console.log(a+südamerika+b+südamerika18+c+südamerika+d+luecke1sa+e+südamerika+f+luecke2sa+g+luecke3sa+h)


var luecke1eu: number = (europa18/gesamt18)*100;
var luecke2eu1: number = (europa08/europa18)*100;
var luecke2eu: number = 100-luecke2eu1;
var luecke3eu: number = europa18-europa08;

console.log(a+europa+b+europa18+c+europa+d+luecke1eu+e+europa+f+luecke2eu+g+luecke3eu+h)


var luecke1na: number = (nordamerika18/gesamt18)*100;
var luecke2na1: number = (nordamerika08/nordamerika18)*100;
var luecke2na: number = 100-luecke2na1;
var luecke3na: number = nordamerika18-nordamerika08;

console.log(a+nordamerika+b+nordamerika18+c+nordamerika+d+luecke1na+e+nordamerika+f+luecke2na+g+luecke3na+h)


var luecke1as: number = (asien18/gesamt18)*100;
var luecke2as1: number = (asien08/asien18)*100;
var luecke2as: number = 100-luecke2as1;
var luecke3as: number = asien18-asien08;

console.log(a+asien+b+asien18+c+asien+d+luecke1as+e+asien+f+luecke2as+g+luecke3as+h)


var luecke1au: number = (australien18/gesamt18)*100;
var luecke2au1: number = (australien08/australien18)*100;
var luecke2au: number = 100-luecke2au1;
var luecke3au: number = australien18-australien08;

console.log(a+australien+b+australien18+c+australien+d+luecke1au+e+australien+f+luecke2au+g+luecke3au+h)