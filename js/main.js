/* Colorado Athletics Foundation — site behavior */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Sticky header shadow */
  var header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }, { passive: true });
  }

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* Scroll reveals + ridge draw */
  var observed = document.querySelectorAll(".reveal, .ridge-line");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.18 });
    observed.forEach(function (el) { io.observe(el); });
  } else {
    observed.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Animated stat counters: <span data-count="7.7" data-suffix=" million"> */
  var counters = document.querySelectorAll("[data-count]");
  function animateCounter(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var decimals = (el.getAttribute("data-count").split(".")[1] || "").length;
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1600, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (counters.length) {
    if ("IntersectionObserver" in window && !reduceMotion) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { animateCounter(e.target); cio.unobserve(e.target); }
        });
      }, { threshold: 0.5 });
      counters.forEach(function (el) { cio.observe(el); });
    } else {
      counters.forEach(function (el) {
        el.textContent = el.getAttribute("data-count") + (el.getAttribute("data-suffix") || "");
      });
    }
  }

  /* Scholarship application form → composes an email (no backend required).
     TODO (NEEDS REAL DATA): replace with a hosted form (Google Form / Formspree)
     and confirm the destination inbox. */
  var appForm = document.getElementById("scholarship-form");
  if (appForm) {
    appForm.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var d = new FormData(appForm);
      var body =
        "SCHOLARSHIP / ACCESS APPLICATION\n\n" +
        "Applicant name: " + d.get("applicant") + "\n" +
        "Parent/Guardian (if under 18): " + (d.get("guardian") || "n/a") + "\n" +
        "Email: " + d.get("email") + "\n" +
        "Phone: " + (d.get("phone") || "n/a") + "\n" +
        "Program of interest: " + d.get("program") + "\n" +
        "Age group: " + d.get("agegroup") + "\n" +
        "People in household: " + (d.get("household") || "n/a") + "\n" +
        "Need basis: " + d.get("basis") + "\n\n" +
        "What support is needed:\n" + d.get("need") + "\n";
      var mail = "mailto:info@coloradoaf.org" +
        "?subject=" + encodeURIComponent("Scholarship Application — " + d.get("applicant")) +
        "&body=" + encodeURIComponent(body);
      window.location.href = mail;
      var status = document.getElementById("form-status");
      if (status) {
        status.textContent = "Your email app should open with your application pre-filled. If it doesn't, email info@coloradoaf.org with the details above.";
      }
    });
  }
})();
