const menuItems = document.querySelectorAll(".menu ul li");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // alert(`Works but no ${item.textContent.trim()}`);
  });
});
