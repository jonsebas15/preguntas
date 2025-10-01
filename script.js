function responder(opcion) {
  const mensaje = document.getElementById("mensaje");
  const botones = document.querySelectorAll(".opciones button");

  if (opcion === "A") {
    mensaje.textContent = "¡Bien hecho! 🎉";
    mensaje.className = "correcto";
  } else {
    mensaje.textContent = "❌ Error, inténtalo otra vez.";
    mensaje.className = "incorrecto";

    botones.forEach(boton => boton.disabled = true);

  }
}
