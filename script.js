const ramos = [
  {
    codigo: "NAT1",
    nombre: "Ciencias de la Naturaleza I",
    prerrequisitos: []
  },
  {
    codigo: "NAT2",
    nombre: "Ciencias de la Naturaleza II",
    prerrequisitos: ["NAT1"]
  },
  {
    codigo: "ING1",
    nombre: "Inglés Aplicado a las Ciencias de la Salud I",
    prerrequisitos: []
  },
  {
    codigo: "ING2",
    nombre: "Inglés Aplicado a las Ciencias de la Salud II",
    prerrequisitos: ["ING1"]
  },
  {
    codigo: "BIOQ",
    nombre: "Bioquímica (MVOS0002)",
    prerrequisitos: ["NAT1", "NAT2", "ING1", "ING2"]
  }
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

// Renderizado inicial
ramos.forEach(r => {
  container.appendChild(crearRamo(r));
});
actualizarEstado();

