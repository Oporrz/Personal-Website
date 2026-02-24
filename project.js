document.getElementById("year").textContent = new Date().getFullYear();

const copyBtn = document.getElementById("copyLink");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy Link"), 1200);
    } catch (e) {
      alert("Copy failed. Please copy the URL manually.");
    }
  });
}
