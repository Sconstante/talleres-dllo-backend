const datos = require("./datos.json");


function puntoUno(estudiantes) {
  return estudiantes
    .filter(estudiante => estudiante.info_extra_curriculares.find(extra => extra.nombre === "INNOVA"))
    .map(estudiante => estudiante.info_personal.correo);
}

console.log(puntoUno(datos))

function puntoDos(estudiantes) {
  // Calcular el promedio de las notas de cada materia y agregarlo a info_matricula
  const estudiantesConPromedio = estudiantes.map(estudiante => {
    const info_matricula = estudiante.info_matricula.map(materia => {
      const totalPeso = materia.notas.reduce((acumulado, n) => acumulado + n.peso, 0);
      const promedio = materia.notas.reduce((acumulado, n) => acumulado + n.nota * n.peso, 0) / totalPeso;
      return { ...materia, promedio };
    });
    return { ...estudiante, info_matricula };
  });

  // Calcular el promedio acumulado de cada estudiante
  const promediosAcumulados = estudiantesConPromedio.map(estudiante => {
    const sumaPromedios = estudiante.info_matricula.reduce((acumulado, materia) => acumulado + materia.promedio, 0);
    const promedioAcumulado = sumaPromedios / estudiante.info_matricula.length;
    return {
      nombreCompleto: `${estudiante.info_personal.nombre} ${estudiante.info_personal.apellido}`,
      semestre: estudiante.info_matricula[0].semestre, // Asumimos que todas las materias son del mismo semestre
      promedioAcumulado
    };
  });

  // Encontrar el mejor estudiante por semestre
  const mejoresEstudiantesPorSemestre = promediosAcumulados.reduce((acumulado, actual) => {
    if (!acumulado[actual.semestre] || actual.promedioAcumulado > acumulado[actual.semestre].promedioAcumulado) {
      acumulado[actual.semestre] = actual;
    }
    return acumulado;
  }, {});

  return Object.values(mejoresEstudiantesPorSemestre).map(est => est.nombreCompleto);
}


console.log(puntoDos(datos));

function puntoTres(estudiantes) {
  const fechaHoy = new Date('2024-09-13');

  function ultimosem(estudiante) {
    const semestres = estudiante.info_matricula.map(materia => materia.semestre);
    return Math.max(...semestres);
  }

  return estudiantes
    .filter(estudiante => ultimosem(estudiante) === 1)
    .map(estudiante => {
      const { nombre, apellido, altura, nacimiento, correo, gender } = estudiante.info_personal;
      const titulo = gender === "M" ? "Sr." : "Sra.";
      const nombreCompleto = `${nombre} ${apellido}`;
      const primerNombre = nombre;
      const primerApellido = apellido;
      const nacimientoFecha = new Date(nacimiento);
      const edad = fechaHoy.getFullYear() - nacimientoFecha.getFullYear() - (fechaHoy.getMonth() < nacimientoFecha.getMonth() || (fechaHoy.getMonth() === nacimientoFecha.getMonth() && fechaHoy.getDate() < nacimientoFecha.getDate()) ? 1 : 0);
      const usuario = `${nombre[0].toLowerCase()}${apellido.toLowerCase()}`;

      return {
        gender,
        titulo,
        nombreCompleto,
        primerNombre,
        primerApellido,
        altura: Math.round(altura * 100), // Convertir altura a cm
        edad,
        nacimiento,
        correo,
        usuario
      };
    });
}

console.log(puntoTres(datos));





    
