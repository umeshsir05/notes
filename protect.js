// 🔒 Tested Website Content Protection

// 1️⃣ Disable right-click (desktop)
document.addEventListener("contextmenu", function(e){
  e.preventDefault();
  alert("Right-click is disabled!");
});

// 2️⃣ Block common keyboard shortcuts (desktop)
document.addEventListener("keydown", function(e) {
  if (
    e.key === "F12" || 
    (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") ||
    (e.ctrlKey && e.key.toLowerCase() === "u") ||
    (e.ctrlKey && e.key.toLowerCase() === "c") ||
    (e.ctrlKey && e.key.toLowerCase() === "s")
  ) {
    e.preventDefault();
    alert("Shortcut is disabled!");
  }
});



// 5️⃣ Disable drag (images / links)
document.addEventListener("dragstart", function(e){
  e.preventDefault();
});