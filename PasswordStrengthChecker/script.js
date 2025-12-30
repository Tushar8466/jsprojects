const password = document.getElementById("password");
const result = document.getElementById("result");
const progressBar = document.getElementById("progress-bar");

const rules = {
  length: document.getElementById("length"),
  upper: document.getElementById("upper"),
  lower: document.getElementById("lower"),
  number: document.getElementById("number"),
  special: document.getElementById("special")
};

password.addEventListener("input", () => {
  const value = password.value;
  let score = 0;

  const checks = {
    length: value.length >= 8,
    upper: /[A-Z]/.test(value),
    lower: /[a-z]/.test(value),
    number: /[0-9]/.test(value),
    special: /[^A-Za-z0-9]/.test(value)
  };

  for (let rule in checks) {
    if (checks[rule]) {
      rules[rule].classList.add("valid");
      score++;
    } else {
      rules[rule].classList.remove("valid");
    }
  }

  // Progress bar
  progressBar.style.width = `${(score / 5) * 100}%`;

  if (score <= 2) {
    result.innerText = "Weak";
    result.className = "weak";
    progressBar.style.background = "red";
  } else if (score <= 4) {
    result.innerText = "Medium";
    result.className = "medium";
    progressBar.style.background = "orange";
  } else {
    result.innerText = "Strong";
    result.className = "strong";
    progressBar.style.background = "green";
  }
});
