w3.includeHTML();

const isDark = () => document.documentElement.classList.contains("dark-theme");
const changeTheme = () => {
  document.documentElement.classList.toggle("dark-theme");
};

const changeContentBasedOnTheme = () => {
  const isDarkMode = isDark();

  const gatorImg = document.getElementById("gatorImg");
  const aliImg = document.getElementById("aliImg");
  const header = document.getElementById("name");
  const themeIcon = document.getElementById("themeIcon");

  if (isDarkMode) {
    aliImg.classList.add("hide-img");
    gatorImg.classList.remove("hide-img");
    header.innerText = "Gator";
    document.title = "Gator";
    themeIcon.innerHTML = feather.icons["sun"].toSvg();
  } else {
    aliImg.classList.remove("hide-img");
    gatorImg.classList.add("hide-img");
    header.innerText = "Ali Abdoli";
    document.title = "Ali Abdoli";
    themeIcon.innerHTML = feather.icons["moon"].toSvg();
  }
};

const toggleTheme = () => {
  changeTheme();
  changeContentBasedOnTheme();
};

feather.replace();

changeContentBasedOnTheme();
