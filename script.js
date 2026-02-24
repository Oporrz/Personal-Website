document.getElementById("year").textContent = new Date().getFullYear();

const chips = [...document.querySelectorAll(".chip")];
const cards = [...document.querySelectorAll(".card")];
const search = document.getElementById("search");

function setActiveChip(active) {
  chips.forEach(c => c.classList.toggle("is-active", c === active));
}

function applyFilter() {
  const activeChip = chips.find(c => c.classList.contains("is-active"));
  const filter = activeChip?.dataset.filter || "all";
  const q = (search.value || "").trim().toLowerCase();

  cards.forEach(card => {
    const tags = (card.dataset.tags || "").toLowerCase();
    const text = card.innerText.toLowerCase();
    const matchFilter = filter === "all" || tags.includes(filter);
    const matchQuery = !q || tags.includes(q) || text.includes(q);
    card.style.display = (matchFilter && matchQuery) ? "" : "none";
  });
}

chips.forEach(chip => chip.addEventListener("click", () => {
  setActiveChip(chip);
  applyFilter();
}));

search.addEventListener("input", applyFilter);

// Theme toggle (จำค่า)
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme;
  const next = current === "dark" ? "" : "dark";
  if (next) document.documentElement.dataset.theme = next;
  else delete document.documentElement.dataset.theme;
  localStorage.setItem("theme", next || "");
});
