function display_none() { // Función que oculta todos los días.

  document.getElementById("Domingo").style.display = "none";
  document.getElementById("Lunes").style.display = "none";
  document.getElementById("Martes").style.display = "none";
  document.getElementById("Miercoles").style.display = "none";
  document.getElementById("Jueves").style.display = "none";
  document.getElementById("Viernes").style.display = "none";
  document.getElementById("Sabado").style.display = "none";
  document.getElementById("ABLunes").style.display = "none";
  document.getElementById("ABMartes").style.display = "none";
  document.getElementById("ABMiercoles").style.display = "none";
  document.getElementById("ABJueves").style.display = "none";
  document.getElementById("ABViernes").style.display = "none";
  document.getElementById("contador").style.display = "none";

};

function Ruta_dia(dia) { //Función que devuelve la ruta del día.

  contador = document.getElementById("cli_tot");
  document.getElementById("contador").style.display = "block";

  switch (dia) {
    case 0:
      document.getElementById("Domingo").style.display = "block";
      document.getElementById("contador").style.display = "none";
      break;
    case 1:
      document.getElementById("Lunes").style.display = "block";
      contador.innerHTML = sessionStorage.C_Lunes;
      break;
    case 2:
      document.getElementById("Martes").style.display = "block";
      contador.innerHTML = sessionStorage.C_Martes;
      break;
    case 3:
      document.getElementById("Miercoles").style.display = "block";
      contador.innerHTML = sessionStorage.C_Miercoles;
      break;
    case 4:
      document.getElementById("Jueves").style.display = "block";
      contador.innerHTML = sessionStorage.C_Jueves;
      break;
    case 5:
      document.getElementById("Viernes").style.display = "block";
      contador.innerHTML = sessionStorage.C_Viernes;
      break;
    case 6:
      document.getElementById("Sabado").style.display = "block";
      document.getElementById("contador").style.display = "none";
      break;
  };

};

function RutaABC(dia) { //Función que devuelve la ruta del día ordenada alfabétiamente.

  switch (dia) {
    case 0:
      document.getElementById("Domingo").style.display = "block";
      break;
    case 1:
      document.getElementById("ABLunes").style.display = "block";
      break;
    case 2:
      document.getElementById("ABMartes").style.display = "block";
      break;
    case 3:
      document.getElementById("ABMiercoles").style.display = "block";
      break;
    case 4:
      document.getElementById("ABJueves").style.display = "block";
      break;
    case 5:
      document.getElementById("ABViernes").style.display = "block";
      break;
    case 6:
      document.getElementById("Sabado").style.display = "block";
      break;
  };

};

function ruta_hoy(Primero) { /* Primero indica si es la primera vez que
                                se ejecuta la función. */
  var hoy, lista;

  //Obtengo el día de hoy
  hoy = new Date();

  dia = hoy.getDay();

  // Obtengo la cantidad total de clientes por día
  var lunes = document.getElementById("Lunes").childElementCount;
  var martes = document.getElementById("Martes").childElementCount;
  var miercoles = document.getElementById("Miercoles").childElementCount;
  var jueves = document.getElementById("Jueves").childElementCount;
  var viernes = document.getElementById("Viernes").childElementCount;

  lista = document.getElementById("dias")
  lista.selectedIndex = dia;

  if (Primero) {

    sessionStorage.setItem("C_Lunes", lunes);
    sessionStorage.setItem("C_Martes", martes);
    sessionStorage.setItem("C_Miercoles", miercoles);
    sessionStorage.setItem("C_Jueves", jueves);
    sessionStorage.setItem("C_Viernes", viernes);

    switch (dia) {
      case 1:
        sessionStorage.setItem("C_Hoy", lunes);
        break;
      case 2:
        sessionStorage.setItem("C_Hoy", martes);
        break;
      case 3:
        sessionStorage.setItem("C_Hoy", miercoles);
        break;
      case 4:
        sessionStorage.setItem("C_Hoy", jueves);
        break;
      case 5:
        sessionStorage.setItem("C_Hoy", viernes);
        break;
    }
    document.getElementById("cli_quedan").innerHTML = sessionStorage.C_Hoy + "/";
  };

  ruta();

};

function ruta() {

  var dia, lista, abc, cont_hoy, hoy;

  display_none();

  hoy = new Date();
  cont_hoy = document.getElementById("cli_quedan");

  //Obtengo la opción seleccionada      
  lista = document.getElementById("dias");
  dia = lista.selectedIndex;

  abc = document.getElementById("ABC").checked

  if (dia != hoy.getDay()) { cont_hoy.style.display = "none" }
  else { cont_hoy.style.display = "inline" };

  if (!abc) { Ruta_dia(parseInt(dia)) }
  else { RutaABC(parseInt(dia)) };

}  // Fin ruta.

function dia_ant() {
  var lista, dia;

  lista = document.getElementById("dias");
  dia = lista.selectedIndex;

  if (dia == 0) { dia = 6 }
  else { dia -= 1 };

  lista.selectedIndex = dia;

  ruta();
}

function dia_sig() {
  var lista, dia;

  lista = document.getElementById("dias");
  dia = lista.selectedIndex;

  if (dia == 6) { dia = 0 }
  else { dia += 1 };

  lista.selectedIndex = dia;

  ruta();
}

function Eliminar(AA) {
 // var hoy, lista, abc;

//  lista = document.getElementById("dias");
//  hoy = new Date();
//  dia = lista.selectedIndex;
//  abc = document.getElementById("ABC").checked;
//  if (dia == hoy.getDay()) {
//    if (!abc) {
//      sessionStorage.C_Hoy = Number(sessionStorage.C_Hoy) - 1;/      document.getElementById("cli_quedan").innerHTML = sessionStorage.C_Hoy + "/";
//    };
    AA.parentElement.style.display = "none";
//  };
//}
