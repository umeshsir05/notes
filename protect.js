// 🔒 Website Content Protection Script

// 1️⃣ Disable right-click
document.addEventListener("contextmenu", function(e){
  e.preventDefault();
});

// 2️⃣ Block common shortcut keys (Ctrl+U, Ctrl+C, Ctrl+S, Ctrl+Shift+I, F12)
document.onkeydown = function(e) {
  if (
    e.keyCode === 123 || // F12
    (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
    (e.ctrlKey && e.keyCode === 85) || // Ctrl+U
    (e.ctrlKey && e.keyCode === 67) || // Ctrl+C
    (e.ctrlKey && e.keyCode === 83)    // Ctrl+S
  ) {
    e.preventDefault();
    alert("Content protected! Copying or inspecting is not allowed.");
  }
};

// 3️⃣ Try to detect Developer Tools (Inspect Element)
(function() {
  const element = new Image();
  Object.defineProperty(element, 'id', {
    get: function() {
      alert("Developer Tools are not allowed!");
      document.body.innerHTML = "<h2 style='color:red; text-align:center; margin-top:50px;'>Developer Tools detected! Access denied.</h2>";
    }
  });
  console.log(element);
})();