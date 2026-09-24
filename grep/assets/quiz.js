/* Reusable quiz widget for lessons.
   Usage:
     <div class="quiz">
       <div class="q" data-answer="1">   <!-- 0-based index of correct option -->
         <p class="prompt">Pregunta aquí</p>
         <button class="opt">Opción A</button>
         <button class="opt">Opción B</button>
         <button class="opt">Opción C</button>
       </div>
       ...
       <p class="score">...</p>   <!-- optional; updates automatically -->
     </div>
   The widget locks all options after one click and colors the right/wrong pick.
*/
(function () {
  function initQuiz(quiz) {
    var questions = quiz.querySelectorAll(".q");
    var correct = 0;
    var answered = 0;
    var scoreEl = quiz.querySelector(".score");

    questions.forEach(function (q) {
      var answerIndex = parseInt(q.getAttribute("data-answer"), 10);
      var opts = q.querySelectorAll(".opt");

      opts.forEach(function (btn, i) {
        btn.addEventListener("click", function () {
          if (btn.disabled) return;
          var isCorrect = i === answerIndex;
          if (isCorrect) {
            correct++;
            btn.classList.add("correct");
          } else {
            btn.classList.add("wrong");
            opts[answerIndex].classList.add("correct");
          }
          answered++;
          opts.forEach(function (b) { b.disabled = true; });
          if (scoreEl) {
            var pct = Math.round((correct / answered) * 100);
            scoreEl.textContent = "Aciertos: " + correct + " / " + answered + " (" + pct + "%)";
          }
        });
      });
    });
  }

  document.querySelectorAll(".quiz").forEach(initQuiz);
})();