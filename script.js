const sections = document.querySelectorAll("section");
const nav = document.getElementById("desktop_nav");
const currentSectionDiv = document.getElementById("current-section");

const sectionDescriptions = {
  about: "Get to know me",
  education: "My learning journey",
  projects: "What I’ve built along the way",
  skills: "The tools I bring to the table",
  contact: "Get in touch with me"
};

let lastSection = "header";

function updateCurrentSection() {
  let current = "header";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      current = section.id;
    }
  });

  if (current === lastSection) return;

  lastSection = current;

  if (current === "header") {
    nav.classList.remove("scrolled");
    currentSectionDiv.innerHTML = "";
    currentSectionDiv.classList.remove("show");
  } else {
    nav.classList.add("scrolled");

    const title = sectionDescriptions[current]
      ? current.charAt(0).toUpperCase() + current.slice(1)
      : current;

    currentSectionDiv.classList.remove("show");
    currentSectionDiv.innerHTML = `
      <h3>${title}</h3>
      <p>${sectionDescriptions[current] || "Section description..."}</p>
    `;

    requestAnimationFrame(() => {
      currentSectionDiv.classList.add("show");
    });
  }
}

document.addEventListener("scroll", updateCurrentSection);
