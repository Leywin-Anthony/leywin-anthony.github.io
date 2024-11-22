const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav_link"); // Sélectionner tous les liens avec la classe 'nav_link'

window.addEventListener("scroll", () => {
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  // Afficher ou masquer la nav
  if (scrollValue > 0.34) {
    nav.style.visibility = "visible";
    nav.style.opacity = "1";
  } else {
    nav.style.visibility = "hidden";
    nav.style.opacity = "0";
  }

  // Supprimer la classe activeLink de tous les liens
  navLinks.forEach((link) => {
    link.classList.remove("activeLink");
  });

  // Ajouter la classe activeLink seulement aux liens qui remplissent les conditions
  navLinks.forEach((link) => {
    if (
      link.getAttribute("href") === "#home" &&
      scrollValue > 0 &&
      scrollValue <= 0.34
    ) {
      link.classList.add("activeLink");
    } else if (
      link.getAttribute("href") === "#about" &&
      scrollValue > 0.34 &&
      scrollValue <= 0.6
    ) {
      link.classList.add("activeLink");
    } else if (
      link.getAttribute("href") === "#book" &&
      scrollValue > 0.6 &&
      scrollValue <= 0.75
    ) {
      link.classList.add("activeLink");
    } else if (
      link.getAttribute("href") === "#portfolio" &&
      scrollValue > 0.75 &&
      scrollValue <= 0.95
    ) {
      link.classList.add("activeLink");
    } else if (link.getAttribute("href") === "#contact" && scrollValue > 0.95) {
      link.classList.add("activeLink");
    }
  });
});
