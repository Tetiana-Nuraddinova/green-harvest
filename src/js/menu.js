(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
    menu: document.querySelector(".mobile-menu"), // Теперь контролируем меню
    menuLinks: document.querySelectorAll(".menu-item .link"), // Ссылки меню
    shopNowBtn: document.querySelector("[data-shop-now]") // Кнопка Shop now
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  // Закриваємо меню при кліку на посилання
  refs.menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      toggleModal(); // Закриваємо меню при кліку на посилання
    });
  });

  // Закриваємо меню при кліку на кнопку "Shop now"
  refs.shopNowBtn.addEventListener("click", () => {
    toggleModal(); // Закриваємо меню
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
    refs.menu.classList.toggle("is-open"); // Закриваємо меню
  }
})();