class Cita {
    constructor(nombre, anio, mes, dia, hora) {
        this.nombre = nombre;
        this.anio = anio;
        this.mes = mes;
        this.dia = dia;
        this.hora = hora;
        this.fecha = new Date(this.anio, (this.mes - 1), this.dia, this.hora).toJSON(); //se agrega Date() por si se ocupa después
    }
}

function getNombre(pregunta, def) {
    let nombre;
    while (true) {
        nombre = prompt(pregunta, def);

        if (nombre !== '') {
            return nombre;
        }

        confirm("Campo vacío, Por favor intenta de nuevo");
    }
}

function getAnio(pregunta, def) {
    let anio;
    while (true) {
        anio = Number(prompt(pregunta, def));

        if (anio !== '' && anio >= 2023 && anio <= 2024) {
            return anio;
        }

        confirm("Ahora solo estamos aceptando citas para 2023 o 2024");
    }
}

function getMes(pregunta, def) {
    let mes;
    while (true) {
        mes = Number(prompt(pregunta, def));

        if (mes !== '' && mes >= 1 && mes <= 12) {
            return mes;
        }

        confirm("Introduce el numero del mes donde 1 es Enero y 12 es Diciembre");
    }
}

function getDia(pregunta, def) {
    let dia;
    while (true) {
        dia = Number(prompt(pregunta, def));

        if (dia !== '' && dia >= 1 && dia <= 31) {
            return dia;
        }

        confirm("Introduce un dia del mes entre 1 y 31");
    }
}

function getHora(pregunta, def) {
    let hora;
    while (true) {
        hora = Number(prompt(pregunta, def));

        if (hora !== '' && hora >= 10 && hora <= 17) {
            return hora;
        }

        confirm("Agrega una hora correcta, por favor");
    }
}

function validateCalendar(calendario, cita) {
    const duplicado = calendario.filter((obj) => obj.anio === cita.anio && obj.mes === cita.mes && obj.dia === cita.dia && obj.hora === cita.hora);
    return duplicado.length > 0;
}

function form() {
    confirm("¿Quieres hacer una cita nutricional con nosotros?");

    const nombre = getNombre("Escribe tu Nombre con la que estará registrada tu cita", "Modesto Arreola");
    const anio = getAnio("Escribe en que año quieres tu cita, solo puedes ingresar 2023 y 2024", "2023");
    const mes = getMes("En que mes quieres tu cita, del 1 al 12, 1 = Enero 12 = Diciembre", "Entre 1 al 12");
    const dia = getDia("Escribe el dia en que quieres tu cita, solo puede ser entre 1 y 31", "1 al 31");
    const hora = getHora("Escribe el horario en que quiere tu cita de 30 min, el horario es entre 10, 11, 12, 13, 14 ,15 ,16 y 17 horas", "10");
    return new Cita(nombre, anio, mes, dia, hora)
}

//Citas que ya fueron registradas
const calendario = [{
    "nombre": "Modesto Arreola",
    "anio": 2023,
    "mes": 1,
    "dia": 1,
    "hora": 10,
    "fecha": "2023-01-01T16:00:00.000Z"
}]

let cita
while (true) {
    cita = form();

    if (validateCalendar(calendario, cita)) {
        alert('Cita Duplicada')
    } else {
        calendario.push(cita)
        console.log("Tu cita es para el " + cita.dia + "/" + cita.mes + "/" + cita.anio + " a las " + cita.hora + ":00 horas");
        console.log("A nombre de " + cita.nombre);
        break;
    }

}

const config = {
    name: "Cita para plan nutricional",
    description: "Esta es tu cita para tu plan nutricional y asesoría, recuerda contar con los datos que se te pide",
    startDate: cita.anio + "-" + cita.mes + "-" + cita.dia,
    startTime: cita.hora + ":00",
    endTime: (cita.hora + 1) + ":00",
    options: ["Apple", "Google", "Outlook.com", "Yahoo"],
    timeZone: "America/Mexico_City"
};
const button = document.getElementById('botonCalendario');
if (button) {
    button.addEventListener('click', () => atcb_action(config, button));
}