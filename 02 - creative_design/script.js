document.querySelectorAll(".story-btn").forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("change");
    el.nextElementSibling.classList.toggle("change");
  });
});
