/* Civil Services Academy — shared components + behaviour (main.js) */
(function () {
  "use strict";

  var root = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  };

  /* ---------- Theme + direction (applied immediately to avoid flash) ---------- */
  function applyTheme(t) { root.setAttribute("data-theme", t); }
  function applyDir(d) { root.setAttribute("dir", d); root.setAttribute("lang", d === "rtl" ? "ar" : "en"); }
  applyTheme(store.get("csa-theme") || "light");
  applyDir(store.get("csa-dir") || "ltr");

  /* ---------- Icons ---------- */
  var ic = function (d, cls) {
    return '<svg class="icon ' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true">' + d + "</svg>";
  };
  var ICONS = {
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    chev: '<path d="M6 9l6 6 6-6"/>',
    up: '<path d="M6 15l6-6 6 6"/>',
    pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'
  };
  window.CSA_ICONS = ICONS;
  window.CSA_ic = ic;

  /* ---------- Shared header ---------- */
  function headerHTML(page) {
    var homeActive = page === "home" || page === "home2";
    function link(key, href, label) {
      return '<li><a class="nav-link' + (page === key ? " active" : "") + '" href="' + href + '"' +
        (page === key ? ' aria-current="page"' : "") + ">" + label + "</a></li>";
    }
    return '' +
      '<header class="site-header"><div class="container nav-wrap">' +
        '<a class="brand" href="index.html" aria-label="Civil Services Academy home">' +
          '<span class="brand-mark" aria-hidden="true">CSA</span>' +
          '<span class="brand-text"><span class="brand-name">Civil Services Academy</span>' +
          '<span class="brand-tag">UPSC · IAS · IPS · IFS</span></span></a>' +
        '<button class="icon-btn hamburger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav-panel">' +
          ic(ICONS.menu, "i-menu") + ic(ICONS.close, "i-close") + "</button>" +
        '<div class="nav-panel" id="nav-panel">' +
          '<ul class="nav-list">' +
            '<li class="has-sub"><button class="nav-link' + (homeActive ? " active" : "") + '" type="button" aria-haspopup="true" aria-expanded="false">Home ' + ic(ICONS.chev, "chev") + "</button>" +
              '<div class="sub-menu"><a href="index.html"' + (page === "home" ? ' class="active"' : "") + '>Home 1</a><a href="home-2.html"' + (page === "home2" ? ' class="active"' : "") + ">Home 2</a></div></li>" +
            link("about", "about.html", "About") +
            link("programs", "programs.html", "Programs") +
            link("faculty", "faculty.html", "Faculty") +
            link("contact", "contact.html", "Contact") +
            link("dashboard", "dashboard.html", "Dashboard") +
          "</ul>" +
          '<div class="nav-actions">' +
            '<div class="tools" style="display:contents">' +
              '<button class="icon-btn theme-toggle" type="button" aria-label="Toggle light and dark theme">' + ic(ICONS.moon, "i-moon") + ic(ICONS.sun, "i-sun") + "</button>" +
              '<button class="icon-btn dir-toggle" type="button" aria-label="Toggle left-to-right and right-to-left layout"><span class="dir-label">RTL</span></button>' +
            "</div>" +
            '<a class="btn btn-outline" href="login.html">Login</a>' +
            '<a class="btn btn-primary" href="contact.html">Enroll Now</a>' +
          "</div>" +
        "</div>" +
      "</div></header>";
  }

  /* ---------- Shared footer ---------- */
  function footerHTML() {
    return '' +
      '<footer class="site-footer"><div class="container">' +
        '<div class="footer-grid">' +
          "<div>" +
            '<a class="brand" href="index.html"><span class="brand-mark" aria-hidden="true">CSA</span>' +
            '<span class="brand-text"><span class="brand-name">Civil Services Academy</span><span class="brand-tag">UPSC · IAS · IPS · IFS</span></span></a>' +
            "<p>Disciplined, mentor-led preparation for the UPSC Civil Services Examination.</p>" +
            '<div class="socials"><a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook"><svg class="icon " viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a><a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram"><svg class="icon " viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/></svg></a><a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg class="icon " viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a><a href="https://x.com/" target="_blank" rel="noopener" aria-label="X"><svg class="icon fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a><a href="https://www.youtube.com/" target="_blank" rel="noopener" aria-label="YouTube"><svg class="icon " viewBox="0 0 24 24" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><path d="M9.75 15.02 15.5 11.75 9.75 8.48z"/></svg></a></div>' +
          "</div>" +
          '<div><h4>Quick Links</h4><ul class="footer-links"><li><a href="index.html">Home</a></li><li><a href="about.html">About</a></li><li><a href="programs.html">Programs</a></li><li><a href="faculty.html">Faculty</a></li></ul></div>' +
          '<div><h4>Aspirants</h4><ul class="footer-links"><li><a href="login.html">Login</a></li><li><a href="dashboard.html">Dashboard</a></li><li><a href="contact.html">Contact</a></li><li><a href="contact.html">Enroll Now</a></li></ul></div>' +
          '<div><h4>Contact</h4><ul class="footer-contact">' +
            "<li>" + ic(ICONS.pin) + "<span>24 Scholars Avenue, Mukherjee Nagar, New Delhi – 110009</span></li>" +
            "<li>" + ic(ICONS.phone) + "<span>+91 98765 43210</span></li>" +
            "<li>" + ic(ICONS.mail) + "<span>info@csacademy.in</span></li>" +
          "</ul></div>" +
        "</div>" +
        '<div class="footer-bottom">&copy; <span class="yr"></span> Civil Services Academy. All rights reserved.</div>' +
      "</div></footer>" +
      '<button class="back-top" type="button" aria-label="Back to top">' + ic(ICONS.up) + "</button>";
  }

  /* ---------- Mount ---------- */
  if (!document.querySelector("link[rel*='icon']")) {
    var fav = document.createElement("link");
    fav.rel = "icon";
    fav.type = "image/svg+xml";
    fav.href = "assets/images/favicon.svg";
    document.head.appendChild(fav);
  }
  var page = document.body.getAttribute("data-page") || "";
  var hMount = document.getElementById("site-header");
  var fMount = document.getElementById("site-footer");
  if (hMount) hMount.outerHTML = headerHTML(page);
  if (fMount) {
    fMount.outerHTML = footerHTML();
    var yr = document.querySelector(".yr");
    if (yr) yr.textContent = new Date().getFullYear();
  }

  /* ---------- Behaviour ---------- */
  var burger = document.querySelector(".hamburger");
  var panel = document.getElementById("nav-panel");
  var sub = document.querySelector(".has-sub");

  function closeSub() {
    if (!sub) return;
    sub.classList.remove("open");
    sub.querySelector(".nav-link").setAttribute("aria-expanded", "false");
  }
  function closeMenu() {
    if (!panel) return;
    panel.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Open menu");
    closeSub();
  }

  if (burger && panel) {
    burger.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (!open) closeSub();
    });
  }
  if (sub) {
    var trigger = sub.querySelector(".nav-link");
    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = sub.classList.toggle("open");
      trigger.setAttribute("aria-expanded", String(open));
    });
    sub.querySelectorAll(".sub-menu a").forEach(function (a) { a.addEventListener("click", function () { closeSub(); closeMenu(); }); });
  }
  if (panel) {
    panel.querySelectorAll(".nav-list a, .nav-actions a").forEach(function (a) { a.addEventListener("click", closeMenu); });
  }
  document.addEventListener("click", function (e) {
    if (sub && !sub.contains(e.target)) closeSub();
    if (panel && panel.classList.contains("open") && !panel.contains(e.target) && !burger.contains(e.target)) closeMenu();
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
  window.addEventListener("resize", function () {
    // Leaving the compact layout resets the open menu state.
    if (panel && getComputedStyle(burger).display === "none") closeMenu();
  });

  /* Theme / direction toggles */
  function syncDirLabel() {
    document.querySelectorAll(".dir-label").forEach(function (el) {
      el.textContent = root.getAttribute("dir") === "rtl" ? "LTR" : "RTL";
    });
  }
  syncDirLabel();
  document.querySelectorAll(".theme-toggle").forEach(function (b) {
    b.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next); store.set("csa-theme", next);
    });
  });
  document.querySelectorAll(".dir-toggle").forEach(function (b) {
    b.addEventListener("click", function () {
      var next = root.getAttribute("dir") === "rtl" ? "ltr" : "rtl";
      applyDir(next); store.set("csa-dir", next); syncDirLabel();
    });
  });

  /* Form validation and confirmation */
  document.querySelectorAll("form[data-demo-form]").forEach(function (form) {
    var status = form.querySelector(".form-status");
    form.setAttribute("novalidate", "");
    function check(field) {
      var input = field.querySelector("input, select, textarea");
      var ok = input.type === "checkbox" ? input.checked : (input.checkValidity() && input.value.trim() !== "");
      var matchId = input.getAttribute("data-match");
      if (matchId) { var ref = document.getElementById(matchId); ok = ok && !!ref && input.value === ref.value; }
      field.classList.toggle("invalid", !ok);
      input.setAttribute("aria-invalid", String(!ok));
      return ok;
    }
    form.querySelectorAll(".field[data-required]").forEach(function (f) {
      f.querySelector("input, select, textarea").addEventListener("blur", function () { check(f); });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true, first = null;
      form.querySelectorAll(".field[data-required]").forEach(function (f) {
        if (!check(f)) { valid = false; if (!first) first = f.querySelector("input, select, textarea"); }
      });
      if (!status) return;
      status.hidden = false;
      if (!valid) { status.textContent = "Please correct the highlighted fields."; first.focus(); return; }
      status.textContent = form.getAttribute("data-demo-message") ||
        "Thank you. Your details have been received and our team will contact you shortly.";
      var go = form.getAttribute("data-goto");
      if (go) { setTimeout(function () { window.location.href = go; }, 900); } else { form.reset(); }
    });
  });

  /* Password visibility */
  document.querySelectorAll("[data-toggle-password]").forEach(function (btn) {
    var input = document.getElementById(btn.getAttribute("data-toggle-password"));
    if (!input) return;
    btn.addEventListener("click", function () {
      var show = input.type === "password";
      input.type = show ? "text" : "password";
      btn.textContent = show ? "Hide" : "Show";
      btn.setAttribute("aria-pressed", String(show));
      btn.setAttribute("aria-label", show ? "Hide password" : "Show password");
    });
  });

  /* Inline confirmation messages for secondary actions */
  document.querySelectorAll("[data-note]").forEach(function (el) {
    el.addEventListener("click", function () {
      var form = el.closest("form");
      var status = form && form.querySelector(".form-status");
      if (status) { status.hidden = false; status.textContent = el.getAttribute("data-note"); }
      var go = el.getAttribute("data-goto");
      if (go) { setTimeout(function () { window.location.href = go; }, 900); }
    });
  });

  /* Dashboard: sidebar views (single page) */
  var views = document.querySelectorAll(".view");
  if (views.length) {
    var vlinks = document.querySelectorAll("[data-view-link]");
    var showView = function (name) {
      if (!document.getElementById("view-" + name)) name = "overview";
      views.forEach(function (v) { v.classList.toggle("active", v.id === "view-" + name); });
      vlinks.forEach(function (l) {
        var on = l.getAttribute("data-view-link") === name;
        l.classList.toggle("active", on);
        if (on) { l.setAttribute("aria-current", "page"); l.scrollIntoView({ inline: "nearest", block: "nearest" }); }
        else l.removeAttribute("aria-current");
      });
    };
    vlinks.forEach(function (l) {
      l.addEventListener("click", function (e) {
        e.preventDefault();
        var n = l.getAttribute("data-view-link");
        showView(n);
        try { history.replaceState(null, "", "#" + n); } catch (err) { /* file:// or sandbox */ }
        window.scrollTo({ top: 0 });
      });
    });
    window.addEventListener("hashchange", function () { showView(location.hash.slice(1)); });
    showView(location.hash.slice(1) || "overview");

    var filter = document.getElementById("subject-filter");
    if (filter) {
      var cards = document.querySelectorAll(".m-card");
      var empty = document.getElementById("materials-empty");
      filter.addEventListener("change", function () {
        var shown = 0;
        cards.forEach(function (c) {
          var match = filter.value === "all" || c.getAttribute("data-subject") === filter.value;
          c.hidden = !match; if (match) shown++;
        });
        if (empty) empty.hidden = shown !== 0;
      });
    }
  }

  /* FAQ accordion: opening one question closes the others */
  document.querySelectorAll(".faq").forEach(function (group) {
    var items = group.querySelectorAll("details");
    items.forEach(function (item) {
      var summary = item.querySelector("summary");
      if (summary) summary.addEventListener("click", function () {
        items.forEach(function (other) { if (other !== item) other.open = false; });
      });
      item.addEventListener("toggle", function () {
        if (!item.open) return;
        items.forEach(function (other) { if (other !== item && other.open) other.open = false; });
      });
    });
  });

  /* Back to top */
  var top = document.querySelector(".back-top");
  if (top) {
    var toggleTop = function () { top.classList.toggle("show", window.scrollY > 400); };
    window.addEventListener("scroll", toggleTop, { passive: true });
    toggleTop();
    top.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  }
})();
