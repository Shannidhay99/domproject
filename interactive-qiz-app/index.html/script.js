const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: "Paris"
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      correct: "JavaScript"
    },
    {
      question: "What does CSS stand for?",
      options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
      correct: "Cascading Style Sheets"
    },
    {
      question: "What year was JavaScript launched?",
      options: ["1996", "1995", "1994", "None of the above"],
      correct: "1995"
    }
  ];
  
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const nextBtn = document.getElementById("next-btn");
  const scoreContainer = document.getElementById("score-container");
  
  let currentQuestionIndex = 0;
  let score = 0;
  let selectedAnswer = "";
  
  function showQuestion() {
    const current = quizData[currentQuestionIndex];
    questionEl.textContent = current.question;
    answersEl.innerHTML = "";
  
    current.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.addEventListener("click", () => {
        document.querySelectorAll(".answers button").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedAnswer = option;
      });
      answersEl.appendChild(btn);
    });
  }
  
  nextBtn.addEventListener("click", () => {
    if (!selectedAnswer) {
      alert("Please select an answer!");
      return;
    }
  
    if (selectedAnswer === quizData[currentQuestionIndex].correct) {
      score++;
    }
  
    selectedAnswer = "";
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizData.length) {
      showQuestion();
    } else {
      showScore();
    }
  });
  
  function showScore() {
    questionEl.textContent = "Quiz Finished!";
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreContainer.textContent = `You scored ${score} out of ${quizData.length}`;
    localStorage.setItem("lastQuizScore", score);
  }
  
  // Start the quiz
  showQuestion();
  