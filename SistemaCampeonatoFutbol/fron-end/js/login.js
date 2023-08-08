const login = document.querySelector("#form-login");
login.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#id-email").value;
  const password = document.querySelector("#id-password").value;

  const cuenta = JSON.parse(localStorage.getItem("usuarios")) || [];
  const cuentasRegistrada = cuenta.find(
    (cuenta) => cuenta.email === email && cuenta.password == password
  );
  if (!cuentasRegistrada) {
    const mensajeError = document.querySelector("#login-mensaje-error");
    mensajeError.textContent = "Ingrese una cotraseña o correo correctos!";
  } else {
    localStorage.setItem(login_success, JSON.stringify(cuentasRegistrada));
    window.location.href = "index.html";
  }
});
