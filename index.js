const navlinks = document.querySelectorAll("header > nav > a");

navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    navlinks.forEach((elemento) => {
      elemento.classList.remove("active");
    });

    link.classList.add("active");
  });
});
