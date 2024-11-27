const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav_link"); //

window.addEventListener("scroll", () => {
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue > 0.34) {
    nav.style.visibility = "visible";
    nav.style.opacity = "1";
  } else {
    nav.style.visibility = "hidden";
    nav.style.opacity = "0";
  }

  // Supprimer la classe activeLink de tous les liens
  //   navLinks.forEach((link) => {
  //     link.classList.remove("activeLink");
  //   });

  //   navLinks.forEach((link) => {
  //     if (
  //       link.getAttribute("href") === "#home" &&
  //       scrollValue > 0 &&
  //       scrollValue <= 0.34
  //     ) {
  //       link.classList.add("activeLink");
  //     } else if (
  //       link.getAttribute("href") === "#about" &&
  //       scrollValue > 0.34 &&
  //       scrollValue <= 0.6
  //     ) {
  //       link.classList.add("activeLink");
  //     } else if (
  //       link.getAttribute("href") === "#book" &&
  //       scrollValue > 0.6 &&
  //       scrollValue <= 0.75
  //     ) {
  //       link.classList.add("activeLink");
  //     } else if (
  //       link.getAttribute("href") === "#portfolio" &&
  //       scrollValue > 0.75 &&
  //       scrollValue <= 0.95
  //     ) {
  //       link.classList.add("activeLink");
  //     } else if (link.getAttribute("href") === "#contact" && scrollValue > 0.95) {
  //       link.classList.add("activeLink");
  //     }
  //   });
  // });
  navLinks.forEach((link) => {
    link.classList.remove("activeLink");

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

/*=============== SERVICES MODAL ===============*/
// Get the modal
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll("#services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");
modalImgs = document.querySelectorAll(".services_img");

// When the user clicks on the button, open the modal
let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});
modalImgs.forEach((mc, i) => {
  mc.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});
