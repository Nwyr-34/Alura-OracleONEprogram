function breakLine(){
    document.write("<br>")
    document.write("<br>")
}

function show(phrase){
    document.write(phrase)
    breakLine()
}

var victorias = parseInt(prompt("Ingrese cantidad de victorias"))
var empates = parseInt(prompt("Ingrese cantidad de Empates"))
//js convierte string a int en operaciones matemáticas
//al unirse con otro string lo concatena
totalScore = victorias * 3 + empates

show("El total de puntos del equipo es: " + totalScore)

if(totalScore > 20)
    show("El equipo esta mejor que el año pasado" )

if(totalScore < 20)
    show("El equipo esta peor que el año pasado" )

if (totalScore == 20)
    show("El equipo esta igual que el año pasado" )


