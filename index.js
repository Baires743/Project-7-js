alert(`Juego piedra, papel o tijera\n\nEliga "si" para comenzar\nEliga "no" para terminar el juego`)
let inicioDeJuego = prompt(`Ponga "si" para iniciar\nPara terminar el juego ponga "no"`)

let turnoUsuario
let turnoComputadora  // 0 = piedra, 1 = papel, 2 = tijera
puntosGanados = 0
puntosPerdidos = 0
puntosEmpatados = 0

while (inicioDeJuego !== "no") {
    if (inicioDeJuego === "si") {
        turnoComputadora = Math.floor(Math.random()*3)
        turnoUsuario = prompt(`Tu turno. Que elegis?\npiedra, papel o tijera`).toLowerCase().trim()
        if (turnoUsuario == "piedra" && turnoComputadora == 0) {
            alert(`Tu eligiste ${turnoUsuario}\ny la computadora eligio piedra\n*** EMPATE ***`)
            ++puntosEmpatados
            inicioDeJuego = prompt(`Quiere continuar: "si" o "no`)
        } else if (turnoUsuario == "piedra" && turnoComputadora == 1) {
            alert(`Tu eligiste ${turnoUsuario}\ny la computadora eligio papel\n*** PERDISTE ***`)
            ++puntosPerdidos
            inicioDeJuego = prompt(`Quiere continuar: "si" o "no`)
        } else if (turnoUsuario == "piedra" && turnoComputadora == 2) {
            alert(`Tu eligiste ${turnoUsuario}\ny la computadora eligio tijera\n*** GANASTE ***`)
            ++puntosGanados
            inicioDeJuego = prompt(`Quiere continuar: "si" o "no`)
        } else if (turnoUsuario == "papel" && turnoComputadora == 0) {
            alert(`Tu eligiste ${turnoUsuario}\ny la computadora eligio piedra\n*** GANASTE ***`)
            ++puntosGanados
            inicioDeJuego = prompt(`Quiere continuar: "si" o "no`)
        } else if (turnoUsuario == "papel" && turnoComputadora == 1) {
            alert(`Tu eligiste ${turnoUsuario}\ny la computadora eligio papel\n*** EMPATE ***`)
            ++puntosEmpatados
            inicioDeJuego = prompt(`Quiere continuar: "si" o "no`)
        } else if (turnoUsuario == "papel" && turnoComputadora == 2) {
            alert(`Tu eligiste ${turnoUsuario}\ny la computadora eligio tijera\n*** PERDISTE ***`)
            ++puntosPerdidos
            inicioDeJuego = prompt(`Quiere continuar: "si" o "no`)
        } else if (turnoUsuario == "tijera" && turnoComputadora == 0) {
            alert(`Tu eligiste ${turnoUsuario}\ny la computadora eligio piedra\n*** PERDISTE ***`)
            ++puntosPerdidos
            inicioDeJuego = prompt(`Quiere continuar: "si" o "no`)
        } else if (turnoUsuario == "tijera" && turnoComputadora == 1) {
            alert(`Tu eligiste ${turnoUsuario}\ny la computadora eligio papel\n*** GANASTE ***`)
            ++puntosGanados
            inicioDeJuego = prompt(`Quiere continuar: "si" o "no`)
        } else if (turnoUsuario == "tijera" && turnoComputadora == 2) {
            alert(`Tu eligiste ${turnoUsuario}\ny la computadora eligio tijera\n*** EMPATE ***`)
            ++puntosEmpatados
            inicioDeJuego = prompt(`Quiere continuar: "si" o "no`)
        }
    } else {
        alert("Ponga si o no de respuesta >:(")
        inicioDeJuego = prompt(`Ponga "si" para iniciar\nPara terminar el juego ponga "no"`)
    }
}
alert(`Fin del juego **RESULTADOS**\n\nGano ${puntosGanados} veces\nPerdio ${puntosPerdidos} veces\nEmpato ${puntosEmpatados} veces`)