let num1, num2, operator, correctAnswer;
let score = 0;

function generateQuestion() {
  const operators = ['+', '-', '*', '/'];
  operator = operators[Math.floor(Math.random() * operators.length)];
  num1 = Math.floor(Math.random() * 20) + 1;
  num2 = Math.floor(Math.random() * 20) + 1;

  // Avoid division by 0 and non-integer division
  if (operator === '/') {
    correctAnswer = num1;
    num2 = Math.floor(Math.random() * 10) + 1;
    num1 = correctAnswer * num2;
  }

  document.getElementById('question').innerText = `What is ${num1} ${operator} ${num2}?`;

  switch (operator) {
    case '+': correctAnswer = num1 + num2; break;
    case '-': correctAnswer = num1 - num2; break;
    case '*': correctAnswer = num1 * num2; break;
    case '/': correctAnswer = num1 / num2; break;
  }

  document.getElementById('answer').value = '';
  document.getElementById('result').innerText = '';
}

function checkAnswer() {
  const userAnswer = parseFloat(document.getElementById('answer').value);
  const isCorrect = Math.abs(userAnswer - correctAnswer) < 0.001;

  if (isCorrect) {
    document.getElementById('result').innerText = '✅ Correct!';
    score++;
  } else {
    document.getElementById('result').innerText = `❌ Wrong! The correct answer was ${correctAnswer}`;
  }

  document.getElementById('score').innerText = `Score: ${score}`;
}

// Load the first question when page loads
window.onload = generateQuestion;
