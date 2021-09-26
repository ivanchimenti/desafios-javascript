alert("Ingrese los datos de los alumnos mayores de 18 años (DNI menor o igual a 46 millones, finaliza con DNI = 0 o con un DNI mayor a 46 millones)")
let dni = parseInt(prompt("Ingrese el DNI del alumno"))
while ((dni<=46000000)&&(dni!=0)) {
    let nombreAlumno = prompt("Ingrese el nombre")
    let apellidoAlumno = prompt("Ingrese el apellido")
    let fechaNacimiento = parseInt(prompt("Ingrese fecha de nacimiento en formato DDMMAAAA"))
    let carrera = prompt("Ingrese la carrera que estudia el alumno")

    document.write("Los datos del alumno son:<br/><br/>")
    document.write(`Nombre: ${nombreAlumno}<br/>
                    Apellido: ${apellidoAlumno}<br/>
                    Fecha de Nacimiento: ${fechaNacimiento}<br/>
                    DNI: ${dni}<br/>
                    Carrera: ${carrera}<br/><br/>`)


    dni = parseInt(prompt("Ingrese el DNI de otro alumno"))
}

