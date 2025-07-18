const ramos = [
  const ramos = [
  // 1er semestre
  { codigo: "ESTRAT", nombre: "ESTRATEGIAS DE APRENDIZAJE EN EDUCACIÓN SUPERIOR UNIVERSITARIA", prerrequisitos: [], semestre: 1 },
  { codigo: "FHU", nombre: "FORMACIÓN PERSONAL HUMANÍSTICA", prerrequisitos: [], semestre: 1 },
  { codigo: "CSALUD", nombre: "CIENCIA Y SU APLICACIÓN EN CIENCIAS DE LA SALUD", prerrequisitos: [], semestre: 1 },
  { codigo: "CNAT1", nombre: "CIENCIAS DE LA NATURALEZA I", prerrequisitos: [], semestre: 1 },
  { codigo: "ING1", nombre: "INGLÉS APLICADO A LAS CIENCIAS DE LA SALUD I", prerrequisitos: [], semestre: 1 },

  // 2do semestre
  { codigo: "LCOM", nombre: "LENGUAJE Y COMUNICACIÓN", prerrequisitos: [], semestre: 2 },
  { codigo: "DSOC", nombre: "DENTIDAD SOCIAL, CULTURA GENERAL Y DISCIPLINAS PARTICIPATIVAS", prerrequisitos: [], semestre: 2 },
  { codigo: "ARTE", nombre: "MANIFESTACIONES CULTURALES, ARTE Y DEPORTES", prerrequisitos: [], semestre: 2 },
  { codigo: "CNAT2", nombre: "CIENCIAS DE LA NATURALEZA II", prerrequisitos: ["CNAT1"], semestre: 2 },
  { codigo: "ING2", nombre: "INGLÉS APLICADO A LAS CIENCIAS DE LA SALUD II", prerrequisitos: ["ING1"], semestre: 2 },

  // 3er semestre
  { codigo: "MVOS0001", nombre: "ANATOMÍA ANIMAL", prerrequisitos: ["ESTRAT", "FHU", "CSALUD", "CNAT1", "CNAT2", "ING1", "ING2", "LCOM", "DSOC", "ARTE"], semestre: 3 },
  { codigo: "MVOS0002", nombre: "BIOQUÍMICA", prerrequisitos: ["ESTRAT", "FHU", "CSALUD", "CNAT1", "CNAT2", "ING1", "ING2", "LCOM", "DSOC", "ARTE"], semestre: 3 },
  { codigo: "MVOS0003", nombre: "GENÉTICA ANIMAL", prerrequisitos: ["ESTRAT", "FHU", "CSALUD", "CNAT1", "CNAT2", "ING1", "ING2", "LCOM", "DSOC", "ARTE"], semestre: 3 },
  { codigo: "MVOS0004", nombre: "EMBRIOLOGÍA E HISTOLOGÍA VETERINARIA", prerrequisitos: ["ESTRAT", "FHU", "CSALUD", "CNAT1", "CNAT2", "ING1", "ING2", "LCOM", "DSOC", "ARTE"], semestre: 3 },
  { codigo: "MVOS0005", nombre: "ZOOTECNIA", prerrequisitos: ["ESTRAT", "FHU", "CSALUD", "CNAT1", "CNAT2", "ING1", "ING2", "LCOM", "DSOC", "ARTE"], semestre: 3 },
  { codigo: "MVOS0006", nombre: "ECOLOGÍA Y CONSERVACIÓN DE ECOSISTEMA", prerrequisitos: ["ESTRAT", "FHU", "CSALUD", "CNAT1", "CNAT2", "ING1", "ING2", "LCOM", "DSOC", "ARTE"], semestre: 3 },
  { codigo: "MVOS0007", nombre: "BIOÉTICA, ÉTICA PROFESIONAL Y CONDUCTA RESPONSABLE EN INVESTIGACIÓN VETERINARIA", prerrequisitos: ["ESTRAT", "FHU", "CSALUD", "CNAT1", "CNAT2", "ING1", "ING2", "LCOM", "DSOC", "ARTE"], semestre: 3 },
  { codigo: "MVPPS0001", nombre: "PRÁCTICA EN ANIMALES DOMÉSTICOS", prerrequisitos: ["ESTRAT", "FHU", "CSALUD", "CNAT1", "CNAT2", "ING1", "ING2", "LCOM", "DSOC", "ARTE"], semestre: 3 },

  // 4to semestre
  { codigo: "MVOS0008", nombre: "FISIOLOGÍA ANIMAL I", prerrequisitos: ["MVOS0001", "MVOS0002", "MVOS0004"], semestre: 4 },
  { codigo: "MVOS0009", nombre: "PARASITOLOGÍA VETERINARIA", prerrequisitos: ["MVOS0002", "MVOS0003"], semestre: 4 },
  { codigo: "MVOS0010", nombre: "BIOESTADÍSTICA", prerrequisitos: [], semestre: 4 },
  { codigo: "MVOS0011", nombre: "VIROLOGÍA VETERINARIA", prerrequisitos: ["MVOS0002", "MVOS0003"], semestre: 4 },
  { codigo: "MVOS0012", nombre: "BACTERIOLOGÍA Y MICOLOGÍA VETERINARIA", prerrequisitos: ["MVOS0002", "MVOS0003"], semestre: 4 },
  { codigo: "MVOS0013", nombre: "METODOLOGÍA DE LA INVESTIGACIÓN", prerrequisitos: ["MVOS0007"], semestre: 4 },
  { codigo: "MVCS0001", nombre: "TÉCNICAS DE DIAGNÓSTICO VETERINARIO I", prerrequisitos: [], semestre: 4 },
  { codigo: "MVCS0002", nombre: "MANEJO DE INSTRUMENTAL Y EQUIPO DE LABORATORIO", prerrequisitos: [], semestre: 4 },

  // 5to semestre
  { codigo: "MVOS0014", nombre: "FARMACOLOGÍA VETERINARIA", prerrequisitos: ["MVOS0008"], semestre: 5 },
  { codigo: "MVOS0015", nombre: "PATOLOGÍA VETERINARIA GENERAL", prerrequisitos: ["MVOS0004", "MVOS0007", "MVOS0008", "MVOS0010", "MVOS0011", "MVOS0012"], semestre: 5 },
  { codigo: "MVOS0016", nombre: "NUTRICIÓN ANIMAL", prerrequisitos: ["MVOS0007"], semestre: 5 },
  { codigo: "MVOS0017", nombre: "ETOLOGÍA Y BIENESTAR ANIMAL", prerrequisitos: ["MVOS0007"], semestre: 5 },
  { codigo: "MVOS0018", nombre: "INMUNOLOGÍA VETERINARIA", prerrequisitos: ["MVOS0007", "MVOS0008", "MVOS0010", "MVOS0011"], semestre: 5 },
  { codigo: "MVOS0019", nombre: "FISIOLOGÍA ANIMAL II", prerrequisitos: ["MVOS0007"], semestre: 5 },
  { codigo: "MVPPS0002", nombre: "PRÁCTICA INYECTABLES, TOMA Y REMISIÓN DE MUESTRAS", prerrequisitos: ["MVPPS0001"], semestre: 5 },
  { codigo: "MVPPS0003", nombre: "PRÁCTICA EN PRINCIPIOS DEL EXAMEN FÍSICO", prerrequisitos: ["MVPPS0001"], semestre: 5 },

  // 6to semestre
  { codigo: "MVOS0020", nombre: "MEJORAMIENTO GENÉTICO ANIMAL", prerrequisitos: ["MVOS0003", "MVOS0009"], semestre: 6 },
  { codigo: "MVOS0021", nombre: "PATOLOGÍA VETERINARIA SISTÉMICA", prerrequisitos: ["MVOS0015"], semestre: 6 },
  { codigo: "MVOS0022", nombre: "ALIMENTACIÓN ANIMAL", prerrequisitos: ["MVOS0016"], semestre: 6 },
  { codigo: "MVOS0023", nombre: "TOXICOLOGÍA VETERINARIA", prerrequisitos: ["MVOS0014"], semestre: 6 },
  { codigo: "MVOS0024", nombre: "LABORATORIO CLÍNICO VETERINARIO", prerrequisitos: ["MVOS0015", "MVOS0018"], semestre: 6 },
  { codigo: "MVCS0003", nombre: "TÉCNICAS DE DIAGNÓSTICO VETERINARIO II", prerrequisitos: ["MVCS0002"], semestre: 6 },
  { codigo: "MVPPS0004", nombre: "PRÁCTICA EN BACTERIOLOGÍA Y MICOLOGÍA VETERINARIA", prerrequisitos: ["MVPPS0002", "MVPPS0003"], semestre: 6 },
  { codigo: "MVPPS0005", nombre: "PRÁCTICA EN PARASITOLOGÍA VETERINARIA", prerrequisitos: ["MVPPS0002", "MVPPS0003"], semestre: 6 },
  { codigo: "MVPPS0006", nombre: "PRÁCTICA EN VIROLOGÍA VETERINARIA", prerrequisitos: ["MVPPS0002", "MVPPS0003"], semestre: 6 },
  { codigo: "MVPPS0007", nombre: "PRÁCTICA EN BIOLOGÍA MOLECULAR", prerrequisitos: ["MVPPS0002", "MVPPS0003"], semestre: 6 },

  // 7mo semestre
  { codigo: "MVOS0025", nombre: "ENFERMEDADES VIRALES EN VETERINARIA", prerrequisitos: ["MVOS0021"], semestre: 7 },
  { codigo: "MVOS0026", nombre: "ENFERMEDADES BACTERIANAS Y MICÓTICAS EN VETERINARIA", prerrequisitos: ["MVOS0021"], semestre: 7 },
  { codigo: "MVOS0027", nombre: "ENFERMEDADES PARASITARIAS EN VETERINARIA", prerrequisitos: ["MVOS0021"], semestre: 7 },
  { codigo: "MVOS0028", nombre: "FISIOLOGÍA DE LA REPRODUCCIÓN ANIMAL", prerrequisitos: ["MVOS0007", "MVOS0005"], semestre: 7 },
  { codigo: "MVOS0029", nombre: "LEGISLACIÓN DE LA MEDICINA VETERINARIA", prerrequisitos: ["MVOS0012"], semestre: 7 },
  { codigo: "MVOS0030", nombre: "EPIDEMIOLOGÍA VETERINARIA", prerrequisitos: ["MVOS0009", "MVOS0025", "MVOS0026", "MVOS0027"], semestre: 7 },
  { codigo: "MVCS0004", nombre: "ANÁLISIS FISICO-QUÍMICO Y MICROBIOLÓGICO DE ALIMENTOS", prerrequisitos: ["MVCS0003"], semestre: 7 },
  { codigo: "MVPPS0008", nombre: "PRÁCTICA EN PATOLOGÍA VETERINARIA", prerrequisitos: ["MVPPS0004", "MVPPS0005", "MVPPS0006", "MVPPS0007"], semestre: 7 },
  { codigo: "MVPPS0009", nombre: "PRÁCTICA EN MANEJO DE ESPECIES MENORES DE PRODUCCIÓN", prerrequisitos: ["MVPPS0004", "MVPPS0005", "MVPPS0006", "MVPPS0007"], semestre: 7 },
  { codigo: "MVPPS0010", nombre: "PRÁCTICA EN MANEJO DE ESPECIES MAYORES DE PRODUCCIÓN", prerrequisitos: ["MVPPS0004", "MVPPS0005", "MVPPS0006", "MVPPS0007"], semestre: 7 },

  // 8vo semestre
  { codigo: "MVOS0031", nombre: "TERIOGENOLOGÍA", prerrequisitos: ["MVOS0028", "MVOS0014", "MVOS0021"], semestre: 8 },
  { codigo: "MVOS0032", nombre: "ANATOMÍA REGIONAL E IMAGENOLOGÍA VETERINARIA", prerrequisitos: ["MVOS0001", "MVOS0021"], semestre: 8 },
  { codigo: "MVOS0033", nombre: "ECONOMÍA Y CONTABILIDAD AGROPECUARIA", prerrequisitos: ["MVOS0009"], semestre: 8 },
  { codigo: "MVOS0034", nombre: "METODOLOGÍA DE INVESTIGACIÓN EN CIENCIAS VETERINARIAS", prerrequisitos: ["MVOS0013"], semestre: 8 },
  { codigo: "MVOS0035", nombre: "ANESTESIA VETERINARIA", prerrequisitos: ["MVOS0023", "MVOS0019"], semestre: 8 },
  { codigo: "MVOS0036", nombre: "SEMIOTECNIA VETERINARIA", prerrequisitos: ["MVOS0005", "MVOS0025", "MVOS0026", "MVOS0027"], semestre: 8 },
  { codigo: "MVCS0005", nombre: "MANEJO DE INSTRUMENTAL QUIRÚRGICO Y EQUIPOS AUXILIARES", prerrequisitos: ["MVCS0004", "MVOS0021"], semestre: 8 },
  { codigo: "MVPPS0011", nombre: "PRÁCTICA EN HEMATOLOGÍA Y BIOQUÍMICA CLÍNICA VETERINARIA", prerrequisitos: ["MVCS0004"], semestre: 8 },
  { codigo: "MVPPS0012", nombre: "PRÁCTICA EN ANIMALES SILVESTRES", prerrequisitos: ["MVCS0004"], semestre: 8 },

  // 9no semestre
  { codigo: "MVOS0037", nombre: "MEDICINA DE MAMÍFEROS MONOGÁSTRICOS", prerrequisitos: ["MVOS0005", "MVOS0025", "MVOS0026", "MVOS0027"], semestre: 9 },
  { codigo: "MVOS0038", nombre: "MEDICINA DE RUMIANTES Y CAMÉLIDOS", prerrequisitos: ["MVOS0005", "MVOS0025", "MVOS0026", "MVOS0027"], semestre: 9 },
  { codigo: "MVOS0039", nombre: "PRODUCCIÓN DE MAMÍFEROS MONOGÁSTRICOS", prerrequisitos: ["MVOS0019", "MVOS0031"], semestre: 9 },
  { codigo: "MVOS0040", nombre: "PRODUCCIÓN DE RUMIANTES Y CAMÉLIDOS SUDAMERICANOS", prerrequisitos: ["MVOS0019", "MVOS0031"], semestre: 9 },
  { codigo: "MVOS0041", nombre: "TECNOLOGÍA E HIGIENE DE LOS ALIMENTOS", prerrequisitos: ["MVOS0005", "MVOS0025", "MVOS0026", "MVOS0027"], semestre: 9 },
  { codigo: "MVOS0042", nombre: "SALUD AMBIENTAL", prerrequisitos: ["MVOS0030"], semestre: 9 },

  // 10mo semestre
  { codigo: "MVOS0043", nombre: "SANIDAD Y PRODUCCIÓN DE ORGANISMOS ACUÁTICOS", prerrequisitos: ["MVOS0005", "MVOS0025", "MVOS0026", "MVOS0027", "MVOS0019"], semestre: 10 },
  { codigo: "MVOS0044", nombre: "MEDICINA DE AVES", prerrequisitos: ["MVOS0005", "MVOS0025", "MVOS0026", "MVOS0027", "MVOS0019", "MVOS0021"], semestre: 10 },
  { codigo: "MVOS0045", nombre: "PRODUCCIÓN AVÍCOLA", prerrequisitos: ["MVOS0031", "MVOS0019"], semestre: 10 },
  { codigo: "MVOS0046", nombre: "ADMINISTRACIÓN Y GESTIÓN DE EMPRESAS VETERINARIAS", prerrequisitos: ["MVOS0033"], semestre: 10 },
  { codigo: "MVOS0047", nombre: "INSPECCIÓN Y CERTIFICACIÓN DE LOS ALIMENTOS", prerrequisitos: ["MVOS0041"], semestre: 10 },
  { codigo: "MVOS0048", nombre: "INTRODUCCIÓN A LA MEDICINA VETERINARIA DE LA CONSERVACIÓN", prerrequisitos: ["MVOS0006"], semestre: 10 },
  { codigo: "MVOS0049", nombre: "SEMINARIO DE TESIS", prerrequisitos: ["MVOS0034"], semestre: 10 },

  // 11vo semestre
  { codigo: "MVOS0050", nombre: "TÉCNICAS QUIRÚRGICAS Y CIRUGÍA VETERINARIA", prerrequisitos: ["MVOS0032"], semestre: 11 },
  { codigo: "MVOS0051", nombre: "MEDICINA DE MASCOTAS", prerrequisitos: ["MVOS0005", "MVOS0025", "MVOS0026", "MVOS0027"], semestre: 11 },
  { codigo: "MVOS0052", nombre: "FORMULACIÓN Y ADMINISTRACIÓN DE PROYECTOS DE SALUD Y DESARROLLO AGROPECUARIO", prerrequisitos: ["MVOS0046"], semestre: 11 },
  { codigo: "MVOS0053", nombre: "GESTIÓN DE FAUNA SILVESTRE EX SITU", prerrequisitos: ["MVOS0048"], semestre: 11 },
  { codigo: "MVOS0054", nombre: "ZOONOSIS Y EDUCACIÓN SANITARIA", prerrequisitos: ["MVOS0042"], semestre: 11 },

  // 12vo semestre
  { codigo: "MVPPS0029", nombre: "INTERNADO EN MEDICINA Y SALUD ANIMAL", prerrequisitos: ["MVOS0050", "MVOS0051", "MVOS0052", "MVOS0053", "MVOS0054"], semestre: 12 },
  { codigo: "MVPPS0030", nombre: "INTERNADO EN PRODUCCIÓN Y ECONOMÍA PECUARIAS", prerrequisitos: ["MVOS0050", "MVOS0051", "MVOS0052", "MVOS0053", "MVOS0054"], semestre: 12 },
  { codigo: "MVPPS0031", nombre: "INTERNADO EN INOCUIDAD ALIMENTARIA", prerrequisitos: ["MVOS0050", "MVOS0051", "MVOS0052", "MVOS0053", "MVOS0054"], semestre: 12 },
  { codigo: "MVPPS0032", nombre: "INTERNADO EN SALUD PÚBLICA VETERINARIA", prerrequisitos: ["MVOS0050", "MVOS0051", "MVOS0052", "MVOS0053", "MVOS0054"], semestre: 12 },
  { codigo: "MVPPS0033", nombre: "INTERNADO EN CONSERVACIÓN Y GESTIÓN DE FAUNA SILVESTRE Y CUIDADO DE ECOSISTEMAS", prerrequisitos: ["MVOS0050", "MVOS0051", "MVOS0052", "MVOS0053", "MVOS0054"], semestre: 12 },
  { codigo: "MVPPS0034", nombre: "TESIS", prerrequisitos: ["MVOS0050", "MVOS0051", "MVOS0052", "MVOS0053", "MVOS0054"], semestre: 12 }
];


const container = document.getElementById("malla");

function cargarEstado(codigo) {
  return localStorage.getItem("aprobado_" + codigo) === "true";
}

function guardarEstado(codigo, estado) {
  localStorage.setItem("aprobado_" + codigo, estado);
}

function actualizarEstado() {
  ramos.forEach(({ codigo, prerrequisitos }) => {
    const el = document.querySelector(`[data-codigo="${codigo}"]`);
    const aprobado = cargarEstado(codigo);
    const requisitosCumplidos = prerrequisitos.every(c => cargarEstado(c));
    if (aprobado) {
      el.classList.add("aprobado");
      el.classList.remove("bloqueado");
    } else if (!requisitosCumplidos && prerrequisitos.length > 0) {
      el.classList.add("bloqueado");
      el.classList.remove("aprobado");
    } else {
      el.classList.remove("bloqueado");
    }
  });
}

function crearRamo({ codigo, nombre }) {
  const div = document.createElement("div");
  div.className = "ramo";
  div.textContent = nombre;
  div.dataset.codigo = codigo;

  div.addEventListener("click", () => {
    if (div.classList.contains("bloqueado")) return;
    const aprobado = div.classList.toggle("aprobado");
    guardarEstado(codigo, aprobado);
    actualizarEstado();
  });

  return div;
}

function renderRamosPorSemestre() {
  const semestres = {};
  ramos.forEach(r => {
    if (!semestres[r.semestre]) semestres[r.semestre] = [];
    semestres[r.semestre].push(r);
  });

  Object.keys(semestres).sort((a, b) => parseInt(a) - parseInt(b)).forEach(num => {
    const contenedor = document.createElement("div");
    contenedor.className = "semestre-bloque";

    const titulo = document.createElement("h2");
    titulo.textContent = `${num}º Semestre`;
    contenedor.appendChild(titulo);

    const fila = document.createElement("div");
    fila.className = "fila-ramos";
    semestres[num].forEach(r => fila.appendChild(crearRamo(r)));

    contenedor.appendChild(fila);
    container.appendChild(contenedor);
  });
}

renderRamosPorSemestre();
actualizarEstado();


