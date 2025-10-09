// 🔒 Full Website Content Protection (Desktop + Mobile)

// 1️⃣ Disable right-click (desktop)
document.addEventListener("contextmenu", function(e){
  e.preventDefault();
});

// 2️⃣ Block common keyboard shortcuts (desktop)
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

// 3️⃣ Detect Developer Tools (desktop)
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

// 4️⃣ Disable text selection and long-press (desktop + mobile)
(function() {
  const css = `
    body, img, a {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
      -webkit-touch-callout: none !important; /* iOS Safari */
    }
  `;
  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
})();

// 5️⃣ Disable touch-based long-press menu (mobile)
document.addEventListener("touchstart", function(e){
  e.preventDefault(); // Prevent long-press menu
}, {passive: false});