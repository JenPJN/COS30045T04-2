// Handles navigation between the three "pages" (sections shown/hidden via JS)

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");
  const logoBtn = document.getElementById("logo-btn");
  const currentPageLabel = document.getElementById("current-page-label");

  // Friendly display names for the "current page" indicator
  const pageDisplayNames = {
    home: "Home",
    televisions: "Televisions",
    about: "About Us"
  };

  function showPage(pageId) {
    // Toggle which section is visible
    pages.forEach((page) => {
      page.classList.toggle("active-page", page.id === pageId);
    });

    // Update active state on nav links
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.page === pageId);
    });

    // Update the "you are viewing" text feedback
    currentPageLabel.textContent = pageDisplayNames[pageId] || pageId;

    // Scroll to top when switching pages
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Nav link clicks
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showPage(link.dataset.page);
    });
  });

  // Logo click always returns to Home
  logoBtn.addEventListener("click", () => {
    showPage("home");
  });

  // Initialise on Home page
  showPage("home");
});