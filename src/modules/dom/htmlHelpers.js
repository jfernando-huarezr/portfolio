const nav = document.querySelector("nav");
const dropdownMenu = nav.querySelector(".dropdown-menu");

export function hideDropdown() {
  document.addEventListener("scroll", () => {
    dropdownMenu.classList.remove("visible");
  });
}

const sections = document.querySelectorAll(".fade-in-section");

// Create an observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Section is in view
        entry.target.classList.add("is-visible");
      } /* else {
        // Section is not in view
        entry.target.classList.remove("is-visible");
      } */
    });
  },
  { rootMargin: "0px" }
); // Adjust rootMargin as needed

export function intersection() {
  // Observe each section
  sections.forEach((section) => {
    observer.observe(section);
  });
}
