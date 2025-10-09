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

// 3️⃣ Disable text selection (desktop + mobile)
document.addEventListener("selectstart", function(e){
  e.preventDefault();
});

// 4️⃣ Disable touch-based long-press menu (mobile)
document.addEventListener("touchstart", function(e){
  e.preventDefault();
}, {passive: false});

// 5️⃣ Disable drag (images / links)
document.addEventListener("dragstart", function(e){
  e.preventDefault();
});