/**
 * MALIHA.JS - INTERACTIVE SCRIPTS & SCROLL REVEALS
 */
document.addEventListener("DOMContentLoaded", () => {
  /* =====================================================
     1. HIGHLIGHT ACTIVE PAGE IN NAVBAR
     ===================================================== */
  const currentPath = window.location.pathname;
  const currentPage = currentPath.substring(currentPath.lastIndexOf("/") + 1) || "index.html";
  
  document.querySelectorAll("#navbar .nav-link").forEach(link => {
    const linkHref = link.getAttribute("href");
    if (linkHref === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  /* =====================================================
     2. NAVBAR SHADOW & EFFECTS ON SCROLL
     ===================================================== */
  const navbar = document.getElementById("navbar");
  const handleScroll = () => {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("shadow-sm animate__animated animate__fadeInDown");
        navbar.style.padding = "0.5rem 0";
      } else {
        navbar.classList.remove("shadow-sm");
        navbar.style.padding = "0.8rem 0";
      }
    }
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Run once initially

  /* =====================================================
     3. INTERSECTION OBSERVER FOR SCROLL REVEALS
     ===================================================== */
  const revealTargets = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale"
  );

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          // Optionally unobserve after animating:
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null, // Viewport
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: "0px 0px -50px 0px" // Trigger slightly before element enters viewport fully
    });

    revealTargets.forEach(target => {
      revealObserver.observe(target);
    });
  } else {
    // Fallback: immediately show elements if IntersectionObserver is not supported
    revealTargets.forEach(target => {
      target.classList.add("reveal-active");
    });
  }

  /* =====================================================
     4. SMOOTH SCROLL FOR INTERNAL LINKS
     ===================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
          
          // Collapse mobile menu if open
          const navbarCollapse = document.getElementById("navbarNav");
          if (navbarCollapse && navbarCollapse.classList.contains("show")) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) bsCollapse.hide();
          }
        }
      }
    });
  });
});
