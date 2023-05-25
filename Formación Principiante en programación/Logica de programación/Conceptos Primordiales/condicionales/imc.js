function saltarlinea(){
    document.write("<br>");
    document.write("<br>");
    document.write("<hr>");
    document.write("<br>");
}

function imprimir(frase){
    document.write(frase);
    saltarlinea()

}

function calcularIMC(peso, altura){
    return imc = peso / (altura*altura )
}

//-----------------------------------
//Interactuando con el usuario 
nombre = prompt("Ingrese su nombre")
pesoInfo =  prompt(nombre +", Ingrese su peso")
alturaInfo = prompt(nombre+", Ingrese su altura")

imcCalculado = calcularIMC(pesoInfo,alturaInfo)
imprimir(nombre + " su IMC calculado es "+ imcCalculado)

if (imcCalculado < 18.5) 
    imprimir("IMC abajo de lo recomendado")
if (imcCalculado > 18.5 && imcCalculado < 25) 
    imprimir("IMC considerado normal")
if (imcCalculado >=25 && imcCalculado < 30 ) 
    imprimir("IMC considerado Sobrebeso (PreObesidad)")
if (imcCalculado >= 30) 
    imprimir("IMC considerando como obesidad")