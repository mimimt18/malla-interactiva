const ramos = [
  // 1er semestre
  { codigo: "ESTRAT", nombre: "ESTRATEGIAS DE APRENDIZAJE EN EDUCACIÓN SUPERIOR UNIVERSITARIA", prerrequisitos: [] },
  { codigo: "FHU", nombre: "FORMACIÓN PERSONAL HUMANÍSTICA", prerrequisitos: [] },
  { codigo: "CSALUD", nombre: "CIENCIA Y SU APLICACIÓN EN CIENCIAS DE LA SALUD", prerrequisitos: [] },
  { codigo: "CNAT1", nombre: "CIENCIAS DE LA NATURALEZA I", prerrequisitos: [] },
  { codigo: "ING1", nombre: "INGLÉS APLICADO A LAS CIENCIAS DE LA SALUD I", prerrequisitos: [] },

  // 2do semestre
  { codigo: "LCOM", nombre: "LENGUAJE Y COMUNICACIÓN", prerrequisitos: [] },
  { codigo: "DSOC", nombre: "DENTIDAD SOCIAL, CULTURA GENERAL Y DISCIPLINAS PARTICIPATIVAS", prerrequisitos: [] },
  { codigo: "ARTE", nombre: "MANIFESTACIONES CULTURALES, ARTE Y DEPORTES", prerrequisitos: [] },
  { codigo: "CNAT2", nombre: "CIENCIAS DE LA NATURALEZA II", prerrequisitos: ["CNAT1"] },
  { codigo: "ING2", nombre: "INGLÉS APLICADO A LAS CIENCIAS DE LA SALUD II", prerrequisitos: ["ING1"] },

  // 3er semestre (requiere todos los estudios generales)
  { codigo: "MVOS0001", nombre: "ANATOMÍA ANIMAL", prerrequisitos: ["ESTRAT", "FHU", "CSALUD", "CNAT1", "CNAT2", "ING1", "ING2", "LCOM", "DSOC", "ARTE"] },
  { codigo: "MVOS0002", nombre: "BIOQUÍMICA", prerrequisitos: ["ESTRAT", "FHU", "CSALUD", "CNAT1", "CNAT2", "ING1", "ING2", "LCOM", "DSOC", "ARTE"] },
  { codigo: "MVOS0003", nombre: "GENÉTICA ANIMAL", prerrequisitos: ["ESTRAT", "FHU", "CSALUD", "CNAT1", "CNAT2", "ING1", "ING2", "LCOM", "DSOC", "ARTE"] },
  { codigo: "MVOS0004", nombre: "EMBRIOLOGÍA E HISTOLOGÍA VETERINARIA", prerrequisitos: ["ESTRAT", "FHU", "CSALUD", "CNAT1", "CNAT2", "ING1", "ING2", "LCOM", "DSOC", "ARTE"] },
  { codigo: "MVOS0005", nombre: "ZOOTECNIA", prerrequisitos: ["ESTRAT", "FHU", "CSALUD", "CNAT1", "CNAT2", "ING1", "ING2", "LCOM", "DSOC", "ARTE"] },
  { codigo: "MVOS0006", nombre: "ECOLOGÍA Y CONSERVACIÓN DE ECOSISTEMA", prerrequisitos: ["ESTRAT", "FHU", "CSALUD", "CNAT1", "CNAT2", "ING1", "ING2", "LCOM", "DSOC", "ARTE"] },
  { codigo: "MVOS0007", nombre: "BIOÉTICA, ÉTICA PROFESIONAL Y CONDUCTA RESPONSABLE EN INVESTIGACIÓN VETERINARIA", prerrequisitos: ["ESTRAT", "FHU", "CSALUD", "CNAT1", "CNAT2", "ING1", "ING2", "LCOM", "DSOC", "ARTE"] },
  { codigo: "MVPPS0001", nombre: "PRÁCTICA EN ANIMALES DOMÉSTICOS", prerrequisitos: ["ESTRAT", "FHU", "CSALUD", "CNAT1", "CNAT2", "ING1", "ING2", "LCOM", "DSOC", "ARTE"] },

  // 4to semestre (ejemplo extendido)
  { codigo: "MVOS0008", nombre: "FISIOLOGÍA ANIMAL I", prerrequisitos: ["MVOS0001", "MVOS0002", "MVOS0004"] },
  { codigo: "MVOS0009", nombre: "PARASITOLOGÍA VETERINARIA", prerrequisitos: ["MVOS0002", "MVOS0003"] },
  { codigo: "MVOS0010", nombre: "BIOESTADÍSTICA", prerrequisitos: [] },
  { codigo: "MVOS0011", nombre: "VIROLOGÍA VETERINARIA", prerrequisitos: ["MVOS0002", "MVOS0003"] },
  { codigo: "MVOS0012", nombre: "BACTERIOLOGÍA Y MICOLOGÍA VETERINARIA", prerrequisitos: ["MVOS0002", "MVOS0003"] },
  { codigo: "MVOS0013", nombre: "METODOLOGÍA DE LA INVESTIGACIÓN", prerrequisitos: ["MVOS0007"] },
  { codigo: "MVCS0001", nombre: "TÉCNICAS DE DIAGNÓSTICO VETERINARIO I", prerrequisitos: [] },
  { codigo: "MVCS0002", nombre: "MANEJO DE INSTRUMENTAL Y EQUIPO DE LABORATORIO", prerrequisitos: [] }
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

ramos.forEach(r => {
  container.appendChild(crearRamo(r));
});
actualizarEstado();


