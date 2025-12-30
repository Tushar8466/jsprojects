const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

/* Open Modal */
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

/* Close Modal */
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

/* Close on outside click */
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

/* Tabs Logic */
tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    // remove active class
    tabBtns.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // add active class
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab)
            .classList.add("active");
  });
});
