document
  .getElementById("form-registrar-equipos")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nombreEquipo = document.querySelector("#nombre-equipo").value;
    const imagenEquipoInput = document.querySelector("#id-escudo-equipo");
    const imagenEquipoFile = imagenEquipoInput.files[0];

    if (!imagenEquipoFile) {
      alert("Por favor, selecciona una imagen.");
      return;
    }

    // Crear un nuevo objeto de equipo con los datos
    const nuevoEquipo = {
      nombre: nombreEquipo,
      imagen: URL.createObjectURL(imagenEquipoFile),
    };

    // Obtener equipos registrados del localStorage
    const equiposRegistrados =
      JSON.parse(localStorage.getItem("equipos")) || [];

    // Agregar el nuevo equipo a la lista de equipos registrados
    equiposRegistrados.push(nuevoEquipo);

    // Guardar el array actualizado en el localStorage
    localStorage.setItem("equipos", JSON.stringify(equiposRegistrados));

    // Actualizar la lista de equipos registrados en la página
    actualizarListaEquipos();

    // Limpiar el campo de entrada de imagen
    imagenEquipoInput.value = "";

    alert(`Equipo "${nombreEquipo}" registrado con éxito.`);
    document.getElementById("form-registrar-equipos").reset();
  });

// Función para actualizar la lista de equipos registrados en la página
function actualizarListaEquipos() {
  const listaEquiposRegistrados = document.getElementById(
    "equipos-registrados"
  );
  listaEquiposRegistrados.innerHTML = ""; // Limpiar la lista

  const equiposRegistrados = JSON.parse(localStorage.getItem("equipos")) || [];
  equiposRegistrados.forEach(function (equipo) {
    const nuevoEquipo = document.createElement("li");
    nuevoEquipo.className =
      "list-group-item d-flex justify-content-between align-items-center";

    const equipoInfo = document.createElement("span");
    equipoInfo.textContent = equipo.nombre;

    const imagenEquipo = document.createElement("img");
    imagenEquipo.src = equipo.imagen;
    imagenEquipo.alt = "Escudo del Equipo";
    imagenEquipo.style.maxHeight = "50px"; // Estilo opcional para ajustar el tamaño de la imagen
    imagenEquipo.style.borderRadius = "50%"; // Redondear la imagen

    nuevoEquipo.appendChild(equipoInfo);
    nuevoEquipo.appendChild(imagenEquipo);

    listaEquiposRegistrados.appendChild(nuevoEquipo);
  });
}

// Llamar a la función para cargar los equipos al cargar la página
window.onload = actualizarListaEquipos;
