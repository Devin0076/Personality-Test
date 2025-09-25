console.log("script.js connected!");

//Objedt to store answers
let answers = {};

//Track answer clicks
document.querySelectorAll(".question-block").forEach((block, qIndex) => {
    const buttons = block.querySelectorAll(".answer-btn");
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
      // Remove selected class from all in this block
            buttons.forEach((b) => b.classList.remove("selected"));
      // Add selected class to clicked
            btn.classList.add("selected");
      // Store answer
            answers[qIndex] = btn.dataset.answer;
            console.log("Answers so far:", answers);
    });
  });
});

// Show results
document.getElementById("show-result").addEventListener("click", displayResult);

function displayResult() {
  let pandaScore = 0;
  let lionScore = 0;

  // Assign point values (A/C = Panda, B/D = Lion)
  for (let q in answers) {
    if (answers[q] === "A" || answers[q] === "C") {
      pandaScore++;
    } else if (answers[q] === "B" || answers[q] === "D") {
      lionScore++;
    }
  }

  let resultText = "";
  let resultImage = "";
  if (pandaScore >= lionScore) {
    resultText = "You are a Red Panda! — calm, cozy, and a little mysterious.";
    resultImage = "img/redpanda.jpg"; // Ensure this path is correct
  } else {
    resultText = "You are a Lion! — bold, social, and full of energy!";
    resultImage = "img/lion.jpg"; // Ensure this path is correct
  }

  // Display result
  document.getElementById("result-text").textContent = resultText;

  const imgEl = document.getElementById("result-image");
    imgEl.src = resultImage;
    imgEl.style.display = "block";
  document.getElementById("result-container").style.display = "block";
}