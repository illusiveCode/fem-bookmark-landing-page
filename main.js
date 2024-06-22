const navButton = document.getElementById("navButton");
const desktopSiteLogo = document.getElementById("siteLogo");
const mobileSiteLogo = document.querySelector(".bookmark-logo-mobile");
const navigation = document.querySelector(".primary-navigation");
const navWrapper = document.querySelector(".nav-wrapper");

let isOpen = false;

const setButtonSrc = (isOpen) => {
  if (isOpen) {
    navButton.src = "/images/icon-close.svg";
    navButton.style.position = "absolute";
    navButton.style.zIndex = "9999";
    navButton.style.top = "3.1rem";
    navButton.style.right = "2rem";
  } else {
    navButton.src = "/images/icon-hamburger.svg";
  }
};

const showMobileMenu = (isOpen) => {
  if (isOpen) {
    navigation.style.display = "block";
    mobileSiteLogo.style.display = "block";
    mobileSiteLogo.style.position = "absolute";
    mobileSiteLogo.style.zIndex = "9999";
    mobileSiteLogo.style.top = "3.1rem";
    mobileSiteLogo.style.left = "2rem";
    desktopSiteLogo.style.display = "none";
  } else {
    mobileSiteLogo.style.display = "none";
    desktopSiteLogo.style.display = "block";
    navButton.style.position = "static";
    navigation.style.display = "none";
  }
};

navButton.addEventListener("click", () => {
  isOpen = !isOpen;
  setButtonSrc(isOpen);
  showMobileMenu(isOpen);
});
