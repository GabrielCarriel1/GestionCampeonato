const verificarCuenta =
  JSON.parse(localStorage.getItem("login_success")) || false;
if (!verificarCuenta) {
  window.location.href = "pag-principal.html";
}
