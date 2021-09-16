
//Nombre
function saludo(nombre){
    document.write("Hola, " + " " + nombre + " :)")
} 
saludo("Fiorella");





//Suma
var suma = function(numero1, numero2) {
    var numero1 = numero1;
    var numero2 = numero2;

    return numero1 + numero2;
} 

    document.write(suma(10,20));
    document.write("<br>");
    document.write(suma(100,5));


//Número Máximo
var numeroMaximo = function(valor1,valor2){
    if (valor1 > valor2 ){
        return valor1;
    } 
    return valor2;
} 

document.write("El número máximo es: " + numeroMaximo(50,100));
