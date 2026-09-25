const line = "consultor_seguridad --ethical";
const typed = document.getElementById("typed");
let index = 0;

function typeLine() {
  if (!typed) return;
  typed.textContent = line.slice(0, index);
  index += 1;
  if (index <= line.length) {
    window.setTimeout(typeLine, 42);
  }
}

typeLine();

const form = document.getElementById("consult-form");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const nombre = String(data.get("nombre") || "").trim();
  const empresa = String(data.get("empresa") || "").trim();
  const mensaje = String(data.get("mensaje") || "").trim();
  const text = [
    "Hola Daniel, quiero agendar una consulta con Escudo Digital.",
    `Nombre: ${nombre}`,
    empresa ? `Empresa: ${empresa}` : "",
    `Necesito: ${mensaje}`,
  ]
    .filter(Boolean)
    .join("\n");
  const url = `https://wa.me/525574418610?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener");
});
