const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const search = document.getElementById("search");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Render tasks
function render(list) {
  taskList.innerHTML = "";

  list.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.done ? "completed" : "";

    li.innerHTML = `
      <span onclick="toggleTask(${index})">${task.text}</span>
      <div class="actions">
        <button class="delete" onclick="deleteTask(${index})">❌</button>
      </div>
    `;

    taskList.appendChild(li);
  });
}

// Add task
addBtn.onclick = () => {
  const text = taskInput.value.trim();
  if (!text) return;

  tasks.push({ text, done: false });
  taskInput.value = "";
  save();
};

// Toggle complete
function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  save();
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  save();
}

// Save & re-render
function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  render(tasks);
}

// Search
search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  const filtered = tasks.filter(t =>
    t.text.toLowerCase().includes(value)
  );
  render(filtered);
});

// Initial load
render(tasks);
