//abreviatura de equipos, dato constante
const nombredeEquipos = ["BVB", "LIV"]

//contador de goles, datos variable
let GolesLocal = 0
let GolesVisitante = 0
let goles = [GolesLocal,GolesVisitante]

//mensaje al usuario, dato variable
let mensaje= "esta mejor un partido del Puebla, y eso es malo"

//Nombres y Dorsales de Jugadores
let Jugadores= [
    ["J. Milner", 7, 100],
    ["P. Coutinho", 8, 100],
    ["G Wijnaldum", 5, 100]
]

// Barra de Energía del Jugador
let barraEnergia = 95*60

console.log("1. Abreviatura de equipos: ",nombredeEquipos);
console.log("2. Contador de goles. Marcador:",goles);
console.log("3. Mensajes al usuario:",mensaje);
console.log("");
console.log("4 y 5 nombre y dorsal de jugadores (se uso console.table()");
console.table( Jugadores);
console.log("Barra de Energía inicial:",barraEnergia,"segundos de energía");

// 7. El número de goles aumenta cuando el equipo marca con el operador ++
GolesLocal++
GolesVisitante++
goles = [GolesVisitante, GolesLocal]

console.log("7. El número de goles aumenta cuando el equipo marca con el operador ++ :",goles);

// 8. El número de segundos que debe intervenir para que disminuya la energía también se almacena en una variable que dependerá de cada jugador

let tiempoTranscurrido = 1*60 // minutos de partido * segundos 

// 9. La barra de energía disminuye cada X segundos de intervención del jugador con el operador --
barraEnergia -= tiempoTranscurrido
console.log("La barra de energía después de un minuto de partido es de ",barraEnergia);