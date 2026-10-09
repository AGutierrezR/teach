/* ==========================================================================
   second-brain · widgets.js
   Componentes interactivos reutilizables por todas las lecciones.
   Sin dependencias. Se activan solos al cargar el DOM.

   Componentes:
     .quiz            — quiz de opción múltiple con feedback inmediato
     ul.checklist[data-persist]  — checklist con estado guardado (localStorage)
     [data-reveal]    — botón que muestra/oculta su elemento hermano .reveal
   ========================================================================== */
(function () {
  "use strict";

  /* --- Quiz ------------------------------------------------------------- */
  function shuffle(nodes) {
    for (var i = nodes.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = nodes[i]; nodes[i] = nodes[j]; nodes[j] = t;
    }
    return nodes;
  }

  function initQuiz(quiz) {
    var opts = Array.prototype.slice.call(quiz.querySelectorAll(".opt"));
    var explain = quiz.querySelector(".explain");
    /* Mezcla las opciones salvo que el quiz pida lo contrario con data-noshuffle.
       Evita que la posición delate la respuesta correcta. */
    if (!quiz.hasAttribute("data-noshuffle")) {
      shuffle(opts).forEach(function (o) { quiz.insertBefore(o, explain); });
    }
    opts = quiz.querySelectorAll(".opt");
    opts.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (quiz.dataset.answered === "1") return;
        quiz.dataset.answered = "1";
        var correct = btn.dataset.correct === "true";
        btn.classList.add(correct ? "correct" : "wrong");
        if (!correct) {
          opts.forEach(function (o) {
            if (o.dataset.correct === "true") o.classList.add("correct");
          });
        }
        opts.forEach(function (o) { o.disabled = true; });
        if (explain) explain.classList.add("show");
      });
    });
  }
  document.querySelectorAll(".quiz").forEach(initQuiz);

  /* --- Checklist persistente ------------------------------------------- */
  function initChecklist(list) {
    var key = "sb-check:" + (list.dataset.persist || location.pathname);
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(key) || "{}"); } catch (e) {}

    list.querySelectorAll("li").forEach(function (li, i) {
      if (saved[i]) li.classList.add("done");
      li.addEventListener("click", function () {
        li.classList.toggle("done");
        saved[i] = li.classList.contains("done");
        try { localStorage.setItem(key, JSON.stringify(saved)); } catch (e) {}
      });
    });
  }
  document.querySelectorAll("ul.checklist[data-persist]").forEach(initChecklist);

  /* --- Reveal ----------------------------------------------------------- */
  document.querySelectorAll("[data-reveal]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = document.getElementById(btn.dataset.reveal)
        || btn.parentElement.querySelector(".reveal");
      if (!target) return;
      var hidden = target.hasAttribute("hidden");
      if (hidden) target.removeAttribute("hidden"); else target.setAttribute("hidden", "");
      btn.textContent = hidden ? (btn.dataset.hide || "Ocultar") : (btn.dataset.show || "Mostrar");
    });
  });
})();
