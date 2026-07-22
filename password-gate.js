(function () {
  // ============================================================
  // TO CHANGE THE PASSWORD: edit the line below, save, and re-upload
  // this file (password-gate.js) to your host. That's it — this one
  // file controls the password for every page on the site.
  // ============================================================
  var PASSWORD = "vaishnavi2026";

  var STORAGE_KEY = "vb_portfolio_unlocked";

  // Already unlocked earlier in this browser? Skip the gate entirely.
  if (localStorage.getItem(STORAGE_KEY) === "true") {
    return;
  }

  // Hide the page immediately so there's no flash of content
  // before the password check runs.
  document.documentElement.style.visibility = "hidden";

  document.addEventListener("DOMContentLoaded", function () {
    var style = document.createElement("style");
    style.textContent =
      "#pw-gate-overlay{position:fixed;inset:0;background:#FAF6EF;z-index:99999;" +
      "display:flex;align-items:center;justify-content:center;font-family:'Inter',sans-serif;padding:20px;}" +
      ".pw-gate-box{text-align:center;max-width:360px;width:100%;}" +
      ".pw-gate-mark{font-family:'Fraunces',serif;font-size:24px;margin-bottom:8px;color:#1C1B19;}" +
      ".pw-gate-label{font-size:14px;line-height:1.6;opacity:0.65;margin-bottom:26px;color:#1C1B19;}" +
      "#pw-gate-form{display:flex;gap:8px;}" +
      "#pw-gate-input{flex:1;padding:12px 14px;border:1px solid rgba(28,27,25,0.3);border-radius:3px;" +
      "font-family:'Inter',sans-serif;font-size:14px;background:#fff;color:#1C1B19;}" +
      "#pw-gate-input:focus{outline:none;border-color:#1C1B19;}" +
      "#pw-gate-form button{padding:12px 18px;border:none;background:#1C1B19;color:#FAF6EF;" +
      "border-radius:3px;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.04em;" +
      "text-transform:uppercase;cursor:pointer;}" +
      "#pw-gate-form button:hover{opacity:0.85;}" +
      ".pw-gate-error{color:#B0243D;font-size:13px;margin-top:14px;display:none;}";
    document.head.appendChild(style);

    var overlay = document.createElement("div");
    overlay.id = "pw-gate-overlay";
    overlay.innerHTML =
      '<div class="pw-gate-box">' +
      '<div class="pw-gate-mark">Vaishnavi&nbsp;R.B.</div>' +
      '<p class="pw-gate-label">This portfolio is password protected.<br>Enter the password to continue.</p>' +
      '<form id="pw-gate-form">' +
      '<input type="password" id="pw-gate-input" placeholder="Password" autocomplete="off" autofocus />' +
      "<button type=\"submit\">Enter \u2192</button>" +
      "</form>" +
      '<p class="pw-gate-error" id="pw-gate-error">Incorrect password — please try again.</p>' +
      "</div>";
    document.body.appendChild(overlay);
    document.documentElement.style.visibility = "visible";

    document.getElementById("pw-gate-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var entered = document.getElementById("pw-gate-input").value;
      if (entered === PASSWORD) {
        localStorage.setItem(STORAGE_KEY, "true");
        overlay.remove();
      } else {
        document.getElementById("pw-gate-error").style.display = "block";
        document.getElementById("pw-gate-input").value = "";
        document.getElementById("pw-gate-input").focus();
      }
    });
  });
})();
