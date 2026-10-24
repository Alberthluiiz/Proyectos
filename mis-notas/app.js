/* DOM - Document Object Model */

/* =============================================
            Buscar Elementos del HTML 
   =============================================
*/
const formulario = document.querySelector("#form-nota");
const inputTitulo = document.querySelector("#titulo");
const inputNota = document.querySelector("#nota");
const inputFecha = document.querySelector("#fecha");
const inputHora = document.querySelector("#hora");

/* =============================================
            Escuchar un evento 
   =============================================
*/
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const textoTitulo = inputTitulo.value.trim();
  const textoNota = inputNota.value.trim();
  const textoFecha = inputFecha.value.trim();
  const textoHora = inputHora.value.trim();

  console.log("Titulo: ", textoTitulo);
  console.log("Nota: ", textoNota);
  console.log("Fecha: ", textoFecha);
  console.log("Hora: ", textoHora);
  formulario.reset();
});
