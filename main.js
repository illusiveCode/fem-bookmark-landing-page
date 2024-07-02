const navButton = document.getElementById("navButton");
const desktopSiteLogo = document.getElementById("siteLogo");
const mobileSiteLogo = document.querySelector(".bookmark-logo-mobile");
const navigation = document.querySelector(".primary-navigation");
const navWrapper = document.querySelector(".nav-wrapper");
const featureImage = document.querySelector(".feature-img");
const faqQuestion = document.querySelectorAll(".question");
const faqAnswer = document.querySelector(".answer");

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

faqQuestion.forEach((question) => {
  const toggleAnswer = () => {
    const answer = question.nextElementSibling;
    answer.toggleAttribute("hidden");

    const arrowIcon = question.querySelector(".arrow-icon");
    if (answer.hasAttribute("hidden")) {
      arrowIcon.style.transform = "rotate(0deg)";
    } else {
      arrowIcon.style.transform = "rotate(180deg)";
    }
  };

  question.addEventListener("click", toggleAnswer);
  question.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      toggleAnswer();
    }
  });
});

// TODO map the feature links to different images when clicked on
const imageSrcMap = [
  {
    bookmarking: "1.svg",
    searching: "2.svg",
    sharing: "3.svg",
  },
];
