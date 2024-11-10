// Initialize Lucide icons
lucide.createIcons();

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".section-fade").forEach((section) => {
  observer.observe(section);
});

window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btn.classList.remove("opacity-0", "translate-y-full");
    btn.classList.add("opacity-100", "translate-y-0");
  } else {
    btn.classList.add("opacity-0", "translate-y-full");
    btn.classList.remove("opacity-100", "translate-y-0");
  }
};
