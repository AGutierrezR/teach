/* Reusable "reveal answer" widget for terminal exercises.
   Usage:
     <div class="exercise">
       <div class="ex-head"><span>EJERCICIO 1</span><span class="check">...check...</span></div>
       <p class="ex-prompt">Haz tal cosa</p>
       <button class="reveal">Mostrar respuesta</button>
       <div class="answer">$ grep ...</div>
     </div>
   Clicking "Mostrar respuesta" toggles the answer block. Text inside the
   answer block is pre-formatted (white-space: pre-wrap).
*/
(function () {
  document.querySelectorAll(".exercise .reveal").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var box = btn.nextElementSibling;
      if (box && box.classList.contains("answer")) {
        var showing = box.classList.toggle("show");
        btn.textContent = showing ? "Ocultar respuesta" : "Mostrar respuesta";
      }
    });
  });
})();