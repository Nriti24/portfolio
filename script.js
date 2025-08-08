// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", function () {

  // Typing Animation (requires Typed.js)
  if (typeof Typed !== 'undefined') {
    new Typed('#typed', {
      strings: ['Nriti', 'a Frontend Learner 💻', 'a Problem Solver 💡', 'a Tech Enthusiast 🚀'],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });
  }

  // Back to Top Button
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Dark Mode Toggle
  const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Load preference
if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark-mode");
  darkToggle.textContent = "☀️";
}

// Toggle logic with saving
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  darkToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("mode", isDark ? "dark" : "light");
});


  // Initialize Scroll Animations (requires AOS)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

});


<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Typed.js initialization
    var typed = new Typed('#typed', {
      strings : ['Nriti', 'a Frontend Learner 💻', 'a Problem Solver 💡', 'a Tech Enthusiast 🚀'],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });

    // Back to top button functionality
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
      backToTop.style.display = (document.documentElement.scrollTop > 100) ? "block" : "none";
    });

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
</script>
