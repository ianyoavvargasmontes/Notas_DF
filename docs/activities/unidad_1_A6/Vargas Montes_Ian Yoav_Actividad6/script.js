const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const terminos = document.getElementById("terminos").checked;

  if (!nombre || !email || !password) {
    alert("Por favor completa todos los campos obligatorios");
    return;
  }

  if (password.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres");
    return;
  }

  if (!terminos) {
    alert("Debes aceptar los términos");
    return;
  }

  alert("Formulario enviado correctamente 🎉");
});