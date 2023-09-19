var nom=prompt("Ingrese su nombre");

var preg1=prompt("Como se llama el 1er dia de primavera\nA:Primer dia de primavera\nB:Equinoccio de primavera\nC:Equinoccio de invierno");
if (preg1=="B"){
    preg1=25
}
else{
    preg1=0
}

var preg2=prompt("Que sucede en el polo norte conla primavera\nA:6 meses de luz\nB:6 meses de oscuridad\nC:6 meses de alternancia");
if (preg2=="A"){
    preg2=25
}
else{
    preg2=0
}
var total=preg1+preg2

if (total>=25){
    document.write(nom," sabes de primavera")
}
else{
    document.write(nom," te falta")   
}