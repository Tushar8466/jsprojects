const notesContainer = document.getElementById("notes");
const addBtn = document.getElementById("addBtn");
const search = document.getElementById("search");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Render notes
function renderNotes(list) {
  notesContainer.innerHTML = "";

  list.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";

    div.innerHTML = `
      <textarea placeholder="Write your note...">${note}</textarea>
      <div class="actions">
        <small>Note ${index + 1}</small>
        <button class="delete" onclick="deleteNote(${index})">Delete</button>
      </div>
    `;

    const textarea = div.querySelector("textarea");

    textarea.addEventListener("input", () => {
      notes[index] = textarea.value;
      saveNotes();
    });

    notesContainer.appendChild(div);
  });
}

// Add note
addBtn.addEventListener("click", () => {
  notes.push("");
  saveNotes();
  renderNotes(notes);
});

// Delete note
function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
  renderNotes(notes);
}

// Save
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Search
search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  const filtered = notes.filter(note =>
    note.toLowerCase().includes(value)
  );
  renderNotes(filtered);
});

// Initial render
renderNotes(notes);
