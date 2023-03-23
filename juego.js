let opciones = ["PIEDRA", "PAPEL", "TIJERA"];
let user = null;
let pc = null;

function playGame() {
  seleccionPc();
  seleccionJugador();
}

//Funcion para que el bot elija una opcion
function seleccionPc() {
  return (pc = Math.round(Math.random() * 2));
}

function seleccionJugador() {
  user = parseInt(prompt("Ingrese su opción: 0 = PIEDRA | 1 = PAPEL | 2 = TIJERA"));

  if (!isNaN(user)) {
    if (user >= 0 && user <= 2) { 
      switch (true) {
        case user === pc:
          mensajeAlert("EMPATE");
          break;
        case user === 0 && pc === 2:
          mensajeAlert("GANASTE");
          break;
        case user === 1 && pc === 0:
          mensajeAlert("GANASTE");
          break;
        case user === 2 && pc === 1:
          mensajeAlert("GANASTE");
          break;
        default:
          mensajeAlert("PERDISTE");
          break;
      }
    } else {
      mensajeAlert("noOpcion");
    }
  } else {
    mensajeAlert("noNumero");
  }
}

function mensajeAlert(resultado) {
  if (resultado === "noOpcion") {
    alert("ERROR!, No existe la opción elegida");
  }
  if (resultado === "noNumero") {
    alert("ERROR!, Debe ingresar un número entre 0 y 2");
  }

  if (resultado === "GANASTE") {
    alert(
      `GANASTE!, elegiste ${opciones[user]} y el bot eligió ${opciones[pc]} `
    );
  }
  if (resultado === "EMPATE") {
    alert(
      `EMPATE!, ambos eligieron ${opciones[user]}`
    );
  }

  if (resultado === "PERDISTE") {
    alert(
      `PERDISTE!, Elegiste ${opciones[user]} y el bot eligió ${opciones[pc]}`
    );
  }
}


//crea un programa que pida dos numeros y los sume