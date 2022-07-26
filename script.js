var  x = 1;
var  suma = 0;
var  promedio = 0;
var n = 0;

n = prompt ("Ingrese el numero de nota que desea promediar");

while (x <= n){
    valor=prompt("Ingrese notas" + x);
    valor=parseInt (valor);
    suma=suma+valor;
    x=x+1;
}

promedio=suma/ (x-1);
document.write ("El promedio de notas= "+promedio);