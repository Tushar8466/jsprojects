const contactList = document.getElementById("contactList");
const modal = document.getElementById("modal");
const saveBtn = document.getElementById("saveBtn");
const addBtn = document.getElementById("addBtn");
const search = document.getElementById("search");

let contacts = JSON.parse(localStorage.getItem("contactsV2")) || [];
let editIndex = null;

// Render
function render(list) {
  contactList.innerHTML = "";

  list.forEach((c, i) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <div class="avatar">${c.name[0].toUpperCase()}</div>
      <div class="info">
        <strong>${c.name}</strong>
        <span>📞 ${c.phone}</span>
        <span>✉️ ${c.email}</span>
      </div>
      <div class="actions">
        <button class="edit" onclick="editContact(${i})">Edit</button>
        <button class="delete" onclick="deleteContact(${i})">Delete</button>
      </div>
    `;

    contactList.appendChild(div);
  });
}

// Modal
addBtn.onclick = () => {
  editIndex = null;
  document.getElementById("modalTitle").innerText = "Add Contact";
  modal.style.display = "flex";
};

function closeModal() {
  modal.style.display = "none";
  clearInputs();
}

// Save
saveBtn.onclick = () => {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  if (!name || !phone || !email) return;

  if (editIndex === null) {
    contacts.push({ name, phone, email });
  } else {
    contacts[editIndex] = { name, phone, email };
  }

  localStorage.setItem("contactsV2", JSON.stringify(contacts));
  closeModal();
  render(contacts);
};

// Edit
function editContact(i) {
  const c = contacts[i];
  editIndex = i;

  name.value = c.name;
  phone.value = c.phone;
  email.value = c.email;

  document.getElementById("modalTitle").innerText = "Edit Contact";
  modal.style.display = "flex";
}

// Delete
function deleteContact(i) {
  contacts.splice(i, 1);
  localStorage.setItem("contactsV2", JSON.stringify(contacts));
  render(contacts);
}

// Search
search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  const filtered = contacts.filter(c =>
    c.name.toLowerCase().includes(value)
  );
  render(filtered);
});

function clearInputs() {
  name.value = "";
  phone.value = "";
  email.value = "";
}

// Initial load
render(contacts);
