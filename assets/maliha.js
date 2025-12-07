document.addEventListener("DOMContentLoaded", () => {
  /* Highlight current page */
  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll(".navbar .nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPage) link.classList.add("active");
  });

  /* Smooth scroll for anchors */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const targetId = anchor.getAttribute("href");
      if (targetId.length > 1) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* Navbar shadow on scroll */
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (window.scrollY > 60) navbar.classList.add("shadow-sm");
      else navbar.classList.remove("shadow-sm");
    }
  });
});
