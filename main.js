document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuWrapper = document.querySelector(".mobile-menu-wrapper");
  const mobileMenuButton = document.querySelector("#mobile-menu-button");
  const mobileMenuCloseButton = document.querySelector(
    "#mobile-menu-close-button"
  );

  mobileMenuButton.addEventListener("click", function () {
    mobileMenuWrapper.style.display = "flex";
    mobileMenuCloseButton.style.display = "block";
    mobileMenuButton.style.display = "none";
  });
  mobileMenuCloseButton.addEventListener("click", function () {
    mobileMenuWrapper.style.display = "none";
    mobileMenuCloseButton.style.display = "none";
    mobileMenuButton.style.display = "block";
  });
});
