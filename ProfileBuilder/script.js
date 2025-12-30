const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");
const summaryInput = document.getElementById("summary");
const skillsInput = document.getElementById("skills");

const pName = document.getElementById("pName");
const pRole = document.getElementById("pRole");
const pSummary = document.getElementById("pSummary");
const pSkills = document.getElementById("pSkills");

// Live update
[nameInput, roleInput, summaryInput, skillsInput].forEach(input => {
  input.addEventListener("input", updatePreview);
});

// Update preview
function updatePreview() {
  pName.innerText = nameInput.value || "Your Name";
  pRole.innerText = roleInput.value || "Your Role";
  pSummary.innerText =
    summaryInput.value || "Your professional summary appears here.";

  pSkills.innerHTML = "";
  skillsInput.value.split(",").forEach(skill => {
    if (skill.trim()) {
      const li = document.createElement("li");
      li.innerText = skill.trim();
      pSkills.appendChild(li);
    }
  });
}

// Save data
function saveData() {
  const data = {
    name: nameInput.value,
    role: roleInput.value,
    summary: summaryInput.value,
    skills: skillsInput.value
  };
  localStorage.setItem("resumeData", JSON.stringify(data));
  alert("Saved!");
}

// Load saved data
window.onload = () => {
  const data = JSON.parse(localStorage.getItem("resumeData"));
  if (!data) return;

  nameInput.value = data.name;
  roleInput.value = data.role;
  summaryInput.value = data.summary;
  skillsInput.value = data.skills;
  updatePreview();
};
