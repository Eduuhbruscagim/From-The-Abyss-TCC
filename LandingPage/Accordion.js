const buttons = document.querySelectorAll(".accordion-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    // Alterna a visibilidade do conteúdo
    content.classList.toggle("show");
    button.classList.toggle("active");
  });
});
