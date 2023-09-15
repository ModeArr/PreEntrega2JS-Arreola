function getNombre(pregunta, def){
    let nombre;
    while (true){
        nombre = prompt(pregunta, def);

        if (nombre !== '' && isNaN(nombre)){
            return nombre;
        }

        confirm("Campo vacío, Por favor intenta de nuevo");
    }
}

function getAnio(pregunta, def){
    let anio;
    while (true){
        anio = Number(prompt(pregunta, def));

        if (anio !== '' && anio >= 2023 && anio <= 2024){
            return anio;
        }

        confirm("Ahora solo estamos aceptando citas para 2023 o 2024");
    }
}

function getMes(pregunta, def){
    let mes;
    while (true){
        mes = Number(prompt(pregunta, def));

        if (mes !== '' && mes >= 1 && mes <= 12){
            return mes;
        }

        confirm("Introduce el numero del mes donde 1 es Enero y 12 es Diciembre");
    }
}

function getDia(pregunta, def){
    let dia;
    while (true){
        dia = prompt(pregunta, def);

        if (dia !== '' && dia >= 1 && dia <= 31){
            return dia;
        }

        confirm("Introduce un dia del mes entre 1 y 31");
    }
}

function getHora(pregunta, def){
    let hora;
    while (true){
        hora = Number(prompt(pregunta, def));

        if (hora !== '' && hora >= 10 && hora <= 17){
            return hora;
        }

        confirm("Agrega una hora correcta, por favor");
    }
}

confirm("¿Quieres hacer una cita nutricional con nosotros?");
let nombre = getNombre("Escribe tu Nombre con la que estará registrada tu cita","Modesto Arreola");
let anio = getAnio("Escribe en que año quieres tu cita, solo puedes ingresar 2023 y 2024", "2023");
let mes = getMes("En que mes quieres tu cita, del 1 al 12, 1 = Enero 12 = Diciembre", "Entre 1 al 12");
let dia = getDia("Escribe el dia en que quieres tu cita, solo puede ser entre 1 y 31", "1 al 31");
let hora = getHora("Escribe el horario en que quiere tu cita de 30 min, el horario es entre 10, 11, 12, 13, 14 ,15 ,16 y 17 horas", "10");

console.log("Tu cita es para el " + dia + "/" + mes + "/" + anio + " a las " + hora + ":00 horas");
console.log("A nombre de " + nombre);

const config = {
    name: "Cita para plan nutricional",
    description: "Esta es tu cita para tu plan nutricional y asesoría, recuerda contar con los datos que se te pide",
    startDate: anio + "-" + mes + "-" + dia,
    startTime: hora + ":00",
    endTime: (hora + 1) + ":00",
    options: ["Apple", "Google", "Outlook.com", "Yahoo"],
    timeZone: "America/Los_Angeles"
  };
  const button = document.getElementById('botonCalendario');
  if (button) {
    button.addEventListener('click', () => atcb_action(config, button));
  }