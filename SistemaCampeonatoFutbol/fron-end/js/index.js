document
  .getElementById("form-crear-campeonato")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const nombreCampeonato = document.querySelector("#id-nombre").value;
    const numeroEquipos = document.querySelector("#id-registro-equipo").value;
    const fechaInicio = document.querySelector("#id-fecha-inicio").value;
    const fechaFin = document.querySelector("#id-fecha-fin").value;

    const campeonato = {
      nombre: nombreCampeonato,
      equipos: numeroEquipos,
      fechaInicio: fechaInicio,
      fechaFin: fechaFin,
    };

    const campeonatosRegistrados =
      JSON.parse(localStorage.getItem("campeonatos")) || [];

    campeonatosRegistrados.push(campeonato);

    localStorage.setItem("campeonatos", JSON.stringify(campeonatosRegistrados));
    window.location.href = "crear-equipos.html";
  });

const fechaActual = new Date().toISOString().split("T")[0];
document.getElementById("id-fecha-inicio").value = fechaActual;

const nombreUsuario = localStorage.getItem("nombreUsuario");
if (nombreUsuario) {
  document.getElementById(
    "bienvenidoUsuario"
  ).textContent = `Bienvenido, ${nombreUsuario}`;
} else {
  $(document).ready(function () {
    $("#loginModal").modal("show");
  });
}
